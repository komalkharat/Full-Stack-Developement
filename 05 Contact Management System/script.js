document.addEventListener("DOMContentLoaded", loadContacts);

function addContact() {
    let name = document.getElementById("name").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let email = document.getElementById("email").value.trim();

    if (name === "" || phone === "" || email === "") {
        alert("Please fill all fields");
        return;
    }

    let contacts = JSON.parse(localStorage.getItem("contacts")) || [];
    contacts.push({ name, phone, email });
    localStorage.setItem("contacts", JSON.stringify(contacts));

    document.getElementById("name").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("email").value = "";

    loadContacts();
}

function loadContacts() {
    let list = document.getElementById("contactList");
    list.innerHTML = "";

    let contacts = JSON.parse(localStorage.getItem("contacts")) || [];

    contacts.forEach((contact, index) => {
        let card = document.createElement("div");
        card.className = "contact-card";

        card.innerHTML = `
            <h3>${contact.name}</h3>
            <p>📞 ${contact.phone}</p>
            <p>📧 ${contact.email}</p>
            <button class="delete-btn" onclick="deleteContact(${index})">×</button>
        `;

        list.appendChild(card);
    });
}

function deleteContact(index) {
    let contacts = JSON.parse(localStorage.getItem("contacts"));
    contacts.splice(index, 1);
    localStorage.setItem("contacts", JSON.stringify(contacts));
    loadContacts();
}

function searchContacts() {
    let searchValue = document.getElementById("search").value.toLowerCase();
    let cards = document.getElementsByClassName("contact-card");

    Array.from(cards).forEach(card => {
        let text = card.innerText.toLowerCase();
        card.style.display = text.includes(searchValue) ? "block" : "none";
    });
}
