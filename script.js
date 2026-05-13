// Intro Screen Animation
const introScreen = document.getElementById('introScreen');
if (introScreen) {
    // Hide intro after animation completes - hızlandırıldı
    setTimeout(() => {
        introScreen.classList.add('hidden');
    }, 1800);
    
    // Remove from DOM after fade out
    setTimeout(() => {
        introScreen.style.display = 'none';
    }, 2500);
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        const target = document.querySelector(href);
        if (target) {
            // Save current scroll position to history
            history.pushState({ scrollPos: window.scrollY }, null, window.location.pathname);
            
            // Calculate offset for fixed header (banner + header = ~100px)
            const headerOffset = 130;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Handle back button - return to previous scroll position
window.addEventListener('popstate', function(e) {
    if (e.state && e.state.scrollPos !== undefined) {
        window.scrollTo({
            top: e.state.scrollPos,
            behavior: 'smooth'
        });
    } else {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
});

// Header scroll effect
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.15)';
    } else {
        header.style.background = '#ffffff';
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    }
});

// Mobile menu toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const nav = document.querySelector('.nav');

mobileMenuBtn.addEventListener('click', () => {
    nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
});

// Animate stats on scroll
const animateStats = () => {
    const stats = document.querySelectorAll('.stat-number');
    stats.forEach(stat => {
        const value = stat.textContent;
        if (value.includes('+')) {
            const num = parseInt(value);
            animateNumber(stat, num, '+');
        } else if (value.includes('%')) {
            const num = parseInt(value);
            animateNumber(stat, num, '%');
        }
    });
};

const animateNumber = (element, target, suffix) => {
    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + suffix;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + suffix;
        }
    }, 30);
};

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            if (entry.target.classList.contains('stats')) {
                animateStats();
            }
        }
    });
}, observerOptions);

document.querySelectorAll('.services, .about, .stats, .contact').forEach(section => {
    observer.observe(section);
});

// Form submission - Formspree handles the actual submission
// These are just for UX enhancements

// File Upload Functionality
const faturaUpload = document.getElementById('faturaUpload');
const fileUploadLabel = document.querySelector('.file-upload-label');
const filePreview = document.getElementById('filePreview');

if (faturaUpload && fileUploadLabel && filePreview) {
    // Click to upload
    faturaUpload.addEventListener('change', handleFileSelect);
    
    // Drag & Drop
    fileUploadLabel.addEventListener('dragover', (e) => {
        e.preventDefault();
        fileUploadLabel.classList.add('drag-over');
    });
    
    fileUploadLabel.addEventListener('dragleave', () => {
        fileUploadLabel.classList.remove('drag-over');
    });
    
    fileUploadLabel.addEventListener('drop', (e) => {
        e.preventDefault();
        fileUploadLabel.classList.remove('drag-over');
        faturaUpload.files = e.dataTransfer.files;
        handleFileSelect();
    });
    
    function handleFileSelect() {
        filePreview.innerHTML = '';
        const files = faturaUpload.files;
        
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const fileSize = (file.size / 1024 / 1024).toFixed(2);
            
            const previewItem = document.createElement('div');
            previewItem.className = 'file-preview-item';
            previewItem.innerHTML = `
                <span><i class="fas fa-file-alt"></i> ${file.name} (${fileSize} MB)</span>
            `;
            filePreview.appendChild(previewItem);
        }
    }
}

// FAQ Accordion
const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
        // Close other items
        faqItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
            }
        });
        // Toggle current item
        item.classList.toggle('active');
    });
});

// Open first FAQ item by default
if (faqItems.length > 0) {
    faqItems[0].classList.add('active');
}


