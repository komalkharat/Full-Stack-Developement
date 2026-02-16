let books = JSON.parse(localStorage.getItem("books")) || [];

function addBook() {
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;

    if (title === "" || author === "") {
        alert("Please fill all fields!");
        return;
    }

    const book = {
        id: Date.now(),
        title,
        author
    };

    books.push(book);
    localStorage.setItem("books", JSON.stringify(books));

    document.getElementById("title").value = "";
    document.getElementById("author").value = "";

    displayBooks(books);
}

function displayBooks(bookArray) {
    const bookList = document.getElementById("bookList");
    bookList.innerHTML = "";

    bookArray.forEach(book => {
        const card = document.createElement("div");
        card.className = "book-card";

        card.innerHTML = `
            <div class="book-info">
                <strong>${book.title}</strong><br>
                <small>by ${book.author}</small>
            </div>
            <button class="delete-btn" onclick="deleteBook(${book.id})">X</button>
        `;

        bookList.appendChild(card);
    });
}

function deleteBook(id) {
    books = books.filter(book => book.id !== id);
    localStorage.setItem("books", JSON.stringify(books));
    displayBooks(books);
}

function searchBooks() {
    const searchValue = document.getElementById("search").value.toLowerCase();
    const filteredBooks = books.filter(book =>
        book.title.toLowerCase().includes(searchValue) ||
        book.author.toLowerCase().includes(searchValue)
    );

    displayBooks(filteredBooks);
}

displayBooks(books);
