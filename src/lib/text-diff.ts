export type DiffLine = {
  type: "match" | "added" | "removed" | "changed";
  left: string | null;
  right: string | null;
};

export function compareTextLines(original: string, modified: string): DiffLine[] | null {
  const left = original === "" ? [] : original.split(/\r\n|\n|\r/);
  const right = modified === "" ? [] : modified.split(/\r\n|\n|\r/);
  if (original.length + modified.length > 200_000 || (left.length + 1) * (right.length + 1) > 4_000_000) return null;
  const width = right.length + 1;
  const lengths = new Uint32Array((left.length + 1) * width);
  for (let i = left.length - 1; i >= 0; i--) {
    for (let j = right.length - 1; j >= 0; j--) {
      lengths[i * width + j] = left[i] === right[j]
        ? lengths[(i + 1) * width + j + 1] + 1
        : Math.max(lengths[(i + 1) * width + j], lengths[i * width + j + 1]);
    }
  }
  const rows: DiffLine[] = [];
  let i = 0;
  let j = 0;
  while (i < left.length || j < right.length) {
    if (i < left.length && j < right.length && left[i] === right[j]) {
      rows.push({ type: "match", left: left[i++], right: right[j++] });
      continue;
    }
    const removed: string[] = [];
    const added: string[] = [];
    while (i < left.length || j < right.length) {
      if (i < left.length && j < right.length && left[i] === right[j]) break;
      if (i < left.length && (j === right.length || lengths[(i + 1) * width + j] >= lengths[i * width + j + 1])) {
        removed.push(left[i++]);
      } else {
        added.push(right[j++]);
      }
    }
    for (let k = 0; k < Math.max(removed.length, added.length); k++) {
      const a = removed[k] ?? null;
      const b = added[k] ?? null;
      rows.push({ type: a === null ? "added" : b === null ? "removed" : "changed", left: a, right: b });
    }
  }
  return rows;
}
