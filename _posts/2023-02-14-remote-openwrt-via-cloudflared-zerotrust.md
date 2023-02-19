---
title: Remote OpenWrt - Cloudflare ZeroTrust
tags: [TTL, OpenWrt, Modem]
style: fill
color: secondary
description: Cheapest way to remote OpenWrt from another network using custom domain through Cloudflare ZeroTrust Tunnel
---

## Index

<br>
{% capture list_items %}
Tutorial Bahasa Indonesia
English Tutorial
{% endcapture %}
{% include elements/list.html title="Page Index Languange" type="toc" %}

## Tutorial Bahasa Indonesia

<br>
{% capture list_items %}
Tentang
Pengaturan Domain di Cloudflare Dashboard
Pengaturan Tunnels di Cloudflare ZeroTrust Dashboard
Tentang Script cfdmgr
{% endcapture %}
{% include elements/list.html title="Daftar Isi Tutorial Bahasa Indonesia" type="toc" %}


### Tentang

Mengatur OpenWrt dari jarak jauh melalui domain dengan menggunakan [Cloudflare ZeroTrust Tunnel](https://one.dash.cloudflare.com/), aplikasi ini merupakan alternatif TERMURAH dari [ZeroTier](https://openwrt.org/docs/guide-user/services/vpn/zerotier/start), [pagekite.me](https://pagekite.me), [ngrok.io](https://ngrok.io) yang memiliki kesamaan fungsi, dan tunnel ini tidak mengharuskan pengguna untuk menggunakan VPN dari aplikasi seperti Zerotier.

### Pengaturan Domain di Cloudflare Dashboard

1. Buatlah domain apapun, di situs manapun.
2. Pergi ke [Cloudflare Dashboard](https://dash.cloudflare.com) dan login, jika belum memiliki akun, silahkan mendaftar terlebih dahulu.
3. Lihat tab **`Website`** dibagian kiri layar, lalu klik **`Add Site`**

	![Halaman awal Cloudflare Dashboard](https://raw.githubusercontent.com/helmiau/gegevps-openwrt-tools/master/cloudflared/assets/cf-dashboard-1-starter.png)

4. Cari domain yang sudah di daftarkan di langkah pertama, lalu tekan tombol **`Add Site`**.

	Jika muncul **Invalid domain** seperti gambar dibawah:

	![Invalid domain Cloudflare Dashboard](https://raw.githubusercontent.com/helmiau/gegevps-openwrt-tools/master/cloudflared/assets/invalid-domain.png)


	Maka pergilah ke situs atau tempat anda membeli domain, lalu matikan **`Registrar Lock`** seperti contoh dibawah:
	
	![Invalid domain Cloudflare Dashboard](https://raw.githubusercontent.com/helmiau/gegevps-openwrt-tools/master/cloudflared/assets/disable-registrar-lock-domain.png)


5. Setelah selesai menambahkan situs, Pada **`Step (1) Select plan`** , pilih **`FREE Plan`** (ada di bawah sendiri).
	
	![Step 1 Cloudflare Dashboard](https://raw.githubusercontent.com/helmiau/gegevps-openwrt-tools/master/cloudflared/assets/cf-dashboard-step-1.png)


6. Pada **`Step (2) Review DNS Record`** bisa langsung scroll ke bawah untuk menekan tombol **`Continue`**.
	
	![Step 2 Cloudflare Dashboard](https://raw.githubusercontent.com/helmiau/gegevps-openwrt-tools/master/cloudflared/assets/cf-dashboard-step-2.png)


7. Pada **`Step (3) ganti nameserver`**  ubah nameserver pada domain sesuai dengan nameserver yang sudah disediakan dari cloudflare (lihat screenshot), lalu klik tombol **`Check nameservers`**.
	
	![Step 3 Cloudflare Dashboard](https://raw.githubusercontent.com/helmiau/gegevps-openwrt-tools/master/cloudflared/assets/cf-dashboard-step-3.png)


8. Setelah itu, kamu akan diarahkan ke halaman **`Quick Start Guide`**, ikuti saja langkah pada beberapa gambar dibawah ini:
	
	![QSG 1 Cloudflare Dashboard](https://raw.githubusercontent.com/helmiau/gegevps-openwrt-tools/master/cloudflared/assets/cf-quick-start-1.png)

	![QSG 2 Cloudflare Dashboard](https://raw.githubusercontent.com/helmiau/gegevps-openwrt-tools/master/cloudflared/assets/cf-quick-start-2.png)

	![QSG 3 Cloudflare Dashboard](https://raw.githubusercontent.com/helmiau/gegevps-openwrt-tools/master/cloudflared/assets/cf-quick-start-3.png)

	![QSG 4 Cloudflare Dashboard](https://raw.githubusercontent.com/helmiau/gegevps-openwrt-tools/master/cloudflared/assets/cf-quick-start-4.png)

	![QSG 5 Cloudflare Dashboard](https://raw.githubusercontent.com/helmiau/gegevps-openwrt-tools/master/cloudflared/assets/cf-quick-start-5.png)


	Pastikan kamu sudah melihat tampilan dibawah ini:
	
	![Done Cloudflare Dashboard](https://raw.githubusercontent.com/helmiau/gegevps-openwrt-tools/master/cloudflared/assets/cf-dashboard-all-done.png)


9. Setelah selesai, tekan tombol kembali disebelah nama domain kamu, nanti akan diarahkan ke halaman **`Website`**, pastikan domainmu sudah seperti dibawah ini
	
	![Done Add Site Cloudflare Dashboard](https://raw.githubusercontent.com/helmiau/gegevps-openwrt-tools/master/cloudflared/assets/cf-dashboard-after-add-site.png)


### Pengaturan Tunnels di Cloudflare ZeroTrust Dashboard

1. Pergi ke [Cloudflare ZeroTrust Dashboard](https://one.dash.cloudflare.com/), pastikan sudah login.
2. Masuk ke tab **`Access` > `Tunnels`**, lalu tekan **`Create a tunnel`**
	
	![Create Tunnels Cloudflare ZeroTrust](https://raw.githubusercontent.com/helmiau/gegevps-openwrt-tools/master/cloudflared/assets/cfzt-access-tunnels-1-create-tunnels.png)


3. Beri nama tunnelmu (1), lalu tekan **`Save tunnel`**

	![Naming Tunnels Cloudflare ZeroTrust](https://raw.githubusercontent.com/helmiau/gegevps-openwrt-tools/master/cloudflared/assets/cfzt-access-tunnels-2-name-tunnels.png)


4. Buka Terminal/Putty/XTERM dan semisalnya, lalu jalankan perintah dibawah ini 

	```sh
	wget -qO /root/cfdmgr "https://raw.githubusercontent.com/GegeDesembri/openwrt-tools/master/cloudflared/cfdmgr" && \
    chmod +x /root/cfdmgr
	```
	
	Maka akan seperti ini
	
	![Wget Terminal CFDMGR](https://raw.githubusercontent.com/helmiau/gegevps-openwrt-tools/master/cloudflared/assets/wget-cfdmgr.png)


5. Jalankan command `/root/cfdmgr i` untuk memasang Cloudflared pada OpenWrt. Nanti akan seperti gambar di bawah ini. Ketika ada tulisan **`💬 Enter New Cloudflared Token: (leave empty if no change)``** silahkan kembali ke browser yang berada pada web **Dashboard Cloudflare ZeroTrust** untuk menyalin token.
	
	![Install CF dari CFDMGR](https://raw.githubusercontent.com/helmiau/gegevps-openwrt-tools/master/cloudflared/assets/cfdmgr-install.png)


6. Kembali ke halaman **`Install Connector`**, pilih tab **`Windows`** - **`64-bit`**, lalu tekan **`Ikon Salin`** di sebelah kanan tulisan token random seperti dibawah ini.

	
	![Create Tunnels Cloudflare ZeroTrust](https://raw.githubusercontent.com/helmiau/gegevps-openwrt-tools/master/cloudflared/assets/cfzt-access-tunnels-2-copy-token.png)


	Setelah disalin, silahkan kembali ke Terminal/Putty/XTERM tadi untuk mem-paste token dan menyelesaikan instalasi seperti pada gambar no. 5.	Lalu pastikan bagian bawah yang berjudul **`Connectors`** sudah muncul baris seperti dibawah ini, Lalu tekan tombol **`Next`**
	
	![Install Connector done at Cloudflare ZeroTrust](https://raw.githubusercontent.com/helmiau/gegevps-openwrt-tools/master/cloudflared/assets/cfzt-access-tunnels-3-install-connector.png)
	
	
7. Pada halaman **`Route tunnel`**, isi kolom yang tersedia pada bagian **`Public Hostnames`** seperti tanda pada gambar di bawah ini, lalu tekan **`Save nama_tunnel tunnel`** di bagian bawah. 

	![Set routes at Cloudflare ZeroTrust](https://raw.githubusercontent.com/helmiau/gegevps-openwrt-tools/master/cloudflared/assets/cfzt-access-tunnels-4-routes.png)
	
	
8. Kembali ke tab **`Access` > `Tunnels`**, lalu tekan tunnel yang sudah dibuat tadi, pastikan statusnya **`HEALTHY`** seperti gambar dibawah

	![HEALTHY at Cloudflare ZeroTrust](https://raw.githubusercontent.com/helmiau/gegevps-openwrt-tools/master/cloudflared/assets/cfzt-access-tunnel-5-healthy.png)
	

	Jika status tunnel **`DOWN`** seperti gambar dibawah, **maka periksa kembali token yang kamu daftarkan di OpenWrt, kemungkinan ada kesalahan disana**.

	![DOWN at Cloudflare ZeroTrust](https://raw.githubusercontent.com/helmiau/gegevps-openwrt-tools/master/cloudflared/assets/cfzt-access-tunnel-5-down.png)
	

9. Jika kamu ingin menambahkan panel OpenClash YACD, silahkan ikuti **Service** pada gambar dibawah ini:

	![Service tambahan at Cloudflare ZeroTrust](https://raw.githubusercontent.com/helmiau/gegevps-openwrt-tools/master/cloudflared/assets/cfzt-access-tunnel-6-add-more-public-ports.png)
	

### Tentang Script cfdmgr

Script ini berguna untuk memudahkan pengguna OpenWrt dalam mengontrol Cloudflared ZeroTrust.
    
Berikut beberapa perintah yang tersedia dalam script:

   - `/root/cfdmgr i` : Install Cloudflared
   - `/root/cfdmgr e` : Edit Cloudflared token
   - `/root/cfdmgr s` : Activate/Disable autostart
   - `/root/cfdmgr l` : Read Cloudflared Logs
   - `/root/cfdmgr u` : Update Cloudflared binary
   - `/root/cfdmgr r` : Uninstall Cloudflared


## English Tutorial

<br>
{% capture list_items %}
About
Setup Domain at Cloudflare Dashboard
Setup Tunnels at Cloudflare ZeroTrust Dashboard
About cfdmgr script
{% endcapture %}
{% include elements/list.html title="Page Index fo English Tutorial" type="toc" %}

### About

Remote OpenWrt using custom domain through [Cloudflare ZeroTrust Tunnel](https://one.dash.cloudflare.com/), this is CHEAPER alternate from [ZeroTier](https://openwrt.org/docs/guide-user/services/vpn/zerotier/start), [pagekite.me](https://pagekite.me), [ngrok.io](https://ngrok.io) which help you to access OpenWrt from other network, also this tunnels work without VPN from App (like Zerotier).

### Setup Domain at Cloudflare Dashboard

1. Create any domain from any site you want.
2. Go to [Cloudflare Dashboard](https://dash.cloudflare.com) and login, create an account if you don't have it.
3. Look at **`Website`** tab on the left-side your screen, then click **`Add Site`**

	![Halaman awal Cloudflare Dashboard](https://raw.githubusercontent.com/helmiau/gegevps-openwrt-tools/master/cloudflared/assets/cf-dashboard-1-starter.png)

4. Find registered domain from 1st step, then click **`Add Site`** button.

	If **Invalid domain** appeared like picture below

	![Invalid domain Cloudflare Dashboard](https://raw.githubusercontent.com/helmiau/gegevps-openwrt-tools/master/cloudflared/assets/invalid-domain.png)


	You should go to domain site which sell that domain, then turn **`Registrar Lock`** off like sample below:
	
	![Invalid domain Cloudflare Dashboard](https://raw.githubusercontent.com/helmiau/gegevps-openwrt-tools/master/cloudflared/assets/disable-registrar-lock-domain.png)


5. After adding site, look **`Step (1) Select plan`** , the select **`FREE Plan`**. (see pic).
	
	![Step 1 Cloudflare Dashboard](https://raw.githubusercontent.com/helmiau/gegevps-openwrt-tools/master/cloudflared/assets/cf-dashboard-step-1.png)


6. At **`Step (2) Review DNS Record`** you can scoll it down to click **`Continue`** button.
	
	![Step 2 Cloudflare Dashboard](https://raw.githubusercontent.com/helmiau/gegevps-openwrt-tools/master/cloudflared/assets/cf-dashboard-step-2.png)


7. At **`Step (3) Change Nameserver`**  you should change your domain nameserver according attached nameserver from cloudflare (see pic), then click **`Check nameservers`** button.
	
	![Step 3 Cloudflare Dashboard](https://raw.githubusercontent.com/helmiau/gegevps-openwrt-tools/master/cloudflared/assets/cf-dashboard-step-3.png)


8. After that, you will redirected to **`Quick Start Guide`** page, just follow some pics below at this step:
	
	![QSG 1 Cloudflare Dashboard](https://raw.githubusercontent.com/helmiau/gegevps-openwrt-tools/master/cloudflared/assets/cf-quick-start-1.png)

	![QSG 2 Cloudflare Dashboard](https://raw.githubusercontent.com/helmiau/gegevps-openwrt-tools/master/cloudflared/assets/cf-quick-start-2.png)

	![QSG 3 Cloudflare Dashboard](https://raw.githubusercontent.com/helmiau/gegevps-openwrt-tools/master/cloudflared/assets/cf-quick-start-3.png)

	![QSG 4 Cloudflare Dashboard](https://raw.githubusercontent.com/helmiau/gegevps-openwrt-tools/master/cloudflared/assets/cf-quick-start-4.png)

	![QSG 5 Cloudflare Dashboard](https://raw.githubusercontent.com/helmiau/gegevps-openwrt-tools/master/cloudflared/assets/cf-quick-start-5.png)


	Make sure you have seen this pic below:
	
	![Done Cloudflare Dashboard](https://raw.githubusercontent.com/helmiau/gegevps-openwrt-tools/master/cloudflared/assets/cf-dashboard-all-done.png)


9. After it done, click back button beside your domain naime, then you will redirected to **`Website`** page, make sure your domain like pic below
	
	![Done Add Site Cloudflare Dashboard](https://raw.githubusercontent.com/helmiau/gegevps-openwrt-tools/master/cloudflared/assets/cf-dashboard-after-add-site.png)


### Setup Tunnels at Cloudflare ZeroTrust Dashboard

1. Go to [Cloudflare ZeroTrust Dashboard](https://one.dash.cloudflare.com/), then login.
2. Open tab **`Access` > `Tunnels`**, the click **`Create a tunnel`**
	
	![Create Tunnels Cloudflare ZeroTrust](https://raw.githubusercontent.com/helmiau/gegevps-openwrt-tools/master/cloudflared/assets/cfzt-access-tunnels-1-create-tunnels.png)


3. Give tunnel name (1), then click **`Save tunnel`** button

	![Naming Tunnels Cloudflare ZeroTrust](https://raw.githubusercontent.com/helmiau/gegevps-openwrt-tools/master/cloudflared/assets/cfzt-access-tunnels-2-name-tunnels.png)


4. Open Terminal/Putty/XTERM or similar app like those, then run command below

	```sh
	wget -qO /root/cfdmgr "https://raw.githubusercontent.com/GegeDesembri/openwrt-tools/master/cloudflared/cfdmgr" && \
    chmod +x /root/cfdmgr
	```
	
	Result should like this pic
	
	![Wget Terminal CFDMGR](https://raw.githubusercontent.com/helmiau/gegevps-openwrt-tools/master/cloudflared/assets/wget-cfdmgr.png)


5. Run `/root/cfdmgr i` command to install Cloudflared (see pic below). You will see **`💬 Enter New Cloudflared Token: (leave empty if no change)``** question, then you have to back to browser containing **Dashboard Cloudflare ZeroTrust** token to copy it's token.
	
	![Install CF dari CFDMGR](https://raw.githubusercontent.com/helmiau/gegevps-openwrt-tools/master/cloudflared/assets/cfdmgr-install.png)


6. Back to **`Install Connector`** page, select tab **`Windows`** - **`64-bit`**, then click **`Copy Icon`** right-side of random token (see pic).

	
	![Create Tunnels Cloudflare ZeroTrust](https://raw.githubusercontent.com/helmiau/gegevps-openwrt-tools/master/cloudflared/assets/cfzt-access-tunnels-2-copy-token.png)


	After copy, back to Terminal/Putty/XTERM to paste the token and finishing installation (like picture number 5).	Then make sure the **`Connectors`** list has new list (like pic below), then click **`Next`** button.
	
	![Install Connector done at Cloudflare ZeroTrust](https://raw.githubusercontent.com/helmiau/gegevps-openwrt-tools/master/cloudflared/assets/cfzt-access-tunnels-3-install-connector.png)
	
	
7. At **`Route tunnel`** page, fill given coloumns at **`Public Hostnames`** section like sign at pic below, then click **`Save tunnel_name tunnel`** at the end section. 

	![Set routes at Cloudflare ZeroTrust](https://raw.githubusercontent.com/helmiau/gegevps-openwrt-tools/master/cloudflared/assets/cfzt-access-tunnels-4-routes.png)
	
	
8. Back to tab **`Access` > `Tunnels`**, then click created tunnel before, make sure that state is **`HEALTHY`** like pic below

	![HEALTHY at Cloudflare ZeroTrust](https://raw.githubusercontent.com/helmiau/gegevps-openwrt-tools/master/cloudflared/assets/cfzt-access-tunnel-5-healthy.png)
	

	If your tunnel state is **`DOWN`** like pic below, you have to **Re-checking registered token in your OpenWrt setting, likely the errors come from that**.

	![DOWN at Cloudflare ZeroTrust](https://raw.githubusercontent.com/helmiau/gegevps-openwrt-tools/master/cloudflared/assets/cfzt-access-tunnel-5-down.png)
	

9. If you want to add **`OpenClash YACD`** panel, follow **Service** at pic below

	![Service tambahan at Cloudflare ZeroTrust](https://raw.githubusercontent.com/helmiau/gegevps-openwrt-tools/master/cloudflared/assets/cfzt-access-tunnel-6-add-more-public-ports.png)
	
	

### About cfdmgr script

This script will make user more easier to control Cloudflared ZeroTrust, and below is some available commands inside the script:

   - `/root/cfdmgr i` : Install Cloudflared
   - `/root/cfdmgr e` : Edit Cloudflared token
   - `/root/cfdmgr s` : Activate/Disable autostart
   - `/root/cfdmgr l` : Read Cloudflared Logs
   - `/root/cfdmgr u` : Update Cloudflared binary
   - `/root/cfdmgr r` : Uninstall Cloudflared


### Referensi

- Setup : https://hmolina.dev/p/cloudflared-tunnel-in-openwrt/
- SSH Access : https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/use_cases/ssh/
- Samba Sharing : https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/use_cases/smb/

### Credits
- [Cloudflare Zero Trust](https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/install-and-setup/tunnel-guide/remote/#1-create-a-tunnel) - Cloudflared binaries and docs
- [Gege Desembri](https://github.com/GegeDesembri) - Main creator/maintainer
- [Helmi Amirudin](https://helmiau.com/pay) - **cfdmgr - Cloudflared Script Manager** for OpenWrt maintainer, README.md reworker
