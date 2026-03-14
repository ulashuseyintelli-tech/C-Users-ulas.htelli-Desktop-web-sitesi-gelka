# Uygulama Planı: Gelka Kampüs Partner Landing Page

## Genel Bakış

Bu plan, `kampus-partner.html` landing page'inin güncel teknik tasarıma göre tamamlanması, eksiklerin giderilmesi ve yayına hazır hale getirilmesi için görev listesini tanımlar. Sayfa iskeleti ve temel bölümler mevcut; bu plan eksik davranışları, kalite kontrollerini ve yayın adımlarını kapsar.

## Görevler

### 1. Sayfa İskeleti ve Entegrasyon

- [x] 1.1 `kampus-partner.html` dosyasını oluştur, head/header/footer entegre et
  - Doğrulama: Dosya mevcut, header/footer index.html ile tutarlı, CSS/font/ikon referansları doğru
  - _Gereksinimler: 1.1, 1.2, 1.3, 1.4, 1.5_

- [x] 1.2 Global bileşenleri entegre et (cookie banner, WhatsApp float)
  - WhatsApp mesaj metni: "Merhaba, Kampüs Partner programı hakkında bilgi almak istiyorum."
  - WhatsApp'a `gtag('event', 'kampus_whatsapp_click')` event tracking ekli
  - Doğrulama: Cookie banner çalışıyor, WhatsApp doğru mesaj metniyle açılıyor
  - _Gereksinimler: 1.8, 17.7_

### 2. İçerik Bölümleri

- [x] 2.1 Hero bölümü
  - H1: "Elektrik Faturası Getir, Aylık Burs Kazan"
  - Alt başlık ve açıklama paragrafları tasarımdaki metinlerle
  - CTA: "Kampüs Partner Ol" → `#basvuru-formu` anchor + `gtag('event', 'kampus_hero_cta_click')`
  - Doğrulama: H1 metni doğru, CTA tıklanınca forma scroll ediyor, GA4 event tetikleniyor
  - _Gereksinimler: 3.1, 3.2, 3.3, 3.4, 3.5, 17.4_

- [x] 2.2 Güven şeridi (trust-band)
  - 4 unsur: EPDK lisanslı yapı, İşletmelere özel teklif analizi, Şeffaf başvuru süreci, KVKK uyumlu veri işleme
  - Doğrulama: 4 öğe DOM'da mevcut, ikon + metin yapısında
  - _Gereksinimler: 4.1, 4.2, 4.3_

- [x] 2.3 Program Nedir + Nasıl Çalışır
  - Program Nedir: H2 başlık, vurgu metni, açıklama paragrafları
  - Nasıl Çalışır: 4 adımlı timeline (İşletme Bulun → Faturayı İletin → Teklif Hazırlansın → Burs Kazanın)
  - Doğrulama: Bölüm sırası doğru, 4 adım mevcut, yasaklı ifade yok
  - _Gereksinimler: 5.1, 5.2, 5.3, 6.1, 6.2, 6.3_

- [x] 2.3b Nereden Başlayabilirim bölümü
  - "Nasıl Çalışır" ile "Hangi İşletmelere" arasında konumlandırılmış
  - 7 başlangıç noktası ikon + metin grid kartları (2 sütun): aile çevresi, akrabalar, arkadaş çevresi, sık gidilen mekanlar, kampüs çevresi, mahalle işletmeleri, staj/iş yerleri
  - CTA: "fatura iletme" odaklı (Nasıl Çalışır adımlarıyla tutarlı)
  - Vurgu: "Çoğu öğrenci programa kendi çevresindeki bir işletmeden aldığı ilk fatura ile başlar."
  - Responsive: 2 sütun (masaüstü/tablet) → 1 sütun (mobil)
  - Doğrulama: 7 kart DOM'da mevcut, psikolojik bariyer kırıcı ton, grid responsive
  - _Gereksinimler: Dönüşüm optimizasyonu — psikolojik bariyerin kırılması_

