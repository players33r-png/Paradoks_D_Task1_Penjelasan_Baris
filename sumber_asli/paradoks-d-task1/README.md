# Paradoks D. Task

Task manager pribadi dengan antarmuka gelap, aksen lime dan violet, serta suasana editorial yang terinspirasi palet warna musik tanpa menyalin sampul album tertentu. Dibuat menggunakan **Python + FastAPI** untuk server aplikasi dan HTML/CSS/JavaScript vanilla untuk antarmuka.

## Fitur

- Tambah, edit, hapus, dan tandai tugas selesai.
- Catatan, kategori, tingkat prioritas, serta tanggal target.
- Filter Semua / Belum selesai / Tuntas, tampilan Hari ini dan Mendatang.
- Pencarian tugas dan pengurutan.
- Ringkasan progres, tema gelap/terang, dan mode fokus.
- Ekspor dan impor cadangan JSON.
- Desain responsif untuk desktop dan ponsel.
- Tidak ada login/logout dan tidak memerlukan API key.

## Penting tentang penyimpanan

Tugas disimpan di **localStorage browser yang sedang dipakai**. Tidak perlu akun, tetapi data tidak otomatis tersinkron ke browser/perangkat lain dan bisa hilang jika data situs dibersihkan. Gunakan menu **Ekspor cadangan** secara berkala. Ini sengaja menghindari penulisan ke filesystem Vercel yang bersifat sementara dan bukan database persisten.

## Struktur project

```text
paradoks-d-task/
├── app.py
├── requirements.txt
├── vercel.json
├── .python-version
├── .gitignore
├── .env.example
├── README.md
└── public/
    ├── index.html
    ├── style.css
    ├── app.js
    ├── favicon.svg
    └── manifest.webmanifest
```

Pastikan folder `public/` tetap berada di root project yang sama dengan `app.py` dan `vercel.json`. Jangan hanya mengunggah `app.py`.

## Jalankan di komputer melalui VS Code

Project kompatibel dengan Python 3.10.11 untuk pengembangan lokal. Vercel saat ini menyediakan runtime Python 3.12+; `.python-version` disetel ke `3.12` agar deployment memakai runtime yang tersedia.

1. Ekstrak ZIP, lalu di VS Code pilih **File → Open Folder** dan buka folder `paradoks-d-task` (folder yang berisi `app.py`).
2. Buka terminal di VS Code.
3. Buat virtual environment:

   **Windows PowerShell**
   ```powershell
   py -3.10 -m venv .venv
   .\.venv\Scripts\Activate.ps1
   python -m pip install --upgrade pip
   pip install -r requirements.txt
   uvicorn app:app --reload
   ```

   Jika PowerShell tidak mengenali `py -3.10`, gunakan `python -m venv .venv` dengan interpreter Python yang telah terpasang.

   **macOS / Linux**
   ```bash
   python3 -m venv .venv
   source .venv/bin/activate
   python -m pip install --upgrade pip
   pip install -r requirements.txt
   uvicorn app:app --reload
   ```

4. Buka `http://127.0.0.1:8000`. Pemeriksaan backend tersedia di `http://127.0.0.1:8000/api/health`; dokumentasi API ada di `http://127.0.0.1:8000/api/docs`.
5. Untuk berhenti, tekan `Ctrl+C` di terminal.

## Upload ke GitHub dari VS Code

1. Buat repository baru di GitHub. Untuk alur paling sederhana, buat repository kosong tanpa README, `.gitignore`, atau lisensi karena berkas itu sudah ada di project.
2. Di VS Code, pastikan yang dibuka adalah folder project, bukan folder `public` saja.
3. Pilih ikon **Source Control** di sidebar. Klik **Initialize Repository**.
4. Tinjau file yang terdeteksi. Pastikan `app.py`, `requirements.txt`, `vercel.json`, `.python-version`, `README.md`, dan seluruh folder `public/` muncul. Folder `.venv/` tidak perlu diunggah.
5. Masukkan pesan commit, misalnya `Initial commit - Paradoks D. Task`, lalu klik **Commit**.
6. Klik **Publish Branch** / **Publish to GitHub**, masuk ke akun GitHub bila diminta, lalu pilih repository yang dibuat di langkah pertama.

Alternatif lewat terminal di folder project:

```bash
git init
git add .
git commit -m "Initial commit - Paradoks D. Task"
git branch -M main
git remote add origin https://github.com/USERNAME/NAMA-REPOSITORY.git
git push -u origin main
```

Ganti URL contoh pada `git remote add origin` dengan URL repository milikmu. Jika sudah melakukan `Initialize Repository` dan publish melalui VS Code, tidak perlu menjalankan `git init` lagi.

## Deploy di Vercel dari repository GitHub

1. Masuk ke Vercel dan pilih **Add New → Project**.
2. Hubungkan akun GitHub jika diminta, lalu **Import** repository Paradoks D. Task.
3. Untuk **Root Directory**, pilih folder yang langsung berisi `app.py` dan `public/`. Jika file ada di root repository, biarkan root directory sebagai `./`.
4. Biarkan pengaturan Framework Preset / Build Command / Output Directory pada deteksi otomatis Vercel. FastAPI terdeteksi dari `app.py` dan `requirements.txt`.
5. Klik **Deploy** dan tunggu sampai status berhasil. Setiap `git push` berikutnya ke branch yang terhubung biasanya akan memicu deployment baru.
6. Buka URL deployment. Untuk memeriksa backend, buka `/api/health`, misalnya `https://nama-project.vercel.app/api/health`. Respons yang normal berisi `"status": "ok"` dan `"assets_available": true`.

### Mengapa ada `includeFiles` di vercel.json?

`vercel.json` menyertakan folder `public/**` pada bundle fungsi Python, karena FastAPI juga memiliki route cadangan untuk menyajikan berkas antarmuka. Ini mencegah fungsi bergantung pada direktori `public` yang tidak ikut terkemas. Folder `public/` tetap harus ada di repository dan Root Directory Vercel harus benar.

## Troubleshooting

### Error `FUNCTION_INVOCATION_FAILED` / `Directory '/var/task/public' does not exist`

- Pastikan `public/` berisi `index.html`, `style.css`, `app.js`, `favicon.svg`, dan `manifest.webmanifest` di GitHub.
- Pastikan `app.py` dan `public/` berada dalam root directory yang sama.
- Pastikan `vercel.json` di repository sama dengan file di project ini.
- Buka Vercel → **Settings → Build and Deployment → Root Directory**, lalu perbaiki jika menunjuk folder yang salah.
- Setelah memperbaiki berkas, commit dan push ke GitHub lalu lakukan redeploy.

### Halaman tampil tanpa styling / tombol tidak bekerja

Pastikan `style.css` dan `app.js` tersedia di folder `public/`, kemudian buka `/api/health`. Jika `assets_available` bernilai `false`, deployment belum menyertakan semua berkas. Coba redeploy setelah memeriksa Root Directory.

### Perubahan tugas tidak muncul di perangkat lain

Itu perilaku yang diharapkan dari versi local-first: daftar tersimpan di browser/perangkat yang sedang digunakan. Gunakan ekspor dan impor JSON untuk memindahkan salinan data. Untuk sinkronisasi banyak perangkat, aplikasi perlu dihubungkan ke database persisten eksternal.

## Endpoint

- `GET /` — aplikasi web.
- `GET /api/health` — status aplikasi dan pemeriksaan berkas.
- `GET /api/docs` — dokumentasi interaktif FastAPI.

## Lisensi

Kode awal ini dapat kamu modifikasi dan gunakan untuk project pribadi maupun pembelajaran.