// Sector Modal Data - SEO optimized content
const sectorData = {
    otel: {
        icon: 'fas fa-hotel',
        title: 'Neden Oteller ve Turizm Tesisleri Elektriği GELKA Enerji\'den Almalı?',
        subtitle: 'Elektrik tüketimi sabit değildir, fiyat da sabit kalmak zorunda değildir',
        intro: 'Otellerde elektrik tüketimi zamanla değişir. Sezon açılır, doluluk artar, klima yükü değişir, yeni ekipman devreye girer. GELKA Enerji, elektrik tedarikini tek seferlik bir işlem olarak görmez. Sözleşme öncesi sezonluk tüketim analizi yapar, sözleşme sürecinde tüketim davranışını mevcut sayaç ve fatura verileri üzerinden izler. Gerekli görüldüğünde fiyatlama yeniden değerlendirilir.',
        benefits: [
            'Sözleşme öncesi sezonluk tüketim verisi analizi',
            'Sözleşme sürecinde tüketim davranışının izlenmesi',
            'Yaz, ara sezon ve kış dönemlerinin ayrı değerlendirilmesi',
            'Olağandışı tüketim artışlarının tespiti',
            'Reaktif / endüktif değerlerin fatura verisi üzerinden değerlendirilmesi',
            'Tüketim değişimine bağlı fiyat revizyonu imkanı'
        ],
        why: 'GELKA Enerji elektriğe müdahale etmez, tesisata girmez. Ama tüketimi körlemesine izlemez. Tüketim davranışı değişirse, fiyatın da değişebileceği baştan bilinir. Elektrik, tahmine değil veriye göre fiyatlanır. GELKA Enerji elektriği yönetmez, ama tüketimi asla görmezden gelmez.'
    },
    akaryakit: {
        icon: 'fas fa-gas-pump',
        title: 'Neden Akaryakıt İstasyonları Elektriği GELKA Enerji\'den Almalı?',
        subtitle: 'Elektrik tüketimi sabit değildir, fiyat da sabit kalmak zorunda değildir',
        intro: 'Akaryakıt istasyonlarında elektrik tüketimi zamanla değişir. Yeni market açılır, şarj ünitesi eklenir, yük artar. GELKA Enerji, elektrik tedarikini tek seferlik bir işlem olarak görmez. Sözleşme öncesi 7/24 tüketim analizi yapar, sözleşme sürecinde tüketim davranışını mevcut sayaç ve fatura verileri üzerinden izler. Gerekli görüldüğünde fiyatlama yeniden değerlendirilir.',
        benefits: [
            'Sözleşme öncesi saatlik ve günlük tüketim verisi analizi',
            'Sözleşme sürecinde tüketim davranışının izlenmesi',
            'Gece-gündüz tüketim farklarının değerlendirilmesi',
            'Olağandışı tüketim artışlarının tespiti',
            'Reaktif / endüktif değerlerin fatura verisi üzerinden değerlendirilmesi',
            'Tüketim değişimine bağlı fiyat revizyonu imkanı'
        ],
        why: 'GELKA Enerji elektriğe müdahale etmez, tesisata girmez. Ama tüketimi körlemesine izlemez. Tüketim davranışı değişirse, fiyatın da değişebileceği baştan bilinir. Elektrik, tahmine değil veriye göre fiyatlanır. GELKA Enerji elektriği yönetmez, ama tüketimi asla görmezden gelmez.'
    },
    restoran: {
        icon: 'fas fa-utensils',
        title: 'Restoran ve Cafeler İçin Doğru Elektrik Fiyatı, Doğru Analizle Başlar',
        subtitle: 'Doğru elektrik fiyatı, sözleşme öncesi doğru analizle belirlenir',
        intro: 'Restoran ve cafeler için elektrik gideri, rastgele fiyat seçilerek yönetilemez. Tüketim gün içinde değişir, haftaya göre oynar, yoğunlukla şekillenir. GELKA Enerji, sözleşme öncesi mevcut sayaç ve tüketim verilerini inceler, saatlik tüketim davranışını analiz eder, gün içi yoğun saatleri tespit eder. Amaç: İşletmenin gerçek tüketim profilini görmek ve fazla ya da yanlış fiyatlanmış bir sözleşme sunmamak.',
        benefits: [
            'Sözleşme öncesi saatlik tüketim verisi incelemesi',
            'Gün içi yoğun saatlerin fiyatlamaya yansıtılması',
            'Reaktif / endüktif değerlerin sözleşme öncesi değerlendirilmesi',
            'Aylık ve yıllık kWh davranışının okunması',
            'Mevsimsel dalgalanmaların değerlendirilmesi',
            'İşletme profiline uygun doğru fiyat teklifi'
        ],
        why: 'GELKA Enerji süreç içi raporlama veya aylık takip hizmeti sunmaz. Yapılan şey nettir: Sözleşme öncesi doğru tüketimi görmek, doğru fiyatı baştan vermek. Restoran ve cafeler GELKA Enerji ile sözleşmeye kör girmez, tahmine dayalı fiyat almaz. Elektrik, sonradan "keşke" dedirten bir gider olmaz.'
    },
    market: {
        icon: 'fas fa-shopping-cart',
        title: 'Marketler ve Perakende Zincirleri İçin Elektrik, Veriye Göre Okunur',
        subtitle: 'Elektrik tüketimi sabit değildir, fiyat da sabit kalmak zorunda değildir',
        intro: 'Marketler ve perakende zincirlerinde elektrik tüketimi sabit değildir. Soğutma sistemleri, aydınlatma, kasa altyapıları ve yoğun saatler tüketimi sürekli değiştirir. Bu yüzden elektrik fiyatı da tek seferlik bir varsayım olamaz. GELKA Enerji, marketler ve perakende zincirleri için elektrik tedarikini veriye dayalı ele alır. Elektriğe müdahale etmez, tesisata girmez; ama tüketim davranışını görmezden de gelmez.',
        benefits: [
            'Sözleşme öncesi mevcut sayaç ve fatura verilerinin incelenmesi',
            'Saatlik tüketim dağılımının değerlendirilmesi',
            'Gün içi ve hafta içi–hafta sonu farklarının okunması',
            'Yeni soğutucu, şube büyümesi gibi değişimlerin izlenmesi',
            'Demant aşımı ve güç taşması risklerinin veriden okunması',
            'Zincir marketlerde şubeler arası tüketim farklarının karşılaştırılması',
            'Tüketim değişimine bağlı fiyat revizyonu imkanı'
        ],
        why: 'GELKA Enerji marketlerde elektriği yönetmez, ama tüketim değiştiğinde fiyatın da değişebileceğini gizlemez. Tüketim davranışı değişirse, fiyatın da değişebileceği baştan bilinir. Elektrik, sonradan açıklanan bir sürpriz değil; başından bilinen bir denkleme dönüşür. Elektrik sabit bir gider değil, değişken bir veri olarak görülür.'
    },
    avm: {
        icon: 'fas fa-store-alt',
        title: 'Neden AVM\'ler Elektriği GELKA Enerji\'den Almalı?',
        subtitle: 'Elektrik tüketimi sabit değildir, fiyat da sabit kalmak zorunda değildir',
        intro: 'Alışveriş merkezlerinde elektrik tüketimi zamanla değişir. Yeni mağaza açılır, klima kapasitesi artar, sezonluk yük değişir. GELKA Enerji, elektrik tedarikini tek seferlik bir işlem olarak görmez. Sözleşme öncesi detaylı tüketim analizi yapar, sözleşme sürecinde tüketim davranışını mevcut sayaç ve fatura verileri üzerinden izler. Gerekli görüldüğünde fiyatlama yeniden değerlendirilir.',
        benefits: [
            'Sözleşme öncesi saatlik ve aylık tüketim verisi analizi',
            'Sözleşme sürecinde tüketim davranışının izlenmesi',
            'Yoğun dönem ve sezonluk dalgalanmaların değerlendirilmesi',
            'Olağandışı tüketim artışlarının tespiti',
            'Reaktif / endüktif değerlerin fatura verisi üzerinden değerlendirilmesi',
            'Tüketim değişimine bağlı fiyat revizyonu imkanı'
        ],
        why: 'GELKA Enerji elektriğe müdahale etmez, tesisata girmez. Ama tüketimi körlemesine izlemez. Tüketim davranışı değişirse, fiyatın da değişebileceği baştan bilinir. Elektrik, tahmine değil veriye göre fiyatlanır. GELKA Enerji elektriği yönetmez, ama tüketimi asla görmezden gelmez.'
    },
    plaza: {
        icon: 'fas fa-city',
        title: 'Neden Plazalar ve Ofis Binaları Elektriği GELKA Enerji\'den Almalı?',
        subtitle: 'Elektrik tüketimi sabit değildir, fiyat da sabit kalmak zorunda değildir',
        intro: 'Plazalar ve ofis binalarında elektrik tüketimi zamanla değişir. Yeni kiracı girer, klima yükü artar, sunucu odası genişler. GELKA Enerji, elektrik tedarikini tek seferlik bir işlem olarak görmez. Sözleşme öncesi detaylı tüketim analizi yapar, sözleşme sürecinde tüketim davranışını mevcut sayaç ve fatura verileri üzerinden izler. Gerekli görüldüğünde fiyatlama yeniden değerlendirilir.',
        benefits: [
            'Sözleşme öncesi saatlik ve aylık tüketim verisi analizi',
            'Sözleşme sürecinde tüketim davranışının izlenmesi',
            'Klima ve ortak alan yüklerinin değerlendirilmesi',
            'Olağandışı tüketim artışlarının tespiti',
            'Reaktif / endüktif değerlerin fatura verisi üzerinden değerlendirilmesi',
            'Tüketim değişimine bağlı fiyat revizyonu imkanı'
        ],
        why: 'GELKA Enerji elektriğe müdahale etmez, tesisata girmez. Ama tüketimi körlemesine izlemez. Tüketim davranışı değişirse, fiyatın da değişebileceği baştan bilinir. Elektrik, tahmine değil veriye göre fiyatlanır. GELKA Enerji elektriği yönetmez, ama tüketimi asla görmezden gelmez.'
    },
    okul: {
        icon: 'fas fa-graduation-cap',
        title: 'Neden Okullar ve Eğitim Kurumları Elektriği GELKA Enerji\'den Almalı?',
        subtitle: 'Elektrik tüketimi sabit değildir, fiyat da sabit kalmak zorunda değildir',
        intro: 'Eğitim kurumlarında elektrik tüketimi zamanla değişir. Yeni bina açılır, laboratuvar eklenir, klima kapasitesi artar. GELKA Enerji, elektrik tedarikini tek seferlik bir işlem olarak görmez. Sözleşme öncesi dönemsel tüketim analizi yapar, sözleşme sürecinde tüketim davranışını mevcut sayaç ve fatura verileri üzerinden izler. Gerekli görüldüğünde fiyatlama yeniden değerlendirilir.',
        benefits: [
            'Sözleşme öncesi eğitim dönemi ve tatil ayları tüketim analizi',
            'Sözleşme sürecinde tüketim davranışının izlenmesi',
            'Dönemsel dalgalanmaların değerlendirilmesi',
            'Olağandışı tüketim artışlarının tespiti',
            'Reaktif / endüktif değerlerin fatura verisi üzerinden değerlendirilmesi',
            'Tüketim değişimine bağlı fiyat revizyonu imkanı'
        ],
        why: 'GELKA Enerji elektriğe müdahale etmez, tesisata girmez. Ama tüketimi körlemesine izlemez. Tüketim davranışı değişirse, fiyatın da değişebileceği baştan bilinir. Elektrik, tahmine değil veriye göre fiyatlanır. GELKA Enerji elektriği yönetmez, ama tüketimi asla görmezden gelmez.'
    },
    hastane: {
        icon: 'fas fa-hospital',
        title: 'Neden Hastaneler ve Sağlık Kuruluşları Elektriği GELKA Enerji\'den Almalı?',
        subtitle: 'Elektrik tüketimi sabit değildir, fiyat da sabit kalmak zorunda değildir',
        intro: 'Sağlık kuruluşlarında elektrik tüketimi zamanla değişir. Yeni cihaz alınır, bölüm açılır, kapasite artar. GELKA Enerji, elektrik tedarikini tek seferlik bir işlem olarak görmez. Sözleşme öncesi detaylı tüketim analizi yapar, sözleşme sürecinde tüketim davranışını mevcut sayaç ve fatura verileri üzerinden izler. Gerekli görüldüğünde fiyatlama yeniden değerlendirilir.',
        benefits: [
            'Sözleşme öncesi 7/24 tüketim verisi analizi',
            'Sözleşme sürecinde tüketim davranışının izlenmesi',
            'Kritik cihaz yüklerinin değerlendirilmesi',
            'Olağandışı tüketim artışlarının tespiti',
            'Reaktif / endüktif değerlerin fatura verisi üzerinden değerlendirilmesi',
            'Tüketim değişimine bağlı fiyat revizyonu imkanı'
        ],
        why: 'GELKA Enerji elektriğe müdahale etmez, tesisata girmez. Ama tüketimi körlemesine izlemez. Tüketim davranışı değişirse, fiyatın da değişebileceği baştan bilinir. Elektrik, tahmine değil veriye göre fiyatlanır. GELKA Enerji elektriği yönetmez, ama tüketimi asla görmezden gelmez.'
    },
    tarim: {
        icon: 'fas fa-tractor',
        title: 'Neden Tarımsal Sulama Tesisleri Elektriği GELKA Enerji\'den Almalı?',
        subtitle: 'Elektrik tüketimi sabit değildir, fiyat da sabit kalmak zorunda değildir',
        intro: 'Tarımsal sulama tesislerinde elektrik tüketimi zamanla değişir. Sulama alanı genişler, pompa kapasitesi artar, sera eklenir. GELKA Enerji, elektrik tedarikini tek seferlik bir işlem olarak görmez. Sözleşme öncesi sezonluk tüketim analizi yapar, sözleşme sürecinde tüketim davranışını mevcut sayaç ve fatura verileri üzerinden izler. Gerekli görüldüğünde fiyatlama yeniden değerlendirilir.',
        benefits: [
            'Sözleşme öncesi sulama sezonu tüketim verisi analizi',
            'Sözleşme sürecinde tüketim davranışının izlenmesi',
            'Sezonluk dalgalanmaların değerlendirilmesi',
            'Olağandışı tüketim artışlarının tespiti',
            'Reaktif / endüktif değerlerin fatura verisi üzerinden değerlendirilmesi',
            'Tüketim değişimine bağlı fiyat revizyonu imkanı'
        ],
        why: 'GELKA Enerji elektriğe müdahale etmez, tesisata girmez. Ama tüketimi körlemesine izlemez. Tüketim davranışı değişirse, fiyatın da değişebileceği baştan bilinir. Elektrik, tahmine değil veriye göre fiyatlanır. GELKA Enerji elektriği yönetmez, ama tüketimi asla görmezden gelmez.'
    },
    fabrika: {
        icon: 'fas fa-industry',
        title: 'Neden Sanayi Şirketleri Elektriği GELKA Enerji\'den Almalı?',
        subtitle: 'Elektrik tüketimi sabit değildir, fiyat da sabit kalmak zorunda değildir',
        intro: 'Sanayi işletmelerinde elektrik tüketimi zamanla değişir. Yeni makine girer, üretim artar, demant aşımı oluşur, trafo kayıpları devreye girer. GELKA Enerji, elektrik tedarikini tek seferlik bir işlem olarak görmez. Sözleşme öncesi detaylı tüketim analizi yapar, sözleşme sürecinde tüketim davranışını mevcut sayaç ve fatura verileri üzerinden izler. Gerekli görüldüğünde fiyatlama yeniden değerlendirilir.',
        benefits: [
            'Sözleşme öncesi saatlik ve aylık tüketim verisi analizi',
            'Sözleşme sürecinde tüketim davranışının izlenmesi',
            'Demant aşımı ve güç taşması risklerinin veriden okunması',
            'Olağandışı tüketim artışlarının tespiti',
            'Reaktif / endüktif değerlerin fatura verisi üzerinden değerlendirilmesi',
            'Tüketim değişimine bağlı fiyat revizyonu imkanı'
        ],
        why: 'GELKA Enerji elektriğe müdahale etmez, tesisata girmez. Ama tüketimi körlemesine izlemez. Tüketim davranışı değişirse, fiyatın da değişebileceği baştan bilinir. Elektrik, tahmine değil veriye göre fiyatlanır. GELKA Enerji elektriği yönetmez, ama tüketimi asla görmezden gelmez.'
    },
    ticari: {
        icon: 'fas fa-building',
        title: 'Neden Ticari Alanlar ve İş Merkezleri Elektriği GELKA Enerji\'den Almalı?',
        subtitle: 'Elektrik tüketimi sabit değildir, fiyat da sabit kalmak zorunda değildir',
        intro: 'Ticari alanlarda elektrik tüketimi zamanla değişir. Yeni kiracı girer, klima yükü artar, vitrin aydınlatması değişir. GELKA Enerji, elektrik tedarikini tek seferlik bir işlem olarak görmez. Sözleşme öncesi detaylı tüketim analizi yapar, sözleşme sürecinde tüketim davranışını mevcut sayaç ve fatura verileri üzerinden izler. Gerekli görüldüğünde fiyatlama yeniden değerlendirilir.',
        benefits: [
            'Sözleşme öncesi saatlik ve aylık tüketim verisi analizi',
            'Sözleşme sürecinde tüketim davranışının izlenmesi',
            'Sezonluk ve dönemsel dalgalanmaların değerlendirilmesi',
            'Olağandışı tüketim artışlarının tespiti',
            'Reaktif / endüktif değerlerin fatura verisi üzerinden değerlendirilmesi',
            'Tüketim değişimine bağlı fiyat revizyonu imkanı'
        ],
        why: 'GELKA Enerji elektriğe müdahale etmez, tesisata girmez. Ama tüketimi körlemesine izlemez. Tüketim davranışı değişirse, fiyatın da değişebileceği baştan bilinir. Elektrik, tahmine değil veriye göre fiyatlanır. GELKA Enerji elektriği yönetmez, ama tüketimi asla görmezden gelmez.'
    }
};

