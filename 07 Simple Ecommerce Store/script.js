let cartCount = 0;

function addToCart(productName, price) {
    cartCount++;
    document.getElementById("cart-count").innerText = cartCount;

    const popup = document.getElementById("popup");
    popup.innerText = `🎉 ${productName} added to cart!`;
    popup.style.display = "block";

    setTimeout(() => {
        popup.style.display = "none";
    }, 2000);
}
