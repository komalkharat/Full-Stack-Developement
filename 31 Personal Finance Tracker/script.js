let transactions = JSON.parse(localStorage.getItem("transactions")) || [];

function addTransaction(){
    let desc = document.getElementById("description").value;
    let amount = parseFloat(document.getElementById("amount").value);
    let type = document.getElementById("type").value;
    let category = document.getElementById("category").value;

    if(desc === "" || isNaN(amount)) return;

    let transaction = {
        id: Date.now(),
        desc,
        amount,
        type,
        category
    };

    transactions.push(transaction);
    localStorage.setItem("transactions", JSON.stringify(transactions));

    updateUI();
    clearFields();
}

function updateUI(){
    let list = document.getElementById("transactionList");
    let balance = 0;
    list.innerHTML = "";

    transactions.forEach(t=>{
        balance += t.type === "income" ? t.amount : -t.amount;

        list.innerHTML += `
            <div class="transaction ${t.type}">
                <div>
                    <b>${t.desc}</b> (${t.category})<br>
                    ₹${t.amount}
                </div>
                <div class="delete-btn" onclick="deleteTransaction(${t.id})">
                    Delete
                </div>
            </div>
        `;
    });

    document.getElementById("balance").innerText = "₹" + balance;
}

function deleteTransaction(id){
    transactions = transactions.filter(t=>t.id !== id);
    localStorage.setItem("transactions", JSON.stringify(transactions));
    updateUI();
}

function clearFields(){
    document.getElementById("description").value="";
    document.getElementById("amount").value="";
}

updateUI();
