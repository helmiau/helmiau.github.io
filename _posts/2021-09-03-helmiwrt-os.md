---
title: HelmiWrt OS is Customized OpenWrt Firmware
tags: [Raspberry Pi, Lean, Custom Firmware, OpenWrt]
style: fill
color: warning
description: This is OpenWrt project forked from SuLingGG, which taken from coolsnowwolf/lede repo and I add my additions there. Compiled daily by using GitHub Actions.
comments: true
---

Source: [My Own Repo](https://github.com/helmiau/HelmiWrt-OS#readme)

<br><center><img height="70px" width="80%" src="https://github.com/helmiau/helmiau.github.io/raw/master/images/helmiwrtos.svg" ></center><br>

<br>
#### Firmware Informations (features, etc)

HelmiWrt OS is a customized OpenWrt firmware with many additions to make a **ready to use** firmware. This firmware based on [SuLingGG OpenWrt-Rpi](https://github.com/SuLingGG/OpenWrt-Rpi) compiled daily using GitHub Actions. This project currently available for Raspberry Pi 1/2/3/4 and x86 (PC/Laptop) devices.

<details><summary>Main firmware features : (click to show)</summary>
<p>
<ul>
<li>Contains rich OpenWrt original LuCI plug-ins and community LuCI plug-ins</li>
<li>Integrate most wired, wireless, 3G/4G network card drivers, no need to install additional</li>
<li>Pre-install the latest version of Clash core and oh-my-zsh to minimize configuration costs</li>
<li>Pre-install all kmod ipk software packages in the firmware, pre-configure the local opkg software source, keep away from kmod conflicts</li>
<li>More comprehensive IPV6 support, the firmware built-in IPV6 CLI configuration tool, you can quickly install/uninstall/configure IPV6</li>
<li>Pull the latest OpenWrt source code and community plug-in source code at 2:00 am every day to compile and provide split downloads to ensure that you always get the latest experience</li>
<li>Provide packages-server (including WEB server package archive), which can quickly establish LAN software source under Windows</li>
<li>For advanced users, provide OpenWrt Image Builder, OpenWrt SDK, OpenWrt Tool Chain, and dl archive files
Contains scientific Internet tools:</li>
<li>The firmware supports the following scientific Internet tools: ①ShadowSocksR Plus+ ②Passwall ③OpenClash</li>
<li>Among them, ShadowSocksR Plus+ in Offical version firmware is transplanted from Lean version source code.</li>
<li>Both now support SS/SSR/V2ray/Trojan/Socks5 protocol, support Kcptun, support Netflix streaming, support link/subscription import node, Socks5 server, access control, automatic switching of failed nodes. Among them, Passwall additionally supports Brook and V2ray diversion.</li>
<li>For OpenClash, the latest version of Clash core (clash/clash_tun/clash_game) has been pre-installed in the firmware, and it can be used out of the box without additional download.</li>
<li>Support ad blocking AdGuard Home<blockquote>
<p>Note: The advertisement blocking effect at the router level is not good. If you are very sensitive to advertisements, it is recommended to use the browser plug-in-level advertisement blocking plugin. In addition, ad blocking tools may severely affect internet speed.</p>
</blockquote>
</li>
<li>Support to unlock NetEase Cloud gray songs:</li>
<li>Contains three schemes of Golang/Nodejs/cloud unlocking.</li>
<li>Support Jingdong sign-in service, you can get 20+ golden beans/day unattended.</li>
<li>Support Docker container arm and aarch64 (arm64) architecture images. Before pulling the image, please confirm that the image has the above architecture version and use the corresponding architecture tag to pull it.</li>
<li>Support AirPlay2 and PCHiFi digital turntable remote control function, you can push music to the Raspberry Pi to play and control through the AirPlay feature.</li>
<li>Support Samba/CIFSD/FTP/SFTP file transfer, support mounting Samba/NFS file system to local, support Syncthing and VerySync synchronization, support Rclone to mount network disk files to local.</li>
<li>Support disk management, you can create/remove partitions and create Raid arrays with one click.</li>
<li>Support file assistant / file browser (Filemanager) / Kodexplorer (Kodexplorer), can manage the files in OpenWrt online.</li>
<li>Support Aria2 and Transmission download tools, you can download http/https/BT seeds/magnet links to Raspberry Pi.</li>
<li>Support SSR server (libv/python), V2ray server, Brook server, Trojan server, PPTP VPN server, IPSec VPN server, OpenVPN server, N2N v2 VPN, ZeroTier, support OpenVPN client, PPTP/L2TP client, OpenConnect client, WireGuard VPN.</li>
<li>Support DDNS (support Dnspod and Alibaba Cloud DDNS), SmartDNS, ARP binding.</li>
<li>Support Frpc/NPS intranet penetration and Frps server.</li>
<li>Support WeChat push (Server sauce), USB print server, KMS server, Wake-on-LAN, Thunderbird, Tianyi Family Cloud/Cloud Disk to speed up.</li>
<li>Support SQM Qos, Socat, support udpspeeder and udp2raw acceleration, support SFE acceleration, bridge acceleration, IPV6 acceleration, FULLCONE NAT acceleration, BBR acceleration.</li>
<li>Support multi-line multi-dial, load balancing, MWAN3 shunt assistant.</li>
</ul>
</p>
</details>

<details><summary>About IPV6 information, Support, etc. (click to show)</summary>
<p>
<p>IPV6 is not installed in this firmware by default, but it&#39;s available and ready to install. Added within this firmware <strong>ipv6-helper</strong> tools to facilitate quick installation and configuration IPV6 module through terminal.</p>
<blockquote>
<p>⚠️This tool is currently under <strong>development</strong> state, which mean there still some uncertainties or bugs or anything else. So, please test with your own risks.</p>
</blockquote>
<p>In OpenWrt of SSH or TTYD executed ipv6-helper command information tools can help:</p>
<pre><code><span class="hljs-comment"># root @ HelmiWrt in ~ [19:20:23]</span>
$ ipv6-helper

This tool can help you install IPV6 modules on OpenWrt.

Usage:
ipv6-helper<span class="hljs-built_in"> sub-command
</span>Example:
        ipv6-helper install: Install ipv6-helper &amp; IPV6 modules
        ipv6-helper remove: Remove ipv6-helper &amp; IPV6 modules

Optional Usage:
        ipv6-helper server: Set IPV6 configuration to server mode
        ipv6-helper relay: Set IPV6 configuration to relay mode
        ipv6-helper hybird: Set IPV6 configuration to hybird mode
        ipv6-helper clean: Remove mwan3 modules
</code></pre><h4 id="usage">Usage</h4>
<pre><code>Main usage
ipv6-helper <span class="hljs-keyword">install</span> : <span class="hljs-keyword">Install</span> IPV6 <span class="hljs-keyword">module</span> <span class="hljs-keyword">and</span> configure IPV6 <span class="hljs-keyword">as</span> <span class="hljs-keyword">Server</span> <span class="hljs-keyword">mode</span> (<span class="hljs-keyword">default</span>)
ipv6-helper remove  : Remove IPV6 <span class="hljs-keyword">module</span> <span class="hljs-keyword">and</span> roll back all configurations related <span class="hljs-keyword">to</span> IPV6

Additional <span class="hljs-keyword">usage</span>
ipv6-helper <span class="hljs-keyword">server</span>  : Configure IPV6 <span class="hljs-keyword">as</span> <span class="hljs-keyword">Server</span> <span class="hljs-keyword">mode</span>
ipv6-helper relay   : Configure IPV6 <span class="hljs-keyword">as</span> Relay <span class="hljs-keyword">mode</span>
ipv6-helper hybird  : Configure IPV6 <span class="hljs-keyword">to</span> hybrid (Hybird) <span class="hljs-keyword">mode</span>
ipv6-helper clean   : Remove modules <span class="hljs-keyword">and</span> LuCI APP related <span class="hljs-keyword">to</span> wan3 (irreversible/generally <span class="hljs-keyword">not</span> used)
</code></pre><h4 id="information-precautions">Informations &amp; Precautions</h4>
<ul>
<li>Performed <strong>ipv6-helper install</strong> command will automatically install IPV6 IPV6 DHCP server mode, which mean you not need to perform additional <strong>ipv6-helper server</strong> to switch mode.</li>
<li>After performed <strong>ipv6-helper install</strong>, you will be prompted to restart after installation of the IPV6 module is completed. You can choose to restart immediately or restart later, just restart immediately according to the actual situation.</li>
<li>IPV6 work under OpenWrt after restarting the server (Server) mode is not normal, you can try to run <strong>ipv6-helper hybird</strong> command to make IPV6 is configured as mixed (Hybird) mode.</li>
<li>If above step still abnormal after the restart, execute <strong>ipv6-helper relay</strong> to reconfigured to mix (Hybird) mode, then restart your device.</li>
<li>If above step still abnormal, may be OpenWrt unable to adapt the current network environment, we recommend Google to find other solutions (eg. Nat6).</li>
<li>Ignore <strong>uci: Entry not found</strong> prompt when installing or switching the IPV6 mode or removing the IPV6 module.</li>
<li>If you use <strong>OpenClash</strong>, go to <strong>Global Settings</strong> page, then go to <strong>DNS Settings</strong>, then enable <strong>Enable ipv6 Resolve</strong>, Scroll down -> Commit Config -> Apply Config.</li>
</ul>
</p>
</details>

<br>
**Tweaked & patched by Helmi Amirudin**
<!--<details><summary>Tweaked by My own configurations : (click to show)</summary>-->
<p>
<ul>
<li>Firmware base is from SuLingGG/OpenWrt-Rpi. But, HelmiWrt OS has many tweaks, optimizations and configurations written by Helmi Amirudin.</li>
<li>Removed all unused bloatwares.</li>
<li>Removed all languages except English.</li>
<li>Set <strong>English</strong> as default language.</li>
<li>Set <strong>WIB-7 Asia/Jakarta</strong> as default timezone.</li>
<li>Add shutdown, poweroff, reboot commands to LuCI.</li>
<li>Activated mwan3 Loadbalance :
  <ul>
  <li>4 USB Interface (Hilink, USB to LAN, iOS, Android devices).</li>
  <li>2 QMI Interface (ex. LT4220).</li>
  <li>1 3G Interface.</li>
  </ul>
</li>
<li>Add ShadowsocksR Plus+ shortcut <strong>(ssr-rst, ssr-start, ssr-stop)</strong>.</li>
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
  <li>SSH (SSL Support).</li>
  <li>Trojan.</li>
  <li>V2ray (Vmess, Vless).</li>
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
  <li>Run <strong>vmess</strong> to create free vmess account for 3 days.</li>
  <li>Run <strong>fixphp</strong> to fix browser always download file index.php (like xderm and libernet).</li>
  <li>Run <strong>myip</strong> to check your public IP address.</li>
  <li>Run <strong>ipv6-helper</strong> to manage ipv6 support.</li>
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
#### Supported Devices & Download Section

- Raspberry Pi (1/2/3/4).

| Raspberry Pi<br />Version | Github<br />Release | squashfs<br />factory | squashfs<br />sysupgrade | ext4<br />factory | ext4<br />sysupgrade | rootfs |
| :-----------------------: | :-----------------: | :-------------------: | :----------------------: | :---------------: | :------------------: | :----: |
| 1/1B | [📂](https://github.com/helmiau/HelmiWrt-OS/releases/latest) | [🔽](https://github.com/helmiau/HelmiWrt-OS/releases/latest/download/helmiwrt-bcm27xx-bcm2708-rpi-squashfs-factory.img.gz) | [🔽](https://github.com/helmiau/HelmiWrt-OS/releases/latest/download/helmiwrt-bcm27xx-bcm2708-rpi-squashfs-sysupgrade.img.gz) | [🔽](https://github.com/helmiau/HelmiWrt-OS/releases/latest/download/helmiwrt-bcm27xx-bcm2708-rpi-ext4-factory.img.gz) | [🔽](https://github.com/helmiau/HelmiWrt-OS/releases/latest/download/helmiwrt-bcm27xx-bcm2708-rpi-ext4-sysupgrade.img.gz) | [🔽](https://github.com/helmiau/HelmiWrt-OS/releases/latest/download/helmiwrt-bcm27xx-bcm2708-rpi-rootfs.tar.gz) |
| 2/2B | [📂](https://github.com/helmiau/HelmiWrt-OS/releases/latest) | [🔽](https://github.com/helmiau/HelmiWrt-OS/releases/latest/download/helmiwrt-bcm27xx-bcm2709-rpi-2-squashfs-factory.img.gz) | [🔽](https://github.com/helmiau/HelmiWrt-OS/releases/latest/download/helmiwrt-bcm27xx-bcm2709-rpi-2-squashfs-sysupgrade.img.gz) | [🔽](https://github.com/helmiau/HelmiWrt-OS/releases/latest/download/helmiwrt-bcm27xx-bcm2709-rpi-2-ext4-factory.img.gz) | [🔽](https://github.com/helmiau/HelmiWrt-OS/releases/latest/download/helmiwrt-bcm27xx-bcm2709-rpi-2-ext4-sysupgrade.img.gz) | [🔽](https://github.com/helmiau/HelmiWrt-OS/releases/latest/download/helmiwrt-bcm27xx-bcm2709-rpi-2-rootfs.tar.gz) |
| 3/3B/3B+ | [📂](https://github.com/helmiau/HelmiWrt-OS/releases/latest) | [🔽](https://github.com/helmiau/HelmiWrt-OS/releases/latest/download/helmiwrt-bcm27xx-bcm2710-rpi-3-squashfs-factory.img.gz) | [🔽](https://github.com/helmiau/HelmiWrt-OS/releases/latest/download/helmiwrt-bcm27xx-bcm2710-rpi-3-squashfs-sysupgrade.img.gz) | [🔽](https://github.com/helmiau/HelmiWrt-OS/releases/latest/download/helmiwrt-bcm27xx-bcm2710-rpi-3-ext4-factory.img.gz) | [🔽](https://github.com/helmiau/HelmiWrt-OS/releases/latest/download/helmiwrt-bcm27xx-bcm2710-rpi-3-ext4-sysupgrade.img.gz) | [🔽](https://github.com/helmiau/HelmiWrt-OS/releases/latest/download/helmiwrt-bcm27xx-bcm2710-rpi-3-rootfs.tar.gz) |
| 4/4B | [📂](https://github.com/helmiau/HelmiWrt-OS/releases/latest) | [🔽](https://github.com/helmiau/HelmiWrt-OS/releases/latest/download/helmiwrt-bcm27xx-bcm2711-rpi-4-squashfs-factory.img.gz) | [🔽](https://github.com/helmiau/HelmiWrt-OS/releases/latest/download/helmiwrt-bcm27xx-bcm2711-rpi-4-squashfs-sysupgrade.img.gz) | [🔽](https://github.com/helmiau/HelmiWrt-OS/releases/latest/download/helmiwrt-bcm27xx-bcm2711-rpi-4-ext4-factory.img.gz) | [🔽](https://github.com/helmiau/HelmiWrt-OS/releases/latest/download/helmiwrt-bcm27xx-bcm2711-rpi-4-ext4-sysupgrade.img.gz) | [🔽](https://github.com/helmiau/HelmiWrt-OS/releases/latest/download/helmiwrt-bcm27xx-bcm2711-rpi-4-rootfs.tar.gz) |

- x86/x64 (ex. Laptops, PC).

| Device Name | Github<br />Release | squashfs<br />UEFI | squashfs<br />Legacy | ext4<br />UEFI | ext4<br />Legacy |
| :---------: | :-----------------: | :----------------: | :------------------: | :------------: | :--------------: |
| x86-generic (32bit) | [📂](https://github.com/helmiau/HelmiWrt-OS/releases/latest) | [🔽](https://github.com/helmiau/HelmiWrt-OS/releases/latest/download/helmiwrt-x86-generic-generic-squashfs-combined-efi.img.gz) | [🔽](https://github.com/helmiau/HelmiWrt-OS/releases/latest/download/helmiwrt-x86-generic-generic-squashfs-combined.img.gz) | [🔽](https://github.com/helmiau/HelmiWrt-OS/releases/latest/download/helmiwrt-x86-generic-generic-ext4-combined-efi.img.gz) | [🔽](https://github.com/helmiau/HelmiWrt-OS/releases/latest/download/helmiwrt-x86-generic-generic-ext4-combined.img.gz) |
| x86-64 (64bit) | [📂](https://github.com/helmiau/HelmiWrt-OS/releases/latest) | [🔽](https://github.com/helmiau/HelmiWrt-OS/releases/latest/download/helmiwrt-x86-64-generic-squashfs-combined-efi.img.gz) | [🔽](https://github.com/helmiau/HelmiWrt-OS/releases/latest/download/helmiwrt-x86-64-generic-squashfs-combined.img.gz) | [🔽](https://github.com/helmiau/HelmiWrt-OS/releases/latest/download/helmiwrt-x86-64-generic-ext4-combined-efi.img.gz) | [🔽](https://github.com/helmiau/HelmiWrt-OS/releases/latest/download/helmiwrt-x86-64-generic-ext4-combined.img.gz) |


<br>
{% capture list_items %}
Tutorial Bahasa Indonesia
English Guide
{% endcapture %}
{% include elements/list.html title="Installation Index / Daftar Isi Instalasi" type="toc" %}


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
- Libernet dan Xderm Mini tidak akan berjalan dengan mwan3 loadbalance. Jika Anda ingin menggunakannya, Anda harus mengatur beberapa pengaturan pada /etc/config/network, /etc/config/firewall, etc/config/mwan3 secara manual. (Jika ada yang tahu untuk memperbaiki bug ini, silahkan gunakan [GitHub issue](https://github.com/helmiau/HelmiWrt-OS/issues) untuk memberi perbaikan).
- Gunakanlah OpenClash/Passwall/SSR+ daripada Libernet atau Xderm Mini jika ingin menggunakan VPN dengan mwan3 loadbalance.


<br>
#### Catatan
- Jangan tanyakan "Kapan dibenerin? atau yang semisalnya. Single fighter ini bos !.
- Jangan tanyakan pertanyaan orang awam, seperti : Apa aja yang perlu disiapkan untuk memasang OpenWrt di perangkatku?.
- Jangan tanyakan dukungan maupun perbaikan bug pada perangkat yang tidak didukung secara resmi.
- **Saya menolak fitur tambahan dan perbaikan tanpa saran, sumber kode, script ataupun yang lainnya.**
- **Lapuran Bug hanya tersedia di [GitHub issue](https://github.com/helmiau/HelmiWrt-OS/issues) !**, Bukan pesan pribadi ataupun kolom komentar !.
- Pesan pribadi hanya berlaku untuk **DONASI** dengan menghubungi saya [disini](https://www.helmiau.com/about/) dengan isi pesan **Saya ingin donasi**.
- Gunakan [Halaman Diskusi HelmiWrt-OS](https://github.com/helmiau/HelmiWrt-OS/discussions) untuk diskusi terkait firmware ini (akun GitHub diperlukan).
  > Note : English, Indonesian and Arabic languages are allowed.


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
- Libernet and Xderm Mini will not work with mwan3 loadbalance. You need to reconfigure /etc/config/network, /etc/config/firewall, etc/config/mwan3 by yourself. (If anyone know how to fix this, please tell me by create a [GitHub issue](https://github.com/helmiau/HelmiWrt-OS/issues)).
- Use OpenClash/Passwall/SSR+ instead of Libernet or Xderm Mini if you want to use VPN with mwan3 loadbalance.

<br>
#### Notes
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
#### Login Information
```
WiFi SSID      : HelmiWrt
WiFi Password  : no password

Router/LuCI IP : 192.168.1.1
LuCI Username  : root
LuCI Password  : password
```

<br>
#### Credits
- [OpenWrt Official](https://github.com/openwrt/openwrt) for main OpenWrt source.
- [P3TERX/Actions-OpenWrt](https://github.com/P3TERX/Actions-OpenWrt) for OpenWrt LEDE GitHub actions script builder.
- [coolsnowwolf/lede](https://github.com/coolsnowwolf/lede) for main build source and extended packages.
- [SuLingGG/OpenWrt-Rpi](https://github.com/SuLingGG/OpenWrt-Rpi) for base fork github actions.
- [ophub/amlogic-s9xxx-openwrt](https://github.com/ophub/amlogic-s9xxx-openwrt) for comparison actions build script.
- [Wega Regianto](https://github.com/wegare123/ram) for ram checker.
- [Ryan Fauzi](https://github.com/ryanfauzi1/vmesscreator) for vmess account creator provided by racevpn.com.
- [Rudi Hartono](https://www.facebook.com/rud18) for IP Address refresher script for QMI Modems & reconnect w/o reboot script.
- [LT4220 Facebook Forum](https://www.facebook.com/groups/2727709384212810) and it's [documentations](https://docs.google.com/document/d/10ldzikC9EdvXT43LEtct0qSwi5qWJk-LHFZFsl8_69E/edit#heading=h.ft8rlp9e08c4), **big thanks to [Nugroho](https://www.facebook.com/profile.php?id=100010890091391) as LT4220 docs writer**
- [config example 1](https://github.com/eallion/openwrt/blob/main/.config)

[Read more original README](https://github.com/SuLingGG/OpenWrt-Rpi/blob/main/README.md#openwrt-rpi)

<h6 align="center">Copyright by <a href="http://www.helmiau.com">Helmi Amirudin</a> ® 2021 <br> Thank You ! 🤝</h6>
