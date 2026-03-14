/* ============================================
   GELKA Enerji v2 — Ortak JavaScript
   Preloader, Scroll Animations, Mobile Menu,
   Cookie Banner, Smooth Scroll, Scroll-to-Top
============================================ */

(function() {
  'use strict';

  /* ---- Preloader ---- */
  window.addEventListener('load', function() {
    var preloader = document.querySelector('.preloader');
    if (preloader) {
      setTimeout(function() { preloader.classList.add('loaded'); }, 300);
    }
  });

  /* ---- Scroll Animations (IntersectionObserver) ---- */
  function initScrollAnimations() {
    var animElements = document.querySelectorAll('.fade-up, .fade-left, .fade-right');
    if (!animElements.length || !('IntersectionObserver' in window)) return;

    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    animElements.forEach(function(el) { observer.observe(el); });
  }

  /* ---- Mobile Menu ---- */
  function initMobileMenu() {
    var btn = document.querySelector('.mobile-menu-btn');
    var nav = document.querySelector('.nav');
    if (!btn || !nav) return;

    btn.addEventListener('click', function() {
      nav.classList.toggle('mobile-open');
      var icon = btn.querySelector('i');
      if (icon) {
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
      }
    });

    // Menü linkine tıklayınca kapat
    nav.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', function() {
        if (window.innerWidth <= 991) {
          nav.classList.remove('mobile-open');
          var icon = btn.querySelector('i');
          if (icon) {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
          }
        }
      });
    });
  }

  /* ---- Smooth Scroll ---- */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
      anchor.addEventListener('click', function(e) {
        var targetId = this.getAttribute('href');
        if (targetId === '#') return;
        var target = document.querySelector(targetId);
        if (!target) return;
        e.preventDefault();

        var header = document.querySelector('.header');
        var topBanner = document.querySelector('.top-banner');
        var offset = 0;
        if (header) offset += header.offsetHeight;
        if (topBanner) offset += topBanner.offsetHeight;

        var top = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: top, behavior: 'smooth' });
      });
    });
  }

  /* ---- Scroll to Top ---- */
  function initScrollTop() {
    var scrollBtn = document.querySelector('.scroll-top');
    if (!scrollBtn) return;

    window.addEventListener('scroll', function() {
      if (window.scrollY > 400) {
        scrollBtn.classList.add('show');
      } else {
        scrollBtn.classList.remove('show');
      }
    });

    scrollBtn.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ---- Cookie Banner ---- */
  function initCookieBanner() {
    var banner = document.getElementById('cookieBanner');
    if (!banner) return;
    if (localStorage.getItem('cookieConsent')) return;
    banner.classList.add('show');
  }

  window.acceptCookies = function() {
    localStorage.setItem('cookieConsent', 'accepted');
    var banner = document.getElementById('cookieBanner');
    if (banner) banner.classList.remove('show');
  };

  window.rejectCookies = function() {
    localStorage.setItem('cookieConsent', 'rejected');
    var banner = document.getElementById('cookieBanner');
    if (banner) banner.classList.remove('show');
  };

  /* ---- Header Scroll Effect ---- */
  function initHeaderScroll() {
    var header = document.querySelector('.header');
    if (!header) return;

    var lastScroll = 0;
    window.addEventListener('scroll', function() {
      var currentScroll = window.scrollY;
      if (currentScroll > 100) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
      lastScroll = currentScroll;
    });
  }

  /* ---- FAQ Accordion ---- */
  function initFaqAccordion() {
    document.querySelectorAll('.faq-question').forEach(function(btn) {
      btn.addEventListener('click', function() {
        var item = this.closest('.faq-item');
        var isOpen = item.classList.contains('active');

        // Hepsini kapat
        document.querySelectorAll('.faq-item').forEach(function(el) {
          el.classList.remove('active');
        });

        // Tıklananı aç/kapat
        if (!isOpen) {
          item.classList.add('active');
        }
      });
    });
  }

  /* ---- Marquee Duplicate ---- */
  function initMarquee() {
    document.querySelectorAll('.marquee__group').forEach(function(group) {
      // İçeriği klonla (sonsuz döngü için)
      var clone = group.cloneNode(true);
      clone.setAttribute('aria-hidden', 'true');
      group.parentNode.appendChild(clone);
    });
  }

  /* ---- Counter Animation ---- */
  function initCounters() {
    var counters = document.querySelectorAll('[data-count]');
    if (!counters.length) return;

    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(function(el) { observer.observe(el); });
  }

  function animateCounter(el) {
    var target = parseInt(el.getAttribute('data-count'));
    var suffix = el.getAttribute('data-suffix') || '';
    var prefix = el.getAttribute('data-prefix') || '';
    var duration = 2000;
    var start = 0;
    var startTime = null;

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      var progress = Math.min((timestamp - startTime) / duration, 1);
      var current = Math.floor(progress * target);
      el.textContent = prefix + current.toLocaleString('tr-TR') + suffix;
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = prefix + target.toLocaleString('tr-TR') + suffix;
    }
    requestAnimationFrame(step);
  }

  /* ---- Init All ---- */
  document.addEventListener('DOMContentLoaded', function() {
    initScrollAnimations();
    initMobileMenu();
    initSmoothScroll();
    initScrollTop();
    initCookieBanner();
    initHeaderScroll();
    initFaqAccordion();
    initMarquee();
    initCounters();
  });

})();
