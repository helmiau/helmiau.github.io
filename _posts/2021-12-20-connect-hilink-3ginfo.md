---
title: Menghubungkan Modem HiLink ke LuCI 3G Info OpenWrt
tags: [OpenWrt, HiLink, Modem, Huawei]
style: fill
color: warning
description: Dokumen ini berisi tentang cara menghubungkan modem HiLink seperti e3372, e5577, e5673 ke aplikasi 3g info.
---

Sebagai pengguna modem HiLink seperti seperti e3372, e5577 dan e5673, tentu membutuhkan kemudahan untuk memeriksa modem dari aplikasi OpenWrt, agar tidak perlu membuka halaman baru untuk melihat informasi modem HiLink yang sudah tersambung pada perangkat. Pada dokumen ini, penulis akan menjelaskan cara menghubungkan modem HiLink ke aplikasi LuCI 3G Info pada OpenWrt.

1.	Pastikan driver modem HiLink sudah terpasang pada OpenWRt mu, jika paket belum terpasang, kamu bisa memasang paket dengan menggunakan perintah ```opkg update && opkg install kmod-usb-net-rndis kmod-usb-net-cdc-ether usb-modeswitch```
	
2.	Pastikan paket 3G Info sudah terpasang pada OpenWrt mu, tampilan di LuCI nya seperti dibawah ini
	
	![image](https://user-images.githubusercontent.com/20932301/146864758-759e93e5-fdd4-4bc1-a31c-41ee3cd4c55a.png)

	Kamu juga dapat memeriksa paket ini dengan terminal dengan menjalankan perintah ```opkg list | grep 3ginfo``` pada Terminal/Putty, jika balasan perintah seperti gambar dibawah ini, maka tandanya paket sudah terpasang
	
	![image](https://user-images.githubusercontent.com/20932301/146864915-cc478a5b-ba02-4a11-95e4-db74cd8deb46.png)

	Jika paket belum terpasang, kamu bisa pasang paket tersebut dari [GitHub nya om Nugroho](https://github.com/lrdrn/my-opkg-repo) dengan menggunakan tutorial [dari sini](https://www.helmiau.com/blog/custom-opkg-server)
	
3.	Setelah paket aplikasi diatas terpasang, sambungkan modem HiLink ke port USB perangkat OpenWrt mu.

4.	Buka IP OpenWrt (contoh: 192.168.1.1).
	
	![image](https://user-images.githubusercontent.com/20932301/146865111-54fd4fd5-a195-45b1-9b5b-15228501b560.png)

5.	Buka **Network -> Interfaces**, lalu buat interface baru dengan menggunakan sumber Phisychal ke modem HiLink yang sudah tersambung tadi. Contoh disini akan membuat interface dengan nama **ueth1**
	
	Pada tab **General Setup** atur protocol ke **DHCP Client**

	![image](https://user-images.githubusercontent.com/20932301/146865238-34d2532e-6c4e-4c7a-b4d0-e239eb1fd718.png)
	
	Pada tab **Advanced Settings** atur seperti dibawah ini
	
	![image](https://user-images.githubusercontent.com/20932301/146865359-1c02bbfa-e956-4ca7-8461-cc19e0c00fce.png)

	Pada tab **Physichal Settings** arahkan **Interface** ke **eth1**
	
	![image](https://user-images.githubusercontent.com/20932301/146865622-339ff412-6bd3-4722-b4d0-ef9d29ef45c3.png)

	Pada tab **Firewall Settings** arahkan ke **wan**
	
	![image](https://user-images.githubusercontent.com/20932301/146865832-bc206532-bffa-445c-8d00-9181ef3be420.png)


6.	Buka **Modem -> Information about 3G/4G connection**, lalu buka tab **Configuration** dan isi kolom **Network** dengan nama interface pada **Network -> Interfaces** yang sudah di atur tadi. Pada contoh kali ini, penulis menggunakan **ueth1**.
	
	Pilih kolom **Device** dengan **--custom--**, lalu tuliskan IP Web UI Modem HiLink. Pada contoh kali ini, penulis menggunakan **192.168.9.1**.
	
	Atur kolom **Language** ke **English**.
	
	![image](https://user-images.githubusercontent.com/20932301/146866061-d3669876-c18b-4cb7-a54e-ce22327f8e15.png)

7.	Tekan **Save & Apply**, lalu kembali ke tab **Detail** dan tunggu informasi modem HiLink dimuat.
	
	![image](https://user-images.githubusercontent.com/20932301/146866102-3c1a0347-9e0a-4fb1-94f5-04ddcfe59f4b.png)

Yah mungkin itu aja, penulis ucapkan sekian dan terima kasih.
