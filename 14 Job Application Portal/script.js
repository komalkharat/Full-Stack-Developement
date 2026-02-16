const jobs = [
    { id: 1, title: "Frontend Developer", company: "TechNova" },
    { id: 2, title: "Backend Developer", company: "CodeCraft" },
    { id: 3, title: "UI/UX Designer", company: "Designify" },
    { id: 4, title: "Data Analyst", company: "DataWorld" }
];

let selectedJob = null;
let appliedJobs = JSON.parse(localStorage.getItem("appliedJobs")) || [];

function displayJobs() {
    const jobList = document.getElementById("jobList");
    jobList.innerHTML = "";

    jobs.forEach(job => {
        const card = document.createElement("div");
        card.className = "job-card";

        card.innerHTML = `
            <div>
                <strong>${job.title}</strong><br>
                <small>${job.company}</small>
            </div>
            <button class="apply-btn" onclick="openModal(${job.id})">Apply</button>
        `;

        jobList.appendChild(card);
    });
}

function openModal(jobId) {
    selectedJob = jobs.find(job => job.id === jobId);
    document.getElementById("applicationModal").style.display = "flex";
}

function closeModal() {
    document.getElementById("applicationModal").style.display = "none";
}

function submitApplication() {
    const name = document.getElementById("applicantName").value;
    const email = document.getElementById("applicantEmail").value;

    if (name === "" || email === "") {
        alert("Please fill all fields!");
        return;
    }

    appliedJobs.push({
        job: selectedJob.title,
        company: selectedJob.company,
        applicant: name
    });

    localStorage.setItem("appliedJobs", JSON.stringify(appliedJobs));

    closeModal();
    displayAppliedJobs();

    document.getElementById("applicantName").value = "";
    document.getElementById("applicantEmail").value = "";
}

function displayAppliedJobs() {
    const list = document.getElementById("appliedList");
    list.innerHTML = "";

    appliedJobs.forEach(app => {
        const li = document.createElement("li");
        li.textContent = `${app.job} at ${app.company} - Applied by ${app.applicant}`;
        list.appendChild(li);
    });
}

displayJobs();
displayAppliedJobs();
