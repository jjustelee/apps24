"""Extract official Annex 2 PDF. Requires pdfplumber; never estimates missing cells."""
import hashlib
import json
import re
import sys
from pathlib import Path
import pdfplumber

source = Path(sys.argv[1])
rows = []
at_ten_million = None
with pdfplumber.open(source) as pdf:
    for page in pdf.pages[1:]:
        for table in page.extract_tables():
            for cells in table:
                if len(cells) != 13:
                    continue
                cleaned = [(cell or "").strip().replace(",", "") for cell in cells]
                if re.fullmatch(r"\d+", cleaned[0]) and re.fullmatch(r"\d+", cleaned[1]):
                    assert all(re.fullmatch(r"\d+|-", cell) for cell in cleaned[2:]), cells
                    rows.append([int(cleaned[0])*1000, int(cleaned[1])*1000] + [0 if cell == "-" else int(cell) for cell in cleaned[2:]])
                elif cleaned[0] == "10000천원":
                    assert all(re.fullmatch(r"\d+", cell) for cell in cleaned[2:]), cells
                    at_ten_million = list(map(int, cleaned[2:]))
assert rows[0][:2] == [770000, 775000]
assert rows[-1][:2] == [9980000, 10000000]
assert all(a[1] == b[0] for a, b in zip(rows, rows[1:]))
assert len(rows) == len(set(row[0] for row in rows))
assert next(row for row in rows if row[0] == 3500000)[2:6] == [127220, 102220, 62460, 49340]
assert at_ten_million and at_ten_million[0] == 1507400
result = {"source": "https://www.law.go.kr/flDownload.do?flSeq=127235479&gubun=", "amended": "2024-02-29", "sha256": hashlib.sha256(source.read_bytes()).hexdigest(), "rows": rows, "atTenMillion": at_ten_million}
Path(sys.argv[2]).write_text(json.dumps(result, ensure_ascii=False, separators=(",", ":")) + "\n")
print(f"Imported {len(rows)} continuous intervals and 11 high-income base values.")
