# Jejak Kopi Jember — Scrollytelling Sejarah Perkebunan

Situs *scrollytelling* sejarah dua perkebunan kopi di Kabupaten Jember: **Perkebunan Kali Jompo** (Desa Klungkung, Kecamatan Sukorambi) dan **Perkebunan Sumber Tenggulun** (Desa Manggisan, Kecamatan Tanggul).

Proyek prototipe digital kolaborasi antara **Fakultas Ilmu Budaya (FIB)** dan **Fakultas Ilmu Komputer (Fasilkom)** Universitas Jember.

---

## 1. Arsitektur & Teknologi

- **Kerangka Kerja**: Astro (keluaran statis / *static site generation*), tanpa basis data, tanpa backend.
- **Tata Letak & Gaya**: Tailwind CSS dengan token warna bertema *Nature remix* & *Starbucks/Meridian Cafe*.
- **Koreografi Gerak**: GSAP + ScrollTrigger (linimasa horizontal *pinned scrub*, garis kontur SVG `stroke-dashoffset`).
- **Aksesibilitas**: WCAG 2.2 AA, kepatuhan `prefers-reduced-motion`, navigasi keyboard penuh pada popover referensi.
- **Peta Spasial**: Komponen `MapSlot` (slot placeholder ilustrasi kontur SVG skematis, siap untuk integrasi Maps3D/Three.js di fase rilis berikutnya).

---

## 2. Struktur Data Konten (`content/`)

Semua komponen tampilan bersifat murni merender data (*data-driven*). Tidak ada teks sejarah, referensi, atau atribusi gambar yang ditulis langsung di dalam komponen:

- `content/lokasi.json`: Profil dua perkebunan dan status verifikasi wilayah.
- `content/peristiwa.json`: Kronologi peristiwa historis dengan pemisahan tegas tahun 1884 dan 1890.
- `content/sumber.json`: Seluruh 6 referensi bibliografi akademis.
- `content/perbandingan.json`: Tabel komparasi aspek sejarah, komoditas, dan lahan kedua kebun.
- `content/media.json`: Slot metadata seluruh 15 gambar placeholder.
- `content/narasi/*.md`: Naskah editorial Bab 2 (Kali Jompo), Bab 3 (Sumber Tenggulun), dan Bab 6 (Kehidupan Sosial).
- `content/proyek.json`: Metadata pengantar dan kredit kolaborasi FIB × Fasilkom.

---

## 3. Daftar Inventaris Placeholder yang Perlu Dilengkapi oleh Tim FIB

Sesuai dengan ketentuan PRD Bagian 4, 6, dan 8, seluruh data yang belum tersedia pada naskah kurasi awal diberi tanda penahan `[ISI DARI FIB]`. Berikut daftar lengkap yang perlu diisi sebelum situs diluncurkan secara publik:

### A. Teks & Data Historis yang Perlu Dilengkapi (`content/`)

| Berkas / Bab | Parameter / Butir | Deskripsi Kebutuhan Data | Status Saat Ini |
| :--- | :--- | :--- | :--- |
| `content/sumber.json` | Nomor Halaman Sumber | Nomor halaman spesifik kutipan untuk `izzah-2020`, `fitriyah-2025`, `linda-hgu`, `sukron-perkebunan`, dan `sel-1994`. | `[ISI DARI FIB]` |
| `content/sumber.json` | Tahun Riset HGU | Tahun publikasi/penyusunan definitif untuk dokumen riset Linda dan Sukron. | `[ISI DARI FIB]` |
| `content/narasi/bab2-kali-jompo.md` | Dokumentasi Fasilitas | Informasi fasilitas dan pabrik pengolahan lama Kali Jompo jika arsipnya tersedia. | `[ISI DARI FIB]` |
| `content/narasi/bab3-sumber-tenggulun.md` | Riwayat Pengelolaan | Sejarah awal perkebunan dan riwayat penguasaan lahan berdasarkan dokumen HGU. | `[ISI DARI FIB]` |
| `content/narasi/bab3-sumber-tenggulun.md` | Komoditas Kakao | Verifikasi apakah komoditas kakao tercatat resmi dalam dokumen primer HGU Sumber Tenggulun. | `[ISI DARI FIB]` |
| `content/narasi/bab3-sumber-tenggulun.md` | Luas & Produksi | Pemisahan angka luas kebun total vs kebun kopi, serta deret produksi tahunan dengan satuan metrik. | `[ISI DARI FIB]` |
| `content/narasi/bab6-kehidupan-sosial.md` | Narasi Hubungan Kerja | Rincian sistem pengupahan dan relasi buruh tetap / harian lepas. | `[ISI DARI FIB]` |
| `content/narasi/bab6-kehidupan-sosial.md` | Kutipan Wawancara | Kutipan autentik hasil wawancara sejarah lisan bersama buruh atau petani lereng. | `[Kutipan menyusul dari FIB]` |
| `content/perbandingan.json` | Luas Kebun Kopi Riil | Rincian luas hektare khusus tanaman kopi untuk Kali Jompo dan Sumber Tenggulun. | `[ISI DARI FIB]` |
| `content/perbandingan.json` | Data Deret Waktu Produksi | Angka produksi kopi tahunan untuk kedua kebun. | `[Data belum tersedia]` |
| `content/lokasi.json` | Koordinat GPS | Titik koordinat resmi kedua perkebunan untuk peta 3D definitif masa depan. | `null` (posisi skematis) |

---

