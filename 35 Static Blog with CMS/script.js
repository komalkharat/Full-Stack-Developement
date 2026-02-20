let posts = JSON.parse(localStorage.getItem("posts")) || [];

function addPost(){
    let title = document.getElementById("title").value;
    let category = document.getElementById("category").value;
    let content = document.getElementById("content").value;
    let imageInput = document.getElementById("image");

    if(title==="" || content==="") return;

    let reader = new FileReader();
    reader.onload = function(){
        let post = {
            id: Date.now(),
            title,
            category,
            content,
            image: reader.result
        };

        posts.unshift(post);
        localStorage.setItem("posts", JSON.stringify(posts));
        displayPosts();
    };

    if(imageInput.files[0]){
        reader.readAsDataURL(imageInput.files[0]);
    } else {
        reader.onload();
    }
}

function displayPosts(){
    let container = document.getElementById("posts");
    container.innerHTML="";

    posts.forEach(post=>{
        container.innerHTML += `
            <div class="post-card">
                ${post.image ? `<img src="${post.image}">` : ""}
                <div class="post-content">
                    <span class="badge">${post.category || "General"}</span>
                    <h3>${post.title}</h3>
                    <p>${post.content.substring(0,120)}...</p>
                </div>
            </div>
        `;
    });
}

function toggleTheme(){
    document.body.classList.toggle("light");
}

function searchPosts(){
    let query = document.getElementById("search").value.toLowerCase();
    let filtered = posts.filter(p => 
        p.title.toLowerCase().includes(query) ||
        p.content.toLowerCase().includes(query)
    );

    let container = document.getElementById("posts");
    container.innerHTML="";

    filtered.forEach(post=>{
        container.innerHTML += `
            <div class="post-card">
                ${post.image ? `<img src="${post.image}">` : ""}
                <div class="post-content">
                    <span class="badge">${post.category || "General"}</span>
                    <h3>${post.title}</h3>
                    <p>${post.content.substring(0,120)}...</p>
                </div>
            </div>
        `;
    });
}

displayPosts();
