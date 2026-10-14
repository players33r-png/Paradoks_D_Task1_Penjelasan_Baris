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
