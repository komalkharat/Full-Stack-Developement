const fileInput = document.getElementById("fileInput");
const uploadArea = document.getElementById("uploadArea");
const originalPreview = document.getElementById("originalPreview");
const compressedPreview = document.getElementById("compressedPreview");
const originalSize = document.getElementById("originalSize");
const compressedSize = document.getElementById("compressedSize");
const downloadBtn = document.getElementById("downloadBtn");
const qualityRange = document.getElementById("qualityRange");

let currentImage = null;

// Drag & Drop
uploadArea.addEventListener("click", () => fileInput.click());

fileInput.addEventListener("change", handleImage);

uploadArea.addEventListener("dragover", e => {
    e.preventDefault();
    uploadArea.style.background = "rgba(255,255,255,0.2)";
});

uploadArea.addEventListener("dragleave", () => {
    uploadArea.style.background = "transparent";
});

uploadArea.addEventListener("drop", e => {
    e.preventDefault();
    fileInput.files = e.dataTransfer.files;
    handleImage();
});

// Handle Image
function handleImage() {
    const file = fileInput.files[0];
    if (!file) return;

    originalSize.innerText = "Size: " + (file.size / 1024).toFixed(2) + " KB";

    const reader = new FileReader();
    reader.onload = function(e) {
        originalPreview.src = e.target.result;
        currentImage = e.target.result;
        compressImage();
    };
    reader.readAsDataURL(file);
}

// Compress Image
function compressImage() {
    if (!currentImage) return;

    const img = new Image();
    img.src = currentImage;

    img.onload = function() {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        canvas.width = img.width;
        canvas.height = img.height;

        ctx.drawImage(img, 0, 0);

        const compressedData = canvas.toDataURL("image/jpeg", qualityRange.value);

        compressedPreview.src = compressedData;
        downloadBtn.href = compressedData;

        const sizeInKB = (compressedData.length * (3/4)) / 1024;
        compressedSize.innerText = "Size: " + sizeInKB.toFixed(2) + " KB";
    };
}

qualityRange.addEventListener("input", compressImage);