- [x] 2.3c Hangi İşletmelere Gidebilirim bölümü
  - "Nereden Başlayabilirim" ile "Burs Modeli" arasında konumlandırılmış
  - 9 işletme türü ikon grid kartları: fabrikalar, üretim tesisleri, atölyeler, restoran/kafeler, oteller, marketler/zincir mağazalar, AVM'ler, hastaneler/sağlık kuruluşları, büyük ofisler/iş merkezleri
  - CTA: "fatura iletme" odaklı (Nasıl Çalışır adımlarıyla tutarlı)
  - Responsive: 3 sütun (masaüstü) → 2 sütun (tablet) → 1 sütun (mobil)
  - Doğrulama: 9 kart DOM'da mevcut, "küçük esnaf" ifadesi yok, grid responsive
  - _Gereksinimler: Dönüşüm optimizasyonu — hedef işletme türlerinin somutlaştırılması_

- [x] 2.4 Burs Modeli (metin bazlı) + Çoklu İşletme
  - Tablo kaldırıldı → metin bazlı 4 kartlı grid modeline geçildi
  - %1 oranı şeffaf şekilde belirtiliyor
  - Burs sürekliliği: "İşletme müşteri kaldığı sürece burs devam eder"
  - Çoklu işletme avantajı burs modeli bölümüne entegre edildi
  - Harekete geçirici vurgu: "Çoğu öğrenci programa ilk olarak kendi çevresindeki bir işletmenin elektrik faturasını ileterek başlar."
  - Doğrulama: 4 kart mevcut, %1 oranı görünür, süreklilik mesajı var, çoklu işletme vurgusu var
  - _Gereksinimler: 7.1, 7.2, 7.3, 8.1, 8.2, 20.4_

- [x] 2.5 Kariyer + Kimler Katılabilir + SSS + Kampüs Lideri
  - Kariyer: 3 kart + highlight banner
  - Kimler Katılabilir: 3 hedef kitle
  - SSS: 5 soru-cevap accordion
  - Kampüs Lideri: Başlık, açıklama, CTA
  - Doğrulama: Bölüm sırası AIDA modeline uygun, 3 kariyer kartı, 5 SSS sorusu, accordion yapısı doğru
  - _Gereksinimler: 9.1–9.7, 10.1, 10.2, 11.1, 11.2, 11.4, 11.5, 12.1–12.4_

### 3. Başvuru Formu

- [x] 3.1 Form HTML yapısı
  - Zorunlu alanlar: Ad Soyad, Üniversite, Bölüm, Telefon, E-posta (tümü required)
  - İsteğe bağlı: İşletme sayısı dropdown
  - Hidden `_subject` alanı
  - KVKK notu + kvkk.html bağlantısı
  - Başarı/hata mesaj div'leri (hidden)
  - Doğrulama: Tüm label-input eşleşmeleri doğru, required attribute'lar mevcut, KVKK linki çalışıyor
  - _Gereksinimler: 13.1, 13.2, 13.4, 13.5, 13.6, 19.1_

- [x] 3.2 Honeypot spam koruması ekle
  - `<input type="text" name="_gotcha" style="display:none" tabindex="-1" autocomplete="off">` alanını forma ekle
  - JavaScript'te honeypot kontrolü: `if (formData.get('_gotcha')) return;`
  - Doğrulama: Honeypot alanı DOM'da mevcut ama görünmüyor, bot doldurursa form sessizce reddediliyor
  - _Gereksinimler: Tasarım — Spam Koruması_

- [x] 3.3 Double submit engeli ekle
  - Submit butonunu gönderim sırasında `disabled` yap
  - Buton metnini "Gönderiliyor..." + spinner ikonu olarak değiştir
  - Başarı veya hata sonrası butonu tekrar aktif et ve orijinal metne döndür
  - Doğrulama: Butona iki kez hızlıca tıklandığında tek istek gidiyor, spinner görünüyor, sonra buton normale dönüyor
  - _Gereksinimler: Tasarım — Form Gönderim Durumları_

### 4. Form Davranışı (JavaScript)

