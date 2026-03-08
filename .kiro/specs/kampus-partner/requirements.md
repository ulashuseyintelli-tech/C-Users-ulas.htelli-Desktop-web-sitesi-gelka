# Gereksinimler Dokümanı — Gelka Kampüs Partner

## Giriş

Gelka Kampüs Partner, üniversite öğrencilerinin çevrelerindeki ticari işletmelerin elektrik faturalarını Gelka Enerji'ye ileterek aylık burs kazanmalarını sağlayan bir yönlendirme/burs programıdır. Bu doküman, programa ait landing page'in (`kampus-partner.html`) mevcut gelkaenerji.com.tr kurumsal sitesine entegrasyonu için gereksinimleri tanımlar.

## Sözlük

- **Landing_Page**: `kampus-partner.html` dosyası; Gelka Kampüs Partner programını tanıtan ve başvuru toplayan tek sayfalık web sayfası
- **Başvuru_Formu**: Öğrencilerin programa katılmak için doldurduğu HTML formu; veriler e-posta/lead toplama sistemine güvenli biçimde iletilir
- **Burs_Tablosu**: Yönlendirilen işletmenin aylık elektrik faturası tutarına göre örnek burs miktarlarını gösteren tablo
- **Sticky_CTA**: Mobil cihazlarda ekranın altına sabitlenen, kullanıcıyı başvuru formuna yönlendiren buton
- **Hero_Section**: Sayfanın en üstündeki ana başlık, açıklama ve aksiyon butonu içeren bölüm
- **Trust_Band**: Hero bölümünün altında yer alan, EPDK lisansı ve KVKK uyumu gibi güven unsurlarını listeleyen şerit
- **SSS_Section**: Sıkça Sorulan Sorular bölümü; açılır-kapanır (accordion) yapıda sunulan soru-cevap listesi
- **Kariyer_Section**: Programın burs ötesindeki değerini (sektör deneyimi, network, iş dünyası teması) anlatan bölüm; 3 kartlık yapıda sunulur
- **Kampüs_Lideri_Section**: Programda daha aktif rol almak isteyen öğrencilere yönelik kampüs temsilciliği tanıtım bölümü
- **Site_Header**: Mevcut gelkaenerji.com.tr sitesinde tüm sayfalarda kullanılan üst menü ve logo alanı
- **Site_Footer**: Mevcut gelkaenerji.com.tr sitesinde tüm sayfalarda kullanılan alt bilgi alanı
- **Global_Float_Components**: Mevcut sitede tüm sayfalarda bulunan sabit konumlu bileşenler (WhatsApp butonu, cookie banner vb.)
- **Formspree**: Form verilerini e-posta olarak ileten üçüncü parti form servisi (teknik tasarım kararı)
- **GA4**: Google Analytics 4 izleme kodu (G-442PEKLLWZ)
- **Google_Ads**: Google Ads dönüşüm izleme kodu (AW-2838120596)

---

## Gereksinimler

### Gereksinim 1: Sayfa Yapısı ve Site Entegrasyonu

**Kullanıcı Hikayesi:** Bir ziyaretçi olarak, Kampüs Partner sayfasının mevcut Gelka Enerji sitesiyle tutarlı görünmesini istiyorum, böylece sayfanın güvenilir ve kurumsal bir kaynağa ait olduğunu anlayabileyim.

#### Kabul Kriterleri

