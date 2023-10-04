const images = [
    "bomi.jpg",
    "bomi2.jpg",
    "bomi3.jpg",
    "bomi4.jpg"
];

const chosenImage = images[Math.floor(Math.random() * quotes.length)];

//자바스크립트에서 랜덤 이미지를 만들고
//그걸 html에 추가한다.

const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;
console.log(bgImage);
bgImage.width = 150;


document.body.appendChild(bgImage);