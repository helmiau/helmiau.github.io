# PRD — Diversifikasi Income & Pay Page Kustomizable (R8)

| Field | Nilai |
|---|---|
| ID | PRD-INCOME-001 |
| Status | **Planned** — disetujui user 2026-09-28, belum diimplementasikan |
| Prioritas | P1 (Tahap 1), P2 (Tahap 2–3) |
| Deliverable | `docs/ROADMAP.md` R8 + dokumen ini |
| Constraint keras | **safelinku, AdSense, Trakteer TIDAK dihapus.** R8 menambah jalur, bukan mengganti |

---

## 1. Ringkasan

Dua hal:
1. Halaman `/pay` saat ini HTML statis yang semua nilainya hardcoded. Ubah jadi **dikonfigurasi lewat `_data/payments.yml`** sehingga nomor rekening, QR, tombol app, dan aktif/tidaknya metode bisa diganti tanpa menyentuh HTML.
2. Tambahkan **jalur income baru** yang kompatibel dengan situs statis: Ko-fi, sponsorship box, produk digital (Gumroad), affiliate, web monetization.

## 2. Kondisi saat ini (fakta dari kode)

`pay/index.html` (17KB) + `pay/index_en.html` (16.9KB) berdiri sendiri, tidak lewat layout Jekyll.

**Metode aktif yang dirender** (7): BCA, Jenius/BTPN, DANA, ShopeePay, PayPal, Flip, QRIS.

**Metode dikomentari** (4, tidak render): OVO, LinkAja, GoPay + 2 blok `text-qris`/`Salin` QRIS.

Yang hardcoded di dalam file:

| Data | Lokasi | Contoh nilai |
|---|---|---|
| Nomor rekening | `input#text-bca` value | `4640041710` |
| Cashtag | `input#text-tagjenius` value | `$helmiau` |
| Nomor e-wallet | `input#text-dana/-shopeepay` value | `085852222724` |
| Nomor rekening kedua | `input#text-jenius` value | `90370026872` |
| Deeplink app | `onclick="window.open('https://link.dana.id/qr/4ydwvf','_blank')"` | DANA |
| Deeplink Shopee | `window.open('https://wsa.wallet.airpay.co.id/qr/00e1ba15…')` | ShopeePay |
| PayPal | `window.open('https://paypal.me/helmiau','_blank')` | PayPal |
| Flip | `window.open('https://flip.id/me/helmiamirudin','_blank')` | Flip |
| QR image | `src="/assets/img/qr-bca.svg"` | per metode |
| Merchant QRIS | `HELMIAU STORE OK1224999`, `NMID: ID2023271968307` | QRIS |
| Catatan pajak | `Total pembayaran + Rp. 5.000 (pajak)` | QRIS |
| Link konfirmasi | `https://helmiau.com/wa`, `/tg` | body |
| Link lintas-bahasa | `href="index_en.html"` | header |
| Copyright | `© 2022` (sudah basi) | footer |

**Implikasi**: ganti satu nomor rekening = edit 2 file HTML (ID + EN) + redeploy. OVO/LinkAja/GoPay mau diaktifkan = buka blok komentar manual. Tidak ada cara menonaktifkan metode sementara.

## 3. Requirement (P0/P1/P2)