1. THE Landing_Page SHALL mevcut sitedeki Site_Header bileşenini (üst banner, logo, navigasyon menüsü) içerecek şekilde oluşturulmalıdır
2. THE Landing_Page SHALL mevcut sitedeki Site_Footer bileşenini içerecek şekilde oluşturulmalıdır
3. THE Landing_Page SHALL `styles.css` dosyasındaki mevcut CSS değişkenlerini (--primary-color, --accent-color, --text-dark vb.) kullanmalıdır
4. THE Landing_Page SHALL Poppins fontu, Font Awesome ikonları ve mevcut kart stillerini kullanmalıdır
5. THE Landing_Page SHALL `kampus-partner.html` dosya adıyla site kök dizininde oluşturulmalıdır
6. WHEN Landing_Page yayınlandığında, THE sitemap.xml dosyası `https://www.gelkaenerji.com.tr/kampus-partner.html` URL'sini içerecek şekilde güncellenmelidir
7. THE Landing_Page SHOULD sayfa discoverability stratejisine göre Site_Header navigasyon menüsüne eklenmelidir (launch sonrası ayrıca değerlendirilebilir)
8. THE Landing_Page SHALL mevcut sitedeki Global_Float_Components (WhatsApp butonu, cookie banner) ile uyumlu çalışmalıdır; WhatsApp mesaj metni kampüs partner programına özel olarak ayarlanabilir


### Gereksinim 2: Programın Temel Değer Önerisi

**Kullanıcı Hikayesi:** Bir öğrenci olarak, bu programın yalnızca burs kazanma fırsatı değil, aynı zamanda kendi iletişim ağımı değerlendirmenin ve enerji sektörüyle tanışmanın yolu olduğunu anlamak istiyorum.

#### Kabul Kriterleri

1. THE Landing_Page SHALL öğrencinin kendi iletişim ağı üzerinden hak edilmiş gelir elde edebileceğini açık şekilde anlatmalıdır
2. THE Landing_Page SHALL programın enerji sektörüyle erken temas ve iş dünyası deneyimi sunduğunu açık şekilde belirtmelidir
3. THE Landing_Page SHALL bu değeri en az bir ana vurgu metni veya banner ile öne çıkarmalıdır
4. THE Landing_Page SHALL "kolay para", "zahmetsiz kazanç" veya benzeri çağrışımlar yapmamalıdır

### Gereksinim 3: Hero Bölümü

**Kullanıcı Hikayesi:** Bir üniversite öğrencisi olarak, sayfayı açtığımda programın ne olduğunu ve bana ne sunduğunu hemen anlamak istiyorum, böylece sayfada kalmaya devam edip etmeyeceğime karar verebileyim.

#### Kabul Kriterleri

1. THE Hero_Section SHALL "Elektrik Faturası Getir, Aylık Burs Kazan" başlığını H1 etiketi olarak göstermelidir
2. THE Hero_Section SHALL "Gelka Kampüs Partner Programı ile üniversite öğrencileri çevrelerindeki işletmelerin elektrik faturalarını Gelka Enerji'ye ileterek aylık burs kazanma fırsatı elde edebilir." alt başlığını göstermelidir
3. THE Hero_Section SHALL "İşletmeler için avantajlı elektrik teklifleri hazırlanır. İşletme Gelka Enerji ile sözleşme yaptığında, yönlendirmeyi yapan öğrenci için burs süreci başlar." açıklama metnini göstermelidir
4. THE Hero_Section SHALL "Kampüs Partner Ol" etiketli, Başvuru_Formu bölümüne kaydıran bir CTA butonu içermelidir
5. THE Hero_Section SHALL mevcut sitenin gradient stillerini (--gradient-hero veya --gradient-dark) arka plan olarak kullanmalıdır

### Gereksinim 4: Güven Şeridi

**Kullanıcı Hikayesi:** Bir ziyaretçi olarak, programın arkasındaki kurumsal güvenceyi hemen görmek istiyorum, böylece başvuru yapmadan önce güven duyabileyim.

#### Kabul Kriterleri

1. THE Trust_Band SHALL Hero_Section'ın hemen altında konumlandırılmalıdır
2. THE Trust_Band SHALL şu dört güven unsurunu ikon eşliğinde göstermelidir: "EPDK lisanslı yapı", "İşletmelere özel teklif analizi", "Şeffaf başvuru süreci", "KVKK uyumlu veri işleme"
3. THE Trust_Band SHALL her unsuru yatay düzende (masaüstü) ve dikey düzende (mobil) göstermelidir

### Gereksinim 5: Program Tanıtımı

