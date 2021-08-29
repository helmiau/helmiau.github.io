---
title: HelmiWrt Custom Firmware for Raspberry Pi 1/2/3/4
tags: [Raspberry Pi, Lean, Custom Firmware, OpenWrt]
style: fill
color: warning
description: This is OpenWrt project forked from SuLingGG, which taken from coolsnowwolf/lede repo and I add my additions there. Compiled daily by using GitHub Actions.
comments: true
---

Source: [My Own Repo](https://github.com/helmiau/OpenWrt-Rpi#readme)

Raspberry Pi 4 OpenWrt Compile Project. (Based on [SuLingGG OpenWrt-Rpi](https://github.com/SuLingGG/OpenWrt-Rpi) compiled using GitHub Actions). This project also available for Raspberry Pi 1/2/3

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
<details><summary>My own configurations : (click to show)</summary>
<p>
<ul>
<li>Added <strong>speedtest</strong> and <strong>neofetch</strong> command.</li>
<li>Removed all languages except English.</li>
<li>Set English as default language.</li>
<li>Set timezone to WIB-7 Asia/Jakarta.</li>
<li>Add shutdown, poweroff, reboot commands.</li>
<li>Loadbalance 4 USB Hilink.</li>
<li>Add ShadowsocksR Plus+ shortcut <strong>(ssr-rst, ssr-start, ssr-stop)</strong>.</li>
<li>QMI modems supported ex. LT4220.<ul>
<li>Add IP Refresh for QMI Modems by running <strong>ipqmi</strong> using terminal.</li>
<li>Auto reconnect QMI Modems without reboot.</li>
</ul>
</li>
<li>VPN support : PPTP / L2TP / ShadowSocks / ShadowSocksR / V2ray(VMESS/VLESS) / Trojan / Trojan-Go.</li>
<li>Extended root partition to 3GB.</li>
<li>RAM Checker via Terminal by command <strong>ram</strong>.</li>
<li>VMESS Account Creation (3 days) from racevpn.com via  Terminal by command <strong>vmess</strong>.</li>
<li>Fix browser always download file index.php (like xderm and libernet) via  Terminal by command <strong>fixphp</strong>.</li>
<li>Add IP Address Info Checker. run <strong>myip</strong> using terminal for use.</li>
<li>Add IPV6 helper tool. run <strong>ipv6-helper</strong> using terminal for use.</li>
<li>Add Samba Allowed user setup. This tool will help you to add Allowed User for Samba Directory.
<ul>
<li>Run <strong>sambaset</strong> using terminal for use, then follow instruction.</li>
<li>Open Network Share <a href="http://192.168.1.1/cgi-bin/luci/admin/nas/samba">Samba Here</a>.</li>
<li>Add shared directory, fill name, path with your shared directory.</li>
<li>Fill <strong>Allowed users</strong> with <strong>USER</strong>, check <strong>Browseable</strong>, uncheck <strong>Allowed Guests</strong> and <strong>Read-Only</strong>.</li>
<li>Save and Apply.</li>
</ul>
</li>
<li>Add <strong>badvpn</strong> and <strong>corkscrew</strong> package for Xderm Mini GUI & Libernet purpose. (if you want to install Xderm or Libernet, please install it manually)</li>
<li>Add <strong>Clash Premium Core</strong> for OpenClash core.</li>
<ul>
<li>Run <strong>clashcs</strong> using terminal if you want to switch between Premium Clash Core and Latest Original Clash Core</li>
</ul>
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
### Previews
{% capture carousel_images %}
https://github.com/helmiau/OpenWrt-Rpi/raw/main/preview/openwrt-rpi-1.png
https://github.com/helmiau/OpenWrt-Rpi/raw/main/preview/openwrt-rpi-2.png
https://github.com/helmiau/OpenWrt-Rpi/raw/main/preview/openwrt-rpi-3.png
https://github.com/helmiau/OpenWrt-Rpi/raw/main/preview/openwrt-rpi-4.png
https://github.com/helmiau/OpenWrt-Rpi/raw/main/preview/openwrt-rpi-5.png
https://github.com/helmiau/OpenWrt-Rpi/raw/main/preview/openwrt-rpi-6.png
https://github.com/helmiau/OpenWrt-Rpi/raw/main/preview/openwrt-rpi-7.png
https://github.com/helmiau/OpenWrt-Rpi/raw/main/preview/openwrt-rpi-8.png
https://github.com/helmiau/OpenWrt-Rpi/raw/main/preview/openwrt-rpi-9.png
https://github.com/helmiau/OpenWrt-Rpi/raw/main/preview/openwrt-rpi-10.png
https://github.com/helmiau/OpenWrt-Rpi/raw/main/preview/openwrt-rpi-11.png
https://github.com/helmiau/OpenWrt-Rpi/raw/main/preview/openwrt-rpi-13.png
https://github.com/helmiau/OpenWrt-Rpi/raw/main/preview/openwrt-rpi-14.png
https://github.com/helmiau/OpenWrt-Rpi/raw/main/preview/openwrt-rpi-15.png
https://github.com/helmiau/OpenWrt-Rpi/raw/main/preview/openwrt-rpi-16.png
https://github.com/helmiau/OpenWrt-Rpi/raw/main/preview/openwrt-rpi-17.png
{% endcapture %}
{% include elements/carousel.html %}

{% include elements/video.html id="HsDEWwgy-xg" %}


### Firmware Requirements and Installation

**Minimum Requirements :**
1. SDCard 4GB
2. Raspberry Pi 1/2/3/4
3. PC/Laptop with Windows OS
4. MicroSD Adapter/converter

**Installation Steps :**

| Raspberry Pi<br />Version | Github<br />Release | squashfs<br />factory | squashfs<br />sysupgrade | ext4<br />factory | ext4<br />sysupgrade | rootfs |
| :-----------------------: | :----------------:  | :-------------------: | :----------------------: | :---------------: | :------------------: | :----: |
| 1/1B | [📂](https://github.com/helmiau/OpenWrt-Rpi/releases/latest) | [🔽](https://github.com/helmiau/OpenWrt-Rpi/releases/latest/download/helmiwrt-bcm27xx-bcm2708-rpi-squashfs-factory.img.gz) | [🔽](https://github.com/helmiau/OpenWrt-Rpi/releases/latest/download/helmiwrt-bcm27xx-bcm2708-rpi-squashfs-sysupgrade.img.gz) | [🔽](https://github.com/helmiau/OpenWrt-Rpi/releases/latest/download/helmiwrt-bcm27xx-bcm2708-rpi-ext4-factory.img.gz) | [🔽](https://github.com/helmiau/OpenWrt-Rpi/releases/latest/download/helmiwrt-bcm27xx-bcm2708-rpi-ext4-sysupgrade.img.gz) | [🔽](https://github.com/helmiau/OpenWrt-Rpi/releases/latest/download/helmiwrt-bcm27xx-bcm2708-rpi-rootfs.tar.gz) |
| 2/2B | [📂](https://github.com/helmiau/OpenWrt-Rpi/releases/latest) | [🔽](https://github.com/helmiau/OpenWrt-Rpi/releases/latest/download/helmiwrt-bcm27xx-bcm2709-rpi-2-squashfs-factory.img.gz) | [🔽](https://github.com/helmiau/OpenWrt-Rpi/releases/latest/download/helmiwrt-bcm27xx-bcm2709-rpi-2-squashfs-sysupgrade.img.gz) | [🔽](https://github.com/helmiau/OpenWrt-Rpi/releases/latest/download/helmiwrt-bcm27xx-bcm2709-rpi-2-ext4-factory.img.gz) | [🔽](https://github.com/helmiau/OpenWrt-Rpi/releases/latest/download/helmiwrt-bcm27xx-bcm2709-rpi-2-ext4-sysupgrade.img.gz) | [🔽](https://github.com/helmiau/OpenWrt-Rpi/releases/latest/download/helmiwrt-bcm27xx-bcm2709-rpi-2-rootfs.tar.gz) |
| 3/3B/3B+ | [📂](https://github.com/helmiau/OpenWrt-Rpi/releases/latest) | [🔽](https://github.com/helmiau/OpenWrt-Rpi/releases/latest/download/helmiwrt-bcm27xx-bcm2710-rpi-3-squashfs-factory.img.gz) | [🔽](https://github.com/helmiau/OpenWrt-Rpi/releases/latest/download/helmiwrt-bcm27xx-bcm2710-rpi-3-squashfs-sysupgrade.img.gz) | [🔽](https://github.com/helmiau/OpenWrt-Rpi/releases/latest/download/helmiwrt-bcm27xx-bcm2710-rpi-3-ext4-factory.img.gz) | [🔽](https://github.com/helmiau/OpenWrt-Rpi/releases/latest/download/helmiwrt-bcm27xx-bcm2710-rpi-3-ext4-sysupgrade.img.gz) | [🔽](https://github.com/helmiau/OpenWrt-Rpi/releases/latest/download/helmiwrt-bcm27xx-bcm2710-rpi-3-rootfs.tar.gz) |
| 4/4B | [📂](https://github.com/helmiau/OpenWrt-Rpi/releases/latest) | [🔽](https://github.com/helmiau/OpenWrt-Rpi/releases/latest/download/helmiwrt-bcm27xx-bcm2711-rpi-4-squashfs-factory.img.gz) | [🔽](https://github.com/helmiau/OpenWrt-Rpi/releases/latest/download/helmiwrt-bcm27xx-bcm2711-rpi-4-squashfs-sysupgrade.img.gz) | [🔽](https://github.com/helmiau/OpenWrt-Rpi/releases/latest/download/helmiwrt-bcm27xx-bcm2711-rpi-4-ext4-factory.img.gz) | [🔽](https://github.com/helmiau/OpenWrt-Rpi/releases/latest/download/helmiwrt-bcm27xx-bcm2711-rpi-4-ext4-sysupgrade.img.gz) | [🔽](https://github.com/helmiau/OpenWrt-Rpi/releases/latest/download/helmiwrt-bcm27xx-bcm2711-rpi-4-rootfs.tar.gz) |

1. Download latest firmware from link above which contain **sysupgrade** or **factory** words.
  - How about squashfs or ext4 ? [Read more here](https://forum.openwrt.org/t/ext4-vs-squashfs/25187/7).
  - Note : I usually use factory_ext4 file.
  - If firmware URL/download link is not available or error, follow [this link](https://github.com/helmiau/OpenWrt-Rpi/discussions/18).
2. Download [Rufus](https://github.com/pbatard/rufus/releases/download/v3.13/rufus-3.13p.exe) or [Balena Etcher](https://github.com/balena-io/etcher/releases/latest)
3. Insert SdCard
4. Open Rufus/Etcher.
5. Select disk (sdcard).
6. Drag and drop downloaded firmware to Rufus/Etcher window.
7. Start and wait until it finished.
8. Eject your sdcard.
9. Put it in to your Raspberry Pi sdcard slot.
10. Turn your Pi on, then open [LuCI TTYD Terminal](http://192.168.1.1/cgi-bin/luci/admin/system/terminal) or Putty
11. Run available commands such as helmilb, sambaset, etc. (Optional)


### Login Information
```
Router IP	: 192.168.1.1
Username	: root
Password	: password
```

### Note :
- Raspberry Pi will reboot automatically when first boot up after firmware installation.
- If you get blank when open TTYD (Terminal LuCi App), change [https://192.168.1.1/.../terminal](https://192.168.1.1/cgi-bin/luci/admin/system/terminal) to [http://192.168.1.1/.../terminal](http://192.168.1.1/cgi-bin/luci/admin/system/terminal)
- **ONLY ACCEPT DONATIONS BY CONTACTING ME FOR CONFIRMATION www.helmiau.com/about**
- **I REFUSE FEATURE REQUEST OR BUG FIX WITHOUT SUGGESTION, CODES OR ANYTHING.**
- If you want to discuss about this firmware, please create a GitHub account. Then open this [OpenWrt-Rpi Discussion Page](https://github.com/helmiau/OpenWrt-Rpi/discussions). Note : English, Indonesian and Arabic languages are allowed.

### Credits
- [OpenWrt Official](https://github.com/openwrt/openwrt) for main OpenWrt source.
- [P3TERX/Actions-OpenWrt](https://github.com/P3TERX/Actions-OpenWrt) for OpenWrt LEDE GitHub actions script builder.
- [coolsnowwolf/lede](https://github.com/coolsnowwolf/lede) for main build source and extended packages.
- [SuLingGG/OpenWrt-Rpi](https://github.com/SuLingGG/OpenWrt-Rpi) for base fork github actions.
- [ophub/amlogic-s9xxx-openwrt](https://github.com/ophub/amlogic-s9xxx-openwrt) for comparison actions build script.
- [Kry9toN/openwrt-amlogic](https://github.com/Kry9toN/openwrt-amlogic) for comparison actions, config.
- [Wega Regianto](https://github.com/wegare123/ram) for ram checker.
- [Ryan Fauzi](https://github.com/ryanfauzi1/vmesscreator) for vmess account creator provided by racevpn.com.
- [Rudi Hartono](https://www.facebook.com/rud18) for IP Address refresher script for QMI Modems & reconnect w/o reboot script.
- [LT4220 Facebook Forum](https://www.facebook.com/groups/2727709384212810) and it's [documentations](https://docs.google.com/document/d/10ldzikC9EdvXT43LEtct0qSwi5qWJk-LHFZFsl8_69E/edit#heading=h.ft8rlp9e08c4), **especially big thanks to [Nugroho](https://www.facebook.com/profile.php?id=100010890091391) as LT4220 documentation writer**
- [config example 1](https://github.com/eallion/openwrt/blob/main/.config)

[Read more original README](https://github.com/SuLingGG/OpenWrt-Rpi/blob/main/README.md#openwrt-rpi)

<h6 align="center">Copyright by <a href="http://www.helmiau.com">Helmi Amirudin</a> ® 2021 <br> Thank You ! 🤝</h6>
