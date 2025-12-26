// Intro Screen Animation
const introScreen = document.getElementById('introScreen');
if (introScreen) {
    // Hide intro after animation completes
    setTimeout(() => {
        introScreen.classList.add('hidden');
    }, 3500);
    
    // Remove from DOM after fade out
    setTimeout(() => {
        introScreen.style.display = 'none';
    }, 4300);
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

// Form submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.');
        contactForm.reset();
    });
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
