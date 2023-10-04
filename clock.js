const clock = document.querySelector("#clock");

//뭔가를 계속계속 실행하고 싶다 -> interval
function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours} : ${minutes} : ${seconds}`;
}

//interval : 일이 이루어지는 간격 (시간)
getClock();
setInterval(getClock, 1000); //1초마다 hello 함수 실행

//timeout : 일정 시간이 흐른 뒤 함수가 실행
//setTimeout(hello, 5000); //5초 후에 hello함수 실행

