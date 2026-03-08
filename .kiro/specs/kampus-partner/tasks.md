# Uygulama Planı: Gelka Kampüs Partner Landing Page

## Genel Bakış

Bu plan, `kampus-partner.html` statik landing page'inin mevcut gelkaenerji.com.tr sitesine entegrasyonunu adım adım tanımlar. Her görev bir öncekinin üzerine inşa edilir; önce HTML iskelet yapısı, ardından CSS stilleri, JavaScript davranışları ve son olarak entegrasyon/test adımları gelir.

## Görevler

- [x] 1. HTML iskelet dosyasını oluştur (head, header, footer, global bileşenler)
  - [x] 1.1 `kampus-partner.html` dosyasını site kök dizininde oluştur
    - index.html'den `<head>` yapısını kopyala ve Kampüs Partner'a özel meta etiketlerini ayarla: title, description, canonical, OG etiketleri (og:title, og:description, og:image, og:url)
    - GA4 (G-442PEKLLWZ) ve Google Ads (AW-2838120596) gtag.js kodlarını head'e ekle
    - styles.css, Google Fonts (Poppins), Font Awesome 6.4.0 referanslarını ekle
    - _Gereksinimler: 1.1, 1.3, 1.4, 1.5, 16.1, 16.2, 16.3, 17.1, 17.2, 17.3_

  - [x] 1.2 Site header ve footer bileşenlerini kopyala
    - index.html'den `.top-banner` ve `.header` bloklarını birebir kopyala
    - index.html'den `.footer` bloğunu birebir kopyala
    - `.cookie-banner` bileşenini kopyala
    - `.whatsapp-float` bileşenini kopyala, mesaj metnini "Merhaba, Kampüs Partner programı hakkında bilgi almak istiyorum." olarak özelleştir
    - WhatsApp butonuna `onclick="gtag('event', 'kampus_whatsapp_click')"` event tracking ekle
    - _Gereksinimler: 1.1, 1.2, 1.8, 17.7_

- [x] 2. İçerik bölümlerinin HTML yapısını oluştur (Hero → Kampüs Lideri)
  - [x] 2.1 Hero bölümünü oluştur
    - `<section id="hero" class="kampus-hero">` ile H1 başlık: "Elektrik Faturası Getir, Aylık Burs Kazan"
    - Alt başlık ve açıklama paragraflarını tasarımdaki metinlerle ekle
    - "Kampüs Partner Ol" CTA butonunu `#basvuru-formu` anchor'ına bağla
    - CTA'ya `onclick="gtag('event', 'kampus_hero_cta_click')"` ekle
    - _Gereksinimler: 3.1, 3.2, 3.3, 3.4, 3.5, 17.4_

  - [x] 2.2 Güven şeridi (trust-band) bölümünü oluştur
    - Hero'nun hemen altında `.trust-band` section'ı
    - 4 güven unsuru: EPDK lisanslı yapı, İşletmelere özel teklif analizi, Şeffaf başvuru süreci, KVKK uyumlu veri işleme
    - Her unsur ikon + metin yapısında
    - _Gereksinimler: 4.1, 4.2, 4.3_

  - [x] 2.3 Program Tanıtımı ve Nasıl Çalışır bölümlerini oluştur
    - `#program-nedir` bölümü: "Program Nedir?" H2 başlığı, "Üniversite öğrencilerine yönelik yenilikçi bir enerji bursu modeli." vurgu metni
    - `#nasil-calisir` bölümü: 4 adımlı timeline (İşletme Bulun → Faturayı İletin → Teklif Hazırlansın → Burs Kazanın)
    - Mevcut `.process-timeline` yapısını kullan
    - _Gereksinimler: 5.1, 5.2, 5.3, 6.1, 6.2, 6.3_

  - [x] 2.4 Burs Modeli tablosu ve Çoklu İşletme bölümünü oluştur
    - `#burs-modeli` bölümü: Tablo başlıkları "İşletmenin Aylık Elektrik Faturası" ve "Örnek Aylık Burs Tutarı"
    - 3 satır: 500.000 TL → 5.000 TL'ye kadar, 1.000.000 TL → 10.000 TL'ye kadar, 3.000.000 TL → 30.000 TL'ye kadar
    - Tablo altında disclaimer metni
    - `.burs-table-wrapper` ile mobil yatay kaydırma desteği
    - `#coklu-isletme` bölümü: "Birden Fazla İşletme Yönlendirme" başlığı ve açıklama
    - _Gereksinimler: 7.1, 7.2, 7.3, 8.1, 8.2, 20.4_

  - [x] 2.5 Kariyer, Kimler Katılabilir, SSS, Kampüs Lideri bölümlerini oluştur
    - `#kariyer` bölümü: "Sadece Burs Değil, Sektör Deneyimi" H2, 3 kart (İletişim Ağı, Enerji Sektörü, İş Dünyası), highlight banner
    - `#kimler-katilabilir` bölümü: 3 hedef kitle listesi
    - `#sss` bölümü: 5 soru-cevap accordion yapısı, `<button>` + `aria-expanded` + `aria-controls` + `role="region"` + `hidden`
    - `#kampus-lideri` bölümü: Başlık, açıklama, CTA butonu → `#basvuru-formu`
    - _Gereksinimler: 9.1, 9.2, 9.3, 9.4, 9.5, 9.6, 9.7, 10.1, 10.2, 11.1, 11.2, 11.4, 11.5, 12.1, 12.2, 12.3, 12.4_

