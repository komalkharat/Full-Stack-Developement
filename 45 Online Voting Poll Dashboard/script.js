const pollArea = document.getElementById("pollArea");

let poll = JSON.parse(localStorage.getItem("poll")) || null;

function savePoll(){
    localStorage.setItem("poll", JSON.stringify(poll));
}

function createPoll(){
    const question = document.getElementById("question").value.trim();
    const options = [
        document.getElementById("option1").value.trim(),
        document.getElementById("option2").value.trim(),
        document.getElementById("option3").value.trim(),
        document.getElementById("option4").value.trim()
    ].filter(o => o !== "");

    if(!question || options.length < 2) return;

    poll = {
        question,
        options: options.map(o => ({ text:o, votes:0 }))
    };

    savePoll();
    renderPoll();
}

function vote(index){
    poll.options[index].votes++;
    savePoll();
    renderPoll();
}

function renderPoll(){
    if(!poll){
        pollArea.innerHTML = "<p>No poll created yet.</p>";
        return;
    }

    let totalVotes = poll.options.reduce((a,b)=>a+b.votes,0);

    let html = `<h3>${poll.question}</h3>`;

    poll.options.forEach((opt,i)=>{
        let percent = totalVotes ? ((opt.votes/totalVotes)*100).toFixed(1) : 0;

        html += `
        <div class="option">
            <strong>${opt.text}</strong>
            <div class="progress">
                <div class="progress-bar" style="width:${percent}%"></div>
            </div>
            <small>${opt.votes} votes (${percent}%)</small><br>
            <button class="vote-btn" onclick="vote(${i})">Vote</button>
        </div>
        `;
    });

    pollArea.innerHTML = html;
}

renderPoll();