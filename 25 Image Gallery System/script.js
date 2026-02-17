function filterImages(category) {
    let cards = document.querySelectorAll(".image-card");

    cards.forEach(card => {
        if (category === "all") {
            card.style.display = "block";
        } else {
            if (card.classList.contains(category)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        }
    });
}

function openModal(src) {
    document.getElementById("imageModal").style.display = "block";
    document.getElementById("modalImg").src = src;
}

function closeModal() {
    document.getElementById("imageModal").style.display = "none";
}
