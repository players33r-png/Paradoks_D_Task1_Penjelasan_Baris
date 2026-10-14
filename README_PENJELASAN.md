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
