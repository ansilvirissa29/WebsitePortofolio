# 🚀 Portofolio Pribadi Rahmat Ferdiansyah, S.T.
### *Computer Engineer | Data Analyst | Software Developer | Graphic Designer*

Selamat datang di repositori kode website portofolio profesional untuk **Rahmat Ferdiansyah**. Website ini dirancang dengan standar **Senior Frontend Developer & UI/UX Designer**: clean, bold, minimalist, interaktif, dan 100% responsif di seluruh perangkat (Desktop, Tablet, dan Smartphone).

---

## 🎨 Design System & UI/UX

- **Gaya Desain:** Clean, Bold, Minimalist dengan elemen grafis modern (subtle grid patterns, translucent SVG blobs, floating geometry).
- **Palet Warna:**
  - **Background Utama:** Off-white / Clean Light (`#f8fafc` & `#ffffff`)
  - **Teks Utama:** Dark Charcoal / Slate (`#0f172a` & `#334155`)
  - **Warna Aksen 1 (Primary):** Biru Royal (`#3555c8`) — tombol utama, active borders, headers, badges.
  - **Warna Aksen 2 (Secondary):** Merah Vibrant (`#ff3131`) — efek hover, notifikasi, cursor typing, highlights.
- **Efek & Fitur Interaktif:**
  - **Horizontal Carousel Slides (Mobile-Optimized):** Bagian *Organizational & Leadership*, *Portfolio Projects*, dan *Licenses & Certifications* menggunakan layout slide carousel horizontal dengan tombol navigasi Prev/Next dan *native touch-swiping* (`snap-x snap-mandatory`) yang menghemat ruang scroll vertikal di perangkat mobile lebih dari 60%.
  - **Immersive Photo Cards (Work Experience):** Kartu pengalaman kerja menampilkan foto asli kegiatan resolusi tinggi sebagai latar belakang dinamis (*activity background photos*) dengan gradien kontras tinggi dan tipografi tebal yang elegan.
  - **Dark Mode Switcher:** Toggle tema gelap/terang modern dengan persistensi `localStorage`, deteksi preferensi OS (*system preference*), dan anti-FOUC script.
  - **Scroll Reveal:** Elemen muncul secara elegan (*fade-in-up*) saat di-scroll menggunakan `IntersectionObserver`.
  - **Typing Effect:** Efek animasi mengetik otomatis pada Hero Section yang merotasi spesialisasi keahlian: **Data Analyst**, **Software Developer**, dan **Graphic Design**.
  - **Interactive Hover:** Project card terangkat halus (*lift & glow*), highlight border dan zoom gambar.
  - **Interactive Certification Pop-up Modal:** Pop-up preview dokumen sertifikat resolusi tinggi yang bersih tanpa tombol footer berlebih.
  - **Lightbox Modal Galeri:** Pratinjau gambar dokumentasi pengalaman kerja ukuran penuh saat diklik.
  - **Minimalist Footer:** Tampilan footer ringkas mencakup Lokasi Jakarta Timur, WhatsApp, Email, LinkedIn, dan Instagram.

---

## 📁 Struktur Folder & File

```text
d:\Karir\Bismillah before 2026/
├── index.html                        # Halaman utama portofolio (Single Page Scroll + Dark Mode)
├── detail-experience.html            # Halaman detail dinamis untuk pengalaman kerja & galeri
├── assets/
│   ├── CV_Rahmat Ferdiansyah.pdf     # File cadangan CV lokal
│   ├── css/
│   │   └── style.css                 # Custom CSS, dark mode variables, keyframes & scroll reveal
│   ├── js/
│   │   ├── main.js                   # Dark mode toggle, typing effect, scrollspy, modal sertifikat
│   │   └── experience.js             # Data store, dynamic CSS grid gallery & URL switcher
│   └── images/
│       ├── hero.jpg                  # Foto asli Rahmat Ferdiansyah untuk Hero Section
│       ├── RCA.jpg                   # Foto kegiatan: Ketua Divisi Publikasi & Dokumentasi RCA FT
│       ├── AICONNECT.jpg             # Foto kegiatan: TELKOM AI Connect Aceh
│       ├── BPVP.jpg                  # Foto kegiatan: Peserta PBL BPVP Aceh
│       ├── Himatekkom.jpg            # Foto kegiatan: Kepala Divisi Minat & Bakat HIMATEKKOM
│       ├── Bangkit.png               # Foto/Logo: Mobile Development Cohort Bangkit
│       ├── PMM.jpeg                  # Foto kegiatan: Pertukaran Mahasiswa Merdeka (PMM)
│       ├── MagangBps.jpeg            # Foto dokumentasi: IT Internship BPS Aceh
│       ├── MagangMutsu.jpg           # Foto dokumentasi: Social Media Internship Museum Tsunami
│       ├── certif1.jpg               # Sertifikat: Bangkit Academy (Google, GoTo, Traveloka)
│       ├── certif2.jpg               # Sertifikat: BNSP Pemasaran Media Sosial
│       ├── certif3.jpg               # Sertifikat: Google Data Analytics Professional
│       ├── certif4.jpg               # Sertifikat: Microsoft Data Analyst with Excel
│       ├── certif5.jpg               # Sertifikat: Pertukaran Mahasiswa Merdeka (PMM)
│       ├── certif6.jpg               # Sertifikat: Digitalent Intermediate Data Science (Kominfo)
│       ├── certif7.jpg               # Sertifikat: TOEFL ITP Score: 497 (ETS / ILP Cikini)
│       ├── project-ar-hijab.svg      # Grafis ilustrasi proyek AR Hijab Try On
│       ├── project-chatbot.svg       # Grafis ilustrasi proyek Chatbot BPS
│       ├── project-tradenet.svg      # Grafis ilustrasi proyek TradeNet Bangkit
│       └── project-bloodplus.svg     # Grafis ilustrasi proyek BloodPlus
└── README.md                         # Dokumentasi lengkap panduan penggunaan
```

