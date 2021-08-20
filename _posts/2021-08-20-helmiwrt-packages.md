---
title: HelmiWrt LuCI App Packages for OpenWrt
tags: [Package, LuCI, App, OpenWrt]
style: fill
color: secondary
description:  HelmiWrt packages is my LuCI app repository which contains additional LuCI packages for OpenWrt.
comments: true
---
Source: [My Own Repo](https://github.com/helmiau/helmiwrt-packages)


{% capture list_items %}
LuCI Libernet App
LuCI Xderm Mini App
LuCI OpenSpeedtest App
LuCI Tiny File Manager App
LuCI Shutdown App
Usage
Credits
References
{% endcapture %}
{% include elements/list.html title="HelmiWrt Packages for OpenWrt" type="toc" %}


#### LuCI Libernet App
There is 3 versions/options under this package :
1. Libernet Original (Only LuCI App without binaries)
2. Libernet Original + binaries
3. Libernet Plus (remove login page and speedtest, added auto reconnect menu)

> Please select one of installation above, don't install all packages. This package will be shown under **LuCI -> Services -> Libernet**

![libernet-plus](https://raw.githubusercontent.com/helmiau/helmiwrt-packages/main/preview/libernet-prev.png)

![libernet-plus](https://raw.githubusercontent.com/helmiau/helmiwrt-packages/main/preview/libernet-plus-prev.jpg)


#### LuCI Xderm Mini App
There is 3 versions/options under this package :
1. Xderm Mini Original (Only LuCI App without binaries)
2. Xderm Mini Original + binaries

> Please select one of installation above, don't install all packages. This package will be shown under **LuCI -> Services -> Xderm Mini**

![xderm-plus](https://raw.githubusercontent.com/helmiau/helmiwrt-packages/main/preview/xderm-prev.png)


#### LuCI OpenSpeedtest App
Speedtest by [OpenSpeedtest.com](openspeedtest.com), required connections when using this app.

> This package will be shown under **LuCI -> Services -> OpenSpeedtest**

![ost](https://raw.githubusercontent.com/helmiau/helmiwrt-packages/main/preview/openspeedtest-prev.png)


#### LuCI Tiny File Manager App
File manager by [Prasath Mani](https://github.com/prasathmani/tinyfilemanager).

> This package will be shown under **LuCI -> NAS -> Tiny File Manager**

![tfm](https://raw.githubusercontent.com/helmiau/helmiwrt-packages/main/preview/tinyfilemanager-prev.png)


#### LuCI Shutdown App

> This package will be shown under **LuCI -> System -> Shutdown**


### Usage
- Git clone this repo to your local files by running this command
```
git clone --depth=1 https://github.com/helmiau/helmiwrt-packages
```
- Then add lines below to your **.config** file
```
CONFIG_PACKAGE_luci-app-libernet=n
CONFIG_PACKAGE_luci-app-libernet-bin=n
CONFIG_PACKAGE_luci-app-libernet-plus=y
CONFIG_PACKAGE_luci-app-openspeedtest=y
CONFIG_PACKAGE_luci-app-shutdown=y
CONFIG_PACKAGE_luci-app-tinyfilemanager=y
CONFIG_PACKAGE_luci-app-xderm-bin=y
CONFIG_PACKAGE_luci-app-xderm=n
```
> Change "n" to unuse the package or "y" to use the package


### Credits
- [Immortalwrt](github.com/immortalwrt) for LuCI App comparison.
- [Helmi Amirudin](helmiau.com/about) for making these LuCI App packages.
- [Prasath Mani](https://github.com/prasathmani/tinyfilemanager) for Tiny File Manager binaries & source.
- [OpenSpeedtest](https://github.com/AsrofurRizqi) for OpenSpeedtest binaries & sources.
- [Ryan Fauzi](https://github.com/ryanfauzi1/xderm-mini_GUI) for Xderm Mini GUI binaries.
- [Lutfa Ibtihaji Ilham](https://github.com/lutfailham96/libernet) for Libernet binaries.

### References
- [prasathmani/tinyfilemanager](https://github.com/prasathmani/tinyfilemanager)
- [luci-app-fileassistant](https://github.com/immortalwrt/luci/tree/master/applications/luci-app-fileassistant)
- [luci-app-filebrowser](https://github.com/immortalwrt/luci/tree/master/applications/luci-app-filebrowser)
- [ryanfauzi1/xderm-mini_GUI](https://github.com/ryanfauzi1/xderm-mini_GUI)
- [lutfailham96/libernet](https://github.com/lutfailham96/libernet)
- [OpenSpeedtest for Website](http://openspeedtest.com/speed-testing-application-for-your-website.php)

<h6 align="center">Copyright by <a href="http://www.helmiau.com">Helmi Amirudin</a> ® 2021 <br> Thank You ! 🤝</h6>