// Open Sector Modal
function openSectorModal(sectorKey) {
    const data = sectorData[sectorKey];
    if (!data) return;
    
    const modal = document.getElementById('sectorModal');
    const modalBody = document.getElementById('sectorModalBody');
    
    let benefitsHTML = data.benefits.map(b => `
        <div class="benefit-item">
            <i class="fas fa-check-circle"></i>
            <span>${b}</span>
        </div>
    `).join('');
    
    modalBody.innerHTML = `
        <div class="sector-modal-header">
            <i class="${data.icon} sector-icon"></i>
            <h2>${data.title}</h2>
            <p>${data.subtitle}</p>
        </div>
        <div class="sector-modal-body">
            <p class="sector-intro">${data.intro}</p>
            
            <div class="sector-benefits">
                <h3><i class="fas fa-star"></i> GELKA Enerji Avantajları</h3>
                <div class="benefits-grid">
                    ${benefitsHTML}
                </div>
            </div>
            
            <div class="sector-why">
                <h3>Neden GELKA Enerji?</h3>
                <p>${data.why}</p>
            </div>
            
            <div class="sector-cta">
                <p>İşletmeniz için özel fiyat teklifi almak ister misiniz?</p>
                <a href="#iletisim" class="btn btn-primary" onclick="closeSectorModal()">
                    <i class="fas fa-file-alt"></i> Ücretsiz Teklif Al
                </a>
            </div>
        </div>
    `;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close Sector Modal
function closeSectorModal() {
    const modal = document.getElementById('sectorModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close modal on outside click
document.addEventListener('click', function(e) {
    const modal = document.getElementById('sectorModal');
    if (e.target === modal) {
        closeSectorModal();
    }
});

// Close modal on ESC key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeSectorModal();
    }
});


