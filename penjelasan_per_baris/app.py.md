# Penjelasan baris demi baris — `app.py`

Catatan di bawah setiap potongan merujuk pada baris sumber dengan nomor yang sama. Kode asli tidak dimodifikasi; dokumen ini adalah bahan belajar, bukan file yang langsung dijalankan.

### Baris 1

````python
"""Paradoks D. Task — a small FastAPI shell for the static task manager.
````

**Catatan fungsi:** Membuka docstring modul dan memperkenalkan file ini sebagai lapisan FastAPI untuk aplikasi pengelola tugas statis.

### Baris 2

````python

````

**Catatan fungsi:** Baris kosong di dalam docstring; memisahkan ringkasan pembuka dari penjelasan tambahan. Tidak menjalankan instruksi Python.

### Baris 3

````python
Task data is intentionally stored in the visitor's browser (localStorage), so the
````

**Catatan fungsi:** Menjelaskan bahwa data tugas sengaja disimpan di browser pengunjung melalui localStorage, bukan di server.

### Baris 4

````python
application does not pretend that a serverless filesystem is a persistent DB.
````

**Catatan fungsi:** Menegaskan bahwa filesystem pada serverless tidak dianggap sebagai database persisten karena penyimpanannya dapat bersifat sementara.

### Baris 5

````python
"""
````

**Catatan fungsi:** Menutup docstring modul dengan tanda kutip tiga; teks di atasnya hanya dokumentasi dan tidak dieksekusi sebagai kode.

### Baris 6

````python
from pathlib import Path
````

**Catatan fungsi:** Mengimpor `Path` agar path direktori/file dapat dibangun secara portabel.

### Baris 7

````python
from typing import Final
````

**Catatan fungsi:** Mengimpor `Final`, penanda tipe untuk nilai yang dimaksudkan sebagai konstanta.

### Baris 8

````python

````

**Catatan fungsi:** Pemisah.

### Baris 9

````python
from fastapi import FastAPI
````

**Catatan fungsi:** Mengimpor `FastAPI`, kelas yang membentuk objek web/API.

### Baris 10

````python
from fastapi.responses import FileResponse, HTMLResponse
````

**Catatan fungsi:** Mengimpor dua jenis respons: `FileResponse` untuk file di disk dan `HTMLResponse` untuk HTML yang dibuat di kode.

### Baris 11

````python

````

**Catatan fungsi:** Pemisah.

### Baris 12

````python
BASE_DIR: Final[Path] = Path(__file__).resolve().parent
````

**Catatan fungsi:** `__file__` mengacu ke lokasi `app.py`; `resolve()` membuat path absolut dan `parent` mengambil foldernya. Hasilnya menjadi `BASE_DIR`.

### Baris 13

````python
PUBLIC_DIR: Final[Path] = BASE_DIR / "public"
````

**Catatan fungsi:** Membentuk path `public` di dalam folder proyek yang sama dengan `app.py`; semua aset UI diharapkan berada di situ.

### Baris 14

````python

````

**Catatan fungsi:** Baris kosong untuk memisahkan bagian konfigurasi/dokumentasi, tanpa mengubah perilaku program.

### Baris 15

````python
app = FastAPI(
````

**Catatan fungsi:** Membuat objek aplikasi bernama `app`, yang dicari server ASGI seperti Uvicorn/Vercel.

### Baris 16

````python
    title="Paradoks D. Task",
````

**Catatan fungsi:** Nama aplikasi yang ditampilkan di dokumentasi API.

### Baris 17

````python
    description="A calm, local-first task manager.",
````

**Catatan fungsi:** Deskripsi singkat aplikasi.

### Baris 18

````python
    version="1.0.0",
````

**Catatan fungsi:** Versi aplikasi `1.0.0`.

### Baris 19

````python
    docs_url="/api/docs",
````

**Catatan fungsi:** Memasang dokumentasi Swagger UI di `/api/docs`.

### Baris 20

````python
    redoc_url=None,
````

**Catatan fungsi:** `redoc_url=None` menonaktifkan dokumentasi ReDoc.

### Baris 21

````python
)
````

