let complaints = JSON.parse(localStorage.getItem("complaints")) || [];

const form = document.getElementById("complaintForm");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const complaint = {
        id: Date.now(),
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        category: document.getElementById("category").value,
        description: document.getElementById("description").value,
        status: "Pending"
    };

    complaints.unshift(complaint);
    localStorage.setItem("complaints", JSON.stringify(complaints));

    form.reset();
    displayComplaints();
});

function displayComplaints() {
    const list = document.getElementById("complaintList");
    list.innerHTML = "";

    complaints.forEach(c => {
        const card = document.createElement("div");
        card.className = "complaint-card";

        card.innerHTML = `
            <div class="status">${c.status}</div>
            <h4>${c.category}</h4>
            <p><strong>Name:</strong> ${c.name}</p>
            <p><strong>Email:</strong> ${c.email}</p>
            <p>${c.description}</p>
            ${c.status === "Pending" ? `<button class="resolve-btn" onclick="resolveComplaint(${c.id})">Mark as Resolved</button>` : ""}
        `;

        list.appendChild(card);
    });
}

function resolveComplaint(id) {
    complaints = complaints.map(c => {
        if (c.id === id) {
            c.status = "Resolved";
        }
        return c;
    });

    localStorage.setItem("complaints", JSON.stringify(complaints));
    displayComplaints();
}

displayComplaints();
