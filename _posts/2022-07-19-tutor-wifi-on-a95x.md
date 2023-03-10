---
title: Tutor A95x Wifi ON
tags: [A95x, OpenWrt]
style: fill
color: primary
description: Tutorial singkat atur wifi A95x agar aktif.
---

Gak usah kelamaan ya, langsung masuk ke poinnya.

1. Download [dtb disini](https://mediafire.com/file/jiwvayou4w5d0yc/meson-gxm-amlogic-a95x-a2.dtb/file) & ganti dtb firmware ke **meson-gxm-amlogic-a95x-a2.dtb**
2. Jalankan printah dibawah ke terminal

	```
	echo "ath10k_core" > /etc/modules.d/ath10k_core
	echo "ath10k_sdio" > /etc/modules.d/ath10k_sdio
	echo "ath10k_usb" > /etc/modules.d/ath10k_usb
	rm /etc/config/wireless
	```

3. Cek folder **/lib/firmware** ada folder ath10k atau tidak. 
4. Kalo tidak ada download file [ath10k.zip disini](https://mediafire.com/file/a51x6vt6a6c9gpv/ath10k.zip/file), Lalu extract file ath10k.zip kemudian copy ke **/lib/firmware**.
5. Reboot.
6. Cek menu **LuCI -> Wireless** sudah muncul atau belum.
7. Jika sudah, Masuk ke LuCI -> Wireless
8. Delete wifi.
9. Add ulang wifi.
10. Done.


Note:
- tested wifi on di kernel 5.15 tapi silahkan di coba dahulu ke versi kernel firmware masing-masing.
- wifi untuk s905x kernel 6 jgn dipake dlu, drivernya masih ngaco, blm tak perbaiki

Best regards, mbah Andi Rijal Habibi & mbah Raditya Budi Handoko.