- [x] 3. Başvuru formunu oluştur
  - [x] 3.1 Form HTML yapısını oluştur
    - `#basvuru-formu` section'ı içinde `<form id="kampusForm" action="https://formspree.io/f/xwvneaod" method="POST">`
    - Zorunlu alanlar: Ad Soyad (text, required), Üniversite (text, required), Bölüm (text, required), Telefon (tel, required), E-posta (email, required)
    - İsteğe bağlı: İşletme sayısı dropdown (1-2, 3-5, 5+)
    - Her input/select için `<label for="...">` eşleştirmesi
    - Hidden `_subject` alanı: "Yeni Kampüs Partner Başvurusu"
    - KVKK notu ve kvkk.html bağlantısı
    - Gizli başarı (`#formSuccess`) ve hata (`#formError`) mesaj div'leri
    - _Gereksinimler: 13.1, 13.2, 13.3, 13.4, 13.5, 13.6, 14.1, 14.3, 19.1_

  - [x] 3.2 Sticky CTA HTML yapısını oluştur
    - `#stickyCta` div'i, `hidden` attribute ile başlangıçta gizli
    - "Kampüs Partner Ol" etiketli buton → `#basvuru-formu`
    - `onclick="gtag('event', 'kampus_sticky_cta_click')"` event tracking
    - _Gereksinimler: 15.1, 15.3, 17.5_

- [x] 4. CSS stillerini styles.css'e ekle
  - [x] 4.1 Kampüs Partner bölüm stillerini ekle
    - `.kampus-hero`: gradient arka plan (var(--gradient-hero)), beyaz metin, padding — `.bayilik-hero` temel alınır
    - `.trust-band`, `.trust-band-grid`, `.trust-band-item`: güven şeridi grid stili
    - `.kampus-section`: genel bölüm wrapper — `.bayilik-section` temel alınır
    - `.burs-table-wrapper` (overflow-x: auto), `.burs-table`: tablo stilleri
    - `.burs-disclaimer`: uyarı metni stili
    - `.kariyer-grid`, `.kariyer-card`, `.kariyer-highlight`: kariyer kartları ve banner
    - `.katilim-list`: katılım listesi stili
    - `.kampus-lider-section`: kampüs lideri bölümü
    - `.kampus-highlight-section`: çoklu işletme vurgu bölümü
    - _Gereksinimler: 1.3, 3.5, 4.3, 18.1_

  - [x] 4.2 Form ve mesaj stillerini ekle
    - `.kampus-form-section`: form bölümü — `.bayilik-form-section` temel alınır
    - `.form-message`, `.form-success`, `.form-error`: başarı/hata mesaj stilleri
    - _Gereksinimler: 14.1, 14.3_

  - [x] 4.3 Sticky CTA ve responsive stilleri ekle
    - `.sticky-cta`: sabit pozisyon, z-index, alt kenar — yalnızca `@media (max-width: 768px)` altında `display: block`
    - Mobil responsive kuralları: tek sütun düzeni (768px altı), tablo yatay kaydırma, minimum 44x44px dokunma alanları
    - 320px–1920px arası ekran genişliği desteği
    - _Gereksinimler: 15.4, 18.1, 18.2, 18.3, 18.4_