### B. Gambar Placeholder yang Perlu Diberikan Berkas Fotonya (`content/media.json`)

Seluruh berkas gambar asli nantinya ditaruh pada direktori `public/media/` dan didaftarkan pada `content/media.json` tanpa perlu mengubah kode komponen.

| ID Slot Media | Bab | Rasio Aspek | Subjek Foto / Dokumen yang Dibutuhkan | Sumber & Hak Cipta yang Diperlukan |
| :--- | :---: | :---: | :--- | :--- |
| `hero-lereng` | 0 | 16:9 | Lanskap lereng Gunung Hyang Argopuro atau hamparan kebun kopi saat pagi berkabut. | Dokumentasi tim FIB/Fasilkom / Izin tertulis |
| `kj-kebun` | 2 | 4:3 | Bentang alam kebun kopi dan tegakan pohon karet Kali Jompo di Desa Klungkung. | Dokumentasi tim FIB / Izin pengelola kebun |
| `kj-bangunan` | 2 | 3:2 | Kantor administrasi atau peninggalan fasilitas perkebunan Kali Jompo. | Foto lapangan berizin |
| `kj-arsip` | 2 | 4:5 | Reproduksi digital dokumen atau peta lama terkait hak *erfpacht* 1884. | Arsip berizin resmi |
| `kj-pengolahan` | 2 | 3:2 | Pengolahan basah atau penjemuran kopi rakyat di Desa Klungkung. | Dokumentasi tim FIB |
| `st-kebun` | 3 | 4:3 | Lanskap perkebunan Sumber Tenggulun di Desa Manggisan, Tanggul. | Foto lapangan berizin |
| `st-fasilitas` | 3 | 3:2 | Fasilitas pengolahan atau kantor afdeling kebun Sumber Tenggulun. | Foto lapangan berizin |
| `st-dokumen` | 3 | 4:5 | Salinan berkas keputusan HGU atau laporan teknis terkait Sumber Tenggulun. | Dokumen resmi berizin publikasi |
| `sosial-buruh` | 6 | 3:2 | Aktivitas harian buruh kebun petik kopi. | Dokumentasi tim FIB (dengan persetujuan) |
| `sosial-petani` | 6 | 4:5 | Potret petani kopi rakyat Desa Klungkung. | Persetujuan tertulis (*model release*) |
| `sosial-wawancara` | 6 | 3:2 | Suasana wawancara tim peneliti FIB bersama narasumber/informan lokal. | Dokumentasi riset lapangan |
| `galeri-01` | 7 | 4:3 | Peta historis pembagian perkebunan kolonial Jember / Karesidenan Besuki. | Arsip berizin |
| `galeri-02` | 7 | 16:9 | Panorama perkebunan lereng Argopuro dari ketinggian. | Dokumentasi tim FIB |
| `galeri-03` | 7 | 3:2 | Pekerja saat merawat tanaman kopi di bawah naungan pohon pelindung. | Dokumentasi tim FIB |
| `galeri-04` | 7 | 1:1 | Dokumen register atau cap perusahaan Kalie Djompo Cultuur 1890. | Arsip berizin |
| `galeri-05` | 7 | 4:5 | Salinan lembar penetapan hak *erfpacht* 29 September 1884. | Arsip berizin |
| `galeri-06` | 7 | 3:2 | Struktur fondasi tua atau saluran air peninggalan instalasi perkebunan lama. | Foto lapangan berizin |
| `galeri-07` | 7 | 4:3 | Biji kopi merah petik matang hasil panen rakyat Klungkung. | Dokumentasi tim FIB |
| `galeri-08` | 7 | 3:2 | Akses jalan setapak atau jalur transportasi kebun Sumber Tenggulun Tanggul. | Foto lapangan berizin |
| `galeri-09` | 7 | 4:5 | Wawancara lisan dengan tokoh sesepuh buruh perkebunan. | Dokumentasi tim FIB |
| `galeri-10` | 7 | 16:9 | Pemandangan batas kebun Sumber Tenggulun dengan lahan garapan masyarakat. | Foto lapangan berizin |
| `galeri-11` | 7 | 1:1 | Peralatan sortasi atau tampah pemilah biji kopi tradisional lereng. | Dokumentasi tim FIB |
| `galeri-12` | 7 | 3:2 | Tim peneliti gabungan FIB saat melakukan penelusuran arsip lapangan. | Dokumentasi tim peneliti |

---

## 4. Status Fase Pekerjaan

- [x] **Fase 0 (Brief & Kurasi Data)**: Pemindahan seluruh materi Lampiran A ke `content/*.json` dan `content/narasi/*.md`.
- [x] **Fase 1 (Konsep Kreatif)**: Eksplorasi 3 wilayah konsep dan penetapan motif "Garis Kontur Elevasi Argopuro".
- [x] **Fase 2 (Sistem Desain)**: Penulisan `DESIGN.md` (tipografi, palet warna beruji AA, bahasa gerak GSAP, wireframe bab 0–8).
- [x] **Fase 3 (Build / Implementasi Tampilan)**: Kode scrollytelling selesai dibangun (Astro statis, Tailwind CSS, GSAP ScrollTrigger, linimasa horizontal dua jalur, popover referensi aksesibel, slot peta kontur skematis, dan 15 slot media placeholder).
- [ ] **Fase 4 (Penyempurnaan Isi & Berkas Asli FIB)**: Menunggu pengisian nomor halaman, konfirmasi HGU, kutipan wawancara buruh, dan berkas foto asli oleh tim kurasi FIB UNEJ.

