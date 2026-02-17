function generateResume() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let summary = document.getElementById("summary").value;
    let skills = document.getElementById("skills").value;
    let education = document.getElementById("education").value;
    let experience = document.getElementById("experience").value;

    let resumeHTML = `
        <h2>${name}</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>

        <h3>Professional Summary</h3>
        <p>${summary}</p>

        <h3>Skills</h3>
        <p>${skills}</p>

        <h3>Education</h3>
        <p>${education}</p>

        <h3>Experience</h3>
        <p>${experience}</p>
    `;

    document.getElementById("resumeOutput").innerHTML = resumeHTML;
}