**Kullanıcı Hikayesi:** Bir öğrenci olarak, programın nasıl bir model olduğunu detaylı şekilde anlamak istiyorum, böylece katılıp katılmayacağıma bilinçli karar verebileyim.

#### Kabul Kriterleri

1. THE Landing_Page SHALL "Program Nedir?" başlıklı bir bölüm içermelidir
2. THE Landing_Page SHALL bu bölümde "Üniversite öğrencilerine yönelik yenilikçi bir enerji bursu modeli." mesajını vurgulamalıdır
3. THE Landing_Page SHALL bu bölümde "Türkiye'de ilk" veya benzeri doğrulanamayan bir iddia içermemelidir

### Gereksinim 6: Nasıl Çalışır Adımları

**Kullanıcı Hikayesi:** Bir öğrenci olarak, programa katılım sürecini adım adım görmek istiyorum, böylece ne yapmam gerektiğini net olarak anlayabileyim.

#### Kabul Kriterleri

1. THE Landing_Page SHALL "Nasıl Çalışır?" başlıklı, dört adımlı bir süreç bölümü içermelidir
2. THE Landing_Page SHALL adımları şu sırayla göstermelidir: (1) İşletme bulun, (2) Faturayı iletin, (3) Teklif hazırlansın, (4) Burs kazanın
3. THE Landing_Page SHALL her adımı numaralı bir ikon veya görsel ile birlikte göstermelidir

### Gereksinim 7: Burs Modeli Tablosu

**Kullanıcı Hikayesi:** Bir öğrenci olarak, ne kadar burs kazanabileceğimi somut örneklerle görmek istiyorum, böylece programa katılma motivasyonum artsın.

#### Kabul Kriterleri

1. THE Burs_Tablosu SHALL şu örnek satırları içermelidir: aylık 500.000 TL elektrik faturası → 5.000 TL'ye kadar aylık burs, 1.000.000 TL → 10.000 TL'ye kadar, 3.000.000 TL → 30.000 TL'ye kadar
2. THE Burs_Tablosu SHALL tüm burs tutarlarını "X TL'ye kadar" formatında göstermelidir
3. THE Burs_Tablosu SHALL tablonun altında "Burs tutarları örnek niteliğindedir. İşletmenin tüketim profili, teklif yapısı ve sözleşme süresine göre değişiklik gösterebilir." uyarı metnini göstermelidir

### Gereksinim 8: Çoklu İşletme Yönlendirme Bilgisi

**Kullanıcı Hikayesi:** Bir öğrenci olarak, birden fazla işletme yönlendirerek burs potansiyelimi artırabileceğimi bilmek istiyorum, böylece programa daha aktif katılım sağlayabileyim.

#### Kabul Kriterleri

1. THE Landing_Page SHALL "Birden Fazla İşletme Yönlendirme" başlıklı bir bölüm içermelidir
2. THE Landing_Page SHALL bu bölümde "Yönlendirdiğiniz işletme sayısı arttıkça burs potansiyeliniz de artar." mesajını açıkça belirtmelidir

### Gereksinim 9: Kariyer ve Sektör Deneyimi Bölümü

**Kullanıcı Hikayesi:** Bir öğrenci olarak, bu programın sadece burs değil aynı zamanda kariyer ve sektör deneyimi sunduğunu görmek istiyorum, böylece programa katılımın uzun vadeli değerini anlayabileyim.

#### Kabul Kriterleri

