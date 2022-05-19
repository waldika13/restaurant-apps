# Submission 2 Katalog Restoran + PWA Kelas Menjadi Front-End Web Developer Expert

## Kriteria

Fitur yang harus ada pada aplikasi:

**1. Halaman Utama (Daftar Restoran) Terpenuhi**

Syarat:

- Menampilkan daftar restoran yang datanya bersumber dari API https://restaurant-api.dicoding.dev/. Silakan lihat dokumentasinya pada halaman tersebut.
- Wajib menampilkan nama, gambar dan minimal salah satu diantara kota, rating, dan atau deskripsi pada restoran.
- Terdapat tautan/CTA yang mengarah ke detail restoran pada tiap itemnya.
- Hero elemen tetap dipertahankan.

**2. Halaman Detail Restoran Terpenuhi**

Syarat:

- Menampilkan detail dari restoran yang dipilih dari halaman utama (daftar restoran) atau halaman favorit restoran.
- Pada halaman detail restoran harus terdapat:
  - Nama restoran.
  - Gambar
  - Alamat
  - Kota 
  - Deskripsi
  - Menu Makanan
  - Menu Minuman
  - Customer Reviews
 - Terdapat tombol favorite untuk memasukkan atau menghapus restoran favorit dari database (gunakan IndexedDB).

**3. Halaman Daftar Restoran Favorit Terpenuhi**

Syarat:

- Halaman Daftar Restoran dapat diakses melalui menu navigasi favorit.
- Menampilkan restoran yang difavoritkan oleh pengguna (data diambil dari indexedDB).
- Wajib menampilkan nama, gambar dan minimal salah satu diantara kota, rating, dan atau deskripsi pada restoran.
- Terdapat tautan/CTA yang mengarah ke detail restoran pada tiap itemnya.

**4. Native Capability Terpenuhi**

Syarat:

- Aplikasi dapat diakses dalam keadaan offline tanpa ada aset yang gagal dimuat, termasuk data yang didapatkan dari API. Anda bebas menggunakan strategi caching apapun, bahkan menggunakan workbox.
- Aplikasi harus menampilkan icon Add to Home Screen.
- Aplikasi memiliki custom icon yang ditampilkan pada home screen dan splash screen.

**5. Code Quality Terpenuhi**

Syarat:

- Menggunakan ESLint sebagai linter ketika menuliskan kode JavaScript. Harap lampirkan berkas konfigurasi ESLint ya.
- Menerapkan salah satu style guide baik itu Google JavaScript Code Style, AirBnB JavaScript Code Style, atau StandardJS Code Style.
- Periksa kembali sebelum mengirimkan submission, apakah project yang Anda kirimkan sesuai dengan kriteria yang ditetapkan atau tidak, ditandai dengan tidak adanya satupun error ketika menjalankan eslint.

**6. Pertahankan syarat yang ada pada submission sebelumnya. Terpenuhi**

Seperti:

- responsibilitas tampilan
- aksesibilitas pada website
- appbar
- footer
- dan sebagainya.


## Clone this project

```bash
git clone https://github.com/waldika13/restaurant-apps.git
```

## Install the dependencies:
Before running the below command, make sure you're in the project directory that
you've just cloned!!

```bash
npm i
```

## Usage:
Start project using Webpack Production
```bash
npm run build
```

Start project using Webpack Development
```bash
npm run start-dev
```

