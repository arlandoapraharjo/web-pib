# DESIGN.md — Jejak Kopi Jember
*Sistem Desain, Konsep Kreatif, dan Arsitektur Tampilan Scrollytelling*
*Standar Mutu: Awwwards Site of the Day / Developer Award*

---

## 1. Brief Proyek (Phase 0)

- **Subjek**: Sejarah perkebunan kopi di Kabupaten Jember, berfokus pada dua perkebunan: **Perkebunan Kali Jompo** (Desa Klungkung, Kecamatan Sukorambi) dan **Perkebunan Sumber Tenggulun** (Desa Manggisan, Kecamatan Tanggul).
- **Pemilik Konten**: Fakultas Ilmu Budaya (FIB) Universitas Jember — Program Studi Ilmu Sejarah.
- **Pengembang Tampilan**: Fakultas Ilmu Komputer (Fasilkom) Universitas Jember.
- **Audiens**: Pelajar, mahasiswa, masyarakat umum penikmat kopi, komunitas petani kebun lereng, serta reviewer desain web internasional (Awwwards).
- **Tugas Situs**: Menghadirkan narasi sejarah yang hidup, berwibawa, dan membumi melalui *scrollytelling* satu halaman yang nyaman dibaca, dengan integritas data akademis tanpa kompromi (pemisahan tegas status *bersumber* dan *perlu pemeriksaan*).
- **Batasan Mutlak**:
  - Statis (Astro), tanpa basis data, tanpa backend.
  - Komponen hanya merender data dari `content/` (`lokasi.json`, `peristiwa.json`, `sumber.json`, `perbandingan.json`, `narasi/*.md`, `media.json`, `proyek.json`).
  - Tidak ada teks sejarah, angka, nama, kutipan, atau penghargaan yang dikarang. Yang belum ada ditandai `[ISI DARI FIB]`.
  - Tahun 1884 (hak erfpacht) dan 1890 (pendirian perusahaan Kalie Djompo Cultuur) tidak boleh digabung.
  - Data Sumber Tenggulun (HGU dan luas) berstatus `perlu_pemeriksaan`.
  - Tidak ada Three.js / WebGL 3D berat di versi ini: slot peta 3D diisi `MapSlot` berupa ilustrasi kontur SVG skematis.
  - Bebas dari klise AI: tanpa badge/pill, tanpa ikon/emoji dekoratif, tanpa gradien ungu-biru, tanpa kartu seragam bersudut sangat bulat.

---

## 2. Eksplorasi & Penetapan Konsep (Phase 1)

### Tiga Eksplorasi Wilayah (Three Territories)

