---
title: Multi Direct Connection OpenClash
tags: [Tutorial, OpenClash, Loadbalance]
style: fill
color: secondary
description: Tutorial loadbalance 2 modem HiLink mode direct tanpa VPN di OpenClash.
---

Openclash adalah aplikasi OpenWrt yang multifungsi dalam memberikan kemudahan kepada penggunanya. Salah satu fitur mantap yang disediakan oleh aplikasi ini adalah fitur RULE PROVIDER.

Dengan fitur RULE PROVIDER ini, pengguna dapat mengarahkan koneksi ke tujuan yang diinginkan. Didalam fitur ini juga terdapat pengaturan tersembunyi yang **dapat menggabungkan koneksi 2 modem HiLink menjadi 1 koneksi** untuk memberikan kualitas internet lebih baik. Hal penting yang perlu disiapkan:

1. Config yaml punya sendiri atau bisa ambil contoh config yang sudah saya bagikan di postingan [Base Config OpenClash by Helmi Amirudin](base-config-openclash-helmi).
2. Sudah melakukan konfigurasi OpenClash seperti postingan saya di [Base Config OpenClash by Helmi Amirudin](base-config-openclash-helmi).

Contoh disini menggunakan firmware HelmiWrt pada Raspberry Pi 4, dengan modem HiLink e3372h dan e5673. Dan saya bagian apa yang sudah saya atur sendiri dan saya tidak menggunakan core meta.

1. Edit **config.yaml** yang kalian gunakan.
2. Cari tulisan **``proxy-groups:``**.
3. Tambahkan baris dibawah ini, letakkan dibawah **``proxy-groups:``**.



	```
	# Direct Proxy Loadbalance
	- name: Direct-eth1
	  type: url-test
	  disable-udp: false
	  proxies:
	  - DIRECT
	  interface-name: eth1
	  url: http://www.gstatic.com/generate_204
	  interval: '300'
	- name: Direct-eth2
	  type: url-test
	  disable-udp: false
	  proxies:
	  - DIRECT
	  interface-name: eth2
	  url: http://www.gstatic.com/generate_204
	  interval: '300'
	- name: MultiDirect
	  type: load-balance
	  strategy: round-robin
	  disable-udp: false
	  proxies:
	  - Direct-eth1
	  - Direct-eth2
	  url: http://www.gstatic.com/generate_204
	  interval: '300'
	```



5. Untuk contoh config, rule selengkapnya dan contoh peletakan rulenya bisa diunduh [disini](https://safefileku.com/download/z2otm469dpktMRB). Jangan lupa ubah ekstensi file dari **.txt** menjadi **.yaml**.

6. Setelah mengaktifkan OpenClash dengan menggunakan config ini, segera masuk ke **panel YACD**, lalu pilih **Proxies** dan cari **GLOBAL**, kemudian ubah ke proxy yang ingin digunakan ke **MultiDirect** untuk koneksi loadbalance 2 modem langsung.
