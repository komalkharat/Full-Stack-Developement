function scrollToResources(){
    document.getElementById("resources").scrollIntoView({
        behavior:"smooth"
    });
}

document.getElementById("subForm").addEventListener("submit",function(e){
    e.preventDefault();

    const email=document.getElementById("email").value;

    document.getElementById("message").innerText=
        "✅ Subscribed successfully with "+email;

    this.reset();
});