"""Round-trip the Wi-Fi and contact QR samples of the qr-wifi-vcard-format guide.

Digital images only; no claims about printed or camera-scanned codes.
Requires zxing-cpp==3.1.1 and Pillow==12.3.0 in an isolated environment.
Usage: python scripts/verify-qr-formats.py [http://127.0.0.1:3000] > public/guides/qr-format-results.json
"""
import base64
import io
import json
import sys
import urllib.request

from PIL import Image
import zxingcpp

SAMPLES = [
    ("wifi", "WIFI:T:WPA;S:Cafe Guest;P:sunny-2026;;"),
    ("wifi-hidden", "WIFI:T:WPA;S:Office;P:sunny-2026;H:true;;"),
    ("wifi-escaped", "WIFI:T:WPA;S:Cafe\\;Guest;P:pa\\:ss\\\\word;;"),
    ("vcard", "BEGIN:VCARD\nVERSION:3.0\nN:Kim;Mina\nFN:Mina Kim\nTEL:+82-10-0000-0000\nEMAIL:mina@example.com\nEND:VCARD"),
]

base = sys.argv[1] if len(sys.argv) > 1 else "http://127.0.0.1:3000"
results = []
for name, text in SAMPLES:
    request = urllib.request.Request(
        base + "/api/generate-barcode",
        data=json.dumps({"text": text, "format": "qrcode"}).encode(),
        headers={"Content-Type": "application/json"},
    )
    with urllib.request.urlopen(request) as response:
        payload = json.load(response)
    image = Image.open(io.BytesIO(base64.b64decode(payload["image"].split(",", 1)[1]))).convert("RGB")
    decoded = zxingcpp.read_barcode(image)
    assert decoded is not None and decoded.text == text, f"QR round-trip mismatch: {name}"
    # 6 px per module and a 24 px quiet zone on every side (scale 3, padding 8).
    modules = (image.width - 48) // 6
    assert (image.width - 48) % 6 == 0 and image.width == image.height
    results.append({"sample": name, "input": text, "decoded": decoded.text, "characters": len(text),
                    "imagePx": image.width, "modules": modules})
print(json.dumps({"decoder": "ZXing-C++ 3.1.1", "scope": "digital PNG only; no printed or camera scans",
                  "results": results}, ensure_ascii=False, indent=2))
