---
title: Rule Port Game OpenClash
tags: [OpenWrt, OpenClash, Rule Provider, Google]
style: fill
color: warning
description: Rule port game only untuk in-game di OpenClash.
---

Openclash adalah aplikasi OpenWrt yang multifungsi dalam memberikan kemudahan kepada penggunanya. Salah satu fitur mantap yang disediakan oleh aplikasi ini adalah fitur RULE PROVIDER.

Dengan fitur RULE PROVIDER ini, pengguna dapat mengarahkan koneksi ke tujuan yang diinginkan. Didalam fitur ini juga terdapat sesuatu fungsi untuk mengalihkan akses koneksi dari situs tertentu ke rule tertentu. 

Kali ini saya akan membagikan rule **Port Game** yang biasanya saya gunakan untuk mode direct gaming. Didalam config ini mencakup beberapa game diantaranya:

1. Genshin Impact
2. Mobile Legends
3. Arena of Valor
4. Freefire
5. PUBG Mobile

Hal penting yang perlu disiapkan:

1. Config yaml punya sendiri atau bisa ambil contoh config yang sudah saya bagikan di postingan [Base Config OpenClash by Helmi Amirudin](base-config-openclash-helmi).
2. Sudah melakukan konfigurasi OpenClash seperti postingan saya di [Base Config OpenClash by Helmi Amirudin](base-config-openclash-helmi).


Lanjut contoh tutorialnya
 
1. Edit **config.yaml** yang kalian gunakan.
2. Cari tulisan **``rule-providers:``**.
3. Tambahkan baris dibawah ini, letakkan dibawah bagian **``rule-providers:``**. (Ini hanya contoh, untuk versi lengkapnya bisa diunduh nomor 5).


	```
	  Game_ArenaOfValor_Ports:
		type: http
		behavior: classical
		path: "./rule_provider/Game_ArenaOfValor_Ports.yaml"
		url: https://raw.githubusercontent.com/helmiau/clashrules/main/rule_provider/Game_ArenaOfValor_Ports.yaml
		interval: 86400

	```



4. Tambahkan baris dibawah ini, letakkan dibawah tulisan **``rules:``**.


	```
	- RULE-SET,Game_ArenaOfValor_Ports,DIRECT
	```



5. Untuk contoh config, rule selengkapnya dan contoh peletakan rulenya bisa diunduh [disini](https://safefileku.com/download/NoiNq3BZKSqxfER). Jangan lupa ubah ekstensi file dari **.txt** menjadi **.yaml**.

Penerapannya sama seperti postingan [Adblocking via OpenClash](adblocking-openclash), yaitu dengan menggunakan file config dari [Base Config OpenClash by Helmi Amirudin](base-config-openclash-helmi).

6. Setelah mengaktifkan OpenClash dengan menggunakan config ini, segera masuk ke **panel YACD**, pilih **Proxies** lalu cari **GoogleFamily** dan pilih proxy yang ingin digunakan.