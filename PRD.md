# PRD — Jejak Kopi Jember

*Scrollytelling sejarah perkebunan kopi Kali Jompo dan Sumber Tenggulun · Kolaborasi Fasilkom × Fakultas Ilmu Budaya UNEJ · Versi 0.2 (draf)*

## 1. Ringkasan

Jejak Kopi Jember adalah situs satu halaman berbentuk cerita bergulir (scrollytelling) tentang sejarah dua perkebunan kopi di Jember: Kali Jompo (Desa Klungkung, Kecamatan Sukorambi) dan Sumber Tenggulun (Desa Manggisan, Kecamatan Tanggul). Isinya berasal dari naskah yang disusun tim Fakultas Ilmu Budaya (Lampiran A). Versi ini berfokus pada **tampilan**: tipografi, tata letak, gerak, dan kenyamanan membaca, dengan target kualitas yang layak diajukan ke Awwwards.

Situs ini statis, tanpa backend dan tanpa basis data. Semua isi dibaca dari berkas JSON dan Markdown, lalu dipublikasikan lewat hosting gratis (GitHub Pages atau Vercel).

**Ketentuan versi ini**

- Isi: hanya dari Lampiran A. Tidak ada teks sejarah baru.
- Gambar: semua berupa placeholder dengan catatan singkat tentang foto yang harus dimasukkan nanti (bagian 8).
- Referensi: tidak ditampilkan langsung di halaman, melainkan lewat pop-up (bagian 7).
- Peta 3D: ditunda. Disediakan satu slot placeholder (bagian 9).
- Figur isometrik siklus panen: ditunda sampai FIB menyediakan isinya.

## 2. Tujuan dan ukuran keberhasilan

**Tujuan**

- Menyajikan sejarah dua perkebunan kopi Jember secara akurat dan nyaman dibaca oleh pelajar maupun masyarakat umum.
- Menghubungkan sejarah perkebunan dengan ekonomi masyarakat, kehidupan buruh, perubahan lahan, dan pertanian berkelanjutan.
- Menjadi showcase kolaborasi Fasilkom–FIB yang matang secara desain.

**Ukuran keberhasilan**

| Aspek | Sasaran |
| --- | --- |
| Performa | LCP di bawah 2,5 detik pada jaringan 4G; CLS di bawah 0,1 |
| Berat awal | JavaScript awal di bawah 150 KB (gzip); font dan aset lain dimuat hemat |
| Aksesibilitas | WCAG 2.2 AA; seluruh isi terbaca tanpa animasi |
| Akurasi | Semua klaim sejarah berasal dari Lampiran A; penanda “perlu pemeriksaan” tetap tampil |
| Desain | Rata-rata rubrik juri internal 7,5 ke atas (bagian 13) |
| Waktu | Versi tampilan siap tayang dalam 4 minggu |

**Bukan tujuan (v1):** peta 3D sungguhan, figur siklus panen, foto asli, versi Inggris, sistem admin, dan basis data server.

## 3. Pengguna

- **Pelajar dan mahasiswa**: butuh narasi runtut dan sumber yang bisa dikutip.
- **Masyarakat umum**: butuh cerita yang menarik dan ringan di ponsel.
- **Komunitas kebun dan petani**: ingin kisahnya tercatat dengan benar dan dihormati.
- **Reviewer dan juri**: menilai desain, kegunaan, kreativitas, dan isi.

## 4. Prinsip konten

Prinsip ini mengikat semua bab dan lebih penting daripada efek visual.

- **Naskah FIB (Lampiran A) adalah satu-satunya sumber isi.** Agent tidak menambah, mengubah makna, atau mengarang teks sejarah, angka, kutipan petani, nama, maupun penghargaan.
- **Naskah ini dikurasi FIB, tetapi belum diperiksa independen oleh tim Fasilkom.** Karena itu penanda kehati-hatian di dalam naskah dipertahankan di tampilan.
- **1884 dan 1890 tidak boleh digabung.** 1884 adalah keterangan hak erfpacht atas lahan; 1890 adalah catatan pendirian perusahaan. Hubungan keduanya masih perlu diperiksa.
- **Data Sumber Tenggulun (tahun HGU, luas lahan) berstatus “perlu pemeriksaan”.** Luas keseluruhan perkebunan dibedakan dari luas lahan kopi, dan setiap angka punya tahun, satuan, dan sumber.
- **Status tampil sebagai teks dan garis**, bukan sebagai pil berwarna: garis solid untuk “bersumber”, putus-putus dengan teks “perlu pemeriksaan” untuk sisanya.
- **Catatan untuk FIB** (Lampiran B) bukan bagian dari tampilan, tetapi harus dijawab sebelum tayang.

## 5. Anatomi halaman

Satu halaman dengan sembilan bab. Struktur konten usulan FIB (Beranda, Peta, Linimasa, Data, Kehidupan Sosial, Galeri, Referensi) dipetakan ke bab berikut. Referensi bukan bab: ia dibuka lewat pop-up (bagian 7).