**Catatan fungsi:** Menutup pemanggilan konstruktor `FastAPI`.

### Baris 22

````python

````

**Catatan fungsi:** Baris kosong untuk memisahkan bagian konfigurasi/dokumentasi, tanpa mengubah perilaku program.

### Baris 23

````python
ASSETS: Final[dict[str, str]] = {
````

**Catatan fungsi:** Membuat konstanta dictionary `ASSETS`; nama berkas dipetakan ke MIME type.

### Baris 24

````python
    "index.html": "text/html; charset=utf-8",
````

**Catatan fungsi:** `index.html` dikirim sebagai HTML UTF-8.

### Baris 25

````python
    "style.css": "text/css; charset=utf-8",
````

**Catatan fungsi:** `style.css` dikirim sebagai CSS.

### Baris 26

````python
    "app.js": "text/javascript; charset=utf-8",
````

**Catatan fungsi:** `app.js` dikirim sebagai JavaScript.

### Baris 27

````python
    "favicon.svg": "image/svg+xml",
````

**Catatan fungsi:** `favicon.svg` dikirim sebagai SVG.

### Baris 28

````python
    "manifest.webmanifest": "application/manifest+json",
````

**Catatan fungsi:** Manifest dikirim dengan MIME type JSON manifest.

### Baris 29

````python
}
````

**Catatan fungsi:** Menutup dictionary. Daftar ini juga berfungsi sebagai allowlist nama file.

### Baris 30

````python

````

**Catatan fungsi:** Baris kosong untuk memisahkan bagian konfigurasi/dokumentasi, tanpa mengubah perilaku program.

### Baris 31

````python

````

**Catatan fungsi:** Baris kosong untuk memisahkan bagian konfigurasi/dokumentasi, tanpa mengubah perilaku program.

### Baris 32

````python
def send_asset(filename: str):
````

**Catatan fungsi:** Mendefinisikan `send_asset(filename)`, fungsi yang mengembalikan respons HTTP berisi aset.

### Baris 33

````python
    """Serve a known, bundled file; return a helpful page instead of crashing on startup."""
````

**Catatan fungsi:** Docstring merangkum tujuan: menyajikan file yang dikenal dan menampilkan pesan bantuan saat file hilang.

### Baris 34

````python
    path = PUBLIC_DIR / filename
````

**Catatan fungsi:** Menggabungkan `PUBLIC_DIR` dengan nama file untuk mendapatkan lokasi file.

### Baris 35

````python
    if filename not in ASSETS or not path.is_file():
````

**Catatan fungsi:** Memastikan nama file ada di allowlist dan path menunjuk file sungguhan. Pemeriksaan nama mencegah route ini dipakai untuk meminta nama file sembarangan.

### Baris 36

````python
        return HTMLResponse(
````

**Catatan fungsi:** Jika pemeriksaan gagal, mulai membuat respons HTML pengganti.

### Baris 37

````python
            """<!doctype html><html lang='id'><meta charset='utf-8'>
````

**Catatan fungsi:** Memulai dokumen HTML literal, menentukan doctype dan bahasa Indonesia.

### Baris 38

````python
            <meta name='viewport' content='width=device-width, initial-scale=1'>
````

**Catatan fungsi:** Menetapkan encoding UTF-8 dan viewport agar halaman error sesuai layar perangkat.

### Baris 39

````python
            <title>Asset belum ditemukan</title>
````

**Catatan fungsi:** Menetapkan judul halaman error.

### Baris 40

````python
            <body style='font:16px/1.6 system-ui;max-width:42rem;margin:12vh auto;padding:1.5rem;color:#27233a'>
````

**Catatan fungsi:** Memberikan styling inline sederhana supaya teks masih terbaca walau CSS utama tidak ada.

### Baris 41

````python
            <h1>File antarmuka belum tersedia</h1>
````

**Catatan fungsi:** Menampilkan heading bahwa file antarmuka belum tersedia.

### Baris 42

````python
            <p>Pastikan folder <code>public/</code> dan file asetnya ikut diunggah ke GitHub.
````

**Catatan fungsi:** Menjelaskan tindakan perbaikan: pastikan folder `public/` ikut diunggah ke GitHub lalu deploy ulang.

### Baris 43

````python
            Setelah itu, jalankan deployment ulang di Vercel.</p></body></html>""",
````

**Catatan fungsi:** Menjelaskan tindakan perbaikan: pastikan folder `public/` ikut diunggah ke GitHub lalu deploy ulang.

### Baris 44

````python
            status_code=503,
````

**Catatan fungsi:** Menutup markup HTML literal.

### Baris 45

````python
        )