---

## 📜 Pemetaan Sertifikat & Fitur Pop-Up

Setiap kartu sertifikat di bagian **Licenses & Certifications** dilengkapi thumbnail pratinjau dan tombol **View Certification**. Ketika diklik, modal pop-up akan terbuka menampilkan gambar sertifikat ukuran penuh dengan kontrol *Tutup*, *Buka di Tab Baru*, dan *Tautan Google Drive*.

| File Gambar | Sertifikat / Lisensi | Penerbit | Tahun |
| :--- | :--- | :--- | :---: |
| `certif3.jpg` | **Google Data Analytics Professional Certificate** | Google | 2026 |
| `certif4.jpg` | **Microsoft Data Analyst with Excel** | Microsoft | 2026 |
| `certif7.jpg` | **TOEFL ITP Official Score Report: 497** | ETS / ILP Cikini | 2026 |
| `certif2.jpg` | **Optimalisasi Pemasaran Melalui Media Sosial** | BNSP | 2025 |
| `certif6.jpg` | **Digitalent Intermediate Data Science** | Kementerian Kominfo | 2025 |
| `certif1.jpg` | **Mobile Development Cohort Certification** | Bangkit Academy | 2023 |
| `certif5.jpg` | **Program Pertukaran Mahasiswa Merdeka (PMM)** | Kemendikbudristek / UGM & Pamulang | 2021 |

---

## 📑 Halaman & Fitur Utama

### 1. `index.html` (Halaman Utama)
1. **Sticky Navbar:** Navigasi cepat (About, Skills, Experience, Organization, Projects, Certifications, Contact) + Mobile Hamburger Menu yang halus.
2. **Hero Section:**
   - Menampilkan foto asli Anda [`assets/images/hero.jpg`](file:///d:/Karir/Bismillah%20before%202026/assets/images/hero.jpg) dengan bingkai geometris rapi tanpa badge statistik.
   - Typing effect bergantian hanya 3 spesialisasi: **Data Analyst**, **Software Developer**, dan **Graphic Design**.
   - Tombol CTA: **Download CV** (langsung mengunduh file PDF asli [`assets/CV_Rahmat Ferdiansyah.pdf`](file:///d:/Karir/Bismillah%20before%202026/assets/CV_Rahmat%20Ferdiansyah.pdf)) dan **Contact Me**.
3. **Professional Summary:** Teks lengkap terstruktur rapi dengan kartu data diri (Universitas Syiah Kuala tanpa embel-embel IPK, fokus area: *Data and Software Developer*).
4. **Competency Matrix (Skills):** Chips/tags interaktif untuk 4 pilar (*Data Analytics & Data Science*, *Analysis Tools*, *Software Development*, *Creative & Visual Media*).
5. **Interactive Work Experience Timeline:** Format Vertical Timeline modern dengan 4 pengalaman kerja:
   - *UPTD Museum Tsunami Aceh* (Social Media Specialist Internship, Okt – Nov 2025)
   - *Dindinshop* (Warehouse Staff & Stock Controller, Agt 2024 – Agt 2025)
   - *Dindinshop* (Graphic Designer, Feb 2022 – Jul 2024)
   - *Badan Pusat Statistik (BPS) Aceh* (IT Internship, Mar 2023 – Apr 2023)  
   *Setiap kartu mengarahkan ke halaman detail dan galeri adaptif.*
6. **Organizational & Leadership Experience:** Grid kartu visual dengan foto kegiatan asli (TELKOM AI Connect, BPVP Aceh, HIMATEKKOM, Bangkit Academy, Reuni FT, PMM) tanpa icon tambahan.
7. **Featured Projects:** Card Grid dengan tag teknologi, ringkasan inovasi, dan tautan dokumentasi (*AR Hijab*, *Telegram Chatbot*, *TradeNet*, *BloodPlus*).
8. **Verified Certifications:** Card Grid 7 sertifikat lengkap dengan thumbnail dan pop-up modal resolusi tinggi.
9. **Footer & Contact:** Akses langsung WhatsApp (`087796037024`), Email (`rahmat29ferdiansyah@gmail.com`), form pesan interaktif, dan social links.

---

### 2. `detail-experience.html` (Template Halaman Detail Dinamis)
- **Tombol "Back to Home":** Mengarahkan kembali ke bagian `#experience` pada halaman beranda.
- **Header:** Peran, Nama Perusahaan, Periode, Lokasi, Kategori, dan Ringkasan Eksekutif.
- **Job Description:** Poin-poin tugas kerja terperinci dengan ikon checkmark profesional.
- **Key Measurable Highlights:** Kartu metrik pencapaian.
- **Dynamic CSS Grid Gallery:** Otomatis menyesuaikan layout (1 foto hero besar atau 3 foto editorial magazine) dengan Lightbox resolusi tinggi.
- **Experience Switcher:** Pengunjung dapat langsung berpindah antar 4 pengalaman kerja (Dindinshop Warehouse, Museum Tsunami, Dindinshop Graphic, BPS Aceh) melalui tab switcher.

---

## 💻 Cara Menjalankan & Menguji Secara Lokal

1. **Buka Langsung di Browser:**
   - Cukup klik ganda (double-click) pada file `index.html` di File Explorer, atau
   - Klik kanan `index.html` > pilih **Open with Google Chrome / Microsoft Edge**.
