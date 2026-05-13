"""Extrae texto plano de los PDFs de la unidad 8.2 a archivos .txt."""
import fitz
from pathlib import Path

PDFS = [
    'pdfs/8-2-herramientas-procesos.pdf',
    'pdfs/8-2-presentacion.pdf',
]

OUTDIR = Path('scripts/_8-2-text')
OUTDIR.mkdir(exist_ok=True)

for path in PDFS:
    doc = fitz.open(path)
    name = Path(path).stem
    chunks = [f'===== {path} ({len(doc)} pages) =====\n']
    for i, page in enumerate(doc):
        chunks.append(f'\n--- pg {i+1} ---\n')
        chunks.append(page.get_text())
    out_path = OUTDIR / f'{name}.txt'
    out_path.write_text(''.join(chunks), encoding='utf-8')
    print(f'wrote {out_path} ({len(doc)} pages)')
    doc.close()
