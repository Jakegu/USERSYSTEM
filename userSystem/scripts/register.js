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

let notifications = $("#notifications");


function isValid(aUser){
    let validation = true;
    inputEmail.removeClass("error");
    inputPassword.removeClass("error");
    inputFirstName.removeClass("error");
    inputLastName.removeClass("error");
    inputAge.removeClass("error");
    inputGrade1.removeClass("error");
    inputGrade2.removeClass("error");
    inputGrade3.removeClass("error");
    notifications.removeClass("error");
    notifications.innerHTML="";

    if(aUser.email == ""){
        validation = false;
        inputEmail.addClass("error");
        notifications.append(`<p>Please, add an Email!</p>`);
        notifications.addClass("error");
    }
    if(aUser.password == ""){
        validation = false;
        inputPassword.addClass("error");
        notifications.append(`<p>Please, add a Password!</p>`);
        notifications.addClass("error");
    }
    if(aUser.firstName == ""){
        validation = false;
        inputFirstName.addClass("error");
        notifications.append(`<p>Please, add a First Name!</p>`);
        notifications.addClass("error");
    }
    if(aUser.lastName == ""){
        validation = false;
        inputLastName.addClass("error");
        notifications.append(`<p>Please, add a Last Name!</p>`);
        notifications.addClass("error");
    }
    if(aUser.age == ""){
        validation = false;
        inputAge.addClass("error");
        notifications.append(`<p>Please, add an Age!</p>`);
        notifications.addClass("error");
    }
    if(aUser.grade1 == ""){
        validation = false;
        inputGrade1.addClass("error");
        notifications.append(`<p>Please, add a Grade1!</p>`);
        notifications.addClass("error");
    }
    if(aUser.grade2 == ""){
        validation = false;
        inputGrade2.addClass("error");
        notifications.append(`<p>Please, add a Grade2!</p>`);
        notifications.addClass("error");
    }
    if(aUser.grade3 == ""){
        validation = false;
        inputGrade3.addClass("error");
        notifications.append(`<p>Please, add a Grade3!</p>`);
        notifications.addClass("error");
    }

    return validation;
}

function register(){
    let newUser = new User(inputEmail.val(), inputPassword.val(),inputFirstName.val(),inputLastName.val(),inputAge.val(),inputGrade1.val(),inputGrade2.val(),inputGrade3.val());

    if(isValid(newUser)){
        console.log(newUser);
        saveUser(newUser);
    }
    
}

function init(){
    $("#btnAdd").click(register);
    $("main").on("click",function(){
        $("header").css({
            "background-color":"gray"
        });
    });
}

window.onload=init;