- [x] 4.1 Async form gönderimi (fetch + Formspree)
  - `e.preventDefault()`, `fetch` ile POST, `Accept: application/json` header
  - Doğrulama: Form sayfayı yenilemeden gönderiyor
  - _Gereksinimler: 13.3_

- [x] 4.2 Başarı durumu
  - HTTP 200: `form.reset()`, formu gizle, `#formSuccess` göster, `gtag('event', 'kampus_form_submit')` tetikle
  - Doğrulama: Başarılı gönderimde form alanları temizleniyor, başarı mesajı görünüyor
  - _Gereksinimler: 14.1, 14.2, 17.6_

- [x] 4.3 Hata durumu
  - HTTP 4xx/5xx veya ağ hatası: `#formError` göster, form verilerini koru
  - Doğrulama: Hata durumunda veriler korunuyor, hata mesajı görünüyor, buton tekrar aktif
  - _Gereksinimler: 14.3, 14.4_

- [x] 4.4 Client-side validation
  - HTML5 `required` ve `type` attribute'ları ile doğrulama
  - Doğrulama: Boş zorunlu alan → tarayıcı uyarısı, geçersiz e-posta → format uyarısı
  - _Gereksinimler: 13.5, 13.6_

### 5. Sticky CTA

- [x] 5.1 Sticky CTA HTML yapısı
  - `#stickyCta` div, `hidden` ile başlangıçta gizli
  - "Kampüs Partner Ol" butonu → `#basvuru-formu`
  - `gtag('event', 'kampus_sticky_cta_click')` event tracking
  - Doğrulama: DOM'da mevcut, başlangıçta gizli
  - _Gereksinimler: 15.1, 15.3, 17.5_

- [x] 5.2 IntersectionObserver kurulumu
  - Hero ve form bölümü izleniyor
  - Hero viewport'ta VEYA form viewport'ta → gizle
  - Her ikisi de dışında → göster
  - Yalnızca `window.innerWidth <= 768` kontrolü
  - Doğrulama: Mobilde hero geçildiğinde CTA görünüyor, forma gelince kayboluyor, masaüstünde hiç görünmüyor
  - _Gereksinimler: 15.1, 15.2, 15.4_

- [x] 5.3 Resize listener ekle
  - `window.addEventListener('resize', updateSticky)` ile ekran boyutu değişiminde sticky CTA durumunu güncelle
  - Doğrulama: Tarayıcı penceresi yeniden boyutlandırıldığında sticky CTA doğru davranıyor
  - _Gereksinimler: 15.4_

### 6. Smooth Scroll

- [x] 6.1 Tüm `href="#..."` bağlantılarına smooth scroll ekle
  - `document.querySelectorAll('a[href^="#"]')` ile tüm anchor linkleri yakala
  - `getBoundingClientRect().top + pageYOffset − header/topBanner offset` hesabıyla `window.scrollTo({ top, behavior: 'smooth' })` uygula
  - Fixed header ve top-banner yüksekliği otomatik hesaplanır
  - Doğrulama: Hero CTA, Kampüs Lideri CTA ve Sticky CTA tıklandığında yumuşak kaydırma ile forma gidiyor
  - _Gereksinimler: Tasarım — Smooth Scroll_

### 7. Analytics Doğrulama

- [x] 7.1 GA4 ve Google Ads script tag'leri
  - GA4: G-442PEKLLWZ, Google Ads: AW-2838120596
  - `gtag.js` async yükleniyor
  - Doğrulama: Head'de her iki config mevcut
  - _Gereksinimler: 17.1, 17.2, 17.3_

- [x] 7.2 Event tracking noktaları
  - `kampus_hero_cta_click`: Hero CTA onclick
  - `kampus_sticky_cta_click`: Sticky CTA onclick
  - `kampus_form_submit`: Form başarılı gönderim (JS)
  - `kampus_whatsapp_click`: WhatsApp onclick
  - Doğrulama: Her event'in tetikleyicisi DOM'da veya JS'de mevcut
  - _Gereksinimler: 17.4, 17.5, 17.6, 17.7_

### 8. SEO

