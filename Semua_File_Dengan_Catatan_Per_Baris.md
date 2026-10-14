# Semua file Paradoks D. Task dengan catatan fungsi per baris

Dokumen ini dibuat dari ZIP proyek yang diberikan. Setiap baris sumber ditulis ulang secara persis dalam potongan kode kecil, dan tepat di bawahnya terdapat **Catatan fungsi** dalam bahasa Indonesia. File sumber asli juga disertakan utuh pada folder `sumber_asli/paradoks-d-task1/`.

## Cara menggunakan

1. Baca dokumen di `penjelasan_per_baris/` sesuai file yang sedang dipelajari.
2. Cocokkan nomor baris dengan file sumber asli yang ada di folder `sumber_asli/`.
3. Jangan menyalin dokumen penjelasan `.md` menjadi file program; dokumen itu berisi komentar pembelajaran dan potongan kode per baris. Jalankan file sumber asli bila ingin menguji aplikasinya.

## File yang dijelaskan

- `app.py` → `penjelasan_per_baris/app.py.md`
- `.env.example` → `penjelasan_per_baris/.env.example.md`
- `.gitignore` → `penjelasan_per_baris/.gitignore.md`
- `.python-version` → `penjelasan_per_baris/.python-version.md`
- `LICENSE` → `penjelasan_per_baris/LICENSE.md`
- `README.md` → `penjelasan_per_baris/README.md.md`
- `requirements.txt` → `penjelasan_per_baris/requirements.txt.md`
- `vercel.json` → `penjelasan_per_baris/vercel.json.md`
- `public/app.js` → `penjelasan_per_baris/public__app.js.md`
- `public/favicon.svg` → `penjelasan_per_baris/public__favicon.svg.md`
- `public/index.html` → `penjelasan_per_baris/public__index.html.md`
- `public/manifest.webmanifest` → `penjelasan_per_baris/public__manifest.webmanifest.md`
- `public/style.css` → `penjelasan_per_baris/public__style.css.md`

**Jumlah baris sumber yang dijelaskan: 1296.** Baris kosong pun dicatat sebagai pemisah format. Folder `.git/` pada salinan sumber dipertahankan sebagai metadata kontrol versi; objek internal Git bukan bagian dari kode aplikasi sehingga tidak dijelaskan seolah-olah itu kode aplikasi.

## Catatan tentang desain aplikasi

Aplikasi ini memakai FastAPI sebagai lapisan server untuk menyajikan aset antarmuka. Logika tugas berjalan di browser melalui JavaScript, dan daftar tugas disimpan pada `localStorage` browser. Jadi, data tidak otomatis tersinkron ke perangkat lain dan tidak disimpan pada database backend.

---

# Rincian seluruh file

---

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

---

# Penjelasan baris demi baris — `.env.example`

Catatan di bawah setiap potongan merujuk pada baris sumber dengan nomor yang sama. Kode asli tidak dimodifikasi; dokumen ini adalah bahan belajar, bukan file yang langsung dijalankan.

### Baris 1

````text
# No environment variables are required for the default local-first app.
````

**Catatan fungsi:** Komentar yang menyatakan bahwa konfigurasi bawaan tidak membutuhkan variabel lingkungan; file ini hanya contoh dan bukan rahasia.

---

# Penjelasan baris demi baris — `.gitignore`

Catatan di bawah setiap potongan merujuk pada baris sumber dengan nomor yang sama. Kode asli tidak dimodifikasi; dokumen ini adalah bahan belajar, bukan file yang langsung dijalankan.

### Baris 1

````text
# Python
````

**Catatan fungsi:** Komentar pengelompokan pada `.gitignore`; menjelaskan kategori file yang akan dikecualikan dari Git.

### Baris 2

````text
__pycache__/
````

**Catatan fungsi:** Pola `__pycache__/` membuat Git mengabaikan file/folder yang cocok, biasanya artefak lokal atau file sensitif.

### Baris 3

````text
*.py[cod]
````

**Catatan fungsi:** Pola `*.py[cod]` membuat Git mengabaikan file/folder yang cocok, biasanya artefak lokal atau file sensitif.

### Baris 4

````text
*.pyo
````

**Catatan fungsi:** Pola `*.pyo` membuat Git mengabaikan file/folder yang cocok, biasanya artefak lokal atau file sensitif.

### Baris 5

````text
.venv/
````

**Catatan fungsi:** Pola `.venv/` membuat Git mengabaikan file/folder yang cocok, biasanya artefak lokal atau file sensitif.

### Baris 6

````text
venv/
````

**Catatan fungsi:** Pola `venv/` membuat Git mengabaikan file/folder yang cocok, biasanya artefak lokal atau file sensitif.

### Baris 7

````text
env/
````

**Catatan fungsi:** Pola `env/` membuat Git mengabaikan file/folder yang cocok, biasanya artefak lokal atau file sensitif.

### Baris 8

````text

````

**Catatan fungsi:** Baris kosong untuk memisahkan bagian konfigurasi/dokumentasi, tanpa mengubah perilaku program.

### Baris 9

````text
# Local environment / secrets
````

**Catatan fungsi:** Komentar pengelompokan pada `.gitignore`; menjelaskan kategori file yang akan dikecualikan dari Git.

### Baris 10

````text
.env
````

**Catatan fungsi:** Pola `.env` membuat Git mengabaikan file/folder yang cocok, biasanya artefak lokal atau file sensitif.

### Baris 11

````text
.env.*
````

**Catatan fungsi:** Pola `.env.*` membuat Git mengabaikan file/folder yang cocok, biasanya artefak lokal atau file sensitif.

### Baris 12

````text
!.env.example
````

**Catatan fungsi:** Pengecualian: walaupun pola `.env.*` di atas mengabaikan file env, `.env.example` tetap boleh dimasukkan ke repository.

### Baris 13

````text

````

**Catatan fungsi:** Baris kosong untuk memisahkan bagian konfigurasi/dokumentasi, tanpa mengubah perilaku program.

### Baris 14

````text
# Editors / operating systems
````

**Catatan fungsi:** Komentar pengelompokan pada `.gitignore`; menjelaskan kategori file yang akan dikecualikan dari Git.

### Baris 15

````text
.vscode/
````

**Catatan fungsi:** Pola `.vscode/` membuat Git mengabaikan file/folder yang cocok, biasanya artefak lokal atau file sensitif.

### Baris 16

````text
.idea/
````

**Catatan fungsi:** Pola `.idea/` membuat Git mengabaikan file/folder yang cocok, biasanya artefak lokal atau file sensitif.

### Baris 17

````text
.DS_Store
````

**Catatan fungsi:** Pola `.DS_Store` membuat Git mengabaikan file/folder yang cocok, biasanya artefak lokal atau file sensitif.

### Baris 18

````text
Thumbs.db
````

**Catatan fungsi:** Pola `Thumbs.db` menentukan file yang tidak perlu dimasukkan ke repository Git.

### Baris 19

````text

````

**Catatan fungsi:** Baris kosong untuk memisahkan bagian konfigurasi/dokumentasi, tanpa mengubah perilaku program.

### Baris 20

````text
# Test / build artifacts
````

**Catatan fungsi:** Komentar pengelompokan pada `.gitignore`; menjelaskan kategori file yang akan dikecualikan dari Git.

### Baris 21

````text
.pytest_cache/
````

**Catatan fungsi:** Pola `.pytest_cache/` membuat Git mengabaikan file/folder yang cocok, biasanya artefak lokal atau file sensitif.

### Baris 22

````text
.coverage
````

**Catatan fungsi:** Pola `.coverage` membuat Git mengabaikan file/folder yang cocok, biasanya artefak lokal atau file sensitif.

### Baris 23

````text
htmlcov/
````

**Catatan fungsi:** Pola `htmlcov/` membuat Git mengabaikan file/folder yang cocok, biasanya artefak lokal atau file sensitif.

### Baris 24

````text
dist/
````

**Catatan fungsi:** Pola `dist/` membuat Git mengabaikan file/folder yang cocok, biasanya artefak lokal atau file sensitif.

### Baris 25

````text
build/
````

**Catatan fungsi:** Pola `build/` membuat Git mengabaikan file/folder yang cocok, biasanya artefak lokal atau file sensitif.

---

# Penjelasan baris demi baris — `.python-version`

Catatan di bawah setiap potongan merujuk pada baris sumber dengan nomor yang sama. Kode asli tidak dimodifikasi; dokumen ini adalah bahan belajar, bukan file yang langsung dijalankan.

### Baris 1

````text
3.12
````

**Catatan fungsi:** Menentukan versi runtime Python yang dipilih untuk lingkungan/deployment, yaitu 3.12.

---

# Penjelasan baris demi baris — `LICENSE`

Catatan di bawah setiap potongan merujuk pada baris sumber dengan nomor yang sama. Kode asli tidak dimodifikasi; dokumen ini adalah bahan belajar, bukan file yang langsung dijalankan.

### Baris 1

````text
MIT License
````

**Catatan fungsi:** Menyebut bahwa proyek memakai lisensi MIT.

### Baris 2

````text

````

**Catatan fungsi:** Baris kosong untuk memisahkan bagian konfigurasi/dokumentasi, tanpa mengubah perilaku program.

### Baris 3

````text
Copyright (c) 2026 Paradoks D. Task contributors
````

**Catatan fungsi:** Mencantumkan tahun dan pemegang hak cipta proyek.

### Baris 4

````text

````

**Catatan fungsi:** Baris kosong untuk memisahkan bagian konfigurasi/dokumentasi, tanpa mengubah perilaku program.

### Baris 5

````text
Permission is hereby granted, free of charge, to any person obtaining a copy
````

**Catatan fungsi:** Bagian pemberian izin MIT: pengguna dapat menggunakan, menyalin, memodifikasi, menggabungkan, menerbitkan, mendistribusikan, memberi sublisensi, dan menjual salinan perangkat lunak dengan syarat lisensi dipatuhi.

### Baris 6

````text
of this software and associated documentation files (the "Software"), to deal
````

**Catatan fungsi:** Bagian pemberian izin MIT: pengguna dapat menggunakan, menyalin, memodifikasi, menggabungkan, menerbitkan, mendistribusikan, memberi sublisensi, dan menjual salinan perangkat lunak dengan syarat lisensi dipatuhi.

### Baris 7

````text
in the Software without restriction, including without limitation the rights
````

**Catatan fungsi:** Bagian pemberian izin MIT: pengguna dapat menggunakan, menyalin, memodifikasi, menggabungkan, menerbitkan, mendistribusikan, memberi sublisensi, dan menjual salinan perangkat lunak dengan syarat lisensi dipatuhi.

### Baris 8

````text
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
````

**Catatan fungsi:** Bagian pemberian izin MIT: pengguna dapat menggunakan, menyalin, memodifikasi, menggabungkan, menerbitkan, mendistribusikan, memberi sublisensi, dan menjual salinan perangkat lunak dengan syarat lisensi dipatuhi.

### Baris 9

````text
copies of the Software, and to permit persons to whom the Software is
````

**Catatan fungsi:** Bagian pemberian izin MIT: pengguna dapat menggunakan, menyalin, memodifikasi, menggabungkan, menerbitkan, mendistribusikan, memberi sublisensi, dan menjual salinan perangkat lunak dengan syarat lisensi dipatuhi.

### Baris 10

````text
furnished to do so, subject to the following conditions:
````

**Catatan fungsi:** Bagian pemberian izin MIT: pengguna dapat menggunakan, menyalin, memodifikasi, menggabungkan, menerbitkan, mendistribusikan, memberi sublisensi, dan menjual salinan perangkat lunak dengan syarat lisensi dipatuhi.

### Baris 11

````text

````

**Catatan fungsi:** Baris kosong untuk memisahkan bagian konfigurasi/dokumentasi, tanpa mengubah perilaku program.

### Baris 12

````text
The above copyright notice and this permission notice shall be included in all
````

**Catatan fungsi:** Mensyaratkan pemberitahuan hak cipta dan izin lisensi tetap disertakan pada salinan atau bagian penting perangkat lunak.

### Baris 13

````text
copies or substantial portions of the Software.
````

**Catatan fungsi:** Mensyaratkan pemberitahuan hak cipta dan izin lisensi tetap disertakan pada salinan atau bagian penting perangkat lunak.

### Baris 14

````text

````

**Catatan fungsi:** Baris kosong untuk memisahkan bagian konfigurasi/dokumentasi, tanpa mengubah perilaku program.

### Baris 15

````text
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
````

**Catatan fungsi:** Pernyataan “apa adanya”: penulis tidak memberi jaminan tersurat/tersirat dan membatasi tanggung jawab sejauh diizinkan teks lisensi.

### Baris 16

````text
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
````

**Catatan fungsi:** Pernyataan “apa adanya”: penulis tidak memberi jaminan tersurat/tersirat dan membatasi tanggung jawab sejauh diizinkan teks lisensi.

### Baris 17

````text
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
````

**Catatan fungsi:** Pernyataan “apa adanya”: penulis tidak memberi jaminan tersurat/tersirat dan membatasi tanggung jawab sejauh diizinkan teks lisensi.

### Baris 18

````text
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
````

**Catatan fungsi:** Pernyataan “apa adanya”: penulis tidak memberi jaminan tersurat/tersirat dan membatasi tanggung jawab sejauh diizinkan teks lisensi.

### Baris 19

````text
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
````

**Catatan fungsi:** Pernyataan “apa adanya”: penulis tidak memberi jaminan tersurat/tersirat dan membatasi tanggung jawab sejauh diizinkan teks lisensi.

### Baris 20

````text
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
````

**Catatan fungsi:** Pernyataan “apa adanya”: penulis tidak memberi jaminan tersurat/tersirat dan membatasi tanggung jawab sejauh diizinkan teks lisensi.

### Baris 21

````text
SOFTWARE.
````

**Catatan fungsi:** Pernyataan “apa adanya”: penulis tidak memberi jaminan tersurat/tersirat dan membatasi tanggung jawab sejauh diizinkan teks lisensi.

---

# Penjelasan baris demi baris — `README.md`

Catatan di bawah setiap potongan merujuk pada baris sumber dengan nomor yang sama. Kode asli tidak dimodifikasi; dokumen ini adalah bahan belajar, bukan file yang langsung dijalankan.

### Baris 1

````markdown
# Paradoks D. Task
````

**Catatan fungsi:** Judul Markdown tingkat 1 yang membuka bagian dokumentasi: “Paradoks D. Task”.

### Baris 2

````markdown

````

**Catatan fungsi:** Baris kosong untuk memisahkan bagian konfigurasi/dokumentasi, tanpa mengubah perilaku program.

### Baris 3

````markdown
Task manager pribadi dengan antarmuka gelap, aksen lime dan violet, serta suasana editorial yang terinspirasi palet warna musik tanpa menyalin sampul album tertentu. Dibuat menggunakan **Python + FastAPI** untuk server aplikasi dan HTML/CSS/JavaScript vanilla untuk antarmuka.
````

**Catatan fungsi:** Paragraf dokumentasi yang memberi konteks, menjelaskan cara pakai, persyaratan, atau perilaku aplikasi.

### Baris 4

````markdown

````

**Catatan fungsi:** Baris kosong untuk memisahkan bagian konfigurasi/dokumentasi, tanpa mengubah perilaku program.

### Baris 5

````markdown
## Fitur
````

**Catatan fungsi:** Judul Markdown tingkat 2 yang membuka bagian dokumentasi: “Fitur”.

### Baris 6

````markdown

````

**Catatan fungsi:** Baris kosong untuk memisahkan bagian konfigurasi/dokumentasi, tanpa mengubah perilaku program.

### Baris 7

````markdown
- Tambah, edit, hapus, dan tandai tugas selesai.
````

**Catatan fungsi:** Butir daftar README yang merangkum fitur, syarat, file, atau langkah troubleshooting.

### Baris 8

````markdown
- Catatan, kategori, tingkat prioritas, serta tanggal target.
````

**Catatan fungsi:** Butir daftar README yang merangkum fitur, syarat, file, atau langkah troubleshooting.

### Baris 9

````markdown
- Filter Semua / Belum selesai / Tuntas, tampilan Hari ini dan Mendatang.
````

**Catatan fungsi:** Butir daftar README yang merangkum fitur, syarat, file, atau langkah troubleshooting.

### Baris 10

````markdown
- Pencarian tugas dan pengurutan.
````

**Catatan fungsi:** Butir daftar README yang merangkum fitur, syarat, file, atau langkah troubleshooting.

### Baris 11

````markdown
- Ringkasan progres, tema gelap/terang, dan mode fokus.
````

**Catatan fungsi:** Butir daftar README yang merangkum fitur, syarat, file, atau langkah troubleshooting.

### Baris 12

````markdown
- Ekspor dan impor cadangan JSON.
````

**Catatan fungsi:** Butir daftar README yang merangkum fitur, syarat, file, atau langkah troubleshooting.

### Baris 13

````markdown
- Desain responsif untuk desktop dan ponsel.
````

**Catatan fungsi:** Butir daftar README yang merangkum fitur, syarat, file, atau langkah troubleshooting.

### Baris 14

````markdown
- Tidak ada login/logout dan tidak memerlukan API key.
````

**Catatan fungsi:** Butir daftar README yang merangkum fitur, syarat, file, atau langkah troubleshooting.

### Baris 15

````markdown

````

**Catatan fungsi:** Baris kosong untuk memisahkan bagian konfigurasi/dokumentasi, tanpa mengubah perilaku program.

### Baris 16

````markdown
## Penting tentang penyimpanan
````

**Catatan fungsi:** Judul Markdown tingkat 2 yang membuka bagian dokumentasi: “Penting tentang penyimpanan”.

### Baris 17

````markdown

````

**Catatan fungsi:** Baris kosong untuk memisahkan bagian konfigurasi/dokumentasi, tanpa mengubah perilaku program.

### Baris 18

````markdown
Tugas disimpan di **localStorage browser yang sedang dipakai**. Tidak perlu akun, tetapi data tidak otomatis tersinkron ke browser/perangkat lain dan bisa hilang jika data situs dibersihkan. Gunakan menu **Ekspor cadangan** secara berkala. Ini sengaja menghindari penulisan ke filesystem Vercel yang bersifat sementara dan bukan database persisten.
````

**Catatan fungsi:** Paragraf dokumentasi yang memberi konteks, menjelaskan cara pakai, persyaratan, atau perilaku aplikasi.

### Baris 19

````markdown

````

**Catatan fungsi:** Baris kosong untuk memisahkan bagian konfigurasi/dokumentasi, tanpa mengubah perilaku program.

### Baris 20

````markdown
## Struktur project
````

**Catatan fungsi:** Judul Markdown tingkat 2 yang membuka bagian dokumentasi: “Struktur project”.

### Baris 21

````markdown

````

**Catatan fungsi:** Baris kosong untuk memisahkan bagian konfigurasi/dokumentasi, tanpa mengubah perilaku program.

### Baris 22

````markdown
```text
````

**Catatan fungsi:** Menandai awal/akhir blok kode contoh di README agar perintah/struktur ditampilkan sebagai teks, bukan dijalankan oleh Markdown.

### Baris 23

````markdown
paradoks-d-task/
````

**Catatan fungsi:** Paragraf dokumentasi yang memberi konteks, menjelaskan cara pakai, persyaratan, atau perilaku aplikasi.

### Baris 24

````markdown
├── app.py
````

**Catatan fungsi:** Satu baris diagram pohon yang menunjukkan posisi file/folder dalam struktur proyek.

### Baris 25

````markdown
├── requirements.txt
````

**Catatan fungsi:** Satu baris diagram pohon yang menunjukkan posisi file/folder dalam struktur proyek.

### Baris 26

````markdown
├── vercel.json
````

**Catatan fungsi:** Satu baris diagram pohon yang menunjukkan posisi file/folder dalam struktur proyek.

### Baris 27

````markdown
├── .python-version
````

**Catatan fungsi:** Satu baris diagram pohon yang menunjukkan posisi file/folder dalam struktur proyek.

### Baris 28

````markdown
├── .gitignore
````

**Catatan fungsi:** Satu baris diagram pohon yang menunjukkan posisi file/folder dalam struktur proyek.

### Baris 29

````markdown
├── .env.example
````

**Catatan fungsi:** Satu baris diagram pohon yang menunjukkan posisi file/folder dalam struktur proyek.

### Baris 30

````markdown
├── README.md
````

**Catatan fungsi:** Satu baris diagram pohon yang menunjukkan posisi file/folder dalam struktur proyek.

### Baris 31

````markdown
└── public/
````

**Catatan fungsi:** Satu baris diagram pohon yang menunjukkan posisi file/folder dalam struktur proyek.

### Baris 32

````markdown
    ├── index.html
````

**Catatan fungsi:** Satu baris diagram pohon yang menunjukkan posisi file/folder dalam struktur proyek.

### Baris 33

````markdown
    ├── style.css
````

**Catatan fungsi:** Satu baris diagram pohon yang menunjukkan posisi file/folder dalam struktur proyek.

### Baris 34

````markdown
    ├── app.js
````

**Catatan fungsi:** Satu baris diagram pohon yang menunjukkan posisi file/folder dalam struktur proyek.

### Baris 35

````markdown
    ├── favicon.svg
````

**Catatan fungsi:** Satu baris diagram pohon yang menunjukkan posisi file/folder dalam struktur proyek.

### Baris 36

````markdown
    └── manifest.webmanifest
````

**Catatan fungsi:** Satu baris diagram pohon yang menunjukkan posisi file/folder dalam struktur proyek.

### Baris 37

````markdown
```
````

**Catatan fungsi:** Menandai awal/akhir blok kode contoh di README agar perintah/struktur ditampilkan sebagai teks, bukan dijalankan oleh Markdown.

### Baris 38

````markdown

````

**Catatan fungsi:** Baris kosong untuk memisahkan bagian konfigurasi/dokumentasi, tanpa mengubah perilaku program.

### Baris 39

````markdown
Pastikan folder `public/` tetap berada di root project yang sama dengan `app.py` dan `vercel.json`. Jangan hanya mengunggah `app.py`.
````

**Catatan fungsi:** Paragraf dokumentasi yang memberi konteks, menjelaskan cara pakai, persyaratan, atau perilaku aplikasi.

### Baris 40

````markdown

````

**Catatan fungsi:** Baris kosong untuk memisahkan bagian konfigurasi/dokumentasi, tanpa mengubah perilaku program.

### Baris 41

````markdown
## Jalankan di komputer melalui VS Code
````

**Catatan fungsi:** Judul Markdown tingkat 2 yang membuka bagian dokumentasi: “Jalankan di komputer melalui VS Code”.

### Baris 42

````markdown

````

**Catatan fungsi:** Baris kosong untuk memisahkan bagian konfigurasi/dokumentasi, tanpa mengubah perilaku program.

### Baris 43

````markdown
Project kompatibel dengan Python 3.10.11 untuk pengembangan lokal. Vercel saat ini menyediakan runtime Python 3.12+; `.python-version` disetel ke `3.12` agar deployment memakai runtime yang tersedia.
````

**Catatan fungsi:** Paragraf dokumentasi yang memberi konteks, menjelaskan cara pakai, persyaratan, atau perilaku aplikasi.

### Baris 44

````markdown

````

**Catatan fungsi:** Baris kosong untuk memisahkan bagian konfigurasi/dokumentasi, tanpa mengubah perilaku program.

### Baris 45

````markdown
1. Ekstrak ZIP, lalu di VS Code pilih **File → Open Folder** dan buka folder `paradoks-d-task` (folder yang berisi `app.py`).
````

**Catatan fungsi:** Langkah bernomor dalam instruksi penggunaan/deployment. Baris ini memberi satu tindakan yang perlu dilakukan pengguna.

### Baris 46

````markdown
2. Buka terminal di VS Code.
````

**Catatan fungsi:** Langkah bernomor dalam instruksi penggunaan/deployment. Baris ini memberi satu tindakan yang perlu dilakukan pengguna.

### Baris 47

````markdown
3. Buat virtual environment:
````

**Catatan fungsi:** Langkah bernomor dalam instruksi penggunaan/deployment. Baris ini memberi satu tindakan yang perlu dilakukan pengguna.

### Baris 48

````markdown

````

**Catatan fungsi:** Baris kosong untuk memisahkan bagian konfigurasi/dokumentasi, tanpa mengubah perilaku program.

### Baris 49

````markdown
   **Windows PowerShell**
````

**Catatan fungsi:** Label platform untuk membedakan perintah terminal menurut sistem operasi.

### Baris 50

````markdown
   ```powershell
````

**Catatan fungsi:** Menandai awal/akhir blok kode contoh di README agar perintah/struktur ditampilkan sebagai teks, bukan dijalankan oleh Markdown.

### Baris 51

````markdown
   py -3.10 -m venv .venv
````

**Catatan fungsi:** Baris contoh perintah, nama file, endpoint, atau kode yang dipakai dalam instruksi README; bukan bagian kode aplikasi yang dijalankan otomatis.

### Baris 52

````markdown
   .\.venv\Scripts\Activate.ps1
````

**Catatan fungsi:** Baris contoh perintah, nama file, endpoint, atau kode yang dipakai dalam instruksi README; bukan bagian kode aplikasi yang dijalankan otomatis.

### Baris 53

````markdown
   python -m pip install --upgrade pip
````

**Catatan fungsi:** Baris contoh perintah, nama file, endpoint, atau kode yang dipakai dalam instruksi README; bukan bagian kode aplikasi yang dijalankan otomatis.

### Baris 54

````markdown
   pip install -r requirements.txt
````

**Catatan fungsi:** Baris contoh perintah, nama file, endpoint, atau kode yang dipakai dalam instruksi README; bukan bagian kode aplikasi yang dijalankan otomatis.

### Baris 55

````markdown
   uvicorn app:app --reload
````

**Catatan fungsi:** Baris contoh perintah, nama file, endpoint, atau kode yang dipakai dalam instruksi README; bukan bagian kode aplikasi yang dijalankan otomatis.

### Baris 56

````markdown
   ```
````

**Catatan fungsi:** Menandai awal/akhir blok kode contoh di README agar perintah/struktur ditampilkan sebagai teks, bukan dijalankan oleh Markdown.

### Baris 57

````markdown

````

**Catatan fungsi:** Baris kosong untuk memisahkan bagian konfigurasi/dokumentasi, tanpa mengubah perilaku program.

### Baris 58

````markdown
   Jika PowerShell tidak mengenali `py -3.10`, gunakan `python -m venv .venv` dengan interpreter Python yang telah terpasang.
````

**Catatan fungsi:** Paragraf dokumentasi yang memberi konteks, menjelaskan cara pakai, persyaratan, atau perilaku aplikasi.

### Baris 59

````markdown

````

**Catatan fungsi:** Baris kosong untuk memisahkan bagian konfigurasi/dokumentasi, tanpa mengubah perilaku program.

### Baris 60

````markdown
   **macOS / Linux**
````

**Catatan fungsi:** Label platform untuk membedakan perintah terminal menurut sistem operasi.

### Baris 61

````markdown
   ```bash
````

**Catatan fungsi:** Menandai awal/akhir blok kode contoh di README agar perintah/struktur ditampilkan sebagai teks, bukan dijalankan oleh Markdown.

### Baris 62

````markdown
   python3 -m venv .venv
````

**Catatan fungsi:** Baris contoh perintah, nama file, endpoint, atau kode yang dipakai dalam instruksi README; bukan bagian kode aplikasi yang dijalankan otomatis.

### Baris 63

````markdown
   source .venv/bin/activate
````

**Catatan fungsi:** Baris contoh perintah, nama file, endpoint, atau kode yang dipakai dalam instruksi README; bukan bagian kode aplikasi yang dijalankan otomatis.

### Baris 64

````markdown
   python -m pip install --upgrade pip
````

**Catatan fungsi:** Baris contoh perintah, nama file, endpoint, atau kode yang dipakai dalam instruksi README; bukan bagian kode aplikasi yang dijalankan otomatis.

### Baris 65

````markdown
   pip install -r requirements.txt
````

**Catatan fungsi:** Baris contoh perintah, nama file, endpoint, atau kode yang dipakai dalam instruksi README; bukan bagian kode aplikasi yang dijalankan otomatis.

### Baris 66

````markdown
   uvicorn app:app --reload
````

**Catatan fungsi:** Baris contoh perintah, nama file, endpoint, atau kode yang dipakai dalam instruksi README; bukan bagian kode aplikasi yang dijalankan otomatis.

### Baris 67

````markdown
   ```
````

**Catatan fungsi:** Menandai awal/akhir blok kode contoh di README agar perintah/struktur ditampilkan sebagai teks, bukan dijalankan oleh Markdown.

### Baris 68

````markdown

````

**Catatan fungsi:** Baris kosong untuk memisahkan bagian konfigurasi/dokumentasi, tanpa mengubah perilaku program.

### Baris 69

````markdown
4. Buka `http://127.0.0.1:8000`. Pemeriksaan backend tersedia di `http://127.0.0.1:8000/api/health`; dokumentasi API ada di `http://127.0.0.1:8000/api/docs`.
````

**Catatan fungsi:** Langkah bernomor dalam instruksi penggunaan/deployment. Baris ini memberi satu tindakan yang perlu dilakukan pengguna.

### Baris 70

````markdown
5. Untuk berhenti, tekan `Ctrl+C` di terminal.
````

**Catatan fungsi:** Langkah bernomor dalam instruksi penggunaan/deployment. Baris ini memberi satu tindakan yang perlu dilakukan pengguna.

### Baris 71

````markdown

````

**Catatan fungsi:** Baris kosong untuk memisahkan bagian konfigurasi/dokumentasi, tanpa mengubah perilaku program.

### Baris 72

````markdown
## Upload ke GitHub dari VS Code
````

**Catatan fungsi:** Judul Markdown tingkat 2 yang membuka bagian dokumentasi: “Upload ke GitHub dari VS Code”.

### Baris 73

````markdown

````

**Catatan fungsi:** Baris kosong untuk memisahkan bagian konfigurasi/dokumentasi, tanpa mengubah perilaku program.

### Baris 74

````markdown
1. Buat repository baru di GitHub. Untuk alur paling sederhana, buat repository kosong tanpa README, `.gitignore`, atau lisensi karena berkas itu sudah ada di project.
````

**Catatan fungsi:** Langkah bernomor dalam instruksi penggunaan/deployment. Baris ini memberi satu tindakan yang perlu dilakukan pengguna.

### Baris 75

````markdown
2. Di VS Code, pastikan yang dibuka adalah folder project, bukan folder `public` saja.
````

**Catatan fungsi:** Langkah bernomor dalam instruksi penggunaan/deployment. Baris ini memberi satu tindakan yang perlu dilakukan pengguna.

### Baris 76

````markdown
3. Pilih ikon **Source Control** di sidebar. Klik **Initialize Repository**.
````