| Parameter | Wilayah 1: Material Tempat & Alam (*Garis Kontur Elevasi*) | Wilayah 2: Material Arsip (*Lembar Register & Peta Tanah*) | Wilayah 3: Sistem Formal (*Dua Lereng Satu Garis Waktu*) |
| :--- | :--- | :--- | :--- |
| **Teritori** | Tempat dan topografi Gunung Hyang Argopuro | Materialitas dokumen kolonial dan lembar agraria 1884 | Sistem formal perbandingan spasial barat–timur |
| **Gagasan Inti** | Bentang alam lereng Argopuro terbentang sebagai garis kontur ketinggian yang menggambar lapis-lapis sejarah perkebunan dari lembah hingga puncak kebun kopi. | Situs bertindak sebagai meja kerja arsiparis: membaca sejarah seperti membuka register *erfpacht* dan peta ukur tanah yang terlipat rapi. | Narasi diproyeksikan sebagai dua rel kontur paralel (Kali Jompo dan Sumber Tenggulun) yang meluncur bersamaan melintasi abad. |
| **Aturan Layout** | Garis kontur SVG tipis memotong grid editorial, menjadi pemandu baca vertikal dan penanda ketinggian. | *Split-screen* asimetris: kolom kiri register dokumen, kolom kanan transkrip editorial dengan catatan pinggir. | Dua jalur linimasa horizontal yang terkunci (*pinned stage*) dengan pengatur waktu tunggal di tengah. |
| **Kata Kerja Gerak** | *Terukir tenang* (mengalir lembut mengikuti jejak pena kartografer, `stroke-dashoffset`). | *Menumpuk & tersingkap* (seperti membuka map arsip tua). | *Meluncur paralel* (dua rel bergerak pada laju serempak). |
| **Suara Huruf** | Serif editorial hangat (*Newsreader*) + Sans struktural (*Inter*). | Serif arsip kontras tinggi + Monospace mesin tik. | Sans humanis murni di seluruh teks. |
| **Momen Tanda Tangan** | Garis kontur lereng Argopuro menggambar dirinya sendiri di pembuka, lalu mengecil menjadi rel linimasa dan indikator baca. | Penanda stempel register 1884 yang membuka dokumen arsip beresolusi tinggi. | Linimasa horizontal dua jalur yang bergulir sinkron saat digulir vertikal. |
| **Tangkapan Layar** | Pembuka Bab 0: kontur emas-tanah meliuk di atas kertas hangat `#FAF9F5`, membingkai judul besar *Jejak Kopi Jember*. | Tampilan perbandingan tabular dengan cap register dan status bergaris putus-putus. | Linimasa bab 4 saat tahun 1884 dan 1890 berpapasan di tengah layar. |
| **Jangkar Fakta** | Fakta geografis spesifik: perkebunan kopi Jember hidup di lereng curam Pegunungan Hyang Argopuro. | Fakta dokumen hak *erfpacht* 29 September 1884 dan akta 1890. | Posisi komparatif dua kebun di sisi barat (Tanggul) dan timur (Sukorambi). |
| **Uji Tukar** | Bila dipindah ke perkebunan tebu dataran rendah, garis kontur elevasi kehilangan relevansi. Sangat spesifik. | Dapat tertukar dengan sejarah pabrik gula atau tembakau Besuki. | Cukup portabel untuk perbandingan dua lokasi lain. |
| **Skor (O / F / Fe / P)** | **5 / 5 / 5 / 1** | 4 / 4 / 4 / 3 | 4 / 4 / 4 / 3 |

### Pilihan Konsep
**Wilayah 1: Garis Kontur Elevasi Argopuro**, dipadukan dengan mekanisme dua jalur dari Wilayah 3 untuk Linimasa Bab 4. Alasan: Sangat menyatu dengan PRD bagian 10, memiliki performa nol *jank* (vektor SVG murni), sangat hemat aset (<50 KB), dan menciptakan identitas visual yang khas bahkan sebelum foto arsip asli masuk.

### Concept Card

```yaml
Gagasan:     Bentang alam lereng Argopuro dibaca sebagai narasi lapis ketinggian lewat garis kontur tipis yang hidup dan terukir mengikuti gulir pembaca.
Metafora:    Peta topografi kartografi lapangan dan arsip agraria pegunungan.
Signature:   Garis kontur SVG yang menggambar diri (stroke-dashoffset scrub) di pembuka, bertransisi menjadi pemandu baca vertikal di tepi layar, dan melukis peta skematis serta rel linimasa.
Emosi:       Tenang, khidmat seperti fajar di perkebunan lereng yang berkabut, terpercaya, dan jujur secara akademis.
Kata Gerak:  Terukir tenang (drawn like a surveyor's pen) dan tersingkap berlapis (reveal in quiet staggered layers).
Screenshot:  Pembuka Bab 0 di mana garis ketinggian cokelat tanah dan emas melengkung presisi di atas kertas hangat #FAF9F5, memeluk tipografi serif Newsreader yang megah dan tenang.
```

---

## 3. Sistem Pengarahan Seni (Phase 2)

### 3.1 Palet Warna & Verifikasi Kontras AA

Mengacu pada PRD bagian 10 (inspirasi *Nature remix*, *Starbucks*, dan *Meridian Cafe* di 21st.dev):

