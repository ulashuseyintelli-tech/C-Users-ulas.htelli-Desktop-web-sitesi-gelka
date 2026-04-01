// ============================================
// GELKA Enerji — Shared Header Component
// Tüm sayfalarda tek tip header sağlar.
// Kullanım: <div id="gelka-header"></div> + <script src="header.js"></script>
// ============================================
(function() {
    var isHome = (
        window.location.pathname === '/' ||
        window.location.pathname.endsWith('/index.html') ||
        window.location.pathname.endsWith('\\index.html') ||
        window.location.pathname === '/index.html'
    );

    function link(hash) {
        return isHome ? hash : 'index.html' + hash;
    }

    var bannerHTML = ''
        + '<div class="top-banner">'
        + '  <div class="container">'
        + '    <div class="banner-left">'
        + '      <span><i class="fas fa-phone-alt"></i> 0850 532 69 95</span>'
        + '      <span><i class="fab fa-whatsapp"></i> 0535 021 99 65</span>'
        + '      <span><i class="fas fa-envelope"></i> info@gelkaenerji.com.tr</span>'
        + '    </div>'
        + '    <div class="banner-right">'
        + '      <span><i class="fas fa-clock"></i> Pzt - Cuma: 09:00 - 18:00</span>'
        + '    </div>'
        + '  </div>'
        + '</div>';

    var headerHTML = ''
        + '<header class="header">'
        + '  <div class="container">'
        + '    <div class="logo">'
        + '      <a href="index.html"><img src="gelka-logo-header.png" alt="GELKA Enerji Logo"></a>'
        + '    </div>'
        + '    <nav class="nav">'
        + '      <ul>'
        + '        <li><a href="' + link('#anasayfa') + '">Ana Sayfa</a></li>'
        + '        <li><a href="' + link('#hakkimizda') + '">Kurumsal</a></li>'
        + '        <li><a href="' + link('#neden-gelka') + '">Hizmetlerimiz</a></li>'
        + '        <li><a href="bayilik.html" class="nav-highlight">\uD83D\uDD25 Bayilik</a></li>'
        + '        <li><a href="makaleler.html">Makaleler</a></li>'
        + '        <li><a href="' + link('#iletisim') + '">İletişim</a></li>'
        + '        <li><a href="ticari-elektrik-teklifi.html" class="nav-cta">Teklif Al</a></li>'
        + '        <li><a href="kampus-partner.html" class="nav-highlight nav-kampus">\uD83C\uDF93 Kampüs Partner</a></li>'
        + '      </ul>'
        + '    </nav>'
        + '    <button class="mobile-menu-btn"><i class="fas fa-bars"></i></button>'
        + '  </div>'
        + '</header>';

    var target = document.getElementById('gelka-header');
    if (target) {
        target.innerHTML = bannerHTML + headerHTML;
    }
})();
