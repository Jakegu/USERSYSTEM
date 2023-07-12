function User(e,p,f,l,a,g1,g2,g3,g){
    this.email = e;
    this.password = p;
    this.firstName = f;
    this.lastName = l;
    this.age = a;
    this.grade1 = g1;
    this.grade2 = g2;
    this.grade3 = g3;
    this.GPA = (Number(this.grade1)+Number(this.grade2)+Number(this.grade3))/3;

}

let inputEmail = $("#txtEmail");
let inputPassword = $("#txtPassword");
let inputFirstName = $("#txtFirstName");
let inputLastName = $("#txtLastName");
let inputAge = $("#txtAge");
let inputGrade1 = $("#txtGrade1");
let inputGrade2 = $("#txtGrade2");
let inputGrade3 = $("#txtGrade3");

function clearForm(){
    inputEmail.val() = "";
    inputPassword.val() = "";
    inputFirstName.val() = "";
    inputLastName.val() = "";
    inputAge.val() = "";
    inputGrade1.val() = "";
    inputGrade2.val() = "";
    inputGrade3.val() = "";
}

let notifications = document.getElementById("notifications");


function isValid(aUser){
    let validation = true;
    inputEmail.classList.remove("error");
    inputPassword.classList.remove("error");
    inputFirstName.classList.remove("error");
    inputLastName.classList.remove("error");
    inputAge.classList.remove("error");
    inputGrade1.classList.remove("error");
    inputGrade2.classList.remove("error");
    inputGrade3.classList.remove("error");
    notifications.classList.remove("error");
    notifications.innerHTML="";

    if(aUser.email == ""){
        validation = false;
        inputEmail.classList.add("error");
        notifications.innerHTML=`Please, add an Email!`;
        notifications.classList.add("error");
    }
    if(aUser.password == ""){
        validation = false;
        inputPassword.classList.add("error");
        notifications.innerHTML=`Please, add a Password!`;
        notifications.classList.add("error");
    }
    if(aUser.firstName == ""){
        validation = false;
        inputFirstName.classList.add("error");
        notifications.innerHTML=`Please, add a First Name!`;
        notifications.classList.add("error");
    }
    if(aUser.lastName == ""){
        validation = false;
        inputLastName.classList.add("error");
        notifications.innerHTML=`Please, add a Last Name!`;
        notifications.classList.add("error");
    }
    if(aUser.age == ""){
        validation = false;
        inputAge.classList.add("error");
        notifications.innerHTML=`Please, add an Age!`;
        notifications.classList.add("error");
    }
    if(aUser.grade1 == ""){
        validation = false;
        inputGrade1.classList.add("error");
        notifications.innerHTML=`Please, add a Grade1!`;
        notifications.classList.add("error");
    }
    if(aUser.grade2 == ""){
        validation = false;
        inputGrade2.classList.add("error");
        notifications.innerHTML=`Please, add a Grade2!`;
        notifications.classList.add("error");
    }
    if(aUser.grade3 == ""){
        validation = false;
        inputGrade3.classList.add("error");
        notifications.innerHTML=`Please, add a Grade3!`;
        notifications.classList.add("error");
    }

    return validation;
}

function register(){
    
    let newUser = new User(inputEmail.val(), inputPassword.val(),inputFirstName.val(),inputLastName.val(),inputAge.val(),inputGrade1.val(),inputGrade2.val(),inputGrade3.val());
    console.log(newUser);
    saveUser(newUser);
    
}

function init(){

}

window.onload=init;