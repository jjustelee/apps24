import type { Locale } from "@/lib/site";

export type ToolCategory =
  | "measurement"
  | "text"
  | "time"
  | "generator"
  | "display"
  | "utility";

export type ToolStatus = "stable" | "beta" | "hidden";

export interface ToolDefinition {
  id: string;
  slug: string;
  category: ToolCategory;
  titleKey: string;
  descriptionKey: string;
  icon: string;
  order: number;
  featured: boolean;
  status: ToolStatus;
  locales: Locale[];
  implementationKey: string;
}

