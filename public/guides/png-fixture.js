// Run in a browser console. Creates an original opaque test pattern, not a photo.
(async () => {
  const canvas = document.createElement("canvas");
  canvas.width = 320;
  canvas.height = 200;
  const context = canvas.getContext("2d");
  const pixels = context.createImageData(320, 200);
  for (let y = 0; y < 200; y++) {
    for (let x = 0; x < 320; x++) pixels.data.set([x % 256, y % 256, (x + y) % 256, 255], (y * 320 + x) * 4);
  }
  context.putImageData(pixels, 0, 0);
  const results = [];
  for (const [type, quality] of [["image/png", 0.2], ["image/png", 0.8], ["image/webp", 0.8], ["image/jpeg", 0.8]]) {
    const blob = await new Promise(resolve => canvas.toBlob(resolve, type, quality));
    const hash = Array.from(new Uint8Array(await crypto.subtle.digest("SHA-256", await blob.arrayBuffer()))).map(byte => byte.toString(16).padStart(2, "0")).join("");
    results.push({ type: blob.type, quality, bytes: blob.size, sha256: hash });
  }
  console.table(results);
  return results;
})();
