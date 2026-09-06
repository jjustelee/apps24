export const CARD_WIDTH_CM = 8.56;
export const CARD_ASPECT_RATIO = 85.6 / 53.98;
export const DEFAULT_CARD_PIXELS = 240;

export function pixelsPerCentimeter(cardPixels: number) {
  if (!Number.isFinite(cardPixels) || cardPixels < 80 || cardPixels > 1000) {
    throw new RangeError("Invalid calibration width");
  }
  return cardPixels / CARD_WIDTH_CM;
}

export function rulerTicks(origin: number, length: number, pixelsPerUnit: number) {
  const step = pixelsPerUnit / 10;
  const first = Math.ceil(-origin / step);
  const last = Math.floor((length - origin) / step);
  return Array.from({ length: Math.max(0, last - first + 1) }, (_, offset) => {
    const index = first + offset;
    return { index, position: origin + index * step };
  });
}
