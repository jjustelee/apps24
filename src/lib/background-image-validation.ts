export const MAX_BACKGROUND_IMAGE_BYTES = 10 * 1024 * 1024;

export function validateBackgroundImage(file: { type: string; size: number }): "imageType" | "imageSize" | null {
  if (!["image/jpeg", "image/png", "image/webp"].includes(file.type)) return "imageType";
  if (file.size > MAX_BACKGROUND_IMAGE_BYTES) return "imageSize";
  return null;
}