| Bab | Isi (dari naskah) | Elemen visual | Interaksi |
| --- | --- | --- | --- |
| 0. Pembuka | Judul, ringkasan dua atau tiga kalimat dari gambaran umum proyek, ajakan gulir | Tipografi besar, garis kontur yang menggambar diri, placeholder foto hero | Gulir; tombol “lewati intro” |
| 1. Peta perkebunan | Dua lokasi dan profil singkat masing-masing | Slot peta 3D placeholder (bagian 9) dengan dua penanda | Pilih lokasi untuk membuka panel profil |
| 2. Kali Jompo | Hak erfpacht 1884 (524 hektare, kopi dan karet), Kalie Djompo Cultuur 1890, buruh 1998–2020, kopi rakyat Klungkung | Teks editorial, dua atau tiga placeholder foto, penanda sumber | Gulir; penanda sumber membuka pop-up |
| 3. Sumber Tenggulun | Lokasi pembanding di Jember barat, HGU, komoditas, penanda “perlu pemeriksaan” | Teks editorial, placeholder foto, status data | Sama seperti bab 2 |
| 4. Linimasa | Peristiwa dua kebun pada skala waktu yang sama | Linimasa horizontal dua jalur (bagian 11) | Gulir vertikal menggerakkan ke samping; kartu peristiwa |
| 5. Perbandingan dan data | Tabel perbandingan kedua kebun; tempat untuk data luas lahan dan produksi | Tabel tipografis; slot grafik dengan keadaan “data belum tersedia” | Pengalih kebun; penanda sumber |
| 6. Kehidupan sosial | Tenaga kerja, hubungan kebun dan masyarakat, pengalaman petani, perubahan sosial ekonomi | Placeholder foto wawancara, slot kutipan “\[kutipan menyusul\]” | Gulir; keadaan “naskah menyusul” yang dirancang rapi |
| 7. Galeri arsip | Foto, dokumen lama, peta, bangunan, dokumentasi wawancara | Grid placeholder dengan keterangan sumber dan izin | Klik untuk lightbox |
| 8. Penutup | Kredit tim, ajakan membaca sumber | Tipografi, garis kontur penutup | Tombol “Referensi” membuka daftar lengkap |

## 6. Konten sebagai data

Komponen hanya merender data. Tidak ada teks sejarah atau referensi yang ditulis langsung di komponen. Agent mengisi berkas dari Lampiran A.

- `content/lokasi.json`: dua lokasi (nama, desa, kecamatan, ringkasan, `koordinat: null`).
- `content/narasi/*.md`: teks bab 2, 3, dan 6 dari naskah.
- `content/peristiwa.json`: kronologi (id, lokasi, tahun atau periode, judul, ringkasan, status, sumber).
- `content/sumber.json`: referensi (penulis, judul, tahun, jenis, URL, halaman, catatan).
- `content/perbandingan.json`: tabel perbandingan.
- `content/media.json`: slot gambar (bagian 8).

Contoh peristiwa:

```json
{
  "id": "kj-1884-erfpacht",
  "lokasi_id": "kali-jompo",
  "tahun": "1884",
  "judul": "Keterangan hak erfpacht Petoengroto/Kalidjompo",
  "ringkasan": "Hak erfpacht atas lahan yang berkaitan dengan Petoengroto/Kalidjompo pada 29 September 1884, dengan luas yang disebutkan 524 hektare.",
  "status": "bersumber",
  "catatan": "Tidak boleh disamakan dengan pendirian perusahaan 1890.",
  "sumber_ids": ["izzah-2020"]
}
```

`status` bernilai `bersumber` atau `perlu_pemeriksaan`. Skema divalidasi saat build; data tanpa sumber menggagalkan build.

## 7. Referensi sebagai pop-up

Referensi tidak ditampilkan permanen di halaman. Pengunjung membukanya hanya bila perlu.

- **Penanda:** angka kecil sebagai teks (misalnya “1”, tanpa kotak atau pil) di akhir kalimat atau tabel yang bersumber, dengan garis bawah tipis. Elemennya `button`.
- **Panel:** klik atau ketuk membuka popover kecil di dekat penanda (desktop) atau bottom sheet (ponsel). Isinya: penulis, judul, tahun, jenis sumber, halaman bila ada, status sebagai teks, dan tautan “Buka sumber” di tab baru.
- **Daftar lengkap:** tombol teks kecil “Referensi” di navigasi dan di penutup membuka dialog atau drawer berisi seluruh sumber, dikelompokkan per kebun atau jenis, dengan pencarian sederhana.
- **Sumber data:** semuanya dari `sumber.json`. Tidak ada sumber yang ditulis di komponen atau di teks halaman.
- **Aksesibilitas:** `aria-expanded` pada penanda; fokus pindah ke panel dan kembali ke penanda saat ditutup; Esc menutup; berfungsi dengan keyboard dan pembaca layar.
- **Gaya:** mengikuti sistem desain, tanpa pil dan tanpa bayangan tebal; transisi fade 150–200 ms, tanpa transisi saat gerak minimal.
- **Alternatif yang boleh dipilih agent** bila terbukti lebih cocok: catatan samping di margin pada desktop yang muncul saat hover atau fokus, dengan pop-up di ponsel. Syarat tetap: tidak ada daftar sumber yang tampil permanen.

