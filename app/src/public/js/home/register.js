"use strict";

//DOM => Document Object Model (interface)

const id = document.querySelector("#id"),
    name = document.querySelector("#name"),
    psword = document.querySelector("#psword"),
    confirmPsword = document.querySelector("#confirm-psword"),
    RegisterBtn = document.querySelector("#button");
    

RegisterBtn.addEventListener("click",Register);

function Register(){
    const req = {
        id: id.value,
        name: name.value,
        psword : psword.value,
        confirmPsword : confirmPsword.value,

    };
    console.log(req);
    fetch("/register",{
        method: "POST",
        headers:{
            "Content-Type":"application/json",
        },
        body: JSON.stringify(req)//오브젝트를 json 형태로 바꿔주는 명령어
    })
    .then((res)=>res.json())
    .then((res)=>{
        if(res.success){
            location.href ="/login";
        }
        else{
            alert(res.msg);
        }
    })
    .catch((err)=>{
        console.error(new Error("로그인 중 에러 발생"));
    });
}