1. THE Kariyer_Section SHALL Burs_Tablosu / Çoklu İşletme bölümü ile SSS_Section arasında konumlandırılmalıdır
2. THE Kariyer_Section SHALL "Sadece Burs Değil, Sektör Deneyimi" veya benzeri bir H2 başlık içermelidir
3. THE Kariyer_Section SHALL şu üç değer önerisini ayrı kartlar halinde sunmalıdır: (a) Kendi iletişim ağını değere dönüştürme, (b) Enerji sektörü ile erken tanışma, (c) Gerçek iş dünyası deneyimi kazanma
4. THE Kariyer_Section SHALL her kartta kısa bir açıklama paragrafı ve ilgili bir ikon içermelidir
5. THE Kariyer_Section SHALL "Kendi iletişim ağınızı değere dönüştürürken, enerji sektörünü yakından tanıyın." mesajını vurgulayan bir highlight banner içermelidir
6. THE Kariyer_Section SHALL agresif kariyer vaatleri yerine "fırsat sunar", "deneyim kazanır", "tanıma imkânı" gibi ölçülü ifadeler kullanmalıdır
7. THE Kariyer_Section SHALL programın yalnızca burs değil; network değeri, enerji sektörüyle tanışma ve iş dünyası deneyimi sunduğunu bütünsel olarak anlatmalıdır

### Gereksinim 10: Katılım Koşulları

**Kullanıcı Hikayesi:** Bir ziyaretçi olarak, programa kimlerin katılabileceğini görmek istiyorum, böylece uygun olup olmadığımı anlayabileyim.

#### Kabul Kriterleri

1. THE Landing_Page SHALL "Kimler Katılabilir?" başlıklı bir bölüm içermelidir
2. THE Landing_Page SHALL bu bölümde şu hedef kitleleri listelemelidir: üniversite öğrencileri, yeni mezunlar, girişimci ruhlu gençler

### Gereksinim 11: Sıkça Sorulan Sorular

**Kullanıcı Hikayesi:** Bir öğrenci olarak, program hakkındaki yaygın soruların cevaplarını kolayca bulmak istiyorum, böylece başvuru öncesi tereddütlerimi giderebileyim.

#### Kabul Kriterleri

1. THE SSS_Section SHALL açılır-kapanır (accordion) yapıda sunulmalıdır
2. THE SSS_Section SHALL şu beş soruyu ve cevaplarını içermelidir: "Burs ne zaman başlar?", "Birden fazla işletme yönlendirebilir miyim?", "İşletme sözleşmeyi iptal ederse ne olur?", "Ben sadece faturayı mı iletiyorum?", "Başvuru ücretsiz mi?"
3. WHEN bir kullanıcı bir soruya tıkladığında, THE SSS_Section SHALL ilgili cevabı açmalı ve diğer açık cevapları kapatmalıdır
4. THE SSS_Section SHALL cevapları kısa, açık ve yanıltıcı olmayan bir dilde sunmalıdır
5. THE SSS_Section SHALL cevaplarda gelir garantisi veya kesin süre taahhüdü vermemelidir

### Gereksinim 12: Kampüs Lideri Bölümü

**Kullanıcı Hikayesi:** Bir öğrenci olarak, programda daha aktif bir rol üstlenme fırsatı olduğunu görmek istiyorum, böylece kampüs temsilcisi olma seçeneğini değerlendirebileyim.

#### Kabul Kriterleri

1. THE Kampüs_Lideri_Section SHALL SSS bölümünün altında ve Başvuru_Formu'nun üstünde konumlandırılmalıdır
2. THE Kampüs_Lideri_Section SHALL "Kampüs Lideri Ol" başlığı ve programın yaygınlaşmasına katkı sağlama fırsatını özetleyen 1-2 cümlelik açıklama içermelidir
3. THE Kampüs_Lideri_Section SHALL kampüs liderliğinin ek sorumluluk ve temsil niteliği taşıdığını vurgulamalıdır
4. THE Kampüs_Lideri_Section SHALL Başvuru_Formu'na yönlendiren bir CTA butonu veya anchor link içermelidir

### Gereksinim 13: Başvuru Formu

**Kullanıcı Hikayesi:** Bir öğrenci olarak, programa hızlı ve kolay şekilde başvurmak istiyorum, böylece zaman kaybetmeden sürece dahil olabileyim.

#### Kabul Kriterleri

