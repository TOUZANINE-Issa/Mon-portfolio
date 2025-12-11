document.addEventListener('DOMContentLoaded', function() {
    initSmoothScrolling();
    initScrollAnimations();
    initHoverEffects();
});

function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeIn 0.6s ease forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.section').forEach(section => {
        section.style.opacity = '0';
        observer.observe(section);
    });
}

function initHoverEffects() {
    const cards = document.querySelectorAll('.veille-card, .competence-card, .cv-item');

    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

function formatPhoneNumber(phone) {
    return phone.replace(/(\d{2})(?=\d)/g, '$1 ');
}

window.addEventListener('load', function() {
    const phoneElements = document.querySelectorAll('.contact-value');
    phoneElements.forEach(el => {
        if (el.textContent.match(/^\d+/)) {
            el.textContent = formatPhoneNumber(el.textContent);
        }
    });
});
