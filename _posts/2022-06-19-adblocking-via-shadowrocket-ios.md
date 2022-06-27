---
title: Adblocking dengan Shadowrocket di perangkat iOS
tags: [iOS, Shadowrocket, VPN]
style: fill
color: primary
description: Artikel ini menjelaskan cara memasukkan config adblocking di aplikasi Shadowrocket iOS.
---

Shadowrocket merupakan salah satu aplikasi VPN di iOS yang memiliki UI yang simpel, dengan fitur yang banyak salah satunya adalah fitur adblocking.

Sistem adblocking di Shadowrocket ini dapat memblokir permintaan koneksi dari suatu web, sehingga web tersebut tidak akan tampil di halaman browser kita.

Sebelum memasukkan config adblock, pengguna **``wajib``** memiliki:
  1. Aplikasi Shadowrocket yang dapat di beli di AppStore seharga Rp. 50.000 .
  2. Koneksi internet minimal 30mb.
  3. Otak yang bisa dipakai mikir sedikit-sedikit, nalarnya dipakai.

Cara import:
  1. Buka **``Shadowrocket``**.
  2. Pilih tab **``Config``** dibawah (yang gambar folder).
  3. Lihat **``Remote Files``**
  4. Tekan **``Add Configuration``**
  5. Masukkan URL ini:

      ```
      https://github.com/helmiau/clashrules/raw/main/shadowrocket/adsbagong.conf
      ```

  6. Lalu tekan tombol **``Download``**
  7. Lalu lihat bagian **``Local Files``**, tekan tulisan **``adsbagong.conf``**, lalu pilih **``Use Config``**.
  8. Kembali ke halaman awal Shadowrocket, yaitu tab **``Home``**.
  9. Pilih **``Global Routing``** ke **``Config``**
  10. Lalu aktifkan Shadowrocketnya dengan menekan tombol On/Off disebelah tulisan **Not Connected** di halaman awal Shadowrocket.

Tambahan untuk mengubah koneksi langsung dengan VPN di **``Local Servers``** pada halaman **``Home``** Shadowrocket.
  - Jika ingin menggunakan koneksi VPN, silahkan ikuti langkah berikut
      1. Pergi ke tab **``Config``** - **``Local Files``**
      2. Tekan ikon **``(i)``** disebelah kanan tulisan **``adsbagong.conf``**.
      3. Pilih **``Replace Policy``**.
      4. Tekan ikon **``(i)``** disebelah kolom **``Find``**, lalu cari **``DIRECT``**.
      5. Setelah itu, Tekan ikon **``(i)``** disebelah kolom **``Replace``**, lalu cari **``LOCAL SERVERS``**.
      6. Tekan **``DONE``**, lalu tunggu beberapa saat.
      7. Config selesai diubah.
  - Jika ingin kembali menggunakan koneksi langsung alias tanpa VPN, silahkan ikuti langkah berikut:
      1. Ikuti langkah diatas sampai selesai.
      2. Hanya saja, ubah kolom **``Find``** (pada pilihan **``Replace Policy``**) ke **``LOCAL SERVERS``**.
      3. Lalu ubah kolom **``Replace``** ke **``DIRECT``**.
      4. Selesai.
  