**Catatan fungsi:** Langkah bernomor dalam instruksi penggunaan/deployment. Baris ini memberi satu tindakan yang perlu dilakukan pengguna.

### Baris 77

````markdown
4. Tinjau file yang terdeteksi. Pastikan `app.py`, `requirements.txt`, `vercel.json`, `.python-version`, `README.md`, dan seluruh folder `public/` muncul. Folder `.venv/` tidak perlu diunggah.
````

**Catatan fungsi:** Langkah bernomor dalam instruksi penggunaan/deployment. Baris ini memberi satu tindakan yang perlu dilakukan pengguna.

### Baris 78

````markdown
5. Masukkan pesan commit, misalnya `Initial commit - Paradoks D. Task`, lalu klik **Commit**.
````

**Catatan fungsi:** Langkah bernomor dalam instruksi penggunaan/deployment. Baris ini memberi satu tindakan yang perlu dilakukan pengguna.

### Baris 79

````markdown
6. Klik **Publish Branch** / **Publish to GitHub**, masuk ke akun GitHub bila diminta, lalu pilih repository yang dibuat di langkah pertama.
````

**Catatan fungsi:** Langkah bernomor dalam instruksi penggunaan/deployment. Baris ini memberi satu tindakan yang perlu dilakukan pengguna.

### Baris 80

````markdown

````

**Catatan fungsi:** Baris kosong untuk memisahkan bagian konfigurasi/dokumentasi, tanpa mengubah perilaku program.

### Baris 81

````markdown
Alternatif lewat terminal di folder project:
````

**Catatan fungsi:** Paragraf dokumentasi yang memberi konteks, menjelaskan cara pakai, persyaratan, atau perilaku aplikasi.

### Baris 82

````markdown

````

**Catatan fungsi:** Baris kosong untuk memisahkan bagian konfigurasi/dokumentasi, tanpa mengubah perilaku program.

### Baris 83

````markdown
```bash
````

**Catatan fungsi:** Menandai awal/akhir blok kode contoh di README agar perintah/struktur ditampilkan sebagai teks, bukan dijalankan oleh Markdown.

### Baris 84

````markdown
git init
````

**Catatan fungsi:** Baris contoh perintah, nama file, endpoint, atau kode yang dipakai dalam instruksi README; bukan bagian kode aplikasi yang dijalankan otomatis.

### Baris 85

````markdown
git add .
````

**Catatan fungsi:** Baris contoh perintah, nama file, endpoint, atau kode yang dipakai dalam instruksi README; bukan bagian kode aplikasi yang dijalankan otomatis.

### Baris 86

````markdown
git commit -m "Initial commit - Paradoks D. Task"
````

**Catatan fungsi:** Baris contoh perintah, nama file, endpoint, atau kode yang dipakai dalam instruksi README; bukan bagian kode aplikasi yang dijalankan otomatis.

### Baris 87

````markdown
git branch -M main
````

**Catatan fungsi:** Baris contoh perintah, nama file, endpoint, atau kode yang dipakai dalam instruksi README; bukan bagian kode aplikasi yang dijalankan otomatis.

### Baris 88

````markdown
git remote add origin https://github.com/USERNAME/NAMA-REPOSITORY.git
````

**Catatan fungsi:** Baris contoh perintah, nama file, endpoint, atau kode yang dipakai dalam instruksi README; bukan bagian kode aplikasi yang dijalankan otomatis.

### Baris 89

````markdown
git push -u origin main
````

**Catatan fungsi:** Baris contoh perintah, nama file, endpoint, atau kode yang dipakai dalam instruksi README; bukan bagian kode aplikasi yang dijalankan otomatis.

### Baris 90

````markdown
```
````

**Catatan fungsi:** Menandai awal/akhir blok kode contoh di README agar perintah/struktur ditampilkan sebagai teks, bukan dijalankan oleh Markdown.

### Baris 91

````markdown

````

**Catatan fungsi:** Baris kosong untuk memisahkan bagian konfigurasi/dokumentasi, tanpa mengubah perilaku program.

### Baris 92

````markdown
Ganti URL contoh pada `git remote add origin` dengan URL repository milikmu. Jika sudah melakukan `Initialize Repository` dan publish melalui VS Code, tidak perlu menjalankan `git init` lagi.
````

**Catatan fungsi:** Paragraf dokumentasi yang memberi konteks, menjelaskan cara pakai, persyaratan, atau perilaku aplikasi.

### Baris 93

````markdown

````

**Catatan fungsi:** Baris kosong untuk memisahkan bagian konfigurasi/dokumentasi, tanpa mengubah perilaku program.

### Baris 94

````markdown
## Deploy di Vercel dari repository GitHub
````

**Catatan fungsi:** Judul Markdown tingkat 2 yang membuka bagian dokumentasi: “Deploy di Vercel dari repository GitHub”.

### Baris 95

````markdown

````

**Catatan fungsi:** Baris kosong untuk memisahkan bagian konfigurasi/dokumentasi, tanpa mengubah perilaku program.

### Baris 96

````markdown
1. Masuk ke Vercel dan pilih **Add New → Project**.
````

**Catatan fungsi:** Langkah bernomor dalam instruksi penggunaan/deployment. Baris ini memberi satu tindakan yang perlu dilakukan pengguna.

### Baris 97

````markdown
2. Hubungkan akun GitHub jika diminta, lalu **Import** repository Paradoks D. Task.
````

**Catatan fungsi:** Langkah bernomor dalam instruksi penggunaan/deployment. Baris ini memberi satu tindakan yang perlu dilakukan pengguna.

### Baris 98

````markdown
3. Untuk **Root Directory**, pilih folder yang langsung berisi `app.py` dan `public/`. Jika file ada di root repository, biarkan root directory sebagai `./`.
````

**Catatan fungsi:** Langkah bernomor dalam instruksi penggunaan/deployment. Baris ini memberi satu tindakan yang perlu dilakukan pengguna.

### Baris 99

````markdown
4. Biarkan pengaturan Framework Preset / Build Command / Output Directory pada deteksi otomatis Vercel. FastAPI terdeteksi dari `app.py` dan `requirements.txt`.
````

**Catatan fungsi:** Langkah bernomor dalam instruksi penggunaan/deployment. Baris ini memberi satu tindakan yang perlu dilakukan pengguna.

### Baris 100

````markdown
5. Klik **Deploy** dan tunggu sampai status berhasil. Setiap `git push` berikutnya ke branch yang terhubung biasanya akan memicu deployment baru.
````

**Catatan fungsi:** Langkah bernomor dalam instruksi penggunaan/deployment. Baris ini memberi satu tindakan yang perlu dilakukan pengguna.

### Baris 101

````markdown
6. Buka URL deployment. Untuk memeriksa backend, buka `/api/health`, misalnya `https://nama-project.vercel.app/api/health`. Respons yang normal berisi `"status": "ok"` dan `"assets_available": true`.
````

**Catatan fungsi:** Langkah bernomor dalam instruksi penggunaan/deployment. Baris ini memberi satu tindakan yang perlu dilakukan pengguna.

### Baris 102

````markdown

````

**Catatan fungsi:** Baris kosong untuk memisahkan bagian konfigurasi/dokumentasi, tanpa mengubah perilaku program.

### Baris 103

````markdown
### Mengapa ada `includeFiles` di vercel.json?
````

**Catatan fungsi:** Judul Markdown tingkat 3 yang membuka bagian dokumentasi: “Mengapa ada `includeFiles` di vercel.json?”.

### Baris 104

````markdown

````

**Catatan fungsi:** Baris kosong untuk memisahkan bagian konfigurasi/dokumentasi, tanpa mengubah perilaku program.

### Baris 105

````markdown
`vercel.json` menyertakan folder `public/**` pada bundle fungsi Python, karena FastAPI juga memiliki route cadangan untuk menyajikan berkas antarmuka. Ini mencegah fungsi bergantung pada direktori `public` yang tidak ikut terkemas. Folder `public/` tetap harus ada di repository dan Root Directory Vercel harus benar.
````

**Catatan fungsi:** Baris contoh perintah, nama file, endpoint, atau kode yang dipakai dalam instruksi README; bukan bagian kode aplikasi yang dijalankan otomatis.

### Baris 106

````markdown

````

**Catatan fungsi:** Baris kosong untuk memisahkan bagian konfigurasi/dokumentasi, tanpa mengubah perilaku program.

### Baris 107

````markdown
## Troubleshooting
````

**Catatan fungsi:** Judul Markdown tingkat 2 yang membuka bagian dokumentasi: “Troubleshooting”.

### Baris 108

````markdown

````

**Catatan fungsi:** Baris kosong untuk memisahkan bagian konfigurasi/dokumentasi, tanpa mengubah perilaku program.

### Baris 109

````markdown
### Error `FUNCTION_INVOCATION_FAILED` / `Directory '/var/task/public' does not exist`
````

**Catatan fungsi:** Judul Markdown tingkat 3 yang membuka bagian dokumentasi: “Error `FUNCTION_INVOCATION_FAILED` / `Directory '/var/task/public' does not exist`”.

### Baris 110

````markdown

````

**Catatan fungsi:** Baris kosong untuk memisahkan bagian konfigurasi/dokumentasi, tanpa mengubah perilaku program.

### Baris 111

````markdown
- Pastikan `public/` berisi `index.html`, `style.css`, `app.js`, `favicon.svg`, dan `manifest.webmanifest` di GitHub.
````

**Catatan fungsi:** Butir daftar README yang merangkum fitur, syarat, file, atau langkah troubleshooting.

### Baris 112

````markdown
- Pastikan `app.py` dan `public/` berada dalam root directory yang sama.
````

**Catatan fungsi:** Butir daftar README yang merangkum fitur, syarat, file, atau langkah troubleshooting.

### Baris 113

````markdown
- Pastikan `vercel.json` di repository sama dengan file di project ini.
````

**Catatan fungsi:** Butir daftar README yang merangkum fitur, syarat, file, atau langkah troubleshooting.

### Baris 114

````markdown
- Buka Vercel → **Settings → Build and Deployment → Root Directory**, lalu perbaiki jika menunjuk folder yang salah.
````

**Catatan fungsi:** Butir daftar README yang merangkum fitur, syarat, file, atau langkah troubleshooting.

### Baris 115

````markdown
- Setelah memperbaiki berkas, commit dan push ke GitHub lalu lakukan redeploy.
````

**Catatan fungsi:** Butir daftar README yang merangkum fitur, syarat, file, atau langkah troubleshooting.

### Baris 116

````markdown

````

**Catatan fungsi:** Baris kosong untuk memisahkan bagian konfigurasi/dokumentasi, tanpa mengubah perilaku program.

### Baris 117

````markdown
### Halaman tampil tanpa styling / tombol tidak bekerja
````

**Catatan fungsi:** Judul Markdown tingkat 3 yang membuka bagian dokumentasi: “Halaman tampil tanpa styling / tombol tidak bekerja”.

### Baris 118

````markdown

````

**Catatan fungsi:** Baris kosong untuk memisahkan bagian konfigurasi/dokumentasi, tanpa mengubah perilaku program.

### Baris 119

````markdown
Pastikan `style.css` dan `app.js` tersedia di folder `public/`, kemudian buka `/api/health`. Jika `assets_available` bernilai `false`, deployment belum menyertakan semua berkas. Coba redeploy setelah memeriksa Root Directory.
````

**Catatan fungsi:** Paragraf dokumentasi yang memberi konteks, menjelaskan cara pakai, persyaratan, atau perilaku aplikasi.

### Baris 120

````markdown

````

**Catatan fungsi:** Baris kosong untuk memisahkan bagian konfigurasi/dokumentasi, tanpa mengubah perilaku program.

### Baris 121

````markdown
### Perubahan tugas tidak muncul di perangkat lain
````

**Catatan fungsi:** Judul Markdown tingkat 3 yang membuka bagian dokumentasi: “Perubahan tugas tidak muncul di perangkat lain”.

### Baris 122

````markdown

````

**Catatan fungsi:** Baris kosong untuk memisahkan bagian konfigurasi/dokumentasi, tanpa mengubah perilaku program.

### Baris 123

````markdown
Itu perilaku yang diharapkan dari versi local-first: daftar tersimpan di browser/perangkat yang sedang digunakan. Gunakan ekspor dan impor JSON untuk memindahkan salinan data. Untuk sinkronisasi banyak perangkat, aplikasi perlu dihubungkan ke database persisten eksternal.
````

**Catatan fungsi:** Paragraf dokumentasi yang memberi konteks, menjelaskan cara pakai, persyaratan, atau perilaku aplikasi.

### Baris 124

````markdown

````

**Catatan fungsi:** Baris kosong untuk memisahkan bagian konfigurasi/dokumentasi, tanpa mengubah perilaku program.

### Baris 125

````markdown
## Endpoint
````

**Catatan fungsi:** Judul Markdown tingkat 2 yang membuka bagian dokumentasi: “Endpoint”.

### Baris 126

````markdown

````

**Catatan fungsi:** Baris kosong untuk memisahkan bagian konfigurasi/dokumentasi, tanpa mengubah perilaku program.

### Baris 127

````markdown
- `GET /` — aplikasi web.
````

**Catatan fungsi:** Butir daftar README yang merangkum fitur, syarat, file, atau langkah troubleshooting.

### Baris 128

````markdown
- `GET /api/health` — status aplikasi dan pemeriksaan berkas.
````

**Catatan fungsi:** Butir daftar README yang merangkum fitur, syarat, file, atau langkah troubleshooting.

### Baris 129

````markdown
- `GET /api/docs` — dokumentasi interaktif FastAPI.
````

**Catatan fungsi:** Butir daftar README yang merangkum fitur, syarat, file, atau langkah troubleshooting.

### Baris 130

````markdown

````

**Catatan fungsi:** Baris kosong untuk memisahkan bagian konfigurasi/dokumentasi, tanpa mengubah perilaku program.

### Baris 131

````markdown
## Lisensi
````

**Catatan fungsi:** Judul Markdown tingkat 2 yang membuka bagian dokumentasi: “Lisensi”.

### Baris 132

````markdown

````

**Catatan fungsi:** Baris kosong untuk memisahkan bagian konfigurasi/dokumentasi, tanpa mengubah perilaku program.

### Baris 133

````markdown
Kode awal ini dapat kamu modifikasi dan gunakan untuk project pribadi maupun pembelajaran.
````

**Catatan fungsi:** Paragraf dokumentasi yang memberi konteks, menjelaskan cara pakai, persyaratan, atau perilaku aplikasi.

---

# Penjelasan baris demi baris — `requirements.txt`

Catatan di bawah setiap potongan merujuk pada baris sumber dengan nomor yang sama. Kode asli tidak dimodifikasi; dokumen ini adalah bahan belajar, bukan file yang langsung dijalankan.

### Baris 1

````text
fastapi>=0.115,<1.0
````

**Catatan fungsi:** Menentukan dependensi FastAPI dengan batas versi: minimal 0.115 dan di bawah 1.0.

### Baris 2

````text
uvicorn[standard]>=0.30,<1.0
````

**Catatan fungsi:** Menentukan server ASGI Uvicorn beserta dependensi standar, versi minimal 0.30 dan di bawah 1.0.

---

# Penjelasan baris demi baris — `vercel.json`

Catatan di bawah setiap potongan merujuk pada baris sumber dengan nomor yang sama. Kode asli tidak dimodifikasi; dokumen ini adalah bahan belajar, bukan file yang langsung dijalankan.

### Baris 1

````json
{
````

**Catatan fungsi:** Membuka objek JSON utama konfigurasi Vercel.

### Baris 2

````json
  "$schema": "https://openapi.vercel.sh/vercel.json",
````

**Catatan fungsi:** Menunjuk skema JSON resmi untuk membantu editor memvalidasi bentuk konfigurasi.

### Baris 3

````json
  "functions": {
````

**Catatan fungsi:** Membuka pengaturan fungsi serverless.

### Baris 4

````json
    "app.py": {
````

**Catatan fungsi:** Menetapkan konfigurasi untuk fungsi yang entry point-nya `app.py`.

### Baris 5

````json
      "includeFiles": "public/**"
````

**Catatan fungsi:** Meminta Vercel menyertakan seluruh isi `public/` ke dalam bundle fungsi sehingga FastAPI dapat menyajikan HTML/CSS/JS dan aset.

### Baris 6

````json
    }
````

**Catatan fungsi:** Menutup konfigurasi fungsi `app.py`.

### Baris 7

````json
  }
````

**Catatan fungsi:** Menutup objek `functions`.

### Baris 8

````json
}
````

**Catatan fungsi:** Menutup objek JSON utama.

---

# Penjelasan baris demi baris — `public/app.js`

Catatan di bawah setiap potongan merujuk pada baris sumber dengan nomor yang sama. Kode asli tidak dimodifikasi; dokumen ini adalah bahan belajar, bukan file yang langsung dijalankan.

### Baris 1

````javascript
(() => {
````

**Catatan fungsi:** `(() => {` membuat fungsi anonim lalu langsung menjalankannya (IIFE). Variabel dan fungsi di dalamnya tidak mencemari global scope.

### Baris 2

````javascript
  'use strict';
````

**Catatan fungsi:** `'use strict'` mengaktifkan strict mode JavaScript, yang membuat sejumlah kesalahan seperti penugasan ke variabel yang belum dideklarasikan lebih mudah diketahui.

### Baris 3

````javascript

````

**Catatan fungsi:** Baris kosong pemisah.

### Baris 4

````javascript
  const STORAGE_KEY = 'paradoks-d-task.tasks.v1';
````

**Catatan fungsi:** `STORAGE_KEY` adalah nama kunci di `localStorage` untuk menyimpan array tugas. Sufiks `v1` menandai versi format penyimpanan.

### Baris 5

````javascript
  const THEME_KEY = 'paradoks-d-task.theme.v1';
````

**Catatan fungsi:** `THEME_KEY` adalah kunci terpisah untuk menyimpan pilihan tema pengguna.

### Baris 6

````javascript
  const TODAY = () => {
````

**Catatan fungsi:** Mendefinisikan fungsi `TODAY`; fungsi dipakai alih-alih konstanta agar tanggal selalu dihitung saat dipanggil.

### Baris 7

````javascript
    const now = new Date();
````

**Catatan fungsi:** Membuat objek waktu saat ini.

### Baris 8

````javascript
    return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
````

**Catatan fungsi:** Mengembalikan tanggal format `YYYY-MM-DD`: bulan ditambah satu karena `getMonth()` dimulai dari 0, dan `padStart(2, '0')` menambahkan nol di depan angka satu digit.

### Baris 9

````javascript
  };
````

**Catatan fungsi:** Menutup fungsi `TODAY`.

### Baris 10

````javascript
  const $ = (selector, root = document) => root.querySelector(selector);
````

**Catatan fungsi:** Membuat helper `$` yang mengambil elemen pertama sesuai CSS selector; argumen `root` opsional, default-nya seluruh dokumen.

### Baris 11

````javascript
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
````

**Catatan fungsi:** Membuat helper `$$` yang mengambil semua elemen sesuai selector, lalu menyebar `NodeList` menjadi array agar dapat memakai metode array seperti `forEach`.

### Baris 12

````javascript

````

**Catatan fungsi:** Baris kosong.

### Baris 13

````javascript
  const els = {
````

**Catatan fungsi:** Memulai objek `els`, tempat menyimpan referensi elemen HTML supaya pencarian DOM tidak perlu diulang di banyak fungsi.

### Baris 14

````javascript
    html: document.documentElement,
````

**Catatan fungsi:** Menyimpan elemen root HTML (`<html>`) untuk mengubah atribut tema.

### Baris 15

````javascript
    navItems: $$('.nav-item[data-view]'),
````

**Catatan fungsi:** Mengumpulkan tombol navigasi yang mempunyai kelas `nav-item` dan atribut `data-view`.

### Baris 16

````javascript
    breadcrumb: $('#breadcrumb-current'),
````

**Catatan fungsi:** Referensi ke teks breadcrumb aktif.

### Baris 17

````javascript
    date: $('#current-date'),
````

**Catatan fungsi:** Referensi ke label tanggal di top bar.

### Baris 18

````javascript
    pageTitle: $('#page-title'),
````

**Catatan fungsi:** Referensi judul halaman utama.

### Baris 19

````javascript
    tasksHeading: $('#tasks-heading'),
````

**Catatan fungsi:** Referensi judul bagian daftar tugas.

### Baris 20

````javascript
    tasksSubtitle: $('#tasks-subtitle'),
````

**Catatan fungsi:** Referensi subtitle daftar tugas.

### Baris 21

````javascript
    list: $('#task-list'),
````

**Catatan fungsi:** Referensi kontainer daftar tugas tempat hasil render dipasang.

### Baris 22

````javascript
    visibleCount: $('#visible-count'),
````

**Catatan fungsi:** Referensi teks jumlah tugas yang terlihat setelah filter.

### Baris 23

````javascript
    search: $('#task-search'),
````

**Catatan fungsi:** Referensi input pencarian.

### Baris 24

````javascript
    sort: $('#sort-select'),
````

**Catatan fungsi:** Referensi dropdown pengurutan.

### Baris 25

````javascript
    dialog: $('#task-dialog'),
````

**Catatan fungsi:** Referensi elemen dialog HTML.

### Baris 26

````javascript
    form: $('#task-form'),
````

**Catatan fungsi:** Referensi formulir tugas di dalam dialog.

### Baris 27

````javascript
    dialogTitle: $('#dialog-title'),
````

**Catatan fungsi:** Referensi judul dialog.

### Baris 28

````javascript
    taskId: $('#task-id'),
````

**Catatan fungsi:** Referensi input ID tersembunyi untuk mode edit.

### Baris 29

````javascript
    title: $('#task-title'),
````

**Catatan fungsi:** Referensi input nama tugas.

### Baris 30

````javascript
    description: $('#task-description'),
````

**Catatan fungsi:** Referensi textarea catatan/deskripsi.

### Baris 31

````javascript
    category: $('#task-category'),
````

**Catatan fungsi:** Referensi pilihan kategori.

### Baris 32

````javascript
    priority: $('#task-priority'),
````

**Catatan fungsi:** Referensi pilihan prioritas.

### Baris 33

````javascript
    dueDate: $('#task-due'),
````

**Catatan fungsi:** Referensi input tanggal target.

### Baris 34

````javascript
    saveButton: $('#save-task-button'),
````

**Catatan fungsi:** Referensi tombol simpan.

### Baris 35

````javascript
    toast: $('#toast'),
````

**Catatan fungsi:** Referensi toast/notifikasi.

### Baris 36

````javascript
    importFile: $('#import-file'),
````

**Catatan fungsi:** Referensi input file untuk impor JSON.

### Baris 37

````javascript
    sidebar: $('#sidebar'),
````

**Catatan fungsi:** Referensi sidebar.

### Baris 38

````javascript
    scrim: $('#sidebar-scrim'),
````

**Catatan fungsi:** Referensi lapisan gelap di belakang sidebar versi mobile.

### Baris 39

````javascript
    focusOverlay: $('#focus-overlay'),
````

**Catatan fungsi:** Referensi overlay mode fokus.

### Baris 40

````javascript
  };
````

**Catatan fungsi:** Menutup objek pemetaan elemen `els`.

### Baris 41

````javascript

````

**Catatan fungsi:** Baris kosong untuk memisahkan bagian konfigurasi/dokumentasi, tanpa mengubah perilaku program.

### Baris 42

````javascript
  const viewLabels = {
````

**Catatan fungsi:** Memulai objek `viewLabels`, yakni konfigurasi judul, breadcrumb, dan subtitle untuk tampilan berbeda.

### Baris 43

````javascript
    all: { crumb: 'OVERVIEW', title: 'Beri ruang untuk<br><em>hal yang berarti.</em>', subtitle: 'Semua hal yang ingin kamu selesaikan, di satu tempat.' },
````

**Catatan fungsi:** Konfigurasi tampilan `all`/semua tugas. `title` memuat HTML `<br>` dan `<em>` karena nanti dipasang dengan `innerHTML`.

### Baris 44

````javascript
    today: { crumb: 'TODAY', title: 'Satu hari,<br><em>satu langkah.</em>', subtitle: 'Tugas yang punya tanggal target hari ini.' },
````

**Catatan fungsi:** Konfigurasi kata-kata untuk tampilan `today`/hari ini.

### Baris 45

````javascript
    upcoming: { crumb: 'UPCOMING', title: 'Yang akan datang,<br><em>tanpa terburu-buru.</em>', subtitle: 'Lihat ke depan, lalu siapkan langkah berikutnya.' },
````

**Catatan fungsi:** Konfigurasi kata-kata untuk `upcoming`/mendatang.

### Baris 46

````javascript
    completed: { crumb: 'COMPLETED', title: 'Lihat sejauh apa<br><em>kamu melangkah.</em>', subtitle: 'Hal-hal yang sudah kamu tuntaskan layak diapresiasi.' },
````

**Catatan fungsi:** Konfigurasi kata-kata untuk `completed`/selesai.

### Baris 47

````javascript
  };
````

**Catatan fungsi:** Menutup `viewLabels`.

### Baris 48

````javascript

````

**Catatan fungsi:** Baris kosong.

### Baris 49

````javascript
  let tasks = loadTasks();
````

**Catatan fungsi:** Mengisi variabel `tasks` dengan hasil `loadTasks()` sehingga data yang tersimpan sebelumnya dipulihkan saat skrip mulai.

### Baris 50

````javascript
  let currentView = 'all';
````

**Catatan fungsi:** Mengatur tampilan awal menjadi `all`.

### Baris 51

````javascript
  let currentStatus = 'all';
````

**Catatan fungsi:** Mengatur filter status awal menjadi `all`.

### Baris 52

````javascript
  let toastTimer = null;
````

**Catatan fungsi:** Menyiapkan `toastTimer` untuk menyimpan ID timer notifikasi, agar timer sebelumnya bisa dibatalkan.

### Baris 53

````javascript
  let focusReturnTarget = null;
````

**Catatan fungsi:** `focusReturnTarget` nantinya menyimpan elemen yang fokus sebelum mode fokus dibuka, supaya fokus dapat dikembalikan saat keluar.

### Baris 54

````javascript

````

**Catatan fungsi:** Baris kosong untuk memisahkan bagian konfigurasi/dokumentasi, tanpa mengubah perilaku program.

### Baris 55

````javascript
  function safeString(value, max = 500) {
````

**Catatan fungsi:** Mendefinisikan `safeString`, helper yang mensterilkan input menjadi teks sederhana dengan panjang terbatas.

### Baris 56

````javascript
    return typeof value === 'string' ? value.trim().slice(0, max) : '';
````

**Catatan fungsi:** Jika nilai bertipe string, potong spasi awal/akhir dengan `trim()` lalu batasi panjangnya dengan `slice(0, max)`; selain string dikembalikan sebagai string kosong.

### Baris 57

````javascript
  }
````

**Catatan fungsi:** Menutup fungsi.

### Baris 58

````javascript

````

**Catatan fungsi:** Baris kosong.

### Baris 59

````javascript
  function makeId() {
````

**Catatan fungsi:** Mendefinisikan generator ID tugas.

### Baris 60

````javascript
    if (window.crypto && typeof window.crypto.randomUUID === 'function') return window.crypto.randomUUID();
````

**Catatan fungsi:** Jika `crypto.randomUUID` tersedia, pakai UUID acak bawaan browser yang umumnya lebih unik.

### Baris 61

````javascript
    return `task-${Date.now()}-${Math.random().toString(16).slice(2)}`;
````

**Catatan fungsi:** Fallback jika API tersebut tidak tersedia: ID dibuat dari waktu sekarang dan potongan angka acak.

### Baris 62

````javascript
  }
````

**Catatan fungsi:** Menutup fungsi ID.

### Baris 63

````javascript

````

**Catatan fungsi:** Baris kosong.

### Baris 64

````javascript
  function normalizeTask(raw) {
````

**Catatan fungsi:** Mendefinisikan `normalizeTask`, yang mengubah data mentah dari impor/penyimpanan menjadi bentuk tugas yang konsisten.

### Baris 65

````javascript
    if (!raw || typeof raw !== 'object') return null;
````

**Catatan fungsi:** Menolak data kosong atau nilai yang bukan objek.

### Baris 66

````javascript
    const title = safeString(raw.title, 120);
````

**Catatan fungsi:** Membersihkan nama tugas dan membatasi maksimal 120 karakter.

### Baris 67

````javascript
    if (!title) return null;
````

**Catatan fungsi:** Jika nama tugas kosong sesudah dibersihkan, data tugas dianggap tidak valid dan dikembalikan sebagai `null`.

### Baris 68

````javascript
    const idCandidate = safeString(raw.id, 100);
````

**Catatan fungsi:** Membersihkan ID yang masuk dan membatasi panjangnya hingga 100 karakter.

### Baris 69

````javascript
    const dueDate = typeof raw.dueDate === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(raw.dueDate) ? raw.dueDate : '';
````

**Catatan fungsi:** Menerima tanggal hanya bila bertipe string dan sesuai pola bentuk `YYYY-MM-DD`; kalau tidak, tanggal dikosongkan. Regex ini memeriksa bentuk, bukan seluruh validitas kalender.

### Baris 70

````javascript
    const priority = ['high', 'medium', 'low'].includes(raw.priority) ? raw.priority : 'medium';
````

**Catatan fungsi:** Hanya mengizinkan prioritas `high`, `medium`, atau `low`; nilai lain diturunkan ke `medium`.

### Baris 71

````javascript
    const createdAt = Number.isFinite(Date.parse(raw.createdAt)) ? new Date(raw.createdAt).toISOString() : new Date().toISOString();
````

**Catatan fungsi:** Memeriksa apakah `createdAt` bisa diparse sebagai tanggal. Jika valid, dinormalisasi ke ISO; bila tidak valid, memakai waktu sekarang.

### Baris 72

````javascript
    return {
````

**Catatan fungsi:** Memulai objek hasil tugas yang bentuk propertinya distandarkan.

### Baris 73

````javascript
      id: /^[\w-]{1,100}$/.test(idCandidate) ? idCandidate : makeId(),
````

**Catatan fungsi:** Menggunakan ID bila memenuhi regex karakter huruf/angka/underscore/tanda hubung dan panjang 1–100; kalau tidak, membuat ID baru.

### Baris 74

````javascript
      title,
````

**Catatan fungsi:** Menyimpan nama tugas yang sudah dibersihkan.

### Baris 75

````javascript
      description: safeString(raw.description, 500),
````

**Catatan fungsi:** Membersihkan deskripsi dan membatasi panjang 500 karakter.

### Baris 76

````javascript
      category: safeString(raw.category, 40) || 'Personal',
````

**Catatan fungsi:** Membersihkan kategori hingga 40 karakter, dan memberi default `Personal` jika kosong.

### Baris 77

````javascript
      priority,
````

**Catatan fungsi:** Menyimpan prioritas yang sudah divalidasi.

### Baris 78

````javascript
      dueDate,
````

**Catatan fungsi:** Menyimpan tanggal target yang sudah lolos pemeriksaan bentuk.

### Baris 79

````javascript
      done: Boolean(raw.done),
````

**Catatan fungsi:** Mengubah nilai `done` ke boolean. Perlu diingat, `Boolean(...)` menganggap string tidak kosong seperti `"false"` sebagai `true`; data internal aplikasi biasanya memang menyimpan boolean.

### Baris 80

````javascript
      createdAt,
````

**Catatan fungsi:** Menyimpan `createdAt` hasil normalisasi.

### Baris 81

````javascript
      completedAt: typeof raw.completedAt === 'string' ? raw.completedAt : null,
````

**Catatan fungsi:** Menyimpan `completedAt` jika nilainya berupa string; selain itu `null`.

### Baris 82

````javascript
    };
````

**Catatan fungsi:** Menutup objek hasil.

### Baris 83

````javascript
  }
````

**Catatan fungsi:** Menutup `normalizeTask` dan mengembalikan objek tersebut.

### Baris 84

````javascript

````

**Catatan fungsi:** Baris kosong untuk memisahkan bagian konfigurasi/dokumentasi, tanpa mengubah perilaku program.

### Baris 85

````javascript
  function loadTasks() {
````

**Catatan fungsi:** Mendefinisikan `loadTasks()` untuk mengambil tugas saat aplikasi dimulai.

### Baris 86

````javascript
    try {
````

**Catatan fungsi:** Membuka blok `try` untuk menangani kegagalan akses penyimpanan atau JSON rusak.

### Baris 87

````javascript
      const raw = localStorage.getItem(STORAGE_KEY);
````

**Catatan fungsi:** Membaca nilai teks dari `localStorage` dengan kunci `STORAGE_KEY`.

### Baris 88

````javascript
      if (!raw) return [];
````

**Catatan fungsi:** Kalau kunci belum ada atau nilainya kosong, kembalikan array kosong.

### Baris 89

````javascript
      const parsed = JSON.parse(raw);
````

**Catatan fungsi:** Mem-parsing teks JSON menjadi objek JavaScript.

### Baris 90

````javascript
      if (!Array.isArray(parsed)) return [];
````

**Catatan fungsi:** Menolak isi penyimpanan yang bukan array, karena aplikasi mengharapkan daftar tugas berbentuk array.

### Baris 91

````javascript
      return parsed.map(normalizeTask).filter(Boolean);
````

**Catatan fungsi:** Menormalkan masing-masing tugas dan membuang item yang tidak valid melalui `filter(Boolean)`.

### Baris 92

````javascript
    } catch (error) {
````

**Catatan fungsi:** Menangkap error saat pembacaan/parsing gagal.

### Baris 93

````javascript
      console.warn('Data tugas lokal tidak dapat dibaca.', error);
````

**Catatan fungsi:** Menulis peringatan ke console untuk memudahkan debugging.

### Baris 94

````javascript
      return [];
````

**Catatan fungsi:** Dalam kondisi error, aplikasi tetap bisa terbuka dan menggunakan daftar kosong.

### Baris 95

````javascript
    }
````

**Catatan fungsi:** Menutup `catch`.

### Baris 96

````javascript
  }
````

**Catatan fungsi:** Menutup fungsi `loadTasks`.

### Baris 97

````javascript

````

**Catatan fungsi:** Baris kosong.

### Baris 98

````javascript
  function persistTasks(showError = true) {
````

**Catatan fungsi:** Mendefinisikan `persistTasks(showError = true)`. Argumen mengatur apakah pesan error ditampilkan ketika penyimpanan gagal.

### Baris 99

````javascript
    try {
````

**Catatan fungsi:** Membuka blok `try`.

### Baris 100

````javascript
      localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
````

**Catatan fungsi:** Mengubah array `tasks` menjadi JSON lalu menulisnya ke browser dengan kunci yang sudah ditentukan.

### Baris 101

````javascript
      return true;
````

**Catatan fungsi:** Mengembalikan `true` jika penyimpanan berhasil.

### Baris 102

````javascript
    } catch (error) {
````

**Catatan fungsi:** Menangkap error, misalnya kuota localStorage penuh atau browser menolak penyimpanan.

### Baris 103

````javascript
      console.error('Gagal menyimpan tugas ke browser.', error);
````

**Catatan fungsi:** Mencatat error lebih jelas ke console.

### Baris 104

````javascript
      if (showError) showToast('Penyimpanan browser penuh atau tidak tersedia. Ekspor cadangan untuk menjaga data.');
````

**Catatan fungsi:** Bila `showError` aktif, menampilkan toast yang menganjurkan pengguna mengekspor cadangan.

### Baris 105

````javascript
      return false;
````

**Catatan fungsi:** Mengembalikan `false` sebagai penanda gagal menyimpan.

### Baris 106

````javascript
    }
````

**Catatan fungsi:** Menutup blok `catch`.

### Baris 107

````javascript
  }
````

**Catatan fungsi:** Menutup fungsi penyimpanan.

### Baris 108

````javascript

````

**Catatan fungsi:** Baris kosong untuk memisahkan bagian konfigurasi/dokumentasi, tanpa mengubah perilaku program.

### Baris 109

````javascript
  function escapeHtml(value) {
````

**Catatan fungsi:** Mendefinisikan fungsi `escapeHtml` untuk menghindari teks tugas dianggap sebagai HTML ketika dirender.

### Baris 110

````javascript
    return String(value ?? '').replace(/[&<>"']/g, char => ({
````

**Catatan fungsi:** Mengonversi nilai ke string, mengubah `null`/`undefined` menjadi string kosong, lalu mencari karakter berbahaya `& < > " '`.

### Baris 111

````javascript
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
````

**Catatan fungsi:** Memetakan setiap karakter tersebut ke entity HTML yang setara (`&amp;`, `&lt;`, dan seterusnya), agar karakter tampil sebagai teks biasa.

### Baris 112

````javascript
    }[char]));
````

**Catatan fungsi:** Menutup objek pemetaan yang digunakan callback penggantian.

### Baris 113

````javascript
  }
````

**Catatan fungsi:** Menutup fungsi `escapeHtml`.

### Baris 114

````javascript

````

**Catatan fungsi:** Baris kosong.

### Baris 115

````javascript
  function formatDate(dateString, options = {}) {
````

**Catatan fungsi:** Mendefinisikan `formatDate` untuk menampilkan tanggal target dalam format ringkas Indonesia.

### Baris 116

````javascript
    if (!dateString) return '';
````

**Catatan fungsi:** Kalau tidak ada tanggal, mengembalikan string kosong sehingga badge tanggal tidak ditampilkan.

### Baris 117

````javascript
    const date = new Date(`${dateString}T12:00:00`);
````

**Catatan fungsi:** Membuat objek `Date` dari tanggal dengan waktu siang `12:00:00`; waktu tengah hari membantu menghindari pergeseran hari akibat zona waktu pada sebagian situasi.

### Baris 118

````javascript
    if (Number.isNaN(date.getTime())) return '';
````

**Catatan fungsi:** Memeriksa tanggal tidak valid; jika gagal diparse, mengembalikan string kosong.

### Baris 119

````javascript
    return new Intl.DateTimeFormat('id-ID', {
````

**Catatan fungsi:** Memakai `Intl.DateTimeFormat` dengan locale Indonesia.

### Baris 120

````javascript
      day: 'numeric', month: 'short', ...(options.year ? { year: 'numeric' } : {}),
````

**Catatan fungsi:** Menampilkan hari numerik dan nama bulan singkat; tahun ditambahkan hanya jika opsi `year` bernilai benar. Sintaks `...` menyebarkan properti tambahan secara kondisional.

### Baris 121

````javascript
    }).format(date);
````

**Catatan fungsi:** Memformat objek tanggal dan menutup pemanggilan formatter.

### Baris 122

````javascript
  }
````

**Catatan fungsi:** Menutup fungsi.

### Baris 123

````javascript

````

**Catatan fungsi:** Baris kosong.

### Baris 124

````javascript
  function niceCurrentDate() {
````

**Catatan fungsi:** Mendefinisikan `niceCurrentDate`.

### Baris 125

````javascript
    return new Intl.DateTimeFormat('id-ID', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }).format(new Date());
````

**Catatan fungsi:** Menghasilkan tanggal sekarang dalam bahasa Indonesia lengkap dengan nama hari, tanggal, bulan, dan tahun.

### Baris 126

````javascript
  }
