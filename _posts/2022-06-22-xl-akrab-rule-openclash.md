---
title: Rule Direct XL Akrab OpenClash
tags: [OpenWrt, OpenClash, Rule Provider, XL Akrab]
style: fill
color: success
description: Rule direct connection XL Akrab di OpenClash.
---

Openclash adalah aplikasi OpenWrt yang multifungsi dalam memberikan kemudahan kepada penggunanya. Salah satu fitur mantap yang disediakan oleh aplikasi ini adalah fitur RULE PROVIDER.

Dengan fitur RULE PROVIDER ini, pengguna dapat mengarahkan koneksi ke tujuan yang diinginkan. Didalam fitur ini juga terdapat sesuatu fungsi untuk mengalihkan akses koneksi dari situs tertentu ke rule tertentu. 

Kali ini saya akan membagikan rule XL Akrab yang biasanya saya gunakan untuk mode direct (tanpa vpn). Hal penting yang perlu disiapkan:

![](https://lh6.googleusercontent.com/WpWCG9lUIvjnopGPi7JI3DdAfkDOEdMTI4AF67ejFEF3S0rVa9z4nA45gHchFwDnPkbgqOjVL61zQJQV5rI6iIU_jFH5dG5jsz2LVFrP1lv32xZgm6vI7nhxuF_RrhyOqysw0X27EXeSm44TKQ)

1. Config yaml punya sendiri atau bisa ambil contoh config yang sudah saya bagikan di postingan [Base Config OpenClash by Helmi Amirudin](base-config-openclash-helmi).
2. Sudah melakukan konfigurasi OpenClash seperti postingan saya di [Base Config OpenClash by Helmi Amirudin](base-config-openclash-helmi).


Lanjut contoh tutorialnya
 
1. Edit **config.yaml** yang kalian gunakan.
2. Cari tulisan **``rule-providers:``**.
3. Tambahkan baris dibawah ini, letakkan dibawah bagian **``rule-providers:``**.


	```
	  XLAkrab:
		type: http
		behavior: classical
		path: "./rule_provider/myXL.yaml"
		url: https://raw.githubusercontent.com/helmiau/clashrules/main/rule_provider/myXL.yaml
		interval: 86400
	```



4. Tambahkan baris dibawah ini, letakkan dibawah tulisan **``rules:``**.


	```
	- RULE-SET,XLAkrab,DIRECT
	```



5. Untuk contoh config, rule selengkapnya dan contoh peletakan rulenya bisa diunduh [disini](https://safefileku.com/download/5xr0xK4pxdG1fvf). Jangan lupa ubah ekstensi file dari **.txt** menjadi **.yaml**.


Penerapannya sama seperti postingan [Adblocking via OpenClash](adblocking-openclash), yaitu dengan menggunakan file config dari [Base Config OpenClash by Helmi Amirudin](base-config-openclash-helmi). Untuk rulenya, silahkan unduh disini tambahannya bisa disimak dibawah ini:

6. Setelah mengaktifkan OpenClash dengan menggunakan config ini, segera masuk ke **panel YACD**, pilih **Proxies** lalu cari **XLAkrab** dan pilih proxy yang ingin digunakan.