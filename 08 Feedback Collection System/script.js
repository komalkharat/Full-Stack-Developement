let ratingValue = 0;
let moodValue = "";

// Star Rating
const stars = document.querySelectorAll(".rating span");
stars.forEach(star => {
    star.addEventListener("click", () => {
        ratingValue = star.getAttribute("data-value");

        stars.forEach(s => s.classList.remove("active"));
        for (let i = 0; i < ratingValue; i++) {
            stars[i].classList.add("active");
        }
    });
});

// Emoji Mood
const moods = document.querySelectorAll(".emoji span");
moods.forEach(mood => {
    mood.addEventListener("click", () => {
        moodValue = mood.getAttribute("data-mood");

        moods.forEach(m => m.classList.remove("active"));
        mood.classList.add("active");
    });
});

// Character Counter
const message = document.getElementById("message");
const counter = document.getElementById("counter");

message.addEventListener("input", () => {
    counter.textContent = message.value.length + " / 200";
});

// Form Submission
const form = document.getElementById("feedbackForm");
const thankYou = document.getElementById("thankYou");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    if (ratingValue == 0 || moodValue == "") {
        alert("Please select rating and mood 😊");
        return;
    }

    const feedbackData = {
        name: document.getElementById("name").value,
        category: document.getElementById("category").value,
        rating: ratingValue,
        mood: moodValue,
        message: message.value
    };

    // Save to LocalStorage
    let feedbackList = JSON.parse(localStorage.getItem("feedback")) || [];
    feedbackList.push(feedbackData);
    localStorage.setItem("feedback", JSON.stringify(feedbackList));

    thankYou.style.display = "block";
    thankYou.innerHTML = "🎉 Thank you for your valuable feedback!";

    form.reset();
    counter.textContent = "0 / 200";
});
