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
