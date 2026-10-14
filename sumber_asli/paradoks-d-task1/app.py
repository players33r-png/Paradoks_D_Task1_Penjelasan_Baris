"""Paradoks D. Task — a small FastAPI shell for the static task manager.

Task data is intentionally stored in the visitor's browser (localStorage), so the
application does not pretend that a serverless filesystem is a persistent DB.
"""
from pathlib import Path
from typing import Final

from fastapi import FastAPI
from fastapi.responses import FileResponse, HTMLResponse

BASE_DIR: Final[Path] = Path(__file__).resolve().parent
PUBLIC_DIR: Final[Path] = BASE_DIR / "public"

app = FastAPI(
    title="Paradoks D. Task",
    description="A calm, local-first task manager.",
    version="1.0.0",
    docs_url="/api/docs",
    redoc_url=None,
)

ASSETS: Final[dict[str, str]] = {
    "index.html": "text/html; charset=utf-8",
    "style.css": "text/css; charset=utf-8",
    "app.js": "text/javascript; charset=utf-8",
    "favicon.svg": "image/svg+xml",
    "manifest.webmanifest": "application/manifest+json",
}


def send_asset(filename: str):
    """Serve a known, bundled file; return a helpful page instead of crashing on startup."""
    path = PUBLIC_DIR / filename
    if filename not in ASSETS or not path.is_file():
        return HTMLResponse(
            """<!doctype html><html lang='id'><meta charset='utf-8'>
            <meta name='viewport' content='width=device-width, initial-scale=1'>
            <title>Asset belum ditemukan</title>
            <body style='font:16px/1.6 system-ui;max-width:42rem;margin:12vh auto;padding:1.5rem;color:#27233a'>
            <h1>File antarmuka belum tersedia</h1>
            <p>Pastikan folder <code>public/</code> dan file asetnya ikut diunggah ke GitHub.
            Setelah itu, jalankan deployment ulang di Vercel.</p></body></html>""",
            status_code=503,
        )
    headers = {"Cache-Control": "no-cache"} if filename == "index.html" else None
    return FileResponse(path, media_type=ASSETS[filename], headers=headers)


@app.get("/", include_in_schema=False)
def home():
    return send_asset("index.html")


@app.get("/index.html", include_in_schema=False)
def index_file():
    return send_asset("index.html")


@app.get("/style.css", include_in_schema=False)
def stylesheet():
    return send_asset("style.css")


@app.get("/app.js", include_in_schema=False)
def javascript():
    return send_asset("app.js")


@app.get("/favicon.svg", include_in_schema=False)
def favicon():
    return send_asset("favicon.svg")


@app.get("/manifest.webmanifest", include_in_schema=False)
def manifest():
    return send_asset("manifest.webmanifest")


@app.get("/api/health", tags=["system"])
def health():
    """Basic deployment check. Does not expose environment variables or file paths."""
    return {
        "status": "ok",
        "app": "Paradoks D. Task",
        "version": app.version,
        "assets_available": all((PUBLIC_DIR / name).is_file() for name in ASSETS),
        "storage": "browser-localStorage",
    }
