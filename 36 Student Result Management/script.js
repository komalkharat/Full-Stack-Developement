let students = JSON.parse(localStorage.getItem("students")) || [];

function addResult(){
    let name = document.getElementById("name").value;
    let roll = document.getElementById("roll").value;
    let sub1 = parseInt(document.getElementById("sub1").value);
    let sub2 = parseInt(document.getElementById("sub2").value);
    let sub3 = parseInt(document.getElementById("sub3").value);

    if(!name || !roll || !sub1 || !sub2 || !sub3) return;

    let total = sub1 + sub2 + sub3;
    let percentage = (total / 300) * 100;
    let grade = calculateGrade(percentage);

    let student = {
        id: Date.now(),
        name,
        roll,
        sub1,
        sub2,
        sub3,
        percentage: percentage.toFixed(2),
        grade
    };

    students.unshift(student);
    localStorage.setItem("students", JSON.stringify(students));

    displayStudents();
}

function calculateGrade(p){
    if(p >= 90) return "A+";
    if(p >= 80) return "A";
    if(p >= 70) return "B";
    if(p >= 60) return "C";
    if(p >= 50) return "D";
    return "F";
}

function displayStudents(){
    let container = document.getElementById("records");
    container.innerHTML = "";

    students.forEach(s=>{
        container.innerHTML += `
            <div class="card">
                <h3>${s.name}</h3>
                <p>Roll No: ${s.roll}</p>
                <p>Percentage: ${s.percentage}%</p>
                <p class="grade">Grade: ${s.grade}</p>
                <div class="delete" onclick="deleteStudent(${s.id})">Delete</div>
            </div>
        `;
    });
}

function deleteStudent(id){
    students = students.filter(s => s.id !== id);
    localStorage.setItem("students", JSON.stringify(students));
    displayStudents();
}

function searchStudent(){
    let query = document.getElementById("search").value.toLowerCase();
    let filtered = students.filter(s =>
        s.name.toLowerCase().includes(query) ||
        s.roll.toLowerCase().includes(query)
    );

    let container = document.getElementById("records");
    container.innerHTML = "";

    filtered.forEach(s=>{
        container.innerHTML += `
            <div class="card">
                <h3>${s.name}</h3>
                <p>Roll No: ${s.roll}</p>
                <p>Percentage: ${s.percentage}%</p>
                <p class="grade">Grade: ${s.grade}</p>
            </div>
        `;
    });
}

displayStudents();
