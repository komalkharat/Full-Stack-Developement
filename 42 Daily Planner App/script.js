const taskList = document.getElementById("taskList");
const totalEl = document.getElementById("total");
const completedEl = document.getElementById("completed");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function updateStats() {
    totalEl.textContent = tasks.length;
    completedEl.textContent = tasks.filter(t => t.done).length;
}

function renderTasks() {
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        const div = document.createElement("div");
        div.className = "task" + (task.done ? " completed" : "");

        div.innerHTML = `
            <span>${task.text}</span>
            <div class="actions">
                <button class="complete-btn" onclick="toggleTask(${index})">✓</button>
                <button class="delete-btn" onclick="deleteTask(${index})">X</button>
            </div>
        `;

        taskList.appendChild(div);
    });

    updateStats();
}

function addTask() {
    const input = document.getElementById("taskInput");
    const text = input.value.trim();

    if (!text) return;

    tasks.push({ text, done: false });
    input.value = "";

    saveTasks();
    renderTasks();
}

function toggleTask(index) {
    tasks[index].done = !tasks[index].done;
    saveTasks();
    renderTasks();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    saveTasks();
    renderTasks();
}

renderTasks();