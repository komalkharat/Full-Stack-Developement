function generateCertificate(){
    let name = document.getElementById("name").value;
    let course = document.getElementById("course").value;
    let issuer = document.getElementById("issuer").value;
    let template = document.getElementById("template").value;

    if(name===""||course===""||issuer==="") return;

    document.getElementById("certName").innerText=name;
    document.getElementById("certCourse").innerText=course;
    document.getElementById("certIssuer").innerText=issuer;

    let today=new Date().toLocaleDateString();
    document.getElementById("certDate").innerText="Date: "+today;

    let certID="ID-"+Math.floor(Math.random()*1000000);
    document.getElementById("certID").innerText="Certificate ID: "+certID;

    document.getElementById("certificate").className="certificate "+template;

    let signInput=document.getElementById("signature");
    if(signInput.files.length>0){
        let reader=new FileReader();
        reader.onload=function(e){
            document.getElementById("signPreview").src=e.target.result;
        }
        reader.readAsDataURL(signInput.files[0]);
    }
}

async function downloadPDF(){
    const { jsPDF } = window.jspdf;
    let cert=document.getElementById("certificate");

    html2canvas(cert).then(canvas=>{
        let img=canvas.toDataURL("image/png");
        let pdf=new jsPDF("landscape","px",[800,500]);
        pdf.addImage(img,"PNG",0,0,800,500);
        pdf.save("certificate.pdf");
    });
}
