let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function addTask(){
    let input = document.getElementById("taskInput");
    let priority = document.getElementById("priority").value;

    if(input.value.trim()==="") return;

    tasks.push({ text: input.value, priority: priority, completed:false });
    localStorage.setItem("tasks", JSON.stringify(tasks));

    input.value="";
    displayTasks();
}

function displayTasks(){
    let list = document.getElementById("taskList");
    list.innerHTML="";

    tasks.forEach((task,index)=>{
        let div = document.createElement("div");
        div.classList.add("task");
        if(task.completed) div.classList.add("completed");

        div.innerHTML=`
            <span>${task.text} 
            <span class="priority ${task.priority.toLowerCase()}">
                ${task.priority}
            </span></span>

            <div>
                <button class="complete-btn" onclick="toggleComplete(${index})">✔</button>
                <button class="delete-btn" onclick="deleteTask(${index})">✖</button>
            </div>
        `;
        list.appendChild(div);
    });
}

function toggleComplete(index){
    tasks[index].completed = !tasks[index].completed;
    localStorage.setItem("tasks", JSON.stringify(tasks));
    displayTasks();
}

function deleteTask(index){
    tasks.splice(index,1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    displayTasks();
}

displayTasks();
