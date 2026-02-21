function scrollToForm() {
    document.getElementById("donorForm").scrollIntoView({
        behavior: "smooth"
    });
}

document.getElementById("form").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const blood = document.getElementById("blood").value;

    document.getElementById("message").innerText =
        "✅ Thank you " + name + "! You are registered as a " + blood + " donor.";

    this.reset();
});