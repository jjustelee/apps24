/// <reference lib="webworker" />

import { AutoModel, AutoProcessor, RawImage } from "@huggingface/transformers";

const PRIMARY_MODEL_ID = "onnx-community/BiRefNet_512x512-ONNX";
const MAX_INFERENCE_EDGE = 512;

type BackgroundRemovalWorkerRequest = {
  type: "remove-background";
  runId: number;
  file: Blob;
};

type BackgroundRemovalWorkerResponse =
  | {
      type: "ready";
      runId: number;
    }
  | {
      type: "result";
      runId: number;
      blob: Blob;
    }
  | {
      type: "error";
      runId: number;
      message: string;
    };

type BackgroundRemovalPipeline = {
  model: Awaited<ReturnType<typeof AutoModel.from_pretrained>>;
  processor: Awaited<ReturnType<typeof AutoProcessor.from_pretrained>>;
};

declare const self: DedicatedWorkerGlobalScope;

let pipelinePromise: Promise<BackgroundRemovalPipeline> | null = null;

async function loadPipeline() {
  if (!pipelinePromise) {
    pipelinePromise = (async () => {
      const [model, processor] = await Promise.all([
        AutoModel.from_pretrained(PRIMARY_MODEL_ID, {
          device: "wasm",
          dtype: "fp16",
        }),
        AutoProcessor.from_pretrained(PRIMARY_MODEL_ID),
      ]);

      return { model, processor };
    })();
  }

  return pipelinePromise;
}

self.addEventListener("message", async (event: MessageEvent<BackgroundRemovalWorkerRequest>) => {
  if (event.data.type !== "remove-background") return;

  const { runId, file } = event.data;

  try {
    const { model, processor } = await loadPipeline();
    self.postMessage({ type: "ready", runId } satisfies BackgroundRemovalWorkerResponse);

    const image = await RawImage.fromBlob(file);
    const largestEdge = Math.max(image.width, image.height);
    const inferenceImage =
      largestEdge > MAX_INFERENCE_EDGE
        ? await image.clone().resize(
            Math.round((image.width / largestEdge) * MAX_INFERENCE_EDGE),
            Math.round((image.height / largestEdge) * MAX_INFERENCE_EDGE),
          )
        : image;

    const { pixel_values } = await processor(inferenceImage);
    const { output_image } = await model({ input_image: pixel_values });
    const mask = await RawImage.fromTensor(output_image[0].sigmoid().mul(255).to("uint8")).resize(image.width, image.height);
    const result = image.clone().rgba().putAlpha(mask);
    const blob = await result.toBlob("image/png");

    self.postMessage({ type: "result", runId, blob } satisfies BackgroundRemovalWorkerResponse);
  } catch (error: unknown) {
    pipelinePromise = null;

    self.postMessage({
      type: "error",
      runId,
      message: error instanceof Error ? error.message : "Background removal failed.",
    } satisfies BackgroundRemovalWorkerResponse);
  }
});

export {};
