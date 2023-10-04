const API_KEY = "073de8edeeb6cfc808889bd776923a93";

// API KEY는 전역 변수로 설정
function okFunc(position){
    const lat = position.coords.latitude;
    const log = position.coords.longitude;
    console.log("lat:", lat, "long:", log);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=${API_KEY}&units=metric`
    //console.log(url);
    fetch(url) //url에 접속하여 데이터를 가져올 것을 요청하고
    .then((response) => response.json()) //response 에서 body 텍스트를 promise 형태로 반환한다. (JSON 형태로 파싱)
    .then((data) => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");

        weather.innerText = data.weather[0].main;
        city.innerText = data.name;
    });
}
function errorFunc(){
    alert("날씨 정보를 불러올 수 없습니다.");
}

navigator.geolocation.getCurrentPosition(okFunc, errorFunc);