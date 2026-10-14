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