1. THE Başvuru_Formu SHALL şu zorunlu alanları içermelidir: Ad Soyad (text), Üniversite (text), Bölüm (text), Telefon (tel), E-posta (email)
2. THE Başvuru_Formu SHALL isteğe bağlı "Yönlendirmek istediğiniz işletme sayısı" alanını dropdown olarak sunmalıdır (seçenekler: 1-2, 3-5, 5+)
3. THE Başvuru_Formu SHALL form verilerini e-posta veya lead toplama sistemine güvenli biçimde iletmelidir (teknik uygulama detayı tasarım aşamasında belirlenir)
4. THE Başvuru_Formu SHALL formun altında "Kişisel verileriniz 6698 sayılı KVKK kapsamında işlenmektedir." bilgi notu ve kvkk.html sayfasına bağlantı içermelidir
5. IF bir zorunlu alan boş bırakılırsa, THEN THE Başvuru_Formu SHALL ilgili alanı vurgulayarak kullanıcıyı uyarmalıdır
6. IF e-posta alanı geçersiz bir format içeriyorsa, THEN THE Başvuru_Formu SHALL geçerli bir e-posta adresi girilmesini istemelidir

### Gereksinim 14: Form Başarı ve Hata Durumları

**Kullanıcı Hikayesi:** Bir öğrenci olarak, başvurumu gönderdikten sonra ne olduğunu net olarak görmek istiyorum, böylece başvurumun alınıp alınmadığından emin olabileyim.

#### Kabul Kriterleri

1. WHEN form başarıyla gönderildiğinde, THE Landing_Page SHALL kullanıcıya "Başvurunuz alınmıştır. Ekibimiz başvurunuzu inceleyerek sizinle iletişime geçecektir." veya benzeri bir onay mesajı göstermelidir
2. WHEN form başarıyla gönderildiğinde, THE Başvuru_Formu SHALL form alanlarını temizlemelidir
3. IF form gönderimi teknik bir hata nedeniyle başarısız olursa, THEN THE Landing_Page SHALL kullanıcıya anlaşılır bir hata mesajı göstermelidir
4. IF form gönderimi başarısız olursa, THEN THE Başvuru_Formu SHALL kullanıcının girdiği verileri koruyarak yeniden deneme imkânı sağlamalıdır

### Gereksinim 15: Mobil Sticky CTA Butonu

**Kullanıcı Hikayesi:** Bir mobil kullanıcı olarak, sayfada gezinirken başvuru formuna her an kolayca ulaşmak istiyorum, böylece karar verdiğim anda hemen başvurabileyim.

#### Kabul Kriterleri

1. WHILE kullanıcı mobil cihazda sayfayı ilk ekranın ötesine kaydırmışsa, THE Sticky_CTA SHALL ekranın alt kısmında sabit olarak görünmelidir
2. WHILE Başvuru_Formu bölümü ekranda görünür durumdaysa, THE Sticky_CTA SHALL gizlenmelidir
3. THE Sticky_CTA SHALL "Kampüs Partner Ol" etiketli olmalı ve tıklandığında Başvuru_Formu bölümüne kaydırmalıdır
4. THE Sticky_CTA SHALL yalnızca mobil görünümde (768px ve altı ekran genişliği) gösterilmelidir

### Gereksinim 16: SEO ve Meta Etiketleri

**Kullanıcı Hikayesi:** Bir pazarlama yöneticisi olarak, sayfanın arama motorlarında doğru şekilde indekslenmesini istiyorum, böylece hedef kitleye organik arama ile ulaşabileyim.

#### Kabul Kriterleri

1. THE Landing_Page SHALL "Kampüs Partner - Öğrenci Burs Programı | Gelka Enerji" başlığını title etiketinde içermelidir
2. THE Landing_Page SHALL meta description'da programın öğrencilere yönelik burs/yönlendirme modelini doğal Türkçe ile açıklamalı ve "kampüs partner", "öğrenci burs programı", "elektrik faturası yönlendirme" gibi ilgili arama niyetlerini kapsamalıdır
3. THE Landing_Page SHALL Open Graph (og:title, og:description, og:image, og:url) etiketlerini içermelidir
4. THE Landing_Page SHALL H1 ve H2 etiketlerini doğru hiyerarşi ile kullanmalıdır (tek bir H1, bölüm başlıkları H2)

