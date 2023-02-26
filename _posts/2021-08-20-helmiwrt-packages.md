---
title: HelmiWrt LuCI App Packages for OpenWrt
tags: [Package, LuCI, App, OpenWrt]
style: fill
color: secondary
description:  HelmiWrt packages is my LuCI app repository which contains additional LuCI packages for OpenWrt.
---
Source: [My Own Repo](https://github.com/helmiau/helmiwrt-packages)

![HelmiWrt Preview](https://raw.githubusercontent.com/helmiau/helmiau.github.io/master/images/helmiwrt-packages.png)


{% capture list_items %}
LuCI Libernet App
LuCI Xderm Mini App
LuCI Xderm Limiter
LuCI OpenSpeedtest App
LuCI Tiny File Manager App
LuCI Shutdown App
LuCI v2rayA App
LuCI Mikrotik Monitor App
LuCI Mikrotik Monitor V4 App
LuCI Wegare STL GUI
LuCI Free VPN Sites
LuCI MulImiter
LuCI myXL Lite
Badvpn and Corkscrew
Build usage
Installation of IPK file
Pemasangan IPK
Credits
References
{% endcapture %}
{% include elements/list.html title="HelmiWrt Packages for OpenWrt Page Index" type="toc" %}


#### LuCI Libernet App
This package has 3 versions/options :
1. luci-app-libernet : LuCI App Libernet Only without binaries.
2. luci-app-libernet-bin : LuCI App Libernet + original Libernet binaries.
3. luci-app-libernet-plus : LuCI App Libernet + Libernet Plus binaries (remove login page and speedtest, added auto reconnect menu)

Note :
- Please select one of installation above, don't install all packages.
- This package will be shown under **LuCI -> Services -> Libernet**

![libernet-plus](https://raw.githubusercontent.com/helmiau/helmiwrt-packages/main/preview/libernet-prev.png)

![libernet-plus](https://raw.githubusercontent.com/helmiau/helmiwrt-packages/main/preview/libernet-plus-prev.png)


#### LuCI Xderm Mini App
This package has 3 versions/options :
1. luci-app-xderm : LuCI App Xderm Mini Only without binaries
2. luci-app-xderm-bin : LuCI App Xderm Mini + original binaries

Note :
- Please select one of installation above, don't install all packages.
- This package will be shown under **LuCI -> Services -> Xderm Mini**

![xderm-plus](https://raw.githubusercontent.com/helmiau/helmiwrt-packages/main/preview/xderm-prev.png)


#### LuCI Xderm Limiter
Xderm Limiter will give internet speed limit to every registered device.

This package will be shown under **LuCI -> Services -> Xderm Limiter**

![xderm-limit](https://raw.githubusercontent.com/helmiau/helmiwrt-packages/main/preview/xderm-limiter-prev.png)


#### LuCI OpenSpeedtest App
Speedtest by [OpenSpeedtest.com](openspeedtest.com), required connections when using this app.

This package will be shown under **LuCI -> Services -> OpenSpeedtest**

![ost](https://raw.githubusercontent.com/helmiau/helmiwrt-packages/main/preview/openspeedtest-prev.png)


#### LuCI Tiny File Manager App
File manager by [Prasath Mani](https://github.com/prasathmani/tinyfilemanager).

This package will be shown under **LuCI -> NAS -> Tiny File Manager**

![tfm](https://raw.githubusercontent.com/helmiau/helmiwrt-packages/main/preview/tinyfilemanager-prev.png)


#### LuCI Shutdown App

This package will be shown under **LuCI -> System -> Shutdown**


#### LuCI v2rayA App

This package will be shown under **LuCI -> Services -> v2rayA**

![tfm](https://raw.githubusercontent.com/helmiau/helmiwrt-packages/main/preview/v2raya-prev.png)


#### LuCI Mikrotik Monitor App

This package will be shown under **LuCI -> Services -> Mikrotik Monitor**

![tfm](https://raw.githubusercontent.com/helmiau/helmiwrt-packages/main/preview/mikhmon-prev.png)


#### LuCI Mikrotik Monitor V4 App

This package will be shown under **LuCI -> Services -> Mikrotik Monitor V4**

![tfm](https://raw.githubusercontent.com/helmiau/helmiwrt-packages/main/preview/mikhmonv4-prev.png)


#### LuCI Wegare STL GUI

This package will be shown under **LuCI -> Services -> Wegare STL**

![tfm](https://raw.githubusercontent.com/helmiau/helmiwrt-packages/main/preview/wegare-prev.png)


#### LuCI Free VPN Sites

This package will be shown under **LuCI -> Services -> VPN Site List**

![tfm](https://raw.githubusercontent.com/helmiau/helmiwrt-packages/main/preview/freevpnsite-prev.png)


#### LuCI MulImiter

This package will be shown under **LuCI -> Services -> MulImiter**

![tfm](https://raw.githubusercontent.com/helmiau/helmiwrt-packages/main/preview/mulimiter-prev.png)


#### LuCI myXL Lite

This package will be shown under **LuCI -> Status -> myXL Lite**

![tfm](https://raw.githubusercontent.com/helmiau/helmiwrt-packages/main/preview/myxllite-prev.png)


#### Badvpn and Corkscrew
This repository is for archiving badvpn & corkscrew which working with latest snapshot OpenWrt build. Collected by [helmiau](http://www.github.com/helmiau)

tun2socks openwrt v1.999.128 **NEW DEC 2020** update by [Friyadhi Biermann](https://github.com/friyadhibiermann/openwrt_badvpn-tun2socks).

Supported libraries :
```
NSS
NSPR
badvpn-server
badvpn-client
badvpn-tun2socks
badvpn-udpgw
badvpn-tunctl
badvpn-ncd
badvpn-ncd-request
```

### Build usage
If you want to build these packages manually or adding it to your firmware, do these steps :

- Git clone this repo to your local files by running this command

	```
	git clone --depth=1 https://github.com/helmiau/helmiwrt-packages
	```
- Then add lines below to your **.config** file

	```

	#HelmiWrt Packages
	CONFIG_PACKAGE_badvpn=y
	CONFIG_PACKAGE_corkscrew=y
	CONFIG_PACKAGE_luci-app-freevpnsite=y
	CONFIG_PACKAGE_luci-app-libernet=n
	CONFIG_PACKAGE_luci-app-libernet-bin=n
	CONFIG_PACKAGE_luci-app-libernet-plus=y
	CONFIG_PACKAGE_luci-app-mikhmon=y
	CONFIG_PACKAGE_luci-app-mikhmon4=y
	CONFIG_PACKAGE_luci-app-mulimiter=y
	CONFIG_PACKAGE_luci-app-myxllite=y
	CONFIG_PACKAGE_luci-app-openspeedtest=y
	CONFIG_PACKAGE_luci-app-shutdown=y
	CONFIG_PACKAGE_luci-app-tinyfm=y
	CONFIG_PACKAGE_luci-app-xderm-bin=y
	CONFIG_PACKAGE_luci-app-xderm=n
	CONFIG_PACKAGE_luci-app-xderm-limit=y
	CONFIG_PACKAGE_luci-app-v2raya=y
	CONFIG_PACKAGE_luci-app-wegare=y
	```
	> Change **n** to unuse the package or **y** to use the package


#### Installation of IPK file
1. Run commands below to download **`hpipk`** script to your OpenWRT (choose one of installation method below):

	`wget` installation:

	```sh
	wget --no-check-certificate https://raw.githubusercontent.com/helmiau/helmiwrt-packages/main/hpipk -O /bin/hpipk && chmod 755 /bin/hpipk
	```

	`curl` installation:

	```sh
	curl -sL https://raw.githubusercontent.com/helmiau/helmiwrt-packages/main/hpipk > /bin/hpipk && chmod 755 /bin/hpipk
	```

2. Then run **``hpipk``** script using terminal, usage and ipk lists with versions will be shown under terminal.

	Example: If you want to install Wegare STL, run **``hpipk luci-app-wegare_1.0-1_all.ipk``** using terminal.

3. Some available commands from **``hpipk``** script

	```
	hpipk -l : Read lists of available ipks.
	hpipk appName_ver.ipk : Install appName_ver.ipk.
	hpipk -fd appName_ver.ipk : Force install appName_ver.ipk ignoring dependencies.
	hpipk -dl appName_ver.ipk : Download appName_ver.ipk only.
	```


#### Pemasangan IPK
1. Jalankan perintah dibawah ini di terminal untuk memasang skrip **`hpipk`** para OpenWRT-mu (pilih salah satu):

	`wget` installation:

	```sh
	wget --no-check-certificate https://raw.githubusercontent.com/helmiau/helmiwrt-packages/main/hpipk -O /bin/hpipk && chmod 755 /bin/hpipk
	```

	`curl` installation:

	```sh
	curl -sL https://raw.githubusercontent.com/helmiau/helmiwrt-packages/main/hpipk > /bin/hpipk && chmod 755 /bin/hpipk
	```

2. Jalankan perintah **``hpipk``** pada terminal untuk melihat daftar IPK dan versinya.

	Contoh: Jika ingin memasang Wegare STL, jalankan perintah **``hpipk luci-app-wegare_1.0-1_all.ipk``** di terminal.

3. Beberapa perintah yang tersedia dalah skrip **``hpipk``**

	```
	hpipk -l : Melihat daftar IPK yang tersedia beserta versinya.
	hpipk appName_ver.ipk : Install appName_ver.ipk.
	hpipk -fd appName_ver.ipk : Install paksa appName_ver.ipk tanpa dependencies.
	hpipk -dl appName_ver.ipk : Hanya unduh appName_ver.ipk.
	```


### Credits
- [Immortalwrt](github.com/immortalwrt) for LuCI App comparison.
- [Helmi Amirudin](helmiau.com/about) for making these LuCI App packages.
- [Prasath Mani](https://github.com/prasathmani/tinyfilemanager) for Tiny File Manager binaries & source.
- [OpenSpeedtest](https://github.com/AsrofurRizqi) for OpenSpeedtest binaries & sources.
- [Ambroz Bizjak](https://github.com/ambrop72/badvpn) for main badvpn source.
- [agroman.net](http://www.agroman.net/corkscrew/) for main corkscrew source.
- [Ryan Fauzi](https://github.com/ryanfauzi1/xderm-mini_GUI) for Xderm Mini & Limiter GUI binaries.
- [Lutfa Ibtihaji Ilham](https://github.com/lutfailham96/libernet) for Libernet binaries.
- [Galih Prastowo Aji](https://github.com/hillz2/corkscrew) for corkscrew openwrt Makefile.
- [Friyadhi Biermann](https://github.com/friyadhibiermann/openwrt_badvpn-tun2socks) for badvpn openwrt Makefile and update.
- [Asrofur Rizqi](https://github.com/AsrofurRizqi) for clue to build badvpn & corkscrew packages.
- [Reyre](https://github.com/r3yr3) for building ipk's from this packages.
- [Laksamadi Guko](https://github.com/laksa19/mikhmonv3) as original mikhmonv3 coder.
- [v2rayA](https://github.com/v2rayA/v2raya-web) as v2rayA web gui creator.
- [Nur Rahmat Adi S](https://facebook.com/adi.persada.560) for helping me to adding OpenClash Config Editor, and STL Wegare GUI.
- [Nugroho](https://www.facebook.com/profile.php?id=100010890091391) for helping me to fix some codes and simplify.
- [M Nabil Shah Nawwaz](https://www.facebook.com/Official.HunterNblz) for helping me to improve STL Wegare GUI.
- [Rizkirmdhn](https://github.com/rizpedia/myxllite) for myXL Lite - XL Axiata package checker including unlimited quota FUP.
- [Teguh Santoso](https://github.com/tegohsx/mulimiter) for MulImiter - OpenWrt bandwidth limiter through iptables firewall with PHP GUI.


### References
- [prasathmani/tinyfilemanager](https://github.com/prasathmani/tinyfilemanager)
- [luci-app-fileassistant](https://github.com/immortalwrt/luci/tree/master/applications/luci-app-fileassistant)
- [luci-app-filebrowser](https://github.com/immortalwrt/luci/tree/master/applications/luci-app-filebrowser)
- [ryanfauzi1/xderm-mini_GUI](https://github.com/ryanfauzi1/xderm-mini_GUI)
- [lutfailham96/libernet](https://github.com/lutfailham96/libernet)
- [OpenSpeedtest for Website](http://openspeedtest.com/speed-testing-application-for-your-website.php)
- [ambrop72/badvpn](https://github.com/ambrop72/badvpn/wiki/Tun2socks)
- [code.google.com/archive/p/badvpn](https://code.google.com/archive/p/badvpn/downloads)
- [hillz2/corkscrew](https://github.com/hillz2/corkscrew)
- [patpadgett/corkscrew](https://github.com/patpadgett/corkscrew)

<h6 align="center">Copyright by <a href="http://www.helmiau.com">Helmi Amirudin</a> ® 2021 <br> Thank You ! 🤝</h6>