- [x] 5. JavaScript davranışlarını ekle
  - [x] 5.1 Form gönderim JavaScript'ini yaz
    - `kampusForm` submit event listener: `e.preventDefault()`, `fetch` ile Formspree POST
    - Başarılı yanıt (200): `gtag('event', 'kampus_form_submit')`, `form.reset()`, formu gizle, `#formSuccess` göster
    - Hata yanıtı (4xx/5xx veya ağ hatası): `#formError` göster, form verilerini koru
    - _Gereksinimler: 13.3, 14.1, 14.2, 14.3, 14.4, 17.6_

  - [x] 5.2 SSS accordion JavaScript'ini yaz
    - `.faq-question` butonlarına click event listener
    - Tıklanan sorunun `aria-expanded` toggle, `hidden` attribute toggle
    - Diğer açık cevapları kapat (tek-açık davranışı)
    - Klavye erişilebilirliği: Tab ile gezinme, Enter/Space ile açma/kapama
    - _Gereksinimler: 11.3, 19.2_

  - [x] 5.3 Sticky CTA IntersectionObserver JavaScript'ini yaz
    - Hero bölümü ve form bölümü için `IntersectionObserver` oluştur
    - Hero viewport'ta veya form viewport'ta → sticky CTA gizle
    - Her ikisi de viewport dışında → sticky CTA göster
    - Yalnızca `window.innerWidth <= 768` kontrolü
    - _Gereksinimler: 15.1, 15.2_

- [x] 6. Checkpoint — Tüm bölümlerin doğru çalıştığını kontrol et
  - Tüm HTML bölümlerinin doğru sırada olduğunu doğrula
  - Form gönderiminin çalıştığını kontrol et
  - Accordion davranışını test et
  - Sticky CTA'nın mobilde doğru çalıştığını kontrol et
  - Sorular varsa kullanıcıya sor

- [x] 7. sitemap.xml güncellemesi ve son entegrasyon
  - [x] 7.1 sitemap.xml'e Kampüs Partner URL'sini ekle
    - `<url><loc>https://www.gelkaenerji.com.tr/kampus-partner.html</loc></url>` satırını ekle
    - _Gereksinimler: 1.6_

  - [x] 7.2 İçerik tonu ve kısıtlama kontrolü
    - Sayfada "kolay para", "zahmetsiz kazanç", "hızlı para", "Türkiye'de ilk" gibi yasaklı ifadelerin bulunmadığını doğrula
    - Tüm burs tutarlarının "örnek niteliğindedir" uyarısıyla sunulduğunu kontrol et
    - Agresif satış dili veya abartılı gelir vaatleri olmadığını doğrula
    - Kariyer bölümünde ölçülü ifadeler ("fırsat sunar", "deneyim kazanır") kullanıldığını kontrol et
    - _Gereksinimler: 2.1, 2.2, 2.3, 2.4, 20.1, 20.2, 20.3, 20.4_

  - [x] 7.3 Erişilebilirlik kontrolü
    - Tüm `<img>` elemanlarının `alt` attribute'a sahip olduğunu doğrula
    - Metin/arka plan kontrast oranının mevcut site standardına uygun olduğunu kontrol et
    - Başlık hiyerarşisini doğrula: tek H1, bölüm başlıkları H2
    - _Gereksinimler: 19.3, 19.4, 16.4_