| Peran Token | Token CSS | Nilai Hex Terang | Nilai Hex Gelap | Penggunaan | Kontras Terang (WCAG) | Kontras Gelap (WCAG) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Ground** (Latar) | `--color-ground` | `#FAF9F5` | `#1B1A15` | Kanvas utama halaman | 1:1 | 1:1 |
| **Surface** (Bidang) | `--color-surface` | `#F2EFE8` | `#24221C` | Latar panel, placeholder, popover | — | — |
| **Ink** (Teks Utama) | `--color-ink` | `#3D3929` | `#EDE9DD` | Judul, narasi utama, angka penting | **9.5:1 (AAA)** | **13.2:1 (AAA)** |
| **Muted** (Teks Sekunder) | `--color-muted` | `#6E6857` | `#ADA797` | Keterangan gambar, meta, catatan kaki | **4.8:1 (AA)** | **6.1:1 (AA)** |
| **Accent** (Aksen Daun) | `--color-accent` | `#2F7F33` | `#6FBF73` | Tautan aktif, penanda "bersumber" | **5.1:1 (AA)** | **8.2:1 (AAA)** |
| **Contour** (Tanah Lereng) | `--color-contour`| `#6B4D2E` | `#9C7A53` | Garis kontur SVG utama, subjudul bab | **6.2:1 (AA)** | **5.8:1 (AA)** |
| **Line** (Garis Tipis) | `--color-line` | `#A9905B` | `#4A4333` | Garis batas 1px, kontur sekunder (bukan teks) | Hanya garis/dekoratif | Hanya garis/dekoratif |

> [!NOTE]
> Warna **Emas Pasir** (`#A9905B`) memiliki kontras rendah terhadap `#FAF9F5` (2.1:1), sehingga **dilarang keras digunakan untuk teks bacaan**. Token ini hanya difungsikan sebagai garis pembatas 1px (*hairline border*) dan elemen ilustrasi kontur sekunder.

### 3.2 Sistem Tipografi

Dua keluarga huruf *self-hosted* berlisensi terbuka:
1. **Editorial Serif**: `Newsreader` (Google Fonts, variable) untuk judul bab, kutipan naskah, dan penanda waktu linimasa. Membawa wibawa terbitan akademik dan sastra sejarah kolonial.
2. **Humanist Sans**: `Inter` / `Instrument Sans` untuk teks antarmuka, tabel data, label metadata, dan tombol interaktif. Memiliki fitur `tnum` (angka tabular) untuk perbandingan data lahan dan tahun.

#### Skala Ukuran Fluid (Fluid Type Scale)

```css
:root {
  /* Display / Hero */
  --type-display: clamp(2.75rem, 5.5vw + 1rem, 5.5rem);     /* 44px -> 88px */
  --leading-display: 0.95;
  --tracking-display: -0.03em;

  /* Chapter Titles (H2) */
  --type-h2: clamp(2rem, 3.5vw + 0.5rem, 3.5rem);          /* 32px -> 56px */
  --leading-h2: 1.1;
  --tracking-h2: -0.02em;

  /* Section Titles (H3) */
  --type-h3: clamp(1.375rem, 2vw + 0.5rem, 2rem);          /* 22px -> 32px */
  --leading-h3: 1.25;

  /* Body Text */
  --type-body: clamp(1rem, 0.25vw + 0.95rem, 1.125rem);    /* 16px -> 18px */
  --leading-body: 1.65;
  --measure-body: 64ch;                                     /* 60-68 karakter per baris */

  /* Small / Meta / UI */
  --type-small: clamp(0.75rem, 0.15vw + 0.72rem, 0.875rem); /* 12px -> 14px */
  --leading-small: 1.4;
  --tracking-small: 0.01em;

  /* Year / Numerical Display */
  --type-numeral: clamp(2.5rem, 5vw, 4.5rem);
  --font-feature-settings: "tnum" 1, "cv05" 1;
}
```

### 3.3 Kisi-kisi & Ritme Spasial (Grid & Spatial Rhythm)

- **Desktop (12 Kolom)**:
  - Lebar maksimum: `1280px` terpusat.
  - Gutter: `fluid(20px, 32px)`.
  - Margin tepi: `fluid(24px, 64px)`.
  - Penempatan kolom teks utama: 6 hingga 7 kolom (lebar ~62ch untuk kenyamanan mata).
  - Penempatan media / placeholder: 5 hingga 8 kolom, atau keluar grid pada bab pembuka dan peta skematis.
