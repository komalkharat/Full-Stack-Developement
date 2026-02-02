let currentUser = null;

window.onload = () => {
    let savedUser = localStorage.getItem("currentUser");
    if (savedUser) {
        currentUser = savedUser;
        showTodo();
    }
};

function login() {
    let username = document.getElementById("username").value.trim();
    if (username === "") return alert("Enter username");

    currentUser = username;
    localStorage.setItem("currentUser", username);
    showTodo();
}

function showTodo() {
    document.getElementById("loginCard").classList.add("hidden");
    document.getElementById("todoCard").classList.remove("hidden");
    document.getElementById("user").innerText = currentUser;
    loadTasks();
}

function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();
    if (taskText === "") return;

    let tasks = JSON.parse(localStorage.getItem(currentUser)) || [];
    tasks.push({ text: taskText, done: false });
    localStorage.setItem(currentUser, JSON.stringify(tasks));

    taskInput.value = "";
    loadTasks();
}

function loadTasks() {
    let list = document.getElementById("taskList");
    list.innerHTML = "";

    let tasks = JSON.parse(localStorage.getItem(currentUser)) || [];

    tasks.forEach((task, index) => {
        let li = document.createElement("li");
        if (task.done) li.classList.add("completed");

        li.innerHTML = `
            <span onclick="toggleTask(${index})">${task.text}</span>
            <button onclick="deleteTask(${index})">✖</button>
        `;

        list.appendChild(li);
    });
}

function toggleTask(index) {
    let tasks = JSON.parse(localStorage.getItem(currentUser));
    tasks[index].done = !tasks[index].done;
    localStorage.setItem(currentUser, JSON.stringify(tasks));
    loadTasks();
}

function deleteTask(index) {
    let tasks = JSON.parse(localStorage.getItem(currentUser));
    tasks.splice(index, 1);
    localStorage.setItem(currentUser, JSON.stringify(tasks));
    loadTasks();
}

function logout() {
    localStorage.removeItem("currentUser");
    location.reload();
}
