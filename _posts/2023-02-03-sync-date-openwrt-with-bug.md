---
title: Sync OpenWrt Date from Custom Domain
tags: [Timezone, Sync Time, OpenWrt, Bash, Shell]
style: fill
color: info
description: Sync openwrt date by picking time from a domain, sinkronisasi waktu openwrt dengan bug domain.
---


## About

- Sync date openwrt by picking date from selected domain.
- Support time sync after device connected to internet.
- Connection checker (If **``cron``** mode used, script will checking a connection then restarting VPN apps after network re-connected)
- Automatically set timezone following **``LuCI - System - System - Timezone``** setting.
- Supported auto-restart VPN tunnels:
    - OpenClash
    - Passwall
    - ShadowsocksR
    - ShadowsocksR++
    - v2ray
    - v2rayA
    - xray
    - Libernet
    - Xderm Mini
    - Wegare STL


## Tentang

- Sinkronisasi waktu pada OpenWrt dengan mengambil data waktu dari domain terpilih.
- Mendukung sinkronisasi waktu setelah modem/koneksi internet tersedia.
- Pemeriksa koneksi (jika menggunakan mode **``cron``**, maka script akan memeriksa koneksi, lalu merestart aplikasi VPN jika koneksi internet tidak tersedia)
- Pengaturan timezone (zona waktu) secara otomatis mengikuti pengaturan **``LuCI - System - System - Timezone``**.
- Mendukung autorestart VPN tunnels:
    - OpenClash
    - Passwall
    - ShadowsocksR
    - ShadowsocksR++
    - v2ray
    - v2rayA
    - xray
    - Libernet
    - Xderm Mini
    - Wegare STL


### How This Script Work

1. When OpenWrt restarting, script will **``checking for network connection``**.
2. If no network detected, script will **``re-checking connection until device reconnected``**.
3. After device connected to internet, script will **``synchronize OpenWrt time``**.
4. If device have **``running VPN/Tunneling``**, script will **``restarting VPN app``** before time sync.


### Cara Kerja Script Ini

1. Setelah OpenWrt restart, script akan **``memeriksa koneksi internet``** terlebih dahulu.
2. Jika internet belum tersedia, script akan **``mengulangi pemeriksaan koneksi sampai koneksi terhubung``**.
3. Ketika koneksi sudah terhubung, script akan **``melakukan sinkronisasi waktu``**.
4. Jika ada **``aplikasi VPN/Tunneling yang berjalan``**, script akan **``merestart aplikasi VPN yang digunakan``** sebelum melakukan sinkronisasi waktu.


### Installation

1. Install **``needs dependencies``** first by opening Terminal/Putty/XTERM/etc:

    ```
    opkg update && opkg install curl wget
    ```

2. Download ``jam.sh`` script by copy and paste command below to terminal (choose only one of below commands)
    
    **`wget`** installation:
	
    ```
    wget --no-check-certificate "https://raw.githubusercontent.com/vitoharhari/sync-date-openwrt-with-bug/main/jam.sh" -O /usr/bin/jam.sh && chmod +x /usr/bin/jam.sh
    ```
	
    **`curl`** installation:
	
    ```
    curl -sL raw.githubusercontent.com/vitoharhari/sync-date-openwrt-with-bug/main/jam.sh > /usr/bin/jam.sh && chmod +x /usr/bin/jam.sh
    ```
	
3. Run command below to add **``jam.sh``** to **``LuCI -> System -> Startup -> Local Startup``**

    ```
    echo -e "#jam.sh autoboot\n/usr/bin/jam.sh time2.google.com" > /etc/rc.local
    ```

