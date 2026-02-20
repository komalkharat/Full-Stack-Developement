let dropArea = document.getElementById("dropArea");
let fileInput = document.getElementById("fileInput");
let progressBar = document.getElementById("progressBar");
let fileList = document.getElementById("fileList");

dropArea.addEventListener("dragover", (e)=>{
    e.preventDefault();
    dropArea.style.background="rgba(255,255,255,0.2)";
});

dropArea.addEventListener("dragleave", ()=>{
    dropArea.style.background="transparent";
});

dropArea.addEventListener("drop", (e)=>{
    e.preventDefault();
    dropArea.style.background="transparent";
    handleFiles(e.dataTransfer.files);
});

fileInput.addEventListener("change", ()=>{
    handleFiles(fileInput.files);
});

function handleFiles(files){
    let progress = 0;
    let interval = setInterval(()=>{
        progress += 10;
        progressBar.style.width = progress + "%";
        if(progress >= 100){
            clearInterval(interval);
            progressBar.style.width = "0%";
            previewFiles(files);
        }
    },100);
}

function previewFiles(files){
    for(let file of files){

        let fileItem = document.createElement("div");
        fileItem.className = "file-item";

        let content = document.createElement("div");
        content.innerHTML = `<strong>${file.name}</strong><br>Size: ${(file.size/1024).toFixed(2)} KB`;

        let previewArea = document.createElement("div");
        previewArea.style.marginTop = "10px";

        // IMAGE PREVIEW
        if(file.type.startsWith("image/")){
            let img = document.createElement("img");
            img.style.maxWidth = "150px";
            img.style.marginTop = "10px";
            let reader = new FileReader();
            reader.onload = e => img.src = e.target.result;
            reader.readAsDataURL(file);
            previewArea.appendChild(img);
        }

        // TEXT PREVIEW
        else if(file.type === "text/plain"){
            let reader = new FileReader();
            reader.onload = e => {
                let pre = document.createElement("pre");
                pre.textContent = e.target.result.substring(0,500);
                pre.style.background="rgba(255,255,255,0.2)";
                pre.style.padding="10px";
                previewArea.appendChild(pre);
            };
            reader.readAsText(file);
        }

        // PDF PREVIEW
        else if(file.type === "application/pdf"){
            let iframe = document.createElement("iframe");
            iframe.style.width="100%";
            iframe.style.height="200px";
            iframe.src = URL.createObjectURL(file);
            previewArea.appendChild(iframe);
        }

        let deleteBtn = document.createElement("div");
        deleteBtn.className="delete-btn";
        deleteBtn.innerText="Delete";
        deleteBtn.onclick=()=>fileItem.remove();

        fileItem.appendChild(content);
        fileItem.appendChild(deleteBtn);
        fileItem.appendChild(previewArea);

        fileList.appendChild(fileItem);
    }
}