- [x] 8.1 Meta etiketleri
  - Title: "Kampüs Partner - Öğrenci Burs Programı | Gelka Enerji"
  - Meta description: 140–160 karakter, doğal Türkçe
  - Canonical: `https://www.gelkaenerji.com.tr/kampus-partner.html`
  - Robots: `index, follow`
  - Doğrulama: Title 50–60 karakter, description 140–160 karakter, canonical trailing slash yok
  - _Gereksinimler: 16.1, 16.2_

- [x] 8.2 Open Graph etiketleri
  - og:title, og:description, og:image, og:url, og:type
  - Doğrulama: Tüm OG etiketleri head'de mevcut
  - _Gereksinimler: 16.3_

- [x] 8.3 Başlık hiyerarşisi
  - Tek H1, bölüm başlıkları H2, alt başlıklar H3
  - Doğrulama: `querySelectorAll('h1').length === 1`, tüm bölüm başlıkları H2
  - _Gereksinimler: 16.4_

- [x] 8.4 sitemap.xml güncellemesi
  - `kampus-partner.html` URL'si sitemap'e eklenmiş
  - Doğrulama: sitemap.xml'de URL mevcut
  - _Gereksinimler: 1.6_

### 9. Erişilebilirlik (Accessibility)

- [x] 9.1 Form label bağlantıları
  - Tüm input/select elemanları `<label for="...">` ile eşleştirilmiş
  - Zorunlu alanlar `required` attribute'a sahip
  - Doğrulama: Her input'un eşleşen label'ı var, required alanlar doğru
  - _Gereksinimler: 13.5, 19.1_

- [x] 9.2 Accordion keyboard desteği
  - Tetikleyiciler `<button>` elemanı
  - `aria-expanded` ve `aria-controls` attribute'ları mevcut
  - Cevap panelleri `role="region"` ve `hidden` ile yönetiliyor
  - Doğrulama: Tab ile gezinme, Enter/Space ile açma/kapama çalışıyor
  - _Gereksinimler: 11.3, 19.2_

- [x] 9.3 Alt text kontrolü
  - Tüm `<img>` elemanlarında boş olmayan `alt` attribute
  - Doğrulama: `document.querySelectorAll('img:not([alt])')` boş döner
  - _Gereksinimler: 19.4_

- [x] 9.4 Kontrast kontrolü
  - Metin/arka plan kontrast oranı mevcut site standardına uygun (min 4.5:1)
  - Doğrulama: Mevcut CSS değişkenleri kullanılıyor, site geneli ile tutarlı
  - _Gereksinimler: 19.3_

### 10. Responsive / QA

- [x] 10.1 Mobil test (320px / 375px)
  - Tek sütun düzeni, burs modeli kartları tek sütuna geçiyor, sticky CTA çalışıyor
  - Tüm butonlar minimum 44x44px dokunma alanı
  - Doğrulama: DevTools'ta 320px ve 375px'de tüm bölümler okunabilir
  - _Gereksinimler: 18.1, 18.2, 18.3, 18.4_

- [x] 10.2 Tablet test (768px)
  - 2 sütun grid'ler (trust band, kariyer kartları), sticky CTA gizli
  - Doğrulama: 768px'de grid düzeni doğru, sticky CTA görünmüyor
  - _Gereksinimler: 18.1_

- [x] 10.3 Masaüstü test (1024px / 1440px)
  - Tam genişlik layout, 3-4 sütun grid'ler
  - Container max-width ile sınırlı
  - Doğrulama: 1024px ve 1440px'de layout doğru, içerik taşmıyor
  - _Gereksinimler: 18.1_

- [x] 10.4 Burs modeli responsive davranışı
  - `.burs-model-box` mobilde `grid-template-columns: 1fr` ile tek sütuna geçiyor
  - Doğrulama: Dar ekranda kartlar alt alta diziliyor, sayfa genişliğini aşmıyor
  - _Gereksinimler: 18.3_

- [x] 10.5 Touch target kontrolü
  - Tüm buton ve bağlantılar mobilde min 44x44px
  - Doğrulama: DevTools ile ölçüm, CTA butonları ve form submit yeterli boyutta
  - _Gereksinimler: 18.4_

