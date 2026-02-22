const form = document.getElementById("contactForm");
const contactList = document.getElementById("contactList");

let contacts = JSON.parse(localStorage.getItem("contacts")) || [];

function renderContacts() {
    contactList.innerHTML = "";

    contacts.forEach((contact, index) => {
        const div = document.createElement("div");
        div.className = "contact";

        div.innerHTML = `
            <strong>${contact.name}</strong><br>
            📞 ${contact.phone}<br>
            ✉️ ${contact.email}
            <button class="delete-btn" onclick="deleteContact(${index})">X</button>
        `;

        contactList.appendChild(div);
    });
}

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const newContact = {
        name: document.getElementById("name").value,
        phone: document.getElementById("phone").value,
        email: document.getElementById("email").value
    };

    contacts.push(newContact);
    localStorage.setItem("contacts", JSON.stringify(contacts));

    form.reset();
    renderContacts();
});

function deleteContact(index) {
    contacts.splice(index, 1);
    localStorage.setItem("contacts", JSON.stringify(contacts));
    renderContacts();
}

renderContacts();