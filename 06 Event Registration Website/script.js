const form = document.getElementById("eventForm");
const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;

    if (age < 10) {
        alert("🚨 Sorry, this event is not for kindergarten superheroes!");
        return;
    }

    if (age > 100) {
        alert("👀 Are you registering from another dimension?");
        return;
    }

    successMessage.style.display = "block";
    successMessage.style.background = "#d4edda";
    successMessage.style.color = "#155724";

    successMessage.innerHTML = `
        🎉 Welcome ${name}! <br>
        You're officially registered! <br>
        Prepare for legendary fun 😎
    `;

    form.reset();
});
