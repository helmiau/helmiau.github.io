---
title: OpenJDK for OpenWrt
tags: [OpenWrt, OpenJDK, JDK, Java]
style: fill
color: primary
description: Follow this tutorial to install Java JDK to run Java app on OpenWrt.
---

<br>
{% capture list_items %}
Tutorial Bahasa Indonesia
English Tutorial
Known Bugs
References
{% endcapture %}
{% include elements/list.html title="Page Index / Daftar Isi" type="toc" %}

## Tutorial Bahasa Indonesia

### Jalankan OpenJDK di OpenWrt (musl-based)
- Script pada tutorial [Reinhart Previano s'](https://dev.to/reinhart1010/apparently-yes-you-can-install-openjdk-java-jre-and-yacy-on-openwrt-1e33) hanya bekerja untuk jdk8 dan jdk11 dengan versi lawas dari paket JDK yang ada.
- Script dari [josedelinux](https://github.com/josedelinux/openwrt-jdk) akan otomatis mengunduh OpenJDK di OpenWrt, tetapi terlalu rumit karena harus menyiapkan beberapa pengaturan terlebih dahulu, dia menggunakan java untuk server Minecraft (papermc).
- Script versi Helmi Amirudin menyediakan:
	- Instalasi mudah.
	- Mendukung banyak platform perangkat (architectures).
	- Bisa memilih versi OpenJDK sesuai selera (seperti jdk8,jdk9 or something else).
	- Bisa memilih versi rilisan OpenJDK (you can get version number from 

### Informasi Dukungan
- Mendukung architectures dibawah ini:

	- `aarch64`
	- `armhf`
	- `armv7`
	- `ppc64le`
	- `s390x`
	- `x86` this 32bit
	- `x86_64`

- Mendukung versi OpenJDK: `jdk8` ~ `jdk17`
- Mendukung rilis versi OpenJDK: `v3.0` ~ `v3.17`


### Persiapan

- Koneksi internet
- Penyimpanan kosong lebih dari 800mb


### Pemasangan

1. Buka Putty/Terminal/TTYD/XTERM or similar apps like these.
2. Jalankan perintah terminal di bawah ini untuk mengunduh script **`installjdk`** ke OpenWRT (pilih salah satu dari kedua cara dibawah):

	`wget` installation:

	```sh
	wget https://raw.githubusercontent.com/helmiau/openwrt-jdk/main/installjdk.sh -O /root/installjdk && chmod +x /root/installjdk
	```

	`curl` installation:

	```sh
	curl -sL https://raw.githubusercontent.com/helmiau/openwrt-jdk/main/installjdk.sh > /root/installjdk && chmod +x /root/installjdk
	```

2. Jalankan perintah instalasi, seperti contoh berikut (sesuaikan dengan perangkat masing-masing):
	
	Informasi perintah:
	
	```
	./installjdk device_architecture jdk_version release_version
	```
	
	- Ganti `device_architecture` dengan arsitektur perangkatmu dari daftar **`Mendukung architectures dibawah ini`** diatas.
	- Ganti `jdk_version` dengan **``versi OpenJDK`** diatas.
	- Ganti `release_version` dengan **`rilis versi OpenJDK`** diatas.
	
	Contoh:
	
	**Saya ingin memasang openjdk8 untuk x86 32-bit dengan rilisan openjdk terbaru**, maka jalankan:
	
	```sh
	./installjdk x86 jdk8
	```
	
	**Saya ingin memasang openjdk11 untuk aarch64 dengan versi rilis v3.14**, maka jalankan:
	
	```sh
	./installjdk aarch64 jdk11 v3.14
	```

	
3. Reboot lalu jalankan `java -version` di terminal untuk melihat versi Java yang terpasang.

## English Tutorial

### Run OpenJDK on OpenWrt (musl-based)
- [Reinhart Previano s'](https://dev.to/reinhart1010/apparently-yes-you-can-install-openjdk-java-jre-and-yacy-on-openwrt-1e33) tutorial is for jdk8 and jdk11 script only with older packages links
- [josedelinux](https://github.com/josedelinux/openwrt-jdk) scripts will automatically download `musl-based` OpenJDK to current directory, it works on my raspberry pi 3b+ , my Minecraft server(papermc)  works fine too
- My improvements will do:
	- Easy-install.
	- Support multiple platform (architectures).
	- Selectable OpenJDK version (like jdk8,jdk9 or something else).
	- Selectable OpenJDK release version (you can get version number from 

### Supported Information
- Available supported device architectures:

	- `aarch64`
	- `armhf`
	- `armv7`
	- `ppc64le`
	- `s390x`
	- `x86` this 32bit
	- `x86_64`

- Available OpenJDK version: `jdk8` ~ `jdk17`
- Available OpenJDK release version: `v3.0` ~ `v3.17`


### Requirements

- Internet connection
- Empty storage space more than 800mb


### Installation

1. Open Putty/Terminal/TTYD/XTERM or similar apps like these.
2. Run commands below to download **`installjdk`** script to your OpenWRT (choose one of installation method below):

	`wget` installation:

	```sh
	wget https://raw.githubusercontent.com/helmiau/openwrt-jdk/main/installjdk.sh -O /root/installjdk && chmod +x /root/installjdk
	```

	`curl` installation:

	```sh
	curl -sL https://raw.githubusercontent.com/helmiau/openwrt-jdk/main/installjdk.sh > /root/installjdk && chmod +x /root/installjdk
	```

2. Select one of below sample installation:
	
	Command informations:
	
	```
	./installjdk device_architecture jdk_version release_version
	```
	
	- Replace `device_architecture` with your device arhitecture from **`supported device architectures`** above.
	- Replace `jdk_version` with **``OpenJDK version`** above.
	- Replace `release_version` with **`OpenJDK release version`** above.
	
	Example(s):
	
	**i want to install openjdk8 for x86 32-bit with latest release version**, then i run:
	
	```sh
	./installjdk x86 jdk8
	```
	
	**i want to install openjdk11 for aarch64 with release version v3.14**, so i run:
	
	```sh
	./installjdk aarch64 jdk11 v3.14
	```

	
3. Reboot and run `java -version` on terminal to see installed java version on your machine.

### Known Bugs
- Java with SSL Certificate is still bug, so you can run java app containing ssl certificate like this issue [Failed to get extensions from GitHub caused by the trustAnchors parameter must be non-empty](https://github.com/Suwayomi/Tachidesk-Server/issues/513)

### References
- [josedelinux/openwrt-jdk](https://github.com/josedelinux/openwrt-jdk)
- [Reinhart Previano's blog](https://dev.to/reinhart1010/apparently-yes-you-can-install-openjdk-java-jre-and-yacy-on-openwrt-1e33)
- [Adoptium Temurin OpenJDK Build Doc](https://github.com/adoptium/temurin-build/tree/master/security)
- opkg checker and installer, internet checker, vpn manager, gmt selection codes by [Helmi Amirudin](https://helmiau.com)