// Scroll to section and then open modal
function scrollAndOpenModal(sectorKey) {
    const target = document.getElementById('kimler-icin');
    if (target) {
        const headerOffset = 150;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
        
        // Open modal after scroll completes
        setTimeout(() => {
            openSectorModal(sectorKey);
        }, 600);
    }
}


// Cookie Banner Functions
function checkCookieConsent() {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
        setTimeout(() => {
            const banner = document.getElementById('cookieBanner');
            if (banner) {
                banner.classList.add('show');
            }
        }, 2000);
    }
}

function acceptCookies() {
    localStorage.setItem('cookieConsent', 'accepted');
    const banner = document.getElementById('cookieBanner');
    if (banner) {
        banner.classList.remove('show');
    }
}

function rejectCookies() {
    localStorage.setItem('cookieConsent', 'rejected');
    const banner = document.getElementById('cookieBanner');
    if (banner) {
        banner.classList.remove('show');
    }
}

// Check cookie consent on page load
document.addEventListener('DOMContentLoaded', checkCookieConsent);


// ============================================
// DYNAMIC TRUST NUMBERS (kademeli otomatik artış)
// ============================================
// Başlangıç tarihi: 14 Mayıs 2026
// Her gün otomatik artar, manuel güncelleme gerekmez
// Site açıldığında bugünün değeri hesaplanıp basılır
(function(){
    var START_DATE = new Date('2026-05-14T00:00:00');
    var now = new Date();
    var daysPassed = Math.floor((now - START_DATE) / (1000 * 60 * 60 * 24));
    if (daysPassed < 0) daysPassed = 0;

    // Fatura analizi: 300 başlangıç, +3/gün, 1000 cap
    var analizCount = Math.min(300 + (daysPassed * 3), 1000);

    // Yönetilen portföy: 10M ₺ başlangıç, +0.05M/gün, cap yok
    var portfoyM = 10 + (daysPassed * 0.05);
    var portfoyText;
    if (portfoyM >= 1000) {
        portfoyText = (portfoyM / 1000).toFixed(1) + 'B';
    } else {
        portfoyText = Math.floor(portfoyM) + 'M';
    }

    // DOM'a yerleştir (data-counter="analiz" gibi attribute kullan)
    document.querySelectorAll('[data-counter="analiz"]').forEach(function(el){
        el.textContent = analizCount + '+';
    });
    document.querySelectorAll('[data-counter="portfoy"]').forEach(function(el){
        el.textContent = '₺' + portfoyText + '+';
    });
    document.querySelectorAll('[data-counter="tasarruf"]').forEach(function(el){
        el.textContent = '%4-10';
    });
})();


