---
title: Fix USB To LAN and HUB HelmiWrt OS
tags: [USB To LAN, UTL, USB HUB, HelmiWrt OS]
style: fill
color: success
description: Fix USB To LAN and USB HUB not connected automatically on HelmiWrt OS boot.
---


### Masalah yang ditemukan

- Perangkat USB tidak terdeteksi secara otomatis setelah reboot/restart.
- Harus lepas-pasang perangkat USB agar bisa digunakan.


### Problem found

- USB devices (modems, printer, etc) not detected on OpenWrt after reboot/restart.
- User must re-plugging USB to LAN/HUB until it can be used.


### Video Tutorial

[Lihat Video Tutorial](https://www.youtube.com/watch?v=aVH-xlBWG2o)

{% include elements/video.html id="aVH-xlBWG2o" %}

###  Langkah Perbaikan

1. Setelah booting HelmiWrt OS, buka Putty/XTERM atau Terminal TTYD (gunakan [http://192.168.1.1:7681/](http://192.168.1.1:7681/) jika aplikasi LuCI TTYD tidak bisa dibuka)
2. Jalankan perintah `helmiutl` untuk melihat daftar/list perangkat USB yang terhubung (modem, usb to lan, usb hub, printer, dll).
3. Jalankan perintah `helmiutl nama_device_atau_id_device`.
4. Untuk restart secara otomatis setiap reboot, tambahkan `helmiutl nama_device/id_device` di `/etc/rc.local`


Notes (video):
Langkah ke-4, saya akan menggunakan HUAWEI dan LAN untuk dimasukkan ke rc.local (agar di restart setiap booting)

```sh
/bin/helmiutl HUAWEI
/bin/helmiutl LAN
```

perintah diatas akan merestart 3 device sekaligus ketika booting restart.

Di dalam video, saya memilih untuk merestart device `HUAWEI_MOBILE` (2 modem hilink)
Pada interface Network, device sudah terdeteksi, tapi akan saya restart terlebih dahulu menggunakan helmiutl.
bisa menggunakan salah satu dari perintah dibawah ini:
1. `helmiutl HUAWEI`
2. `helmiutl 12d1`
3. `helmiutl 018 && helmiutl 017`

Untuk restart seluruh USB, gunakan perintah `helmiutl Number`.

Perlu diperhatikan bagi pengguna USB untuk booting OpenWrt agar tidak menggunakan perintah helmiutl Number, karena perintah tersebut akan merestart keseluruhan USB termasuk USB yang digunakan untuk booting.


### Tutorial Video

[Watch Video](https://www.youtube.com/watch?v=aVH-xlBWG2o)

{% include elements/video.html id="aVH-xlBWG2o" %}


###  Fixing Steps

1. After HelmiWrt OS booted up, Open Putty/XTERM or Terminal TTYD (use [http://192.168.1.1:7681/](http://192.168.1.1:7681/) if LuCI TTYD error)
2. Run `helmiutl` command to see list of connected devices through USB (modem, usb to lan, usb hub, printer, dll).
3. Run `helmiutl device_name_or_device_id` to reconnect device.
4. Add `helmiutl device_name_or_device_id` to `/etc/rc.local` before `exit 0` line to reconnect devices automatically after boot.


Notes (video):
At 4th step, i will add `HUAWEI` and `LAN` to `/etc/rc.local` (this command will re-plugging usb automatically after boot)

```sh
/bin/helmiutl HUAWEI
/bin/helmiutl LAN
```

above commands will restart 3 device at the same time while HelmiWrt OS restarted.

I try to restart `HUAWEI_MOBILE` (2 modem hilink) using `helmiutl` by using one of commands below:
1. `helmiutl HUAWEI`
2. `helmiutl 12d1`
3. `helmiutl 018 && helmiutl 017`

Use `helmiutl Number` command to restart all USB connected to HelmiWrt OS.

For USB Booting users, i recommend you to not use `helmiutl Number` command, because this will restarting all of your USB devices including USB boot.