````

**Catatan fungsi:** Mengembalikan kode HTTP `503` (`Service Unavailable`) untuk kondisi aset wajib belum tersedia.

### Baris 46

````python
    headers = {"Cache-Control": "no-cache"} if filename == "index.html" else None
````

**Catatan fungsi:** Hanya untuk `index.html`, menambahkan `Cache-Control: no-cache`, sehingga browser diminta memeriksa ulang halaman utama dan tidak terus memakai cache lama.

### Baris 47

````python
    return FileResponse(path, media_type=ASSETS[filename], headers=headers)
````

**Catatan fungsi:** Jika aset valid, mengembalikan `FileResponse` dengan MIME type yang sesuai dari `ASSETS`.

### Baris 48

````python

````

**Catatan fungsi:** Pemisah.

### Baris 49

````python

````

**Catatan fungsi:** Baris kosong untuk memisahkan bagian konfigurasi/dokumentasi, tanpa mengubah perilaku program.

### Baris 50

````python
@app.get("/", include_in_schema=False)
````

**Catatan fungsi:** Mendaftarkan GET `/`; `include_in_schema=False` membuat route halaman biasa tidak ditampilkan sebagai endpoint API dalam dokumentasi.

### Baris 51

````python
def home():
````

**Catatan fungsi:** Mendefinisikan handler `home`.

### Baris 52

````python
    return send_asset("index.html")
````

**Catatan fungsi:** Meminta `send_asset` mengirim `index.html`.

### Baris 53

````python

````

**Catatan fungsi:** Pemisah.

### Baris 54

````python

````

**Catatan fungsi:** Baris kosong untuk memisahkan bagian konfigurasi/dokumentasi, tanpa mengubah perilaku program.

### Baris 55

````python
@app.get("/index.html", include_in_schema=False)
````

**Catatan fungsi:** Mendaftarkan GET `/index.html`, alias eksplisit untuk halaman utama.

### Baris 56

````python
def index_file():
````

**Catatan fungsi:** Mendefinisikan handler `index_file`.

### Baris 57

````python
    return send_asset("index.html")
````

**Catatan fungsi:** Mengirim HTML melalui `send_asset`.

### Baris 58

````python

````

**Catatan fungsi:** Pemisah.

### Baris 59

````python

````

**Catatan fungsi:** Baris kosong untuk memisahkan bagian konfigurasi/dokumentasi, tanpa mengubah perilaku program.

### Baris 60

````python
@app.get("/style.css", include_in_schema=False)
````

**Catatan fungsi:** Mendaftarkan GET `/style.css`.

### Baris 61

````python
def stylesheet():
````

**Catatan fungsi:** Mendefinisikan handler stylesheet.

### Baris 62

````python
    return send_asset("style.css")
````

**Catatan fungsi:** Mengirim CSS.

### Baris 63

````python

````

**Catatan fungsi:** Pemisah.

### Baris 64

````python

````

**Catatan fungsi:** Baris kosong untuk memisahkan bagian konfigurasi/dokumentasi, tanpa mengubah perilaku program.

