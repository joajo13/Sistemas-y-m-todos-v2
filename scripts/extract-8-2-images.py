"""Lista las imágenes de los PDFs de 8.2 (sin guardarlas todavía).

Imprime una tabla con page, índice, extensión, dimensiones, tamaño en KB
para que podamos decidir cuáles vale la pena guardar.
"""
import fitz
from pathlib import Path

PDFS = [
    'pdfs/8-2-herramientas-procesos.pdf',
    'pdfs/8-2-presentacion.pdf',
]

OUTDIR = Path('scripts/_8-2-images')
OUTDIR.mkdir(exist_ok=True)

for path in PDFS:
    print(f'\n===== {path} =====')
    doc = fitz.open(path)
    for page_num, page in enumerate(doc, 1):
        for i, info in enumerate(page.get_images(full=True)):
            xref = info[0]
            base = doc.extract_image(xref)
            ext = base['ext']
            w, h = base['width'], base['height']
            kb = len(base['image']) / 1024
            name = Path(path).stem
            out = OUTDIR / f'{name}__pg{page_num:02d}_idx{i}.{ext}'
            out.write_bytes(base['image'])
            print(f'  pg={page_num:2d} idx={i} ext={ext:4s} {w}x{h:<5} {kb:6.1f}KB -> {out.name}')
    doc.close()