// ============================================
// DÖNÜŞÜM İZLEME (Conversion Tracking)
// ============================================

// Genel dönüşüm izleme fonksiyonu
// Google Ads dönüşüm label'ları (Google Ads panelinden gelecek)
const ADS_LABELS = {
    form_submit:    'LABEL_FORM',      // TODO: Gerçek label ile değiştir
    whatsapp_click: 'LABEL_WA',        // TODO: Gerçek label ile değiştir
    phone_click:    'LABEL_PHONE'      // TODO: Gerçek label ile değiştir
};

// Genel dönüşüm izleme fonksiyonu (callback'li, event düşmesini önler)
function trackConversion(eventName, callback) {
    // GA4 Event
    if (typeof gtag === 'function') {
        gtag('event', eventName, {
            'event_category': 'conversion',
            'event_label': eventName
        });
    }

    // DataLayer push (GTM kullanıyorsanız)
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        'event': eventName,
        'event_category': 'conversion'
    });

    // Google Ads Conversion
    var label = ADS_LABELS[eventName];
    if (!label || label.indexOf('LABEL_') === 0) {
        // Label henüz ayarlanmamış, sessiz geç
        console.log('[Conversion] GA4 only:', eventName);
        if (typeof callback === 'function') callback();
        return;
    }

    if (typeof gtag !== 'function') {
        if (typeof callback === 'function') callback();
        return;
    }

    var sendTo = 'AW-2838120596/' + label;

    // Callback varsa (click -> dışa çıkış), event_callback + timeout ile garantile
    if (typeof callback === 'function') {
        var done = false;
        var finish = function() {
            if (done) return;
            done = true;
            callback();
        };

        gtag('event', 'conversion', {
            send_to: sendTo,
            event_callback: finish
        });

        // Fallback: event_callback çalışmazsa 700ms sonra devam et
        setTimeout(finish, 700);
        return;
    }

    // Normal conversion (sayfa yüklendiğinde, callback gerekmez)
    gtag('event', 'conversion', { send_to: sendTo });
    console.log('[Conversion] Ads:', eventName, sendTo);
}



