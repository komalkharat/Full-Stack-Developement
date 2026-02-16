const quizData = [
    {
        question: "Which language runs in the browser?",
        options: ["Java", "C", "Python", "JavaScript"],
        correct: 3
    },
    {
        question: "What does HTML stand for?",
        options: ["Hyper Text Markup Language", "High Tech Modern Language", "Home Tool Markup Language", "None"],
        correct: 0
    },
    {
        question: "Which company developed Java?",
        options: ["Google", "Sun Microsystems", "Microsoft", "Apple"],
        correct: 1
    },
    {
        question: "CSS is used for?",
        options: ["Styling", "Database", "Logic", "Backend"],
        correct: 0
    },
    {
        question: "Which is not a programming language?",
        options: ["Python", "HTML", "Java", "C++"],
        correct: 1
    }
];

let currentQuestion = 0;
let score = 0;
let selectedOption = null;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const resultEl = document.getElementById("result");
const progressEl = document.getElementById("progress");

function loadQuestion() {
    const data = quizData[currentQuestion];
    questionEl.textContent = data.question;
    progressEl.textContent = `Question ${currentQuestion + 1} of ${quizData.length}`;
    optionsEl.innerHTML = "";
    selectedOption = null;

    data.options.forEach((option, index) => {
        const div = document.createElement("div");
        div.classList.add("option");
        div.textContent = option;

        div.addEventListener("click", () => {
            document.querySelectorAll(".option").forEach(opt => opt.classList.remove("selected"));
            div.classList.add("selected");
            selectedOption = index;
        });

        optionsEl.appendChild(div);
    });
}

nextBtn.addEventListener("click", () => {
    if (selectedOption === null) {
        alert("Please select an answer!");
        return;
    }

    if (selectedOption === quizData[currentQuestion].correct) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
});

function showResult() {
    questionEl.style.display = "none";
    optionsEl.style.display = "none";
    nextBtn.style.display = "none";
    progressEl.style.display = "none";

    let message = "";

    if (score === quizData.length) {
        message = "🔥 Perfect Score! You're a genius!";
    } else if (score >= 3) {
        message = "👏 Great job! Well done!";
    } else {
        message = "🙂 Not bad! Try again!";
    }

    resultEl.innerHTML = `
        🎉 Your Score: ${score} / ${quizData.length} <br><br>
        ${message} <br><br>
        <button onclick="location.reload()">Restart Quiz</button>
    `;
}

loadQuestion();
