import type { ComponentType } from "react";
import type { ToolDefinition } from "@/features/tools/types";
import { BarcodeGeneratorTool } from "@/features/tools/implementations/barcode-generator";
import { CountdownTool } from "@/features/tools/implementations/countdown";
import { DigitalClockTool } from "@/features/tools/implementations/digitalclock";
import { DummyTextTool } from "@/features/tools/implementations/dummytext";
import { RulerTool } from "@/features/tools/implementations/ruler";
import { ScreenLampTool } from "@/features/tools/implementations/screenlamp";
import { WordCounterTool } from "@/features/tools/implementations/wordcounter";

export type ToolRendererProps = {
  locale: string;
  tool: ToolDefinition;
  searchParams?: Record<string, string | string[] | undefined>;
  toolData?: unknown;
};

export type ToolRenderer = ComponentType<ToolRendererProps>;

export const toolRenderers: Record<string, ToolRenderer> = {
  ruler: RulerTool,
  wordCounter: WordCounterTool,
  countdown: CountdownTool,
  digitalClock: DigitalClockTool,
  screenLamp: ScreenLampTool,
  barcodeGenerator: BarcodeGeneratorTool,
  dummyText: DummyTextTool,
};
