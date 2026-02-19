function toggleAnswer(element){
    let answer = element.nextElementSibling;
    answer.classList.toggle("open");
}

function searchFAQ(){
    let input = document.getElementById("search").value.toLowerCase();
    let items = document.querySelectorAll(".faq-item");

    items.forEach(item=>{
        let question = item.querySelector(".question").innerText.toLowerCase();
        if(question.includes(input)){
            item.style.display="block";
        } else{
            item.style.display="none";
        }
    });
}

function filterCategory(category){
    let items = document.querySelectorAll(".faq-item");

    items.forEach(item=>{
        if(category === "all"){
            item.style.display="block";
        }
        else if(item.classList.contains(category)){
            item.style.display="block";
        }
        else{
            item.style.display="none";
        }
    });
}
