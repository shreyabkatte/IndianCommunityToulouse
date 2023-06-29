document.querySelector(".contact-form").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

    let name= document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let subject = document.getElementById("subject").value;
    let text = document.getElementById("message").value;

    sendEmail(name,email,subject,text);

    var frm = document.getElementsByName('contact-form')[0];
    frm.reset()
}


function sendEmail(name,email,subject,text) {
    Email.send({
        Host : "smtp.gmail.com",
        Username:"indiancommunitytoulouse@gmail.com",
        Password : "qvmpzljpmgpiqfax",
        To : "indiancommunitytoulouse@gmail.com",
        From : email, 
        Subject : subject,
        Body : text,
    }).then((message) => alert("Mail sent successfully"))
}