| ID | Requirement | Prioritas | Verifikasi |
|---|---|---|---|
| REQ-PAY-001 | Daftar metode pembayaran dibaca dari `_data/payments.yml`, bukan HTML | P1 | `grep -c 'id="qr-bca"' pay.html` berasal dari data, bukan literal |
| REQ-PAY-002 | Tiap metode punya `active`; `false` = tidak dirender sama sekali (bukan disembunyikan CSS) | P1 | Set `active: false` pada BCA → BCA hilang dari output |
| REQ-PAY-003 | Tombol "Salin" tetap berfungsi untuk tiap metode yang punya `copy_value` | P1 | Browser: klik Salin → clipboard = nilai `copy_value` |
| REQ-PAY-004 | Tombol "Buka App" muncul hanya bila `app_url` terisi | P1 | PayPal (ada app_url) → tombol muncul; BCA (tanpa app_url) → tidak |
| REQ-PAY-005 | Modal QR per metode tetap terbuka/tertutup seperti sekarang | P1 | Browser: klik ikon → modal tampil dengan QR benar |
| REQ-PAY-006 | Versi ID & EN pakai satu data yang sama | P1 | Ganti nomor DANA di yml → berubah di kedua bahasa |
| REQ-PAY-007 | Halaman `/pay` memakai layout `page` (navbar, meta SEO, consent, theme toggle) | P1 | `/pay` punya navbar yang sama dengan `/about` |
| REQ-PAY-008 | Data kosong/rusak → halaman tetap render dengan pesan "belum dikonfigurasi", tidak blank/crash | P1 | Build dengan `_data/payments.yml` kosong → exit 0, halaman tampil |
| REQ-KOFI-001 | Widget Ko-fi di footer + `/about`, dimuat async | P2 | Elemen Ko-fi muncul; `web-script.js`/adsbygoogle tetap utuh |
| REQ-SPON-001 | `site.sponsor_link` + partial `_includes/sponsor.html` tampil di bawah konten post | P2 | Post `/blog/*` menampilkan blok sponsor |
| REQ-PROD-001 | Halaman `/guide-openwrt` + tombol Gumroad | P2 | `/guide-openwrt` render + tombol checkout valid |
| REQ-AFF-001 | Field `affiliate_url` di data → dirender sebagai tautan afiliasi | P2 | Link ter-track dengan parameter afiliasi |
| REQ-WM-001 | Meta `monetization` di `head.html` hanya bila `site.web_monetization` terisi | P2 | Tidak terisi → tidak ada tag |
| REQ-DOC-001 | `docs/PAY-PAGE.md` berisi cara mengubah metode tanpa HTML | P1 | Dokumen ada + contoh yml valid |
| REQ-DOC-002 | `docs/INCOME.md` rekap kanal per kuartal | P2 | Dokumen ada, angka diisi manual |

## 4. Desain data

`_data/payments.yml` — satu sumber untuk ID + EN:

```yaml
header:
  title_id: "Selamat Datang di Portal Pembayaranku"
  title_en: "Welcome to my Payment Portal"
  desc_id: "Ingin mendukung? membayar jasa? Tekan ikon untuk memilih metode bayar. Terima kasih!"
  desc_en: "Want to support or pay for a service? Tap an icon to choose."
  confirm:
    whatsapp: https://helmiau.com/wa
    telegram: https://helmiau.com/tg
  others:
    jasa: /jasa/
    site: https://helmiau.com

methods:
  - id: bca
    label: BCA
    active: true
    icon: /assets/img/img-bca.svg
    qr_image: /assets/img/qr-bca.svg
    modal_title_id: "Pembayaran Via BCA"
    modal_title_en: "Payment Via BCA"
    holder: "a.n Helmi Amirudin"
    copy_value: "4640041710"
    copy_label_id: Salin
    copy_label_en: Copy

  - id: jenius
    label: BTPN/Jenius
    active: true
    icon: /assets/img/img-jenius.svg
    qr_image: /assets/img/qr-jenius.svg
    copy_fields:
      - { id: tagjenius, value: "$helmiau",  label_id: Cashtag,     label_en: Cashtag }
      - { id: jenius,    value: "90370026872", label_id: "Salin Nomor", label_en: "Copy number" }
    holder: "a.n Helmi Amirudin"

  - id: qris
    label: QRIS
    active: true
    icon: /assets/img/img-qris.svg
    qr_image: /assets/img/qr-qris.svg
    holder: "a.n Helmi Amirudin"
    lines:
      - "HELMIAU STORE OK1224999"
      - "NMID: ID2023271968307"
    fee_note_id: "Total pembayaran + Rp. 5.000 (pajak)"
    fee_note_en: "Total + IDR 5,000 (tax)"

  - id: paypal
    label: Paypal
    active: true
    icon: /assets/img/img-paypal.svg
    qr_image: /assets/img/qr-paypal.svg
    app_url: https://paypal.me/helmiau

  - id: ovo
    label: OVO
    active: false            # dinonaktifkan tanpa hapus kode
    icon: /assets/img/img-ovo.svg
    qr_image: /assets/img/qr-ovo.svg
    copy_value: "085852222724"

schema_keys_per_method:
  wajib:   [id, label, active, icon]
  opsional: [qr_image, modal_title_id, modal_title_en, holder, copy_value, copy_label_id,
             copy_label_en, copy_fields[], app_url, lines[], fee_note_id, fee_note_en,
             affiliate_url]
```