````

**Catatan fungsi:** Menutup fungsi.

### Baris 127

````javascript

````

**Catatan fungsi:** Baris kosong.

### Baris 128

````javascript
  function showToast(message) {
````

**Catatan fungsi:** Mendefinisikan `showToast(message)` untuk menampilkan pemberitahuan sementara.

### Baris 129

````javascript
    els.toast.textContent = message;
````

**Catatan fungsi:** Memasukkan pesan melalui `textContent`; ini penting agar pesan diperlakukan sebagai teks dan tidak dieksekusi sebagai HTML.

### Baris 130

````javascript
    els.toast.classList.add('is-visible');
````

**Catatan fungsi:** Menambahkan kelas `is-visible`, yang oleh CSS membuat toast terlihat.

### Baris 131

````javascript
    if (toastTimer) window.clearTimeout(toastTimer);
````

**Catatan fungsi:** Jika toast sebelumnya memiliki timer, timer itu dibatalkan agar notifikasi baru tidak cepat tertutup oleh timer lama.

### Baris 132

````javascript
    toastTimer = window.setTimeout(() => els.toast.classList.remove('is-visible'), 3000);
````

**Catatan fungsi:** Membuat timer 3.000 ms (3 detik) untuk menghapus kelas `is-visible`.

### Baris 133

````javascript
  }
````

**Catatan fungsi:** Menutup fungsi.

### Baris 134

````javascript

````

**Catatan fungsi:** Baris kosong untuk memisahkan bagian konfigurasi/dokumentasi, tanpa mengubah perilaku program.

### Baris 135

````javascript
  function byDueDate(a, b) {
````

**Catatan fungsi:** Mendefinisikan komparator `byDueDate(a, b)` untuk membandingkan dua tugas berdasarkan tanggal target.

### Baris 136

````javascript
    if (!a.dueDate && !b.dueDate) return 0;
````

**Catatan fungsi:** Jika keduanya tidak memiliki tanggal target, nilai `0` berarti keduanya dianggap setara pada kriteria ini.

### Baris 137

````javascript
    if (!a.dueDate) return 1;
````

**Catatan fungsi:** Tugas tanpa tanggal ditempatkan setelah tugas yang memiliki tanggal.

### Baris 138

````javascript
    if (!b.dueDate) return -1;
````

**Catatan fungsi:** Jika tugas kedua tidak mempunyai tanggal, tugas pertama yang memiliki tanggal ditempatkan lebih dahulu.

### Baris 139

````javascript
    return a.dueDate.localeCompare(b.dueDate);
````

**Catatan fungsi:** Membandingkan format tanggal ISO dengan `localeCompare`; format `YYYY-MM-DD` membuat pengurutan string sesuai urutan kronologis.

### Baris 140

````javascript
  }
````

**Catatan fungsi:** Menutup fungsi pembanding.

### Baris 141

````javascript

````

**Catatan fungsi:** Baris kosong.

### Baris 142

````javascript
  function sortedTasks(input) {
````

**Catatan fungsi:** Mendefinisikan `sortedTasks(input)` untuk mengurutkan salinan daftar, bukan array input asli.

### Baris 143

````javascript
    const result = [...input];
````

**Catatan fungsi:** `[...input]` menyalin array supaya `.sort()` tidak mengubah array sumber secara langsung.

### Baris 144

````javascript
    switch (els.sort.value) {
````

**Catatan fungsi:** Membaca pilihan urutan dari dropdown.

### Baris 145

````javascript
      case 'priority': {
````

**Catatan fungsi:** Kasus urutan `priority`.

### Baris 146

````javascript
        const rank = { high: 0, medium: 1, low: 2 };
````

**Catatan fungsi:** Membuat angka peringkat: prioritas tinggi bernilai 0, sedang 1, rendah 2; nilai lebih kecil akan tampil lebih awal.

### Baris 147

````javascript
        return result.sort((a, b) => rank[a.priority] - rank[b.priority] || byDueDate(a, b));
````

**Catatan fungsi:** Mengurutkan menurut peringkat prioritas, kemudian memakai tanggal target sebagai pemecah nilai yang sama.

### Baris 148

````javascript
      }
````

**Catatan fungsi:** Menutup blok kasus `priority`.

### Baris 149

````javascript
      case 'created': return result.sort((a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt));
````

**Catatan fungsi:** Kasus `created`: tugas terbaru ditampilkan dulu dengan mengurangkan timestamp pembuatan tugas `a` dan `b` secara terbalik.

### Baris 150

````javascript
      case 'title': return result.sort((a, b) => a.title.localeCompare(b.title, 'id'));
````

**Catatan fungsi:** Kasus `title`: mengurutkan alfabetis berdasarkan nama dalam locale Indonesia (`id`).

### Baris 151

````javascript
      case 'date':
````

**Catatan fungsi:** Kasus `date`; juga menjadi pintu ke default.

### Baris 152

````javascript
      default: return result.sort((a, b) => byDueDate(a, b) || Date.parse(b.createdAt) - Date.parse(a.createdAt));
````

**Catatan fungsi:** Untuk tanggal/default, urutkan berdasarkan tanggal target, lalu tugas terbaru di antara tugas dengan tanggal sama atau tanpa tanggal.

### Baris 153

````javascript
    }
````

**Catatan fungsi:** Menutup switch.

### Baris 154

````javascript
  }
````

**Catatan fungsi:** Menutup fungsi pengurutan.

### Baris 155

````javascript

````

**Catatan fungsi:** Baris kosong.

### Baris 156

````javascript
  function getVisibleTasks() {
````

**Catatan fungsi:** Mendefinisikan `getVisibleTasks()`, yakni fungsi inti yang menerapkan tampilan, filter status, dan pencarian.

### Baris 157

````javascript
    const today = TODAY();
````

**Catatan fungsi:** Mengambil tanggal hari ini dalam format konsisten.

### Baris 158

````javascript
    let result = tasks.filter(task => {
````

**Catatan fungsi:** Memulai filter atas seluruh tugas berdasarkan `currentView`.

### Baris 159

````javascript
      if (currentView === 'today') return !task.done && task.dueDate === today;
````

**Catatan fungsi:** Pada tampilan `today`, hanya tampilkan tugas yang belum selesai dan tanggal targetnya tepat hari ini.

### Baris 160

````javascript
      if (currentView === 'upcoming') return !task.done && task.dueDate && task.dueDate > today;
````

**Catatan fungsi:** Pada tampilan `upcoming`, hanya tampilkan tugas yang belum selesai dan tanggal targetnya setelah hari ini.

### Baris 161

````javascript
      if (currentView === 'completed') return task.done;
````

**Catatan fungsi:** Pada tampilan `completed`, tampilkan tugas yang selesai.

### Baris 162

````javascript
      return true;
````

**Catatan fungsi:** Tampilan standar `all` tidak menambah syarat filter khusus.

### Baris 163

````javascript
    });
````

**Catatan fungsi:** Menutup callback filter.

### Baris 164

````javascript

````

**Catatan fungsi:** Menutup pernyataan filter pertama.

### Baris 165

````javascript
    if (currentStatus === 'active') result = result.filter(task => !task.done);
````

**Catatan fungsi:** Jika filter status `active`, singkirkan tugas selesai.

### Baris 166

````javascript
    if (currentStatus === 'done') result = result.filter(task => task.done);
````

**Catatan fungsi:** Jika filter status `done`, singkirkan tugas belum selesai.

### Baris 167

````javascript

````

**Catatan fungsi:** Baris kosong.

### Baris 168

````javascript
    const query = els.search.value.trim().toLocaleLowerCase('id-ID');
````

**Catatan fungsi:** Membaca kata pencarian, membuang spasi tepi, dan menurunkan huruf sesuai locale Indonesia.

### Baris 169

````javascript
    if (query) result = result.filter(task => [task.title, task.description, task.category, task.priority].join(' ').toLocaleLowerCase('id-ID').includes(query));
````

**Catatan fungsi:** Bila kata kunci ada, cari pada gabungan nama, deskripsi, kategori, dan prioritas, tanpa membedakan kapitalisasi.

### Baris 170

````javascript
    return sortedTasks(result);
````

**Catatan fungsi:** Kembalikan hasil sesudah diurutkan.

### Baris 171

````javascript
  }
````

**Catatan fungsi:** Menutup fungsi `getVisibleTasks`.

### Baris 172

````javascript

````

**Catatan fungsi:** Baris kosong untuk memisahkan bagian konfigurasi/dokumentasi, tanpa mengubah perilaku program.

### Baris 173

````javascript
  function datePill(task) {
````

**Catatan fungsi:** Mendefinisikan `datePill(task)`, yang membuat markup badge untuk tanggal target.

### Baris 174

````javascript
    if (!task.dueDate) return '';
````

**Catatan fungsi:** Jika tidak ada tanggal target, kembalikan string kosong.

### Baris 175

````javascript
    const today = TODAY();
````

**Catatan fungsi:** Mengambil tanggal hari ini.

### Baris 176

````javascript
    let cls = '';
````

**Catatan fungsi:** Menyiapkan kelas CSS tambahan kosong.

### Baris 177

````javascript
    let label = formatDate(task.dueDate, { year: task.dueDate.slice(0, 4) !== today.slice(0, 4) });
````

**Catatan fungsi:** Memformat tanggal; tahun ditampilkan bila tahun tugas tidak sama dengan tahun sekarang.

### Baris 178

````javascript
    if (!task.done && task.dueDate < today) { cls = ' due-overdue'; label = `Terlambat · ${label}`; }
````

**Catatan fungsi:** Jika tanggal sudah lewat dan tugas belum selesai, menambah kelas `due-overdue` serta teks “Terlambat”.

### Baris 179

````javascript
    else if (!task.done && task.dueDate === today) { cls = ' due-today'; label = `Hari ini · ${label}`; }
````

**Catatan fungsi:** Jika tanggalnya hari ini dan belum selesai, menambah kelas `due-today` dan label “Hari ini”.

### Baris 180

````javascript
    return `<span class="meta-pill${cls}"><span aria-hidden="true">◷</span>${escapeHtml(label)}</span>`;
````

**Catatan fungsi:** Menghasilkan elemen span badge tanggal; label dilewatkan ke `escapeHtml` sebelum disisipkan ke template HTML.

### Baris 181

````javascript
  }
````

**Catatan fungsi:** Menutup fungsi.

### Baris 182

````javascript

````

**Catatan fungsi:** Baris kosong.

### Baris 183

````javascript
  function priorityInfo(priority) {
````

**Catatan fungsi:** Mendefinisikan `priorityInfo`, pemetaan nilai prioritas ke label, kelas CSS, dan simbol.

### Baris 184

````javascript
    const map = {
````

**Catatan fungsi:** Membuka objek pemetaan.

### Baris 185

````javascript
      high: { label: 'Penting', cls: 'priority-high', glyph: '↑' },
````

**Catatan fungsi:** Prioritas `high` ditampilkan sebagai “Penting”, kelas `priority-high`, simbol panah atas.

### Baris 186

````javascript
      medium: { label: 'Normal', cls: 'priority-medium', glyph: '•' },
````

**Catatan fungsi:** Prioritas `medium` ditampilkan sebagai “Normal”, kelas `priority-medium`, simbol titik.

### Baris 187

````javascript
      low: { label: 'Santai', cls: 'priority-low', glyph: '↓' },
````

**Catatan fungsi:** Prioritas `low` ditampilkan sebagai “Santai”, kelas `priority-low`, simbol panah bawah.

### Baris 188

````javascript
    };
````

**Catatan fungsi:** Menutup pemetaan.

### Baris 189

````javascript
    return map[priority] || map.medium;
````

**Catatan fungsi:** Mengembalikan data untuk prioritas yang diberikan; jika nilainya tidak dikenal, fallback ke prioritas sedang.

### Baris 190

````javascript
  }
````

**Catatan fungsi:** Menutup fungsi.

### Baris 191

````javascript

````

**Catatan fungsi:** Baris kosong untuk memisahkan bagian konfigurasi/dokumentasi, tanpa mengubah perilaku program.

### Baris 192

````javascript
  function renderTask(task, index) {
````

**Catatan fungsi:** Mendefinisikan `renderTask(task, index)`, yang membangun markup satu kartu tugas.

### Baris 193

````javascript
    const priority = priorityInfo(task.priority);
````

**Catatan fungsi:** Mengambil label/kelas/simbol prioritas melalui `priorityInfo`.

### Baris 194

````javascript
    const description = task.description ? `<p class="task-description">${escapeHtml(task.description)}</p>` : '';
````

**Catatan fungsi:** Jika deskripsi ada, buat paragraf deskripsi yang sudah di-escape; jika kosong, tidak membuat elemen deskripsi.

### Baris 195

````javascript
    const completedClass = task.done ? ' is-done' : '';
````

**Catatan fungsi:** Menentukan kelas `is-done` untuk tugas selesai.

### Baris 196

````javascript
    const completedMark = task.done ? '✓' : '';
````

**Catatan fungsi:** Menentukan simbol centang untuk tugas selesai; tugas aktif memakai string kosong.

### Baris 197

````javascript
    const category = escapeHtml(task.category || 'Personal');
````

**Catatan fungsi:** Membersihkan kategori agar aman ditampilkan; kategori kosong memakai `Personal`.

### Baris 198

````javascript
    return `
````

**Catatan fungsi:** Memulai template literal yang berisi HTML kartu tugas.

### Baris 199

````javascript
      <article class="task-item${completedClass}" data-task-id="${escapeHtml(task.id)}" style="animation-delay:${Math.min(index * 25, 160)}ms">
````

**Catatan fungsi:** Elemen `<article>` punya ID tugas yang di-escape, kelas status selesai bila perlu, dan jeda animasi yang dibatasi maksimum 160 ms agar kartu yang jauh di daftar tidak menunggu terlalu lama.

### Baris 200

````javascript
        <button class="task-check" type="button" data-action="toggle" data-task-id="${escapeHtml(task.id)}" aria-label="${task.done ? 'Tandai belum selesai' : 'Tandai selesai'}: ${escapeHtml(task.title)}" aria-pressed="${task.done ? 'true' : 'false'}">${completedMark}</button>
````

**Catatan fungsi:** Tombol kotak centang menggunakan `data-action="toggle"` dan `data-task-id`; label ARIA berubah mengikuti status sehingga pembaca layar mendapat tindakan yang relevan.

### Baris 201

````javascript
        <div class="task-main">
````

**Catatan fungsi:** Membuka kontainer teks utama tugas.

### Baris 202

````javascript
          <div class="task-title-row"><span class="task-title">${escapeHtml(task.title)}</span></div>
````

**Catatan fungsi:** Menampilkan judul tugas yang telah di-escape.

### Baris 203

````javascript
          ${description}
````

**Catatan fungsi:** Memasukkan deskripsi opsional yang sudah dibuat di baris 194.

### Baris 204

````javascript
          <div class="task-meta"><span class="meta-pill category">${category}</span><span class="meta-pill ${priority.cls}"><span aria-hidden="true">${priority.glyph}</span>${priority.label}</span>${datePill(task)}</div>
````

**Catatan fungsi:** Membuat metadata kategori, prioritas, dan badge tanggal. Kategori sudah di-escape; label prioritas berasal dari pemetaan tetap; tanggal dibuat oleh `datePill`.

### Baris 205

````javascript
        </div>
````

**Catatan fungsi:** Menutup baris metadata/area utama sesuai struktur template.

### Baris 206

````javascript
        <div class="task-actions">
````

**Catatan fungsi:** Membuka area tombol aksi.

### Baris 207

````javascript
          <button class="task-action" type="button" data-action="edit" data-task-id="${escapeHtml(task.id)}" aria-label="Edit tugas: ${escapeHtml(task.title)}" title="Edit">↗</button>
````

**Catatan fungsi:** Tombol edit dengan `data-action="edit"`, ID tugas, label aksesibilitas, dan tooltip.

### Baris 208

````javascript
          <button class="task-action delete" type="button" data-action="delete" data-task-id="${escapeHtml(task.id)}" aria-label="Hapus tugas: ${escapeHtml(task.title)}" title="Hapus">×</button>
````

**Catatan fungsi:** Tombol hapus dengan `data-action="delete"`, ID tugas, label aksesibilitas, dan gaya khusus delete.

### Baris 209

````javascript
        </div>
````

**Catatan fungsi:** Menutup area tombol aksi.

### Baris 210

````javascript
      </article>`;
````

**Catatan fungsi:** Menutup kartu `article` dan template literal; hasil fungsi menjadi string HTML.

### Baris 211

````javascript
  }
````

**Catatan fungsi:** Menutup fungsi `renderTask`.

### Baris 212

````javascript

````

**Catatan fungsi:** Baris kosong.

### Baris 213

````javascript
  function emptyState() {
````

**Catatan fungsi:** Mendefinisikan `emptyState`, pembuat pesan ketika tidak ada tugas yang cocok.

### Baris 214

````javascript
    const query = els.search.value.trim();
````

**Catatan fungsi:** Membaca kata pencarian saat ini.

### Baris 215

````javascript
    if (query) return { title: 'Belum ada yang cocok.', description: 'Coba kata kunci lain atau ubah filter untuk menemukan tugasmu.' };
````

**Catatan fungsi:** Jika pencarian aktif tapi tak ada hasil, sarankan mengganti kata kunci/filter.

### Baris 216

````javascript
    if (currentView === 'today') return { title: 'Hari ini masih lapang.', description: 'Tidak ada tugas bertanggal hari ini. Gunakan ruang ini untuk mulai sesuatu yang baru.' };
````

**Catatan fungsi:** Bila tampilan hari ini kosong, tampilkan pesan khusus bahwa tidak ada tugas hari ini.

### Baris 217

````javascript
    if (currentView === 'upcoming') return { title: 'Belum ada agenda berikutnya.', description: 'Tugas dengan tanggal target mendatang akan muncul di sini.' };
````

**Catatan fungsi:** Bila tampilan mendatang kosong, tampilkan pesan khusus untuk agenda yang akan datang.

### Baris 218

````javascript
    if (currentView === 'completed' || currentStatus === 'done') return { title: 'Cerita selesai dimulai dari sini.', description: 'Saat kamu menuntaskan tugas, daftar pencapaianmu akan muncul di sini.' };
````

**Catatan fungsi:** Bila tampilan selesai atau status `done` kosong, tampilkan pesan khusus untuk daftar pencapaian.

### Baris 219

````javascript
    if (currentStatus === 'active') return { title: 'Semua sudah tuntas.', description: 'Kamu sudah menyelesaikan semua tugas yang ada. Saat siap, tambahkan langkah baru.' };
````

**Catatan fungsi:** Bila filter aktif kosong, beri tahu bahwa seluruh tugas sudah selesai.

### Baris 220

````javascript
    return { title: 'Mulai dari satu hal kecil.', description: 'Tulis satu tugas yang ingin kamu selesaikan. Tidak perlu sempurna — cukup mulai.' };
````

**Catatan fungsi:** Pesan default bila daftar kosong: mulai dengan satu tugas kecil.

### Baris 221

````javascript
  }
````

**Catatan fungsi:** Menutup fungsi keadaan kosong.

### Baris 222

````javascript

````

**Catatan fungsi:** Baris kosong.

### Baris 223

````javascript
  function renderList() {
````

**Catatan fungsi:** Mendefinisikan `renderList`, fungsi yang memperbarui daftar tugas di DOM.

### Baris 224

````javascript
    const visible = getVisibleTasks();
````

**Catatan fungsi:** Menghitung daftar yang sudah melewati filter/urutan.

### Baris 225

````javascript
    els.list.setAttribute('aria-busy', 'false');
````

**Catatan fungsi:** Menyetel `aria-busy="false"`, menandakan konten daftar tidak sedang dimuat.

### Baris 226

````javascript
    if (!visible.length) {
````

**Catatan fungsi:** Jika tidak ada item terlihat, masuk ke cabang tampilan kosong.

### Baris 227

````javascript
      const empty = emptyState();
````

**Catatan fungsi:** Mengambil teks/isi empty state yang sesuai.

### Baris 228

````javascript
      els.list.innerHTML = `<div class="empty-state"><div class="empty-illustration" aria-hidden="true">D.</div><h3>${empty.title}</h3><p>${empty.description}</p><button class="button button-outline" type="button" data-open-task><span class="button-plus" aria-hidden="true">+</span> Buat tugas baru</button></div>`;
````

**Catatan fungsi:** Menyisipkan HTML keadaan kosong serta tombol `data-open-task` untuk membuat tugas baru.

### Baris 229

````javascript
    } else {
````

**Catatan fungsi:** Jika tugas tersedia, masuk ke cabang normal.

### Baris 230

````javascript
      els.list.innerHTML = visible.map(renderTask).join('');
````

**Catatan fungsi:** Mengubah setiap tugas menjadi markup lewat `renderTask`, lalu menggabungkan hasil menjadi satu string HTML.

### Baris 231

````javascript
    }
````

**Catatan fungsi:** Menutup blok `else`.

### Baris 232

````javascript
    els.visibleCount.textContent = `${visible.length} tugas ditampilkan`;
````

**Catatan fungsi:** Memperbarui tulisan jumlah tugas yang terlihat saat ini.

### Baris 233

````javascript
    updateCounters();
````

**Catatan fungsi:** Memperbarui kartu statistik dan angka penghitung navigasi/filter.

### Baris 234

````javascript
  }
````

**Catatan fungsi:** Menutup fungsi `renderList`.

### Baris 235

````javascript

````

**Catatan fungsi:** Baris kosong untuk memisahkan bagian konfigurasi/dokumentasi, tanpa mengubah perilaku program.

### Baris 236

