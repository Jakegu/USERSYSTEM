function login(){
    console.log("login");
    let usersArray = readUsers();

    let inputEmail = $("#txtEmail").val();
    let inputPassword = $("#txtPassword").val();
    let flag;
    console.log(inputEmail);
    for(let i=0;i<usersArray.length;i++){
        let user = usersArray[i];
        console.log(user);
        if(inputEmail===user.email && inputPassword===user.password){
            console.log("I found it");
            window.location="users.html";
            flag=true;
        }else{
            console.log("Invalid Credentials");
            flag=false;
        }
        
    }

    if(flag==false){
        alert("Invalid Credentials");
    }
}

function init(){
    $("#btnLogin").click(login);
    
}

window.onload=init;