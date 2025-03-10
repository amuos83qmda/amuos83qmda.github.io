// mobile hmb toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const menu = document.getElementById('menu');

mobileMenuBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    mobileMenuBtn.innerHTML = menu.classList.contains('active')
        ? '<i class="fas fa-times"></i>'
        : '<i class="fas fa-bars"></i>';
});

// close hmb
const menuLinks = document.querySelectorAll('#menu a');
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('active');
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

// header scroll
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// elem for animations
document.querySelectorAll('.about-text, .band-image, .member-card, .gig-card, .music-text, .platform-link, .contact-info, .contact-form').forEach(el => {
    observer.observe(el);
});

// delay for platform links
document.querySelectorAll('.platform-link').forEach((link, index) => {
    link.style.transitionDelay = `${index * 0.05}s`;
});

// minimal delay for member cards
document.querySelectorAll('.member-card').forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.05}s`;
});

// minimal delay for gig cards
document.querySelectorAll('.gig-card').forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.05}s`;
});