### Gereksinim 17: Analitik ve Olay İzleme

**Kullanıcı Hikayesi:** Bir pazarlama yöneticisi olarak, sayfa trafiğini ve dönüşüm aksiyonlarını izlemek istiyorum, böylece kampanya performansını ölçebileyim.

#### Kabul Kriterleri

1. THE Landing_Page SHALL GA4 izleme kodunu (G-442PEKLLWZ) head bölümünde içermelidir
2. THE Landing_Page SHALL Google Ads izleme kodunu (AW-2838120596) head bölümünde içermelidir
3. THE Landing_Page SHALL her iki izleme kodunu mevcut sitedeki diğer sayfalarla aynı yapıda (gtag.js) yüklemelidir
4. THE Landing_Page SHALL Hero CTA tıklaması için event izleme desteği sağlamalıdır
5. THE Landing_Page SHALL Sticky CTA tıklaması için event izleme desteği sağlamalıdır
6. THE Landing_Page SHALL form başarılı gönderim (submit success) olayını izlemelidir
7. THE Landing_Page SHALL WhatsApp butonu tıklaması için event izleme desteği sağlamalıdır

### Gereksinim 18: Responsive Tasarım

**Kullanıcı Hikayesi:** Bir kullanıcı olarak, sayfayı hem masaüstü hem mobil cihazda sorunsuz görüntülemek istiyorum, böylece hangi cihazı kullanırsam kullanayım iyi bir deneyim yaşayabileyim.

#### Kabul Kriterleri

1. THE Landing_Page SHALL 320px ile 1920px arası ekran genişliklerinde düzgün görüntülenmelidir
2. THE Landing_Page SHALL mobil görünümde (768px altı) tek sütun düzenine geçmelidir
3. THE Landing_Page SHALL Burs_Tablosu'nu mobil görünümde yatay kaydırılabilir veya kart düzeninde göstermelidir
4. THE Landing_Page SHALL tüm buton ve bağlantıların mobil cihazlarda minimum 44x44px dokunma alanına sahip olmasını sağlamalıdır

### Gereksinim 19: Erişilebilirlik

**Kullanıcı Hikayesi:** Bir kullanıcı olarak, sayfanın temel erişilebilirlik standartlarına uygun olmasını istiyorum, böylece farklı kullanım koşullarında da sayfayı kullanabileyim.

#### Kabul Kriterleri

1. THE Başvuru_Formu SHALL tüm input alanlarını ilgili label etiketleri ile ilişkilendirmelidir
2. THE SSS_Section SHALL accordion bileşenlerinin klavye ile kullanılabilir olmasını sağlamalıdır (Tab, Enter/Space tuşları)
3. THE Landing_Page SHALL metin ve arka plan arasında mevcut site standardına uygun kontrast oranını korumalıdır
4. THE Landing_Page SHALL anlam taşıyan görseller için açıklayıcı alt text içermelidir

### Gereksinim 20: İçerik Tonu ve Kısıtlamalar

**Kullanıcı Hikayesi:** Bir marka yöneticisi olarak, sayfa içeriğinin güvenilir ve kurumsal bir tonda olmasını istiyorum, böylece marka itibarı korunabilsin.

#### Kabul Kriterleri

1. THE Landing_Page SHALL tüm içerikte güvenilir fırsat, şeffaflık ve sistem vurgusu yapan bir ton kullanmalıdır
2. THE Landing_Page SHALL agresif satış dili, abartılı gelir vaatleri veya "hızlı para" çağrışımı yapan ifadeler içermemelidir
3. THE Landing_Page SHALL "Türkiye'de ilk" veya benzeri doğrulanamayan iddialar içermemelidir
4. THE Landing_Page SHALL burs tutarlarını her zaman "örnek niteliğindedir" uyarısıyla birlikte sunmalıdır
