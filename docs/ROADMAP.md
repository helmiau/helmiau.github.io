# helmiau.github.io — Roadmap Rencana Ke Depan

> Dokumen rencana (bukan janji implementasi). Status: `TODO` / `DOING` / `DONE`.
> Constraint tetap: **safelinku dipertahankan** sebagai sumber income (lihat `OVERVIEW.md` §4).
> Cara cek build lokal: `JEKYLL_GITHUB_TOKEN="$(gh auth token)" bundle exec jekyll build`; cek referensi: `node scripts/check-deps.mjs`.

## R1 — Ketahanan pendapatan safelinku (prioritas tertinggi)

**Masalah**: `https://safelinku.com/js/web-script.js` dimuat global di `_includes/scripts.html` dan `_layouts/post.html`.
Bila domain itu mati/lambat/disusupi, seluruh halaman ikut terdampak (riwayat: bug 404 massal).

- [ ] TODO — Bungkus load `web-script.js` dengan `onerror` + timeout agar kegagalan tidak memblokir render.
- [ ] TODO — Pindahkan `shorten_includ` (whitelist domain) ke satu file data (`_data/safelinku.yml`) agar update whitelist tidak menyentuh HTML.
- [ ] TODO — Dokumentasikan mapping domain → pendapatan per kuartal di `docs/INCOME.md` (angka manual dari dashboard safelinku).
- [ ] TODO — Siapkan fallback shortlink sekunder bila safelinku down > 24 jam (daftar kandidat + cara switch satu variabel).

**Non-goal**: menghapus safelinku. Itu dilarang oleh constraint di atas.

## R2 — Satukan `jasa/` dan `pay/` ke layout Jekyll

**Masalah**: dua halaman income penting ini HTML statis lepas — tidak dapat navbar, meta SEO, consent banner, dan theme toggle yang sama.

- [ ] TODO — Konversi `jasa/index*.html` → halaman ber-layout `page` (pertahankan styling QRIS/payment).
- [ ] TODO — Konversi `pay/index*.html` → sama; pastikan `assets/salin.js` (tombol Salin) tetap jalan.
- [ ] TODO — Uji faktual: tombol Salin per e-wallet + modal QR tetap berfungsi setelah konversi.
- [ ] DONE (acuan) — pola konversi sudah terbukti saat paginasi blog (`blog/index.html`).

## R3 — Series / learning path OpenWrt

**Masalah**: 34 post tutorial berdiri sendiri; pembaca selesai satu post lalu pergi. Padahal topiknya berurutan alami (OpenWrt dasar → OpenClash → Xderm → HelmiWrt → TTL → optimasi).

- [ ] TODO — Tambah front matter `series: <slug>` + `series_order: <n>` pada post yang berurutan.
- [ ] TODO — Box navigasi prev/next dalam seri di `_layouts/post.html`.
- [ ] TODO — Halaman index per seri (`/series/<slug>/`) + daftar di `/blog`.
- [ ] TODO — Related posts berdasarkan tag di bawah konten (data sudah ada di `_includes/blog/tags.html`).

## R4 — Projects menjadi portofolio sungguhan

**Masalah**: `pages/projects.html` me-list collection generik + 2 `remote_projects` (`git-for-wizards`, `arduino-visitor-counter`) yang **bukan repo milik helmiau** sehingga tidak pernah render.

- [ ] TODO — Hapus 2 `remote_projects` hantu tersebut.
- [ ] TODO — Kurasi `_projects/`: HelmiWrt OS, Xderm Mini GUI, jasa desain — masing-masing dengan screenshot, link download, changelog singkat.
- [ ] TODO — Bedakan kartu "produk" vs "tulisan" secara visual.

## R5 — SEO & discoverability

- [ ] TODO — Tambah `jekyll-feed` (RSS) + `jekyll-sitemap` (keduanya didukung GitHub Pages, satu baris config).
- [ ] TODO — Pecah `/blog/tags` (satu halaman panjang) menjadi arsip per tag dengan hitungan.
- [ ] TODO — Konsistensi bahasa: konten Indonesia, tapi string theme Inggris (`less than 1 min read time`, `Tags:`). Pilih: full-ID atau toggle ID/EN yang benar (bukan widget Google Translate).
- [ ] TODO — Table of Contents otomatis untuk post panjang (mis. HelmiWrt OS ±110KB).

## R6 — Kesehatan teknis (tech debt)

- [ ] TODO — Audit pencampuran Bootstrap 4.3/4.6 + jQuery 3.3.1 + popper 1.14.6 + wow.js: upgrade ke Bootstrap 5 + hapus jQuery bila memungkinkan (beban page weight terbesar).
- [ ] TODO — Upgrade pencarian: `search.json` hanya berisi judul/tag; pertimbangkan Lunr/Pagefind agar isi post ikut terindeks.
- [ ] TODO — Deduplikasi: injeksi AdSense 3 titik (`head`, `scripts`, `post`), widget trakteer 2x di `post.html`.
- [ ] TODO — Pertimbangkan ulang `.gitignore` yang menyembunyikan `_posts/2021-08-09-clash-for-android.md` (post nyata tak terbit).
- [ ] TODO — Arsip/hapus fork `helmiau/portfolYOU` yang sudah tidak dipakai build.

## R7 — Operasional

- [ ] TODO — Catat perintah build lokal + token GitHub di `docs/OPERATIONS.md` (rate-limit `jekyll-github-metadata` tanpa `JEKYLL_GITHUB_TOKEN`).
- [ ] TODO — Checklist pre-push: `node scripts/check-deps.mjs` harus exit 0; build lokal exit 0; cek 5 halaman paginasi + 1 post + 1 project.
- [ ] DONE — Skill `brief-ku` dipakai sebagai acuan penyusunan dokumen ini (`docs/OVERVIEW.md`, `docs/ROADMAP.md` ini).

## Riwayat implementasi (DONE, untuk memori)

| Tanggal | Item | Bukti |
|---|---|---|
| 2026-09-27 | Vendoring tema portfolYOU in-tree (28 file, byte-identical `97382e0`), hapus `remote_theme` | `fe21b98` |
| 2026-09-27 | Timezone `Asia/Jakarta` + `tzinfo-data` + `github:[repository]` (#108) | `f7dda05` |
| 2026-09-27 | FA 5.10.0 → 5.15.4 (PR#115) | `dc75f53` |
| 2026-09-27 | rawgit → jsDelivr (`search.html`) | `b883fbf` |
| 2026-09-27 | Copy-button code blocks (#111) | `8bef111` |
| 2026-09-27 | Carousel multi-instance (#128) | `3ad8169` |
| 2026-09-28 | Paginasi blog 8/halaman (#53) + navbar dedupe | `e3d009a`, `efd53b1` |
| 2026-09-28 | Cookie consent GDPR (#109), tracking di-gate | `8fdbccf` |
| 2026-09-28 | Fix link `/privacy` 404 di banner | `c54312e` |
| 2026-09-28 | Hapus adblock gate penyebab 404 massal post | `a6af704` |
