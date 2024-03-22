const loginform = document.querySelector("#login-form");
const logininput = document.querySelector("#login-input");
const greeting = document.querySelector("#greeting");
const alerting = document.querySelector("#alert");



const onLoginSubmit = (e) =>{
    e.preventDefault();

    const userName = logininput.value;
    if(!userName){
        alerting.classList.remove("hidden");
        alerting.innerText = "이름을 입력해주세요";
    }else{
        alerting.classList.add("hidden");
        loginform.classList.add("hidden");

        greeting.innerText = `Hello! ${userName}`;
        greeting.classList.remove("hidden");
        localStorage.setItem("username", userName);
    }
}

const savedUsername = localStorage.getItem('username');

if(!savedUsername){
    loginform.classList.remove("hidden");
    loginform.addEventListener("submit", onLoginSubmit);
}else{
    greeting.classList.remove("hidden");
    greeting.innerText = `Hello! ${savedUsername}`;
}

