function generateShortCode() {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let shortCode = "";
    for (let i = 0; i < 6; i++) {
        shortCode += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return shortCode;
}

function shortenURL() {
    const longUrl = document.getElementById("longUrl").value;

    if (longUrl === "") {
        alert("Please enter a URL!");
        return;
    }

    const shortCode = generateShortCode();
    const shortUrl = "https://quick.link/" + shortCode;

    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `
        Short URL: 
        <a href="${longUrl}" target="_blank">${shortUrl}</a>
        <br><br>
        <button onclick="copyToClipboard('${shortUrl}')">Copy</button>
    `;

    saveToHistory(longUrl, shortUrl);
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard!");
}

function saveToHistory(longUrl, shortUrl) {
    let links = JSON.parse(localStorage.getItem("links")) || [];
    links.push({ longUrl, shortUrl });
    localStorage.setItem("links", JSON.stringify(links));
    displayHistory();
}

function displayHistory() {
    const list = document.getElementById("linkList");
    list.innerHTML = "";

    let links = JSON.parse(localStorage.getItem("links")) || [];

    links.forEach(link => {
        const li = document.createElement("li");
        li.innerHTML = `<a href="${link.longUrl}" target="_blank">${link.shortUrl}</a>`;
        list.appendChild(li);
    });
}

displayHistory();