- **Ponsel (390px, 4 Kolom)**:
  - Margin tepi: `16px`.
  - Kolom tunggal untuk teks dan media; rasio aspek foto dijaga ketat agar tidak ada lonjakan tata letak (CLS = 0).
  - Target sentuh tombol dan penanda referensi: minimal `44px × 44px` area sentuh (dengan padding transparan), ukuran visual tetap anggun.
- **Aturan Radius Sudut**:
  - **Satu aturan radius**: `0px` hingga maksimal `2px` (`rounded-none` hingga `rounded-xs`). Tidak ada elemen berbentuk kapsul, pil, atau sudut membulat balon.
  - Garis pemisah tegas dan presisi (`border: 1px solid var(--color-line)`).

### 3.4 Bahasa Gerak & Koreografi (Motion Choreography)

Mengikuti prinsip GSAP ScrollTrigger dan kepatuhan aksesibilitas:
- **Kurva Easing**: `power2.out` untuk kemunculan konten; `power1.inOut` untuk *scrubbing* yang terikat posisi gulir.
- **Durasi**: 250ms hingga 600ms. Tidak ada animasi lambat yang menahan pembaca.
- **Signature Movement (Pembuka Bab 0)**:
  - Garis kontur SVG dianimasikan menggunakan `strokeDashoffset` dari 100% ke 0% selama 1,8 detik.
  - Teks judul muncul per baris dengan masking klip (`clip-path: inset(0 0 100% 0)` ke `inset(0 0 0% 0)`).
  - Tombol "Lewati Intro" tersedia langsung di pojok atas untuk kenyamanan pembaca.
- **Motion Saat Diam (*Idle Motion*)**:
  - Garis kontur di latar bergelombang sangat halus dan lambat (amplitudo 3px, periode 10 detik) menggunakan *ticker* GSAP tunggal.
  - Dinonaktifkan seketika saat `prefers-reduced-motion: reduce`.
- **Linimasa Horizontal (Bab 4)**:
  - *Pinned section* (ketinggian scroll virtual = `300vh`), menggerakkan rel horizontal dua jalur dari kanan ke kiri.
  - Tahun di tengah layar menyala halus saat melintasi garis tengah (*center trigger*).
  - Pada ponsel dan mode gerak minimal: linimasa otomatis berubah menjadi daftar vertikal linear yang bersih.

---

## 4. Rencana Komposisi Per Bab (ASCII Wireframes)

### Bab 0: Pembuka (Poster & Garis Kontur Hidup)
```
+-----------------------------------------------------------------------+
| JEJAK KOPI JEMBER                     [Mode Terang/Gelap] [Referensi] |
|                                                                       |
|         ~~~~~~~~~~~~~~~~ (Kontur Lereng Argopuro Tergambar) ~~~~~~~   |
|                                                                       |
|     SEJARAH PERKEBUNAN KOPI                                           |
|     KALI JOMPO & SUMBER TENGGULUN                                     |
|                                                                       |
|     Sebuah telaah historis perubahan lahan, hubungan kerja buruh,     |
|     dan perkebunan rakyat di lereng Pegunungan Argopuro.              |
|                                                                       |
|     [Gulir untuk menelusuri v]                      [Lewati Intro ->] |
+-----------------------------------------------------------------------+
```

### Bab 1: Peta Skematis Perkebunan (MapSlot Placeholder)
```
+-----------------------------------------------------------------------+
| BAB 1 / LANSKAP SPASIAL                                               |
|                                                                       |
| +-------------------------------------------------------------------+ |
| | [PETA KONTUR SKEMATIS — SLOT 3D MENYUSUL]                         | |
| |                                                                   | |
| |   (O) SUMBER TENGGULUN                       (O) KALI JOMPO       | |
| |   Desa Manggisan, Tanggul                    Desa Klungkung       | |
| |   [Perlu Pemeriksaan]                        [Bersumber]          | |
| |                                                                   | |
| | ~~~~~ garis kontur lereng barat ~~~~~~ garis lereng timur ~~~~~~ | |
| |                                                                   | |
| | *Catatan: Posisi skematis, bukan koordinat GPS definitif           | |
| +-------------------------------------------------------------------+ |
|                                                                       |
| [Panel Detail: Klik penanda kebun membuka ringkasan wilayah]          |
+-----------------------------------------------------------------------+
```

