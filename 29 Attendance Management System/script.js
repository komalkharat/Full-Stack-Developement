let students = JSON.parse(localStorage.getItem("students")) || [];

function addStudent(){
    let nameInput = document.getElementById("studentName");

    if(nameInput.value.trim()==="") return;

    students.push({
        name: nameInput.value,
        present: 0,
        absent: 0
    });

    localStorage.setItem("students", JSON.stringify(students));
    nameInput.value="";
    displayStudents();
}

function displayStudents(){
    let table = document.getElementById("studentTable");
    table.innerHTML="";

    students.forEach((student,index)=>{
        let total = student.present + student.absent;
        let percentage = total === 0 ? 0 :
            ((student.present / total) * 100).toFixed(1);

        table.innerHTML += `
            <tr>
                <td>${student.name}</td>
                <td>${student.present}</td>
                <td>${student.absent}</td>
                <td>${percentage}%</td>
                <td>
                    <button class="present-btn" onclick="markPresent(${index})">Present</button>
                    <button class="absent-btn" onclick="markAbsent(${index})">Absent</button>
                    <button class="delete-btn" onclick="deleteStudent(${index})">Delete</button>
                </td>
            </tr>
        `;
    });
}

function markPresent(index){
    students[index].present++;
    localStorage.setItem("students", JSON.stringify(students));
    displayStudents();
}

function markAbsent(index){
    students[index].absent++;
    localStorage.setItem("students", JSON.stringify(students));
    displayStudents();
}

function deleteStudent(index){
    students.splice(index,1);
    localStorage.setItem("students", JSON.stringify(students));
    displayStudents();
}

displayStudents();
