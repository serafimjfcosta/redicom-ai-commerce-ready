// ============================================
// REDICOM AI COMMERCE READY - SCRIPTS
// ============================================

document.addEventListener('DOMContentLoaded', function() {

    // --- NAVBAR SCROLL EFFECT ---
    const navbar = document.getElementById('navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        lastScroll = currentScroll;
    });

    // --- MOBILE MENU TOGGLE ---
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.querySelector('.nav-links');

    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }

    // Close mobile menu on link click
    document.querySelectorAll('.nav-link').forEach(function(link) {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active');
        });
    });

    // --- SCROLL ANIMATIONS ---
    const animateElements = document.querySelectorAll(
        '.content-block, .approach-card, .solution-card, .quote-card, ' +
        '.comparison-col, .split-text, .split-visual, .fashion-content, ' +
        '.section-header, .highlight-box, .cta-content, .hero-stats .stat-item'
    );

    animateElements.forEach(function(el) {
        el.classList.add('animate-in');
    });

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    animateElements.forEach(function(el) {
        observer.observe(el);
    });

    // --- HERO PARTICLES ---
    const particlesContainer = document.getElementById('particles');
    if (particlesContainer) {
        for (var i = 0; i < 20; i++) {
            createParticle(particlesContainer);
        }
    }

    function createParticle(container) {
        var particle = document.createElement('div');
        particle.classList.add('particle');
        var size = Math.random() * 6 + 2;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDuration = (Math.random() * 15 + 10) + 's';
        particle.style.animationDelay = (Math.random() * 10) + 's';
        container.appendChild(particle);
    }

    // --- SMOOTH SCROLL FOR ANCHOR LINKS ---
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            var targetId = this.getAttribute('href');
            if (targetId === '#') return;
            var target = document.querySelector(targetId);
            if (target) {
                var offset = 80;
                var targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- COUNTER ANIMATION ---
    function animateCounter(element, target, suffix) {
        suffix = suffix || '';
        var current = 0;
        var increment = target / 60;
        var timer = setInterval(function() {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            element.textContent = Math.floor(current) + suffix;
        }, 16);
    }

    // Observe stat numbers for counter animation
    var statNumbers = document.querySelectorAll('.stat-number');
    var statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                var text = entry.target.textContent;
                if (text.includes('500')) {
                    animateCounter(entry.target, 500, '+');
                }
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    statNumbers.forEach(function(stat) {
        statsObserver.observe(stat);
    });

});