````javascript
  function updateCounters() {
````

**Catatan fungsi:** Mendefinisikan `updateCounters`.

### Baris 237

````javascript
    const total = tasks.length;
````

**Catatan fungsi:** Menghitung banyaknya tugas keseluruhan.

### Baris 238

````javascript
    const done = tasks.filter(task => task.done).length;
````

**Catatan fungsi:** Menghitung tugas yang `done`.

### Baris 239

````javascript
    const active = total - done;
````

**Catatan fungsi:** Menghitung tugas aktif dengan mengurangi total dan jumlah selesai.

### Baris 240

````javascript
    const today = TODAY();
````

**Catatan fungsi:** Mendapat tanggal hari ini.

### Baris 241

````javascript
    const todayCount = tasks.filter(task => !task.done && task.dueDate === today).length;
````

**Catatan fungsi:** Menghitung tugas aktif yang tanggal targetnya hari ini.

### Baris 242

````javascript
    const upcomingCount = tasks.filter(task => !task.done && task.dueDate && task.dueDate > today).length;
````

**Catatan fungsi:** Menghitung tugas aktif yang tanggal targetnya di masa depan.

### Baris 243

````javascript
    const percent = total ? Math.round((done / total) * 100) : 0;
````

**Catatan fungsi:** Menghitung persentase selesai, membulatkan ke bilangan bulat; jika belum ada tugas, persentase 0 untuk menghindari pembagian dengan nol.

### Baris 244

````javascript
    $('#stat-total').textContent = total;
````

**Catatan fungsi:** Memperbarui angka total.

### Baris 245

````javascript
    $('#stat-active').textContent = active;
````

**Catatan fungsi:** Memperbarui angka aktif.

### Baris 246

````javascript
    $('#stat-done').textContent = done;
````

**Catatan fungsi:** Memperbarui angka selesai.

### Baris 247

````javascript
    $('#progress-percent').textContent = `${percent}%`;
````

**Catatan fungsi:** Memperbarui teks persentase.

### Baris 248

````javascript
    $('#progress-fill').style.width = `${percent}%`;
````

**Catatan fungsi:** Mengubah lebar batang progres berdasarkan persentase.

### Baris 249

````javascript
    $('#completion-caption').textContent = done ? `${done} langkah berhasil dituntaskan` : 'Setiap langkah berarti';
````

**Catatan fungsi:** Mengubah caption selesai sesuai apakah ada tugas selesai.

### Baris 250

````javascript
    $('#progress-caption').textContent = total ? `${done} dari ${total} tugas sudah selesai` : 'Awal yang baik dimulai dari satu tugas';
````

**Catatan fungsi:** Mengubah keterangan `done dari total` atau pesan awal.

### Baris 251

````javascript
    $('#nav-all-count').textContent = total;
````

**Catatan fungsi:** Mengubah penghitung navigasi Semua.

### Baris 252

````javascript
    $('#nav-today-count').textContent = todayCount;
````

**Catatan fungsi:** Mengubah penghitung navigasi Hari ini.

### Baris 253

````javascript
    $('#nav-upcoming-count').textContent = upcomingCount;
````

**Catatan fungsi:** Mengubah penghitung navigasi Mendatang.

### Baris 254

````javascript
    $('#nav-completed-count').textContent = done;
````

**Catatan fungsi:** Mengubah penghitung navigasi Selesai.

### Baris 255

````javascript
    $('#filter-all-count').textContent = total;
````

**Catatan fungsi:** Mengubah penghitung filter Semua.

### Baris 256

````javascript
    $('#filter-active-count').textContent = active;
````

**Catatan fungsi:** Mengubah penghitung filter Aktif.

### Baris 257

````javascript
    $('#filter-done-count').textContent = done;
````

**Catatan fungsi:** Mengubah penghitung filter Tuntas.

### Baris 258

````javascript
  }
````

**Catatan fungsi:** Menutup `updateCounters`.

### Baris 259

````javascript

````

**Catatan fungsi:** Baris kosong.

### Baris 260

````javascript
  function renderView() {
````

**Catatan fungsi:** Mendefinisikan `renderView`, yang mengganti judul/crumb dan menggambar ulang daftar.

### Baris 261

````javascript
    const data = viewLabels[currentView] || viewLabels.all;
````

**Catatan fungsi:** Mengambil konfigurasi label tampilan aktif; jika nama tampilan tak valid, gunakan `all`.

### Baris 262

````javascript
    els.breadcrumb.textContent = data.crumb;
````

**Catatan fungsi:** Mengubah teks breadcrumb.

### Baris 263

````javascript
    els.pageTitle.innerHTML = data.title;
````

**Catatan fungsi:** Mengubah judul dengan `innerHTML`, karena string judul yang ditentukan oleh kode mengandung elemen format `<br>`/`<em>`.

### Baris 264

````javascript
    els.tasksSubtitle.textContent = data.subtitle;
````

**Catatan fungsi:** Mengubah subtitle sebagai teks biasa.

### Baris 265

````javascript
    $$('.nav-item[data-view]').forEach(button => {
````

**Catatan fungsi:** Memproses setiap tombol navigasi.

### Baris 266

````javascript
      const selected = button.dataset.view === currentView;
````

**Catatan fungsi:** Menentukan apakah tombol sedang terpilih.

### Baris 267

````javascript
      button.classList.toggle('is-active', selected);
````

**Catatan fungsi:** Menambah/menghapus kelas `is-active` sesuai kondisi.

### Baris 268

````javascript
      if (selected) button.setAttribute('aria-current', 'page');
````

**Catatan fungsi:** Pada tombol terpilih, memberi `aria-current="page"`.

### Baris 269

````javascript
      else button.removeAttribute('aria-current');
````

**Catatan fungsi:** Pada tombol yang tidak terpilih, menghapus atribut `aria-current`.

### Baris 270

````javascript
    });
````

**Catatan fungsi:** Menutup callback navigasi.

### Baris 271

````javascript
    renderList();
````

**Catatan fungsi:** Memperbarui konten daftar dan statistik terkait melalui `renderList`.

### Baris 272

````javascript
  }
````

**Catatan fungsi:** Menutup `renderView`.

### Baris 273

````javascript

````

**Catatan fungsi:** Baris kosong.

### Baris 274

````javascript
  function setView(view) {
````

**Catatan fungsi:** Mendefinisikan `setView(view)`, fungsi perpindahan tampilan utama.

### Baris 275

````javascript
    if (!viewLabels[view]) return;
````

**Catatan fungsi:** Menolak nama tampilan yang tidak terdaftar di `viewLabels`.

### Baris 276

````javascript
    currentView = view;
````

**Catatan fungsi:** Menyimpan tampilan aktif baru.

### Baris 277

````javascript
    currentStatus = 'all';
````

**Catatan fungsi:** Mereset filter status menjadi Semua saat pengguna pindah tampilan utama.

### Baris 278

````javascript
    $$('.filter-tab').forEach(button => {
````

**Catatan fungsi:** Memproses setiap tombol filter.

### Baris 279

````javascript
      const selected = button.dataset.status === 'all';
````

**Catatan fungsi:** Menentukan apakah tombol filter Semua seharusnya terpilih setelah reset.

### Baris 280

````javascript
      button.classList.toggle('is-selected', selected);
````

**Catatan fungsi:** Memperbarui kelas visual filter.

### Baris 281

````javascript
      button.setAttribute('aria-pressed', String(selected));
````

**Catatan fungsi:** Memperbarui `aria-pressed` agar status terpilih terbaca secara aksesibilitas.

### Baris 282

````javascript
    });
````

**Catatan fungsi:** Menutup callback filter.

### Baris 283

````javascript
    closeMobileMenu();
````

**Catatan fungsi:** Menutup menu mobile, jika menu sedang terbuka.

### Baris 284

````javascript
    renderView();
````

**Catatan fungsi:** Menggambar ulang tampilan sesuai pilihan baru.

### Baris 285

````javascript
    window.scrollTo({ top: 0, behavior: 'smooth' });
````

**Catatan fungsi:** Menggulir halaman ke atas secara halus.

### Baris 286

````javascript
  }
````

**Catatan fungsi:** Menutup `setView`.

### Baris 287

````javascript

````

**Catatan fungsi:** Baris kosong untuk memisahkan bagian konfigurasi/dokumentasi, tanpa mengubah perilaku program.

### Baris 288

````javascript
  function setStatus(status) {
````

**Catatan fungsi:** Mendefinisikan `setStatus(status)`.

### Baris 289

````javascript
    if (!['all', 'active', 'done'].includes(status)) return;
````

**Catatan fungsi:** Hanya mengizinkan `all`, `active`, dan `done`.

### Baris 290

````javascript
    currentStatus = status;
````

**Catatan fungsi:** Menyimpan filter status terpilih.

### Baris 291

````javascript
    $$('.filter-tab').forEach(button => {
````

**Catatan fungsi:** Memeriksa semua tombol filter status.

### Baris 292

````javascript
      const selected = button.dataset.status === status;
````

**Catatan fungsi:** Menentukan tombol yang sesuai dengan status baru.

### Baris 293

````javascript
      button.classList.toggle('is-selected', selected);
````

**Catatan fungsi:** Memperbarui kelas CSS pilihan.

### Baris 294

````javascript
      button.setAttribute('aria-pressed', String(selected));
````

**Catatan fungsi:** Memperbarui atribut `aria-pressed`.

### Baris 295

````javascript
    });
````

**Catatan fungsi:** Menutup callback filter.

### Baris 296

````javascript
    renderList();
````

**Catatan fungsi:** Merender ulang daftar saja, karena judul tampilan utama tidak berubah.

### Baris 297

````javascript
  }
````

**Catatan fungsi:** Menutup `setStatus`.

### Baris 298

````javascript

````

**Catatan fungsi:** Baris kosong.

### Baris 299

````javascript
  function openDialog(task = null) {
````

**Catatan fungsi:** Mendefinisikan `openDialog(task = null)`. Tanpa argumen artinya tambah baru; dengan tugas artinya edit.

### Baris 300

````javascript
    els.form.reset();
````

**Catatan fungsi:** Mereset semua kontrol form ke nilai awal sebelum diisi.

### Baris 301

````javascript
    els.taskId.value = task ? task.id : '';
````

**Catatan fungsi:** Mengisi input ID dengan ID tugas untuk edit atau string kosong untuk tugas baru.

### Baris 302

````javascript
    els.title.value = task ? task.title : '';
````

**Catatan fungsi:** Mengisi nama tugas.

### Baris 303

````javascript
    els.description.value = task ? task.description : '';
````

**Catatan fungsi:** Mengisi catatan/deskripsi.

### Baris 304

````javascript
    els.category.value = task ? task.category : 'Personal';
````

**Catatan fungsi:** Mengisi kategori atau default `Personal`.

### Baris 305

````javascript
    if (![...els.category.options].some(option => option.value === els.category.value)) els.category.value = 'Personal';
````

**Catatan fungsi:** Memastikan kategori memang tersedia dalam daftar opsi HTML; kategori lama yang sudah tidak ada akan dikembalikan ke `Personal`.

### Baris 306

````javascript
    els.priority.value = task ? task.priority : 'medium';
````

**Catatan fungsi:** Mengisi prioritas atau default `medium`.

### Baris 307

````javascript
    els.dueDate.value = task ? task.dueDate : '';
````

**Catatan fungsi:** Mengisi tanggal target atau string kosong.

### Baris 308

````javascript
    els.dialogTitle.innerHTML = task ? 'Ubah <em>tugas.</em>' : 'Tugas <em>baru.</em>';
````

**Catatan fungsi:** Mengganti judul dialog sesuai apakah sedang mengedit atau menambah.

### Baris 309

````javascript
    els.saveButton.innerHTML = task ? 'Simpan perubahan <span aria-hidden="true">↗</span>' : 'Simpan tugas <span aria-hidden="true">↗</span>';
````

**Catatan fungsi:** Mengganti teks tombol submit sesuai mode.

### Baris 310

````javascript
    if (typeof els.dialog.showModal === 'function') els.dialog.showModal();
````

**Catatan fungsi:** Jika browser mendukung `showModal`, buka dialog sebagai modal asli HTML.

### Baris 311

````javascript
    else els.dialog.setAttribute('open', 'open');
````

**Catatan fungsi:** Fallback untuk browser tanpa dukungan `showModal`: beri atribut `open`.

### Baris 312

````javascript
    window.setTimeout(() => els.title.focus(), 50);
````

**Catatan fungsi:** Setelah 50 ms, fokuskan input nama tugas supaya pengguna bisa langsung mengetik.

### Baris 313

````javascript
  }
````

**Catatan fungsi:** Menutup fungsi buka dialog.

### Baris 314

````javascript

````

**Catatan fungsi:** Baris kosong.

### Baris 315

````javascript
  function closeDialog() {
````

**Catatan fungsi:** Mendefinisikan `closeDialog`.

### Baris 316

````javascript
    if (typeof els.dialog.close === 'function' && els.dialog.open) els.dialog.close();
````

**Catatan fungsi:** Jika `close()` didukung dan dialog sedang terbuka, tutup dengan API dialog.

### Baris 317

````javascript
    else els.dialog.removeAttribute('open');
````

**Catatan fungsi:** Kalau tidak, hapus atribut `open` sebagai fallback.

### Baris 318

````javascript
  }
````

**Catatan fungsi:** Menutup fungsi.

### Baris 319

````javascript

````

**Catatan fungsi:** Baris kosong untuk memisahkan bagian konfigurasi/dokumentasi, tanpa mengubah perilaku program.

### Baris 320

````javascript
  function handleSubmit(event) {
````

**Catatan fungsi:** Mendefinisikan handler submit form.

### Baris 321

````javascript
    event.preventDefault();
````

**Catatan fungsi:** `preventDefault()` mencegah form melakukan navigasi/reload halaman tradisional.

### Baris 322

````javascript
    const title = safeString(els.title.value, 120);
````

**Catatan fungsi:** Membersihkan judul dan membatasi panjangnya.

### Baris 323

````javascript
    if (!title) { els.title.focus(); showToast('Nama tugas belum diisi.'); return; }
````

**Catatan fungsi:** Jika judul kosong, fokuskan input, tampilkan toast, lalu hentikan pemrosesan dengan `return`.

### Baris 324

````javascript
    const existingId = els.taskId.value;
````

**Catatan fungsi:** Membaca ID dari input tersembunyi; nilai ini menunjukkan mode edit bila ada.

### Baris 325

````javascript
    const existing = existingId ? tasks.find(task => task.id === existingId) : null;
````

**Catatan fungsi:** Mencari tugas lama dengan ID yang sama; bila ID kosong, `existing` menjadi `null`.

### Baris 326

````javascript
    const task = normalizeTask({
````

**Catatan fungsi:** Membuat objek baru lalu menormalkannya dengan `normalizeTask`.

### Baris 327

````javascript
      id: existing ? existing.id : makeId(),
````

**Catatan fungsi:** Pertahankan ID lama saat edit, atau buat ID baru saat tambah.

### Baris 328

````javascript
      title,
````

**Catatan fungsi:** Mengisi judul yang sudah divalidasi.

### Baris 329

````javascript
      description: els.description.value,
````

**Catatan fungsi:** Mengambil deskripsi dari form.

### Baris 330

````javascript
      category: els.category.value,
````

**Catatan fungsi:** Mengambil kategori.

### Baris 331

````javascript
      priority: els.priority.value,
````

**Catatan fungsi:** Mengambil prioritas.

### Baris 332

````javascript
      dueDate: els.dueDate.value,
````

**Catatan fungsi:** Mengambil tanggal target.

### Baris 333

````javascript
      done: existing ? existing.done : false,
````

**Catatan fungsi:** Mempertahankan status selesai saat edit; tugas baru dimulai dalam keadaan belum selesai.

### Baris 334

````javascript
      createdAt: existing ? existing.createdAt : new Date().toISOString(),
````

**Catatan fungsi:** Mempertahankan waktu pembuatan lama saat edit; tugas baru mencatat waktu sekarang.

### Baris 335

````javascript
      completedAt: existing ? existing.completedAt : null,
````

**Catatan fungsi:** Mempertahankan `completedAt` bila edit; tugas baru belum punya waktu selesai.

### Baris 336

````javascript
    });
````

**Catatan fungsi:** Menutup objek input dan pemanggilan `normalizeTask`.

### Baris 337

````javascript
    if (!task) { showToast('Tugas tidak dapat disimpan. Periksa nama tugas.'); return; }
````

**Catatan fungsi:** Pengaman kedua: bila normalisasi gagal, tampilkan pesan dan jangan menyimpan.

### Baris 338

````javascript
    if (existing) {
````

**Catatan fungsi:** Memulai cabang edit jika tugas lama ditemukan.

### Baris 339

````javascript
      tasks = tasks.map(item => item.id === existing.id ? task : item);
````

**Catatan fungsi:** Membuat array baru, mengganti elemen dengan ID yang cocok, lalu mempertahankan elemen lain.

### Baris 340

````javascript
      showToast('Perubahan tugas berhasil disimpan.');
````

**Catatan fungsi:** Menampilkan konfirmasi bahwa perubahan tersimpan.

### Baris 341

````javascript
    } else {
````

**Catatan fungsi:** Cabang untuk tugas baru.

### Baris 342

````javascript
      tasks.unshift(task);
````

**Catatan fungsi:** Menambahkan tugas baru di awal array dengan `unshift` sehingga biasanya muncul di bagian atas sebelum disortir.

### Baris 343

````javascript
      showToast('Tugas baru berhasil ditambahkan.');
````

**Catatan fungsi:** Menampilkan pesan tugas baru berhasil ditambahkan.

### Baris 344

````javascript
    }
````

**Catatan fungsi:** Menutup cabang tambah.

### Baris 345

````javascript
    persistTasks();
````

**Catatan fungsi:** Menyimpan data ke localStorage.

### Baris 346

````javascript
    closeDialog();
````

**Catatan fungsi:** Menutup dialog.

### Baris 347

````javascript
    renderView();
````

**Catatan fungsi:** Merender tampilan/list/statistik terbaru.

### Baris 348

````javascript
  }
````

**Catatan fungsi:** Menutup handler submit.

### Baris 349

````javascript

````

**Catatan fungsi:** Baris kosong untuk memisahkan bagian konfigurasi/dokumentasi, tanpa mengubah perilaku program.

### Baris 350

````javascript
  function onTaskAction(event) {
````

**Catatan fungsi:** Mendefinisikan handler delegasi event `onTaskAction`.

### Baris 351

````javascript
    const addButton = event.target.closest('button[data-open-task]');
````

**Catatan fungsi:** Memeriksa apakah elemen yang diklik berada di dalam tombol `data-open-task`.

### Baris 352

````javascript
    if (addButton) { openDialog(); return; }
````

**Catatan fungsi:** Jika ya, buka dialog tugas baru lalu keluar dari handler.

### Baris 353

````javascript
    const button = event.target.closest('button[data-action]');
````

**Catatan fungsi:** Kalau bukan tombol tambah, cari tombol bertanda `data-action` seperti toggle/edit/delete.

### Baris 354

````javascript
    if (!button) return;
````

**Catatan fungsi:** Jika klik bukan di tombol aksi, hentikan fungsi.

### Baris 355

````javascript
    const task = tasks.find(item => item.id === button.dataset.taskId);
````

**Catatan fungsi:** Cari data tugas berdasarkan `data-task-id` pada tombol.

### Baris 356

````javascript
    if (!task) return;
````

**Catatan fungsi:** Jika tugas tidak ditemukan, hentikan handler; ini mencegah tindakan terhadap ID yang tidak valid atau elemen yang sudah usang.

### Baris 357

````javascript

````

**Catatan fungsi:** Baris pemisah sebelum percabangan aksi.

### Baris 358

````javascript
    if (button.dataset.action === 'toggle') {
````

**Catatan fungsi:** Memeriksa apakah aksi yang dipilih adalah toggle status.

### Baris 359

````javascript
      task.done = !task.done;
````

**Catatan fungsi:** Membalik nilai boolean `done`.

### Baris 360

````javascript
      task.completedAt = task.done ? new Date().toISOString() : null;
````

**Catatan fungsi:** Jika tugas sekarang selesai, catat timestamp penyelesaian; jika diaktifkan lagi, kosongkan `completedAt`.

### Baris 361

````javascript
      persistTasks();
````

**Catatan fungsi:** Simpan hasil ke localStorage.

### Baris 362

````javascript
      renderView();
````

**Catatan fungsi:** Perbarui tampilan.

### Baris 363

````javascript
      showToast(task.done ? 'Satu langkah berhasil dituntaskan. ✳' : 'Tugas dikembalikan ke daftar aktif.');
````

**Catatan fungsi:** Tampilkan toast berbeda sesuai status baru.

### Baris 364

````javascript
    } else if (button.dataset.action === 'edit') {
````

**Catatan fungsi:** Cabang aksi edit.

### Baris 365

````javascript
      openDialog(task);
````

**Catatan fungsi:** Buka dialog dengan data tugas yang dipilih.

### Baris 366

````javascript
    } else if (button.dataset.action === 'delete') {
````

**Catatan fungsi:** Cabang aksi hapus.

### Baris 367

````javascript
      const ok = window.confirm(`Hapus tugas “${task.title}”? Tindakan ini tidak dapat dibatalkan.`);
````

**Catatan fungsi:** Menampilkan `confirm` browser, termasuk nama tugas; bila pengguna menerima, barulah lanjut menghapus.

### Baris 368

````javascript
      if (!ok) return;
````

**Catatan fungsi:** Jika pengguna membatalkan, keluar tanpa mengubah data.

### Baris 369

````javascript
      tasks = tasks.filter(item => item.id !== task.id);
````

**Catatan fungsi:** Membuat array baru tanpa tugas terpilih.

### Baris 370

````javascript
      persistTasks();
````

**Catatan fungsi:** Menyimpan array terbaru.

### Baris 371

````javascript
      renderView();
````

**Catatan fungsi:** Menggambar ulang UI.

### Baris 372

````javascript
      showToast('Tugas berhasil dihapus.');
````

**Catatan fungsi:** Menampilkan pesan penghapusan sukses.

### Baris 373

````javascript
    }
````

**Catatan fungsi:** Menutup cabang delete.

### Baris 374

````javascript
  }
````

**Catatan fungsi:** Menutup fungsi handler.

### Baris 375

````javascript

````

**Catatan fungsi:** Baris kosong untuk memisahkan bagian konfigurasi/dokumentasi, tanpa mengubah perilaku program.

### Baris 376

````javascript
  function exportTasks() {
````

**Catatan fungsi:** Mendefinisikan fungsi ekspor.

### Baris 377

````javascript
    const payload = {
````

**Catatan fungsi:** Memulai objek payload berisi metadata cadangan dan daftar tugas.

### Baris 378

````javascript
      app: 'Paradoks D. Task',
````

**Catatan fungsi:** Menandai nama aplikasi yang membuat cadangan.

### Baris 379

````javascript
      schemaVersion: 1,
````

**Catatan fungsi:** Menyimpan versi skema cadangan agar format dapat dikembangkan di masa depan.

### Baris 380

````javascript
      exportedAt: new Date().toISOString(),
````

**Catatan fungsi:** Menyimpan waktu ekspor dengan format ISO.

### Baris 381

````javascript
      tasks,
````

**Catatan fungsi:** Menyertakan seluruh array tugas saat ini.

### Baris 382

````javascript
    };
````

**Catatan fungsi:** Menutup objek payload.

### Baris 383

````javascript
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
````

**Catatan fungsi:** Mengubah payload menjadi JSON dengan indentasi 2 spasi dan membuat `Blob` bertipe JSON.

### Baris 384

````javascript
    const url = URL.createObjectURL(blob);
````

**Catatan fungsi:** Membuat URL sementara yang menunjuk Blob tersebut.

### Baris 385

````javascript
    const link = document.createElement('a');
````

**Catatan fungsi:** Membuat elemen link HTML secara dinamis.

### Baris 386

````javascript
    link.href = url;
````

**Catatan fungsi:** Mengisi `href` link dengan URL Blob.

### Baris 387

````javascript
    link.download = `paradoks-d-task-cadangan-${TODAY()}.json`;
````

**Catatan fungsi:** Memberi nama file unduhan yang memasukkan tanggal saat ini.

### Baris 388

````javascript
    document.body.appendChild(link);
````

**Catatan fungsi:** Memasukkan link sementara ke body karena sebagian browser membutuhkan elemen terpasang agar klik unduh berfungsi.

### Baris 389

````javascript
    link.click();
````

**Catatan fungsi:** Mensimulasikan klik untuk memulai unduhan.

### Baris 390

````javascript
    link.remove();
````

**Catatan fungsi:** Menghapus link sementara dari DOM.

### Baris 391

````javascript
    URL.revokeObjectURL(url);
````

**Catatan fungsi:** Melepaskan URL Blob agar sumber daya browser tidak terus tertahan.

### Baris 392

````javascript
    showToast(`Cadangan dibuat: ${tasks.length} tugas.`);
````

**Catatan fungsi:** Memberi toast jumlah tugas yang dicadangkan.

### Baris 393

````javascript
  }
````

**Catatan fungsi:** Menutup fungsi ekspor.

### Baris 394

````javascript

````

**Catatan fungsi:** Baris kosong.

### Baris 395

````javascript
  async function importTasks(file) {
````

**Catatan fungsi:** Mendefinisikan `importTasks(file)` sebagai fungsi async karena isi file dibaca secara asynchronous.

### Baris 396

````javascript
    if (!file) return;
````

**Catatan fungsi:** Jika tidak ada file dipilih, hentikan.

### Baris 397

````javascript
    if (file.size > 2 * 1024 * 1024) { showToast('File terlalu besar. Pilih file cadangan di bawah 2 MB.'); return; }
````

**Catatan fungsi:** Menolak file lebih besar dari 2 MB untuk membatasi data yang diproses.

### Baris 398

````javascript
    try {
````

**Catatan fungsi:** Memulai blok `try` untuk membaca dan memvalidasi file.

### Baris 399

````javascript
      const parsed = JSON.parse(await file.text());
````

**Catatan fungsi:** Membaca teks file, lalu mem-parse JSON. `await` menunggu operasi pembacaan file selesai.

### Baris 400

````javascript
      const imported = Array.isArray(parsed) ? parsed : parsed && Array.isArray(parsed.tasks) ? parsed.tasks : null;
````

**Catatan fungsi:** Mengizinkan dua bentuk cadangan: array langsung, atau objek yang memiliki properti `tasks` berupa array.

### Baris 401

````javascript
      if (!imported) throw new Error('format');
````

**Catatan fungsi:** Jika bentuk data tidak diterima, lempar error supaya diproses `catch`.

### Baris 402

````javascript
      const normalized = imported.map(normalizeTask).filter(Boolean);
````

**Catatan fungsi:** Menormalkan setiap tugas dan membuang yang tidak valid.

### Baris 403

````javascript
      const confirmText = `Impor ${normalized.length} tugas dari file ini? Daftar tugas saat ini akan diganti.`;
````

**Catatan fungsi:** Menyiapkan teks konfirmasi bahwa impor akan mengganti daftar tugas sekarang, bukan menggabungkan data.

### Baris 404

````javascript
      if (!window.confirm(confirmText)) return;
````

**Catatan fungsi:** Jika pengguna menolak konfirmasi, hentikan fungsi.

### Baris 405

````javascript
      const ids = new Set();
````

**Catatan fungsi:** Membuat `Set` kosong untuk mendeteksi ID duplikat.

### Baris 406

````javascript
      tasks = normalized.map(task => {
````

**Catatan fungsi:** Memetakan data impor menjadi daftar baru, sambil memeriksa ID satu per satu.

### Baris 407

````javascript
        if (ids.has(task.id)) task.id = makeId();
````

**Catatan fungsi:** Jika ID sudah ditemukan sebelumnya, buat ID baru agar dua tugas tidak berbagi identitas.

### Baris 408

````javascript
        ids.add(task.id);
````

**Catatan fungsi:** Menambahkan ID tugas yang sudah dipastikan unik ke `Set`.

### Baris 409

````javascript
        return task;
````

**Catatan fungsi:** Mengembalikan item tugas dari callback map.

### Baris 410

````javascript
      });
````

**Catatan fungsi:** Menutup proses map; `tasks` kini berisi tugas impor yang dinormalisasi.

### Baris 411

````javascript
      const saved = persistTasks();
````

**Catatan fungsi:** Menyimpan hasil impor; nilai balik `saved` memberitahu apakah penulisan berhasil.

### Baris 412

````javascript
      renderView();
````

**Catatan fungsi:** Memperbarui tampilan.

### Baris 413

````javascript
      showToast(saved ? `${tasks.length} tugas berhasil diimpor.` : 'Data diimpor, tetapi browser gagal menyimpannya.');
````

**Catatan fungsi:** Menampilkan pesan sukses atau peringatan bila data sudah diimpor ke memori tetapi gagal disimpan permanen di localStorage.

### Baris 414

````javascript
    } catch (error) {
````

**Catatan fungsi:** Menangkap error format, parse, atau proses impor lainnya.

### Baris 415

````javascript
      console.warn('File cadangan tidak valid.', error);
````

**Catatan fungsi:** Menulis detail error ke console untuk debugging.

### Baris 416

````javascript
      showToast('File tidak dikenali. Gunakan file JSON hasil ekspor Paradoks D. Task.');
````

**Catatan fungsi:** Menampilkan pesan bahwa file tidak dikenali dan menyarankan file hasil ekspor aplikasi.

### Baris 417

````javascript
    } finally {
````

**Catatan fungsi:** `finally` berjalan baik sukses maupun gagal.

### Baris 418

````javascript
      els.importFile.value = '';
````

**Catatan fungsi:** Mengosongkan nilai input file agar file yang sama bisa dipilih lagi pada percobaan berikutnya.

### Baris 419

````javascript
    }
````

**Catatan fungsi:** Menutup `finally`.

### Baris 420

````javascript
  }
````

**Catatan fungsi:** Menutup fungsi impor.

### Baris 421

````javascript

````

**Catatan fungsi:** Baris kosong untuk memisahkan bagian konfigurasi/dokumentasi, tanpa mengubah perilaku program.

### Baris 422

````javascript
  function setTheme(theme) {
````

**Catatan fungsi:** Mendefinisikan fungsi `setTheme(theme)`.

### Baris 423

````javascript
    const chosen = theme === 'light' ? 'light' : 'dark';
````

**Catatan fungsi:** Menormalkan pilihan: hanya nilai `light` yang diterima sebagai light; semua nilai lain menjadi dark.

### Baris 424

````javascript
    els.html.dataset.theme = chosen;
````

**Catatan fungsi:** Mengubah `data-theme` pada elemen `<html>`; CSS menggunakan atribut tersebut untuk mengganti variabel warna.

### Baris 425

````javascript
    $('#theme-label').textContent = chosen === 'dark' ? 'Tampilan terang' : 'Tampilan gelap';
````

**Catatan fungsi:** Memperbarui teks tombol sehingga menawarkan tema kebalikan dari tema aktif.

### Baris 426

````javascript
    $('#theme-icon').textContent = chosen === 'dark' ? '☼' : '☾';
````

**Catatan fungsi:** Mengganti ikon tema, matahari atau bulan.

### Baris 427

````javascript
    const themeColor = $('meta[name="theme-color"]');
````

**Catatan fungsi:** Mencari meta tag `theme-color` pada `<head>`.

### Baris 428

````javascript
    if (themeColor) themeColor.content = chosen === 'dark' ? '#111016' : '#f5f3f8';
````

**Catatan fungsi:** Jika meta tag ada, menyesuaikan warna toolbar browser untuk tema light/dark.

### Baris 429

````javascript
    try { localStorage.setItem(THEME_KEY, chosen); } catch { /* optional preference */ }
````

**Catatan fungsi:** Menyimpan tema pilihan ke localStorage. `try/catch` kosong disengaja karena penyimpanan preferensi dianggap opsional.

### Baris 430

````javascript
  }
