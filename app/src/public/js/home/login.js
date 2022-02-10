"use strict"

//DOM => Document Object Model (interface)

const id = document.querySelector("#id"),
    psword = document.querySelector("#psword"),
    loginBtn = document.querySelector("button");

loginBtn.addEventListener("click",login);
function login(){
    const req = {
        id: id.value,
        psword : psword.value,
    };
    
    fetch("/login",{
        method: "POST",
        headers:{
            "Content-Type":"application/json",
        },
        body: JSON.stringify(req)//오브젝트를 json 형태로 바꿔주는 명령어
    })
    .then((res)=>res.json())
    .then(console.log);
}
