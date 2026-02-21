function scrollToForm() {
    document.getElementById("surveyForm").scrollIntoView({
        behavior: "smooth"
    });
}

document.getElementById("form").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;

    document.getElementById("message").innerText =
        "✅ Thank you, " + name + "! Your response has been recorded.";

    this.reset();
});