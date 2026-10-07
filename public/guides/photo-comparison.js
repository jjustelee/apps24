// Run on Apps24 in a browser console. Mirrors the image compressor's canvas settings.
(async () => {
  const source = await fetch("/guides/earthrise-nasa.jpg").then(response => response.blob());
  const image = new Image();
  const url = URL.createObjectURL(source);
  try {
    image.src = url;
    await image.decode();
    const results = [];
    for (const [format, quality, scale] of [
      ["image/png", 0.8, 1], ["image/jpeg", 0.8, 1], ["image/jpeg", 0.6, 1],
      ["image/webp", 0.8, 1], ["image/webp", 0.6, 1], ["image/webp", 0.8, 0.5],
    ]) {
      const canvas = document.createElement("canvas");
      canvas.width = Math.max(1, Math.round(image.naturalWidth * scale));
      canvas.height = Math.max(1, Math.round(canvas.width * image.naturalHeight / image.naturalWidth));
      const context = canvas.getContext("2d");
      context.imageSmoothingEnabled = true;
      context.imageSmoothingQuality = "high";
      if (format === "image/jpeg") {
        context.fillStyle = "#ffffff";
        context.fillRect(0, 0, canvas.width, canvas.height);
      }
      context.drawImage(image, 0, 0, canvas.width, canvas.height);
      const blob = await new Promise(resolve => canvas.toBlob(resolve, format, quality));
      if (!blob || blob.type !== format) throw new Error("Unsupported encoder");
      const sha256 = Array.from(new Uint8Array(await crypto.subtle.digest("SHA-256", await blob.arrayBuffer())))
        .map(byte => byte.toString(16).padStart(2, "0")).join("");
      results.push({ format, quality, scale, width: canvas.width, height: canvas.height, bytes: blob.size, sha256 });
    }
    console.table(results);
    return { userAgent: navigator.userAgent, sourceBytes: source.size, results };
  } finally {
    URL.revokeObjectURL(url);
  }
})();
