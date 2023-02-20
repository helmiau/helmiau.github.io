---
title: PHPTeleBotWrt - Telegram bot framework written in PHP for OpenWRT
tags: [PHPTeleBotWrt, PHP, Telegram Bot, OpenWrt]
style: fill
color: danger
description: You want to control OpenWrt through telegram bot? Read this post.
---

# PHPTeleBotWrt
Telegram bot framework written in PHP for OpenWRT

<br>
{% capture list_items %}
Video Preview
Features
Requirements
Installation
Video Installation
Usage
Command lists
Screenshots
Tested on
Known Bugs
Reports
Developers
{% endcapture %}
{% include elements/list.html title="Page Index / Daftar Isi" type="toc" %}


## Video Preview

{% include elements/video.html id="lVWPefOJD58" %}


## Features

* Support PHP7 & PHP8 hybrid installation.
* Support Long Polling and Webhook.
* Proxy List (Openclash Proxies)
* Rules List (Openclash Rules)
* Openclash Information.
* Upload file to OpenWrt.
* Update binaries from telegram.
* Simple, easy to use.
* Inline Command - like vnstat -l, etc.
* Speedtest - check OpenWrt's internet speed.
* Sysinfo - view OpenWrt's system information.
* Memory - check memory/RAM usage.
* Vnstat - check vnstat internet usage.
* Vnstati - check vnstati internet usage.
* My IP - get OpenWrt's IP information.
* Aria2 - Control Aria2.
* MyXL - Check XL AXIATA number information (packages, quota, expired, etc).


## Requirements

- Internet
- `git` openwrt package.
- `screen` openwrt package.
- `wget-ssl` openwrt package.
- `curl` openwrt package.
- `php8-cli` or `php7-cli` openwrt package.
- `php8-mod-curl` or `php7-mod-curl` openwrt package .
- Your own private telegram bot and bot username (see from bot profile).

	* Go to your bot, see bot profile to see bot username.
	* Copy bot username.


