// Initialize scores to match the reference image exactly
let homeScore = 0;
let guestScore = 0;

// Grab the DOM elements where the scores will be displayed
const homeScoreEl = document.getElementById("home-score");
const guestScoreEl = document.getElementById("guest-score");

// Functions for the Home Team
function addHome(points) {
    homeScore += points;
    homeScoreEl.textContent = homeScore;
}

// Functions for the Guest Team
function addGuest(points) {
    guestScore += points;
    guestScoreEl.textContent = guestScore;
}