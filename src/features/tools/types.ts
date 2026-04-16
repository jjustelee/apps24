import type { Locale } from "@/lib/site";

export type ToolCategory =
  | "measurement"
  | "text"
  | "time"
  | "generator"
  | "display"
  | "utility"
  | "image"
  | "security"
  | "network";

export type ToolStatus = "stable" | "beta" | "hidden";

export interface ToolDefinition {
  id: string;
  slug: string;
  category: ToolCategory;
  titleKey: string;
  descriptionKey: string;
  keywords: string[];
  accentColor: string;
  icon: string;
  order: number;
  featured: boolean;
  status: ToolStatus;
  locales: Locale[];
  implementationKey: string;
}

