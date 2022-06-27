---
title: Rule Google Family OpenClash
tags: [OpenWrt, OpenClash, Rule Provider, Google]
style: fill
color: info
description: Rule Google Family di OpenClash.
---

Openclash adalah aplikasi OpenWrt yang multifungsi dalam memberikan kemudahan kepada penggunanya. Salah satu fitur mantap yang disediakan oleh aplikasi ini adalah fitur RULE PROVIDER.

Dengan fitur RULE PROVIDER ini, pengguna dapat mengarahkan koneksi ke tujuan yang diinginkan. Didalam fitur ini juga terdapat sesuatu fungsi untuk mengalihkan akses koneksi dari situs tertentu ke rule tertentu. 

Kali ini saya akan membagikan rule **Google Family** yang biasanya saya gunakan untuk mode pisah trafik ke VPN server selain Biznet. Hal penting yang perlu disiapkan:

1. Config yaml punya sendiri atau bisa ambil contoh config yang sudah saya bagikan di postingan [Base Config OpenClash by Helmi Amirudin](base-config-openclash-helmi).
2. Sudah melakukan konfigurasi OpenClash seperti postingan saya di [Base Config OpenClash by Helmi Amirudin](base-config-openclash-helmi).


Lanjut contoh tutorialnya
 
1. Edit **config.yaml** yang kalian gunakan.
2. Cari tulisan **``rule-providers:``**.
3. Tambahkan baris dibawah ini, letakkan dibawah bagian **``rule-providers:``**.


	```
	  BM_Google:
		type: http
		behavior: classical
		path: "./rule_provider/BM_Google.yaml"
		url: https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Google/Google.yaml
		interval: 86400

	```



4. Tambahkan baris dibawah ini, letakkan dibawah tulisan **``rules:``**.


	```
	- RULE-SET,BM_Google,GoogleFamily
	```



5. Untuk contoh config, rule selengkapnya dan contoh peletakan rulenya bisa diunduh [disini](https://safefileku.com/download/To6NrHuRw2IG4md). Jangan lupa ubah ekstensi file dari **.txt** menjadi **.yaml**.

Penerapannya sama seperti postingan [Adblocking via OpenClash](adblocking-openclash), yaitu dengan menggunakan file config dari [Base Config OpenClash by Helmi Amirudin](base-config-openclash-helmi).

6. Setelah mengaktifkan OpenClash dengan menggunakan config ini, segera masuk ke **panel YACD**, pilih **Proxies** lalu cari **GoogleFamily** dan pilih proxy yang ingin digunakan.