---
title: Base Config OpenClash Helmiau
tags: [Tutorial, OpenClash, Loadbalance, VPN, OpenWrt]
style: fill
color: warning
description: Share base config loadbalance vpn dengan 2 modem HiLink di OpenClash.
---

Openclash adalah aplikasi OpenWrt yang multifungsi dalam memberikan kemudahan kepada penggunanya. Aplikasi ini memberikan fleksibilitas koneksi internet kepada penggunanya dengan memberikan beberapa pengaturan dan penyesuaian terkait hal tersebut.

Aplikasi ini juga memiliki pengaturan yang dapat menggabungkan koneksi 2 modem HiLink untuk memberikan kualitas koneksi internet lebih baik. Langsung saja ke poin-poinnya.

Contoh disini menggunakan firmware HelmiWrt pada Raspberry Pi 4, dengan modem HiLink e3372h dan e5673. Dan saya bagian apa yang sudah saya atur sendiri dan saya tidak menggunakan core meta.

1. Buka OpenClash.
2. Pilih tab **``Settings``**.
3. Pilih tab **``Operation Mode``**.

	1. Scroll ke bawah hingga ada tombol **``SWITCH PAGE TO FAKE-IP MODE``**, lalu klik tombol itu.
	2. Dibagian **``Select Mode``**, atur menjadi **``fake-ip-tun(tun mix mode)``**.
	3. Atur **``Select Stack Type``** ke **``System``**.
	4. Atur **``Proxy Mode``** ke **``Rule Proxy Mode``**.
	5. Centang **``Router-Self Proxy``**, sisanya yang dibawah tidak usah dicentang.




4. Pilih tab **``DNS Settings``** dibarisan yang sama dengan tab **``Operation Mode``**.

	1. Centang **``Redirect Local DNS Setting``** lalu **``Custom DNS Setting``** dan **``Persistence Fake-IP``**, sisanya tidak usah dicentang.




5. Lalu untuk config dasarnya, saya menggunakan [config ini](https://safefileku.com/download/HAW2NbCGre2mKVA). Sedikit informasi terkait dengan config ini:
	
	1. Jika ingin menggunakan config tersebut, silahkan [download filenya](https://safefileku.com/download/HAW2NbCGre2mKVA) terlebih dahulu, lalu ubah ekstensi namanya dari **.txt** menjadi **.yaml**.
	2. Didalam config ini terdapat contoh config trojan websocket mode bolak-balik yang saya gunakan untuk XL Akrab, tinggal ubah akunnya saja dengan akun yang kalian miliki.
	3. Config tersebut juga berisi contoh loadbalance 3 akun vpn dengan 2 modem hilink.
	4. Setelah mengaktifkan OpenClash dengan config ini, segera masuk ke **panel YACD**, lalu pilih **Proxies** dan cari **VPN**, kemudian ubah ke proxy yang ingin digunakan.




6. Anda juga bisa kombinasikan config ini dengan rule provider [Multi Direct Connection OpenClash]() atau [Adblock Rule](adblocking-openclash) atau [XL Akrab Rule](xl-akrab-rule-openclash) atau [Google Family Rule](google-family-rule-openclash) atau [Rule Game Port OpenClash](game-rule-openclash) yang saya bagikan di postingan lain.


Thanks to
1. Allah Ta'ala
2. https://lancellc.gitbook.io/clash/
3. https://github.com/Dreamacro/clash/wiki
4. https://github.com/vernesong/OpenClash/wiki
