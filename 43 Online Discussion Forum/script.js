const postList = document.getElementById("postList");

let posts = JSON.parse(localStorage.getItem("posts")) || [];

function savePosts() {
    localStorage.setItem("posts", JSON.stringify(posts));
}

function renderPosts() {
    postList.innerHTML = "";

    posts.forEach((post, index) => {
        const div = document.createElement("div");
        div.className = "post";

        div.innerHTML = `
            <button class="delete-btn" onclick="deletePost(${index})">X</button>
            <strong>${post.user || "Anonymous"}</strong><br>
            <small>${post.text}</small>

            <div class="replies">
                ${post.replies.map(r => `<div class="reply">💬 ${r}</div>`).join("")}
            </div>

            <div class="reply-box">
                <input placeholder="Reply..." id="reply-${index}">
                <button onclick="addReply(${index})">Send</button>
            </div>
        `;

        postList.appendChild(div);
    });
}

function addPost() {
    const user = document.getElementById("username").value.trim();
    const text = document.getElementById("postText").value.trim();

    if (!text) return;

    posts.unshift({
        user,
        text,
        replies: []
    });

    savePosts();
    renderPosts();
    document.getElementById("postText").value = "";
}

function deletePost(index) {
    posts.splice(index, 1);
    savePosts();
    renderPosts();
}

function addReply(index) {
    const input = document.getElementById(`reply-${index}`);
    const value = input.value.trim();
    if (!value) return;

    posts[index].replies.push(value);
    input.value = "";

    savePosts();
    renderPosts();
}

renderPosts();