````

**Catatan fungsi:** Menutup fungsi tema.

### Baris 431

````javascript

````

**Catatan fungsi:** Baris kosong.

### Baris 432

````javascript
  function toggleTheme() {
````

**Catatan fungsi:** Mendefinisikan `toggleTheme`.

### Baris 433

````javascript
    setTheme(els.html.dataset.theme === 'dark' ? 'light' : 'dark');
````

**Catatan fungsi:** Memilih light bila tema saat ini dark, dan sebaliknya.

### Baris 434

````javascript
  }
````

**Catatan fungsi:** Menutup fungsi toggle.

### Baris 435

````javascript

````

**Catatan fungsi:** Baris kosong.

### Baris 436

````javascript
  function openMobileMenu() {
````

**Catatan fungsi:** Mendefinisikan pembuka menu mobile.

### Baris 437

````javascript
    els.sidebar.classList.add('is-open');
````

**Catatan fungsi:** Menambahkan kelas `is-open` ke sidebar agar CSS menggesernya ke dalam layar.

### Baris 438

````javascript
    els.scrim.hidden = false;
````

**Catatan fungsi:** Menampilkan scrim di belakang menu.

### Baris 439

````javascript
    $('#mobile-menu').setAttribute('aria-expanded', 'true');
````

**Catatan fungsi:** Mengubah `aria-expanded` menjadi `true`.

### Baris 440

````javascript
  }
````

**Catatan fungsi:** Menutup fungsi.

### Baris 441

````javascript

````

**Catatan fungsi:** Baris kosong.

### Baris 442

````javascript
  function closeMobileMenu() {
````

**Catatan fungsi:** Mendefinisikan penutup menu mobile.

### Baris 443

````javascript
    els.sidebar.classList.remove('is-open');
````

**Catatan fungsi:** Menghapus kelas `is-open` agar sidebar keluar dari layar.

### Baris 444

````javascript
    els.scrim.hidden = true;
````

**Catatan fungsi:** Menyembunyikan scrim.

### Baris 445

````javascript
    $('#mobile-menu').setAttribute('aria-expanded', 'false');
````

**Catatan fungsi:** Mengubah `aria-expanded` menjadi `false`.

### Baris 446

````javascript
  }
````

**Catatan fungsi:** Menutup fungsi.

### Baris 447

````javascript

````

**Catatan fungsi:** Baris kosong.

### Baris 448

````javascript
  function enterFocusMode() {
````

**Catatan fungsi:** Mendefinisikan `enterFocusMode`.

### Baris 449

````javascript
    focusReturnTarget = document.activeElement;
````

**Catatan fungsi:** Menyimpan elemen yang sedang memiliki fokus keyboard.

### Baris 450

````javascript
    els.focusOverlay.hidden = false;
````

**Catatan fungsi:** Menampilkan overlay fokus dengan membuang kondisi `hidden`.

### Baris 451

````javascript
    $('#exit-focus').focus();
````

**Catatan fungsi:** Memindahkan fokus ke tombol keluar agar mode fokus bisa dioperasikan dengan keyboard.

### Baris 452

````javascript
  }
````

**Catatan fungsi:** Menutup fungsi.

### Baris 453

````javascript

````

**Catatan fungsi:** Baris kosong.

### Baris 454

````javascript
  function exitFocusMode() {
````

**Catatan fungsi:** Mendefinisikan `exitFocusMode`.

### Baris 455

````javascript
    els.focusOverlay.hidden = true;
````

**Catatan fungsi:** Menyembunyikan overlay fokus.

### Baris 456

````javascript
    if (focusReturnTarget && typeof focusReturnTarget.focus === 'function') focusReturnTarget.focus();
````

**Catatan fungsi:** Jika elemen yang sebelumnya fokus masih ada dan mempunyai fungsi `focus`, kembalikan fokus ke sana.

### Baris 457

````javascript
  }
````

**Catatan fungsi:** Menutup fungsi.

### Baris 458

````javascript

````

**Catatan fungsi:** Baris kosong untuk memisahkan bagian konfigurasi/dokumentasi, tanpa mengubah perilaku program.

### Baris 459

````javascript
  // Navigation and page controls.
````

**Catatan fungsi:** Komentar penanda bahwa bagian berikut memasang event navigasi dan kontrol halaman.

### Baris 460

````javascript
  els.navItems.forEach(button => button.addEventListener('click', () => setView(button.dataset.view)));
````

**Catatan fungsi:** Untuk setiap tombol navigasi, pasang listener klik yang memanggil `setView` memakai `data-view` tombol.

### Baris 461

````javascript
  $$('[data-open-task]').forEach(button => button.addEventListener('click', () => openDialog()));
````

**Catatan fungsi:** Pasang listener tombol bertanda `data-open-task` supaya membuka dialog tugas baru. Ini dipasang pada tombol yang ada sejak HTML awal; tombol yang disisipkan saat render daftar ditangani melalui delegasi di `onTaskAction`.

### Baris 462

````javascript
  $$('[data-status]').forEach(button => button.addEventListener('click', () => setStatus(button.dataset.status)));
````

**Catatan fungsi:** Listener pada tombol `data-status` untuk mengubah filter status.

### Baris 463

````javascript
  els.list.addEventListener('click', onTaskAction);
````

**Catatan fungsi:** Memasang satu listener klik pada kontainer daftar, lalu meneruskan event ke `onTaskAction`. Cara delegasi ini juga berlaku pada tombol yang baru dibuat melalui `innerHTML`.

### Baris 464

````javascript
  els.form.addEventListener('submit', handleSubmit);
````

**Catatan fungsi:** Ketika form dikirim, panggil `handleSubmit`.

### Baris 465

````javascript
  $('#close-dialog').addEventListener('click', closeDialog);
````

**Catatan fungsi:** Mengaitkan tombol silang dengan penutupan dialog.

### Baris 466

````javascript
  $('#cancel-dialog').addEventListener('click', closeDialog);
````

**Catatan fungsi:** Mengaitkan tombol batal dengan penutupan dialog.

### Baris 467

````javascript
  els.dialog.addEventListener('click', event => { if (event.target === els.dialog) closeDialog(); });
````

**Catatan fungsi:** Klik langsung pada latar dialog (bukan pada konten di dalamnya) juga menutup dialog.

### Baris 468

````javascript
  els.search.addEventListener('input', renderList);
````

**Catatan fungsi:** Saat pengguna mengetik di pencarian, render ulang daftar berdasarkan query.

### Baris 469

````javascript
  els.sort.addEventListener('change', renderList);
````

**Catatan fungsi:** Saat opsi urutan berubah, render ulang daftar dengan urutan baru.

### Baris 470

````javascript
  $('#theme-toggle').addEventListener('click', toggleTheme);
````

**Catatan fungsi:** Klik tombol tema memanggil `toggleTheme`.

### Baris 471

````javascript
  $('#export-button').addEventListener('click', exportTasks);
````

**Catatan fungsi:** Klik ekspor memanggil `exportTasks`.

### Baris 472

````javascript
  $('#import-button').addEventListener('click', () => els.importFile.click());
````

**Catatan fungsi:** Klik impor memicu klik pada input file tersembunyi.

### Baris 473

````javascript
  els.importFile.addEventListener('change', event => importTasks(event.target.files && event.target.files[0]));
````

**Catatan fungsi:** Saat pilihan file berubah, kirim file pertama (jika ada) ke `importTasks`.

### Baris 474

````javascript
  $('#mobile-menu').addEventListener('click', () => els.sidebar.classList.contains('is-open') ? closeMobileMenu() : openMobileMenu());
````

**Catatan fungsi:** Klik menu ponsel: jika sidebar terbuka, tutup; jika tidak, buka.

### Baris 475

````javascript
  els.scrim.addEventListener('click', closeMobileMenu);
````

**Catatan fungsi:** Klik scrim menutup sidebar.

### Baris 476

````javascript
  $('#focus-button').addEventListener('click', enterFocusMode);
````

**Catatan fungsi:** Klik tombol mode fokus membuka overlay fokus.

### Baris 477

````javascript
  $('#exit-focus').addEventListener('click', exitFocusMode);
````

**Catatan fungsi:** Klik tombol kembali menutup overlay fokus.

### Baris 478

````javascript

````

**Catatan fungsi:** Baris kosong.

### Baris 479

````javascript
  document.addEventListener('keydown', event => {
````

**Catatan fungsi:** Memasang listener `keydown` di seluruh dokumen untuk shortcut keyboard.

### Baris 480

````javascript
    const target = event.target;
````

**Catatan fungsi:** Menyimpan target elemen tempat keyboard event terjadi.

### Baris 481

````javascript
    const typing = target instanceof HTMLElement && (target.isContentEditable || ['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName));
````

**Catatan fungsi:** Mengidentifikasi apakah pengguna sedang mengetik di elemen input, textarea, select, atau area contenteditable supaya shortcut tidak mengganggu pengetikan.

### Baris 482

````javascript
    if (event.key === '/' && !typing && !els.dialog.open && els.focusOverlay.hidden) {
````

**Catatan fungsi:** Shortcut `/` berlaku hanya ketika pengguna tidak sedang mengetik, dialog tertutup, dan overlay fokus tidak aktif.

### Baris 483

````javascript
      event.preventDefault();
````

**Catatan fungsi:** Membatalkan perilaku default tombol `/` (misalnya karakter dimasukkan pada elemen fokus).

### Baris 484

````javascript
      els.search.focus();
````

**Catatan fungsi:** Memfokuskan input pencarian.

### Baris 485

````javascript
    }
````

**Catatan fungsi:** Menutup blok shortcut `/`.

### Baris 486

````javascript
    if (event.key === 'Escape' && !els.dialog.open && !els.focusOverlay.hidden) exitFocusMode();
````

**Catatan fungsi:** Tombol Escape keluar dari mode fokus jika dialog tidak terbuka dan overlay fokus sedang ditampilkan.

### Baris 487

````javascript
  });
````

**Catatan fungsi:** Menutup listener keyboard.

### Baris 488

````javascript

````

**Catatan fungsi:** Baris kosong untuk memisahkan bagian konfigurasi/dokumentasi, tanpa mengubah perilaku program.

### Baris 489

````javascript
  // Initial state.
````

**Catatan fungsi:** Komentar menandai bagian state awal.

### Baris 490

````javascript
  els.date.textContent = niceCurrentDate();
````

**Catatan fungsi:** Mengisi label tanggal dengan tanggal lokal terformat.

### Baris 491

````javascript
  try { setTheme(localStorage.getItem(THEME_KEY) || 'dark'); } catch { setTheme('dark'); }
````

**Catatan fungsi:** Mencoba membaca tema pilihan dari localStorage; default dark bila belum pernah tersimpan. Jika localStorage menimbulkan error, tetap menetapkan tema dark.

### Baris 492

````javascript
  renderView();
````

**Catatan fungsi:** Memanggil `renderView` agar judul, nav, daftar, serta angka statistik awal ditampilkan.

### Baris 493

````javascript

````

**Catatan fungsi:** Baris kosong.

### Baris 494

````javascript
  // Non-blocking connectivity indicator for the FastAPI shell.
````

**Catatan fungsi:** Komentar menjelaskan pemeriksaan konektivitas ringan ke backend FastAPI.

### Baris 495

````javascript
  fetch('/api/health', { headers: { Accept: 'application/json' } })
````

**Catatan fungsi:** Mengirim request ke endpoint `/api/health` dan meminta respons JSON melalui header `Accept`.

### Baris 496

````javascript
    .then(response => { if (!response.ok) throw new Error('health check failed'); return response.json(); })
````

**Catatan fungsi:** Jika HTTP response gagal, lempar error; jika sukses, ubah response menjadi objek JSON.

### Baris 497

````javascript
    .then(data => {
````

**Catatan fungsi:** Memulai tahap saat JSON berhasil diterima.

### Baris 498

````javascript
      if (!data.assets_available) showToast('Beberapa file antarmuka belum tersedia. Periksa folder public/.');
````

**Catatan fungsi:** Jika endpoint menyatakan ada aset yang hilang, tampilkan toast yang meminta pemeriksaan folder `public/`.

### Baris 499

````javascript
    })
````

**Catatan fungsi:** Menutup callback sukses.

### Baris 500

````javascript
    .catch(() => console.info('Pemeriksaan API tidak tersedia; antarmuka lokal tetap dapat digunakan.'));
````

**Catatan fungsi:** Jika request gagal, catat info di console. Antarmuka tetap bisa digunakan secara lokal walau pemeriksaan API tidak tersedia.

### Baris 501

````javascript
})();
````

**Catatan fungsi:** `})();` menutup dan langsung menjalankan IIFE yang dibuka di baris 1.

---

# Penjelasan baris demi baris — `public/favicon.svg`

Catatan di bawah setiap potongan merujuk pada baris sumber dengan nomor yang sama. Kode asli tidak dimodifikasi; dokumen ini adalah bahan belajar, bukan file yang langsung dijalankan.

### Baris 1

````xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
````

**Catatan fungsi:** Membuka gambar SVG dan menetapkan sistem namespace serta bidang pandang 64 × 64 unit.

### Baris 2

````xml
  <rect width="64" height="64" rx="18" fill="#17141e"/>
````

**Catatan fungsi:** Menggambar latar ikon berbentuk persegi membulat berukuran 64 × 64 dengan warna gelap.

### Baris 3

````xml
  <path d="M15 15h18c11 0 18 7 18 17S44 49 33 49H15V15zm12 10v14h6c5 0 8-3 8-7s-3-7-8-7h-6z" fill="#d9ff66"/>
````

**Catatan fungsi:** Menggambar bentuk monogram “D” menggunakan path vektor dan mengisinya dengan aksen lime.

### Baris 4

````xml
  <circle cx="48" cy="15" r="4" fill="#a795ff"/>
````

**Catatan fungsi:** Menggambar lingkaran aksen violet kecil di sudut kanan atas ikon.

### Baris 5

````xml
</svg>
````

**Catatan fungsi:** Menutup elemen SVG.

---

# Penjelasan baris demi baris — `public/index.html`

Catatan di bawah setiap potongan merujuk pada baris sumber dengan nomor yang sama. Kode asli tidak dimodifikasi; dokumen ini adalah bahan belajar, bukan file yang langsung dijalankan.

### Baris 1

````html
<!doctype html>
````

**Catatan fungsi:** `<!doctype html>` memberi tahu browser bahwa halaman memakai standar HTML modern.

### Baris 2

````html
<html lang="id" data-theme="dark">
````

**Catatan fungsi:** Membuka elemen `<html>`, bahasa konten ditetapkan ke Indonesia (`lang="id"`), dan `data-theme="dark"` memilih tema awal gelap. CSS membaca atribut tema ini.

### Baris 3

````html
<head>
````

**Catatan fungsi:** Membuka bagian `<head>` untuk metadata, judul, serta referensi aset.

### Baris 4

````html
  <meta charset="utf-8">
````

**Catatan fungsi:** Memastikan karakter, termasuk aksara Indonesia, dibaca sebagai UTF-8.

### Baris 5

````html
  <meta name="viewport" content="width=device-width, initial-scale=1">
````

**Catatan fungsi:** Mengatur lebar halaman mengikuti lebar perangkat dan skala awal 1 agar responsif.

### Baris 6

````html
  <meta name="theme-color" content="#111016">
````

**Catatan fungsi:** Memberi warna tema browser/peramban untuk UI yang mendukung meta `theme-color`.

### Baris 7

````html
  <meta name="description" content="Paradoks D. Task — ruang tenang untuk mengelola hal-hal yang penting.">
````

**Catatan fungsi:** Memberi deskripsi halaman untuk konteks browser/mesin pencari.

### Baris 8

````html
  <title>Paradoks D. Task — ruang untuk fokus</title>
````

**Catatan fungsi:** Menentukan judul yang muncul di tab browser.

### Baris 9

````html
  <link rel="icon" href="/favicon.svg" type="image/svg+xml">
````

**Catatan fungsi:** Memuat ikon situs SVG dari `/favicon.svg`.

### Baris 10

````html
  <link rel="manifest" href="/manifest.webmanifest">
````

**Catatan fungsi:** Menghubungkan metadata aplikasi web dari `/manifest.webmanifest`.

### Baris 11

````html
  <link rel="stylesheet" href="/style.css">
````

**Catatan fungsi:** Memuat stylesheet utama `/style.css`.

### Baris 12

````html
  <script src="/app.js" defer></script>
````

**Catatan fungsi:** Memuat `/app.js`; atribut `defer` membuat skrip dijalankan setelah HTML selesai diparse, sehingga elemen yang dicari JavaScript telah tersedia.

### Baris 13

````html
</head>
````

**Catatan fungsi:** Menutup `<head>`.

### Baris 14

````html
<body>
````

**Catatan fungsi:** Membuka isi dokumen dengan `<body>`.

### Baris 15

````html
  <div class="app-shell">
````

**Catatan fungsi:** `app-shell` menjadi pembungkus layout utama.

### Baris 16

````html
    <aside class="sidebar" id="sidebar" aria-label="Navigasi utama">
````

**Catatan fungsi:** Membuka sidebar navigasi. `id="sidebar"` digunakan JavaScript untuk menu ponsel; `aria-label` menjelaskan maksud area pada pembaca layar.

### Baris 17

````html
      <a class="brand" href="#dashboard" aria-label="Paradoks D. Task, beranda" data-view-link="all">
````

**Catatan fungsi:** Membuat tautan merek/logo yang menuju bagian dashboard; label aksesibilitas menyebut nama beranda dan `data-view-link` memberi penanda tampilan semua tugas.

### Baris 18

````html
        <span class="brand-mark" aria-hidden="true"><span></span><span></span><span></span></span>
````

**Catatan fungsi:** Tiga `<span>` kosong menjadi elemen dekorasi logo; `aria-hidden="true"` menyembunyikannya dari teknologi pembaca layar.

### Baris 19

````html
        <span class="brand-copy"><strong>paradoks<span>.</span></strong><small>D. TASK / PERSONAL SPACE</small></span>
````

**Catatan fungsi:** Nama merek dan teks kecil identitas aplikasi.

### Baris 20

````html
      </a>
````

**Catatan fungsi:** Menutup tautan merek.

### Baris 21

````html

````

**Catatan fungsi:** Baris kosong pemisah.

### Baris 22

````html
      <div class="nav-label">RUANG KERJA</div>
````

**Catatan fungsi:** Label visual bagian navigasi “RUANG KERJA”.

### Baris 23

````html
      <nav class="primary-nav">
````

**Catatan fungsi:** Membuka kelompok navigasi primer.

### Baris 24

````html
        <button class="nav-item is-active" type="button" data-view="all" aria-current="page">
````

**Catatan fungsi:** Tombol tampilan “Semua tugas” menjadi tab aktif saat awal. `data-view="all"` dipakai JavaScript untuk memilih tampilan; `aria-current="page"` menandai pilihan saat ini.

### Baris 25

````html
          <span class="nav-icon" aria-hidden="true">◫</span><span>Semua tugas</span><span class="nav-count" id="nav-all-count">0</span>
````

**Catatan fungsi:** Simbol dekoratif, teks tombol, dan penghitung jumlah tugas dengan `id="nav-all-count"` yang diperbarui JavaScript.

### Baris 26

````html
        </button>
````

**Catatan fungsi:** Menutup tombol semua tugas.

### Baris 27

````html
        <button class="nav-item" type="button" data-view="today">
````

**Catatan fungsi:** Tombol navigasi tampilan Hari ini, dikaitkan ke nilai `today`.

### Baris 28

````html
          <span class="nav-icon" aria-hidden="true">◷</span><span>Hari ini</span><span class="nav-count" id="nav-today-count">0</span>
````

**Catatan fungsi:** Simbol, label, dan elemen jumlah tugas dengan target tanggal hari ini.

### Baris 29

````html
        </button>
````

**Catatan fungsi:** Menutup tombol Hari ini.

### Baris 30

````html
        <button class="nav-item" type="button" data-view="upcoming">
````

**Catatan fungsi:** Tombol navigasi tampilan Mendatang dengan nilai `upcoming`.

### Baris 31

````html
          <span class="nav-icon" aria-hidden="true">↗</span><span>Mendatang</span><span class="nav-count" id="nav-upcoming-count">0</span>
````

**Catatan fungsi:** Simbol, label, dan elemen penghitung tugas mendatang.

### Baris 32

````html
        </button>
````

**Catatan fungsi:** Menutup tombol Mendatang.

### Baris 33

````html
        <button class="nav-item" type="button" data-view="completed">
````

**Catatan fungsi:** Tombol tampilan Selesai dengan nilai `completed`.

### Baris 34

````html
          <span class="nav-icon" aria-hidden="true">✓</span><span>Selesai</span><span class="nav-count" id="nav-completed-count">0</span>
````

**Catatan fungsi:** Simbol, label, dan elemen penghitung tugas yang selesai.

### Baris 35

````html
        </button>
````

**Catatan fungsi:** Menutup tombol Selesai.

### Baris 36

````html
      </nav>
````

**Catatan fungsi:** Menutup navigasi primer.

### Baris 37

````html

````

**Catatan fungsi:** Pemisah visual.

### Baris 38

````html
      <div class="sidebar-divider"></div>
````

**Catatan fungsi:** Membuat garis pemisah sidebar.

### Baris 39

````html
      <div class="nav-label">PREFERENSI</div>
````

**Catatan fungsi:** Label visual bagian preferensi.

### Baris 40

````html
      <button class="nav-item utility-item" id="theme-toggle" type="button">
````

**Catatan fungsi:** Tombol tema dengan `id="theme-toggle"`; JavaScript menghubungkannya ke fungsi pergantian tema.

### Baris 41

````html
        <span class="nav-icon" id="theme-icon" aria-hidden="true">☼</span><span id="theme-label">Tampilan terang</span>
````

**Catatan fungsi:** Ikon dan teks tombol tema. ID pada elemen membuat ikon/label dapat diganti sesuai tema aktif.

### Baris 42

````html
      </button>
````

**Catatan fungsi:** Menutup tombol tema.

### Baris 43

````html
      <button class="nav-item utility-item" id="export-button" type="button">
````

**Catatan fungsi:** Tombol untuk mengekspor cadangan data.

### Baris 44

````html
        <span class="nav-icon" aria-hidden="true">⇩</span><span>Ekspor cadangan</span>
````

**Catatan fungsi:** Ikon unduh dan label ekspor.

### Baris 45

````html
      </button>
````

**Catatan fungsi:** Menutup tombol ekspor.

### Baris 46

````html
      <button class="nav-item utility-item" id="import-button" type="button">
````

**Catatan fungsi:** Tombol untuk mengimpor cadangan.

### Baris 47

````html
        <span class="nav-icon" aria-hidden="true">⇧</span><span>Impor cadangan</span>
````

**Catatan fungsi:** Ikon unggah dan label impor.

### Baris 48

````html
      </button>
````

**Catatan fungsi:** Menutup tombol impor.

### Baris 49

````html
      <input id="import-file" type="file" accept=".json,application/json" hidden>
````

**Catatan fungsi:** Input file yang hanya menerima JSON; `hidden` menyembunyikan input karena pemilih file akan dibuka melalui tombol impor.

### Baris 50

````html

````

**Catatan fungsi:** Baris kosong pemisah.

### Baris 51

````html
      <div class="sidebar-spacer"></div>
````

**Catatan fungsi:** Elemen spacer yang mendorong catatan/sidebar bagian bawah ke bawah.

### Baris 52

````html
      <div class="sidebar-note">
````

**Catatan fungsi:** Membuka kartu catatan dekoratif di sidebar.

### Baris 53

````html
        <div class="note-symbol" aria-hidden="true">✳</div>
````

**Catatan fungsi:** Simbol dekorasi yang diabaikan pembaca layar.

### Baris 54

````html
        <p>Tak semua harus selesai hari ini.</p>
````

**Catatan fungsi:** Kalimat motivasi.

### Baris 55

````html
        <span>Yang penting, mulai.</span>
````

**Catatan fungsi:** Kalimat lanjutan yang lebih kecil.

### Baris 56

````html
        <div class="note-line" aria-hidden="true"></div>
````

**Catatan fungsi:** Garis dekoratif yang diabaikan pembaca layar.

### Baris 57

````html
      </div>
````

**Catatan fungsi:** Menutup kartu catatan.

### Baris 58

````html
      <div class="sidebar-bottom"><span class="online-dot" aria-hidden="true"></span><span>Ruang pribadimu</span><span class="version">v1.0</span></div>
````

**Catatan fungsi:** Baris status bagian bawah: indikator titik, tulisan ruang pribadi, dan versi tampilan `v1.0`.

### Baris 59

````html
    </aside>
````

**Catatan fungsi:** Menutup sidebar.

### Baris 60

````html

````

**Catatan fungsi:** Baris kosong untuk memisahkan kelompok elemen dan memudahkan pembacaan HTML.

### Baris 61

````html
    <main class="main-content" id="dashboard">
````

**Catatan fungsi:** Membuka area utama dashboard; `id="dashboard"` adalah target tautan logo.

### Baris 62

````html
      <header class="topbar">
````

**Catatan fungsi:** Membuka top bar.

### Baris 63

````html
        <div class="breadcrumb"><span>WORKSPACE</span><span class="breadcrumb-slash">/</span><strong id="breadcrumb-current">OVERVIEW</strong></div>
````

**Catatan fungsi:** Breadcrumb menunjukkan konteks “WORKSPACE / OVERVIEW”; teks `OVERVIEW` dapat diganti JavaScript sesuai tampilan aktif.

### Baris 64

````html
        <div class="topbar-right">
````

**Catatan fungsi:** Membuka sisi kanan top bar.

### Baris 65

````html
          <div class="date-stamp"><span class="date-dot" aria-hidden="true"></span><span id="current-date">Memuat tanggal…</span></div>
````

**Catatan fungsi:** Area tanggal; isinya mula-mula placeholder dan kemudian diganti JavaScript dengan tanggal lokal berbahasa Indonesia.

### Baris 66

````html
          <button class="icon-button mobile-menu" id="mobile-menu" type="button" aria-label="Buka navigasi" aria-expanded="false">☰</button>
````

**Catatan fungsi:** Tombol menu ponsel, awalnya disembunyikan CSS pada layar lebar; `aria-expanded` menyatakan status menu.

### Baris 67

````html
          <button class="avatar" id="focus-button" type="button" title="Mode fokus" aria-label="Mode fokus"><span>PD</span></button>
````

**Catatan fungsi:** Tombol bulat berinisial `PD` untuk membuka mode fokus. `aria-label` menjelaskan fungsi tombol.

### Baris 68

````html
        </div>
````

**Catatan fungsi:** Menutup area kanan top bar.

### Baris 69

````html
      </header>
````

**Catatan fungsi:** Menutup top bar.

### Baris 70

````html

````

**Catatan fungsi:** Baris kosong.

### Baris 71

````html
      <div class="page-wrap">
````

**Catatan fungsi:** Pembungkus isi halaman agar lebar dan padding dapat dikendalikan CSS.

### Baris 72

````html
        <section class="welcome-section" aria-labelledby="page-title">
````

**Catatan fungsi:** Membuka bagian sambutan dan mengaitkan judulnya melalui `aria-labelledby`.

### Baris 73

````html
          <div class="welcome-copy">
````

**Catatan fungsi:** Membuka kolom teks sambutan.

### Baris 74

````html
            <div class="eyebrow"><span class="eyebrow-line"></span> YOUR SPACE TO THINK CLEARLY</div>
````

**Catatan fungsi:** Eyebrow/label dekoratif berbahasa Inggris, terdiri dari garis dan teks.

### Baris 75

````html
            <h1 id="page-title">Beri ruang untuk<br><em>hal yang berarti.</em></h1>
````

**Catatan fungsi:** Judul besar awal; `id="page-title"` memungkinkan JavaScript mengganti judul saat tampilan berubah.

### Baris 76

````html
            <p>Susun pikiranmu. Kerjakan satu per satu. Sisanya, biarkan menunggu.</p>
````

**Catatan fungsi:** Deskripsi awal singkat di bawah judul.

### Baris 77

````html
            <button class="button button-primary welcome-add" type="button" data-open-task>
````

**Catatan fungsi:** Tombol utama membuat tugas; `data-open-task` digunakan sebagai penanda event JavaScript.

### Baris 78

````html
              <span class="button-plus" aria-hidden="true">+</span> Buat tugas baru <span class="button-arrow" aria-hidden="true">↗</span>
````

**Catatan fungsi:** Isi tombol berupa ikon tambah, teks, dan panah dekoratif.

### Baris 79

````html
            </button>
````

**Catatan fungsi:** Menutup tombol.

### Baris 80

````html
          </div>
````

**Catatan fungsi:** Menutup kolom sambutan.

### Baris 81

````html
          <div class="art-panel" aria-hidden="true">
````

**Catatan fungsi:** Panel ilustrasi yang hanya dekoratif sehingga disembunyikan dari pembaca layar.

### Baris 82

````html
            <div class="art-grid"></div>
````

**Catatan fungsi:** Kisi latar belakang ilustrasi, digambar CSS.

### Baris 83

````html
            <div class="art-ring ring-one"></div><div class="art-ring ring-two"></div><div class="art-ring ring-three"></div>
````

**Catatan fungsi:** Tiga cincin dekoratif; masing-masing memiliki kelas untuk ukuran dan rotasi berbeda.

### Baris 84

````html
            <div class="art-core"><span>D.</span><small>FOCUS / FLOW</small></div>
````

**Catatan fungsi:** Inti ilustrasi dengan monogram `D.` dan tulisan `FOCUS / FLOW`.

### Baris 85

````html
            <div class="art-star star-one">✳</div><div class="art-star star-two">✦</div>
````

**Catatan fungsi:** Dua ornamen bintang/berkilau.

### Baris 86

````html
            <div class="art-caption"><span>01 — 04</span><span>MAKE IT MATTER</span></div>
````

**Catatan fungsi:** Teks kecil dekoratif di bawah panel ilustrasi.

### Baris 87

````html
          </div>
````

**Catatan fungsi:** Menutup panel ilustrasi.

### Baris 88

````html
          <div class="welcome-index" aria-hidden="true"><span>01</span><span class="index-rule"></span><span>04</span></div>
````

**Catatan fungsi:** Penanda indeks vertikal dekoratif `01` hingga `04`.

### Baris 89

````html
        </section>
````

**Catatan fungsi:** Menutup bagian sambutan.

### Baris 90

````html

````

**Catatan fungsi:** Baris kosong untuk memisahkan kelompok elemen dan memudahkan pembacaan HTML.

