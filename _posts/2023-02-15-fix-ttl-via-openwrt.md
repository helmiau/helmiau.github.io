---
title: Fix TTL Modem via Openwrt
tags: [TTL, OpenWrt, Modem]
style: fill
color: warning
description: Change modem TTL using OpenWrt without modifying modem system.
---

<br>

{% capture list_items %}
Tutorial for OpenWrt 18.xx
Tutorial for OpenWrt 18.xx and 21.xx
Tutorial for OpenWrt 22.xx Firewall4
{% endcapture %}
{% include elements/list.html title="Page Index / Daftar Isi" type="toc" %}

## Tutorial for OpenWrt 18.xx

Mau modif value TTL Modem tapi ribet mesti flashing dan modif UI modemnya? Pake cara mudah saja, Fix TTL Modem via Openwrt

1. Pastikan modem sudah tersambung dengan router berbasis openwrt dan ada koneksi internetnya
2. Login ke Openwrt via SSH dengan software Putty
3. Jalankan perintah dibawah ini

	```sh
	opkg update && opkg install install iptables-mod-ipopt iptables-mod-physdev
	```

4. Masuk ke LuCI OpenWrt dan lihat port interface modem kamu di `Network > Interfaces`, Misal modem E3372 saya interfacenya Hilink berada di interface `eth1`
5. Sudah dapat port modemnya? lanjut pindah ke menu `Network` → `Firewall` → klik tab `Custom Rules`, copy paste & save script dibawah ke kolom Custom Rules, ganti `eth1` dengan interface modem kamu

	```sh
	iptables -t mangle -I POSTROUTING -m physdev --physdev-out eth1 -j TTL --ttl-set 65
	```

6. Buka Putty/Terminal ketik `nano /etc/sysctl.conf` hapus semua isinya dan copy paste script dibawah

	```sh
	net.bridge.bridge-nf-call-arptables = 1
	net.bridge.bridge-nf-call-ip6tables = 1
	net.bridge.bridge-nf-call-iptables = 1
	```

7. Save dengan keyboard `Ctrl+X` kemudian `y`
8. Restart firewall dengan command `service firewall restart`

## Tutorial for OpenWrt 18.xx and 21.xx

1. Pastikan modem sudah tersambung dengan router berbasis openwrt dan ada koneksi internetnya
2. Login ke Openwrt via SSH dengan software Putty
3. Jalankan perintah dibawah ini

	```sh
	opkg update && opkg install iptables-mod-ipopt iptables-mod-physdev
	```

4. Buka `LuCI` → `Network` → `Firewall` → klik tab `Custom Rules`, copy paste & save script dibawah ke kolom Custom Rules, ganti eth1 dengan port modem kamu

	```sh
	INTERPES="eth0 eth1 br-lan usb0 usb1"
	TTLSET="65"
	for ipes in $INTERPES; do
		iptables -t mangle -I POSTROUTING -o ${ipes} -j TTL --ttl-set ${TTLSET}
		iptables -t mangle -I PREROUTING -i ${ipes} -j TTL --ttl-set ${TTLSET}
	done
	```

5. Buka Putty/Terminal ketik `nano /etc/sysctl.conf` hapus semua isinya dan copy paste script dibawah

	```sh
	net.ipv4.ip_default_ttl=65
	net.ipv6.ip_default_ttl=65
	```

6. Save dengan keyboard `Ctrl+X` kemudian `y`
7. Restart firewall dengan command `service firewall restart`

## Tutorial for OpenWrt 22.xx Firewall4

1. Buka Putty/Terminal ketik `nano /etc/nftables.d/10-custom-filter-chains.nft` masukkan script dibawah ini

	```sh
	chain mangle_postrouting_ttl65 {
	type filter hook postrouting priority 300; policy accept;
	counter ip ttl set 65
	}
	chain mangle_prerouting_ttl65 {
	type filter hook prerouting priority 300; policy accept;
	counter ip ttl set 65
	}
	```

2. Save dengan keyboard `Ctrl+X` kemudian `y`
3. Restart firewall dengan command `service firewall restart`
