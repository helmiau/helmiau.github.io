---
title: Install PHPTeleBotWrt
tags: [PHPTeleBotWrt, PHP, Telegram Bot, OpenWrt]
style: fill
color: danger
description: PHPTeleBotWrt - Telegram bot framework written in PHP for OpenWRT.
---

# PHPTeleBotWrt
Telegram bot framework written in PHP for OpenWRT


## Features

* Support PHP7 & PHP8 hybrid installation.
* Support Long Polling and Webhook.
* Proxy List (Openclash Proxies)
* Rules List (Openclash Rules)
* Openclash Information, upload config yaml
* Simple, easy to use.
* Inline Command - like vnstat -l, etc.
* Speedtest - check internet speed of your OpenWrt.
* Sysinfo - view system information of your OpenWrt.
* Memory - check memory/RAM usage.
* Vnstat - check vnstat internet usage.
* Vnstati - check vnstati internet usage.
* My IP - get your OpenWrt's IP information.
* Aria2 - Control Aria2.
* MyXL - Check XL AXIATA number information (packages, quota, expired, etc).


## Requirements

- Internet
- `git` openwrt package.
- `screen` openwrt package.
- `php8-cli` openwrt package.
- `php8-mod-curl` openwrt package .
- Your own private telegram bot and bot username (see from bot profile)
- Telegram Bot API Token - get from [@BotFather](https://t.me/BotFather)


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

3. Run `phpbotmgr i` with Putty/Terminal/TTYD/XTERM to install **PHPTeleBotWrt**

	```sh
	phpbotmgr i
	```

4. Copy Telegram Bot API Token from [@BotFather](https://t.me/BotFather), paste to terminal when `💬 Enter Bot Token:` appeared.
5. Copy your Telegram Bot Username from bot profile, paste to terminal when `🤖 Enter Bot Username (without @):` appeared.


#### Follow Installation Tutorial from Youtube (php7)

See some video tutorial below

* [Install OpenWrt PHP Telegram Bot By XppaiWRT - PHP7 REYRE-STB](https://www.youtube.com/watch?v=JJPozNreVE0&lc=Ugy_OosDmlWRERUgvB94AaABAg.9iCzkvv1lxu9iV-s6tpDnO)


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
phpbotmgr i
```

Update **PHPTeleBotWrt**
```sh
phpbotmgr u
```

Edit **PHPTeleBotWrt** databot
```sh
phpbotmgr e
```
	
Run/Start **PHPTeleBotWrt**
```sh
phpbotmgr r
```

> If not work, just run `cd PHPTeleBotWrt && nohup php8-cli index.php &>/dev/null & && cd` manually

Check **PHPTeleBotWrt** running status
```sh
phpbotmgr c
```

Stop **PHPTeleBotWrt**
```sh
phpbotmgr s
```

Full Remove/Uninstall **PHPTeleBotWrt** with all datas.
```sh
phpbotmgr ra
```

Remove/Uninstall **PHPTeleBotWrt** without databot.
```sh
phpbotmgr rx
```

Add/remove **PHPTeleBotWrt** to Auto-startup **`LuCI - System - Startup - Local Startup - rc.local`**.
```sh
phpbotmgr a
```

Add/remove **PHPTeleBotWrt** to Auto-startup **`LuCI - System - Scheduled Tasks`**.
```sh
phpbotmgr t
```


#### Command lists

```
📁Aria2 Command
 ↳/aria2add      | Add task
 ↳/aria2stats    | Aria2 status
 ↳/aria2pause    | Pause all
 ↳/aria2resume   | Resume all
 
📁OpenClash Command
 ↳/oc        | OC Information
 ↳/proxies   | Proxies status 
 ↳/rules     | Rule list 
 ↳upload yaml| Openclash yaml config upload

📁MyXL Command
 ↳/myxl      | Bandwidth usage 
 ↳/setxl 087 | Set default number

📁System Information
 ↳/vnstat    | Bandwidth usage 
 ↳/vnstati   | Better Bandwidth usage 
 ↳/memory    | Memory status 
 ↳/myip      | Get ip details 
 ↳/speedtest | Speedtest 
 ↳/ping      | Ping bot
 ↳/sysinfo   | System Information
```


## 📷 Screenshots

<details>
<summary><h5>start on terminal</h5> (click to see screenshot)</summary>
<p><img src="https://i.ibb.co/mcYqq3S/startbot.png" alt="Startingbot"></p>
</details>


<details>
<summary><h5>/start | /cmdlist</h5> (click to see screenshot)</summary>
<p><img src="https://i.ibb.co/y4wqFwb/cmdlist.png" alt="Start cmdlist"></p>
</details>

<details>
<summary><h5>/memory</h5> (click to see screenshot)</summary>
<p><img src="https://i.ibb.co/cwQ8m1C/memory.png" alt="Memory"></p>
</details>

<details>
<summary><h5>/myip</h5> (click to see screenshot)</summary>
<p><img src="https://i.ibb.co/PQVB3DH/myip.png" alt="Myip"></p>
</details>

<details>
<summary><h5>/myxl <code>number</code></h5> (click to see screenshot)</summary>
<p><img src="https://i.ibb.co/bBMf0rg/myxl.png" alt="MyXL"></p>
</details>

<details>
<summary><h5>/proxies</h5> (click to see screenshot)</summary>
<p><img src="https://i.ibb.co/0fmXhjX/proxies.png" alt="Proxies"></p>
</details>

<details>
<summary><h5>/rules</h5> (click to see screenshot)</summary>
<p><img src="https://i.ibb.co/8DtrH3n/rules.png" alt="Rules"></p>
</details>

<details>
<summary><h5>/speedtest <code>(depend on what speedtest installed)</code></h5> (click to see screenshot)</summary>
<p><img src="https://i.ibb.co/r3cV90Y/speedtest.png" alt="Speedtest"></p>
</details>

<details>
<summary><h5>/sysinfo</h5> (click to see screenshot)</summary>
<p><img src="https://i.ibb.co/2tqS3cM/sysinfo.png" alt="sysinfo"></p>
</details>

<details>
<summary><h5>/vnstat or /vnstati <code>-d</code> or <code>-h</code> or <code>-m</code></h5> (click to see screenshot)</summary>
<p><img src="https://i.ibb.co/0ycJhvP/vnstat.png" alt="vnstat"></p>
</details>


## Tested on

* [**Reyre Firmware OC OnLy 28.09.22**](https://www.youtube.com/watch?v=vtjw38V2ybA) -> Speedtest bug
* [**Reyre Firmware OC OnLy 27.10.22**](https://www.youtube.com/watch?v=0KWgy6P2PVYA) -> Speedtest Fixed (vnstat Bug)
* [**Reyre Firmware OC OnLy 06.11.22**](https://www.youtube.com/watch?v=SBHcJJC8ln0) -> Working Perfectly
* [**HelmiWrt OS PHP7, Older OpenClash**](https://www.cararegistrasi.com/nMfJevPD5cn4) -> Working Perfectly
* [**HelmiWrt OS PHP8, Latest OpenClash**](https://www.cararegistrasi.com/nMfJevPD5cn4) -> OC Info not work
