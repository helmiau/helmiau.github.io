# helmiau.github.io — Site Overview

> Basis dokumentasi. Diperbarui: 2026-09-28. Lihat `ROADMAP.md` untuk rencana ke depan.

## 1. Identitas

- **Nama**: helmiau.github.io — situs pribadi Helmi Amirudin (mahasiswa Ilmu Hadits STDI Imam Syafi'i Jember; desainer grafis; coder C# & Bash; tutorial OpenWrt).
- **URL produksi**: https://www.helmiau.com (`CNAME`), juga `helmiau.github.io`.
- **Repo**: `helmiau/helmiau.github.io`, branch `master`, deploy via **GitHub Pages** (Jekyll 3.10 via gem `github-pages`).

## 2. Stack (dipertahankan — jangan diganti tanpa alasan)

| Lapisan | Pilihan | Bukti |
|---|---|---|
| SSG | Jekyll 3.10 (`github-pages` gem) | `Gemfile` |
| Tema | portfolYOU (Youssef Raafat, MIT) **di-vendor in-tree** | `_layouts/`, `_includes/`, `_sass/`, `LICENSE`; tidak ada `remote_theme` |
| CSS | Bootstrap 4.6 + Sass partials tema | `_includes/head.html`, `_sass/` |
| Ikon | Font Awesome 5.15.4 (CDN) | `_includes/head.html` |
| Pencarian | Simple-Jekyll-Search via jsDelivr + `search.json` | `_includes/blog/search.html`, `pages/search.json` |
| Komentar | Disqus (`shortname: helmiau`, per-post `comments: true`) | `_config.yml`, `_includes/blog/disqus.html` |
| Analytics/Iklan | GA (`G-7EH55WVF7X`), AdSense (`ca-pub-7446272259355358`), GTM (`GTM-5BQ3JVM`) — semua **di-gate cookie consent** | `_includes/head.html`, `_includes/analytics.html`, `_includes/scripts.html`, `_includes/cookie-consent.html` |
| Zona waktu | `Asia/Jakarta` (+ `tzinfo-data` untuk Windows) | `_config.yml`, `Gemfile` |
| Paginasi blog | `jekyll-paginate`, 8 post/halaman | `_config.yml`, `blog/index.html` |
| Cek build | `node scripts/check-deps.mjs` (includes/layouts/sass resolve + larangan `remote_theme`) | `scripts/check-deps.mjs` |

## 3. Struktur konten

```text
_posts/            34 tutorial (dominan OpenWrt: OpenClash, Xderm, HelmiWrt, TTL modem, dsb.)
_projects/         collection portfolio (permalink /projects/:name)
pages/             index.md (/), about.md, projects.html, blog.html→(diganti blog/index.html), tags.html, search.json, 404.html
blog/index.html    template paginasi (page2..page5 digenerate jekyll-paginate)
jasa/, pay/        halaman statis lepas (di luar layout Jekyll) — lihat ROADMAP R2
_includes/         20 includes (blog/*, projects/*, elements/*, cookie-consent.html, dsb.)
_layouts/          default, page, post (post = judul + meta + trakteer + AdSense + konten + disqus)
_data/             skills, timeline, social-media, scholarship, dsb.
assets/            js lokal (theme.js, salin.js/copy-button, trbtn) + img pembayaran/QR
```

## 4. Alur pendapatan (CONSTRAINT — dipertahankan)

> **Safelinku TIDAK boleh dihapus.** Ia sumber income dari link whitelisted.

| Sumber | Lokasi kode | Status |
|---|---|---|
| Safelinku shortlink (`sfl.gl`, api `d10ee7…`) | `_includes/scripts.html` (global), `_layouts/post.html` | Aktif, dipertahankan |
| AdSense | `head.html`, `scripts.html`, `post.html` (di-gate consent) | Aktif |
| Trakteer widget | `_layouts/post.html` (2x) | Aktif |
| Jasa/pay (QRIS, bank, e-wallet) | `jasa/`, `pay/`, `assets/salin.js` | Aktif |

Whitelist safelinku saat ini (`_includes/scripts.html`): `github.com`, `t.me`, `*.facebook.com`, `fb.me`, `*.google.com`, `*.safefileku.com`, `*.githubusercontent.com`, `pastebin.com`, `*.mediafire.com`, `img.shields.io`, `youtube.com`, `sfile.mobi`.

## 5. Keputusan arsitektur yang sudah diambil (jangan diulang tanpa alasan)

1. **Tema di-vendor, bukan `remote_theme`** — fork `helmiau/portfolYOU@97382e0` stale sejak 2022; 28 file di-vendor byte-identical. Cek: `node scripts/check-deps.mjs`.
2. **`github: [repository]`** — scope metadata dibatasi; fetch `public_repositories` default crash (403) pada repo besar (`sagit-miui-oreo`). Output Projects tetap 19 kartu.
3. **Konten post render unconditional** — gate adblock lama (`#patsongpat/#kongteng` + `window.open(/404.html)`) dihapus karena menyembunyikan post saat script deteksi terblokir. Deteksi tetap jalan non-blocking.
4. **Tracking di-gate consent `helmi-consent`** (GDPR #109) — GTM/AdSense/GA hanya load setelah `granted`.
5. **FA tetap 5.x** — FA6 rename `fa-twitter` → `fa-x-twitter`; upgrade ditunda (upstream #129/#130).
6. **Paginasi butuh `blog/index.html` literal** — `jekyll-paginate` hanya mengenali template bernama `index.html` di hirarki `paginate_path`; `pages/blog.html` tidak pernah menghasilkan page2+.

## 6. Route inventory (publik)

| Route | Sumber | Keterangan |
|---|---|---|
| `/` | `pages/index.md` + `landing.html` | Landing |
| `/about` | `pages/about.md` | Profil + skills + timeline |
| `/blog`, `/blog/page2/`..`/page5/` | `blog/index.html` (paginate 8) | Daftar post |
| `/blog/:title` | `_posts/` + `_layouts/post.html` | 34 post |
| `/blog/tags` | `pages/tags.html` | Arsip tag (satu halaman panjang) |
| `/projects`, `/projects/:name` | `pages/projects.html`, `_projects/` | Portfolio |
| `/search.json` | `pages/search.json` | Index pencarian (judul/tag) |
| `/404.html` | `pages/404.html` | Custom 404 |
| `/jasa/`, `/pay/` | HTML statis | Di luar layout Jekyll |
| `/{yt,tg,tgg,fb,ig,wa}.html` | redirect sosial | HTML statis |
| `/spartan25.html`, `/bypassjb.html` | halaman khusus | HTML statis |
