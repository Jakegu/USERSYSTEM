function User(e,p,f,l,a,g1,g2,g3,g){
    this.email = e;
    this.password = p;
    this.firstName = f;
    this.lastName = l;
    this.age = a;
    this.grade1 = g1;
    this.grade2 = g2;
    this.grade3 = g3;
    this.grageAverage = g;

}

let inputEmail = $("#txtEmail");
let inputPassword = $("#txtPassword");
let inputFirstName = $("#txtFirstName");
let inputLastName = $("#txtLastName");
let inputAge = $("#txtAge");
let inputGrade1 = $("#txtGrade1");
let inputGrade2 = $("#txtGrade2");
let inputGrade3 = $("#txtGrade3");
let GPA = (inputGrade1.val()+inputGrade2.val()+inputGrade3.val())/3;


function register(){
    
    let newUser = new User(inputEmail.val(), inputPassword.val(),inputFirstName.val(),inputLastName.val(),inputAge.val(),inputGrade1.val(),inputGrade2.val(),inputGrade3.val(),GPA);

    console.log(newUser);
}

function init(){

}

window.onload=init;