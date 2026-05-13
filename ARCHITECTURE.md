# GELKA Enerji — Site İyileştirme Mimarisi

> **Tarih:** 14 Mayıs 2026
> **Sahibi:** Ulaş Hüseyin Telli
> **Hosting:** Turhost cPanel (PHP destekli)
> **Domain:** gelkaenerji.com.tr
> **Mail:** cPanel mail (info@gelkaenerji.com.tr)

---

## 🎯 Stratejik Hedefler

1. **Lead kaybını durdur** (conversion tracking + email deliverability)
2. **Site hızlan** (CSS böl, görsel optimize, infra hijyeni)
3. **Trust katmanını gerçek rakamlarla doldur** (yalan rakamlar → gerçek rakamlar)
4. **SEO authority topla** (semantic content + schema)
5. **Lead pipeline operasyonelleş** (15 dk dönüş hedefi, segmentasyon)

---

## 📊 Gerçek Şirket Verileri (Trust Numbers)

| Metrik | Değer |
|---|---|
| Şirket yaşı | 2 ay |
| Yönetilen portföy | ₺10M+ |
| Son 3 ayda analiz | 300+ |
| Ortalama tasarruf | %4-10 |
| EPDK lisans | Var (PDF mevcut) |
| Lead response | Şu an 12 saat → hedef 30 dk |

---

## 🚨 Kritik Düzeltme: Sahte Rakamlar

**Mevcut (sahte) → Önerilen (gerçek):**

| Yer | Mevcut | Yeni |
|---|---|---|
| Stats Section | "10+ Yıllık Deneyim" | "3 Ayda 300+ Analiz" |
| Stats Section | "1.000+ Kurumsal Müşteri" | "₺10M+ Yönetilen Portföy" |
| Stats Section | "%100 Memnuniyet" | "%4-10 Ortalama Tasarruf" |
| Stats Section | "81 İl Genelinde" | "EPDK Lisanslı Tedarik" |
| Hero Badges | "200+ İşletme Analizi" | "300+ Fatura Analizi (Son 3 Ay)" |
| Hero Badges | "Ortalama Teklif: 24 Saat" | (aynı kalacak) |
| Hero Badges | "Geçiş: Sizin Adınıza" | (aynı kalacak) |

---

## 🛠 Teknik Mimari Kararları

### Hosting & Build
- **Hosting:** Turhost shared cPanel (mevcut)
- **Build tool:** YOK. Manual deploy. Risk düşük, kontrol yüksek.
- **Backend:** PHP include sistem (header/footer için)
- **Form backend:** Formspree (Faz 5'te kendi serverless'a geçilecek)
- **DNS:** cPanel DNS yönetimi