### Baris 65

````python
@app.get("/app.js", include_in_schema=False)
````

**Catatan fungsi:** Mendaftarkan GET `/app.js`.

### Baris 66

````python
def javascript():
````

**Catatan fungsi:** Mendefinisikan handler JavaScript.

### Baris 67

````python
    return send_asset("app.js")
````

**Catatan fungsi:** Mengirim JavaScript.

### Baris 68

````python

````

**Catatan fungsi:** Pemisah.

### Baris 69

````python

````

**Catatan fungsi:** Baris kosong untuk memisahkan bagian konfigurasi/dokumentasi, tanpa mengubah perilaku program.

### Baris 70

````python
@app.get("/favicon.svg", include_in_schema=False)
````

**Catatan fungsi:** Mendaftarkan GET `/favicon.svg`.

### Baris 71

````python
def favicon():
````

**Catatan fungsi:** Mendefinisikan handler favicon.

### Baris 72

````python
    return send_asset("favicon.svg")
````

**Catatan fungsi:** Mengirim gambar SVG.

### Baris 73

````python

````

**Catatan fungsi:** Pemisah.

### Baris 74

````python

````

**Catatan fungsi:** Baris kosong untuk memisahkan bagian konfigurasi/dokumentasi, tanpa mengubah perilaku program.

### Baris 75

````python
@app.get("/manifest.webmanifest", include_in_schema=False)
````

**Catatan fungsi:** Mendaftarkan GET `/manifest.webmanifest`.

### Baris 76

````python
def manifest():
````

**Catatan fungsi:** Mendefinisikan handler manifest.

### Baris 77

````python
    return send_asset("manifest.webmanifest")
````

**Catatan fungsi:** Mengirim manifest aplikasi web.

### Baris 78

````python

````

**Catatan fungsi:** Baris kosong untuk memisahkan bagian konfigurasi/dokumentasi, tanpa mengubah perilaku program.

### Baris 79

````python

````

**Catatan fungsi:** Baris kosong untuk memisahkan bagian konfigurasi/dokumentasi, tanpa mengubah perilaku program.

### Baris 80

````python
@app.get("/api/health", tags=["system"])
````

**Catatan fungsi:** Mendaftarkan GET `/api/health` dengan tag `system` agar dikelompokkan di dokumentasi API.

### Baris 81

````python
def health():
````

**Catatan fungsi:** Mendefinisikan handler `health`.

### Baris 82

````python
    """Basic deployment check. Does not expose environment variables or file paths."""
````

**Catatan fungsi:** Docstring menyatakan endpoint tidak mengungkap variabel lingkungan atau path internal.

### Baris 83

````python
    return {
````

**Catatan fungsi:** Memulai dictionary yang secara otomatis diubah FastAPI menjadi JSON.

### Baris 84

````python
        "status": "ok",
````

**Catatan fungsi:** Mengembalikan status teks `ok` sebagai tanda endpoint berhasil dijalankan.

### Baris 85

````python
        "app": "Paradoks D. Task",
````

**Catatan fungsi:** Mengembalikan nama aplikasi.

### Baris 86

````python
        "version": app.version,
````

**Catatan fungsi:** Mengembalikan versi yang diambil dari `app.version`, agar nilainya mengikuti konfigurasi aplikasi.

### Baris 87

````python
        "assets_available": all((PUBLIC_DIR / name).is_file() for name in ASSETS),
````

**Catatan fungsi:** Memeriksa apakah semua file yang terdaftar di `ASSETS` benar-benar ada di folder `public`.

### Baris 88

````python
        "storage": "browser-localStorage",
````

**Catatan fungsi:** Menjelaskan bahwa penyimpanan tugas ada di `browser-localStorage`.

### Baris 89

````python
    }
````

**Catatan fungsi:** Menutup dictionary/handler; hasilnya berupa JSON.
