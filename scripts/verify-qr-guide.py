"""Verify digital QR samples; no claims about printed or camera-scanned codes.

Requires zxing-cpp==3.1.1 and Pillow==12.3.0 in an isolated environment.
Usage: python scripts/verify-qr-guide.py [http://127.0.0.1:3000]
"""
import base64
import io
import json
import sys
import urllib.request

from PIL import Image
import zxingcpp

base = sys.argv[1] if len(sys.argv) > 1 else "http://127.0.0.1:3000"
results = []
for text in ["https://example.org/apps24-qa", "Apps24: 한글 ✓"]:
    request = urllib.request.Request(
        base + "/api/generate-barcode",
        data=json.dumps({"text": text, "format": "qrcode"}).encode(),
        headers={"Content-Type": "application/json"},
    )
    with urllib.request.urlopen(request) as response:
        payload = json.load(response)
    image = Image.open(io.BytesIO(base64.b64decode(payload["image"].split(",", 1)[1]))).convert("RGB")
    decoded = zxingcpp.read_barcode(image)
    assert decoded is not None and decoded.text == text, "QR round-trip mismatch"
    dark = [(x, y) for y in range(image.height) for x in range(image.width)
            if max(image.getpixel((x, y))) < 128]
    bounds = [min(x for x, _ in dark), min(y for _, y in dark),
              max(x for x, _ in dark), max(y for _, y in dark)]
    margins = [bounds[0], bounds[1], image.width - 1 - bounds[2], image.height - 1 - bounds[3]]
    assert min(margins) >= 24, "Expected four modules at six pixels per module"
    results.append({"input": text, "decoded": decoded.text,
                    "size": [image.width, image.height], "marginsPx": margins})
print(json.dumps({"decoder": "ZXing-C++ 3.1.1", "results": results}, ensure_ascii=False, indent=2))
