"""
Extrae las 8 imágenes con valor académico del PDF de presentación al directorio images/diagrams/.
Las imágenes decorativas (stock photos en p.5, p.6, p.16) se descartan.
Usa PyMuPDF (fitz). Requiere: pip install pymupdf
"""
import fitz
import os
from pathlib import Path

PDF_PATH = Path(__file__).parent.parent / "pdfs" / "presentacion.pdf"
OUT_DIR = Path(__file__).parent.parent / "images" / "diagrams"
OUT_DIR.mkdir(parents=True, exist_ok=True)

# Mapping: (página 1-indexed, índice de imagen dentro de la página 0-indexed, nombre de salida)
TARGETS = [
    (4,  1, "embudo-fuentes"),
    (7,  1, "esfuerzo-duracion-1"),
    (8,  1, "esfuerzo-duracion-2"),
    (9,  1, "proceso-fuentes"),
    (10, 1, "ciclo-de-vida"),
    (11, 1, "pm-wheel"),
    (15, 1, "smart-cards"),
    (18, 1, "project-charter-illustration"),
]

def main():
    doc = fitz.open(PDF_PATH)
    for page_num, img_idx, name in TARGETS:
        page = doc[page_num - 1]
        images = page.get_images(full=True)
        if img_idx >= len(images):
            print(f"WARN: page {page_num} has no image at index {img_idx}")
            continue
        xref = images[img_idx][0]
        base = doc.extract_image(xref)
        ext = base["ext"]
        out_path = OUT_DIR / f"{name}.{ext}"
        out_path.write_bytes(base["image"])
        print(f"OK: {out_path.name} ({base['width']}x{base['height']})")
    doc.close()

if __name__ == "__main__":
    main()