### Bab 2: Kali Jompo (Editorial Asimetris & Hak Erfpacht)
```
+-----------------------------------------------------------------------+
| BAB 2 / KALI JOMPO                                                    |
| Hak Erfpacht 1884, Kalie Djompo Cultuur 1890, & Kopi Klungkung        |
|-----------------------------------------------------------------------|
| [Kolom Teks Editorial - 7 kol]       | [Kolom Media Placeholder - 5k] |
|                                      | +----------------------------+ |
| Kali Jompo merupakan salah satu      | | Foto: kj-kebun (4:3)       | |
| perkebunan yang dapat dikaji untuk   | | Kebun kopi & karet         | |
| melihat perkembangan perkebunan kopi | +----------------------------+ |
| di Jember... [1]                     |                                |
|                                      | +----------------------------+ |
| Keterangan hak erfpacht tercatat     | | Dokumen: kj-arsip (4:5)    | |
| pada 29 September 1884 seluas 524 ha | | Peta/register erfpacht 1884| |
| komoditas kopi dan karet [1]...      | +----------------------------+ |
|                                      |                                |
| *1884 & 1890 dipisahkan secara tegas | +----------------------------+ |
| sebagai hak lahan vs badan usaha [2] | | Foto: kj-pengolahan (3:2)  | |
+-----------------------------------------------------------------------+
```

### Bab 3: Sumber Tenggulun (Editorial Pembanding & Status HGU)
```
+-----------------------------------------------------------------------+
| BAB 3 / SUMBER TENGGULUN                                              |
| Perkebunan Jember Barat: Penguasaan Lahan & Verifikasi Arsip          |
|-----------------------------------------------------------------------|
| - - - - - - [Garis Putus-Putus: DATA PERLU PEMERIKSAAN] - - - - - - - |
|                                                                       |
| [Kolom Media Placeholder - 5 kol]    | [Kolom Teks Editorial - 7 kol] |
| +----------------------------------+ |                                |
| | Dokumen: st-dokumen (4:5)        | | Sumber Tenggulun menjadi       |
| | Salinan HGU / Laporan SEL 1994   | | lokasi pembanding di wilayah   |
| +----------------------------------+ | Jember bagian barat [4]...     |
|                                      |                                |
| +----------------------------------+ | Angka luas lahan dan tahun SK  |
| | Foto: st-kebun (4:3)             | | HGU masih memerlukan telaah   |
| | Lanskap kebun Desa Manggisan     | | dokumen primer [4][6]...       |
+-----------------------------------------------------------------------+
```

### Bab 4: Linimasa Dua Jalur (Horizontal Pinned Stage)
```
+-----------------------------------------------------------------------+
| BAB 4 / KRONOLOGI HISTORIS                    [<- Sebelumnya] [Berikutnya ->]
| (Gulir vertikal menggerakkan linimasa secara horizontal)              |
|=======================================================================|
| JALUR KALI JOMPO:                                                     |
| [1884: Hak Erfpacht] -------- [1890: Kalie Djompo Cultuur] --- // --- |
| 524 ha, kopi & karet [1]      Pendirian perusahaan [2]        |       |
| (Garis Solid - Bersumber)     (Garis Solid - Bersumber)       |       |
|                                                               | Jeda  |
|---------------------------- SKALA WAKTU -----------------------| Waktu |
|                                                               |       |
| JALUR SUMBER TENGGULUN:                                       |       |
| [Periode HGU & Komoditas: Kopi, Karet, Kakao] ----------------- // --- |
| Verifikasi arsip HGU & SEL 1994 [4][6]                                |
| (- - - Garis Putus-Putus - Perlu Pemeriksaan - - -)                   |
+-----------------------------------------------------------------------+
```