// Form submit with AJAX + redirect to tesekkurler.html + SPAM KORUMASI
// NOT: Conversion burada tetiklenmez! tesekkurler.html sayfasında tetiklenir.
var _formLoadTime = Date.now();

function _hasGibberish(val) {
    if (!val) return false;
    var clean = val.toLowerCase().replace(/[^a-zçğıöşü]/g, '');
    if (clean.length < 2) return false;
    var vowels = clean.match(/[aeıioöuüi]/g);
    var vowelCount = vowels ? vowels.length : 0;
    if (vowelCount === 0) return true;
    if (clean.length >= 4 && (vowelCount / clean.length) < 0.2) return true;
    if (/[bcçdfgğhjklmnprsştvyz]{4,}/i.test(val)) return true;
    if (/(.)\1{2,}/.test(clean)) return true;
    return false;
}

function validateFormData(form) {
    // Honeypot kontrolü
    var honeypot = form.querySelector('input[name="website"]');
    if (honeypot && honeypot.value) return false;

    // Zaman kontrolü (3 saniyeden kısa = bot)
    var elapsed = (Date.now() - _formLoadTime) / 1000;
    if (elapsed < 3) { alert("Lütfen formu dikkatli doldurun."); return false; }

    var firma = (form.querySelector('input[name="firma"]') || {}).value || '';
    var il = (form.querySelector('input[name="il"]') || {}).value || '';
    var telefon = (form.querySelector('input[name="telefon"]') || {}).value || '';
    var tuketim = (form.querySelector('input[name="tuketim"]') || {}).value || '';
    var email = (form.querySelector('input[name="email"]') || {}).value || '';
    var yetkili = (form.querySelector('input[name="yetkili"]') || {}).value || '';
    var ad = (form.querySelector('input[name="ad"]') || form.querySelector('input[name="ad_soyad"]') || {}).value || '';
    var sehir = (form.querySelector('input[name="sehir"]') || {}).value || '';

    // Firma: min 3 karakter (varsa)
    if (firma) {
        if (firma.length < 3) { alert("Geçerli bir firma adı girin (en az 3 karakter)."); return false; }
        if (/^(.)\1+$/.test(firma.replace(/\s/g,''))) { alert("Geçerli bir firma adı girin."); return false; }
        if (_hasGibberish(firma)) { alert("Lütfen geçerli bir firma adı girin."); return false; }
    }

    // Ad Soyad (varsa)
    if (ad) {
        if (ad.length < 4) { alert("Geçerli bir ad soyad girin."); return false; }
        if (ad.trim().split(/\s+/).length < 2) { alert("Lütfen ad ve soyadınızı birlikte yazın."); return false; }
        if (_hasGibberish(ad)) { alert("Lütfen geçerli bir ad soyad girin."); return false; }
    }

    // Yetkili adı kontrolü (varsa)
    if (yetkili) {
        if (yetkili.length < 4) { alert("Geçerli bir ad soyad girin."); return false; }
        if (yetkili.trim().split(/\s+/).length < 2) { alert("Lütfen ad ve soyadınızı birlikte yazın."); return false; }
        if (_hasGibberish(yetkili)) { alert("Lütfen geçerli bir ad soyad girin."); return false; }
    }

    // Mesken filtresi
    var aboneGrubu = form.querySelector('select[name="abone_grubu"]');
    if (aboneGrubu && aboneGrubu.value === "mesken") { alert("Mesken (konut) abonelerine teklif vermiyoruz. Hizmetimiz yalnızca ticari ve sanayi işletmelere yöneliktir."); return false; }

    // İl/Şehir: varsa kontrol et
    var ilOrSehir = il || sehir;
    if (ilOrSehir) {
        if (ilOrSehir.length < 2) { alert("Geçerli bir il/ilçe girin."); return false; }
        if (!/^[a-zA-ZçÇğĞıİöÖşŞüÜ\s\/\-]+$/.test(ilOrSehir)) { alert("İl/İlçe alanına sadece harf giriniz."); return false; }
        if (_hasGibberish(ilOrSehir)) { alert("Lütfen geçerli bir il/ilçe adı girin."); return false; }
    }

    // Telefon: 05 ile başlamalı, 10-11 hane
    var cleanPhone = telefon.replace(/[\s\-\(\)\+]/g,'');
    if (!/^0?5\d{9}$/.test(cleanPhone)) { alert("Geçerli bir cep telefonu numarası girin (05xx xxx xx xx formatında, 11 hane)."); return false; }

    // E-posta format kontrolü (TLD zorunlu)
    if (email) {
        if (!/^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/.test(email)) { alert("Geçerli bir e-posta adresi girin (ornek@firma.com)."); return false; }
        var domain = email.split('@')[1] || '';
        if (_hasGibberish(domain.split('.')[0])) { alert("Geçerli bir e-posta adresi girin."); return false; }
    }

    // Tüketim: varsa min 1000
    if (tuketim && parseInt(tuketim) < 1000) { alert("Aylık tüketim en az 1.000 kWh olmalıdır. Konut abonelerine hizmet vermiyoruz."); return false; }

    return true;
}