### 11. İçerik Tonu ve Kısıtlama Kontrolü

- [x] 11.1 Yasaklı ifade taraması
  - Sayfada şu ifadeler bulunmamalı: "kolay para", "zahmetsiz kazanç", "hızlı para", "garantili gelir", "kesin kazanç", "Türkiye'de ilk", "Türkiye'nin ilk", "sektörde ilk", "risksiz"
  - Doğrulama: Sayfa metninde grep ile tarama, hiçbir yasaklı ifade yok
  - _Gereksinimler: 2.4, 5.3, 20.2, 20.3_

- [x] 11.2 Burs modeli şeffaflık kontrolü
  - %1 oranı açıkça belirtiliyor, burs sürekliliği koşulu net
  - Doğrulama: Burs modeli bölümünde %1 oranı ve süreklilik koşulu mevcut
  - _Gereksinimler: 7.3, 20.4_

- [x] 11.3 SSS cevap tonu kontrolü
  - Cevaplarda "garanti", "kesin olarak", "mutlaka" ifadeleri yok
  - Doğrulama: SSS cevap metinlerinde grep ile tarama
  - _Gereksinimler: 11.4, 11.5_

- [x] 11.4 Kariyer bölümü ton kontrolü
  - Ölçülü ifadeler: "fırsat sunar", "deneyim kazanır", "tanıma imkânı"
  - Agresif kariyer vaatleri yok
  - Doğrulama: Kariyer bölümü metinleri gözden geçirilmiş
  - _Gereksinimler: 9.6, 9.7_

### 12. Release

- [ ] 12.1 Prod öncesi checklist
  - [ ] Tüm HTML bölümleri doğru sırada (AIDA modeli)
  - [ ] Form Formspree'ye başarılı gönderim yapıyor
  - [ ] Honeypot alanı mevcut ve çalışıyor
  - [ ] Double submit engeli çalışıyor
  - [ ] Smooth scroll tüm anchor linklerde çalışıyor
  - [ ] GA4 ve Google Ads event'leri tetikleniyor
  - [ ] SSS accordion doğru çalışıyor (tek-açık, klavye)
  - [ ] Sticky CTA mobilde doğru görünüyor/gizleniyor
  - [ ] Resize listener aktif
  - [ ] SEO meta etiketleri doğru
  - [ ] sitemap.xml güncellenmiş
  - [ ] KVKK notu ve bağlantısı mevcut
  - [ ] Yasaklı ifadeler yok
  - [ ] Burs tutarları disclaimer ile sunuluyor
  - [ ] WhatsApp butonu doğru mesaj metniyle çalışıyor
  - [ ] 320px–1920px responsive kontrol tamamlanmış
  - _Gereksinimler: Tüm gereksinimler_

- [ ] 12.2 Yayın sonrası doğrulama
  - [ ] GA4 Realtime'da pageview görünüyor
  - [ ] Form gönderimi e-posta olarak alınıyor
  - [ ] Mobil cihazlarda gerçek test yapılmış
  - [ ] Lead akışı testi: form → e-posta → doğru konu satırı
  - [ ] Analytics event smoke test: her 5 event en az 1 kez tetiklenmiş
  - _Gereksinimler: 17.1–17.7_

### 13. Test Altyapısı (İsteğe Bağlı)

- [ ]* 13.1 Test ortamını yapılandır
  - Vitest + fast-check + jsdom kurulumu
  - `vitest.config.js` oluştur
  - `tests/` dizini oluştur
  - _Gereksinimler: Tasarım — Test Stratejisi_

- [ ]* 13.2 Unit testler (`tests/kampus-partner.unit.test.js`)
  - H1 metni doğru (3.1), Trust band 4 öğe (4.2), Burs tablosu 3 satır (7.1)
  - SSS 5 soru (11.2), Form action Formspree (13.3), KVKK notu (13.4)
  - GA4/Ads script (17.1, 17.2), OG tag'ler (16.3), Title (16.1), Bölüm sırası (9.1, 12.1)

