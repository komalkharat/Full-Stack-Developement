function scrollToForm() {
    document.getElementById("bookingForm").scrollIntoView({
        behavior: "smooth"
    });
}

function submitForm() {
    alert("✅ Appointment Booked Successfully!");
    return false;
}