function handleFormSubmit(form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Spam validasyonu
        if (!validateFormData(form)) return;

        var formData = new FormData(form);
        var submitBtn = form.querySelector('button[type="submit"]');
        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Gönderiliyor...';
        }

        fetch(form.action, {
            method: 'POST',
            body: formData,
            headers: { 'Accept': 'application/json' }
        }).then(function(response) {
            if (response.ok) {
                window.location.href = 'tesekkurler.html';
            } else {
                alert('Bir hata oluştu. Lütfen tekrar deneyin.');
                if (submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Gönder';
                }
            }
        }).catch(function() {
            alert('Bağlantı hatası. Lütfen tekrar deneyin.');
            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Gönder';
            }
        });
    });
}

// Hero Analiz Formu
var heroForm = document.getElementById('heroAnalysisForm');
if (heroForm) handleFormSubmit(heroForm);

// Teklif Formu
var teklifForm = document.getElementById('teklifForm');
if (teklifForm) handleFormSubmit(teklifForm);

// Bayilik Formu
var bayilikForm = document.getElementById('bayilikForm');
if (bayilikForm) handleFormSubmit(bayilikForm);

// Kampüs Partner Formu
var kampusForm = document.getElementById('kampusForm');
if (kampusForm) handleFormSubmit(kampusForm);

// ============================================
// REAL-TIME VALIDASYON (blur anında kontrol + sonraki alanları kilitle)
// ============================================
(function(){
    function markInvalid(input, msg) {
        input.style.borderColor = '#e74c3c';
        input.style.boxShadow = '0 0 0 3px rgba(231,76,60,.15)';
        input.dataset.valid = 'false';
        var existing = input.parentElement.querySelector('.inline-error');
        if (existing) existing.remove();
        var err = document.createElement('span');
        err.className = 'inline-error';
        err.style.cssText = 'display:block;font-size:11px;color:#e74c3c;margin-top:4px;font-weight:500';
        err.textContent = msg;
        input.parentElement.appendChild(err);
        lockFollowingFields(input);
    }
    function markValid(input) {
        input.style.borderColor = '';
        input.style.boxShadow = '';
        input.dataset.valid = 'true';
        var existing = input.parentElement.querySelector('.inline-error');
        if (existing) existing.remove();
        unlockFollowingFields(input);
    }

    // Formdaki sıradaki alanları kilitle/aç
    function lockFollowingFields(input) {
        var form = input.closest('form');
        if (!form) return;
        var allInputs = Array.from(form.querySelectorAll('input:not([type="hidden"]):not([type="file"]), select, textarea'));
        var idx = allInputs.indexOf(input);
        for (var i = idx + 1; i < allInputs.length; i++) {
            allInputs[i].disabled = true;
            allInputs[i].style.opacity = '0.4';
            allInputs[i].style.pointerEvents = 'none';
        }
        var btn = form.querySelector('button[type="submit"]');
        if (btn) { btn.disabled = true; btn.style.opacity = '0.5'; }
    }
    function unlockFollowingFields(input) {
        var form = input.closest('form');
        if (!form) return;
        var allInputs = Array.from(form.querySelectorAll('input:not([type="hidden"]):not([type="file"]), select, textarea'));
        var idx = allInputs.indexOf(input);
        // Sadece bu alandan sonrakileri aç — ama önceki alanlar da valid mi kontrol et
        var allValid = true;
        for (var i = 0; i <= idx; i++) {
            if (allInputs[i].dataset.valid === 'false') { allValid = false; break; }
        }
        if (!allValid) return;
        for (var i = idx + 1; i < allInputs.length; i++) {
            allInputs[i].disabled = false;
            allInputs[i].style.opacity = '';
            allInputs[i].style.pointerEvents = '';
        }
        var btn = form.querySelector('button[type="submit"]');
        if (btn) { btn.disabled = false; btn.style.opacity = ''; }
    }

    function hasGibberish(val) {
        if (!val) return false;
        var clean = val.toLowerCase().replace(/[^a-zçğıöşü]/g, '');
        if (clean.length < 2) return false;
        // Sesli harf sayısı (Türkçe + İngilizce sesliler)
        var vowels = clean.match(/[aeıioöuüi]/g);
        var vowelCount = vowels ? vowels.length : 0;
        // Hiç sesli harf yoksa → kesin anlamsız (hnnh, bhhbh, gdhdhx vb.)
        if (vowelCount === 0) return true;
        // 4+ karakterse sesli oranı %20'den düşük olmamalı
        if (clean.length >= 4 && (vowelCount / clean.length) < 0.2) return true;
        // 4+ ünsüz yan yana
        if (/[bcçdfgğhjklmnprsştvyz]{4,}/i.test(val)) return true;
        // Aynı harfin 3+ tekrarı (hnnnnh, aaaaa)
        if (/(.)\1{2,}/.test(clean)) return true;
        return false;
    }

    // Email: TLD zorunlu (.com, .net gibi)
    function isValidEmail(email) {
        if (!email) return false;
        return /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/.test(email);
    }

    document.querySelectorAll('input[name="firma"]').forEach(function(el){
        el.addEventListener('blur', function(){
            var v = el.value.trim();
            if (!v) return markInvalid(el, 'Firma adı zorunlu.');
            if (v.length < 3) return markInvalid(el, 'En az 3 karakter girin.');
            if (hasGibberish(v)) return markInvalid(el, 'Geçerli bir firma adı girin.');
            if (/^(.)\1+$/.test(v.replace(/\s/g,''))) return markInvalid(el, 'Geçerli bir firma adı girin.');
            markValid(el);
        });
    });

    // Ad Soyad (bayilik formu: name="ad")
    document.querySelectorAll('input[name="ad"], input[name="ad_soyad"]').forEach(function(el){
        el.addEventListener('blur', function(){
            var v = el.value.trim();
            if (!v) return markInvalid(el, 'Ad soyad zorunlu.');
            if (v.length < 4) return markInvalid(el, 'En az 4 karakter girin.');
            if (v.split(/\s+/).length < 2) return markInvalid(el, 'Ad ve soyadınızı yazın.');
            if (hasGibberish(v)) return markInvalid(el, 'Geçerli bir ad soyad girin.');
            markValid(el);
        });
    });

    // Şehir (bayilik formu: name="sehir")
    document.querySelectorAll('input[name="sehir"]').forEach(function(el){
        el.addEventListener('blur', function(){
            var v = el.value.trim();
            if (!v) return markInvalid(el, 'Şehir zorunlu.');
            if (v.length < 2) return markInvalid(el, 'Geçerli bir şehir girin.');
            if (!/^[a-zA-ZçÇğĞıİöÖşŞüÜ\s\/\-]+$/.test(v)) return markInvalid(el, 'Sadece harf giriniz.');
            if (hasGibberish(v)) return markInvalid(el, 'Geçerli bir şehir adı girin.');
            markValid(el);
        });
    });

    document.querySelectorAll('input[name="yetkili"]').forEach(function(el){
        el.addEventListener('blur', function(){
            var v = el.value.trim();
            if (!v) return; // opsiyonel olabilir bazı formlarda
            if (v.length < 4) return markInvalid(el, 'En az 4 karakter girin.');
            if (v.split(/\s+/).length < 2) return markInvalid(el, 'Ad ve soyadınızı yazın.');
            if (hasGibberish(v)) return markInvalid(el, 'Geçerli bir ad soyad girin.');
            markValid(el);
        });
    });

    document.querySelectorAll('input[name="il"]').forEach(function(el){
        el.addEventListener('blur', function(){
            var v = el.value.trim();
            if (!v) return markInvalid(el, 'İl/İlçe zorunlu.');
            if (v.length < 2) return markInvalid(el, 'Geçerli bir il/ilçe girin.');
            if (!/^[a-zA-ZçÇğĞıİöÖşŞüÜ\s\/\-]+$/.test(v)) return markInvalid(el, 'Sadece harf giriniz.');
            if (hasGibberish(v)) return markInvalid(el, 'Geçerli bir il/ilçe girin.');
            markValid(el);
        });
    });

    document.querySelectorAll('input[name="telefon"]').forEach(function(el){
        // Harf girişini engelle — sadece rakam, boşluk, +, -, ( ) kabul et
        el.addEventListener('input', function(){
            el.value = el.value.replace(/[^\d\s\+\-\(\)]/g, '');
        });
        el.addEventListener('blur', function(){
            var v = el.value.trim().replace(/[\s\-\(\)\+]/g,'');
            if (!v) return markInvalid(el, 'Telefon zorunlu.');
            if (!/^0?5\d{9}$/.test(v)) return markInvalid(el, '05 ile başlayan 11 haneli numara girin.');
            markValid(el);
        });
    });

    // E-posta real-time kontrolü
    document.querySelectorAll('input[name="email"]').forEach(function(el){
        el.addEventListener('blur', function(){
            var v = el.value.trim();
            if (!v) return markInvalid(el, 'E-posta zorunlu.');
            if (!isValidEmail(v)) return markInvalid(el, 'Geçerli bir e-posta girin (ornek@firma.com).');
            // Domain kısmında anlamsız harf kontrolü
            var domain = v.split('@')[1] || '';
            if (hasGibberish(domain.split('.')[0])) return markInvalid(el, 'Geçerli bir e-posta girin.');
            markValid(el);
        });
    });

    document.querySelectorAll('input[name="tuketim"]').forEach(function(el){
        el.addEventListener('blur', function(){
            var v = el.value.trim();
            if (v && parseInt(v) < 1000) return markInvalid(el, 'Min. 1.000 kWh (konut teklifi verilmez).');
            if (v) markValid(el);
        });
    });
})();

