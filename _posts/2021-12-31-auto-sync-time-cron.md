---
title: Sinkronisasi Waktu Otomatis di OpenWrt
tags: [OpenWrt]
style: fill
color: info
description: Sering mengalami waktu yang tidak tersinkron otomatis di OpenWrt? Simak perbaikannya disini.
---

Sering mengalami kendala waktu yang tidak tersinkron secara otomatis di OpenWrt? Lakukan langkah dibawah ini:

1. Buka terminal/TTYD/Termius/JuiceSSH, jalankan perintah dibawah ini

	```
	echo -e "#!/bin/bash\nsleep 10\ndate -s \"\$(curl worldtimeapi.org -s|grep unixtime|awk -F '\">' '{print $2}'|sed 's/T/ /g'|head -c19)\"" > /bin/timesync && chmod +x /bin/timesync && screen -dmS time /bin/timesync
	```

2. Tambahkan ```/bin/timesync``` ke **System Startup** (rc.local) dengan menjalankan perintah

	```
	sed -i 's#exit 0#\n/bin/timesync\nexit 0#g' /etc/rc.local
	```

3. Lalu restart cron job dengan menjalankan perintah

	```
	/etc/init.d/cron restart
	```

Sekian dan terima kasih