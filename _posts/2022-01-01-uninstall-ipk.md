---
title: Uninstall Paket OpenWrt
tags: [OpenWrt, Uninstall, IPK]
style: fill
color: danger
description: Hapus banyak paket OpenWrt secara langsung, tapi ribet di awal doang.
---

Terkadang pembuat firmware custom seperti **HelmiWrt** memasukkan banyak paket aplikasi yang sudah terpasang di firmwarenya untuk memastikan pengguna mendapatkan pengalaman guna yang lebih besar. Akan tetapi, sering kali sebagai pengguna OpenWrt biasa, hanya membutuhkan beberapa paket aplikasi saja.

Kali ini penulis akan membuat dokumentasi cara menghapus paket OpenWrt yang tidak digunakan dalam 1 perintah terminal, tentunya ini ribet di awal ya tapi mudah di ke-2 kali dan selanjutnya.

### Memeriksa Paket
1. Untuk memeriksa paket yang terpasang pada firmware, buka terminal/TTYD/Termius/JuiceSSH dan jalankan perintah dibawah ini

	```
	opkg list-installed 
	```
	
	Contoh :
	
	![image](https://user-images.githubusercontent.com/20932301/147840977-610df283-9f12-45c2-b8bf-2957b5174b41.png)

2. Atau juga bisa menggunakan tambahan ``` | grep nama_paket``` untuk melihat paket dengan nama tertentu.

	```
	opkg list-installed | grep nama_paket
	```
	
	Contoh :
	
	![image](https://user-images.githubusercontent.com/20932301/147840984-74e0ec6c-c9a6-483b-8e30-7b7f23cf7c08.png)

3. Atau bisa juga menambahkan beberapa kata seperti ``` | grep "nama_paket_1\|nama_paket_2\|nama_paket_3"``` untuk melihat paket dengan berbagai nama yang berbeda

	```
	opkg list-installed | grep "nama_paket_1\|nama_paket_2\|nama_paket_3"
	```

	Ubah `nama_paket_1`, `nama_paket_2` dan `nama_paket_3` dengan nama paket openwrt yang ingin dihapus.

	Jika ingin menambah paket setelah `nama_paket_3`, tambahkan terlebih dahulu tanda `\|` lalu susulkan nama paket lain setelahnya.
	
	Contoh :
	
	![image](https://user-images.githubusercontent.com/20932301/147841000-ddff4af6-8914-4106-9187-921f152ff504.png)
	
	Contoh diatas menampilkan paket-paket yang mengandung kata `clash`, `vpn`, dan `argon`. 
	
### Menghapus Paket

![image](https://user-images.githubusercontent.com/20932301/147840968-85768fe2-c018-4454-b698-77b926057550.png)

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