### Baris 91

````html
        <section class="stats-grid" aria-label="Ringkasan tugas">
````

**Catatan fungsi:** Membuka grid ringkasan tugas yang diberi nama aksesibilitas.

### Baris 92

````html
          <article class="stat-card stat-total">
````

**Catatan fungsi:** Membuka kartu statistik total tugas.

### Baris 93

````html
            <div class="stat-top"><span class="stat-label">TOTAL TUGAS</span><span class="stat-symbol" aria-hidden="true">↗</span></div>
````

**Catatan fungsi:** Baris label “TOTAL TUGAS” dan simbol.

### Baris 94

````html
            <div class="stat-number" id="stat-total">0</div><div class="stat-foot"><span class="stat-mini-dot"></span><span>Semua yang ada di daftar</span></div>
````

**Catatan fungsi:** Nilai total awal `0` dan keterangan kecil; JavaScript mengubah teks `#stat-total`.

### Baris 95

````html
          </article>
````

**Catatan fungsi:** Menutup kartu total.

### Baris 96

````html
          <article class="stat-card">
````

**Catatan fungsi:** Membuka kartu tugas sedang berjalan.

### Baris 97

````html
            <div class="stat-top"><span class="stat-label">SEDANG BERJALAN</span><span class="stat-symbol symbol-violet" aria-hidden="true">◌</span></div>
````

**Catatan fungsi:** Label dan ikon statistik aktif.

### Baris 98

````html
            <div class="stat-number" id="stat-active">0</div><div class="stat-foot"><span class="status-dot status-active"></span><span>Pelan-pelan, tetap jalan</span></div>
````

**Catatan fungsi:** Angka jumlah tugas aktif serta teks pendukung.

### Baris 99

````html
          </article>
````

**Catatan fungsi:** Menutup kartu aktif.

### Baris 100

````html
          <article class="stat-card">
````

**Catatan fungsi:** Membuka kartu tugas selesai.

### Baris 101

````html
            <div class="stat-top"><span class="stat-label">SELESAI</span><span class="stat-symbol symbol-lime" aria-hidden="true">✓</span></div>
````

**Catatan fungsi:** Label dan ikon centang.

### Baris 102

````html
            <div class="stat-number" id="stat-done">0</div><div class="stat-foot"><span class="status-dot status-done"></span><span id="completion-caption">Setiap langkah berarti</span></div>
````

**Catatan fungsi:** Angka selesai serta keterangan yang ID-nya diperbarui mengikuti jumlah selesai.

### Baris 103

````html
          </article>
````

**Catatan fungsi:** Menutup kartu selesai.

### Baris 104

````html
          <article class="stat-card stat-progress-card">
````

**Catatan fungsi:** Membuka kartu progres keseluruhan.

### Baris 105

````html
            <div class="stat-top"><span class="stat-label">PROGRES KESELURUHAN</span><span class="stat-percent" id="progress-percent">0%</span></div>
````

**Catatan fungsi:** Label progres dan nilai persentase awal `0%`.

### Baris 106

````html
            <div class="progress-track"><div class="progress-fill" id="progress-fill"></div></div>
````

**Catatan fungsi:** Track progres dan batang isi yang lebarnya diubah JavaScript.

### Baris 107

````html
            <div class="stat-foot"><span id="progress-caption">Awal yang baik dimulai dari satu tugas</span></div>
````

**Catatan fungsi:** Keterangan progres awal; JavaScript memperbaruinya berdasarkan jumlah tugas.

### Baris 108

````html
          </article>
````

**Catatan fungsi:** Menutup kartu progres.

### Baris 109

````html
        </section>
````

**Catatan fungsi:** Menutup grid statistik.

### Baris 110

````html

````

**Catatan fungsi:** Baris kosong untuk memisahkan kelompok elemen dan memudahkan pembacaan HTML.

### Baris 111

````html
        <section class="tasks-section" aria-labelledby="tasks-heading">
````

**Catatan fungsi:** Membuka bagian daftar tugas; judul bagian ditautkan bagi pembaca layar.

### Baris 112

````html
          <div class="section-heading">
````

**Catatan fungsi:** Pembungkus judul bagian.

### Baris 113

````html
            <div>
````

**Catatan fungsi:** Pembungkus teks judul/deskripsi.

### Baris 114

````html
              <div class="eyebrow small-eyebrow"><span class="eyebrow-line"></span> THE DOING SPACE</div>
````

**Catatan fungsi:** Label eyebrow dekoratif.

### Baris 115

````html
              <h2 id="tasks-heading">Daftar <em>tugas.</em></h2>
````

**Catatan fungsi:** Judul “Daftar tugas”; `id="tasks-heading"` menjadi referensi aksesibilitas.

### Baris 116

````html
              <p id="tasks-subtitle">Semua hal yang ingin kamu selesaikan, di satu tempat.</p>
````

**Catatan fungsi:** Subtitle yang dapat diganti sesuai tampilan aktif.

### Baris 117

````html
            </div>
````

**Catatan fungsi:** Menutup kolom teks.

### Baris 118

````html
            <button class="button button-outline desktop-add" type="button" data-open-task><span class="button-plus" aria-hidden="true">+</span> Tambah tugas</button>
````

**Catatan fungsi:** Tombol tambah tugas versi desktop; penanda `data-open-task` memungkinkan JavaScript membuka formulir yang sama.

### Baris 119

````html
          </div>
````

**Catatan fungsi:** Menutup heading bagian.

### Baris 120

````html

````

**Catatan fungsi:** Baris kosong.

### Baris 121

````html
          <div class="task-toolbar">
````

**Catatan fungsi:** Membuka toolbar yang menampung filter, pencarian, dan pengurutan.

### Baris 122

````html
            <div class="filter-tabs" role="group" aria-label="Filter status tugas">
````

**Catatan fungsi:** Grup filter status dengan label aksesibilitas.

### Baris 123

````html
              <button class="filter-tab is-selected" type="button" data-status="all" aria-pressed="true">Semua <span id="filter-all-count">0</span></button>
````

**Catatan fungsi:** Tombol semua tugas, aktif pada awal. `data-status="all"` dipakai JavaScript; angka di dalamnya diisi total tugas.

### Baris 124

````html
              <button class="filter-tab" type="button" data-status="active" aria-pressed="false">Belum selesai <span id="filter-active-count">0</span></button>
````

**Catatan fungsi:** Tombol filter tugas aktif/belum selesai dengan jumlahnya.

### Baris 125

````html
              <button class="filter-tab" type="button" data-status="done" aria-pressed="false">Tuntas <span id="filter-done-count">0</span></button>
````

**Catatan fungsi:** Tombol filter tugas selesai dengan jumlahnya.

### Baris 126

````html
            </div>
````

**Catatan fungsi:** Menutup grup filter.

### Baris 127

````html
            <div class="toolbar-tools">
````

**Catatan fungsi:** Membuka wadah kontrol pencarian/pengurutan.

### Baris 128

````html
              <label class="search-box"><span aria-hidden="true">⌕</span><input type="search" id="task-search" placeholder="Cari tugas…" aria-label="Cari tugas"><kbd>/</kbd></label>
````

**Catatan fungsi:** Label pencarian berisi ikon, input pencarian, dan tombol petunjuk keyboard `/`; JavaScript mendengar event `input`.

### Baris 129

````html
              <label class="sort-control"><span class="sr-only">Urutkan tugas</span><select id="sort-select" aria-label="Urutkan tugas"><option value="date">Tanggal terdekat</option><option value="priority">Prioritas</option><option value="created">Terbaru dibuat</option><option value="title">Nama A–Z</option></select></label>
````

**Catatan fungsi:** Label/pembungkus pilihan urutan; `select` menawarkan tanggal terdekat, prioritas, waktu dibuat, dan nama A–Z.

### Baris 130

````html
            </div>
````

**Catatan fungsi:** Menutup kontrol toolbar.

### Baris 131

````html
          </div>
````

**Catatan fungsi:** Menutup toolbar.

### Baris 132

````html

````

**Catatan fungsi:** Baris kosong sebagai pemisah sebelum area daftar.

### Baris 133

````html
          <div class="task-list" id="task-list" aria-live="polite" aria-busy="false"></div>
````

**Catatan fungsi:** Kontainer daftar tugas, kosong saat HTML pertama dimuat. JavaScript memasukkan kartu tugas atau pesan keadaan kosong; `aria-live` membantu mengumumkan perubahan kepada teknologi asistif.

### Baris 134

````html
          <div class="task-list-footer"><span id="visible-count">0 tugas ditampilkan</span><span><span class="footer-key">↵</span> <span>Perubahan tersimpan otomatis di browser ini</span></span></div>
````

**Catatan fungsi:** Footer daftar menampilkan jumlah item yang terlihat dan pesan bahwa perubahan tersimpan otomatis di browser.

### Baris 135

````html
        </section>
````

**Catatan fungsi:** Menutup bagian daftar tugas.

### Baris 136

````html

````

**Catatan fungsi:** Baris kosong/pemisah.

### Baris 137

````html
        <footer class="page-footer"><span>PARADOKS D. TASK <span class="footer-dot">•</span> MADE FOR YOUR OWN PACE</span><span>Fokus pada proses, bukan kesempurnaan.</span></footer>
````

**Catatan fungsi:** Footer visual aplikasi dengan nama dan kalimat identitas.

### Baris 138

````html
      </div>
````

**Catatan fungsi:** Menutup pembungkus isi halaman.

### Baris 139

````html
    </main>
````

**Catatan fungsi:** Menutup area utama `main`.

### Baris 140

````html
  </div>
````

**Catatan fungsi:** Menutup pembungkus aplikasi utama.

### Baris 141

````html

````

**Catatan fungsi:** Baris kosong pemisah.

### Baris 142

````html
  <div class="sidebar-scrim" id="sidebar-scrim" hidden></div>
````

**Catatan fungsi:** Lapisan gelap (`scrim`) yang muncul ketika navigasi ponsel terbuka; `hidden` membuatnya tidak terlihat pada awal.

### Baris 143

````html

````

**Catatan fungsi:** Baris kosong.

### Baris 144

````html
  <dialog class="task-dialog" id="task-dialog" aria-labelledby="dialog-title">
````

**Catatan fungsi:** Membuka elemen `<dialog>` untuk formulir tugas; `aria-labelledby` menghubungkannya dengan judul dialog.

### Baris 145

````html
    <form id="task-form" class="dialog-form">
````

**Catatan fungsi:** Membuka form; event `submit` ditangani oleh JavaScript.

### Baris 146

````html
      <div class="dialog-header">
````

**Catatan fungsi:** Pembungkus header dialog.

### Baris 147

````html
        <div><div class="eyebrow small-eyebrow"><span class="eyebrow-line"></span> ADD TO YOUR SPACE</div><h2 id="dialog-title">Tugas <em>baru.</em></h2><p>Simpan satu hal yang ingin kamu selesaikan.</p></div>
````

**Catatan fungsi:** Label mini, judul dialog, dan deskripsi. Judul `dialog-title` berubah menjadi mode tambah atau edit.

### Baris 148

````html
        <button class="icon-button close-dialog" id="close-dialog" type="button" aria-label="Tutup formulir">×</button>
````

**Catatan fungsi:** Tombol silang untuk menutup dialog; `type="button"` mencegah tombol dianggap sebagai submit form.

### Baris 149

````html
      </div>
````

**Catatan fungsi:** Menutup header dialog.

### Baris 150

````html
      <input type="hidden" id="task-id">
````

**Catatan fungsi:** Input tersembunyi untuk menyimpan ID tugas yang sedang diedit; kosong berarti membuat tugas baru.

### Baris 151

````html
      <label class="field-label" for="task-title">Nama tugas <span>*</span></label>
````

**Catatan fungsi:** Label nama tugas dan tanda bintang sebagai indikasi wajib diisi.

### Baris 152

````html
      <input class="text-field" id="task-title" name="title" type="text" maxlength="120" placeholder="Misalnya: menyelesaikan draft pertama" required autocomplete="off">
````

**Catatan fungsi:** Input judul, dibatasi 120 karakter, wajib diisi, dan autocomplete dimatikan.

### Baris 153

````html
      <label class="field-label" for="task-description">Catatan <span class="optional">(opsional)</span></label>
````

**Catatan fungsi:** Label catatan yang menyatakan kolom opsional.

### Baris 154

````html
      <textarea class="text-field text-area" id="task-description" name="description" rows="3" maxlength="500" placeholder="Tambahkan detail kecil supaya lebih jelas…"></textarea>
````

**Catatan fungsi:** Textarea deskripsi dengan tiga baris awal dan batas 500 karakter.

### Baris 155

````html
      <div class="field-row">
````

**Catatan fungsi:** Membuka baris dua kolom form.

### Baris 156

````html
        <div class="field-group"><label class="field-label" for="task-category">Kategori</label><select class="text-field" id="task-category" name="category"><option value="Personal">Personal</option><option value="Akademik">Akademik</option><option value="Kreatif">Kreatif</option><option value="Pekerjaan">Pekerjaan</option></select></div>
````

**Catatan fungsi:** Grup kategori dengan opsi Personal, Akademik, Kreatif, dan Pekerjaan.

### Baris 157

````html
        <div class="field-group"><label class="field-label" for="task-priority">Prioritas</label><select class="text-field" id="task-priority" name="priority"><option value="medium">Normal</option><option value="high">Penting</option><option value="low">Santai</option></select></div>
````

**Catatan fungsi:** Grup prioritas dengan nilai data `medium`, `high`, dan `low`; label ramah pengguna adalah Normal, Penting, Santai.

### Baris 158

````html
      </div>
````

**Catatan fungsi:** Menutup baris dua kolom.

### Baris 159

````html
      <label class="field-label" for="task-due">Tanggal target <span class="optional">(opsional)</span></label>
````

**Catatan fungsi:** Label tanggal target opsional.

### Baris 160

````html
      <input class="text-field" id="task-due" name="dueDate" type="date">
````

**Catatan fungsi:** Input tanggal HTML; browser menyediakan pemilih tanggal dan nilainya biasanya berbentuk `YYYY-MM-DD`.

### Baris 161

````html
      <div class="dialog-actions"><button class="button button-ghost" id="cancel-dialog" type="button">Batal</button><button class="button button-primary" id="save-task-button" type="submit">Simpan tugas <span aria-hidden="true">↗</span></button></div>
````

**Catatan fungsi:** Tombol batal serta tombol submit untuk menyimpan tugas/perubahan.

### Baris 162

````html
      <p class="form-footnote"><span aria-hidden="true">✳</span> Tidak harus selesai sekaligus. Mulai saja dulu.</p>
````

**Catatan fungsi:** Catatan kecil bernada motivasi di bawah tombol form.

### Baris 163

````html
    </form>
````

**Catatan fungsi:** Menutup form.

### Baris 164

````html
  </dialog>
````

**Catatan fungsi:** Menutup dialog.

### Baris 165

````html

````

**Catatan fungsi:** Baris kosong.

### Baris 166

````html
  <div class="toast" id="toast" role="status" aria-live="polite"></div>
````

**Catatan fungsi:** Elemen toast untuk pesan singkat. `role="status"` dan `aria-live="polite"` membantu pembaca layar menyampaikan pemberitahuan.

### Baris 167

````html
  <div class="focus-overlay" id="focus-overlay" hidden>
````

**Catatan fungsi:** Membuka lapisan mode fokus dalam keadaan tersembunyi.

### Baris 168

````html
    <div class="focus-card"><span class="focus-kicker">A MOMENT FOR YOURSELF</span><div class="focus-glyph" aria-hidden="true">✳</div><h2>Tarik napas.<br><em>Pilih satu hal.</em></h2><p>Fokus bukan tentang melakukan semuanya. Fokus adalah memberi perhatian pada satu hal yang ada di depanmu.</p><button class="button button-primary" id="exit-focus" type="button">Kembali ke ruang kerja <span aria-hidden="true">↗</span></button></div>
````

**Catatan fungsi:** Kartu mode fokus berisi teks, dekorasi, dan tombol kembali ke ruang kerja.

### Baris 169

````html
  </div>
````

**Catatan fungsi:** Menutup overlay mode fokus.

### Baris 170

````html
</body>
````

**Catatan fungsi:** Menutup `body`.

### Baris 171

````html
</html>
````

**Catatan fungsi:** Menutup elemen `html`.

---

# Penjelasan baris demi baris — `public/manifest.webmanifest`

Catatan di bawah setiap potongan merujuk pada baris sumber dengan nomor yang sama. Kode asli tidak dimodifikasi; dokumen ini adalah bahan belajar, bukan file yang langsung dijalankan.

### Baris 1

````json
{
````

**Catatan fungsi:** Membuka objek JSON manifest aplikasi web.

### Baris 2

````json
  "name": "Paradoks D. Task",
````

**Catatan fungsi:** Nama lengkap aplikasi saat browser menawarkan instalasi atau menampilkan informasi aplikasi.

### Baris 3

````json
  "short_name": "D. Task",
````

**Catatan fungsi:** Nama pendek yang cocok untuk ruang sempit seperti ikon layar utama.

### Baris 4

````json
  "description": "Ruang tenang untuk mengelola hal-hal yang penting.",
````

**Catatan fungsi:** Deskripsi singkat aplikasi web.

### Baris 5

````json
  "start_url": "/",
````

**Catatan fungsi:** Menentukan URL awal yang dibuka saat aplikasi diluncurkan.

### Baris 6

````json
  "display": "standalone",
````

**Catatan fungsi:** Meminta browser menampilkan aplikasi seperti aplikasi mandiri tanpa bingkai tab browser ketika fitur instalasi didukung.

### Baris 7

````json
  "background_color": "#111016",
````

**Catatan fungsi:** Warna latar awal/splash untuk konteks browser yang menggunakan manifest.

### Baris 8

````json
  "theme_color": "#111016",
````

**Catatan fungsi:** Warna tema UI/browser yang terkait dengan aplikasi.

### Baris 9

````json
  "icons": [{"src": "/favicon.svg", "sizes": "any", "type": "image/svg+xml", "purpose": "any"}]
````

**Catatan fungsi:** Mendaftarkan ikon aplikasi dengan sumber favicon.svg; `sizes: any` mengizinkan skalabilitas SVG dan `purpose` menjelaskan penggunaannya.

### Baris 10

````json
}
````

**Catatan fungsi:** Menutup objek JSON manifest.

---

# Penjelasan baris demi baris — `public/style.css`

Catatan di bawah setiap potongan merujuk pada baris sumber dengan nomor yang sama. Kode asli tidak dimodifikasi; dokumen ini adalah bahan belajar, bukan file yang langsung dijalankan.

### Baris 1

````css
:root {
````

**Catatan fungsi:** Membuka selector `:root`, yakni elemen root dokumen. Variabel di sini tersedia di seluruh halaman.

### Baris 2

````css
  color-scheme: dark;
````

**Catatan fungsi:** `color-scheme: dark` memberi tahu browser bahwa kontrol bawaan sebaiknya memakai skema gelap.

### Baris 3

````css
  --bg: #111016;
````

**Catatan fungsi:** `--bg` adalah warna latar utama gelap.

### Baris 4

````css
  --panel: #191720;
````

**Catatan fungsi:** `--panel` adalah warna panel/kartu.

### Baris 5

````css
  --panel-2: #201e29;
````

**Catatan fungsi:** `--panel-2` adalah warna panel tingkat kedua, misalnya panel hover.

### Baris 6

````css
  --panel-hover: #25222f;
````

**Catatan fungsi:** `--panel-hover` menyimpan warna hover yang lebih terang.

### Baris 7

````css
  --sidebar: #15131a;
````

**Catatan fungsi:** `--sidebar` adalah warna latar sidebar.

### Baris 8

````css
  --line: #302c39;
````

**Catatan fungsi:** `--line` menyimpan warna garis/border.

### Baris 9

````css
  --line-soft: rgba(221, 215, 240, .09);
````

**Catatan fungsi:** `--line-soft` menyimpan garis dengan transparansi rendah untuk pembatas halus.

### Baris 10

````css
  --text: #f3f0f8;
````

**Catatan fungsi:** `--text` adalah warna teks utama.

### Baris 11

````css
  --muted: #a09baa;
````

**Catatan fungsi:** `--muted` adalah warna teks sekunder.

### Baris 12

````css
  --muted-2: #777281;
````

**Catatan fungsi:** `--muted-2` adalah teks sekunder yang lebih redup.

### Baris 13

````css
  --lime: #d9ff66;
````

**Catatan fungsi:** `--lime` adalah warna aksen lime yang dipakai pada CTA dan progres.

### Baris 14

````css
  --lime-soft: rgba(217, 255, 102, .12);
````

**Catatan fungsi:** `--lime-soft` adalah versi transparan untuk latar aksen lime.

### Baris 15

````css
  --violet: #a795ff;
````

**Catatan fungsi:** `--violet` adalah warna aksen ungu.

### Baris 16

````css
  --violet-soft: rgba(167, 149, 255, .15);
````

**Catatan fungsi:** `--violet-soft` adalah latar ungu dengan transparansi.

### Baris 17

````css
  --pink: #ffadcf;
````

**Catatan fungsi:** `--pink` menyediakan aksen merah muda.

### Baris 18

````css
  --orange: #ffb678;
````

**Catatan fungsi:** `--orange` menyediakan aksen oranye.

### Baris 19

````css
  --danger: #ff8f9c;
````

**Catatan fungsi:** `--danger` adalah warna peringatan/aksi berbahaya seperti tugas terlambat dan tombol hapus.

### Baris 20

````css
  --shadow: 0 22px 70px rgba(0, 0, 0, .34);
````

**Catatan fungsi:** `--shadow` mendefinisikan bayangan besar yang dipakai modal/overlay.

### Baris 21

````css
  --radius: 17px;
````

**Catatan fungsi:** `--radius` menyediakan ukuran radius standar, meskipun sejumlah komponen menetapkan radius sendiri.

### Baris 22

````css
}
````

**Catatan fungsi:** Menutup kumpulan variabel tema gelap.

### Baris 23

````css

````

**Catatan fungsi:** Baris kosong.

### Baris 24

````css
html[data-theme="light"] {
````

**Catatan fungsi:** Selector aktif saat elemen `<html>` memiliki `data-theme="light"`; variabel di dalamnya menimpa nilai dari `:root`.

### Baris 25

````css
  color-scheme: light;
````

**Catatan fungsi:** Mengganti skema kontrol browser menjadi terang.

### Baris 26

````css
  --bg: #f5f3f8;
````

**Catatan fungsi:** Latar halaman untuk tema terang.

### Baris 27

````css
  --panel: #ffffff;
````

**Catatan fungsi:** Panel utama putih.

### Baris 28

````css
  --panel-2: #f4f1fa;
````

**Catatan fungsi:** Panel tingkat kedua warna ungu sangat muda.

### Baris 29

````css
  --panel-hover: #ece8f5;
````

**Catatan fungsi:** Warna panel saat hover.

### Baris 30

````css
  --sidebar: #efedf5;
````

**Catatan fungsi:** Warna sidebar terang.

### Baris 31

````css
  --line: #e0dce9;
````

**Catatan fungsi:** Border terang.

### Baris 32

````css
  --line-soft: rgba(35, 25, 55, .09);
````

**Catatan fungsi:** Border lembut transparan yang sesuai untuk latar terang.

### Baris 33

````css
  --text: #25202f;
````

**Catatan fungsi:** Warna teks utama yang gelap.

### Baris 34

````css
  --muted: #706b7d;
````

**Catatan fungsi:** Warna teks sekunder.

### Baris 35

````css
  --muted-2: #8a8496;
````

**Catatan fungsi:** Warna teks sekunder tambahan.

### Baris 36

````css
  --lime: #5a7411;
````

**Catatan fungsi:** Aksen lime yang digelapkan supaya kontras pada tema terang.

### Baris 37

````css
  --lime-soft: rgba(145, 189, 43, .16);
````

**Catatan fungsi:** Latar lembut untuk aksen lime.

### Baris 38

````css
  --violet: #6c56c8;
````

**Catatan fungsi:** Aksen ungu untuk tema terang.

### Baris 39

````css
  --violet-soft: rgba(126, 103, 226, .13);
````

**Catatan fungsi:** Latar lembut ungu.

### Baris 40

````css
  --pink: #bd4d7d;
````

**Catatan fungsi:** Aksen merah muda tema terang.

### Baris 41

````css
  --orange: #a85c19;
````

**Catatan fungsi:** Aksen oranye tema terang.

### Baris 42

````css
  --danger: #c13d53;
````

**Catatan fungsi:** Warna bahaya tema terang.

### Baris 43

````css
  --shadow: 0 22px 70px rgba(48, 34, 76, .12);
````

**Catatan fungsi:** Bayangan lebih halus dibanding tema gelap.

### Baris 44

````css
}
````

**Catatan fungsi:** Menutup aturan tema terang.

### Baris 45

````css

````

**Catatan fungsi:** Baris kosong yang memisahkan aturan CSS agar stylesheet mudah dibaca.

### Baris 46

````css
* { box-sizing: border-box; }
````

**Catatan fungsi:** `box-sizing: border-box` pada semua elemen, sehingga padding dan border termasuk dalam ukuran lebar/tinggi yang ditentukan.

### Baris 47

````css
html { min-width: 320px; scroll-behavior: smooth; }
````

**Catatan fungsi:** `html` memiliki lebar minimum 320 px dan scrolling halus.

### Baris 48

````css
body { margin: 0; background: var(--bg); color: var(--text); font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; font-size: 14px; line-height: 1.5; transition: background .2s ease, color .2s ease; }
````

**Catatan fungsi:** Aturan `body`: menghilangkan margin bawaan; menggunakan variabel latar/teks; memilih rangkaian font sistem; menetapkan ukuran 14 px, line-height 1.5 dan transisi warna/latar ketika tema berubah.

### Baris 49

````css
button, input, textarea, select { font: inherit; }
````

**Catatan fungsi:** Elemen tombol dan input memakai font yang sama dengan halaman agar tidak kembali ke font default browser.

### Baris 50

````css
button, select { cursor: pointer; }
````

**Catatan fungsi:** Tombol dan select memakai cursor pointer, memberi indikasi bahwa elemen bisa diklik.

### Baris 51

````css
button { color: inherit; }
````

**Catatan fungsi:** Tombol mewarisi warna teks saat ini.

### Baris 52

````css
button:focus-visible, input:focus-visible, select:focus-visible, textarea:focus-visible, a:focus-visible { outline: 2px solid var(--violet); outline-offset: 3px; }
````

**Catatan fungsi:** Fokus keyboard pada tombol/input/select/textarea/link mendapat outline ungu berukuran 2 px dan offset 3 px. Ini membantu aksesibilitas keyboard.

### Baris 53

````css
a { color: inherit; text-decoration: none; }
````

**Catatan fungsi:** Link mewarisi warna teks dan tidak memiliki garis bawah default.

### Baris 54

````css
::selection { background: var(--lime); color: #17151c; }
````

**Catatan fungsi:** Menentukan tampilan teks yang sedang diseleksi pengguna: latar lime, teks gelap.

### Baris 55

````css
.sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap; border: 0; }
````

**Catatan fungsi:** `.sr-only` menyembunyikan konten secara visual tetapi tetap mempertahankannya untuk pembaca layar.

### Baris 56

````css

````

**Catatan fungsi:** Baris kosong.

### Baris 57

````css
.app-shell { min-height: 100vh; }
````

**Catatan fungsi:** `app-shell` minimal setinggi viewport.

### Baris 58

````css
.sidebar { position: fixed; inset: 0 auto 0 0; z-index: 30; display: flex; flex-direction: column; width: 248px; padding: 30px 17px 17px; background: var(--sidebar); border-right: 1px solid var(--line-soft); }
````

**Catatan fungsi:** Sidebar diposisikan tetap di kiri, memenuhi tinggi viewport, memakai flex kolom, lebar 248 px, padding, latar sidebar, dan border kanan.

### Baris 59

````css
.brand { display: flex; align-items: center; gap: 12px; padding: 0 9px; margin-bottom: 48px; }
````

**Catatan fungsi:** Logo/brand disusun horizontal di tengah vertikal, diberi jarak antarbagian, padding kiri-kanan, dan margin bawah.

### Baris 60

````css
.brand-mark { position: relative; display: flex; align-items: center; justify-content: center; gap: 3px; width: 37px; height: 37px; overflow: hidden; border-radius: 12px; background: var(--lime); transform: rotate(-6deg); }
````

**Catatan fungsi:** Logo grafis dibuat kotak 37 px, posisi relatif, isi flex, sudut membulat, latar lime, dipotong overflow-nya, dan diputar sedikit.

### Baris 61