4. If you desire to use **``LuCI -> System -> Schedule Tasks``** or **`crontab`** (check connection every hour, then restart vpn if no connection available), just run command below:

    ```
    echo -e "#jam.sh cron\n0 * * * * /usr/bin/jam.sh time2.google.com cron\n" > /etc/crontabs/root
    ```

    - For cron time customization, see [crontab.guru](https://crontab.guru/#0_*_*_*_*) to create your own cron time.


### Pemasangan

1. Install **``paket yang dibutuhkan``** terlebih dahulu dengan membuka terminal/putty/dsb:

    ```
    opkg update && opkg install curl wget
    ```

2. Jalankan command dibawah untuk memasang script ``jam.sh`` (pilih salah satu saja)
    
    Pemasangan menggunakan **`wget`**
	
    ```
    wget --no-check-certificate "https://raw.githubusercontent.com/vitoharhari/sync-date-openwrt-with-bug/main/jam.sh" -O /usr/bin/jam.sh && chmod +x /usr/bin/jam.sh
    ```
	
    Pemasangan menggunakan **`curl`**
	
    ```
    curl -sL raw.githubusercontent.com/vitoharhari/sync-date-openwrt-with-bug/main/jam.sh > /usr/bin/jam.sh && chmod +x /usr/bin/jam.sh
    ```

3. Jalankan command dibawah di terminal untuk menambahkan **``jam.sh``** ke **``LuCI -> System -> Startup -> Local Startup``**:

    ```
    echo -e "#jam.sh autoboot\n/usr/bin/jam.sh time2.google.com" > /etc/rc.local
    ```

4. Jika menggunakan **``LuCI -> System -> Schedule Tasks``** atau disebut juga **`crontab`** (memeriksa koneksi setiap jam, lalu me-restart vpn jika koneksi tidak tersedia), jalankan perintah dibawah ini:

    ```
    echo -e "#jam.sh cron\n0 * * * * /usr/bin/jam.sh time2.google.com cron\n" > /etc/crontabs/root
    ```

    - Untuk kustomisasi waktu cron lainnya dapat dilihat di [crontab.guru](https://crontab.guru/#0_*_*_*_*)


### Advanced Usage

- Change **``time2.google.com ``** with **``bug/domain``** you choose. Example:

    ```
    /usr/bin/jam.sh m.youtu.be
    ```

- Jika menggunakan **``0p0k Telkomsel``** silahkan tambahkan **``:443``** dibelakang bug. Example:

    ```
    /usr/bin/jam.sh time2.google.com:443
    ```

- Jika ingin melakukan **``update/pembaruan script``**, silahkan lakukan perintah dibawah ini.

    ```
    /usr/bin/jam.sh update
    ```
	
    Tanda update berhasil adalah seperti ini:
	
    ```
    jam.sh: Updating script...
    jam.sh: Downloading script update...
    jam.sh: Update done...
    jam.sh: update file cleaned up!
    Usage: add domain/bug after script!.
    jam.sh: Missing URL/Bug/Domain!. Read https://github.com/vitoharhari/sync-date-openwrt-with-bug/blob/main/README.md for details.
    ```


### Pemakaian Lanjutan

- Ganti **``time2.google.com ``** dengan **``bug/domain``** kesayangan anda. Contoh:

    ```
    /usr/bin/jam.sh m.youtu.be
    ```

- Jika menggunakan **``0p0k Telkomsel``** silahkan tambahkan **``:443``** dibelakang bug. Contoh:

    ```
    /usr/bin/jam.sh time2.google.com:443
    ```

- Jika ingin melakukan **``update/pembaruan script``**, silahkan lakukan perintah dibawah ini.

    ```
    /usr/bin/jam.sh update
    ```
	
    Tanda update berhasil adalah seperti ini:
	
    ```
    jam.sh: Updating script...
    jam.sh: Downloading script update...
    jam.sh: Update done...
    jam.sh: update file cleaned up!
    Usage: add domain/bug after script!.
    jam.sh: Missing URL/Bug/Domain!. Read https://github.com/vitoharhari/sync-date-openwrt-with-bug/blob/main/README.md for details.
    ```


### Developers
- Base script and more enhancement codes from AlkhaNet by [Teguh Surya Mungaran](https://github.com/alkhanet26)
- GMT codes and more enhancement codes by [Vito H.S](https://github.com/vitoharhari)
- opkg checker and installer, internet checker, vpn manager, gmt selection codes by [Helmi Amirudin](https://helmiau.com)
