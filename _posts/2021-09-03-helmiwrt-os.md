---
title: HelmiWrt OS is Customized OpenWrt Firmware
tags: [Raspberry Pi, Lean, Custom Firmware, OpenWrt]
style: fill
color: warning
description: This is OpenWrt project forked from SuLingGG, which taken from coolsnowwolf/lede repo and I add my additions there. Compiled by using GitHub Actions.
---

Source: [My Own Repo](https://github.com/helmiau/HelmiWrt-OS#readme)

<br><center><img height="70px" width="80%" src="https://github.com/helmiau/helmiau.github.io/raw/master/images/helmiwrtos.svg" ></center><br>


<br>
{% capture list_items %}
Firmware Informations
Tweaks and Patches by Helmi Amirudin
Previews
Supported Devices and Download Section
Tutorial Bahasa Indonesia
English Guide
Default Firmware Information
Telegram Chat
{% endcapture %}
{% include elements/list.html title="Page Index / Daftar Isi" type="toc" %}

<br>
#### Firmware Informations

HelmiWrt OS is a customized OpenWrt firmware with many additions to make a **ready to use** firmware. This firmware based on [ImmortalWrt](https://github.com/immortalwrt/immortalwrt) with some implementation from [SuLingGG OpenWrt-Rpi](https://github.com/SuLingGG/OpenWrt-Rpi) using [SuLingGG OPKG Server](https://doc.openwrt.cc/2-OpenWrt-Rpi/) compiled using GitHub Actions. This project currently available for Raspberry Pi, x86 64bit (PC/Laptop), some NanoPi and OrangePi devices.

<br>
#### Tweaks and Patches by Helmi Amirudin
<!--<details><summary>Tweaks by My own configurations : (click to show)</summary>-->
<p>
<ul>
<li>Supported various devices :
  <ul>
  <li>Raspberry Pi devices.</li>
  <li>x86 64bit.</li>
  <li>Some NanoPi devices.</li>
  <li>Some OrangePi devices.</li>
  <li>Some Amlogic s9xxx devices.</li>
  </ul>
</li>
<li>Removed all unused bloatwares.</li>
<li>Removed all languages except English.</li>
<li>Installed many LuCI themes :
  <ul>
  <li>Argon.</li>
  <li>ATMaterial Original, Brown, Red.</li>
  <li>Bootstrap.</li>
  <li>Edge.</li>
  <li>Infinity Freedom (ifit).</li>
  <li>Material.</li>
  <li>Netgear.</li>
  <li>Opentomcat.</li>
  <li>OpenTomato.</li>
  <li>Opentopd.</li>
  <li>Neobird. !!NEW!!</li>
  </ul>
</li>
<li>Set <strong>English</strong> as default language.</li>
<li>Set <strong>WIB-7 Asia/Jakarta</strong> as default timezone.</li>
<li>Auto synchronize time when internet connected.</li>
<li>Auto fix read-only rootfs.</li>
<li>Activated mwan3 Loadbalance :
  <ul>
  <li>4 USB Interface (Hilink, USB to LAN, iOS, Android devices).</li>
  <li>2 QMI Interface (ex. LT4220).</li>
  <li>1 3G Interface.</li>
  </ul>
</li>
<li>Add ShadowsocksR Plus+ shortcut <strong>(ssr restart, ssr start, ssr stop)</strong>.</li>
<li>QMI modems supported ex. LT4220.
  <ul>
  <li>Add IP Refresh for QMI Modems by running <strong>ipqmi</strong> using terminal.</li>
  <li>Auto reconnect QMI Modems without reboot.</li>
  </ul>
</li>
<li>VPN protocol support :
  <ul>
  <li>Brook.</li>
  <li>Hysteria.</li>
  <li>OpenVPN.</li>
  <li>ShadowSocks.</li>
  <li>ShadowSocksR.</li>
  <li>SSH (WebSocket, Proxy, Payload, SSL Support).</li>
  <li>Trojan (Original, Go, gRPC, WebSocket).</li>
  <li>V2ray (Vmess, Vless, gRPC, WebSocket).</li>
  </ul>
</li>
<li>VPN client apps :
  <ul>
  <li>ShadowSocksR+ Plus.</li>
  <li>Passwall.</li>
  <li>OpenClash.</li>
  <li>OpenVPN.</li>
  <li>Libernet Plus.</li>
  <li>Xderm Mini.</li>
  <li>STL Wegare.</li>
  </ul>
</li>
<li>Extended root partition to 3GB.</li>
<li>Add Samba Allowed user setup. This tool will help you to add Allowed User for Samba Directory.
  <ul>
  <li>Run <strong>sambaset</strong> using terminal for use, then follow instruction.</li>
  <li>Open Network Share <a href="http://192.168.1.1/cgi-bin/luci/admin/nas/samba">Samba Here</a>.</li>
  <li>Add shared directory, fill name, path with your shared directory.</li>
  <li>Fill <strong>Allowed users</strong> with <strong>USER</strong>, check <strong>Browseable</strong>, uncheck <strong>Allowed Guests</strong> and <strong>Read-Only</strong>.</li>
  <li>Save and Apply.</li>
  </ul>
</li>
<li>Add <strong>badvpn</strong> and <strong>corkscrew</strong> package for Xderm Mini GUI & Libernet purpose.</li>
<li>Add <strong>Clash Premium Core</strong> for OpenClash.</li>
<li>Below is <strong>helmiwrt</strong> command lists :
  <ul>
  <li>Run <strong>ocsm</strong> using terminal if you want to manage OpenClash.</li>
  <li>Run <strong>vasm</strong> using terminal if you want to manage v2rayA.</li>
  <li>Run <strong>speedtest</strong> to test your network quality via terminal.</li>
  <li>Run <strong>neofetch</strong> to see your device information.</li>
  <li>Run <strong>sambaset</strong> to manage Samba Network Share.</li>
  <li>Run <strong>ram</strong> to see available/used ram & processes.</li>
  <li>Run <strong>fixphp</strong> to fix browser always download file index.php (like xderm and libernet).</li>
  <li>Run <strong>myip</strong> to check your public IP address.</li>
  <li>Run <strong>xdrtool</strong> to manage Xderm Mini via terminal.</li>
  </ul>
</li>
<li>Added many tweaks, optimizations and configurations which unlisted here.</li>
</ul>
</p>
<!--</details>-->


<br>
#### Previews
{% capture carousel_images %}
https://github.com/helmiau/HelmiWrt-OS/raw/main/preview/openwrt-rpi-1.png
https://github.com/helmiau/HelmiWrt-OS/raw/main/preview/openwrt-rpi-2.png
https://github.com/helmiau/HelmiWrt-OS/raw/main/preview/openwrt-rpi-3.png
https://github.com/helmiau/HelmiWrt-OS/raw/main/preview/openwrt-rpi-4.png
https://github.com/helmiau/HelmiWrt-OS/raw/main/preview/openwrt-rpi-5.png
https://github.com/helmiau/HelmiWrt-OS/raw/main/preview/openwrt-rpi-6.png
https://github.com/helmiau/HelmiWrt-OS/raw/main/preview/openwrt-rpi-7.png
https://github.com/helmiau/HelmiWrt-OS/raw/main/preview/openwrt-rpi-8.png
https://github.com/helmiau/HelmiWrt-OS/raw/main/preview/openwrt-rpi-9.png
https://github.com/helmiau/HelmiWrt-OS/raw/main/preview/openwrt-rpi-10.png
https://github.com/helmiau/HelmiWrt-OS/raw/main/preview/openwrt-rpi-11.png
https://github.com/helmiau/HelmiWrt-OS/raw/main/preview/openwrt-rpi-13.png
https://github.com/helmiau/HelmiWrt-OS/raw/main/preview/openwrt-rpi-14.png
https://github.com/helmiau/HelmiWrt-OS/raw/main/preview/openwrt-rpi-15.png
https://github.com/helmiau/HelmiWrt-OS/raw/main/preview/openwrt-rpi-16.png
https://github.com/helmiau/HelmiWrt-OS/raw/main/preview/openwrt-rpi-17.png
{% endcapture %}
{% include elements/carousel.html %}

{% include elements/video.html id="HsDEWwgy-xg" %}


<br>
#### Supported Devices and Download Section


<p align="center">
	<img title="HelmiWrt Latest Release" alt="HelmiWrt Latest Release" src="https://img.shields.io/github/v/release/ghdlsvc/dl30.svg?label=Latest%20Release&style=for-the-badge&logo=openwrt" height="70px" width="80%">
</p>


- for SBC (Single Board Computer), Using ext4 format partition.

| Raspberry Pi Version | 18.06 factory | 18.06 sysupgrade | 18.06 rootfs | 21.02 factory | 21.02 sysupgrade | 21.02 rootfs |
| :-----------------------: | :---------------------: | :------------------------: | :----------: | :---------------------: | :------------------------: | :----------: |
| A/B/B+/Zero/W | [🔽 Download](https://github.com/ghdlsvc/dl30/releases/latest/download/helmiwrt-18.06-k5.4-bcm27xx-bcm2708-rpi-ext4-factory.img.gz) | [🔽 Download](https://github.com/ghdlsvc/dl30/releases/latest/download/helmiwrt-18.06-k5.4-bcm27xx-bcm2708-rpi-ext4-sysupgrade.img.gz) | [🔽 Download](https://github.com/ghdlsvc/dl30/releases/latest/download/helmiwrt-18.06-k5.4-bcm27xx-bcm2708-rpi-rootfs.tar.gz) | [🔽 Download](https://github.com/ghdlsvc/dl30/releases/latest/download/helmiwrt-21.02-bcm27xx-bcm2708-rpi-ext4-factory.img.gz) | [🔽 Download](https://github.com/ghdlsvc/dl30/releases/latest/download/helmiwrt-21.02-bcm27xx-bcm2708-rpi-ext4-sysupgrade.img.gz) | [🔽 Download](https://github.com/ghdlsvc/dl30/releases/latest/download/helmiwrt-21.02-bcm27xx-bcm2708-rpi-rootfs.tar.gz) |
| 2/B | [🔽 Download](https://github.com/ghdlsvc/dl30/releases/latest/download/helmiwrt-18.06-k5.4-bcm27xx-bcm2709-rpi-2-ext4-factory.img.gz) | [🔽 Download](https://github.com/ghdlsvc/dl30/releases/latest/download/helmiwrt-18.06-k5.4-bcm27xx-bcm2709-rpi-2-ext4-sysupgrade.img.gz) | [🔽 Download](https://github.com/ghdlsvc/dl30/releases/latest/download/helmiwrt-18.06-k5.4-bcm27xx-bcm2709-rpi-2-rootfs.tar.gz) | [🔽 Download](https://github.com/ghdlsvc/dl30/releases/latest/download/helmiwrt-21.02-bcm27xx-bcm2709-rpi-2-ext4-factory.img.gz) | [🔽 Download](https://github.com/ghdlsvc/dl30/releases/latest/download/helmiwrt-21.02-bcm27xx-bcm2709-rpi-2-ext4-sysupgrade.img.gz) | [🔽 Download](https://github.com/ghdlsvc/dl30/releases/latest/download/helmiwrt-21.02-bcm27xx-bcm2709-rpi-2-rootfs.tar.gz) |
| 3/B/B+ | [🔽 Download](https://github.com/ghdlsvc/dl30/releases/latest/download/helmiwrt-18.06-k5.4-bcm27xx-bcm2710-rpi-3-ext4-factory.img.gz) | [🔽 Download](https://github.com/ghdlsvc/dl30/releases/latest/download/helmiwrt-18.06-k5.4-bcm27xx-bcm2710-rpi-3-ext4-sysupgrade.img.gz) | [🔽 Download](https://github.com/ghdlsvc/dl30/releases/latest/download/helmiwrt-18.06-k5.4-bcm27xx-bcm2710-rpi-3-rootfs.tar.gz) | [🔽 Download](https://github.com/ghdlsvc/dl30/releases/latest/download/helmiwrt-21.02-bcm27xx-bcm2710-rpi-3-ext4-factory.img.gz) | [🔽 Download](https://github.com/ghdlsvc/dl30/releases/latest/download/helmiwrt-21.02-bcm27xx-bcm2710-rpi-3-ext4-sysupgrade.img.gz) | [🔽 Download](https://github.com/ghdlsvc/dl30/releases/latest/download/helmiwrt-21.02-bcm27xx-bcm2710-rpi-3-rootfs.tar.gz) |
| 4/B/400/CM4 | [🔽 Download](https://github.com/ghdlsvc/dl30/releases/latest/download/helmiwrt-18.06-k5.4-bcm27xx-bcm2711-rpi-4-ext4-factory.img.gz) | [🔽 Download](https://github.com/ghdlsvc/dl30/releases/latest/download/helmiwrt-18.06-k5.4-bcm27xx-bcm2711-rpi-4-ext4-sysupgrade.img.gz) | [🔽 Download](https://github.com/ghdlsvc/dl30/releases/latest/download/helmiwrt-18.06-k5.4-bcm27xx-bcm2711-rpi-4-rootfs.tar.gz) | [🔽 Download](https://github.com/ghdlsvc/dl30/releases/latest/download/helmiwrt-21.02-bcm27xx-bcm2711-rpi-4-ext4-factory.img.gz) | [🔽 Download](https://github.com/ghdlsvc/dl30/releases/latest/download/helmiwrt-21.02-bcm27xx-bcm2711-rpi-4-ext4-sysupgrade.img.gz) | [🔽 Download](https://github.com/ghdlsvc/dl30/releases/latest/download/helmiwrt-21.02-bcm27xx-bcm2711-rpi-4-rootfs.tar.gz) |

| Rockchip Armv8 Devices | 18.06 firmware | 18.06 rootfs | 21.02 firmware | 21.02 rootfs |
| :-----------------: | :-------------------: | :---------------: | :-------------------: | :---------------: |
| NanoPi R2C | [🔽 Download](https://github.com/ghdlsvc/dl30/releases/latest/download/helmiwrt-18.06-k5.4-rockchip-armv8-friendlyarm_nanopi-r2c-ext4-sysupgrade.img.gz) | [🔽 Download](https://github.com/ghdlsvc/dl30/releases/latest/download/helmiwrt-18.06-k5.4-rockchip-armv8-rootfs.tar.gz) | [🔽 Download](https://github.com/ghdlsvc/dl30/releases/latest/download/helmiwrt-21.02-rockchip-armv8-friendlyarm_nanopi-r2c-ext4-sysupgrade.img.gz) | [🔽 Download](https://github.com/ghdlsvc/dl30/releases/latest/download/helmiwrt-21.02-rockchip-armv8-rootfs.tar.gz) |
| NanoPi R2S | [🔽 Download](https://github.com/ghdlsvc/dl30/releases/latest/download/helmiwrt-18.06-k5.4-rockchip-armv8-friendlyarm_nanopi-r2s-ext4-sysupgrade.img.gz) | [🔽 Download](https://github.com/ghdlsvc/dl30/releases/latest/download/helmiwrt-18.06-k5.4-rockchip-armv8-rootfs.tar.gz) | [🔽 Download](https://github.com/ghdlsvc/dl30/releases/latest/download/helmiwrt-21.02-rockchip-armv8-friendlyarm_nanopi-r2s-ext4-sysupgrade.img.gz) | [🔽 Download](https://github.com/ghdlsvc/dl30/releases/latest/download/helmiwrt-21.02-rockchip-armv8-rootfs.tar.gz) |
| NanoPi R4S | [🔽 Download](https://github.com/ghdlsvc/dl30/releases/latest/download/helmiwrt-18.06-k5.4-rockchip-armv8-friendlyarm_nanopi-r4s-ext4-sysupgrade.img.gz) | [🔽 Download](https://github.com/ghdlsvc/dl30/releases/latest/download/helmiwrt-18.06-k5.4-rockchip-armv8-rootfs.tar.gz) | [🔽 Download](https://github.com/ghdlsvc/dl30/releases/latest/download/helmiwrt-21.02-rockchip-armv8-friendlyarm_nanopi-r4s-ext4-sysupgrade.img.gz) | [🔽 Download](https://github.com/ghdlsvc/dl30/releases/latest/download/helmiwrt-21.02-rockchip-armv8-rootfs.tar.gz) |
| OrangePi R1 Plus | [🔽 Download](https://github.com/ghdlsvc/dl30/releases/latest/download/helmiwrt-18.06-k5.4-rockchip-armv8-xunlong_orangepi-r1-plus-ext4-sysupgrade.img.gz) | [🔽 Download](https://github.com/ghdlsvc/dl30/releases/latest/download/helmiwrt-18.06-k5.4-rockchip-armv8-rootfs.tar.gz) | [🔽 Download](https://github.com/ghdlsvc/dl30/releases/latest/download/helmiwrt-21.02-rockchip-armv8-xunlong_orangepi-r1-plus-ext4-sysupgrade.img.gz) | [🔽 Download](https://github.com/ghdlsvc/dl30/releases/latest/download/helmiwrt-21.02-rockchip-armv8-rootfs.tar.gz) |
| OrangePi R1 Plus LTS | [🔽 Download](https://github.com/ghdlsvc/dl30/releases/latest/download/helmiwrt-18.06-k5.4-rockchip-armv8-xunlong_orangepi-r1-plus-lts-ext4-sysupgrade.img.gz) | [🔽 Download](https://github.com/ghdlsvc/dl30/releases/latest/download/helmiwrt-18.06-k5.4-rockchip-armv8-rootfs.tar.gz) | [🔽 Download](https://github.com/ghdlsvc/dl30/releases/latest/download/helmiwrt-21.02-rockchip-armv8-xunlong_orangepi-r1-plus-lts-ext4-sysupgrade.img.gz) | [🔽 Download](https://github.com/ghdlsvc/dl30/releases/latest/download/helmiwrt-21.02-rockchip-armv8-rootfs.tar.gz) |

| Sunxi Cortexa7 Devices | 18.06 firmware | 18.06 rootfs | 21.02 firmware | 21.02 rootfs |
| :-----------------: | :-------------------: | :---------------: | :-------------------: | :---------------: |
| NanoPi M1 Plus | [🔽 Download](https://github.com/ghdlsvc/dl30/releases/latest/download/helmiwrt-18.06-k5.4-sunxi-cortexa7-friendlyarm_nanopi-m1-plus-ext4-sdcard.img.gz) | [🔽 Download](https://github.com/ghdlsvc/dl30/releases/latest/download/helmiwrt-18.06-k5.4-sunxi-cortexa7-rootfs.tar.gz) | [🔽 Download](https://github.com/ghdlsvc/dl30/releases/latest/download/helmiwrt-21.02-sunxi-cortexa7-friendlyarm_nanopi-m1-plus-ext4-sdcard.img.gz) | [🔽 Download](https://github.com/ghdlsvc/dl30/releases/latest/download/helmiwrt-21.02-sunxi-cortexa7-rootfs.tar.gz) |
| NanoPi Neo | [🔽 Download](https://github.com/ghdlsvc/dl30/releases/latest/download/helmiwrt-18.06-k5.4-sunxi-cortexa7-friendlyarm_nanopi-neo-ext4-sdcard.img.gz) | [🔽 Download](https://github.com/ghdlsvc/dl30/releases/latest/download/helmiwrt-18.06-k5.4-sunxi-cortexa7-rootfs.tar.gz) | [🔽 Download](https://github.com/ghdlsvc/dl30/releases/latest/download/helmiwrt-21.02-sunxi-cortexa7-friendlyarm_nanopi-neo-ext4-sdcard.img.gz) | [🔽 Download](https://github.com/ghdlsvc/dl30/releases/latest/download/helmiwrt-21.02-sunxi-cortexa7-rootfs.tar.gz) |
| NanoPi Neo Air | [🔽 Download](https://github.com/ghdlsvc/dl30/releases/latest/download/helmiwrt-18.06-k5.4-sunxi-cortexa7-friendlyarm_nanopi-neo-air-ext4-sdcard.img.gz) | [🔽 Download](https://github.com/ghdlsvc/dl30/releases/latest/download/helmiwrt-18.06-k5.4-sunxi-cortexa7-rootfs.tar.gz) | [🔽 Download](https://github.com/ghdlsvc/dl30/releases/latest/download/helmiwrt-21.02-sunxi-cortexa7-friendlyarm_nanopi-neo-air-ext4-sdcard.img.gz) | [🔽 Download](https://github.com/ghdlsvc/dl30/releases/latest/download/helmiwrt-21.02-sunxi-cortexa7-rootfs.tar.gz) |
| NanoPi R1 | [🔽 Download](https://github.com/ghdlsvc/dl30/releases/latest/download/helmiwrt-18.06-k5.4-sunxi-cortexa7-friendlyarm_nanopi-r1-ext4-sdcard.img.gz) | [🔽 Download](https://github.com/ghdlsvc/dl30/releases/latest/download/helmiwrt-18.06-k5.4-sunxi-cortexa7-rootfs.tar.gz) | [🔽 Download](https://github.com/ghdlsvc/dl30/releases/latest/download/helmiwrt-21.02-sunxi-cortexa7-friendlyarm_nanopi-r1-ext4-sdcard.img.gz) | [🔽 Download](https://github.com/ghdlsvc/dl30/releases/latest/download/helmiwrt-21.02-sunxi-cortexa7-rootfs.tar.gz) |
| OrangePi 2 | [🔽 Download](https://github.com/ghdlsvc/dl30/releases/latest/download/helmiwrt-18.06-k5.4-sunxi-cortexa7-xunlong_orangepi-2-ext4-sdcard.img.gz) | [🔽 Download](https://github.com/ghdlsvc/dl30/releases/latest/download/helmiwrt-18.06-k5.4-sunxi-cortexa7-rootfs.tar.gz) | [🔽 Download](https://github.com/ghdlsvc/dl30/releases/latest/download/helmiwrt-21.02-sunxi-cortexa7-xunlong_orangepi-2-ext4-sdcard.img.gz) | [🔽 Download](https://github.com/ghdlsvc/dl30/releases/latest/download/helmiwrt-21.02-sunxi-cortexa7-rootfs.tar.gz) |
| OrangePi One | [🔽 Download](https://github.com/ghdlsvc/dl30/releases/latest/download/helmiwrt-18.06-k5.4-sunxi-cortexa7-xunlong_orangepi-one-ext4-sdcard.img.gz) | [🔽 Download](https://github.com/ghdlsvc/dl30/releases/latest/download/helmiwrt-18.06-k5.4-sunxi-cortexa7-rootfs.tar.gz) | [🔽 Download](https://github.com/ghdlsvc/dl30/releases/latest/download/helmiwrt-21.02-sunxi-cortexa7-xunlong_orangepi-one-ext4-sdcard.img.gz) | [🔽 Download](https://github.com/ghdlsvc/dl30/releases/latest/download/helmiwrt-21.02-sunxi-cortexa7-rootfs.tar.gz) |
| OrangePi PC | [🔽 Download](https://github.com/ghdlsvc/dl30/releases/latest/download/helmiwrt-18.06-k5.4-sunxi-cortexa7-xunlong_orangepi-pc-ext4-sdcard.img.gz) | [🔽 Download](https://github.com/ghdlsvc/dl30/releases/latest/download/helmiwrt-18.06-k5.4-sunxi-cortexa7-rootfs.tar.gz) | [🔽 Download](https://github.com/ghdlsvc/dl30/releases/latest/download/helmiwrt-21.02-sunxi-cortexa7-xunlong_orangepi-pc-ext4-sdcard.img.gz) | [🔽 Download](https://github.com/ghdlsvc/dl30/releases/latest/download/helmiwrt-21.02-sunxi-cortexa7-rootfs.tar.gz) |
| OrangePi PC Plus | [🔽 Download](https://github.com/ghdlsvc/dl30/releases/latest/download/helmiwrt-18.06-k5.4-sunxi-cortexa7-xunlong_orangepi-pc-plus-ext4-sdcard.img.gz) | [🔽 Download](https://github.com/ghdlsvc/dl30/releases/latest/download/helmiwrt-18.06-k5.4-sunxi-cortexa7-rootfs.tar.gz) | [🔽 Download](https://github.com/ghdlsvc/dl30/releases/latest/download/helmiwrt-21.02-sunxi-cortexa7-xunlong_orangepi-pc-plus-ext4-sdcard.img.gz) | [🔽 Download](https://github.com/ghdlsvc/dl30/releases/latest/download/helmiwrt-21.02-sunxi-cortexa7-rootfs.tar.gz) |
| OrangePi Plus | [🔽 Download](https://github.com/ghdlsvc/dl30/releases/latest/download/helmiwrt-18.06-k5.4-sunxi-cortexa7-xunlong_orangepi-plus-ext4-sdcard.img.gz) | [🔽 Download](https://github.com/ghdlsvc/dl30/releases/latest/download/helmiwrt-18.06-k5.4-sunxi-cortexa7-rootfs.tar.gz) | [🔽 Download](https://github.com/ghdlsvc/dl30/releases/latest/download/helmiwrt-21.02-sunxi-cortexa7-xunlong_orangepi-plus-ext4-sdcard.img.gz) | [🔽 Download](https://github.com/ghdlsvc/dl30/releases/latest/download/helmiwrt-21.02-sunxi-cortexa7-rootfs.tar.gz) |
| OrangePi R1 | [🔽 Download](https://github.com/ghdlsvc/dl30/releases/latest/download/helmiwrt-18.06-k5.4-sunxi-cortexa7-xunlong_orangepi-r1-ext4-sdcard.img.gz) | [🔽 Download](https://github.com/ghdlsvc/dl30/releases/latest/download/helmiwrt-18.06-k5.4-sunxi-cortexa7-rootfs.tar.gz) | [🔽 Download](https://github.com/ghdlsvc/dl30/releases/latest/download/helmiwrt-21.02-sunxi-cortexa7-xunlong_orangepi-r1-ext4-sdcard.img.gz) | [🔽 Download](https://github.com/ghdlsvc/dl30/releases/latest/download/helmiwrt-21.02-sunxi-cortexa7-rootfs.tar.gz) |
| OrangePi Zero | [🔽 Download](https://github.com/ghdlsvc/dl30/releases/latest/download/helmiwrt-18.06-k5.4-sunxi-cortexa7-xunlong_orangepi-zero-ext4-sdcard.img.gz) | [🔽 Download](https://github.com/ghdlsvc/dl30/releases/latest/download/helmiwrt-18.06-k5.4-sunxi-cortexa7-rootfs.tar.gz) | [🔽 Download](https://github.com/ghdlsvc/dl30/releases/latest/download/helmiwrt-21.02-sunxi-cortexa7-xunlong_orangepi-zero-ext4-sdcard.img.gz) | [🔽 Download](https://github.com/ghdlsvc/dl30/releases/latest/download/helmiwrt-21.02-sunxi-cortexa7-rootfs.tar.gz) |

- for x86 64bit (ex. Laptops, PC)

| x86 (64bit) | squashfs UEFI | squashfs Legacy | squashfs rootfs | ext4 UEFI | ext4 Legacy | ext4 rootfs |
| :---------: | :----------------: | :------------------: | :----------------: | :------------: | :--------------: | :----------------: |
|  OpenWrt 18.06 | [🔽 Download](https://github.com/ghdlsvc/dl30/releases/latest/download/helmiwrt-18.06-k5.4-x86-64-generic-squashfs-combined-efi.img.gz) | [🔽 Download](https://github.com/ghdlsvc/dl30/releases/latest/download/helmiwrt-18.06-k5.4-x86-64-generic-squashfs-combined.img.gz) | [🔽 Download](https://github.com/ghdlsvc/dl30/releases/latest/download/helmiwrt-18.06-k5.4-x86-64-generic-squashfs-rootfs.img.gz) | [🔽 Download](https://github.com/ghdlsvc/dl30/releases/latest/download/helmiwrt-18.06-k5.4-x86-64-generic-ext4-combined-efi.img.gz) | [🔽 Download](https://github.com/ghdlsvc/dl30/releases/latest/download/helmiwrt-18.06-k5.4-x86-64-generic-ext4-combined.img.gz) | [🔽 Download](https://github.com/ghdlsvc/dl30/releases/latest/download/helmiwrt-18.06-k5.4-x86-64-generic-ext4-rootfs.img.gz) |
|  OpenWrt 21.02 | [🔽 Download](https://github.com/ghdlsvc/dl30/releases/latest/download/helmiwrt-21.02-x86-64-generic-squashfs-combined-efi.img.gz) | [🔽 Download](https://github.com/ghdlsvc/dl30/releases/latest/download/helmiwrt-21.02-x86-64-generic-squashfs-combined.img.gz) | [🔽 Download](https://github.com/ghdlsvc/dl30/releases/latest/download/helmiwrt-21.02-x86-64-generic-squashfs-rootfs.img.gz) | [🔽 Download](https://github.com/ghdlsvc/dl30/releases/latest/download/helmiwrt-21.02-x86-64-generic-ext4-combined-efi.img.gz) | [🔽 Download](https://github.com/ghdlsvc/dl30/releases/latest/download/helmiwrt-21.02-x86-64-generic-ext4-combined.img.gz) | [🔽 Download](https://github.com/ghdlsvc/dl30/releases/latest/download/helmiwrt-21.02-x86-64-generic-ext4-rootfs.img.gz) |


- for STB (Set-Top-Box) s9xxx devices

| Device Chipset | Device's Sample | Kernel 5.4.0 OpenWrt 18.06 | Kernel 5.15.15 OpenWrt 18.06 | Kernel 5.4.0 OpenWrt 21.02 | Kernel 5.15.15 OpenWrt 21.02 |
| :---------------: | :-------------: | :---------------------------: | :-----------------------------: | :---------------------------: | :-----------------------------: |
| s905d | Phicomm-N1 <br> | [🔽 Download](https://github.com/ghdlsvc/dl30/releases/latest/download/helmiwrt-18.06-k5.4-s905d-k5.4.0.img.gz) | [🔽 Download](https://github.com/ghdlsvc/dl30/releases/latest/download/helmiwrt-18.06-k5.4-s905d-k5.15.15.img.gz) | [🔽 Download](https://github.com/ghdlsvc/dl30/releases/latest/download/helmiwrt-21.02-s905d-k5.4.0.img.gz) | [🔽 Download](https://github.com/ghdlsvc/dl30/releases/latest/download/helmiwrt-21.02-s905d-k5.15.15.img.gz) |
| s905w | X96-Mini,  <br>TX3-Mini | [🔽 Download](https://github.com/ghdlsvc/dl30/releases/latest/download/helmiwrt-18.06-k5.4-s905w-k5.4.0.img.gz) | [🔽 Download](https://github.com/ghdlsvc/dl30/releases/latest/download/helmiwrt-18.06-k5.4-s905w-k5.15.15.img.gz) | [🔽 Download](https://github.com/ghdlsvc/dl30/releases/latest/download/helmiwrt-21.02-s905w-k5.4.0.img.gz) | [🔽 Download](https://github.com/ghdlsvc/dl30/releases/latest/download/helmiwrt-21.02-s905w-k5.15.15.img.gz) |
| s905x | HG680P,  <br>B860H | [🔽 Download](https://github.com/ghdlsvc/dl30/releases/latest/download/helmiwrt-18.06-k5.4-s905x-k5.4.0.img.gz) | [🔽 Download](https://github.com/ghdlsvc/dl30/releases/latest/download/helmiwrt-18.06-k5.4-s905x-k5.15.15.img.gz) | [🔽 Download](https://github.com/ghdlsvc/dl30/releases/latest/download/helmiwrt-21.02-s905x-k5.4.0.img.gz) | [🔽 Download](https://github.com/ghdlsvc/dl30/releases/latest/download/helmiwrt-21.02-s905x-k5.15.15.img.gz) |
| s905x2 | X96Max-4G, <br>X96Max-2G,  A95XF2 | [🔽 Download](https://github.com/ghdlsvc/dl30/releases/latest/download/helmiwrt-18.06-k5.4-s905x2-k5.4.0.img.gz) | [🔽 Download](https://github.com/ghdlsvc/dl30/releases/latest/download/helmiwrt-18.06-k5.4-s905x2-k5.15.15.img.gz) | [🔽 Download](https://github.com/ghdlsvc/dl30/releases/latest/download/helmiwrt-21.02-s905x2-k5.4.0.img.gz) | [🔽 Download](https://github.com/ghdlsvc/dl30/releases/latest/download/helmiwrt-21.02-s905x2-k5.15.15.img.gz) |
| s905x3 | X96-Max+, HK1-Box, H96-Max-X3, <br>Ugoos-X3, X96-Air, A95XF3-Air | [🔽 Download](https://github.com/ghdlsvc/dl30/releases/latest/download/helmiwrt-18.06-k5.4-s905x3-k5.4.0.img.gz) | [🔽 Download](https://github.com/ghdlsvc/dl30/releases/latest/download/helmiwrt-18.06-k5.4-s905x3-k5.15.15.img.gz) | [🔽 Download](https://github.com/ghdlsvc/dl30/releases/latest/download/helmiwrt-21.02-s905x3-k5.4.0.img.gz) | [🔽 Download](https://github.com/ghdlsvc/dl30/releases/latest/download/helmiwrt-21.02-s905x3-k5.15.15.img.gz) |
| s912 | H96-Pro-Plus, Octopus-Planet | [🔽 Download](https://github.com/ghdlsvc/dl30/releases/latest/download/helmiwrt-18.06-k5.4-s912-k5.4.0.img.gz) | [🔽 Download](https://github.com/ghdlsvc/dl30/releases/latest/download/helmiwrt-18.06-k5.4-s912-k5.15.15.img.gz) | [🔽 Download](https://github.com/ghdlsvc/dl30/releases/latest/download/helmiwrt-21.02-s912-k5.4.0.img.gz) | [🔽 Download](https://github.com/ghdlsvc/dl30/releases/latest/download/helmiwrt-21.02-s912-k5.15.15.img.gz) |
| s922x | Belink, Belink-Pro, Ugoos-AM6-Plus,<br> ODROID-N2 | [🔽 Download](https://github.com/ghdlsvc/dl30/releases/latest/download/helmiwrt-18.06-k5.4-s922x-k5.4.0.img.gz) | [🔽 Download](https://github.com/ghdlsvc/dl30/releases/latest/download/helmiwrt-18.06-k5.4-s922x-k5.15.15.img.gz) | [🔽 Download](https://github.com/ghdlsvc/dl30/releases/latest/download/helmiwrt-21.02-s922x-k5.4.0.img.gz) | [🔽 Download](https://github.com/ghdlsvc/dl30/releases/latest/download/helmiwrt-21.02-s922x-k5.15.15.img.gz) |

> s9xxx kernel info : <br> 5.4.0 = Amlogic kernel <br> 5.15.15 = Andi Rijal Habibi's kernel <br> All Wireless (WiFi) status = 80% ON

> Note: Wireless status is random due to various hardware.

<br>

> All releases including Older release can be found [here for HelmiWrt Lede Based](https://cararegistrasi.com/WXCt), and [this for HelmiWrt ImmortalWrt Based](https://github.com/helmiau/dl/releases) and scroll down a bit to see older release older date.

> Seluruh firmware rilis, termasuk firmware lama dapat dicari dan diunduh pada [link ini untuk HelmiWrt berbasis Lede](https://cararegistrasi.com/WXCt), dan [ini untuk HelmiWrt berbasis ImmortalWrt](https://github.com/helmiau/dl/releases), lalu geser kebawah pada halaman link untuk melihat rilis yang lama.

<br>
<br>
### Tutorial Bahasa Indonesia

<br>
#### Kebutuhan Firmware

1. SDCard/HDD/Flashdisk 4GB.
2. Raspberry Pi 1/2/3/4 atau PC/Laptop.
3. PC/Laptop dengan sistem operasi Windows (bisa juga menggunakan OS lain, tapi saya tidak cantumkan instalasinya disini).
4. MicroSD Adapter/converter (untuk instalsi Raspberry Pi saja).


<br>
#### Instalasi Firmware
1. Unduh firmware terbaru dari bagian **Supported Devices & Download Section** diatas, pilih yang ada tulisan **sysupgrade** atau **factory** atau **UEFI** atau **Legacy**.
  - Cari tahu tentang perbedaan squashfs dan ext4 [disini](https://forum.openwrt.org/t/ext4-vs-squashfs/25187/7).
  - Saya biasanya menggunakan ext4.
  - Jika link download error, silahkan ikuti [cara ini](https://github.com/helmiau/HelmiWrt-OS/discussions/18). Jika masih belum bisa, maka bersabarlah atau gunakan yang lain.
2. Unduh [Rufus](https://github.com/pbatard/rufus/releases/download/v3.13/rufus-3.13p.exe) atau [Balena Etcher](https://github.com/balena-io/etcher/releases/latest).
3. Masukkan SDCard/Flashdisk/HDD ke PC via slot USB.
4. Buka Rufus/Etcher.
5. Pilih disk (SDCard/Flashdisk/HDD).
6. Tarik file yang sudah di unduh tadi ke jendela program Rufus/Etcher.
7. Mulai burn dan tunggu hingga proses selesai.
8. Lepaskan SDCard/Flashdisk/HDD dari USB.
9. Masukkan SDCard/Flashdisk/HDD ke slot SdCard Raspberry Pi atau slot USB/HDD pada PC/Laptop.
10. Tunggu perangkat Anda hidup.

**Rekomendasi setelah install (Tidak Wajib)**
1. Buka [LuCI TTYD Terminal](http://192.168.1.1/cgi-bin/luci/admin/system/terminal) or Putty.
2. Jalankan perintah **helmiwrt** untuk melihat beberapa perintah yang ada.


<br>
#### Informasi Tambahan
- Firmware dibuat dengan optimasi mwan3 loadbalance dengan pengaturan 1+1+1=3, bukan pisah trafik.
- Jika TTYD (Terminal LuCi App) tidak tampil, ubah [https://192.168.1.1/.../terminal](https://192.168.1.1/cgi-bin/luci/admin/system/terminal) menjadi [http://192.168.1.1/.../terminal](http://192.168.1.1/cgi-bin/luci/admin/system/terminal).
- Jika **OpenClash yacd dashboard panel** tidak tampil, ganti protokol **https://** menjadi **http://** pada address bar browser yang Anda gunakan.
- v2rayA GUI dan LuCI app membutuhkan instalasi WebUI pada perintah **v2raya**.
- Gunakanlah OpenClash/Passwall/SSR+ daripada Libernet atau Xderm Mini jika ingin menggunakan VPN dengan mwan3 loadbalance.
- Libernet dan Xderm Mini tidak akan berjalan dengan mwan3 loadbalance. Jika Anda ingin menggunakan salah satu dari kedua aplikasi tersebut setelah memasang loadbalance di perintah helmilb, maka Anda harus menghapus seluruh pengaturan loadbalance pada ```etc/config/mwan3``` secara manual.
- OpenClash harus restart ketika Modem Manager (driver untuk modem QMI) restart.
- Jika port Gigabit hanya terbaca 100mb/s, solusinya adalah **ganti dengan kabel LAN yang mendukung Gigabit**.
- Koneksi modem dengan protokol ModemManager atau Mobile Data :
  - HP lt4220 Mode MBIM (setmode 1)
  - Telit ln940 Mode MBIM & QMI (setmode 1 & 2)
  - Quectel EP06-E & EM06-E Mode MBIM & QMI (usbnet 0 & 2)
  - Dell Dw5821e Mode MBIM
  - Sierra EM7430 Mode MBIM & QMI
  - Fibocom L850-GL Mode MBIM (gtusbmode 7)
  > Baca pos aslinya [disini](https://web.facebook.com/groups/2727709384212810/posts/2821718278145253/), dokumentasi modem diatas ada [disini](https://docs.google.com/document/d/1Ni0l_WSODttDZcLrSA3a2g4TfYZFGObk4DJwalJF94E/edit?fbclid=IwAR2_MtPAJm786eI6cCNXwpelAwOUspL1tItRLZqvdLzSVPBGSn2fCUiltu8)

> Jika ada yang tahu untuk memperbaiki bug ini, silahkan gunakan [GitHub issue](https://github.com/helmiau/HelmiWrt-OS/issues) atau [Grup Telegram](https://t.me/+KwiFuRZymqFmNmE1) untuk memberikan saran perbaikan.



<br>
#### Catatan
- Firmware terbaru akan tersedia setelah pukul 15.00 hingga 04.00 WIB.
- Jangan tanyakan "Kapan dibenerin?" atau yang semisalnya. Single fighter ini bos !.
- Jangan tanyakan pertanyaan orang awam, seperti : Apa aja yang perlu disiapkan untuk memasang OpenWrt di perangkatku?.
- Jangan tanyakan dukungan maupun perbaikan bug pada perangkat yang tidak didukung secara resmi.
- **Saya menolak fitur tambahan dan perbaikan tanpa saran, sumber kode, script ataupun yang lainnya.**
- **Lapuran Bug hanya tersedia di [GitHub issue](https://github.com/helmiau/HelmiWrt-OS/issues) !**, Bukan pesan pribadi ataupun kolom komentar !.
- Pesan pribadi hanya berlaku untuk **DONASI** dengan menghubungi saya [disini](https://www.helmiau.com/about/) dengan isi pesan **Saya ingin donasi**.
- Gunakan [Halaman Diskusi HelmiWrt-OS](https://github.com/helmiau/HelmiWrt-OS/discussions) untuk diskusi terkait firmware ini (akun GitHub diperlukan).
  > Catatan : Bahasa Inggris, Indonesia dan Arab diperbolehkan.


<br>
<br>
### English Guide

<br>
#### Firmware Requirements

1. SDCard/HDD/Flashdisk 4GB.
2. Raspberry Pi 1/2/3/4 or CPU/Laptop.
3. PC/Laptop with Windows OS (if you use other OS, it's up to you but idk about installation with other OS).
4. MicroSD Adapter/converter (for Raspberry Pi installation only).

<br>
#### Firmware Installation
1. Download latest firmware from **Supported Devices & Download Section** above which contain **sysupgrade** or **factory** or **UEFI** or **Legacy** words.
  - How about squashfs or ext4 ? [Read more here](https://forum.openwrt.org/t/ext4-vs-squashfs/25187/7).
  - Note : I usually use factory_ext4 file.
  - If firmware URL/download link is not available or error, follow [this link](https://github.com/helmiau/HelmiWrt-OS/discussions/18).
2. Download [Rufus](https://github.com/pbatard/rufus/releases/download/v3.13/rufus-3.13p.exe) or [Balena Etcher](https://github.com/balena-io/etcher/releases/latest)
3. Insert SDCard/Flashdisk/HDD to your PC USB slot.
4. Open Rufus/Etcher.
5. Select disk (SDCard/Flashdisk/HDD).
6. Drag and drop downloaded firmware to Rufus/Etcher window.
7. Start and wait until it burning/flashing firmware image finished.
8. Eject your SDCard/Flashdisk/HDD.
9. Put the SDCard/Flashdisk/HDD in to your Raspberry Pi SDCard slot or PC/Laptop HDD/USB slot.
10. Turn on your device, then wait until boot up properly.

**Recommendation after install (Optional)**
1. Open [LuCI TTYD Terminal](http://192.168.1.1/cgi-bin/luci/admin/system/terminal) or Putty.
2. Run **helmiwrt** commands to see some available commands.

<br>
#### Knowledgement
- Firmware is optimized for mwan3 loadbalance purpose with 1+1+1=3 setup, not traffic connection separator.
- If you get blank when open TTYD (Terminal LuCi App), change [https://192.168.1.1/.../terminal](https://192.168.1.1/cgi-bin/luci/admin/system/terminal) to [http://192.168.1.1/.../terminal](http://192.168.1.1/cgi-bin/luci/admin/system/terminal).
- If you get an error when open **OpenClash yacd dashboard panel**, change https:// to http:// protocol.
- v2rayA GUI and LuCI app is need **v2raya** command to start and v2rayA web GUI.
- Use OpenClash/Passwall/SSR+ instead of Libernet or Xderm Mini if you want to use VPN with mwan3 loadbalance.
- Libernet and Xderm Mini will not work with mwan3 loadbalance. You need to remove all configurations insiden ```etc/config/mwan3``` manually if helmilb command has been installed on your system.
- OpenClash must be restarted manually when Modem Manager (driver for QMI modem) restarted.
- If Gigabit port only read 100mb/s, the solution is by **replacing your LAN cable** with the better one which has Gigabit support.
- Connect modem with ModemManager or Mobile Data protocol :
  - HP lt4220 Mode MBIM (setmode 1)
  - Telit ln940 Mode MBIM & QMI (setmode 1 & 2)
  - Quectel EP06-E & EM06-E Mode MBIM & QMI (usbnet 0 & 2)
  - Dell Dw5821e Mode MBIM
  - Sierra EM7430 Mode MBIM & QMI
  - Fibocom L850-GL Mode MBIM (gtusbmode 7)
  > Read original post [here](https://web.facebook.com/groups/2727709384212810/posts/2821718278145253/), read above modem documentation [here](https://docs.google.com/document/d/1Ni0l_WSODttDZcLrSA3a2g4TfYZFGObk4DJwalJF94E/edit?fbclid=IwAR2_MtPAJm786eI6cCNXwpelAwOUspL1tItRLZqvdLzSVPBGSn2fCUiltu8)

> If anyone know how to fix this, please tell me by create a [GitHub issue](https://github.com/helmiau/HelmiWrt-OS/issues) or [Telegram Chat Group](https://t.me/+KwiFuRZymqFmNmE1).

<br>
#### Notes
- New firmware release will be available after 15.00 until 04.00 WIB.
- No ETA !. example: When you fix bug blablabla? or any other else.
- No noob question !. example: what things i need to install OpenWrt to a device?.
- No support and bug fix for unsupported device.
- **I REFUSE FEATURE REQUEST OR BUG FIX WITHOUT SUGGESTION, CODES OR ANYTHING.**
- **Bug Report only available under GitHub Issue !**, not a Private Message or other social media comment coloumn !.
- Private Message only available for **DONATION PURPOSE** by contacting me [here](https://www.helmiau.com/about/) with a message **I want to donate**.
- If you want to discuss about this firmware, please create a GitHub account. Then open this [HelmiWrt-OS Discussion Page](https://github.com/helmiau/HelmiWrt-OS/discussions).
  > Note : English, Indonesian and Arabic languages are allowed.

<br>
<br>
#### Default Firmware Information

<br> 

- WiFi SSID : HelmiWrt
- WiFi Password : no password
- Router/LuCI IP : 192.168.1.1
- LuCI Username : root
- LuCI Password : password

- Note: try old password above first. If it's still not work for LuCI login, get [new password here](https://pastebin.com/raw/VjUCKsZU).
- Catatan: coba terlebih dahulu password LuCI lama yang ada diatas. Jika masih belum bisa login, silahkan gunakan [password LuCI yang baru disini](https://pastebin.com/raw/VjUCKsZU).


<br>
#### Telegram Chat

<p align="center">
	<a href="https://t.me/+KwiFuRZymqFmNmE1" target="_blank">
         <i class="fab fa-telegram-plane fa-5x"></i>
	</a>
	<h6 align="center">
		<a href="https://t.me/+KwiFuRZymqFmNmE1" target="_blank">Join Telegram Chat Group</a>
	</h6>
</p>

<br>

<br>
#### Credits
[OpenWrt Official](https://github.com/openwrt/openwrt) for main OpenWrt source - [P3TERX/Actions-OpenWrt](https://github.com/P3TERX/Actions-OpenWrt) for OpenWrt LEDE GitHub actions script builder - [coolsnowwolf/lede](https://github.com/coolsnowwolf/lede) for main build source and extended packages - [SuLingGG/OpenWrt-Rpi](https://github.com/SuLingGG/OpenWrt-Rpi) for base fork github actions - [ophub/amlogic-s9xxx-openwrt](https://github.com/ophub/amlogic-s9xxx-openwrt) for comparison actions build script - [Wega Regianto](https://github.com/wegare123/ram) for ram checker and stl - [Ryan Fauzi](https://github.com/ryanfauzi1/vmesscreator) for vmess account creator provided by racevpn.com  and xderm mini - [Rudi Hartono](https://www.facebook.com/rud18) for IP Address refresher script for QMI Modems & reconnect w/o reboot script - [Prasath Mani](https://github.com/prasathmani/tinyfilemanager) for Tiny File Manager binaries & source - [OpenSpeedtest](https://github.com/AsrofurRizqi) for OpenSpeedtest binaries & sources - [Ambroz Bizjak](https://github.com/ambrop72/badvpn) for main badvpn source - [agroman.net](http://www.agroman.net/corkscrew/) for main corkscrew source - [Lutfa Ibtihaji Ilham](https://github.com/lutfailham96/libernet) for Libernet binaries - [Galih Prastowo Aji](https://github.com/hillz2/corkscrew) for corkscrew openwrt Makefile - [Friyadhi Biermann](https://github.com/friyadhibiermann/openwrt_badvpn-tun2socks) for badvpn openwrt Makefile and update - [Asrofur Rizqi](https://github.com/AsrofurRizqi) for clue to build and fix some packages and Orange Pi Zero builder- [LT4220 Facebook Group](https://facebook.com/groups/2727709384212810) and it's [documentations](https://docs.google.com/document/d/10ldzikC9EdvXT43LEtct0qSwi5qWJk-LHFZFsl8_69E/edit#heading=h.ft8rlp9e08c4) by [Nugroho](https://www.facebook.com/profile.php?id=100010890091391) as DIY Modems docs writer and IPK builder - [Raditya Budi Handoko](https://github.com/radityabh/HelmiOs-to-s905) and [Andi Rijal Habibi](https://facebook.com/) as s9xxx device repacker and maintainer - [Malik Al](https://github.com/malikshi/openwrt-rpi) for some helps with vasm (v2rayA Script Manager) - [Reyre](https://github.com/r3yr3) for some mikhmon clues - [Jaki Rahman](https://github.com/rootjack404) for some ocsm (Openclash Script Manager) additions - [Nur Rahmat Adi S](https://facebook.com/adi.persada.560) for helping me to adding OpenClash Config Editor - [Feri Adi Candra](https://github.com/feriadicandra/HelmiOs-to-s905) for s905x2 sample github build - [Neo](https://t.me/neo_at) for fixing some wrong permissions - [Abdul Aziz Amar](https://blog.kopijahe.my.id/posts/autologin-kopijahe/) for autologin wifi id seamless script.


<!--

- [config example 1](https://github.com/eallion/openwrt/blob/main/.config)
-->

[Read more original README](https://github.com/SuLingGG/OpenWrt-Rpi/blob/main/README.md#openwrt-rpi)

<h6 align="center">Copyright by <a href="http://www.helmiau.com">Helmi Amirudin</a> ® 2021 <br> Thank You ! 🤝</h6>