- [ ]* 13.3 Property testler (`tests/kampus-partner.prop.test.js`)
  - P1: Yasaklı ifade kontrolü (2.4, 5.3, 20.2, 20.3)
  - P2: Burs tutarı format kuralı (7.2)
  - P3: Accordion tek-açık davranışı (11.3)
  - P4: SSS garanti yasağı (11.5)
  - P5: Form alanı erişilebilirlik (13.5, 19.1)
  - P6: Form başarı sonrası temizleme (14.2)
  - P7: Form hata sonrası veri koruma (14.4)
  - P8: Sticky CTA görünürlük (15.1, 15.2)
  - P9: Başlık hiyerarşisi (16.4)
  - P10: Accordion klavye erişilebilirliği (19.2)
  - P11: Görsel alt text (19.4)
  - P12: Kariyer kartı yapısal bütünlüğü (9.4)

## Kalan İşler Özeti

Kod implementasyonu tamamlanmıştır. Kalan görevler yalnızca runtime doğrulamadır:

| # | Görev | Tür | Öncelik |
|---|-------|-----|---------|
| 10.1–10.5 | Responsive QA testleri (320/375/768/1024/1440) | Runtime test | Yüksek |
| 12.1 | Prod öncesi checklist (gerçek tarayıcı doğrulaması) | Runtime test | Kritik |
| 12.2 | Yayın sonrası doğrulama | Post-deploy | Kritik |

### Runtime Test Listesi (6 madde — tümü zorunlu)

1. **Mobil sticky CTA gerçek cihaz testi** — ilk ekran sonrası görünme, form görünürken kaybolma, scroll flicker kontrolü
2. **Form 4 senaryo testi** — başarı, eksik alan, hatalı e-posta, endpoint hata
3. **Honeypot manuel testi** — DevTools'tan gizli alanı doldurup submit, sessiz drop doğrulaması
4. **GA4 DebugView testi** — doğru event adları: `kampus_hero_cta_click`, `kampus_sticky_cta_click`, `kampus_form_submit`, `kampus_whatsapp_click`
5. **Responsive son bakış** — 320px, 375px, 768px kritik breakpoint'ler
6. **WhatsApp float + Sticky CTA overlap testi** — CTA görünürken WhatsApp yukarı kayıyor mu, CTA gizlenince eski konuma dönüyor mu, scroll tekrarlarında stabil mi

### Runtime Test Sonuç Tablosu

| # | Test | Sonuç | Not |
|---|------|-------|-----|
| 1 | Mobil sticky CTA (görünme / kaybolma / flicker) | ✅ | |
| 2 | Form — başarılı gönderim | ✅ | |
| 2b | Form — eksik alan | ✅ | |
| 2c | Form — hatalı e-posta | ✅ | |
| 2d | Form — endpoint hata | ✅ | |
| 3 | Honeypot (DevTools ile _gotcha doldur → submit) | ✅ | |
| 4a | GA4 — kampus_hero_cta_click | ✅ | |
| 4b | GA4 — kampus_sticky_cta_click | ✅ | |
| 4c | GA4 — kampus_form_submit | ✅ | |
| 4d | GA4 — kampus_whatsapp_click | ✅ | |
| 5a | Responsive — 320px | ✅ | |
| 5b | Responsive — 375px | ✅ | |
| 5c | Responsive — 768px | ✅ | |
| 6 | WhatsApp + CTA overlap (yukarı kayma / geri dönme / stabilite) | ✅ | |

> ✅ 14/14 test geçti — yayın onayı verildi (2026-03-09)

## Notlar

- `*` ile işaretli görevler isteğe bağlıdır ve hızlı MVP için atlanabilir
- `[x]` görevler mevcut implementasyonda zaten tamamlanmış olanlar
- Her görev ilgili gereksinimleri referans alır (izlenebilirlik)
- Her görevde "Doğrulama" satırı test edilebilir kabul kriterini tanımlar

---

## Final Mimari Özeti

### Durum: Yayın Adayı (Release Candidate)

