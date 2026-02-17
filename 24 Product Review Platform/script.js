let currentRating = 0;
let reviews = JSON.parse(localStorage.getItem("reviews")) || [];

const stars = document.querySelectorAll(".rating span");

stars.forEach(star => {
    star.addEventListener("click", function() {
        currentRating = this.getAttribute("data-value");
        updateStars();
    });
});

function updateStars() {
    stars.forEach(star => {
        star.classList.remove("active");
        if (star.getAttribute("data-value") <= currentRating) {
            star.classList.add("active");
        }
    });
}

function addReview() {

    let product = document.getElementById("productName").value;
    let user = document.getElementById("userName").value;
    let reviewText = document.getElementById("reviewText").value;
    let imageInput = document.getElementById("productImage");
    let imageFile = imageInput.files[0];

    if (!product || !user || !reviewText || currentRating == 0) {
        alert("Please fill all fields and select rating!");
        return;
    }

    let reader = new FileReader();

    reader.onload = function(e) {
        let review = {
            product,
            user,
            reviewText,
            rating: parseInt(currentRating),
            image: e.target.result
        };

        reviews.push(review);
        localStorage.setItem("reviews", JSON.stringify(reviews));

        displayReviews();
    };

    if (imageFile) {
        reader.readAsDataURL(imageFile);
    } else {
        reader.onload({ target: { result: "" } });
    }

    document.getElementById("productName").value = "";
    document.getElementById("userName").value = "";
    document.getElementById("reviewText").value = "";
    imageInput.value = "";
    currentRating = 0;
    updateStars();
}

function displayReviews() {
    let container = document.getElementById("reviewsContainer");
    container.innerHTML = "";

    reviews.forEach(r => {
        container.innerHTML += `
            <div class="review-item">
                ${r.image ? `<img src="${r.image}">` : ""}
                <h3>${r.product}</h3>
                <p><strong>By:</strong> ${r.user}</p>
                <p>${"⭐".repeat(r.rating)}</p>
                <p>${r.reviewText}</p>
            </div>
        `;
    });
}

displayReviews();
