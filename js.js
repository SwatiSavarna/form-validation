var fnameError = document.getElementById("fname-error");
var emailError = document.getElementById("email-error");
var pnoError = document.getElementById("pno-error");
var passwError = document.getElementById("password-error");

function validatename() {
    var name = document.getElementById("name").value;
    if (name.length == 0) {
        fnameError.innerHTML = "Name is required";
        return false;
    }
    if (!name.match(/^[A-Z]/) ) {
        fnameError.innerHTML = "Name should start with uppercase";
        return false;
    }
    fnameError.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
    return true;
}
function validateemail() {
    var email = document.getElementById("email").value;
    if (email.length == 0) {
        emailError.innerHTML = "Email is required"
        return false;
    }
    if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailError.innerHTML = "Email is invalid"
        return false;
    }
    emailError.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
    return true;
}
function validateno() {
    var no = document.getElementById("phone").value;
    if (no.length == 0) {
        pnoError.innerHTML = "Number is required";
        return false;
    }
    if(!no.match(/^[0-9]{10}$/)){
        pnoError.innerHTML = "only digits please...";
        return false;
    }
    pnoError.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
    return true;
}
function validatepassw(){
    var pass= document.getElementById("passw").value;
    if(pass.length !== 6){
        passwError.innerHTML = "Password must be atleast of 6 characters...";
        return false; 
    }
    passwError.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
    return true;
}