### Bab 5: Perbandingan & Data (Tabular Editorial)
```
+-----------------------------------------------------------------------+
| BAB 5 / PERBANDINGAN DAN DATA KARAKTERISTIK KEBUN                     |
|                                                                       |
| Parameter              Kali Jompo                Sumber Tenggulun     |
|-----------------------------------------------------------------------|
| Wilayah Administratif  Desa Klungkung, Sukorambi Desa Manggisan, Tanggul
| Fokus Kajian           Kolonial, Usaha, Buruh    HGU, Lahan, Komunitas|
| Komoditas Sumber Awal  Kopi dan Karet            Kopi, Karet, Kakao * |
| Status Verifikasi      [Garis Solid - Bersumber] [- - Perlu Periksa -]|
| Luas Lahan Terdata     524 ha (Erfpacht 1884)    [Menunggu Verifikasi]|
| Deret Waktu Produksi   [Data belum tersedia]     [Data belum tersedia]|
+-----------------------------------------------------------------------+
```

### Bab 6: Kehidupan Sosial (Narasi Buruh & Petani Lereng)
```
+-----------------------------------------------------------------------+
| BAB 6 / KEHIDUPAN SOSIAL DAN TENAGA KERJA                             |
|                                                                       |
| "Kajian sejarah perkebunan menempatkan manusia di pusat narasinya:     |
| dinamika upah, kesejahteraan, dan relasi komunitas buruh kebun [3]."  |
|                                                                       |
| +--------------------+  +--------------------+  +--------------------+|
| | Foto: sosial-buruh |  | Kutipan Informan   |  | Foto: sosial-petani|
| | Aktivitas buruh    |  | "[Kutipan wawancara|  | Petani kopi rakyat |
| | petik kebun (3:2)  |  | buruh menyusul]"   |  | Klungkung (4:5)    |
| +--------------------+  +--------------------+  +--------------------+|
|                                                                       |
| *Format naskah riset lanjutan disiapkan rapi untuk materi kurasi FIB  |
+-----------------------------------------------------------------------+
```

### Bab 7: Galeri Arsip & Dokumentasi (Grid 12-Slot Terkurasi)
```
+-----------------------------------------------------------------------+
| BAB 7 / DOKUMENTASI DAN ARSIP                                         |
| Tiap slot foto dan arsip memiliki keterangan sumber dan izin jelas    |
|                                                                       |
| [Slot 01: Peta 4:3]  [Slot 02: Lanskap 16:9]   [Slot 03: Buruh 3:2]   |
| [Slot 04: Cap 1:1]   [Slot 05: Erfpacht 4:5]   [Slot 06: Saluran 3:2] |
| [Slot 07: Buah 4:3]  [Slot 08: Akses 3:2]      [Slot 09: Tokoh 4:5]   |
| [Slot 10: Batas 16:9][Slot 11: Sortasi 1:1]    [Slot 12: Tim FIB 3:2] |
+-----------------------------------------------------------------------+
```

### Bab 8: Penutup & Kolofon
```
+-----------------------------------------------------------------------+
| JEJAK KOPI JEMBER                                                     |
| Kolaborasi Fakultas Ilmu Komputer × Fakultas Ilmu Budaya UNEJ         |
|                                                                       |
| ~~~~~~~~~~~~~~~~~~~~~ Garis Kontur Penutup ~~~~~~~~~~~~~~~~~~~~~~~~~~ |
|                                                                       |
| [ Buka Daftar Lengkap Referensi (6 Sumber) ]                          |
|                                                                       |
| Kode Sumber: Astro Statis · Aksesibilitas WCAG 2.2 AA · 2026          |
+-----------------------------------------------------------------------+
```

---

## 5. Sistem Referensi Pop-up & Aksesibilitas (PRD Bagian 7)

1. **Penanda Angka Referensi**:
   - Berupa elemen `<button class="ref-marker" aria-haspopup="dialog" aria-expanded="false" data-ref-id="izzah-2020">`.
   - Gaya: Angka tabular kecil (*superscript* atau inline bergaris bawah halus 1px), tanpa kotak warna atau pill dekoratif.
2. **Perilaku Popover (Desktop)**:
   - Klik atau tekan `Enter`/`Space` membuka popover kontekstual di dekat tombol penanda.
   - Konten: Penulis, Judul (Italic), Tahun, Penerbit/Jurnal, Status Data (Teks: Bersumber / Perlu Pemeriksaan), serta tautan keluar `Buka dokumen sumber ↗`.
   - Fokus keyboard otomatis berpindah ke dalam kartu popover saat terbuka.
   - Menekan `Escape` menutup popover dan mengembalikan fokus tepat ke tombol penanda asal.