// ============================================
// CLICK TRACKING: WhatsApp + Telefon (callback'li)
// ============================================

// WhatsApp linkleri - callback ile event düşmesini önle
document.querySelectorAll('a[href*="wa.me"]').forEach(function(link) {
    link.removeAttribute('onclick'); // eski inline onclick'i temizle
    link.addEventListener('click', function(e) {
        e.preventDefault();
        var href = link.href;
        var target = link.getAttribute('target');
        trackConversion('whatsapp_click', function() {
            if (target === '_blank') {
                window.open(href, '_blank', 'noopener,noreferrer');
            } else {
                window.location.href = href;
            }
        });
    });
});

// Telefon linkleri - callback ile event düşmesini önle
document.querySelectorAll('a[href^="tel:"]').forEach(function(link) {
    link.removeAttribute('onclick'); // eski inline onclick'i temizle
    link.addEventListener('click', function(e) {
        e.preventDefault();
        var href = link.href;
        trackConversion('phone_click', function() {
            window.location.href = href;
        });
    });
});

// ============================================
// VDP Section — Scroll Reveal
// ============================================
(function() {
    var cards = document.querySelectorAll('.vdp-card');
    if (!cards.length) return;

    if ('IntersectionObserver' in window) {
        var observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    var card = entry.target;
                    var index = Array.prototype.indexOf.call(cards, card);
                    setTimeout(function() {
                        card.classList.add('revealed');
                    }, index * 100);
                    observer.unobserve(card);
                }
            });
        }, { threshold: 0.15 });

        cards.forEach(function(card) {
            observer.observe(card);
        });
    } else {
        // Fallback: show all
        cards.forEach(function(card) {
            card.classList.add('revealed');
        });
    }
})();
