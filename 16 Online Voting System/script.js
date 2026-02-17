// Cat Candidates Only

let candidates = [
    {
        id: 1,
        name: "Sir Whiskers",
        image: "images/orange.jpeg",
        votes: 0
    },
    {
        id: 2,
        name: "Shadow Paws",
        image: "images/black.jpg",
        votes: 0
    },
    {
        id: 3,
        name: "Snowball",
        image: "images/white.jpeg",
        votes: 0
    },
    {
        id: 4,
        name: "Smokey",
        image: "images/gray.jpeg",
        votes: 0
    }
];

// Load saved votes
let savedVotes = JSON.parse(localStorage.getItem("catVotes"));
let hasVoted = localStorage.getItem("catHasVoted");

if (savedVotes) {
    candidates = savedVotes;
}

function displayCandidates() {
    const container = document.getElementById("candidates");
    container.innerHTML = "";

    candidates.forEach(candidate => {
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <img src="${candidate.image}" alt="${candidate.name}">
            <h3>${candidate.name}</h3>
            <button class="vote-btn" onclick="vote(${candidate.id})">
                Vote
            </button>
        `;

        container.appendChild(card);
    });
}

function vote(id) {
    if (hasVoted) {
        alert("🐾 You already voted!");
        return;
    }

    const candidate = candidates.find(c => c.id === id);
    candidate.votes++;

    localStorage.setItem("catVotes", JSON.stringify(candidates));
    localStorage.setItem("catHasVoted", "true");

    hasVoted = true;

    alert("🎉 Your vote has been counted!");
}

function showResults() {
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "";

    candidates.forEach(candidate => {
        const result = document.createElement("p");
        result.textContent = `${candidate.name}: ${candidate.votes} votes`;
        resultsDiv.appendChild(result);
    });
}

displayCandidates();
