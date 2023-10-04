const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input");
const sayHi = document.querySelector("#sayhi");

const HIDDEN = "hidden";
const USERNAME_KEY = "username";

function paintHi(name) {
    sayHi.innerText = `Hi, ${name}`;
    sayHi.classList.remove(HIDDEN); //class name 제거
}

function handle(event){
    console.log("로그인함",event);
    event.preventDefault(); 
    //어떤 이벤트 발생 시 브라우저가 기본적으로 실행하는 동작 (ex. submit -> 새로고침)을 막음
    const name = loginInput.value; //username
    localStorage.setItem(USERNAME_KEY, name);
    loginForm.classList.add(HIDDEN); //class name 추가
    //hidden class는 css에서 안보이게 함
    paintHi(name);
}

loginForm.addEventListener("submit", handle);

const isSavedUser = localStorage.getItem(USERNAME_KEY);
if (isSavedUser) { //저장되어있으면 form 안 보여주고 바로 hi
    loginForm.classList.add(HIDDEN); //안보이게 하고
    paintHi(isSavedUser); //보이게 하고
}