const menu = [
    {
        id: 1,
        name: "French Fries",
        category: "starters",
        price: 120,
        image: "images/ff.jpg"
    },
    {
        id: 2,
        name: "Margherita Pizza",
        category: "main",
        price: 350,
        image: "images/pizza.jpg"
    },
    {
        id: 3,
        name: "Chocolate Cake",
        category: "desserts",
        price: 180,
        image: "images/cake.jpg"
    },
    {
        id: 4,
        name: "pasta",
        category: "drinks",
        price: 150,
        image: "images/pasta.jpg"
    }
];


let cart = 0;

function displayMenu(items) {
    const container = document.getElementById("menuContainer");
    container.innerHTML = "";

    items.forEach(item => {
        const card = document.createElement("div");
        card.className = "menu-card";

        card.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p class="price">₹${item.price}</p>
            <button onclick="addToCart()">Add to Cart</button>
        `;

        container.appendChild(card);
    });
}

function filterMenu(category) {
    if (category === "all") {
        displayMenu(menu);
    } else {
        const filtered = menu.filter(item => item.category === category);
        displayMenu(filtered);
    }
}

function addToCart() {
    cart++;
    document.getElementById("cartCount").innerText = cart;
}

displayMenu(menu);
