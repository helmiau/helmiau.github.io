---
title: Install Speedtest CLI by Ookla for OpenWrt
tags: [CLI, Speedtest, OpenWrt, Terminal]
style: fill
color: danger
description: This speedtest is taken from Ooklaa Speedtest, which contain link after test.
---

<p align="center">
  <img src="https://user-images.githubusercontent.com/20932301/112409164-8d712c00-8d4b-11eb-9e1a-54a32c9b0b3d.png" alt="Speedtest Prev"/>
</p>

### Requirements [EN]
1.	Device with OpenWrt with arm/aarch/x86 architecture.
2.	10MB storage.
3.	Internet connection.
4.	Terminal/Putty/Termius.

### Perlengkapan [ID]
1.	Perangkat OpenWrt dengan arsitektur arm/aarch/x86.
2.	10MB penyimpanan.
3.	Koneksi internet.
4.	Terminal/Putty/Termius.

### Installation & Usage [EN]
1.	Copy scripts below

	```
	opkg update && opkg install tar
	export SPNET="arm"
	wget --show-progress -qO- https://install.speedtest.net/app/cli/ookla-speedtest-1.1.0-$SPNET-linux.tgz | tar xOvz > /bin/speedtest
	chmod +x /bin/speedtest
	unset SPNET
	```

2.	Paste to Terminal/Putty/Termius.
3.	Change `arm` from script above according your OpenWrt architecture. You can see sample below :

	```
	#=================================================
	# Platform List Information Support for speedtest.net
	#=================================================
	# arm		= RaspberryPi 1, 2, OrangePi zero.
	# aarch64	= RaspberryPi 3, 4, NanoPi r2c, r2s, r4s, OrangePi R1 Plus.
	# x86_64	= 64bit Laptop/PC.
	# i386		= 32bit Laptop/PC.
	#=================================================
	```
	
4. Run **```speedtest```** command using Terminal/Putty/Termius to use Speedtest by Ookla.

### Pemasangan dan Penggunaan [ID]
1.	Salin script dibawah ini

	```
	opkg update && opkg install tar
	export SPNET="arm"
	wget --show-progress -qO- https://install.speedtest.net/app/cli/ookla-speedtest-1.1.0-$SPNET-linux.tgz | tar xOvz > /bin/speedtest
	chmod +x /bin/speedtest
	unset SPNET
	```

2.	Letakkan di Terminal/Putty/Termius.
3.	Ubah `arm` pada script diatas ke arsitektur yang sesuai dengan OpenWrt mu. Dibawah ini contoh

	```
	#=================================================
	# Platform List Information Support for speedtest.net
	#=================================================
	# arm		= RaspberryPi 1, 2, OrangePi zero.
	# aarch64	= RaspberryPi 3, 4, NanoPi r2c, r2s, r4s, OrangePi R1 Plus.
	# x86_64	= Laptop/PC 64bit.
	# i386		= Laptop/PC 32bit.
	#=================================================
	```
	
4. Jalankan perintah **```speedtest```** pada Terminal/Putty/Termius untuk menggunakan Speedtest by Ookla ini.

### Credits
- [Speedtest Net](https://speedtest.net)
- [Helmi Amirudin](http://www.helmiau.com)

## DO NOT CREATE ANY VIDEOS USING THIS SOURCE WITHOUT HELMI AMIRUDIN PERMISSION

## DILARANG MEMBUAT VIDEO TUTORIAL MENGGUNAKAN SUMBER DARI SINI TANPA IZIN HELMI AMIRUDIN

<h6 align="center">Copyright by <a href="http://www.helmiau.com">Helmi Amirudin</a> ® 2021 <br> Thank You ! 🤝</h6>
