let courses = [
    { 
        id: 1, 
        name: "Web Development", 
        seats: 5,
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&h=800&q=80"
    },
    { 
        id: 2, 
        name: "Python Programming", 
        seats: 3,
        image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&h=800&q=80"
    },
    { 
        id: 3, 
        name: "Graphic Design", 
        seats: 4,
        image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&h=800&q=80"
    },
    { 
        id: 4, 
        name: "Digital Marketing", 
        seats: 2,
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&h=800&q=80"
    }
];

let enrolledCourses = JSON.parse(localStorage.getItem("enrollments")) || [];

function displayCourses() {
    const container = document.getElementById("courseContainer");
    container.innerHTML = "";

    courses.forEach(course => {
        const card = document.createElement("div");
        card.className = "course-card";

        const isEnrolled = enrolledCourses.includes(course.id);

        card.innerHTML = `
            <img src="${course.image}" alt="${course.name}">
            <div class="course-content">
                <h3>${course.name}</h3>
                <p>Learn from industry experts and boost your career.</p>
                <button ${course.seats === 0 || isEnrolled ? "disabled" : ""} 
                    onclick="enroll(${course.id})">
                    ${isEnrolled ? "Enrolled" : course.seats === 0 ? "Full" : "Enroll Now"}
                </button>
                <div class="seats">Available Seats: ${course.seats}</div>
            </div>
        `;

        container.appendChild(card);
    });
}

function enroll(courseId) {
    const course = courses.find(c => c.id === courseId);

    if (course && course.seats > 0) {
        course.seats--;
        enrolledCourses.push(courseId);
        localStorage.setItem("enrollments", JSON.stringify(enrolledCourses));
        alert("🎉 Successfully Enrolled!");
        displayCourses();
    }
}

displayCourses();
