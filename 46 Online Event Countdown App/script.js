const eventDate = new Date("March 25, 2026 10:00:00").getTime();

const timer = setInterval(function() {

    const now = new Date().getTime();
    const distance = eventDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if (distance < 0) {
        clearInterval(timer);
        document.querySelector(".countdown").innerHTML = "<h2>🎊 Event Started! 🎊</h2>";
    }

}, 1000);

function showMessage() {
    document.getElementById("message").innerHTML = "✅ You will be notified about the event!";
}