- [x] 8. Test altyapısını kur ve property/unit testleri yaz
  - [x] 8.1 Test ortamını yapılandır
    - Vitest ve fast-check bağımlılıklarını kur (`vitest`, `fast-check`, `jsdom`)
    - `vitest.config.js` dosyasını jsdom ortamıyla oluştur
    - `tests/` dizinini oluştur
    - _Gereksinimler: Tasarım — Test Stratejisi_

  - [ ]* 8.2 Unit testleri yaz (`tests/kampus-partner.unit.test.js`)
    - H1 metninin "Elektrik Faturası Getir, Aylık Burs Kazan" olduğunu test et (Gereksinim 3.1)
    - Trust band'de 4 öğe bulunduğunu test et (Gereksinim 4.2)
    - Burs tablosunda 3 satır ve doğru değerler olduğunu test et (Gereksinim 7.1)
    - SSS bölümünde 5 soru bulunduğunu test et (Gereksinim 11.2)
    - Form action'ın Formspree endpoint'ine işaret ettiğini test et (Gereksinim 13.3)
    - KVKK notu ve kvkk.html bağlantısının varlığını test et (Gereksinim 13.4)
    - GA4 ve Google Ads script tag'lerinin varlığını test et (Gereksinim 17.1, 17.2)
    - OG meta tag'lerinin varlığını test et (Gereksinim 16.3)
    - Title tag içeriğini test et (Gereksinim 16.1)
    - Bölüm sıralamasının DOM'da doğru olduğunu test et (Gereksinim 9.1, 12.1)
    - _Gereksinimler: 3.1, 4.2, 7.1, 11.2, 13.3, 13.4, 16.1, 16.3, 17.1, 17.2, 9.1, 12.1_

  - [ ]* 8.3 Property test: Yasaklı İfade Kontrolü
    - **Property 1: Yasaklı İfade Kontrolü**
    - Sayfadaki tüm metin düğümlerini tarayarak yasaklı ifade listesine karşı kontrol et
    - **Validates: Gereksinimler 2.4, 5.3, 20.2, 20.3**

  - [ ]* 8.4 Property test: Burs Tutarı Format Kuralı
    - **Property 2: Burs Tutarı Format Kuralı**
    - Burs tablosunun ikinci sütunundaki tüm hücrelerin "TL'ye kadar" ile bittiğini doğrula
    - **Validates: Gereksinim 7.2**

  - [ ]* 8.5 Property test: Accordion Tek-Açık Davranışı
    - **Property 3: Accordion Tek-Açık Davranışı**
    - Rastgele FAQ öğesi tıklandığında yalnızca o öğenin açık, diğerlerinin kapalı olduğunu doğrula
    - **Validates: Gereksinim 11.3**

  - [ ]* 8.6 Property test: SSS Cevaplarında Garanti Yasağı
    - **Property 4: SSS Cevaplarında Garanti Yasağı**
    - Tüm SSS cevap metinlerinin "garanti", "kesin olarak", "mutlaka" ifadelerini içermediğini doğrula
    - **Validates: Gereksinim 11.5**

  - [ ]* 8.7 Property test: Form Alanı Erişilebilirlik Kuralı
    - **Property 5: Form Alanı Erişilebilirlik Kuralı**
    - Tüm input/select elemanlarının label ile eşleştirildiğini ve zorunlu alanların required attribute'a sahip olduğunu doğrula
    - **Validates: Gereksinimler 13.5, 19.1**

  - [ ]* 8.8 Property test: Form Başarılı Gönderim Sonrası Temizleme
    - **Property 6: Form Başarılı Gönderim Sonrası Temizleme**
    - Rastgele form değerleri ile doldurulmuş formun başarılı gönderim sonrası tüm alanlarının boş olduğunu doğrula
    - **Validates: Gereksinim 14.2**

  - [ ]* 8.9 Property test: Form Hata Sonrası Veri Koruma
    - **Property 7: Form Hata Sonrası Veri Koruma**
    - Rastgele form değerleri ile doldurulmuş formun hata sonrası tüm değerlerinin korunduğunu doğrula
    - **Validates: Gereksinim 14.4**

  - [ ]* 8.10 Property test: Sticky CTA Görünürlük Durumu
    - **Property 8: Sticky CTA Görünürlük Durumu**
    - Farklı scroll pozisyonlarında sticky CTA'nın doğru görünürlük durumunu doğrula
    - **Validates: Gereksinimler 15.1, 15.2**

  - [ ]* 8.11 Property test: Başlık Hiyerarşisi
    - **Property 9: Başlık Hiyerarşisi**
    - Sayfada tek H1 bulunduğunu ve tüm bölüm başlıklarının H2 olduğunu doğrula
    - **Validates: Gereksinim 16.4**

  - [ ]* 8.12 Property test: Accordion Klavye Erişilebilirliği
    - **Property 10: Accordion Klavye Erişilebilirliği**
    - Tüm accordion tetikleyicilerinin button olduğunu, aria-expanded ve aria-controls attribute'larına sahip olduğunu doğrula
    - **Validates: Gereksinim 19.2**

  - [ ]* 8.13 Property test: Görsel Alt Text Kuralı
    - **Property 11: Görsel Alt Text Kuralı**
    - Sayfadaki tüm img elemanlarının boş olmayan alt attribute'a sahip olduğunu doğrula
    - **Validates: Gereksinim 19.4**

  - [ ]* 8.14 Property test: Kariyer Kartı Yapısal Bütünlüğü
    - **Property 12: Kariyer Kartı Yapısal Bütünlüğü**
    - Tüm kariyer kartlarının en az bir ikon ve bir paragraf içerdiğini doğrula
    - **Validates: Gereksinim 9.4**

- [x] 9. Final checkpoint — Tüm testlerin geçtiğini doğrula
  - Tüm testlerin geçtiğini doğrula, sorular varsa kullanıcıya sor.

## Notlar

- `*` ile işaretli görevler isteğe bağlıdır ve hızlı MVP için atlanabilir
- Her görev ilgili gereksinimleri referans alır (izlenebilirlik)
- Checkpoint'ler artımlı doğrulama sağlar
- Property testler evrensel doğruluk özelliklerini doğrular
- Unit testler spesifik örnekleri ve edge case'leri doğrular
