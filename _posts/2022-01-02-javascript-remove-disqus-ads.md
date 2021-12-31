---
title: Remove Disqus Ads With Javascript
tags: [Javascript, Disqus, Ads, HTML]
style: fill
color: success
description: Remove Disqus Ads from your site, because Disqus is not pay on you.
---

Sebagai seorang penulis di dunia digital, tentu saja membutuhkan fitur kolom chat seperti Disqus untuk mengetahui feedback dari pengunjung.

Akan tetapi, sering dijumpai banyaknya iklan yang tidak relevan pada layanan Disqus ini yang membuat pengunjung sedikit merasa terganggu. Terlebih lagi iklan tersebut tidak memberikan dampak positif pada penulis (tidak dibayar).

Langsung saja kita menuju ke tutorial.

1. Buka salah satu file HTML kamu, lalu tambahkan kode berikut

	```
	<!-- Disqus ads block -->
	<style>
	/*disqus Ads block with CSS*/
	iframe[sandbox="allow-forms allow-popups allow-same-origin allow-scripts"]{display:none!important;}
	</style>
	```

2. Simpan file HTML tersebut, lalu coba buka salah satu postingan yang kamu miliki.
3. Selesai
	
Sekian dan terima kasih
