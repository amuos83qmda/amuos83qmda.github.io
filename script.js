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

// ============================================
// GIG HANDLER
// ============================================

const lastUpdated = "7/14";

const gigsData = [
    {
        day: 18,
        month: "Jul",
        title: "Culver Lake Fest",
        location: "Culver, IN",
        time: "7 PM - 9 PM"
    },
    {
        day: 29,
        month: "Jul",
        title: "Elkhart ArtWalk",
        location: "Elkhart, IN",
        time: "7:30 PM - 9 PM"
    },
    {
        day: 1,
        month: "Aug",
        title: "Louie's Bar & Grill",
        location: "Syracuse, IN",
        time: "11 PM - 3 AM"
    },
    {
        day: 22,
        month: "Aug",
        title: "Journey's End",
        location: "Bourbon, IN",
        time: "8PM - 12AM"
    },
    {
        day: 8,
        month: "Oct",
        title: "Private Event"
    },
    {
        day: 31,
        month: "Oct",
        title: "The Legion",
        location: "Bourbon, IN",
        time: "8PM - 12AM"
    },
    {
        day: 31,
        month: "Dec",
        title: "Rex's Rendezvous",
        location: "Warsaw, IN",
        time: "N/A"
    }
];


// ============================================
// RENDER GIGS
// ============================================

function renderGigs() {
    const container = document.getElementById("gigs-list");

    if (!container) {
        console.log("Could not find gigs-list");
        return;
    }

    container.innerHTML = gigsData.map(gig => `
        <div class="gig-card">
            <div class="gig-date">
                <div class="gig-day">${gig.day}</div>
                <div class="gig-month">${gig.month}</div>
            </div>

            <div class="gig-info">
                <h3>${gig.title}</h3>

                ${
                    gig.location
                    ? `
                    <div class="gig-location">
                        <i class="fas fa-map-marker-alt"></i>
                        <span>${gig.location}</span>
                    </div>
                    `
                    : ""
                }

                ${
                    gig.time
                    ? `
                    <div class="gig-time">
                        <i class="far fa-clock"></i>
                        <span>${gig.time}</span>
                    </div>
                    `
                    : ""
                }

            </div>
        </div>
    `).join("");
}


// ============================================
// UPDATE DATE
// ============================================

function updateLastUpdatedText() {
    const el = document.getElementById("gigs-last-updated");

    if (!el) {
        return;
    }

    el.textContent = `Last Updated: ${lastUpdated}`;
}


// ============================================
// START
// ============================================

document.addEventListener("DOMContentLoaded", () => {
    renderGigs();
    updateLastUpdatedText();
});
