// ============================================
// gig handler
// this BETTER work
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
// render actual gigs
// ============================================
function renderGigs() {
    const container = document.getElementById("gigs-list");
    if (!container) return;

    container.innerHTML = gigsData.map(gig => `
        <div class="gig-card">
            <div class="gig-date">
                <div class="gig-day">${gig.day}</div>
                <div class="gig-month">${gig.month}</div>
            </div>
            <div class="gig-info">
                <h3>${gig.title}</h3>
                ${gig.location ? `
                <div class="gig-location">
                    <i class="fas fa-map-marker-alt"></i>
                    <span>${gig.location}</span>
                </div>` : ""}
                ${gig.time ? `
                <div class="gig-time">
                    <i class="far fa-clock"></i>
                    <span>${gig.time}</span>
                </div>` : ""}
            </div>
        </div>
    `).join("");
}

function updateLastUpdatedText() {
    const el = document.getElementById("gigs-last-updated");
    if (!el) return;
    el.textContent = `Last Updated: ${lastUpdated}`;
}

document.addEventListener("DOMContentLoaded", () => {
    renderGigs();
    updateLastUpdatedText();
});
