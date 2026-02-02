document.addEventListener("DOMContentLoaded", loadNotes);

function addNote() {
    let title = document.getElementById("noteTitle").value;
    let content = document.getElementById("noteContent").value;

    if (title === "" || content === "") {
        alert("Please fill all fields");
        return;
    }

    let notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.push({ title, content });
    localStorage.setItem("notes", JSON.stringify(notes));

    document.getElementById("noteTitle").value = "";
    document.getElementById("noteContent").value = "";

    loadNotes();
}

function loadNotes() {
    let notesDiv = document.getElementById("notes");
    notesDiv.innerHTML = "";

    let notes = JSON.parse(localStorage.getItem("notes")) || [];

    notes.forEach((note, index) => {
        let noteDiv = document.createElement("div");
        noteDiv.className = "note";

        noteDiv.innerHTML = `
            <h3>${note.title}</h3>
            <p>${note.content}</p>
            <button class="delete-btn" onclick="deleteNote(${index})">Delete</button>
        `;

        notesDiv.appendChild(noteDiv);
    });
}

function deleteNote(index) {
    let notes = JSON.parse(localStorage.getItem("notes"));
    notes.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notes));
    loadNotes();
}
