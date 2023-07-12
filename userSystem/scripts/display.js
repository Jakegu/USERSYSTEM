function displayUsers(userArray){
    console.log(userArray);
    const TBODY = $("#usersTable tbody");
    for(let i=0;i<userArray.length;i++){
        let user = userArray[i];
        let tr = `
        <tr>
            <td>${user.firstName + " " + user.lastName}</td>
            <td>${user.email}</td>
            <td>${user.age}</td>
            <td>${user.grade1}</td>
            <td>${user.grade2}</td>
            <td>${user.grade3}</td>
            <td>${user.GPA}</td>
            
        </tr>
        `;
        TBODY.append(tr);
    }
    $(`td`).css({"color":"red"});
}


function init(){
    let userList = readUsers();
    displayUsers(userList);

    
}

window.onload = init;