````css
.brand-mark span { display: block; width: 4px; border-radius: 8px; background: #1b1922; transform: skew(-12deg); }
````

**Catatan fungsi:** Bar batang logo memiliki lebar kecil, sudut membulat, warna gelap dan transform skew.

### Baris 62

````css
.brand-mark span:nth-child(1) { height: 13px; }
````

**Catatan fungsi:** Batang logo pertama memiliki tinggi 13 px.

### Baris 63

````css
.brand-mark span:nth-child(2) { height: 22px; }
````

**Catatan fungsi:** Batang kedua lebih tinggi, 22 px.

### Baris 64

````css
.brand-mark span:nth-child(3) { height: 16px; }
````

**Catatan fungsi:** Batang ketiga setinggi 16 px.

### Baris 65

````css
.brand-copy { display: flex; flex-direction: column; min-width: 0; }
````

**Catatan fungsi:** Nama brand ditumpuk vertikal.

### Baris 66

````css
.brand-copy strong { font-size: 19px; font-weight: 760; letter-spacing: -.8px; line-height: 1.1; }
````

**Catatan fungsi:** Nama brand menggunakan ukuran 19 px, ketebalan tebal, tracking rapat dan line-height rapat.

### Baris 67

````css
.brand-copy strong span { color: var(--lime); }
````

**Catatan fungsi:** Titik pada tulisan brand diberi aksen lime.

### Baris 68

````css
.brand-copy small { margin-top: 5px; color: var(--muted-2); font-size: 8px; font-weight: 700; letter-spacing: 1.5px; }
````

**Catatan fungsi:** Subjudul brand lebih kecil, berwarna redup, tebal, dan memakai tracking luas.

### Baris 69

````css
.nav-label { padding: 0 12px; margin-bottom: 12px; color: var(--muted-2); font-size: 9px; font-weight: 800; letter-spacing: 1.65px; }
````

**Catatan fungsi:** Label sidebar memiliki padding, margin bawah, warna redup, huruf kecil, tebal, dan jarak huruf luas.

### Baris 70

````css
.primary-nav { display: grid; gap: 4px; }
````

**Catatan fungsi:** Navigasi primer memakai grid dengan celah 4 px.

### Baris 71

````css
.nav-item { position: relative; display: flex; align-items: center; gap: 12px; width: 100%; padding: 12px 12px; border: 1px solid transparent; border-radius: 10px; background: transparent; color: var(--muted); text-align: left; font-size: 12px; transition: background .18s ease, color .18s ease, border-color .18s ease; }
````

**Catatan fungsi:** Tombol navigasi disusun flex horizontal, memenuhi lebar, memiliki padding, border transparan, radius, warna teks sekunder, ukuran font kecil, dan transisi hover.

### Baris 72

````css
.nav-item:hover { background: var(--panel-2); color: var(--text); }
````

**Catatan fungsi:** Saat tombol navigasi di-hover, latar dan warna teks menjadi lebih jelas.

### Baris 73

````css
.nav-item.is-active { border-color: rgba(217,255,102,.1); background: var(--lime-soft); color: var(--text); }
````

**Catatan fungsi:** Tombol aktif menggunakan border samar, latar lime lembut dan teks utama.

### Baris 74

````css
.nav-item.is-active::before { position: absolute; top: 10px; bottom: 10px; left: -1px; width: 2px; border-radius: 2px; background: var(--lime); content: ""; }
````

**Catatan fungsi:** Pseudo-element `::before` menambahkan garis lime tipis di sisi kiri tombol aktif.

### Baris 75

````css
.nav-icon { display: grid; place-items: center; width: 18px; color: var(--muted-2); font-size: 17px; line-height: 1; }
````

**Catatan fungsi:** Ikon navigasi disejajarkan di tengah dalam kotak 18 px dan diberi warna redup.

### Baris 76

````css
.nav-item.is-active .nav-icon { color: var(--lime); }
````

**Catatan fungsi:** Ikon di tombol aktif menjadi lime.

### Baris 77

````css
.nav-count { display: grid; place-items: center; min-width: 22px; height: 22px; padding: 0 6px; margin-left: auto; border-radius: 7px; background: var(--line-soft); color: var(--muted); font-size: 10px; font-variant-numeric: tabular-nums; }
````

**Catatan fungsi:** Penghitung navigasi berbentuk kotak pill, menggunakan `margin-left: auto` agar terdorong ke sisi kanan.

### Baris 78

````css
.nav-item.is-active .nav-count { background: rgba(217,255,102,.14); color: var(--lime); }
````

**Catatan fungsi:** Penghitung milik tombol aktif menggunakan warna lime lembut.

### Baris 79

````css
.sidebar-divider { height: 1px; margin: 29px 9px 24px; background: var(--line-soft); }
````

**Catatan fungsi:** Divider sidebar menjadi garis 1 px dengan jarak atas/bawah.

### Baris 80

````css
.utility-item { padding-top: 10px; padding-bottom: 10px; font-size: 11.5px; }
````

**Catatan fungsi:** Tombol utilitas sidebar memiliki padding vertikal lebih kecil dan font sedikit berbeda.

### Baris 81

````css
.utility-item .nav-icon { font-size: 17px; }
````

**Catatan fungsi:** Ikon pada tombol utilitas memakai ukuran font 17 px.

### Baris 82

````css
.sidebar-spacer { flex: 1; min-height: 28px; }
````

**Catatan fungsi:** Spacer mengambil sisa ruang (`flex: 1`) agar catatan/sidebar bawah terdorong ke bagian bawah.

### Baris 83

````css
.sidebar-note { position: relative; overflow: hidden; padding: 19px 15px 19px; margin: 0 2px 19px; border: 1px solid var(--line); border-radius: 13px; background: linear-gradient(145deg, var(--panel-2), transparent 80%); }
````

**Catatan fungsi:** Kartu catatan sidebar berposisi relatif, overflow dipotong, diberi padding, margin, border, radius, dan gradasi halus.

### Baris 84

````css
.sidebar-note::after { position: absolute; right: -23px; bottom: -43px; width: 108px; height: 108px; border: 1px solid rgba(167,149,255,.19); border-radius: 50%; box-shadow: 0 0 0 12px rgba(167,149,255,.035), 0 0 0 24px rgba(167,149,255,.025); content: ""; }
````

**Catatan fungsi:** Pseudo-element membuat lingkaran dekoratif besar di belakang catatan dengan cincin dan bayangan transparan.

### Baris 85

````css
.note-symbol { color: var(--lime); font-size: 21px; }
````

**Catatan fungsi:** Simbol catatan diberi warna lime dan ukuran 21 px.

### Baris 86

````css
.sidebar-note p { max-width: 140px; margin: 9px 0 3px; font-family: Georgia, "Times New Roman", serif; font-size: 15px; line-height: 1.4; }
````

**Catatan fungsi:** Paragraf catatan dibatasi lebar, margin, font serif dan line-height.

### Baris 87

````css
.sidebar-note > span { color: var(--muted); font-size: 10px; }
````

**Catatan fungsi:** Teks lanjutan catatan memakai warna sekunder dan ukuran kecil.

### Baris 88

````css
.note-line { width: 31px; height: 2px; margin-top: 15px; background: var(--violet); }
````

**Catatan fungsi:** Garis dekoratif kecil berwarna ungu.

### Baris 89

````css
.sidebar-bottom { display: flex; align-items: center; gap: 8px; padding: 0 9px; color: var(--muted-2); font-size: 10px; }
````

**Catatan fungsi:** Bagian bawah sidebar disusun flex secara horizontal dan menggunakan teks kecil redup.

### Baris 90

````css
.online-dot, .date-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--lime); box-shadow: 0 0 0 3px var(--lime-soft); }
````

**Catatan fungsi:** Titik status online dan titik tanggal dibuat bulat, berwarna lime, dengan halo transparan.

### Baris 91

````css
.version { margin-left: auto; font-size: 9px; letter-spacing: .6px; }
````

**Catatan fungsi:** Versi aplikasi didorong ke sisi paling kanan menggunakan `margin-left: auto`.

### Baris 92

````css

````

**Catatan fungsi:** Baris kosong.

### Baris 93

````css
.main-content { min-height: 100vh; margin-left: 248px; }
````

**Catatan fungsi:** Konten utama memiliki tinggi minimal viewport dan margin kiri 248 px agar tidak tertutup sidebar tetap.

### Baris 94

````css
.topbar { display: flex; align-items: center; justify-content: space-between; height: 74px; padding: 0 47px; border-bottom: 1px solid var(--line-soft); }
````

**Catatan fungsi:** Topbar disusun flex, diratakan ke tengah, memiliki tinggi 74 px, padding horizontal, dan garis bawah.

### Baris 95

````css
.breadcrumb { display: flex; align-items: center; gap: 11px; color: var(--muted-2); font-size: 9px; font-weight: 800; letter-spacing: 1.5px; }
````

**Catatan fungsi:** Breadcrumb ditampilkan mendatar dengan jarak antarbagian, warna redup, teks kecil tebal dan tracking luas.

### Baris 96

````css
.breadcrumb-slash { color: var(--line); font-size: 15px; font-weight: 400; }
````

**Catatan fungsi:** Garis miring pemisah breadcrumb menggunakan warna lembut dan ukuran sedikit lebih besar.

### Baris 97

````css
.breadcrumb strong { color: var(--text); font-weight: 750; }
````

**Catatan fungsi:** Bagian breadcrumb yang aktif memakai warna teks utama dan ketebalan tebal.

### Baris 98

````css
.topbar-right { display: flex; align-items: center; gap: 21px; }
````

**Catatan fungsi:** Elemen sisi kanan topbar disusun mendatar dengan jarak 21 px.

### Baris 99

````css
.date-stamp { display: flex; align-items: center; gap: 10px; color: var(--muted); font-size: 10px; letter-spacing: .15px; }
````

**Catatan fungsi:** Tanggal ditampilkan flex dengan titik, jarak, warna sekunder dan ukuran kecil.

### Baris 100

````css
.date-dot { width: 5px; height: 5px; }
````

**Catatan fungsi:** Ukuran titik tanggal diperkecil menjadi 5 px.

### Baris 101

````css
.avatar { display: grid; place-items: center; width: 34px; height: 34px; border: 1px solid rgba(167,149,255,.35); border-radius: 50%; background: var(--violet-soft); color: var(--violet); font-size: 10px; font-weight: 800; transition: transform .2s ease; }
````

**Catatan fungsi:** Avatar bundar berisi inisial `PD`, dengan latar/garis ungu lembut.

### Baris 102

````css
.avatar:hover { transform: rotate(-8deg); }
````

**Catatan fungsi:** Avatar berputar sedikit saat pointer diarahkan ke atasnya.

### Baris 103

````css
.icon-button { display: grid; place-items: center; width: 36px; height: 36px; border: 1px solid var(--line); border-radius: 10px; background: var(--panel); color: var(--muted); font-size: 21px; transition: border-color .18s ease, color .18s ease, background .18s ease; }
````

**Catatan fungsi:** Tombol ikon umum mendapat ukuran 36 px, border, latar panel, dan transisi warna.

### Baris 104

````css
.icon-button:hover { border-color: var(--violet); color: var(--text); }
````

**Catatan fungsi:** Saat tombol ikon di-hover, border menjadi ungu dan teks lebih terang.

### Baris 105

````css
.mobile-menu { display: none; }
````

**Catatan fungsi:** Tombol menu mobile disembunyikan pada layout default desktop.

### Baris 106

````css
.page-wrap { width: min(100%, 1420px); padding: 36px 47px 28px; margin: 0 auto; }
````

**Catatan fungsi:** Isi halaman dibatasi ke lebar maksimum 1420 px, memiliki padding dan otomatis berada di tengah dengan margin kiri-kanan.

### Baris 107

````css

````

**Catatan fungsi:** Baris kosong yang memisahkan aturan CSS agar stylesheet mudah dibaca.

### Baris 108

