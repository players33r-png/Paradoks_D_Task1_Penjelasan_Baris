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
