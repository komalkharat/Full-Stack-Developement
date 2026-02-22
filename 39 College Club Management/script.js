function scrollToJoin(){
    document.getElementById("join").scrollIntoView({
        behavior:"smooth"
    });
}

document.getElementById("joinForm").addEventListener("submit",function(e){
    e.preventDefault();

    const name=document.getElementById("name").value;
    const club=document.getElementById("club").value;

    document.getElementById("message").innerText=
        "✅ Welcome "+name+"! You have joined the "+club+".";

    this.reset();
});