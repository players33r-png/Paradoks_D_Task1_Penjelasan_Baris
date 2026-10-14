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
