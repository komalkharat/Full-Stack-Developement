let subscribers = JSON.parse(localStorage.getItem("subscribers")) || [];

const form = document.getElementById("subscribeForm");
const message = document.getElementById("message");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const emailInput = document.getElementById("email");
    const email = emailInput.value.trim();

    if (!validateEmail(email)) {
        message.style.color = "yellow";
        message.textContent = "Please enter a valid email address!";
        return;
    }

    if (subscribers.includes(email)) {
        message.style.color = "orange";
        message.textContent = "You are already subscribed!";
        return;
    }

    subscribers.unshift(email);
    localStorage.setItem("subscribers", JSON.stringify(subscribers));

    message.style.color = "#00ffcc";
    message.textContent = "🎉 Subscription successful!";

    emailInput.value = "";
    displaySubscribers();
});

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function displaySubscribers() {
    const list = document.getElementById("subscriberList");
    list.innerHTML = "";

    subscribers.forEach(email => {
        const card = document.createElement("div");
        card.className = "subscriber-card";
        card.textContent = email;
        list.appendChild(card);
    });
}

displaySubscribers();
