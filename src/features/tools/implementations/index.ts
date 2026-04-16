import dynamic from "next/dynamic";
import type { ComponentType } from "react";
import type { ToolDefinition } from "@/features/tools/types";

export type ToolRendererProps = {
  locale: string;
  tool: ToolDefinition;
  searchParams?: Record<string, string | string[] | undefined>;
  toolData?: unknown;
  commonText: any;
  toolText?: any;
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
  imageCompressor: dynamic(() => import("@/features/tools/implementations/image-compressor").then(m => m.ImageCompressorTool)),
  caseConverter: dynamic(() => import("@/features/tools/implementations/case-converter").then(m => m.CaseConverterTool)),
  jsonFormatter: dynamic(() => import("@/features/tools/implementations/json-formatter").then(m => m.JsonFormatterTool)),
  passwordGenerator: dynamic(() => import("@/features/tools/implementations/password-generator").then(m => m.PasswordGeneratorTool)),
  textDiffChecker: dynamic(() => import("@/features/tools/implementations/text-diff-checker").then(m => m.TextDiffCheckerTool)),
  base64Encoder: dynamic(() => import("@/features/tools/implementations/base64-converter").then(m => m.Base64ConverterTool)),
  colorConverter: dynamic(() => import("@/features/tools/implementations/color-converter").then(m => m.ColorConverterTool)),
  unitConverter: dynamic(() => import("@/features/tools/implementations/unit-converter").then(m => m.UnitConverterTool)),
  percentageCalculator: dynamic(() => import("@/features/tools/implementations/percentage-calculator").then(m => m.PercentageCalculatorTool)),
  ipLookup: dynamic(() => import("@/features/tools/implementations/ip-lookup").then(m => m.IpLookupTool)),
};