````css
.welcome-section { position: relative; display: grid; grid-template-columns: minmax(0, 1.1fr) minmax(290px, .9fr); align-items: center; min-height: 276px; padding: 35px 35px 35px 38px; overflow: hidden; border: 1px solid rgba(167,149,255,.13); border-radius: 19px; background: radial-gradient(ellipse at 80% 45%, rgba(116,83,191,.22), transparent 35%), linear-gradient(113deg, #211e2c 0%, #1c1926 52%, #221d31 100%); }
````

**Catatan fungsi:** `welcome-section` menjadi grid dua kolom, vertikal di tengah, tinggi minimal 276 px, padding, overflow tersembunyi, border/radius, dan dua lapis gradasi latar gelap.

### Baris 109

````css
html[data-theme="light"] .welcome-section { background: radial-gradient(ellipse at 80% 45%, rgba(167,149,255,.26), transparent 40%), linear-gradient(113deg, #ede8f7 0%, #f5f0fa 57%, #eee8fb 100%); }
````

**Catatan fungsi:** Dalam tema terang, latar panel sambutan diganti dengan gradasi ungu muda.

### Baris 110

````css
.welcome-copy { position: relative; z-index: 2; }
````

**Catatan fungsi:** Kolom teks sambutan dibuat relatif dan berada di atas dekorasi melalui `z-index: 2`.

### Baris 111

````css
.eyebrow { display: flex; align-items: center; gap: 9px; color: var(--muted); font-size: 8px; font-weight: 800; letter-spacing: 1.8px; }
````

**Catatan fungsi:** Eyebrow menggunakan flex untuk menata teks dan garis, plus warna sekunder, font sangat kecil, tebal, dan tracking lebar.

### Baris 112

````css
.eyebrow-line { width: 19px; height: 2px; background: var(--lime); }
````

**Catatan fungsi:** Garis pendek di eyebrow berukuran 19 × 2 px dan berwarna lime.

### Baris 113

````css
.welcome-section h1 { margin: 21px 0 13px; font-size: clamp(31px, 3vw, 44px); font-weight: 500; letter-spacing: -2px; line-height: 1.1; }
````

**Catatan fungsi:** Judul sambutan memakai margin dan ukuran responsif `clamp(31px, 3vw, 44px)`, bobot sedang, tracking negatif dan line-height rapat.

### Baris 114

````css
.welcome-section h1 em, .section-heading h2 em, .dialog-header h2 em, .focus-card h2 em { color: var(--lime); font-family: Georgia, "Times New Roman", serif; font-weight: 400; }
````

**Catatan fungsi:** Elemen italic pada judul dan judul terkait memakai warna lime dan font serif.

### Baris 115

````css
.welcome-copy > p { max-width: 435px; margin: 0 0 21px; color: var(--muted); font-size: 11px; line-height: 1.75; }
````

**Catatan fungsi:** Paragraf sambutan dibatasi lebar, margin, warna sekunder, font kecil dan line-height lebih longgar.

### Baris 116

````css
.button { display: inline-flex; align-items: center; justify-content: center; gap: 10px; min-height: 41px; padding: 0 16px; border: 1px solid transparent; border-radius: 9px; font-size: 11px; font-weight: 750; transition: transform .18s ease, background .18s ease, border-color .18s ease; }
````

**Catatan fungsi:** Kelas umum tombol menetapkan flex, alignment, jarak ikon, tinggi minimum, padding, radius, tipografi dan transisi.

### Baris 117

````css
.button:hover { transform: translateY(-1px); }
````

**Catatan fungsi:** Tombol bergerak naik 1 px saat hover.

### Baris 118

````css
.button-primary { border-color: var(--lime); background: var(--lime); color: #17151c; }
````

**Catatan fungsi:** Tombol utama menggunakan latar dan border lime dengan teks gelap.

### Baris 119

````css
.button-primary:hover { background: #e5ff96; }
````

**Catatan fungsi:** Hover tombol utama membuat lime lebih terang.

### Baris 120

````css
.button-plus { font-size: 18px; font-weight: 400; line-height: 1; }
````

**Catatan fungsi:** Ikon tambah pada tombol diberi ukuran 18 px dan line-height rapat.

### Baris 121

````css
.button-arrow { margin-left: 5px; font-size: 15px; }
````

**Catatan fungsi:** Panah tombol mendapat jarak kiri dan ukuran 15 px.

### Baris 122

````css
.button-outline { border-color: var(--line); background: transparent; color: var(--text); }
````

**Catatan fungsi:** Tombol outline memakai border dan latar transparan.

### Baris 123

````css
.button-outline:hover { border-color: var(--violet); background: var(--violet-soft); }
````

**Catatan fungsi:** Hover tombol outline memberi border dan latar ungu lembut.

### Baris 124

````css
.button-ghost { border-color: var(--line); background: transparent; color: var(--muted); }
````

**Catatan fungsi:** Tombol ghost memakai border, latar transparan dan warna sekunder.

### Baris 125

````css
.button-ghost:hover { background: var(--panel-2); color: var(--text); }
````

**Catatan fungsi:** Hover tombol ghost menggunakan latar panel kedua dan teks utama.

### Baris 126

````css
.art-panel { position: relative; align-self: stretch; min-height: 200px; overflow: hidden; }
````

**Catatan fungsi:** Panel ilustrasi relatif, mengisi tinggi kolom dan minimal 200 px, serta memotong gambar yang keluar batas.

### Baris 127

````css
.art-grid { position: absolute; inset: -15px 0; opacity: .22; background-image: linear-gradient(rgba(210,200,245,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(210,200,245,.1) 1px, transparent 1px); background-size: 29px 29px; mask-image: radial-gradient(ellipse, #000 10%, transparent 70%); }
````

**Catatan fungsi:** Kisi ilustrasi dibuat dari dua linear-gradient berulang, opasitas rendah, ukuran grid 29 px, dan mask radial agar memudar di pinggir.

### Baris 128

````css
.art-ring { position: absolute; top: 50%; left: 51%; border: 1px solid rgba(167,149,255,.26); border-radius: 50%; transform: translate(-50%,-50%) rotate(-23deg); }
````

**Catatan fungsi:** Cincin ilustrasi diposisikan sekitar tengah, berbentuk elips melalui border-radius dan transform rotasi.

### Baris 129

````css
.ring-one { width: 172px; height: 172px; box-shadow: 0 0 50px rgba(167,149,255,.06); }
````

**Catatan fungsi:** Cincin pertama berukuran 172 × 172 px dengan glow lembut.

### Baris 130

````css
.ring-two { width: 225px; height: 124px; border-color: rgba(217,255,102,.35); transform: translate(-50%,-50%) rotate(49deg); }
````

**Catatan fungsi:** Cincin kedua lebih lebar/oval, warna garis lime, dan rotasi berbeda.

### Baris 131

````css
.ring-three { width: 250px; height: 100px; border-color: rgba(255,173,207,.25); transform: translate(-50%,-50%) rotate(-55deg); }
````

**Catatan fungsi:** Cincin ketiga berbentuk oval mendatar dan menggunakan aksen pink.

### Baris 132

````css
.art-core { position: absolute; top: 50%; left: 51%; display: flex; align-items: center; justify-content: center; flex-direction: column; width: 92px; height: 92px; border: 1px solid rgba(217,255,102,.7); border-radius: 50%; background: radial-gradient(circle at 35% 25%, #373044, #191621 74%); box-shadow: 0 0 35px rgba(167,149,255,.18), inset 0 0 28px rgba(167,149,255,.07); transform: translate(-50%,-50%); }
````

**Catatan fungsi:** Inti ilustrasi berupa lingkaran 92 px dengan border lime, latar gradasi radial, bayangan luar/dalam, dan transform agar terpusat.

### Baris 133

````css
.art-core span { color: var(--lime); font-family: Georgia, "Times New Roman", serif; font-size: 35px; font-style: italic; line-height: 1; }
````

**Catatan fungsi:** Huruf `D.` di tengah memakai lime, serif, ukuran besar, italic dan line-height rapat.

### Baris 134

````css
.art-core small { margin-top: 6px; color: #a19bad; font-size: 6px; letter-spacing: 1.1px; }
````

**Catatan fungsi:** Label kecil di bawah huruf inti memakai warna redup, jarak atas dan tracking.

### Baris 135

````css
.art-star { position: absolute; color: var(--lime); }
````

**Catatan fungsi:** Bintang ilustrasi diposisikan absolut dan berwarna lime secara default.

### Baris 136

````css
.star-one { top: 22%; left: 71%; font-size: 20px; }
````

**Catatan fungsi:** Bintang pertama diletakkan dekat sisi kanan atas panel.

### Baris 137

````css
.star-two { top: 68%; left: 21%; color: var(--pink); font-size: 17px; }
````

**Catatan fungsi:** Bintang kedua berada kiri bawah serta memakai warna pink.

### Baris 138

````css
.art-caption { position: absolute; right: 1%; bottom: 1%; left: 1%; display: flex; justify-content: space-between; color: var(--muted-2); font-size: 7px; letter-spacing: 1.4px; }
````

**Catatan fungsi:** Caption ilustrasi berada sepanjang bawah panel dan menyebarkan dua teks ke sisi berlawanan.

### Baris 139

````css
.welcome-index { position: absolute; right: 13px; bottom: 15px; display: flex; align-items: center; gap: 7px; color: var(--muted-2); font-size: 7px; letter-spacing: 1px; writing-mode: vertical-rl; }
````

**Catatan fungsi:** Indeks vertikal berada di sudut panel dengan writing mode vertikal, jarak dan ukuran kecil.

### Baris 140

````css
.index-rule { width: 1px; height: 20px; background: var(--line); }
````

**Catatan fungsi:** Garis kecil pemisah indeks dibuat 1 × 20 px.

### Baris 141

````css

````

**Catatan fungsi:** Baris kosong yang memisahkan aturan CSS agar stylesheet mudah dibaca.

### Baris 142

````css
.stats-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 12px; margin-top: 16px; }
````

**Catatan fungsi:** Grid statistik memiliki empat kolom seimbang, celah 12 px dan margin atas.

### Baris 143

````css
.stat-card { min-width: 0; min-height: 127px; padding: 17px 19px 15px; border: 1px solid var(--line-soft); border-radius: 13px; background: var(--panel); }
````

**Catatan fungsi:** Kartu statistik memiliki minimum width 0 untuk mencegah overflow, tinggi minimal, padding, border, radius dan warna panel.

### Baris 144

````css
.stat-top { display: flex; align-items: center; justify-content: space-between; gap: 8px; }
````

**Catatan fungsi:** Baris label/simbol dalam kartu disusun flex, ruang di antara keduanya dan celah konsisten.

### Baris 145

````css
.stat-label { color: var(--muted-2); font-size: 8px; font-weight: 800; letter-spacing: 1.1px; }
````

**Catatan fungsi:** Label statistik menggunakan warna redup, huruf kecil, bold, dan tracking.

### Baris 146

````css
.stat-symbol { display: grid; place-items: center; width: 25px; height: 25px; border-radius: 8px; background: var(--lime-soft); color: var(--lime); font-size: 14px; }
````

**Catatan fungsi:** Simbol statistik berada di kotak 25 px dengan radius dan latar lime lembut.

### Baris 147

````css
.symbol-violet { background: var(--violet-soft); color: var(--violet); }
````

**Catatan fungsi:** Modifier untuk simbol ungu mengganti latar dan warna teks.

### Baris 148

````css
.symbol-lime { background: var(--lime-soft); color: var(--lime); }
````

**Catatan fungsi:** Modifier simbol lime menetapkan latar lime lembut dan warna lime.

### Baris 149

````css
.stat-number { margin-top: 11px; color: var(--text); font-size: 31px; font-weight: 550; letter-spacing: -1.7px; line-height: 1; font-variant-numeric: tabular-nums; }
````

**Catatan fungsi:** Angka statistik memakai margin atas, font besar, tracking negatif, line-height rapat dan angka tabular.

### Baris 150

````css
.stat-foot { display: flex; align-items: center; gap: 7px; margin-top: 10px; color: var(--muted-2); font-size: 9px; }
````

**Catatan fungsi:** Footer kartu statistik disejajarkan dan diberi jarak atas, warna sekunder serta ukuran kecil.

### Baris 151

````css
.stat-mini-dot { width: 5px; height: 5px; border-radius: 50%; background: var(--lime); }
````

**Catatan fungsi:** Titik kecil statistik total menjadi lingkaran lime.

### Baris 152

````css
.status-dot { width: 5px; height: 5px; border-radius: 50%; }
````

**Catatan fungsi:** Titik status umum dibuat bulat.

### Baris 153

````css
.status-active { background: var(--violet); }
````

**Catatan fungsi:** Status aktif memakai violet.

### Baris 154

````css
.status-done { background: var(--lime); }
````

**Catatan fungsi:** Status selesai memakai lime.

### Baris 155

````css
.stat-progress-card { display: flex; flex-direction: column; }
````

**Catatan fungsi:** Kartu progres menggunakan flex kolom agar footer bisa menempel ke bawah.

### Baris 156

````css
.stat-percent { color: var(--lime); font-size: 11px; font-weight: 800; font-variant-numeric: tabular-nums; }
````

**Catatan fungsi:** Persentase progres menggunakan warna lime, font kecil tebal dan angka tabular.

### Baris 157

````css
.progress-track { height: 5px; overflow: hidden; margin-top: 22px; border-radius: 20px; background: var(--line); }
````

**Catatan fungsi:** Track progres setinggi 5 px, memotong isi melampaui tepi, punya jarak atas, radius dan latar garis.

### Baris 158

````css
.progress-fill { width: 0; height: 100%; border-radius: inherit; background: var(--lime); transition: width .35s ease; }
````

**Catatan fungsi:** Isi progres memulai dari lebar 0; JavaScript mengubah width; transisi membuat perubahan tampak halus.

### Baris 159

````css
.stat-progress-card .stat-foot { margin-top: auto; padding-top: 12px; }
````

**Catatan fungsi:** Footer kartu progres didorong ke bawah dengan `margin-top: auto` dan padding atas.

### Baris 160

````css

````

**Catatan fungsi:** Baris kosong/pemisah.

### Baris 161

````css
.tasks-section { padding-top: 43px; }
````

**Catatan fungsi:** Bagian tugas mendapat padding atas besar untuk memberi ruang dari statistik.

### Baris 162

````css
.section-heading { display: flex; align-items: flex-end; justify-content: space-between; gap: 18px; }
````

**Catatan fungsi:** Heading bagian menggunakan flex dan mensejajarkan konten ke bawah.

### Baris 163

````css
.small-eyebrow { font-size: 7px; letter-spacing: 1.65px; }
````

**Catatan fungsi:** Eyebrow versi kecil memiliki ukuran/letter spacing yang lebih ringkas.

### Baris 164

````css
.section-heading h2, .dialog-header h2 { margin: 9px 0 4px; font-size: 27px; font-weight: 550; letter-spacing: -1.2px; line-height: 1.15; }
````

**Catatan fungsi:** Judul bagian/dialog menggunakan margin, ukuran 27 px, weight sedang dan line-height rapat.

### Baris 165

````css
.section-heading h2 em, .dialog-header h2 em { color: var(--violet); }
````

**Catatan fungsi:** Italic pada judul bagian/dialog diberi warna ungu.

### Baris 166

````css
.section-heading p, .dialog-header p { margin: 0; color: var(--muted); font-size: 10.5px; }
````

**Catatan fungsi:** Paragraf heading/dialog menggunakan margin 0 dan teks kecil sekunder.

### Baris 167

````css
.desktop-add { min-height: 37px; margin-bottom: 2px; }
````

**Catatan fungsi:** Tombol tambah desktop sedikit lebih pendek.

### Baris 168

````css
.task-toolbar { display: flex; align-items: center; justify-content: space-between; gap: 20px; padding: 19px 0 15px; margin-top: 16px; border-top: 1px solid var(--line-soft); }
````

**Catatan fungsi:** Toolbar memakai flex, menaruh filter dan tools di sisi berlawanan, dengan padding, margin atas dan border atas.

### Baris 169

````css
.filter-tabs { display: flex; align-items: center; gap: 4px; }
````

**Catatan fungsi:** Tab filter memakai flex dan celah kecil.

### Baris 170

````css
.filter-tab { display: inline-flex; align-items: center; gap: 8px; min-height: 30px; padding: 0 10px; border: 1px solid transparent; border-radius: 8px; background: transparent; color: var(--muted); font-size: 10px; transition: background .18s ease, border-color .18s ease, color .18s ease; }
````

**Catatan fungsi:** Tab filter memiliki tinggi minimum, padding, border transparan, radius, latar transparan, warna redup, dan transisi.

### Baris 171

````css
.filter-tab span { display: grid; place-items: center; min-width: 18px; height: 18px; padding: 0 5px; border-radius: 5px; background: var(--line-soft); color: var(--muted-2); font-size: 9px; font-variant-numeric: tabular-nums; }
````

**Catatan fungsi:** Angka kecil di dalam tab dibuat seperti badge.

### Baris 172

````css
.filter-tab:hover { color: var(--text); }
````

**Catatan fungsi:** Hover filter mengubah teks menjadi warna utama.

### Baris 173

````css
.filter-tab.is-selected { border-color: var(--line); background: var(--panel); color: var(--text); }
````

**Catatan fungsi:** Tab terpilih mendapat border dan latar panel serta teks utama.

### Baris 174

````css
.filter-tab.is-selected span { background: var(--lime-soft); color: var(--lime); }
````

**Catatan fungsi:** Badge angka pada filter terpilih diberi latar/teks lime.

### Baris 175

````css
.toolbar-tools { display: flex; align-items: center; gap: 8px; }
````

**Catatan fungsi:** Tools pencarian dan urutan ditata flex dengan celah.

### Baris 176

````css
.search-box { display: flex; align-items: center; gap: 8px; width: 190px; height: 34px; padding: 0 9px; border: 1px solid var(--line); border-radius: 8px; background: var(--panel); color: var(--muted); }
````

**Catatan fungsi:** Kotak pencarian memiliki lebar 190 px, tinggi 34 px, border, radius, latar panel dan warna redup.

### Baris 177

````css
.search-box > span { font-size: 20px; line-height: 1; transform: rotate(-20deg); }
````

**Catatan fungsi:** Simbol pencarian dibesarkan dan sedikit diputar.

### Baris 178

````css
.search-box input { width: 100%; min-width: 0; border: 0; outline: 0; background: transparent; color: var(--text); font-size: 10px; }
````

**Catatan fungsi:** Input pencarian mengisi ruang tersedia; border/outlinenormal dihilangkan; latar transparan; teks memakai warna utama.

### Baris 179

````css
.search-box input::placeholder { color: var(--muted-2); }
````

**Catatan fungsi:** Placeholder pencarian menggunakan warna teks redup.

### Baris 180

````css
.search-box input:focus-visible { outline: none; }
````

**Catatan fungsi:** Fokus input dalam kotak pencarian tidak memakai outline bawaan tambahan.

### Baris 181

````css
.search-box:focus-within { border-color: var(--violet); }
````

**Catatan fungsi:** Saat elemen di dalam kotak pencarian fokus, border kotak berubah ungu.

### Baris 182

````css
.search-box kbd { padding: 2px 5px; border: 1px solid var(--line); border-radius: 4px; color: var(--muted-2); font-size: 9px; }
````

**Catatan fungsi:** Petunjuk keyboard `/` ditampilkan seperti tombol keyboard kecil dengan border, radius, dan font kecil.

### Baris 183

````css
.sort-control select { max-width: 142px; height: 34px; padding: 0 26px 0 10px; border: 1px solid var(--line); border-radius: 8px; appearance: none; background: var(--panel) url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 10 10'%3E%3Cpath d='m2 3 3 3 3-3' fill='none' stroke='%239b95a8' stroke-width='1.3'/%3E%3C/svg%3E") no-repeat right 9px center; color: var(--muted); font-size: 9px; }
````

**Catatan fungsi:** Dropdown sort diberi lebar maksimum, tinggi, padding, border dan radius; panah default dihilangkan lalu diganti SVG kecil sebagai background; warna/ukuran teks disesuaikan.

### Baris 184

````css

````

**Catatan fungsi:** Baris kosong.

### Baris 185

````css
.task-list { display: grid; gap: 8px; min-height: 125px; }
````

**Catatan fungsi:** Daftar tugas memakai grid vertikal dengan jarak 8 px dan tinggi minimal.

### Baris 186

````css
.task-item { display: grid; grid-template-columns: 22px minmax(0, 1fr) auto; align-items: start; gap: 14px; padding: 16px 17px; border: 1px solid var(--line-soft); border-radius: 12px; background: var(--panel); transition: background .18s ease, border-color .18s ease, transform .18s ease; animation: task-arrive .22s ease both; }
````

**Catatan fungsi:** Kartu tugas adalah grid dengan kolom checkbox, isi utama, dan aksi; memiliki padding, border, radius, latar panel, transisi, dan animasi masuk.

### Baris 187

````css
.task-item:hover { border-color: var(--line); background: var(--panel-2); transform: translateY(-1px); }
````

**Catatan fungsi:** Hover kartu mengubah border/latar dan mengangkat sedikit kartu.

### Baris 188

````css
@keyframes task-arrive { from { opacity: 0; transform: translateY(4px); } to { opacity: 1; transform: translateY(0); } }
````

**Catatan fungsi:** `@keyframes task-arrive` membuat kartu memudar masuk sambil bergerak dari bawah 4 px ke posisi awal.

### Baris 189

````css
.task-check { position: relative; display: grid; place-items: center; width: 21px; height: 21px; padding: 0; margin-top: 1px; border: 1px solid #555061; border-radius: 7px; background: transparent; color: #17151c; font-size: 13px; font-weight: 800; transition: background .18s ease, border-color .18s ease; }
````

**Catatan fungsi:** Tombol checkbox dibuat kotak 21 px dengan border, radius dan gaya centang.

### Baris 190

````css
.task-check:hover { border-color: var(--lime); }
````

**Catatan fungsi:** Hover checkbox mengubah border menjadi lime.

### Baris 191

````css
.task-item.is-done .task-check { border-color: var(--lime); background: var(--lime); }
````

**Catatan fungsi:** Checkbox pada tugas selesai memperoleh border/latar lime.

### Baris 192

````css
.task-main { min-width: 0; }
````

**Catatan fungsi:** Kolom isi tugas memakai `min-width: 0` agar teks panjang boleh menyusut dan membungkus.

### Baris 193

````css
.task-title-row { display: flex; align-items: center; gap: 9px; min-width: 0; }
````

**Catatan fungsi:** Baris judul fleksibel dan menjaga elemen tetap rapat.

### Baris 194

````css
.task-title { overflow-wrap: anywhere; color: var(--text); font-size: 12px; font-weight: 650; line-height: 1.5; }
````

**Catatan fungsi:** Judul tugas bisa membungkus kata panjang (`overflow-wrap: anywhere`) dan menggunakan warna/font utama.

### Baris 195

````css
.task-item.is-done .task-title { color: var(--muted); text-decoration: line-through; text-decoration-color: var(--muted-2); }
````

**Catatan fungsi:** Pada tugas selesai, judul diredupkan dan dicoret.

### Baris 196

````css
.task-description { margin: 4px 0 0; color: var(--muted); font-size: 10px; line-height: 1.6; overflow-wrap: anywhere; white-space: pre-wrap; }
````

**Catatan fungsi:** Deskripsi memakai margin kecil, warna sekunder, font 10 px, line-height dan `white-space: pre-wrap` agar baris baru pengguna tetap tampak.

### Baris 197

````css
.task-meta { display: flex; align-items: center; flex-wrap: wrap; gap: 7px; margin-top: 10px; }
````

**Catatan fungsi:** Metadata dibungkus jika ruang tidak cukup, dengan jarak dari deskripsi.

### Baris 198

````css
.meta-pill { display: inline-flex; align-items: center; gap: 5px; min-height: 21px; padding: 0 7px; border: 1px solid var(--line-soft); border-radius: 6px; color: var(--muted); font-size: 8px; }
````

**Catatan fungsi:** Badge metadata dibuat inline-flex dengan padding, border, radius dan teks kecil.

### Baris 199

````css
.meta-pill.category { background: var(--violet-soft); color: var(--violet); border-color: transparent; }
````

**Catatan fungsi:** Badge kategori memakai latar dan teks ungu lembut.

### Baris 200

````css
.meta-pill.priority-high { background: rgba(255,143,156,.1); color: var(--danger); border-color: rgba(255,143,156,.12); }
````

**Catatan fungsi:** Prioritas tinggi memakai merah bahaya yang lembut.

### Baris 201

````css
.meta-pill.priority-medium { background: var(--violet-soft); color: var(--violet); border-color: transparent; }
````

**Catatan fungsi:** Prioritas sedang memakai ungu lembut.

### Baris 202

````css
.meta-pill.priority-low { background: var(--lime-soft); color: var(--lime); border-color: transparent; }
````

**Catatan fungsi:** Prioritas rendah memakai lime lembut.

### Baris 203

````css
.meta-pill.due-overdue { background: rgba(255,143,156,.1); color: var(--danger); border-color: transparent; }
````

**Catatan fungsi:** Tanggal terlambat menggunakan warna bahaya.

### Baris 204

````css
.meta-pill.due-today { background: var(--lime-soft); color: var(--lime); border-color: transparent; }
````

**Catatan fungsi:** Tanggal hari ini menggunakan aksen lime.

### Baris 205

````css
.task-actions { display: flex; align-items: center; gap: 4px; padding-left: 10px; }
````

**Catatan fungsi:** Tombol aksi kartu disusun mendatar dan terpisah dari isi utama.

### Baris 206

````css
.task-action { display: grid; place-items: center; width: 29px; height: 29px; border: 1px solid transparent; border-radius: 7px; background: transparent; color: var(--muted-2); font-size: 14px; transition: background .18s ease, color .18s ease, border-color .18s ease; }
````

**Catatan fungsi:** Tombol edit/hapus dibuat kotak 29 px, latar transparan, teks redup, dan transisi.

### Baris 207

````css
.task-action:hover { border-color: var(--line); background: var(--panel-hover); color: var(--text); }
````

**Catatan fungsi:** Hover tombol aksi menampilkan border/latar panel-hover dan teks utama.

### Baris 208

````css
.task-action.delete:hover { border-color: rgba(255,143,156,.18); background: rgba(255,143,156,.08); color: var(--danger); }
````

**Catatan fungsi:** Hover tombol hapus memakai latar/border merah transparan dan teks bahaya.

### Baris 209

````css
.task-list-footer { display: flex; align-items: center; justify-content: space-between; gap: 12px; padding: 14px 2px 0; color: var(--muted-2); font-size: 9px; }
````

**Catatan fungsi:** Footer daftar membagi jumlah item dan keterangan ke sisi berbeda.

### Baris 210

````css
.task-list-footer > span:last-child { display: flex; align-items: center; gap: 6px; }
````

**Catatan fungsi:** Elemen kedua footer memakai flex untuk ikon kecil dan teks.

### Baris 211

````css
.footer-key { display: inline-grid; place-items: center; width: 16px; height: 16px; border: 1px solid var(--line); border-radius: 4px; font-size: 10px; }
````

**Catatan fungsi:** Simbol kecil footer dibuat dalam kotak 16 px dengan border dan radius.

### Baris 212

````css
.empty-state { display: flex; align-items: center; flex-direction: column; padding: 38px 18px 36px; border: 1px dashed var(--line); border-radius: 13px; background: linear-gradient(145deg, var(--panel), transparent); text-align: center; }
````

**Catatan fungsi:** Keadaan kosong ditampilkan secara vertikal di tengah, memakai border putus-putus, latar gradasi dan text-align tengah.

### Baris 213

````css
.empty-illustration { display: grid; place-items: center; width: 56px; height: 56px; border: 1px solid rgba(167,149,255,.25); border-radius: 18px; background: var(--violet-soft); color: var(--violet); font-family: Georgia, serif; font-size: 29px; transform: rotate(-7deg); }
````

**Catatan fungsi:** Ilustrasi keadaan kosong dibuat sebagai kotak 56 px dengan border/latar ungu, font serif, dan sedikit rotasi.

### Baris 214

````css
.empty-state h3 { margin: 17px 0 5px; font-size: 15px; font-weight: 600; letter-spacing: -.3px; }
````

**Catatan fungsi:** Judul keadaan kosong mendapat margin dan ukuran 15 px.

### Baris 215

````css
.empty-state p { max-width: 330px; margin: 0 0 17px; color: var(--muted); font-size: 10px; line-height: 1.7; }
````

**Catatan fungsi:** Paragraf keadaan kosong dibatasi lebar, teks redup dan jarak bawah.

### Baris 216

````css
.page-footer { display: flex; justify-content: space-between; gap: 12px; padding: 23px 0 2px; margin-top: 35px; border-top: 1px solid var(--line-soft); color: var(--muted-2); font-size: 8px; letter-spacing: .4px; }
````

**Catatan fungsi:** Footer halaman menyebarkan dua bagian teks, memberi border atas dan margin/padding.

### Baris 217

````css
.page-footer > span:first-child { font-size: 7px; font-weight: 800; letter-spacing: 1.2px; }
````

**Catatan fungsi:** Bagian identitas footer menggunakan ukuran lebih kecil, weight tebal dan tracking lebar.

### Baris 218

````css
.footer-dot { padding: 0 5px; color: var(--lime); }
````

**Catatan fungsi:** Titik pemisah di footer menggunakan padding dan warna lime.

### Baris 219

````css

````

**Catatan fungsi:** Baris kosong.

### Baris 220

````css
.task-dialog { width: min(510px, calc(100vw - 28px)); max-width: 510px; max-height: min(90vh, 760px); padding: 0; overflow: auto; border: 1px solid var(--line); border-radius: 17px; background: var(--panel); color: var(--text); box-shadow: var(--shadow); }
````

**Catatan fungsi:** Dialog tugas memakai lebar maksimum 510 px atau menyesuaikan viewport, maksimum tinggi, overflow auto, border, radius, latar, teks dan bayangan.

### Baris 221

````css
.task-dialog::backdrop { background: rgba(7, 6, 11, .72); backdrop-filter: blur(6px); }
````

**Catatan fungsi:** Backdrop dialog diberi lapisan gelap dan blur di belakang modal.

### Baris 222

````css
.dialog-form { padding: 29px 31px 24px; }
````

**Catatan fungsi:** Form dialog mendapat padding interior.

### Baris 223

````css
.dialog-header { display: flex; align-items: flex-start; justify-content: space-between; gap: 16px; margin-bottom: 25px; }
````

**Catatan fungsi:** Header dialog memakai flex untuk menaruh judul dan tombol tutup di sisi berbeda.

### Baris 224

````css
.dialog-header h2 { margin-top: 9px; font-size: 29px; }
````

**Catatan fungsi:** Judul dialog menggunakan ukuran 29 px dan margin atas yang sesuai.

### Baris 225

````css
.dialog-header p { margin-top: 6px; }
````

**Catatan fungsi:** Paragraf dialog mendapat jarak atas.

### Baris 226

````css
.close-dialog { flex: 0 0 auto; font-size: 25px; }
````

**Catatan fungsi:** Tombol tutup tidak boleh mengecil (`flex: 0 0 auto`) dan memakai font besar.

### Baris 227

````css
.field-label { display: block; margin: 15px 0 7px; color: var(--text); font-size: 10px; font-weight: 700; }
````

**Catatan fungsi:** Label input ditampilkan block dengan margin dan tipografi tebal.

### Baris 228

````css
.field-label > span:first-child { color: var(--pink); }
````

**Catatan fungsi:** Bagian label pertama yang digunakan untuk penanda wajib diberi pink.

### Baris 229

````css
.field-label .optional { color: var(--muted-2); font-weight: 400; }
````

**Catatan fungsi:** Teks opsional dibuat redup dan bobot normal.

### Baris 230

````css
.text-field { display: block; width: 100%; min-height: 42px; padding: 10px 12px; border: 1px solid var(--line); border-radius: 8px; outline: 0; appearance: none; background: var(--bg); color: var(--text); font-size: 11px; transition: border-color .18s ease, box-shadow .18s ease; }
````

**Catatan fungsi:** Input, select, textarea memakai lebar penuh, tinggi/padding, border, radius, latar utama dan warna teks tema.

### Baris 231

````css
.text-field:focus { border-color: var(--violet); box-shadow: 0 0 0 3px var(--violet-soft); }
````

**Catatan fungsi:** Saat fokus, field mendapat border ungu dan halo tipis.

### Baris 232

````css
.text-field::placeholder { color: var(--muted-2); }
````

**Catatan fungsi:** Placeholder menggunakan warna sekunder yang redup.

### Baris 233

````css
.text-area { min-height: 78px; resize: vertical; line-height: 1.6; }
````

**Catatan fungsi:** Textarea lebih tinggi dan dapat diubah ukurannya secara vertikal.

### Baris 234

````css
.field-row { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
````

**Catatan fungsi:** Kategori dan prioritas ditata menjadi dua kolom dengan jarak 12 px.

### Baris 235

````css
.field-group { min-width: 0; }
````

**Catatan fungsi:** Grup field mengizinkan lebar menyusut agar tidak overflow.

### Baris 236

````css
.text-field[type="date"] { color-scheme: dark; }
````

**Catatan fungsi:** Input tanggal memakai skema kontrol kalender gelap.

### Baris 237

````css
html[data-theme="light"] .text-field[type="date"] { color-scheme: light; }
````

**Catatan fungsi:** Saat tema terang, input tanggal mengubah skema kontrol menjadi terang.

### Baris 238

````css
.dialog-actions { display: flex; justify-content: flex-end; gap: 8px; padding-top: 24px; margin-top: 23px; border-top: 1px solid var(--line-soft); }
````

**Catatan fungsi:** Tombol aksi form disejajarkan ke kanan, dengan garis pemisah atas dan margin/padding.

### Baris 239

````css
.form-footnote { margin: 16px 0 0; color: var(--muted-2); font-size: 9px; text-align: center; }
````

**Catatan fungsi:** Catatan kecil bawah form berwarna redup, berukuran kecil dan rata tengah.

### Baris 240

````css
.form-footnote span { margin-right: 5px; color: var(--lime); }
````

**Catatan fungsi:** Simbol pada catatan diberi jarak kanan dan warna lime.

### Baris 241

````css
.toast { position: fixed; right: 24px; bottom: 22px; z-index: 90; max-width: min(360px, calc(100vw - 40px)); padding: 12px 16px; border: 1px solid var(--line); border-radius: 10px; background: var(--panel-2); color: var(--text); font-size: 11px; box-shadow: var(--shadow); opacity: 0; pointer-events: none; transform: translateY(8px); transition: opacity .2s ease, transform .2s ease; }
````

**Catatan fungsi:** Toast berada fixed di kanan bawah dengan z-index tinggi, lebar maksimum, padding, border, panel, shadow, dan awalnya transparan serta bergeser turun.

### Baris 242

````css
.toast.is-visible { opacity: 1; transform: translateY(0); }
````

**Catatan fungsi:** Saat kelas `is-visible` ditambahkan, toast menjadi opak dan kembali ke posisi normal.

### Baris 243

````css
.focus-overlay { position: fixed; inset: 0; z-index: 100; display: grid; place-items: center; padding: 20px; background: radial-gradient(ellipse at 50% 44%, #29223c, #100e15 70%); }
````

**Catatan fungsi:** Overlay fokus menutupi seluruh viewport, menaruh kartu di tengah, dan memakai gradasi gelap dengan z-index tinggi.

### Baris 244

````css
.focus-overlay[hidden], .sidebar-scrim[hidden] { display: none; }
````

**Catatan fungsi:** Memastikan overlay fokus dan scrim yang memiliki atribut `[hidden]` betul-betul tidak ditampilkan, walaupun ada aturan display lain.

### Baris 245

````css
.focus-card { max-width: 470px; text-align: center; animation: task-arrive .3s ease both; }
````

**Catatan fungsi:** Kartu fokus dibatasi lebarnya dan diberi animasi masuk.

### Baris 246

````css
.focus-kicker { color: var(--muted); font-size: 8px; font-weight: 800; letter-spacing: 2px; }
````

**Catatan fungsi:** Kicker mode fokus memiliki teks kecil tebal dan tracking sangat lebar.

### Baris 247

````css
.focus-glyph { margin-top: 24px; color: var(--lime); font-size: 38px; }
````

**Catatan fungsi:** Glyph/bintang fokus diberi jarak atas dan warna lime.

### Baris 248

````css
.focus-card h2 { margin: 17px 0 13px; font-size: 36px; font-weight: 500; letter-spacing: -1.5px; line-height: 1.15; }
````

**Catatan fungsi:** Judul mode fokus berukuran besar, tebal normal, tracking negatif dan line-height rapat.

### Baris 249

````css
.focus-card p { margin: 0 auto 22px; max-width: 370px; color: #aaa3b8; font-size: 12px; line-height: 1.9; }
````

**Catatan fungsi:** Paragraf mode fokus dipusatkan, dibatasi lebar, menggunakan teks sekunder dan line-height longgar.

### Baris 250

````css

````

**Catatan fungsi:** Baris kosong.

### Baris 251

````css
@media (min-width: 1500px) { .page-wrap { padding-right: 58px; padding-left: 58px; } }
````

**Catatan fungsi:** Pada layar lebar minimal 1500 px, ruang padding kiri/kanan konten ditambah menjadi 58 px.

### Baris 252

````css
@media (max-width: 1200px) {
````

**Catatan fungsi:** Memulai media query untuk layar selebar maksimum 1200 px.

### Baris 253

````css
  .sidebar { width: 220px; padding-right: 13px; padding-left: 13px; }
````

**Catatan fungsi:** Sidebar dipersempit menjadi 220 px dan padding horizontal dikurangi.

### Baris 254

````css
  .main-content { margin-left: 220px; }
````

**Catatan fungsi:** Margin kiri konten utama ikut dikurangi agar sejajar dengan sidebar baru.

### Baris 255

````css
  .topbar { padding-right: 30px; padding-left: 30px; }
````

**Catatan fungsi:** Padding topbar dikurangi menjadi 30 px.

### Baris 256

````css
  .page-wrap { padding-right: 30px; padding-left: 30px; }
````

**Catatan fungsi:** Padding konten halaman dikurangi.

### Baris 257

````css
  .welcome-section { padding-left: 29px; }
````

**Catatan fungsi:** Padding kiri panel sambutan ikut dikurangi.

### Baris 258

````css
  .stats-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
````

**Catatan fungsi:** Grid statistik berubah dari empat kolom menjadi dua.

### Baris 259

````css
  .stat-card { min-height: 121px; }
````

**Catatan fungsi:** Tinggi minimum kartu statistik disesuaikan.

### Baris 260

````css
}
````

**Catatan fungsi:** Menutup media query 1200 px.

### Baris 261

````css
@media (max-width: 850px) {
````

**Catatan fungsi:** Memulai media query untuk layar maksimum 850 px.

### Baris 262

````css
  .sidebar { width: 250px; transform: translateX(-100%); transition: transform .24s ease; box-shadow: var(--shadow); }
````

**Catatan fungsi:** Sidebar menjadi lebar 250 px, awalnya digeser keluar layar ke kiri, memakai transisi dan bayangan.

### Baris 263

````css
  .sidebar.is-open { transform: translateX(0); }
````

**Catatan fungsi:** Saat class `is-open` aktif, sidebar digeser kembali ke posisi terlihat.

### Baris 264

````css
  .sidebar-scrim { position: fixed; inset: 0; z-index: 25; background: rgba(0,0,0,.5); }
````

**Catatan fungsi:** Scrim menjadi fixed menutupi layar di belakang sidebar dengan lapisan gelap.

### Baris 265

````css
  .main-content { margin-left: 0; }
````

**Catatan fungsi:** Menghilangkan margin kiri konten karena sidebar bukan lagi kolom tetap di sebelah konten.

### Baris 266

````css
  .mobile-menu { display: grid; }
````

**Catatan fungsi:** Memperlihatkan tombol menu mobile.

### Baris 267

````css
  .topbar { height: 65px; padding-right: 22px; padding-left: 22px; }
````

**Catatan fungsi:** Mengurangi tinggi topbar menjadi 65 px dan padding horisontal menjadi 22 px.

### Baris 268

````css
  .topbar-right { gap: 12px; }
````

**Catatan fungsi:** Mengurangi jarak antarelemen di kanan topbar.

### Baris 269

````css
  .page-wrap { padding: 25px 22px 25px; }
````

**Catatan fungsi:** Mengurangi padding isi halaman.

### Baris 270

````css
  .welcome-section { min-height: 270px; grid-template-columns: minmax(0,1fr) minmax(220px,.8fr); padding: 29px 26px; }
````

**Catatan fungsi:** Panel sambutan menggunakan dua kolom yang lebih rapat dan padding lebih kecil.

### Baris 271

````css
  .welcome-section h1 { font-size: clamp(30px, 4.7vw, 41px); }
````

**Catatan fungsi:** Judul sambutan memakai ukuran responsif yang sesuai layar tablet.

### Baris 272

````css
  .art-panel { min-height: 210px; }
````

**Catatan fungsi:** Panel ilustrasi dipertahankan dengan tinggi minimum 210 px.

### Baris 273

````css
  .task-toolbar { align-items: flex-start; flex-direction: column; gap: 13px; }
````

**Catatan fungsi:** Toolbar tugas menjadi vertikal dan elemen disejajarkan ke awal.

### Baris 274

````css
  .toolbar-tools { width: 100%; }
````

**Catatan fungsi:** Area pencarian/pengurutan diperlebar memenuhi toolbar.

### Baris 275

````css
  .search-box { flex: 1; width: auto; }
````

**Catatan fungsi:** Kotak pencarian tumbuh mengambil ruang sisa.

### Baris 276

````css
  .sort-control select { max-width: 170px; }
````

**Catatan fungsi:** Dropdown urutan diizinkan sedikit lebih lebar.

### Baris 277

````css
}
````

**Catatan fungsi:** Menutup media query 850 px.

### Baris 278

````css
@media (max-width: 600px) {
````

**Catatan fungsi:** Memulai media query layar sempit, maksimum 600 px.

### Baris 279

````css
  .topbar { padding-right: 15px; padding-left: 15px; }
````

**Catatan fungsi:** Padding topbar dikurangi lebih jauh.

### Baris 280

````css
  .breadcrumb { gap: 7px; font-size: 8px; letter-spacing: 1.05px; }
````

**Catatan fungsi:** Breadcrumb memakai celah, font, dan tracking yang lebih kecil.

### Baris 281

````css
  .date-stamp { display: none; }
````

**Catatan fungsi:** Tanggal disembunyikan untuk menghemat ruang horizontal.

### Baris 282

````css
  .topbar-right { gap: 9px; }
````

**Catatan fungsi:** Jarak elemen kanan topbar dikurangi.

### Baris 283

````css
  .page-wrap { padding: 17px 14px 22px; }
````

**Catatan fungsi:** Padding konten halaman dibuat lebih ringkas.

### Baris 284

````css
  .welcome-section { display: block; min-height: auto; padding: 26px 22px 22px; }
````

**Catatan fungsi:** Sambutan tidak lagi memakai grid dua kolom; panel menjadi blok dengan tinggi otomatis.

### Baris 285

````css
  .welcome-section h1 { margin-top: 17px; font-size: 35px; letter-spacing: -1.7px; }
````

**Catatan fungsi:** Ukuran dan margin judul sambutan disesuaikan untuk ponsel.

### Baris 286

````css
  .welcome-copy > p { max-width: 340px; }
````

**Catatan fungsi:** Paragraf sambutan diberi batas lebar yang cocok untuk layar sempit.

### Baris 287

````css
  .art-panel { position: absolute; right: -65px; bottom: -32px; width: 230px; height: 200px; min-height: auto; opacity: .34; pointer-events: none; }
````

**Catatan fungsi:** Ilustrasi diposisikan sebagai latar dekoratif di kanan bawah, dibuat semi-transparan dan tidak menangkap pointer.

### Baris 288

````css
  .welcome-section::after { position: absolute; inset: 0; background: linear-gradient(90deg, rgba(30,27,39,.1), rgba(30,27,39,.05)); content: ""; pointer-events: none; }
````

**Catatan fungsi:** Lapisan pseudo transparan memberi gradasi agar teks di atas ilustrasi tetap jelas; `pointer-events: none` mencegah interaksi dekorasi.

### Baris 289

````css
  .welcome-copy { z-index: 3; }
````

**Catatan fungsi:** Kolom teks sambutan diberi z-index lebih tinggi agar berada di atas dekorasi.

### Baris 290

````css
  .welcome-index { display: none; }
````

**Catatan fungsi:** Indeks vertikal disembunyikan pada ponsel.

### Baris 291

````css
  .stats-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 9px; margin-top: 10px; }
````

**Catatan fungsi:** Statistik tetap dua kolom dengan gap dan margin lebih kecil.

### Baris 292

````css
  .stat-card { min-height: 116px; padding: 14px 13px 12px; }
````

**Catatan fungsi:** Kartu statistik menjadi lebih ringkas dari sisi tinggi dan padding.

### Baris 293

````css
  .stat-label { font-size: 7px; letter-spacing: .7px; }
````

**Catatan fungsi:** Label statistik diperkecil.

### Baris 294

````css
  .stat-number { font-size: 28px; }
````

**Catatan fungsi:** Angka statistik diperkecil.

### Baris 295

````css
  .stat-foot { align-items: flex-start; font-size: 8px; line-height: 1.4; }
````

**Catatan fungsi:** Footer statistik disejajarkan ke awal dan line-height diatur agar kalimat pendek dapat membungkus.

### Baris 296

````css
  .stat-symbol { width: 23px; height: 23px; }
````

**Catatan fungsi:** Simbol statistik diperkecil sedikit.

### Baris 297

````css
  .progress-track { margin-top: 18px; }
````

**Catatan fungsi:** Jarak atas track progres dikurangi.

### Baris 298

````css
  .tasks-section { padding-top: 34px; }
````

**Catatan fungsi:** Padding atas bagian tugas dikurangi.

### Baris 299

````css
  .section-heading { align-items: flex-start; }
````

**Catatan fungsi:** Heading bagian diselaraskan ke bagian atas.

### Baris 300

````css
  .section-heading h2 { font-size: 25px; }
````

**Catatan fungsi:** Judul bagian tugas diperkecil.

### Baris 301

````css
  .section-heading p { max-width: 265px; font-size: 10px; line-height: 1.65; }
````

**Catatan fungsi:** Subtitle dibatasi lebih sempit dan line-height ditambah agar terbaca di ponsel.

### Baris 302

````css
  .desktop-add { width: 36px; min-width: 36px; min-height: 36px; padding: 0; overflow: hidden; gap: 0; color: transparent; font-size: 0; }
````

**Catatan fungsi:** Tombol tambah desktop dibuat seperti tombol ikon kecil; teks disembunyikan secara visual dengan ukuran/font/overflow, sedangkan ruang tombol dipertahankan.

### Baris 303

````css
  .desktop-add .button-plus { color: var(--text); font-size: 20px; }
````

**Catatan fungsi:** Ikon tambah tetap terlihat dan diperbesar.

### Baris 304

````css
  .task-toolbar { gap: 12px; padding-top: 14px; }
````

**Catatan fungsi:** Jarak toolbar dan padding atas dikurangi.

### Baris 305

````css
  .filter-tabs { gap: 1px; width: 100%; }
````

**Catatan fungsi:** Filter mengambil lebar penuh dengan jarak kecil.

### Baris 306

````css
  .filter-tab { flex: 1; justify-content: center; gap: 5px; padding: 0 7px; font-size: 9px; white-space: nowrap; }
````

**Catatan fungsi:** Tiap tombol filter membagi lebar secara fleksibel dan teks tidak dipatahkan ke baris baru.

### Baris 307

````css
  .filter-tab span { min-width: 16px; height: 16px; padding: 0 4px; }
````

**Catatan fungsi:** Badge angka filter diperkecil.

### Baris 308

````css
  .toolbar-tools { gap: 6px; }
````

**Catatan fungsi:** Jarak antara pencarian dan dropdown diperkecil.

### Baris 309

````css
  .search-box { height: 35px; }
````

**Catatan fungsi:** Tinggi kotak pencarian disesuaikan ke 35 px.

### Baris 310

````css
  .search-box kbd { display: none; }
````

**Catatan fungsi:** Hint keyboard `/` disembunyikan di ponsel.

### Baris 311

````css
  .sort-control select { max-width: 126px; height: 35px; padding-left: 7px; font-size: 8px; }
````

**Catatan fungsi:** Dropdown pengurutan dipersempit dengan ukuran/font kecil.

### Baris 312

````css
  .task-item { grid-template-columns: 21px minmax(0,1fr); gap: 10px; padding: 13px 12px; }
````

**Catatan fungsi:** Kartu tugas menjadi dua kolom; tombol aksi tidak lagi menempati kolom ketiga, menghemat lebar layar.

### Baris 313

````css
  .task-actions { grid-column: 2; padding-left: 0; margin-top: 1px; }
````

**Catatan fungsi:** Area aksi ditempatkan pada kolom kedua di baris berikutnya.

### Baris 314

````css
  .task-title-row { align-items: flex-start; flex-direction: column; gap: 1px; }
````

**Catatan fungsi:** Baris judul tugas pada ponsel ditata vertikal.

### Baris 315

````css
  .task-title { font-size: 11px; }
````

**Catatan fungsi:** Font judul tugas diperkecil.

### Baris 316

````css
  .task-description { font-size: 9px; }
````

**Catatan fungsi:** Font deskripsi diperkecil.

### Baris 317

````css
  .task-meta { margin-top: 8px; gap: 5px; }
````

**Catatan fungsi:** Jarak dan celah metadata dikurangi.

### Baris 318

````css
  .task-list-footer { align-items: flex-start; flex-direction: column; gap: 7px; font-size: 8px; }
````

**Catatan fungsi:** Footer daftar ditumpuk vertikal supaya keterangan tak terlalu sempit.

### Baris 319

````css
  .page-footer { flex-direction: column; margin-top: 26px; font-size: 8px; }
````

**Catatan fungsi:** Footer halaman ditumpuk vertikal dan margin atas dikurangi.

### Baris 320

````css
  .dialog-form { padding: 23px 20px 20px; }
````

**Catatan fungsi:** Padding form dialog diperkecil.

### Baris 321

````css
  .dialog-header h2 { font-size: 26px; }
````

**Catatan fungsi:** Judul dialog diperkecil.

### Baris 322

````css
  .field-row { gap: 9px; }
````

**Catatan fungsi:** Gap dua kolom field dikurangi.

### Baris 323

````css
  .text-field { font-size: 10px; }
````

**Catatan fungsi:** Font input diperkecil sedikit.

### Baris 324

````css
  .focus-card h2 { font-size: 31px; }
````

**Catatan fungsi:** Judul mode fokus juga diperkecil.

### Baris 325

````css
  .toast { right: 15px; bottom: 15px; }
````

**Catatan fungsi:** Posisi toast lebih dekat ke sudut layar ponsel.

### Baris 326

````css
}
````

**Catatan fungsi:** Menutup media query layar 600 px.

### Baris 327

````css
@media (prefers-reduced-motion: reduce) {
````

**Catatan fungsi:** Memulai media query preferensi `prefers-reduced-motion`, untuk pengguna yang memilih pengurangan gerakan pada sistem operasi.

### Baris 328

````css
  *, *::before, *::after { scroll-behavior: auto !important; animation-duration: .01ms !important; animation-iteration-count: 1 !important; transition-duration: .01ms !important; }
````

**Catatan fungsi:** Mengurangi scroll halus, durasi animasi, jumlah pengulangan, dan transisi agar efek gerak hampir hilang bagi pengguna yang sensitif terhadap animasi.

### Baris 329

````css
}
````

**Catatan fungsi:** Menutup media query reduced-motion.
