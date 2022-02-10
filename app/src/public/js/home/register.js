"use strict";

//DOM => Document Object Model (interface)

const id = document.querySelector("#id"),
    name = document.querySelector("#name"),
    psword = document.querySelector("#psword"),
    confirmPsword = document.querySelector("#confirm-psword"),
    RegisterBtn = document.querySelector("#button");
    

RegisterBtn.addEventListener("click",register);

function register(){
    if(!id.value) return alert("아이디를 입력해주십시오.");
    if(psword.value !== confirmPsword.value) return alert("비밀번호가 일치하지 않습니다.");

    const req = {
        id: id.value,
        name: name.value,
        psword : psword.value,
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
        console.error(new Error("회원가입 중 에러 발생"));
    });
}
