let passwords = JSON.parse(localStorage.getItem("passwords")) || [];

const form = document.getElementById("passwordForm");
const passwordInput = document.getElementById("password");
const strengthText = document.getElementById("strengthText");

passwordInput.addEventListener("input", checkStrength);

function checkStrength() {
    const value = passwordInput.value;
    let strength = "Weak";

    if (value.length > 8 && /[A-Z]/.test(value) && /\d/.test(value)) {
        strength = "Medium";
    }
    if (value.length > 12 && /[!@#$%^&*]/.test(value)) {
        strength = "Strong";
    }

    strengthText.textContent = "Strength: " + strength;
}

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const newPassword = {
        id: Date.now(),
        site: document.getElementById("site").value,
        username: document.getElementById("username").value,
        password: passwordInput.value
    };

    passwords.unshift(newPassword);
    localStorage.setItem("passwords", JSON.stringify(passwords));

    form.reset();
    strengthText.textContent = "";
    displayPasswords();
});

function displayPasswords() {
    const list = document.getElementById("passwordList");
    list.innerHTML = "";

    passwords.forEach(p => {
        const card = document.createElement("div");
        card.className = "password-card";

        card.innerHTML = `
            <h4>${p.site}</h4>
            <p><strong>User:</strong> ${p.username}</p>
            <p><strong>Password:</strong> <span id="pass-${p.id}">••••••••</span></p>
            <div class="actions">
                <button class="small-btn show-btn" onclick="togglePassword(${p.id}, '${p.password}')">Show</button>
                <button class="small-btn copy-btn" onclick="copyPassword('${p.password}')">Copy</button>
                <button class="small-btn delete-btn" onclick="deletePassword(${p.id})">Delete</button>
            </div>
        `;

        list.appendChild(card);
    });
}

function togglePassword(id, realPassword) {
    const span = document.getElementById("pass-" + id);
    if (span.textContent === "••••••••") {
        span.textContent = realPassword;
    } else {
        span.textContent = "••••••••";
    }
}

function copyPassword(password) {
    navigator.clipboard.writeText(password);
    alert("Password copied!");
}

function deletePassword(id) {
    passwords = passwords.filter(p => p.id !== id);
    localStorage.setItem("passwords", JSON.stringify(passwords));
    displayPasswords();
}

displayPasswords();