- Telegram Bot API Token.

	* Chat with [@BotFather](https://t.me/BotFather).
	* Send `/token`.
	* Select your bot.
	* Copy token by tapping token line under `You can use this token to access HTTP API:` text.


- Your own perconal account ID.

	* Type `/start` to on chat with [@userinfobot](https://t.me/userinfobot).
	* See ID line, then copy it.


## Video Installation

{% include elements/video.html id="0lu_93xBhas" %}


## Installation

1. Open Putty/Terminal/TTYD/XTERM or similar apps like these.
2. Run commands below to download **`phpbotmgr - PHPTeleBotWrt Manager`** to your OpenWRT (choose one of installation method below):

	`wget` installation:

	```sh
	wget https://raw.githubusercontent.com/helmiau/PHPTeleBotWrt/master/phpbotmgr -O /root/phpbotmgr && chmod +x /root/phpbotmgr
	```

	`curl` installation:

	```sh
	curl -sL https://raw.githubusercontent.com/helmiau/PHPTeleBotWrt/master/phpbotmgr > /root/phpbotmgr && chmod +x /root/phpbotmgr
	```

3. Run `./phpbotmgr i` with Putty/Terminal/TTYD/XTERM to install **PHPTeleBotWrt**

	```sh
	./phpbotmgr i
	```

4. Copy Telegram Bot API Token from [@BotFather](https://t.me/BotFather), paste to terminal when `💬 Enter Your Bot Token:` appeared. Token bot example: `52123745:ABeN1H9jc0I_7lIeyu_4aE8BZiV_fXt9TGk`.
5. Copy your Telegram Bot Username from bot profile, paste to terminal when `🤖 Enter Your Bot Username (without @):` appeared. Bot username example: `mamanxwrt_bot`.
6. Copy your Telegram Account User ID from [@userinfobot](https://t.me/userinfobot), paste to terminal when `🤖Enter Your Personal Account UID:` appeared. User ID example: `234321234`.


## Usage

Read usage information of `phpbotmgr` command.


#### About `databot` file inside PHPTeleBotWrt path

This file contain your Telegram Bot API Token and Bot Username. You must update this file if you want to change to another bot.

<details>
<summary>Sample contents of databot file (click to see screenshots)</summary>
<p><img src="https://i.ibb.co/vP7csgQ/TokenBot.png" alt="bottoken"></p>
</details>

Here some command previews:

Install **PHPTeleBotWrt**
```sh
./phpbotmgr i
```

Update **PHPTeleBotWrt**
```sh
./phpbotmgr u
```

Edit **PHPTeleBotWrt** databot
```sh
./phpbotmgr e
```
	
Run/Start **PHPTeleBotWrt**
```sh
./phpbotmgr r
```

> If not work, just run `cd PHPTeleBotWrt && nohup php8-cli index.php &>/dev/null & && cd` manually

Check **PHPTeleBotWrt** running status (maybe not work sometimes)
```sh
./phpbotmgr c
```

Stop **PHPTeleBotWrt**
```sh
./phpbotmgr s
```

Full Remove/Uninstall **PHPTeleBotWrt** with all datas.
```sh
./phpbotmgr ra
```

Remove/Uninstall **PHPTeleBotWrt** without databot.
```sh
./phpbotmgr rx
```

Add/remove **PHPTeleBotWrt** to Auto-startup **`LuCI - System - Startup - Local Startup - rc.local`**.
```sh
./phpbotmgr a
```

Add/remove **PHPTeleBotWrt** to Auto-startup **`LuCI - System - Scheduled Tasks`**.
```sh
./phpbotmgr t
```


#### Command lists

```
📁PHPTeleBotWrt Manager
 ↳/botup : Update bot binaries
 ↳/botas : Add/remove bot to/from auto start on boot [$boot_stat]
 ↳/botcr : Add/remove bot to/from cron job [$cron_stat]
 
 📁Aria2 Commands
 ↳/aria2add : Add task
 ↳/aria2stats : Aria2 status
 ↳/aria2pause : Pause all
 ↳/aria2resume : Resume all
 
📁OpenClash Commands
 ↳/oc : OC Information
 ↳/ocst : Start/Restart Openclash
 ↳/ocsp : Stop Openclash
 ↳/ocpr : Proxies status 
 ↳/ocrl : Rule list 
 ↳/ocup : Update Openclash app only
 ↳/ocua : Update Openclash and all cores

📁MyXL Commands
 ↳/myxl : Bandwidth usage 
 ↳/setxl 087 : Set default number

📁File Manager
 ↳/upf : Upload a file to OpenWrt
 ↳/dlf : Get/retrieve a file from OpenWrt
 ↳/cp : Copy a file to another folder
 ↳/mv : Move a file to another folder
 ↳/rm : Delete a file

📁System
 ↳/sysinfo : System Information
 ↳/memory : Memory status 
 ↳/sh commandSample : Run custom command in bash terminal
 ↳/rs ls : List of compatible app restart
 ↳/rs appname : Restart app in init.d
 
📁Power System
 ↳/reboot : Reboot OpenWrt
 ↳/turnoff : Turn off OpenWrt
 
📁Network Information
 ↳/netcl : Lists of connected client devices
 ↳/fwlist : Firewall lists
 ↳/ifcfg interface : List of device interface 
 ↳/vnstat : Bandwidth usage 
 ↳/vnstati : Better Bandwidth usage 
 ↳/myip : Get ip details 
 ↳/speedtest : Speedtest 
 ↳/ping : Ping bot
```


## Screenshots


<details>
<summary><h5>start on terminal</h5> (click to see screenshot)</summary>
<p><img src="https://raw.githubusercontent.com/helmiau/PHPTeleBotWrt/master/pics/phpbotwrt-start.png" alt="Startingbot"></p>
</details>


<details>
<summary><h5>/start | /cmdlist</h5> (click to see screenshot)</summary>
<p><img src="https://raw.githubusercontent.com/helmiau/PHPTeleBotWrt/master/pics/phpbotwrt-cmdlist.png" alt="Start cmdlist"></p>
</details>

<details>
<summary><h5>/memory</h5> (click to see screenshot)</summary>
<p><img src="https://raw.githubusercontent.com/helmiau/PHPTeleBotWrt/master/pics/phpbotwrt-memory.png" alt="Memory"></p>
</details>

<details>
<summary><h5>/myip</h5> (click to see screenshot)</summary>
<p><img src="https://raw.githubusercontent.com/helmiau/PHPTeleBotWrt/master/pics/phpbotwrt-myip.png" alt="Myip"></p>
</details>

<details>
<summary><h5>/myxl <code>number</code></h5> (click to see screenshot)</summary>
<p><img src="https://raw.githubusercontent.com/helmiau/PHPTeleBotWrt/master/pics/phpbotwrt-myxl.png" alt="MyXL"></p>
</details>

<details>
<summary><h5>/ping</h5> (click to see screenshot)</summary>
<p><img src="https://raw.githubusercontent.com/helmiau/PHPTeleBotWrt/master/pics/phpbotwrt-ping.png" alt="ping"></p>
</details>

<details>
<summary><h5>/oc</h5> (click to see screenshot)</summary>
<p><img src="https://raw.githubusercontent.com/helmiau/PHPTeleBotWrt/master/pics/phpbotwrt-ocinfo.png" alt="OCInfo"></p>
</details>

<details>
<summary><h5>/ocpr</h5> (click to see screenshot)</summary>
<p><img src="https://raw.githubusercontent.com/helmiau/PHPTeleBotWrt/master/pics/phpbotwrt-ocproxies.png" alt="OCProxies"></p>
</details>

<details>
<summary><h5>/ocrl</h5> (click to see screenshot)</summary>
<p><img src="https://raw.githubusercontent.com/helmiau/PHPTeleBotWrt/master/pics/phpbotwrt-ocrules.png" alt="OCRules"></p>
</details>

<details>
<summary><h5>/ocst</h5> (click to see screenshot)</summary>
<p><img src="https://raw.githubusercontent.com/helmiau/PHPTeleBotWrt/master/pics/phpbotwrt-ocstart.png" alt="OCStart"></p>
</details>

<details>
<summary><h5>/ocsp</h5> (click to see screenshot)</summary>
<p><img src="https://raw.githubusercontent.com/helmiau/PHPTeleBotWrt/master/pics/phpbotwrt-ocstop.png" alt="OCStop"></p>
</details>

<details>
<summary><h5>/ocup</h5> (click to see screenshot)</summary>
<p><img src="https://raw.githubusercontent.com/helmiau/PHPTeleBotWrt/master/pics/phpbotwrt-ocupdate-ipk.png" alt="OCUpIPK"></p>
</details>

<details>
<summary><h5>/ocua</h5> (click to see screenshot)</summary>
<p><img src="https://raw.githubusercontent.com/helmiau/PHPTeleBotWrt/master/pics/phpbotwrt-ocupdate-all.png" alt="OCUpALL"></p>
</details>

<details>
<summary><h5>/speedtest <code>(depend on what speedtest installed)</code></h5> (click to see screenshot)</summary>
<p><img src="https://raw.githubusercontent.com/helmiau/PHPTeleBotWrt/master/pics/phpbotwrt-speedtest.png" alt="Speedtest"></p>
</details>

<details>
<summary><h5>/sysinfo</h5> (click to see screenshot)</summary>
<p><img src="https://raw.githubusercontent.com/helmiau/PHPTeleBotWrt/master/pics/phpbotwrt-sysinfo.png" alt="sysinfo"></p>
</details>

<details>
<summary><h5>/vnstat <code>-d</code> or <code>-h</code> or <code>-m</code></h5> (click to see screenshot)</summary>
<p><img src="https://raw.githubusercontent.com/helmiau/PHPTeleBotWrt/master/pics/phpbotwrt-vnstat.png" alt="vnstat"></p>
</details>

<details>
<summary><h5>/vnstati <code>-d</code> or <code>-h</code> or <code>-m</code></h5> (click to see screenshot)</summary>
<p><img src="https://raw.githubusercontent.com/helmiau/PHPTeleBotWrt/master/pics/phpbotwrt-vnstati1.png" alt="vnstati1"></p>
<br>
<p><img src="https://raw.githubusercontent.com/helmiau/PHPTeleBotWrt/master/pics/phpbotwrt-vnstati2.png" alt="vnstati2"></p>
</details>

<details>
<summary><h5>/upload</h5> (click to see screenshot)</summary>
<p><img src="https://raw.githubusercontent.com/helmiau/PHPTeleBotWrt/master/pics/phpbotwrt-upload1.png" alt="upload1"></p>
<br>
<p><img src="https://raw.githubusercontent.com/helmiau/PHPTeleBotWrt/master/pics/phpbotwrt-upload2.png" alt="upload2"></p>
<br>
<p><img src="https://raw.githubusercontent.com/helmiau/PHPTeleBotWrt/master/pics/phpbotwrt-upload3.png" alt="upload3"></p>
</details>

<details>
<summary><h5>/update</h5> (click to see screenshot)</summary>
<p><img src="https://raw.githubusercontent.com/helmiau/PHPTeleBotWrt/master/pics/phpbotwrt-update.png" alt="vnstati1"></p>
</details>


## Tested on

* [**Reyre Firmware OC OnLy 28.09.22**](https://www.youtube.com/watch?v=vtjw38V2ybA) -> Speedtest bug
* [**Reyre Firmware OC OnLy 27.10.22**](https://www.youtube.com/watch?v=0KWgy6P2PVYA) -> Speedtest Fixed (vnstat Bug)
* [**Reyre Firmware OC OnLy 06.11.22**](https://www.youtube.com/watch?v=SBHcJJC8ln0) -> Working Perfectly
* [**HelmiWrt OS PHP7, Older OpenClash**](https://www.cararegistrasi.com/nMfJevPD5cn4) -> Working Perfectly
* [**HelmiWrt OS PHP8, Latest OpenClash**](https://www.cararegistrasi.com/nMfJevPD5cn4) -> Working Perfectly

## Known Bugs

- `/netcl` not support adguard dhcp.
- Sometimes **PHPTeleBotWrt** running status checker not work.
- `/cp` and `/mv` not work sometimes.
- `/sh` max limit message 4,096 characters.
- `/upf` upload max limit 50mb.
- Read more telegram limitation [here](https://limits.tginfo.me/en).
- Run `opkg update && opkg install libcurl4` if error below occured
	
	```
	Error relocating /usr/bin/curl: curl_easy_header: symbol not found
	Error relocating /usr/bin/curl: curl_easy_nextheader: symbol not found
	```
	

## Reports

[Join our Telegram Group](https://helmiau.com/tgg).

## Developers

- [**Pringgo Radianto (Radya)**](https://github.com/radyakaze/phptelebot) - PHPTeleBot Base Development.
- Dimas Syahrul Hidayat [**Hacked Repo**](https://github.com/OppaiCyber/XppaiWRT) & [**New Repo**](https://github.com/xentolopx/eXppaiWRT) - Implement bot and openclash features to OpenWrt.

	> Support Dimas on BCA : **`0131630831`** | DANA / OVO : **`087837872813`** | AN Dimas Syahrul Hidayat.
	
- [**Helmi Amirudin**](https://github.com/helmiau) - Features improvements such as installations, commands, universalize for all firmware and other many rich features. [Donate Helmi](https://helmiau.com/pay).
