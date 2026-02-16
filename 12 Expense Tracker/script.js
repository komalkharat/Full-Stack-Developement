let transactions = JSON.parse(localStorage.getItem("transactions")) || [];

function addTransaction() {
    const text = document.getElementById("text").value;
    const amount = parseFloat(document.getElementById("amount").value);

    if (text === "" || isNaN(amount)) {
        alert("Please enter valid details!");
        return;
    }

    const transaction = {
        id: Date.now(),
        text,
        amount
    };

    transactions.push(transaction);
    localStorage.setItem("transactions", JSON.stringify(transactions));

    document.getElementById("text").value = "";
    document.getElementById("amount").value = "";

    updateUI();
}

function updateUI() {
    const list = document.getElementById("list");
    list.innerHTML = "";

    let income = 0;
    let expense = 0;

    transactions.forEach(transaction => {

        if (transaction.amount > 0) {
            income += transaction.amount;
        } else {
            expense += transaction.amount;
        }

        const li = document.createElement("li");
        li.innerHTML = `
            ${transaction.text} 
            ₹${transaction.amount}
            <button class="delete-btn" onclick="deleteTransaction(${transaction.id})">x</button>
        `;

        list.appendChild(li);
    });

    document.getElementById("income").innerText = "₹" + income.toFixed(2);
    document.getElementById("expense").innerText = "₹" + Math.abs(expense).toFixed(2);
    document.getElementById("balance").innerText = "₹" + (income + expense).toFixed(2);
}

function deleteTransaction(id) {
    transactions = transactions.filter(transaction => transaction.id !== id);
    localStorage.setItem("transactions", JSON.stringify(transactions));
    updateUI();
}

updateUI();