Kod implementasyonu tamamlanmıştır. Kalan iş yalnızca runtime doğrulamadır.

### Dosya Haritası

```
gelkaenerji.com.tr/
├── kampus-partner.html    ← Yeni sayfa (600 satır, tek dosya, inline JS)
├── styles.css             ← Mevcut + kampus-partner CSS kuralları (satır 6275–6790)
├── script.js              ← Mevcut — değişiklik yok (menu, cookie, WhatsApp)
├── sitemap.xml            ← Güncellenmiş (kampus-partner.html URL'si ekli)
├── kvkk.html              ← Mevcut — KVKK bağlantı hedefi
└── yatay_logo.png         ← Mevcut — OG image
```

### Mimari Kararlar

| Karar | Seçim | Gerekçe |
|-------|-------|---------|
| Sayfa yapısı | Tek statik HTML | Mevcut site ile uyum, build tool yok |
| CSS | styles.css'e ekleme | Paylaşılan değişkenler ve bileşenler yeniden kullanılır |
| JS | Inline `<script>` | Sayfaya özel davranışlar (form, accordion, sticky CTA, smooth scroll) |
| Form backend | Formspree | Mevcut sitedeki tüm formlarla aynı endpoint |
| Analytics | gtag.js (GA4 + Google Ads) | Mevcut tracking yapısı |
| Spam koruması | Honeypot (_gotcha) | CAPTCHA gerektirmez, UX bozulmaz |
| Sticky CTA | IntersectionObserver (threshold: 0) | Form'un ilk pikseli görünürken CTA kaybolur |
| Header menü | Faz 2'ye ertelendi | Kontrollü lansman, önce veri toplama |

### Bölüm Sırası (AIDA Modeli)

```
Hero → Trust Band → Program Nedir → Nasıl Çalışır → Nereden Başlayabilirim → Hangi İşletmelere → Burs Modeli →
Kariyer → Kimler Katılabilir → SSS → Kampüs Lideri → Başvuru Formu
```

### JS Davranış Katmanları

| Davranış | Tetikleyici | Mekanizma |
|----------|-------------|-----------|
| Smooth scroll | `a[href^="#"]` click | getBoundingClientRect + pageYOffset − header offset |
| Form gönderimi | form submit | fetch POST → Formspree, honeypot check, double submit lock |
| SSS accordion | .faq-question click | aria-expanded toggle, tek-açık mantığı |
| Sticky CTA | IntersectionObserver | hero + form izleme, resize listener, WhatsApp overlap yönetimi |

### Analytics Event Modeli

| Event | Tetikleyici | Yöntem |
|-------|-------------|--------|
| `kampus_hero_cta_click` | Hero CTA onclick | inline gtag |
| `kampus_sticky_cta_click` | Sticky CTA onclick | inline gtag |
| `kampus_form_submit` | Form başarılı gönderim | JS (fetch success sonrası) |
| `kampus_whatsapp_click` | WhatsApp onclick | inline gtag |

### Güvenlik Katmanları

| Katman | Uygulama |
|--------|----------|
| Honeypot | `_gotcha` hidden input, JS'te kontrol |
| Double submit | Button disabled + spinner, finally'de restore |
| Form retry | Hata mesajı temizleme (her submit başında formError.hidden = true) |
| KVKK | Form altında 6698 sayılı KVKK notu + kvkk.html bağlantısı |

### Responsive Breakpoint'ler

| Breakpoint | Davranış |
|------------|----------|
| ≤ 480px | Trust band 1 sütun, H1 1.5rem |
| ≤ 768px | Sticky CTA aktif, kariyer 1 sütun, trust band 2x2 |
| > 768px | Sticky CTA gizli, tam genişlik layout |

### Yayın Kararı

Runtime testleri (6 madde) geçerse → yayınlayın. Beklemek kalite artırmaz, karar geciktirir.

### Yayın Sonrası İlk 3 Gün İzleme

- form submit sayısı
- WhatsApp click sayısı
- hero CTA vs sticky CTA tıklama oranı
- mobil bounce rate
- form abandon oranı
