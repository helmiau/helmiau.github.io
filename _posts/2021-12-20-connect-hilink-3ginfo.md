---
title: Menghubungkan Modem HiLink ke LuCI 3G Info OpenWrt
tags: [OpenWrt, HiLink, Modem, Huawei]
style: fill
color: danger
description: Dokumen ini berisi tentang cara menghubungkan modem HiLink seperti e3372, e5577, e5673 ke aplikasi 3g info.
---

Sebagai pengguna modem HiLink seperti seperti e3372, e5577 dan e5673, tentu membutuhkan kemudahan untuk memeriksa modem dari aplikasi OpenWrt, agar tidak perlu membuka halaman baru untuk melihat informasi modem HiLink yang sudah tersambung pada perangkat. Pada dokumen ini, penulis akan menjelaskan cara menghubungkan modem HiLink ke aplikasi LuCI 3G Info pada OpenWrt.

1.	Pastikan driver modem HiLink sudah terpasang pada, periksa paket-paket tersebut dengan menjalankan perintah ```opkg list | grep 3ginfo``` pada Terminal/Putty, jika balasan perintah seperti gambar dibawah ini, maka tandanya paket sudah terpasang
	
		Jika paket belum terpasang, kamu bisa pasang paket dengan menggunakan perintah ```opkg update && opkg install kmod-usb-net-rndis kmod-usb-net-cdc-ether usb-modeswitch```
	
2.	Pastikan paket 3G Info sudah terpasang pada OpenWrt mu, tampilan di LuCI nya seperti dibawah ini
	
		Kamu juga dapat memeriksa paket ini dengan terminal dengan menjalankan perintah ```opkg list | grep 3ginfo``` pada Terminal/Putty, jika balasan perintah seperti gambar dibawah ini, maka tandanya paket sudah terpasang
	
		Jika paket belum terpasang, kamu bisa pasang paket tersebut dari [GitHub nya om Nugroho](https://github.com/lrdrn/my-opkg-repo)
	
3.	Setelah paket aplikasi diatas terpasang, sambungkan modem HiLink ke port USB perangkat OpenWrt mu.

4.	Buka IP OpenWrt (contoh: 192.168.1.1).

5.	Buka **Network -> Interfaces**, lalu buat interface baru dengan menggunakan sumber Phisychal ke modem HiLink yang sudah tersambung tadi.

6.	Buka **Modem -> Information about 3G/4G connection**, lalu buka tab **Configuration** dan isi kolom **Network** dengan nama interface pada **Network -> Interfaces** yang sudah di atur tadi. Pada contoh kali ini, penulis menggunakan **ueth1**.
	
	Pilih kolom **Device** dengan **--custom--**, lalu tuliskan IP Web UI Modem HiLink. Pada contoh kali ini, penulis menggunakan **192.168.9.1**.
	
	Atur kolom **Language** ke **English**.
	
7.	Tekan **Save & Apply**, lalu kembali ke tab **Detail** dan tunggu informasi modem HiLink dimuat.

Sekian dan terima kasih.