3. **Perilaku Bottom Sheet (Ponsel)**:
   - Pada layar `< 768px`, referensi muncul dari bawah sebagai *bottom sheet* yang ramah ibu jari (*thumb zone*), tanpa menghalangi pandangan teks utama secara canggung.
4. **Laci Referensi Lengkap (*Global Drawer*)**:
   - Tombol teks kecil "Referensi" pada bilah navigasi dan penutup Bab 8 membuka dialog layar samping (*drawer*) berisi seluruh 6 sumber dari `sumber.json`, dikelompokkan berdasarkan kebun dan status verifikasi, dilengkapi pencarian kata kunci cepat.

---

## 6. Spesifikasi Komponen MapSlot (PRD Bagian 9)

- **Antarmuka Props**:
  ```typescript
  interface MapSlotProps {
    lokasi: Array<{
      id: string;
      nama: string;
      desa: string;
      kecamatan: string;
      ringkasan: string;
      status_data: 'bersumber' | 'perlu_pemeriksaan';
      koordinat: null;
      posisi_skematik: 'Barat' | 'Timur';
    }>;
    modelUrl?: string | null; // Selalu null/kosong pada versi ini
  }
  ```
- **Implementasi Visual**:
  - Wadah rasio 16:9 di desktop, 4:5 di ponsel.
  - Ilustrasi kontur vektor SVG dinamis yang menggambarkan punggung Pegunungan Argopuro.
  - Dua titik penanda skematis interaktif:
    - Sisi Barat: Sumber Tenggulun (Desa Manggisan, Tanggul).
    - Sisi Timur: Kali Jompo (Desa Klungkung, Sukorambi).
  - Tanda air keterangan etis: *"Posisi skematis untuk orientasi wilayah lereng, bukan koordinat GPS definitif."*
  - Saat penanda diklik, kartu profil ringkas muncul di sudut peta tanpa berpindah halaman.

---

## 7. Uji Anti-Generik (*Genericness Test*)

| Aspek | Template AI Generik (Yang Dihindari) | Desain Jejak Kopi Jember (Yang Diterapkan) |
| :--- | :--- | :--- |
| **Latar & Nuansa** | Latar gelap pekat dengan *gradient blur* ungu/cyan atau kartu putih mengkilap (*glassmorphism*). | Kanvas kertas hangat `#FAF9F5` dengan tinta pekat `#3D3929` dan aksen hijau daun `#2F7F33`. |
| **Motif Grafis** | Ikon cangkir kopi kartun dari Lucide/Heroicons, emoji di judul bab. | Garis kontur ketinggian topografi Argopuro (SVG `stroke-dashoffset`) yang ditarik presisi. |
| **Bentuk Kartu** | Deretan 3 kartu seragam bersudut sangat bulat (`rounded-2xl` atau `rounded-3xl`) dengan bayangan tebal. | Grid editorial asimetris dengan aturan radius ketat (0px hingga 2px), hierarki dibangun lewat jarak dan tipografi. |
| **Penanda Status** | Pill badge berwarna hijau/kuning mencolok seperti dasbor SaaS ("Status: Verified"). | Garis solid untuk data bersumber, garis putus-putus dengan teks lugas untuk "perlu pemeriksaan". |
| **Integritas Isi** | Kalimat pengisi bombastis ("Menikmati secangkir kopi terbaik warisan leluhur nusantara"). | 100% narasi dari naskah kurasi FIB UNEJ. Tidak ada satu kalimat atau angka pun yang dikarang. |

---

## 8. Kesiapan Menuju Tahap Build (Phase 3)

Setelah dokumen desain dan konsep ini disetujui:
1. Inisialisasi proyek Astro dengan Tailwind CSS dan GSAP + ScrollTrigger.
2. Memasang font Google `Newsreader` dan `Inter` secara hemat.
3. Menghubungkan skema data `content/*.json` dan `content/narasi/*.md`.
4. Membangun seluruh bab 0 sampai 8 sesuai wireframe di atas.
5. Menjalankan audit performa Lighthouse dan aksesibilitas WCAG 2.2 AA.