Aturan: `copy_value` dan `copy_fields[]` mutually exclusive; kalau keduanya ada, `copy_fields` menang.

## 5. Arsitektur render

```
pay/index.html (front matter)
  layout: page
  permalink: /pay/            # lama: /pay/index.html
  lang: id
      │
      └─ {% include payment-methods.html lang=page.lang %}
             └─ loop site.data.payments.methods → skip !active
                    ├─ ikon grid   (icon, label)
                    └─ modal       (qr_image, holder, copy_value|copy_fields,
                                    app_url, lines, fee_note)

pay/index_en.html → sama, lang: en
```

File `pay/index.html` + `pay/index_en.html` lama dipindah ke:
- `pages/pay.md` → `permalink: /pay/`
- `pages/pay-en.md` → `permalink: /pay/en/`

⚠️ **Risiko redirect**: URL lama `/pay/index.html` dan `/pay/` (sekarang 200) harus tetap hidup supaya link di post lama & QRIS scan tidak putus. Solusi: pertahankan `pay/index.html` lama sebagai file redirect minimal, atau set `permalink: /pay/index.html` pada halaman baru. Putuskan saat implementasi; **default aman: pertahankan path `/pay/` yang sudah ada sekarang** (folder `pay/` + `index.html` ber-front-matter, Jekyll tetap output ke `/pay/`).

`jasa/` mengikuti pola yang sama (R2), tapi R8 tidak menyentuh `jasa/`.

## 6. Halaman & route

| Route | Type | Sebelum | Sesudah |
|---|---|---|---|
| `/pay/` | page | statis, no navbar | layout `page`, data-driven |
| `/pay/index.html` | legacy | 200 | 200 (jaga path sama) — **jangan 404** |
| `/pay/en/` (atau `index_en.html`) | page | statis | layout `page`, data sama |
| `/sponsor/` | page | tidak ada | baru (P2, opsional) |
| `/guide-openwrt/` | page | tidak ada | baru (P2) |

Navigation: `/pay` sudah dirujuk dari `_layouts/post.html` (trakteer → `https://www.helmiau.com/pay/index_en.html`) dan `pay`→`jasa`. **Rujukan `pay/index_en.html` di post.html harus ikut diperbarui** bila path EN berubah — cek: `grep -rn "index_en" _layouts _includes _posts`.

## 7. Security & privasi

- Nomor rekening/QR **bukan rahasia publik yang perlu proteksi** (sudah di halaman publik), tapi jangan masuk ke `_data` yang ter-commit bila nanti dipakai data pribadi lain.
- Tidak ada input pengguna → tidak ada validasi server. Semua nilai dari `_data` milik pemilik repo.
- Widget pihak ketiga (Ko-fi, Gumroad) wajib dimuat `async` dan **di bawah payung consent** yang sama dengan tracking lain (`helmi-consent === 'granted'`), supaya GDPR konsisten. Ini bukan sekadar CSS hide.
- `rel="noopener"` untuk semua `target="_blank"` yang ditulis ulang (kode lama `window.open` tidak dapat rel).
- Tidak menambah CSP pelonggaran baru.

## 8. Edge case

1. `_data/payments.yml` hilang → `site.data.payments` nil → render "belum dikonfigurasi", build tetap exit 0.
2. Semua metode `active: false` → grid kosong + pesan, bukan modal rusak.
3. `qr_image` menunjuk file tidak ada → `alt` tampil, modal tetap bisa dibuka (jangan JS error).
4. Metode punya `app_url` tapi tidak `copy_value` → footer hanya tombol Buka App (kasus PayPal/Flip hari ini).
5. `copy_fields[]` dengan 2 field → 2 tombol Salin (kasus Jenius hari ini).
6. QRIS tanpa nomor (kasus sekarang, `text-qris` dikomentari) → `copy_value` kosong → tombol Salin tidak dirender.
7. Bahasa: `modal_title_en` hilang → fallback ke `modal_title_id`, bukan `undefined`.
8. Safari lama `navigator.share` → tombol "Bagikan" sudah ada fallback `alert`; pertahankan.
9. Konsumsi `assets/salin.js`: fungsi `copy(textId)` bergantung **ID DOM**. Generator wajib membuat `id="text-<method.id>"` yang sama, kalau tidak tombol Salin mati senyap.

