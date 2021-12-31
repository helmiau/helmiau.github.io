---
title: Mengganti Kernel OpenWrt s905x
tags: [s905x, OpenWrt, Kernel]
style: fill
color: secondary
description: Ingin mengganti kernel OpenWrt pada firmware yang kamu pakai sekarang? Simak disini caranya.
---

Sebagai pengguna bar-bar yang doyan oprek OpenWrt, terutama pengguna STB s905x. Kali ini, mimin bakal bagikan cara mengganti kernel OpenWrt s905x.

Pada contoh kali ini, penulis akan mencontohkan penggantian kernel **5.4.150** menjadi **5.16-rc6**.

![image2](https://user-images.githubusercontent.com/20932301/147764151-01fd8d5a-ae27-4eb7-94b7-8318bb5708a5.png)

### Alat dan Bahan

1. Firmware OpenWrt yg ingin kita ganti kernelnya. Pada contoh kali ini, penulis menggunakan firmware dengan kernel **5.4.150**.
2. Firmware OpenWrt berisi kernel yang di inginkan. Pada contoh kali ini, penulis menggunakan firmware dengan kernel **5.16-rc6**.
3. Sistem Operasi Linux (saya menggunakan Ubuntu). Kalo ada yang tanya **Windows bisa gak?**, jawabannya sih enggak.

### Penerapan

1. Unduh dan siapkan semua bahan di atas.
2. Ekstrak firmware **tgz** atau **tar.xz** yang berisi kernel pengganti, hingga menghasilkan file **.img**.

	![image4](https://user-images.githubusercontent.com/20932301/147764359-9109f199-72b5-4c0d-ad44-0c20a094cd1d.png)
	
3. Mount file .img dari hasil ekstrak diatas, hingga memunculkan 2 partisi yaitu **BOOT** dan **ROOTFS**.

	![image3](https://user-images.githubusercontent.com/20932301/147764396-efea112c-8df1-4b68-84a4-005623e52f2d.png)
	
4. Buat folder baru dengan nama firmware, versi firmware dan kernelnya tanpa spasi, contoh **helmiwrt-2021-12-29-5.4.167** atau bisa juga **reyre-le4-5.4.150**.
5. Buat folder baru dengan nama **BOOT** didalam folder yang sudah dibuat diatas, lalu copy partisi **BOOT** beserta isinya ke folder tersebut.
5. Copy folder dibawah ini pada partisi **ROOTFS** ke folder yang bernama firmware dan kernel.

	```
	lib/modules
	lib/wifi
	lib/netifd/wireless
	etc/modules.d
	```
	
6. Setelah itu, unmount partisi **BOOT** dan **ROOTFS**.

	![image5](https://user-images.githubusercontent.com/20932301/147764448-187ebf6b-2715-4b2c-a49a-85013b2fc3e2.png)

	
7. Burn/Flash firmware yang akan diganti kernelnya ke sdcard/flashdisk. Lalu masukkan ke PC/Komputer Linux, hingga muncul 2 partisi yaitu **BOOT** dan **ROOTFS**.
8. Buka file manager dari terminal dengan perintah ```sudo nautilus```, untuk mengubah isi partisi **ROOTFS**.
9. Salin isi folder yang sudah disiapkan tadi, lalu timpakan ke firmware yang sudah di burn/flash pada sdcard/flashdisk. Pastikan struktur foldernya sesuai.
10. Beres deh, tinggal colok sdcard/flashdisk ke STB, jadi kayak di screenshot dibawah ini.

![image1](https://user-images.githubusercontent.com/20932301/147764479-9b8acf85-2f7c-4054-a6b4-2b5711fa283e.png)

Yah mungkin itu aja lah ya, jangan kepanjangan.

penulis ucapkan sekian dan terima kasih.

Credits
- [Dokumen oleh Mbah Raditya Budi Handoko](https://docs.google.com/document/d/164E3M8WtwijTpcUkTdMtwMMQ2nwwMijJ/edit?fbclid=IwAR2GaDU_31upcBeKOQGzHSA9d6jdDg3W98VQ38_OvQhkx9NKIHXoBSi1R8g)
