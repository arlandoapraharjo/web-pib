import lokasiData from '../../content/lokasi.json';
import peristiwaData from '../../content/peristiwa.json';
import sumberData from '../../content/sumber.json';
import perbandinganData from '../../content/perbandingan.json';
import mediaData from '../../content/media.json';
import proyekData from '../../content/proyek.json';

export interface Lokasi {
  id: string;
  nama: string;
  desa: string;
  kecamatan: string;
  kabupaten: string;
  lereng: string;
  ringkasan: string;
  komoditas_awal: string[];
  status_data: 'bersumber' | 'perlu_pemeriksaan';
  koordinat: null;
  posisi_skematik: 'Barat' | 'Timur';
  catatan_posisi: string;
}

export interface Peristiwa {
  id: string;
  lokasi_id: string;
  tahun: string;
  periode_label: string;
  judul: string;
  ringkasan: string;
  status: 'bersumber' | 'perlu_pemeriksaan';
  catatan: string;
  sumber_ids: string[];
}

export interface Sumber {
  id: string;
  penulis: string;
  judul: string;
  tahun: string;
  jenis: string;
  penerbit: string;
  url: string | null;
  halaman: string | null;
  catatan: string;
  status: 'bersumber' | 'perlu_pemeriksaan';
}

export interface AspekPerbandingan {
  id: string;
  nama: string;
  kali_jompo: string;
  sumber_tenggulun: string;
  status: 'bersumber' | 'perlu_pemeriksaan';
  catatan?: string;
  sumber_ids: string[];
}

export interface MediaSlot {
  id: string;
  bab: number;
  rasio: string;
  alt: string;
  keterangan: string;
  sumber: string;
  lisensi: string;
  status_izin: string;
  berkas: string | null;
}

export const lokasi: Lokasi[] = lokasiData as Lokasi[];
export const peristiwa: Peristiwa[] = peristiwaData as Peristiwa[];
export const sumber: Sumber[] = sumberData as Sumber[];
export const perbandingan = perbandinganData;
export const mediaList: MediaSlot[] = mediaData as MediaSlot[];
export const proyek = proyekData;

export function getSumberById(id: string): Sumber | undefined {
  return sumber.find((s) => s.id === id);
}

export function getMediaById(id: string): MediaSlot | undefined {
  return mediaList.find((m) => m.id === id);
}