## 9. Non-goal

- Menghapus/mengganti safelinku, AdSense, Trakteer.
- Backend pembayaran, webhook, invoice, recurring billing.
- Integrasi API bank/e-wallet (cek status pembayaran otomatis).
- A/B testing income.
- Migrasi `jasa/` (milik R2).

## 10. Fase implementasi

| Fase | Isi | Estimasi |
|---|---|---|
| **F1** Data + partial | `_data/payments.yml` dari nilai existing (7 aktif, 4 nonaktif), `_includes/payment-methods.html` | 2 jam |
| **F2** Migrasi halaman | `pay/index.html` + `pay/index_en.html` jadi halaman Jekyll; jaga path `/pay/` | 2 jam |
| **F3** Verifikasi faktual | build + browser: 7 metode, modal, Salin per metode, Buka App, fallback data kosong | 2 jam |
| **F4** Dok | `docs/PAY-PAGE.md` | 1 jam |
| **F5** Income baru (P2) | Ko-fi footer/about, `site.sponsor_link` + `_includes/sponsor.html` | 3 jam |
| **F6** Produk digital (P2) | naskah PDF series → halaman `/guide-openwrt` + Gumroad embed | 1–2 hari |
| **F7** Sisanya (P2) | affiliate, web monetization, `docs/INCOME.md` | 3 jam |

Urutan: F1→F2→F3→F4 harus selesai sebelum F5. F5–F7 independen dan boleh di-skip.

## 11. Acceptance criteria (ringkas)

- REQ-PAY-001…008 terpenuhi dengan bukti perintah/browser, bukan asumsi.
- `node scripts/check-deps.mjs` exit 0 (partial baru harus resolve).
- `bundle exec jekyll build` exit 0 dengan `JEKYLL_GITHUB_TOKEN` terisi.
- Tidak ada `grep "id=\"qr-bca\"" pay/index.html` tersisa sebagai HTML literal setelah migrasi.
- Rujukan `pay/index_en.html` di `_layouts/post.html` sudah konsisten dengan path baru.
- GitHub Pages build status `built` tanpa error, `/pay/` live 200.

## 12. Asumsi

1. Pemilik repo satu orang, tidak butuh UI admin — edit YAML + commit sudah cukup "kustomisasi".
2. QR image SVG/PNG existing tetap dipakai; penggantian gambar = ganti file di `assets/img/`.
3. Nominal `+Rp5.000 (pajak)` QRIS adalah kebijakan tetap sampai user bilang berubah.
4. Gumroad/Ko-fi/afiliasi butuh akun yang belum dibuat — masuk daftar **bloker eksternal** untuk F5–F7.
5. Tidak ada Google Analytics event untuk klik metode bayar (belum diminta); kalau nanti perlu, itu pekerjaan terpisah dan harus di-gate consent.

## 13. Pertanyaan terbuka

| # | Pertanyaan | Kenapa penting | Default kalau tidak dijawab |
|---|---|---|---|
| Q1 | Path EN: pertahankan `/pay/index_en.html` atau pindah `/pay/en/`? | Merujuk 100+ post lama & QR code | Pertahankan path lama |
| Q2 | OVO/LinkAja/GoPay: aktifkan sekarang di data (`active: true`) atau tetap nonaktif? | Berdampak halaman live | Tetap `false` (sesuai kondisi hari ini) |
| Q3 | Gumroad: harga & bahasa e-book? | Produk nyata | Tunda sampai ada naskah |
| Q4 | Ko-fi atau Trakteer saja yang di-UI? Trakteer sudah ada 2x di post | Menghindari duplikasi CTA | Tambah Ko-fi, dedup Trakteer (R6) |

## 14. Definisi selesai

R8 selesai bila: `/pay/` dan versi EN-nya dirender dari `_data/payments.yml` lewat layout `page`, 7 metode aktif tampil dengan Salin/modal/Buka App terverifikasi di browser, metode nonaktif hilang dari output, halaman tetap tampil saat data kosong, `docs/PAY-PAGE.md` ada, safelinku/AdSense/Trakteer tidak berubah, dan GitHub Pages build `built`.
