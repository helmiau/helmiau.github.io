---
title: Uninstall Paket OpenWrt
tags: [OpenWrt]
style: fill
color: info
description: Hapus banyak paket OpenWrt secara langsung, tapi ribet di awal doang.
---

Terkadang pembuat firmware custom seperti **HelmiWrt** memasukkan banyak paket aplikasi yang sudah terpasang di firmwarenya untuk memastikan pengguna mendapatkan pengalaman guna yang lebih besar. Akan tetapi, sering kali sebagai pengguna OpenWrt biasa, hanya membutuhkan beberapa paket aplikasi saja.

Kali ini penulis akan membuat dokumentasi cara menghapus paket OpenWrt yang tidak digunakan dalam 1 perintah terminal, tentunya ini ribet di awal ya tapi mudah di ke-2 kali dan selanjutnya.

### Memeriksa Paket
1. Untuk memeriksa paket yang terpasang pada firmware, buka terminal/TTYD/Termius/JuiceSSH dan jalankan perintah dibawah ini

	```
	opkg list-installed 
	```

2. Atau juga bisa menggunakan tambahan ``` | grep nama_paket``` untuk melihat paket dengan nama tertentu.

	```
	opkg list-installed | grep nama_paket
	```

3. Atau bisa juga menambahkan beberapa kata seperti ``` | grep "nama_paket_1\|nama_paket_2\|nama_paket_3"``` untuk melihat paket dengan berbagai nama yang berbeda

	```
	opkg list-installed | grep "nama_paket_1\|nama_paket_2\|nama_paket_3"
	```

	Ubah `nama_paket_1`, `nama_paket_2` dan `nama_paket_3` dengan nama paket openwrt yang ingin dihapus.

	Jika ingin menambah paket setelah `nama_paket_3`, tambahkan terlebih dahulu tanda `\|` lalu susulkan nama paket lain setelahnya.
	
### Menghapus Paket
1. Buka terminal/TTYD/Termius/JuiceSSH, jalankan perintah dibawah ini

	```
	opkg remove $(opkg list-installed | grep nama_paket_1)
	```

2. Jika ingin menghapus banyak paket aplikasi, bisa menggunakan perintah tambahan ``` | grep "nama_paket_1\|nama_paket_2\|nama_paket_3"``` untuk melihat paket dengan berbagai nama yang berbeda

	```
	opkg remove $(opkg list-installed | grep "nama_paket_1\|nama_paket_2\|nama_paket_3")
	```

	Ubah `nama_paket_1`, `nama_paket_2` dan `nama_paket_3` dengan nama paket openwrt yang ingin dihapus.
	
	Jika ingin menambah paket setelah `nama_paket_3`, tambahkan terlebih dahulu tanda `\|` lalu susulkan nama paket lain setelahnya.

Sekian dan terima kasih