## 8. Gambar placeholder

Semua gambar adalah slot dari `content/media.json` (id, bab, rasio, alt, keterangan, sumber, lisensi, status izin). Slot kosong merender komponen placeholder. Saat berkas dan datanya diisi, gambar muncul tanpa mengubah kode.

- **Tampilan placeholder:** blok bernada tunggal dengan garis tipis dan tulisan kecil berisi catatan isi, misalnya “Foto: kebun kopi Kali Jompo, pagi hari”. Tanpa ikon, emoji, atau gradien. Rasio tetap agar tata letak tidak bergeser.
- **Placeholder ikut bergerak** (reveal dan parallax tipis) supaya ritme halaman bisa dinilai sebelum foto ada.
- **Saat foto sungguhan masuk:** WebP atau AVIF, lebar maksimal 1600 px, lazy loading, teks alternatif bahasa Indonesia, dan atribusi di keterangan.
- **Jangan mengambil foto dari internet.** Foto hanya dari dokumentasi tim atau sumber yang lisensinya jelas.

| Slot | Bab | Rasio | Isi yang perlu dimasukkan |
| --- | --- | --- | --- |
| hero-lereng | 0 | 16:9 | Lanskap lereng Argopuro atau kebun kopi, pagi atau berkabut |
| kj-kebun | 2 | 4:3 | Kebun kopi dan karet Kali Jompo |
| kj-bangunan | 2 | 3:2 | Kantor atau fasilitas perkebunan Kali Jompo (bila ada izin) |
| kj-arsip | 2 | 4:5 | Dokumen atau peta lama terkait erfpacht 1884 (hanya arsip berizin) |
| kj-pengolahan | 2 | 3:2 | Pengolahan kopi rakyat di Desa Klungkung |
| st-kebun | 3 | 4:3 | Kebun Sumber Tenggulun |
| st-fasilitas | 3 | 3:2 | Fasilitas pengolahan atau kantor kebun Sumber Tenggulun |
| st-dokumen | 3 | 4:5 | Dokumen HGU atau laporan (hanya yang boleh dipublikasikan) |
| sosial-buruh | 6 | 3:2 | Aktivitas buruh kebun |
| sosial-petani | 6 | 4:5 | Potret petani kopi (dengan izin) |
| sosial-wawancara | 6 | 3:2 | Suasana wawancara |
| galeri-01 sampai 12 | 7 | beragam | Foto, dokumen lama, peta, bangunan, dokumentasi wawancara; tiap item butuh sumber dan izin |

## 9. Peta 3D: placeholder

Peta 3D ditunda. Versi ini hanya menyiapkan tempatnya.

- Bab 1 memiliki satu slot peta layar penuh (16:9 di desktop, 4:5 di ponsel) dengan label kecil “Peta 3D menyusul”.
- Isi sementara: ilustrasi garis kontur SVG yang menggambar diri saat bab masuk layar, dengan dua penanda skematis. Sumber Tenggulun di sisi barat dan Kali Jompo di sisi timur, sesuai keterangan naskah bahwa Sumber Tenggulun berada di Jember bagian barat. Beri catatan “posisi skematis, bukan koordinat”.
- Klik penanda membuka panel profil lokasi dari `lokasi.json`.
- Siap diganti: komponen `MapSlot` menerima properti `lokasi` dan `modelUrl` (kosong untuk saat ini). Tidak ada kode Three.js atau model glTF di versi ini.
- `koordinat` di `lokasi.json` tetap `null` sampai diverifikasi.

## 10. Arah desain (acuan /awwwards)

**Konsep kreatif: garis kontur.** Lereng Argopuro dan Raung dibaca lewat garis ketinggian. Garis kontur tipis menjadi satu motif yang konsisten: tergambar di pembuka, menjadi pemisah antar-bab, menjadi isi slot peta placeholder, dan menjadi indikator posisi baca di tepi layar. Motif ini sesuai tema (lereng, lahan, peta), murah secara performa (SVG), dan memberi halaman identitas sendiri meski foto belum ada.

**Rasa.** Editorial, tenang, membumi: terbitan sejarah yang hidup, bukan brosur wisata.

**Warna**

