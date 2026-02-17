let entries = JSON.parse(localStorage.getItem("diaryEntries")) || [];

function addEntry() {
    const text = document.getElementById("entryText").value;

    if (text.trim() === "") {
        alert("Please write something!");
        return;
    }

    const entry = {
        id: Date.now(),
        text: text,
        date: new Date().toLocaleString()
    };

    entries.unshift(entry);
    localStorage.setItem("diaryEntries", JSON.stringify(entries));

    document.getElementById("entryText").value = "";
    displayEntries();
}

function displayEntries() {
    const container = document.getElementById("entries");
    container.innerHTML = "";

    entries.forEach(entry => {
        const card = document.createElement("div");
        card.className = "entry-card";

        card.innerHTML = `
            <button class="delete-btn" onclick="deleteEntry(${entry.id})">X</button>
            <div class="entry-date">${entry.date}</div>
            <p>${entry.text}</p>
        `;

        container.appendChild(card);
    });
}

function deleteEntry(id) {
    entries = entries.filter(entry => entry.id !== id);
    localStorage.setItem("diaryEntries", JSON.stringify(entries));
    displayEntries();
}

displayEntries();
