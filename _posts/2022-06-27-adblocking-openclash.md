---
title: Rule Adblock OpenClash
tags: [OpenWrt, OpenClash, Rule Provider, Adblock]
style: fill
color: danger
description: Tutorial dan script blokir iklan di OpenClash.
---

Openclash adalah aplikasi OpenWrt yang multifungsi dalam memberikan kemudahan kepada penggunanya. Salah satu fitur mantap yang disediakan oleh aplikasi ini adalah fitur RULE PROVIDER.

Dengan fitur RULE PROVIDER ini, pengguna dapat mengarahkan koneksi ke tujuan yang diinginkan. Didalam fitur ini juga terdapat sesuatu fungsi untuk memblokir akses dari situs tertentu. Mari kita langsung ke poin persiapan yang perlu:


1. Siapkan kuota minimal 30mb untuk mengunduh rule adblock yang cukup besar.
2. Siapkan text editor untuk mengubah isi config.yaml.


Contoh disini menggunakan firmware HelmiWrt pada Raspberry Pi 4, dengan modem HiLink e3372h dan e5673. Tentu saja menggunakan base config dari file config yang sudah pernah dibahas [Base Config OpenClash by Helmi Amirudin](base-config-openclash-helmi). Untuk contoh tambahannya bisa disimak dibawah ini:

1. Edit **config.yaml** yang kalian gunakan.
2. Cari tulisan **``rules:``**.
3. Tambahkan baris dibawah ini, letakkan diatas tulisan **``rules:``**.


	> Jika tidak ada **``rules:``**, maka tambahkan baris dibawah ini dibagian akhir/bawah sendiri dari file config kalian.


	```

	# Rule Providers Proxy Selector
	- name: Adblock
	  type: select
	  disable-udp: false
	  proxies:
	  - VPN
	  - REJECT

	# Rule Providers
	rule-providers:
	  Adblock:
		type: http
		behavior: classical
		path: "./rule_provider/energized_blu_adblock.yaml"
		url: https://raw.githubusercontent.com/hillz2/openclash_adblock/main/energized_blu_adblock.yaml
		interval: 86400

	```



4. Tambahkan baris dibawah ini, dibawah tulisan **``rules:``**.


	```
	rules:
	# Block ads
	- RULE-SET,Adblock,Adblock
	```


5. Untuk contoh config dan seluruh rule adblocknya bisa diunduh [disini](https://safefileku.com/download/MpvXfaqP4m6Vmpo). Jangan lupa ubah ekstensi file dari **.txt** menjadi **.yaml**.

6. Setelah mengaktifkan OpenClash dengan menggunakan config ini, segera masuk ke **panel YACD**, pilih **Proxies** lalu cari **Adblock** dan pilih proxy yang ingin digunakan.