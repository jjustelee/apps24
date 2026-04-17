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

export type ToolCategoryGroup =
  | "write-text-tools"
  | "images-pdf-tools"
  | "code-data-tools"
  | "convert-calculate-tools"
  | "generator-tools"
  | "time-display-tools";

export type ToolStatus = "stable" | "beta" | "hidden";

export interface ToolDefinition {
  id: string;
  slug: string;
  category: ToolCategory;
  categoryGroup: ToolCategoryGroup;
  titleKey: string;
  descriptionKey: string;
  keywords: string[];
  tags: string[];
  accentColor: string;
  icon: string;
  order: number;
  featured: boolean;
  status: ToolStatus;
  locales: Locale[];
  implementationKey: string;
}
