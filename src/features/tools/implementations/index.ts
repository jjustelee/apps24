import dynamic from "next/dynamic";
import type { ComponentType } from "react";
import type { ToolDefinition } from "@/features/tools/types";

export type ToolRendererProps = {
  locale: string;
  tool: ToolDefinition;
  searchParams?: Record<string, string | string[] | undefined>;
  toolData?: unknown;
};

export type ToolRenderer = ComponentType<ToolRendererProps>;

export const toolRenderers: Record<string, ToolRenderer> = {
  ruler: dynamic(() => import("@/features/tools/implementations/ruler").then(m => m.RulerTool)),
  wordCounter: dynamic(() => import("@/features/tools/implementations/wordcounter").then(m => m.WordCounterTool)),
  countdown: dynamic(() => import("@/features/tools/implementations/countdown").then(m => m.CountdownTool)),
  digitalClock: dynamic(() => import("@/features/tools/implementations/digitalclock").then(m => m.DigitalClockTool)),
  screenLamp: dynamic(() => import("@/features/tools/implementations/screenlamp").then(m => m.ScreenLampTool)),
  barcodeGenerator: dynamic(() => import("@/features/tools/implementations/barcode-generator").then(m => m.BarcodeGeneratorTool)),
  dummyText: dynamic(() => import("@/features/tools/implementations/dummytext").then(m => m.DummyTextTool)),
};
