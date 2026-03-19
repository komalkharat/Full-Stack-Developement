const pdfInput = document.getElementById("pdfInput");
const fileList = document.getElementById("fileList");
const mergeBtn = document.getElementById("mergeBtn");
const downloadLink = document.getElementById("downloadLink");

let selectedFiles = [];

pdfInput.addEventListener("change", function() {
    selectedFiles = Array.from(pdfInput.files);
    displayFiles();
});

function displayFiles() {
    fileList.innerHTML = "";
    selectedFiles.forEach((file, index) => {
        const li = document.createElement("li");
        li.textContent = file.name;
        fileList.appendChild(li);
    });
}

mergeBtn.addEventListener("click", async () => {
    if (selectedFiles.length < 2) {
        alert("Please select at least 2 PDF files.");
        return;
    }

    const { PDFDocument } = PDFLib;
    const mergedPdf = await PDFDocument.create();

    for (let file of selectedFiles) {
        const arrayBuffer = await file.arrayBuffer();
        const pdf = await PDFDocument.load(arrayBuffer);
        const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
        copiedPages.forEach((page) => mergedPdf.addPage(page));
    }

    const mergedPdfFile = await mergedPdf.save();
    const blob = new Blob([mergedPdfFile], { type: "application/pdf" });
    const url = URL.createObjectURL(blob);

    downloadLink.href = url;
    downloadLink.style.display = "inline-block";
});