### Frontend
- **HTML:** Statik HTML (PHP include'la)
- **CSS:** Bölünmüş — `common.css` + sayfa bazlı
- **JS:** Vanilla JS (44KB), modüler organizasyon
- **Görseller:** WebP + `<picture>` fallback
- **Font:** Google Fonts (preload + swap)
- **Icon:** Font Awesome Kit (sadece kullanılan ikonlar)

### Tracking
- **GA4:** G-442PEKLLWZ (mevcut)
- **Google Ads:** AW-2838120596 (mevcut, label'lar boş)
- **GTM:** Yok, gtag direkt kullanılıyor

---

## 📁 Hedef Dosya Yapısı

```
/public_html/
├── /assets/
│   ├── /css/
│   │   ├── common.css          (header, footer, button, base — her sayfada)
│   │   ├── home.css            (sadece index.php)
│   │   ├── landing.css         (ticari-elektrik-teklifi.php)
│   │   ├── bayilik.css         (bayilik.php)
│   │   ├── kampus.css          (kampus-partner.php)
│   │   ├── makaleler.css       (blog liste + makale)
│   │   └── legal.css           (kvkk, gizlilik, çerez)
│   ├── /js/
│   │   ├── common.js           (header scroll, mobile menu, cookie banner)
│   │   ├── forms.js            (form validation + spam koruma)
│   │   ├── analytics.js        (conversion tracking)
│   │   └── home.js             (modal, sector cards)
│   ├── /img/
│   │   ├── /webp/              (optimize edilmiş)
│   │   └── /raw/               (orijinaller, gitignore)
│   └── /fonts/                 (self-hosted opsiyonel)
├── /partials/
│   ├── header.php              (tüm sayfalarda include)
│   ├── footer.php              (tüm sayfalarda include)
│   ├── top-banner.php
│   └── tracking-head.php       (GA4 + Ads + Schema)
├── /makaleler/
│   └── (mevcut makaleler)
├── index.php                   (eski index.html)
├── ticari-elektrik-teklifi.php
├── bayilik.php
├── hakkimizda.php
├── kampus-partner.php
├── makaleler.php
├── tesekkurler.php
├── kvkk.php
├── cerez-politikasi.php
├── gizlilik-politikasi.php
├── .htaccess                   (gzip, cache, redirect)
├── robots.txt
└── sitemap.xml
```

---

## 🗓 Faz Planı

### FAZ 0 — Revenue Leak Fix (1-2 gün)

**0.1 Trust Numbers Update (acil — yasal risk)**
- index.html stats section değiştir
- index.html hero badges güncelle
- Tüm sayfalarda "10+ yıllık deneyim" gibi ifadeleri tara
- Her yerde gerçek rakamlar

**0.2 Google Ads Conversion Setup (manuel admin işi)**
- Ads paneline gir → Conversions
- 3 conversion action oluştur:
  - `Form Submit` (primary, value: 100)
  - `WhatsApp Click` (secondary, value: 50)
  - `Phone Call Click` (secondary, value: 30)
- Her birinin label'ını al, script.js'e gerçek değerlerle yaz

**0.3 Email Deliverability (cPanel)**
- SPF kaydı ekle/güncelle
- DKIM aktifleştir
- DMARC kaydı ekle
- Test: mail-tester.com → 10/10 hedef

**0.4 UTM tracking**
- Tüm form'lara `<input type="hidden" name="utm_source/medium/campaign">`
- script.js'te URL params yakala, hidden field'lara yaz
- Formspree mailde görünecek

---

### FAZ 1 — Infra Hijyeni (1 gün)

**1.1 .htaccess optimizasyonu**
- Gzip / Brotli compression
- Cache-Control headers (img:1y, css/js:1m, html:1h)
- HTTPS redirect (zaten varsa kontrol)
- HSTS header
- security headers (X-Frame-Options, X-Content-Type-Options)

**1.2 robots.txt + sitemap.xml**
- robots.txt oluştur
- sitemap.xml oluştur (manuel + Search Console submit)

**1.3 Schema markup eksikleri**
- FAQPage schema (SSS olan sayfalara)
- Article schema (makalelere)
- BreadcrumbList (her alt sayfaya)

---

### FAZ 2 — Performance (1 hafta)

**2.1 PHP migration**
- HTML → PHP (sadece uzantı değişikliği + include)
- header.php, footer.php, top-banner.php, tracking-head.php oluştur
- Tüm sayfalarda include kullan

**2.2 CSS bölme**
- styles.css'i analiz et, hangi class hangi sayfada kullanılıyor
- common.css + sayfa bazlı CSS'lere böl
- Her sayfa sadece kendi CSS'ini yüklesin

**2.3 Görsel optimizasyon**
- Tüm .png/.jpg → .webp (squoosh.app veya cwebp)
- `<picture>` ile fallback
- `loading="lazy"` (hero hariç)
- `width`/`height` attribute (CLS önleme)
- Hero görseli özel: küçük, blur placeholder

**2.4 Font Awesome → kit**
- fontawesome.com/kits üzerinden kit oluştur
- Sadece kullanılan ikonları seç (~40 ikon)
- 70KB → ~10KB

**2.5 Google Fonts**
- `font-display:swap`
- `<link rel="preload">` ile critical font

**2.6 Intro screen problem**
- 1.8s blocking → 400ms veya tamamen kaldır
- Sadece ana sayfada ve sadece ilk ziyarette (sessionStorage)

---

### FAZ 3 — Trust + Conversion (2 hafta)

**3.1 Case study cards**
- 3-5 gerçek case (kimlik gizli, sektör + tasarruf)
- Örnek: "İstanbul'da 184.000 kWh aylık tüketimli sanayi tesisi → ₺49.300/ay tasarruf"
- Anasayfada + landing page'de

**3.2 Tasarruf hesaplama aracı**
- Basit JS: aylık fatura tutarı + sektör → tahmini aylık tasarruf
- Gerçekçi aralık (%4-10) kullan
- Sonuç gösterildikten sonra "Faturanı yükle, kesin teklifi alalım" CTA

**3.3 Lead webhook (yüksek değerli)**
- Form submit'ten sonra Formspree paralelinde:
- Eğer fatura tutarı > 100.000 TL → Telegram/WhatsApp bot ile satış ekibine anlık bildirim
- Bu sayede 12 saat → 30 dk dönüş hedefine yaklaşırız

**3.4 Save-Data + reduced motion**
- `navigator.connection.saveData` veya `effectiveType === '2g'/'slow-2g'`
- Animasyonları kapat
- Hero'da düşük çözünürlüklü görsel

---

### FAZ 4 — SEO Authority (sürekli, 6 ay)

**4.1 Pillar pages oluştur**
- "Sanayi Elektrik Tedariki" (pillar)
- "OSB Elektrik Tarifesi" (pillar)
- "Reaktif Ceza Yönetimi" (pillar)
- "PTF/YEKDEM Anlama" (pillar)

**4.2 Topic cluster**
- Her pillar için 5-8 alt makale
- Pillar → cluster, cluster → pillar internal link
- Mevcut makaleleri pillar yapısına entegre et

**4.3 İçerik üretimi**
- Haftalık 2 teknik içerik (sen yazacaksın, ben yapı + SEO destek)
- Hedef anahtar kelimeler:
  - "reaktif ceza nasıl düşürülür"
  - "OG tek terim çift terim fark"
  - "2026 YEKDEM maliyet"
  - "PTF nasıl hesaplanır"
  - "sanayi elektrik gizli maliyet"
  - "tedarikçi değiştirirken dikkat"

---

### FAZ 5 — Opsiyonel: Lead Pipeline (gelecek)

**5.1 Kendi serverless endpoint**
- Vercel/Netlify Functions (ücretsiz tier)
- Formspree'den taşı
- DKIM senin domain'inde

**5.2 CRM entegrasyonu**
- HubSpot Free veya Pipedrive
- Lead segmentasyonu otomatik

**5.3 SLA dashboard**
- Lead → ilk dönüş süresi metric
- Haftalık raporlar

---

## ❌ Kapsama Almıyoruz (Bilinçli Kararlar)

- React/Vue/Angular migration
- Astro/Next.js migration
- PWA / Service Worker
- ViewTransition API
- HTTP/2 push
- Headless CMS
- A/B testing platformu (şu an traffic yetersiz)

Bu kararlar Faz 5 sonrasında, traffic > 5000/ay olduğunda yeniden değerlendirilecek.

---

## 📈 Başarı Metrikleri

| Metrik | Şu An | 1 Ay Hedef | 3 Ay Hedef |
|---|---|---|---|
| Mobile LCP | ~4-5s (tahmin) | <3s | <2.5s |
| Lighthouse Mobile | ~55 (tahmin) | 75+ | 85+ |
| Lead response time | 12 saat | 1 saat | 30 dk |
| Aylık organik trafik | ? | +%30 | +%100 |
| Conversion rate (form) | ? | %3+ | %5+ |
| Cost per lead (Ads) | ? | -%20 | -%40 |

---

## 🚦 İlerleme Takibi

Bu doküman canlı bir referans. Her faz tamamlandıkça aşağıdaki tabloya not düşeceğiz.

| Faz | Durum | Başlangıç | Bitiş | Notlar |
|---|---|---|---|---|
| 0.1 Trust Numbers | ✅ Tamam | 14 May | 14 May | Kademeli auto-artış, 1000 cap |
| 0.2 Ads Conversion | ✅ Tamam | 14 May | 14 May | GA4 event üzerinden, label placeholder'lar temizlendi |
| 0.3 Email Deliverability | ✅ Tamam | - | - | Spam'a düşen yok (manuel test) |
| 0.4 UTM Tracking | ✅ Tamam | 14 May | 14 May | utm_*, gclid, gbraid, wbraid, referrer, landing_page test edildi, mail'de görünüyor |
| 1.1 .htaccess | ✅ Tamam | 14 May | 14 May | Brotli aktif (%76 sıkıştırma), HSTS, security headers, cache. Test: giftofspeed.com |
| 1.2 robots/sitemap | ⏳ Bekliyor | - | - | - |
| 1.3 Schema | ✅ Tamam | 14 May | 14 May | FAQPage (4 sayfa), Article (18 makale), BreadcrumbList (tüm alt sayfalar), AboutPage, CollectionPage |
| 2.x Performance | ⏳ Bekliyor | - | - | - |
| 3.x Trust+Conversion | ⏳ Bekliyor | - | - | - |
| 4.x SEO Authority | ⏳ Sürekli | - | - | - |
