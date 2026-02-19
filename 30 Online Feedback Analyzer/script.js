let historyData = JSON.parse(localStorage.getItem("feedbackHistory")) || [];

function analyzeFeedback(){
    let text = document.getElementById("feedbackInput").value.toLowerCase();
    let resultBox = document.getElementById("result");

    if(text.trim()==="") return;

    let positiveWords = ["good","great","excellent","amazing","love","awesome","nice"];
    let negativeWords = ["bad","poor","worst","hate","terrible","slow","issue"];

    let score = 0;

    positiveWords.forEach(word=>{
        if(text.includes(word)) score++;
    });

    negativeWords.forEach(word=>{
        if(text.includes(word)) score--;
    });

    let sentiment, emoji;

    if(score > 0){
        sentiment = "Positive";
        emoji = "😊";
        resultBox.className = "result-box positive";
    }
    else if(score < 0){
        sentiment = "Negative";
        emoji = "😡";
        resultBox.className = "result-box negative";
    }
    else{
        sentiment = "Neutral";
        emoji = "😐";
        resultBox.className = "result-box neutral";
    }

    resultBox.innerHTML = `Sentiment: ${sentiment} ${emoji}`;

    historyData.push({text, sentiment});
    localStorage.setItem("feedbackHistory", JSON.stringify(historyData));

    displayHistory();
    document.getElementById("feedbackInput").value="";
}

function displayHistory(){
    let historyDiv = document.getElementById("history");
    historyDiv.innerHTML="";

    historyData.forEach(item=>{
        historyDiv.innerHTML += `
            <div class="history-item">
                "${item.text}" - <b>${item.sentiment}</b>
            </div>
        `;
    });
}

displayHistory();