- Kertas `#FAF9F5`: latar terang (tema Nature remix di 21st.dev)
- Tinta `#3D3929`: teks utama (tema Nature remix)
- Hijau daun `#2F7F33`: aksen utama, tautan, penanda “bersumber” (tema Nature remix)
- Cokelat tanah `#6B4D2E`: aksen kedua dan garis kontur utama (konversi dari tema Starbucks di 21st.dev)
- Emas pasir `#A9905B`: garis tipis dan penanda; kontras rendah, jangan dipakai untuk teks (konversi dari tema Meridian Cafe di 21st.dev)
- Mode gelap (turunan kami, perlu diuji): latar `#1B1A15`, teks `#EDE9DD`, hijau `#6FBF73`
- Semua pasangan warna diperiksa kontrasnya ke tingkat AA sebelum final.

Tema acuan: [Nature remix](https://21st.dev/@romaltaraz/themes/nature-remix-1782640315606), [Starbucks](https://21st.dev/@ibrandify/themes/starbucks-1791649865968), dan [Meridian Cafe](https://21st.dev/@nahiss19/themes/meridian-cafe-1787493036271).

**Tipografi.** Dua keluarga huruf: serif editorial untuk judul dan esai (kandidat: Fraunces atau Newsreader) dan sans humanis untuk antarmuka dan data (kandidat: Instrument Sans atau Inter). Self-hosting. Ukuran fluid dengan `clamp()`, panjang baris 60–68 karakter, angka tabular untuk tahun dan data.

**Tata letak**

- Grid 12 kolom dengan margin samping lebar di desktop; kolom teks sempit dan nyaman dibaca.
- Placeholder foto boleh keluar grid (lebar penuh atau menembus margin) pada momen tertentu saja, bukan di setiap bab.
- Nomor dan nama bab sebagai teks serif besar, bukan kapsul. Tahun di linimasa memakai angka tabular besar.
- Ruang kosong lega, satu ide per layar, ritme berganti antara teks panjang, gambar lebar, dan data.
- Ponsel: satu kolom, kontrol terjangkau ibu jari, tidak ada elemen yang bergantung pada hover.

**Gerak**

- Momen tanda tangan di pembuka: garis kontur menggambar diri (stroke-dashoffset) sementara judul muncul per baris dengan mask. Total di bawah 2,5 detik, bisa dilewati, tidak menghalangi gulir.
- Antar-bab: kontur pemisah tergambar saat masuk layar; teks muncul dengan fade dan geser tidak lebih dari 12 px.
- Indikator baca: garis kontur vertikal tipis di tepi layar yang progresnya mengikuti gulir, dengan nama bab sebagai teks kecil.
- Linimasa: pin dan scrub (bagian 11).
- Parallax hanya pada placeholder atau foto, maksimal sekitar 6%.
- Durasi 250–700 ms dengan easing keluar yang lembut. Tidak ada gerak yang berulang tanpa henti.
- Hormati `prefers-reduced-motion`: semuanya tampil statis dan kontur tergambar penuh.
- Jangan membajak gulir bawaan. Lenis opsional dan bisa dimatikan.

**Hindari (pola generik yang cepat terbaca sebagai buatan AI)**

- Badge, pill, dan chip dekoratif, termasuk label kecil di atas judul dan status berbentuk pil berwarna.
- Emoji dan ikon hiasan di antarmuka.
- Gradien ungu–biru, glow, glassmorphism, dan mesh gradient.
- Deretan tiga kartu seragam dengan bayangan lembut dan sudut sangat bulat.
- Hero dengan dua tombol, angka statistik karangan, atau testimoni palsu.
- Teks pengisi dan frasa generik. Setiap kalimat berasal dari Lampiran A.

**Gunakan**

- Satu aturan radius sudut kecil (0 sampai 4 px) di seluruh situs.
- Label berupa teks biasa berukuran kecil, bukan huruf kapital berjarak lebar.
- Hierarki dari tipografi, jarak, dan garis tipis, bukan dari kotak dan bayangan.
- Aksen warna hemat: tidak lebih dari dua aksen per layar.

**Referensi gerak dari 21st.dev**

Komponen di 21st.dev berbasis React dan shadcn/ui. Dipakai sebagai referensi pola, disesuaikan dengan sistem desain, bukan disalin mentah. Pemasangan lewat `npx shadcn@latest add` memerlukan API key 21st, dan akun gratis dibatasi jumlah pemasangan per hari. Lisensi di bawah ini menurut halaman tiap komponen; periksa lagi sebelum dipakai.

| Komponen | Penulis | Pola yang diambil | Lisensi |
| --- | --- | --- | --- |
| [Timeline](https://21st.dev/@hyperiux/components/timeline) | Hyperiux | Linimasa gulir horizontal dengan reveal milestone (GSAP, SplitText), mendukung gerak minimal | MIT |
| [Tweenly Timeline Scroll](https://21st.dev/@mirukullacode/components/tweenly-timeline-scroll) | mirukullacode | Linimasa tahun minimal yang pin lalu bergulir ke samping atau diseret; tahun di tengah menyala | MIT |
| [Lifeline](https://21st.dev/@evilrabbit/components/lifeline) | evilrabbit | Rel horizontal di desktop, vertikal di ponsel, kartu foto, lightbox | MIT |
| [Horizontal Feature Reveal](https://21st.dev/@hyperiux/components/horizontal-feature-reveal) | Hyperiux | Gulir vertikal menggerakkan jalur editorial horizontal; teks muncul per baris | MIT |

Tidak dipakai kecuali lisensinya jelas: Horizontal Scroll (UI Layouts, tanpa lisensi), Event Path Calendar (Ruixen UI), dan Text Parallax Content (lisensi tidak diketahui).

## 11. Linimasa horizontal (bab 4)

Linimasa bergulir ke samping saat pengunjung menggulir ke bawah, dengan dua jalur pada skala waktu yang sama: Kali Jompo di atas, Sumber Tenggulun di bawah. Isinya hanya dari Lampiran A.

- **Perilaku:** bagian ini dipin di layar, lalu gulir vertikal menggerakkan jalur ke kiri (GSAP ScrollTrigger, scrub). Tahun di tengah layar menjadi aktif.
- **Kartu peristiwa:** tahun, judul, satu atau dua kalimat, dan penanda sumber yang membuka pop-up (bagian 7). Placeholder foto hanya bila ada slot yang cocok.
- **Jeda waktu:** celah panjang (1890 ke 1998) diberi penanda jeda, bukan ruang kosong sepanjang skala.
- **Status:** garis solid untuk “bersumber”, putus-putus dengan teks “perlu pemeriksaan” untuk lainnya. Tanpa pill.
- **Ponsel:** jalur berubah menjadi vertikal; dua jalur menjadi satu daftar dengan penanda kebun.
- **Aksesibilitas:** panah kiri dan kanan serta tombol “Sebelumnya” dan “Berikutnya” berfungsi; gerak minimal menampilkan daftar vertikal statis.

| Jalur | Peristiwa | Sumber | Status |
| --- | --- | --- | --- |
| Kali Jompo | 1884: keterangan hak erfpacht atas lahan Petoengroto/Kalidjompo, 524 hektare | Izzah dkk. (2020) | Bersumber; hubungan dengan 1890 perlu diperiksa |
| Kali Jompo | 1890: pendirian Kalie Djompo Cultuur (usaha kopi) | Colonial Business Indonesia | Bersumber; hubungan dengan 1884 perlu diperiksa |
| Kali Jompo | 1998–2020: periode kajian kehidupan buruh perkebunan Kalijompo | Fitriyah (2025) | Periode kajian; rincian peristiwa menyusul |
| Sumber Tenggulun | Belum ada peristiwa; tahun keputusan HGU dan luas lahan diperiksa lebih dulu | Dokumen HGU dan laporan lingkungan 1994 | Perlu pemeriksaan |

## 12. Arsitektur teknis

| Lapisan | Pilihan | Catatan |
| --- | --- | --- |
| Build | Astro, keluaran statis; komponen interaktif sebagai React island bila perlu | Vite biasa tetap opsi bila tidak memakai komponen React dari 21st.dev |
| Gaya | Tailwind CSS dengan token warna dari bagian 10 | Mode terang dan gelap |
| Gerak | GSAP + ScrollTrigger; Lenis opsional | Jangan membajak gulir; hormati gerak minimal |
| Garis kontur | SVG inline atau berkas SVG, dianimasikan dengan stroke-dashoffset | Ringan; tanpa pustaka tambahan |
| Konten | JSON dan Markdown di `content/` (bagian 6) | Divalidasi saat build |
| Pop-up referensi | Komponen dialog dan popover yang aksesibel | Bagian 7 |
| Hosting | GitHub Pages atau Vercel | Gratis, tanpa server |
| Ditunda | Three.js, model glTF, Maps3D | Hanya slot placeholder (bagian 9) |

## 13. Kualitas: kriteria Awwwards dan rubrik juri internal

Awwwards menilai situs dengan bobot kurang lebih **Desain 40%, Kegunaan 30%, Kreativitas 20%, Konten 10%**. Rubrik berikut dipakai tim untuk menilai diri sebelum rilis (skor 1–10 per butir, target rata-rata 7,5 ke atas).

| Kriteria | Pertanyaan penilaian |
| --- | --- |
| Desain | Apakah palet, tipografi, dan garis kontur terasa spesifik untuk kopi Argopuro, bukan templat umum? Apakah ada satu elemen yang diingat orang? Apakah placeholder tampak seperti bagian dari desain? |
| Kegunaan | Apakah pengunjung baru paham harus apa dalam 5 detik? Nyaman di ponsel? Bisa dibaca tanpa animasi? Apakah pop-up referensi mudah dibuka dan ditutup? |
| Kreativitas | Apakah motif kontur dan linimasa horizontal terasa segar dan relevan dengan sejarahnya, bukan efek demi efek? |
| Konten | Apakah isi setia pada naskah FIB, bersumber, dan mudah dipahami? Apakah penanda kehati-hatian tampil jelas? |

Pemeriksaan teknis rilis: Lighthouse (performa, aksesibilitas, praktik terbaik), uji keyboard, uji pembaca layar dasar, uji di satu ponsel kelas menengah dan satu laptop tanpa GPU khusus. Tambahkan satu pemeriksaan: tidak ada badge, pill, emoji, atau gradien dekoratif di antarmuka (bagian 10).

## 14. Peran dan alur kerja

**FIB (Ilmu Sejarah)**

- Menjadi pemilik isi: naskah Lampiran A, jawaban atas Lampiran B, dan naskah bab 6 (kehidupan sosial).
- Menyediakan foto, dokumen, dan izin pemakaiannya, lalu mengisi `media.json` dan `sumber.json` (termasuk nomor halaman bila ada).

**Fasilkom**

- Seluruh tampilan: sistem desain, komponen, gerak, pop-up referensi, placeholder, performa, aksesibilitas, dan publikasi.
- Memastikan komponen hanya merender data.

**Alur:** FIB mengubah isi lewat berkas di `content/` dan menaruh gambar di `public/media/`, tanpa menyentuh kode. Fasilkom meninjau format. Perubahan fakta disetujui satu orang FIB lain sebelum digabung.

## 15. Rencana kerja 4 minggu

| Minggu | Fasilkom | FIB |
| --- | --- | --- |
| 1 | Sistem desain, kerangka halaman, berkas `content/` dari Lampiran A, motif kontur | Jawaban Lampiran B; daftar foto yang tersedia |
| 2 | Bab 0–3, pop-up referensi, komponen placeholder gambar | Peninjauan teks di tampilan; mulai mengisi `media.json` |
| 3 | Linimasa horizontal, bab 5–7, slot peta placeholder | Naskah bab 6; foto dan izin pertama masuk |
| 4 | Polesan visual dan gerak, optimasi, aksesibilitas, rubrik juri internal, publikasi | Persetujuan akhir isi dan kredit |

Foto asli dapat masuk kapan saja tanpa mengubah kode.

## 16. Risiko dan mitigasi

| Risiko | Dampak | Mitigasi |
| --- | --- | --- |
| Naskah FIB belum diperiksa independen | Klaim keliru tayang | Lampiran B, status “bersumber” dan “perlu pemeriksaan”, persetujuan FIB sebelum tayang |
| Placeholder tampak kosong saat dinilai | Kesan desain kurang matang | Placeholder dirancang sebagai bagian visual; foto masuk bertahap |
| Efek gerak mengganggu pembacaan | Pengunjung frustrasi | Gerak minimal, tidak membajak gulir |
| Antarmuka terasa generik | Nilai desain turun | Aturan bagian 10; tinjau dengan rubrik juri internal |
| Pop-up referensi sulit diakses | Sumber tidak terbaca | Uji keyboard dan pembaca layar; bottom sheet di ponsel |
| Bab 6 minim karena naskah baru berupa daftar tema | Bab terasa kosong | Keadaan “naskah menyusul” yang dirancang rapi; FIB melengkapi |
| Komponen 21st.dev berlisensi tidak jelas | Tidak boleh dipakai | Hanya yang berlisensi MIT; sisanya inspirasi |
| Cakupan melebar | Terlambat | Bekukan lingkup: bab 0–8, tanpa peta 3D dan figur siklus panen |

## 17. Kriteria selesai (v1)

- Bab 0–8 berjalan berurutan di desktop dan ponsel.
- Semua isi berasal dari Lampiran A; penanda kehati-hatian tampil.
- Referensi hanya muncul lewat pop-up dan daftar lengkap yang dibuka pengunjung.
- Semua gambar berupa placeholder yang bisa diganti lewat `media.json` tanpa mengubah kode.
- Slot peta 3D placeholder berfungsi dengan dua penanda skematis.
- Linimasa horizontal berfungsi di desktop, menjadi vertikal di ponsel, dan bisa dipakai dengan keyboard.
- Tidak ada badge, pill, emoji, atau gradien dekoratif.
- Skor Lighthouse dan rubrik juri internal memenuhi sasaran.
- Situs terbit di hosting gratis dengan alamat tetap.

## 18. Pertanyaan terbuka

1. Siapa yang menyediakan foto, kapan, dan siapa yang mengurus izinnya?
2. Bisakah FIB menjawab Lampiran B, terutama soal komoditas Sumber Tenggulun?
3. Bisakah FIB menambahkan nomor halaman pada setiap sumber untuk pop-up referensi?
4. Kapan naskah bab 6 (kehidupan sosial) tersedia?
5. Siapa yang memegang akun hosting dan nama domain?
6. Apakah versi Inggris dibutuhkan sebelum pengajuan ke ajang desain web?

## Lampiran A. Naskah FIB (sumber isi)

Salinan naskah dari tim FIB, tanpa perubahan isi. Bagian “Struktur Konten Website yang Disarankan” sudah dipetakan ke bab pada bagian 5.

### A1. Gambaran umum proyek

Proyek Jejak Kopi Jember merupakan rancangan prototipe website digital yang bertujuan mendokumentasikan sejarah perkebunan kopi di Kabupaten Jember, khususnya Perkebunan Kali Jompo di Desa Klungkung, Kecamatan Sukorambi, dan Perkebunan Sumber Tenggulun di Desa Manggisan, Kecamatan Tanggul.

Website ini tidak hanya menampilkan informasi mengenai perkebunan kopi, tetapi juga menghubungkan sejarah perkebunan dengan perkembangan ekonomi masyarakat, kehidupan buruh, perubahan penggunaan lahan, serta persoalan pertanian berkelanjutan. Informasi disajikan melalui peta digital, linimasa sejarah, data perkebunan, foto dokumentasi, dan arsip yang dapat diakses oleh masyarakat maupun pelajar.

Proyek ini menggabungkan keilmuan Ilmu Sejarah dan teknologi informasi. Mahasiswa Ilmu Sejarah bertugas menelusuri sumber, memeriksa keakuratan informasi, dan menyusun narasi sejarah. Mahasiswa Fasilkom bertugas mengembangkan desain antarmuka, sistem basis data, peta digital, serta fitur website.

### A2. Data sejarah Perkebunan Kali Jompo

Lokasi: Desa Klungkung, Kecamatan Sukorambi, Kabupaten Jember.

Kali Jompo merupakan salah satu perkebunan yang dapat dikaji untuk melihat perkembangan perkebunan kopi di Jember sejak masa kolonial hingga periode kontemporer. Sumber awal yang dapat digunakan adalah buku Latifatul Izzah dan rekan-rekan, Perkebunan Kopi Rakyat Kabupaten Jember: Kopi Desa Klungkung Lereng Gunung Hyang Argopuro (2020).

Buku tersebut menyebutkan informasi mengenai hak erfpacht atas lahan yang berkaitan dengan Petoengroto/Kalidjompo pada 29 September 1884, dengan luas yang disebutkan mencapai 524 hektare. Komoditas yang dikembangkan meliputi kopi dan karet. Sementara itu, basis data Colonial Business Indonesia mencatat perusahaan Kalie Djompo Cultuur didirikan pada 1890 dan bergerak dalam usaha kopi.

Kedua informasi tersebut menjadi titik awal untuk menyusun kronologi sejarah perkebunan. Tahun 1884 dan 1890 tidak boleh langsung dianggap sebagai peristiwa yang sama. Tahun 1884 berkaitan dengan keterangan hak atas lahan, sedangkan tahun 1890 merujuk pada catatan pendirian perusahaan. Hubungan keduanya perlu diperiksa lebih lanjut melalui dokumen sejarah.

Kali Jompo juga dapat dikaji melalui perkembangan perkebunan rakyat dan kehidupan buruh. Penelitian mengenai buruh perkebunan Kalijompo periode 1998–2020 dapat digunakan untuk menelusuri perubahan hubungan kerja, upah, kesejahteraan, dan kondisi sosial masyarakat perkebunan.

**Informasi yang dapat dimasukkan ke website**

- Kronologi perkembangan perkebunan sejak masa kolonial.
- Riwayat perusahaan dan perubahan pengelolaan lahan.
- Perkembangan komoditas kopi dan karet.
- Kehidupan buruh serta masyarakat di sekitar perkebunan.
- Perkembangan perkebunan kopi rakyat di Desa Klungkung.
- Dokumentasi bangunan, fasilitas perkebunan, dan aktivitas pengolahan kopi jika sumbernya tersedia.

**Sumber awal Kali Jompo**

- Latifatul Izzah dkk. (2020), Perkebunan Kopi Rakyat Kabupaten Jember: Kopi Desa Klungkung Lereng Gunung Hyang Argopuro. https://repository.unej.ac.id/jspui/bitstream/123456789/97405/1/F.%20IB\_Buku%20Teks\_Latifatul%20Izzah\_Perkebunan%20Kopi%20Rakyat%20Kabupaten%20Jember%20Kopi%20Desa%20Klungkung.pdf
- Colonial Business Indonesia, “Kalie Djompo Cultuur.” https://www.colonialbusinessindonesia.nl/en/database/company/kalie-djompo-cultuur
- Nurul Fitriyah (2025), Dinamika Kehidupan Buruh Perkebunan Kalijompo Tahun 1998–2020. https://digilib.uinkhas.ac.id/42922/

### A3. Data sejarah Perkebunan Sumber Tenggulun

Lokasi: Desa Manggisan, Kecamatan Tanggul, Kabupaten Jember.

Sumber Tenggulun menjadi lokasi pembanding untuk melihat perkembangan perkebunan di wilayah Jember bagian barat. Kajian dapat diarahkan pada sejarah penguasaan lahan, perubahan pengelolaan, perkembangan komoditas, serta hubungannya dengan kehidupan masyarakat sekitar.

Dokumen sekunder yang ditemukan memuat keterangan mengenai hak guna usaha (HGU), perusahaan perkebunan, dan luas lahan. Terdapat pula keterangan tentang komoditas kopi, karet, dan kakao. Namun, sejumlah tahun keputusan HGU dan angka luas lahan perlu diperiksa kembali sebelum dimasukkan sebagai data final.

Luas keseluruhan perkebunan harus dibedakan dari luas lahan khusus tanaman kopi. Data produksi juga perlu disertai tahun, satuan, dan sumber yang jelas agar dapat dibandingkan secara tepat.

**Informasi yang perlu dikembangkan dalam website**

- Sejarah awal perkebunan dan perubahan pengelolaannya.
- Riwayat penguasaan lahan berdasarkan dokumen HGU.
- Perkembangan komoditas kopi, karet, dan kakao.
- Perubahan luas lahan serta produksi berdasarkan tahun.
- Hubungan perkebunan dengan tenaga kerja dan masyarakat sekitar.
- Perubahan praktik pengelolaan perkebunan dan isu keberlanjutan.

**Sumber awal Sumber Tenggulun**

- Dokumen penelitian terkait HGU Sumber Tenggulun, repositori Universitas Jember. https://repository.unej.ac.id/bitstream/handle/123456789/6298/TA%20LINDAx.pdf?isAllowed=y&sequence=1
- Dokumen penelitian terkait perkebunan Sumber Tenggulun. https://digilib.uinkhas.ac.id/23729/1/Mr.%20Sukron\_E20152014.pdf
- Studi Evaluasi Lingkungan (SEL) Perkebunan dan Pabrik Pengolahan Karet, Kakao, Kopi dan Teh Kebun Gunung Gambir serta perkebunan dan pabrik pengolahan di Kecamatan Tanggul, Kabupaten Jember (1994). Dokumen ini perlu diperiksa untuk memastikan bagian yang secara khusus membahas Sumber Tenggulun.

### A4. Perbandingan data kedua perkebunan

| Aspek | Kali Jompo | Sumber Tenggulun |
| --- | --- | --- |
| Lokasi | Desa Klungkung, Sukorambi | Desa Manggisan, Tanggul |
| Fokus sejarah | Perkebunan kolonial, perusahaan kopi, buruh, dan kopi rakyat | Penguasaan lahan, perubahan pengelolaan, komoditas, dan hubungan dengan masyarakat |
| Komoditas dalam sumber awal | Kopi dan karet | Kopi, karet, dan kakao |
| Sumber yang perlu dikembangkan | Buku sejarah kopi Klungkung, arsip perusahaan, penelitian buruh | Dokumen HGU, arsip perusahaan, laporan perkebunan, dan laporan lingkungan |
| Potensi keberlanjutan | Perkebunan rakyat, pengelolaan lahan, dan kehidupan petani | Perubahan penggunaan lahan, diversifikasi komoditas, dan pengelolaan perkebunan |

Perbandingan ini membantu pengguna website memahami bahwa sejarah perkebunan tidak hanya berkaitan dengan produksi komoditas, tetapi juga perubahan penguasaan lahan, sistem kerja, dan kehidupan sosial masyarakat.

## Lampiran B. Catatan untuk FIB (bukan untuk ditampilkan)

Hal-hal berikut ditemukan saat menyusun PRD dan sebaiknya dijawab FIB sebelum tayang.

- **Komoditas Sumber Tenggulun.** Naskah menyebut kopi, karet, dan kakao. Beberapa skripsi dan laporan PKL Politeknik Negeri Jember tentang PDP/Perumda Kahyangan Jember menyebut karet dan kopi sebagai komoditas utama dan cengkeh sebagai penunjang. Mohon dipastikan sumber untuk kakao.
- **Pengelola Sumber Tenggulun.** Sumber Polije yang sama mencatatnya sebagai Kebun Bagian PDP/Perumda Kahyangan Jember di Desa Manggisan, Kecamatan Tanggul. Informasi pengelola ini dapat melengkapi narasi bila FIB menyetujui.
- **Lahan di Manggisan.** Satu artikel jurnal UNEJ (Ekuilibrium, 2017) menyebut sekitar 317,11 hektare lahan kebun di Desa Manggisan dikuasai warga untuk ditanami kopi, berdasarkan data PDP Sumber Tenggulun 2016. Berpotensi menjadi bahan linimasa, tetapi sensitif dan perlu diperiksa serta ditulis hati-hati.
- **HGU dan luas lahan.** Tahun keputusan HGU dan angka luas lahan tetap berstatus “perlu pemeriksaan” sampai dikonfirmasi.
- **Nomor halaman.** Naskah belum mencantumkan nomor halaman per kutipan. Bila ada, tambahkan agar pop-up referensi lebih berguna.
