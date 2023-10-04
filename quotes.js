const quotes = [
    {
        quote : "늦었다고 생각할 때가 진짜 너무 늦었다.",
        author : "박명수"
    },
    {
        quote : "즐길 수 없으면 피하라.",
        author : "박명수"
    },
    {
        quote : "웃어라 모든 사람이 너와 함께 웃을 것이다. 울어라 너 혼자 울 것이다.",
        author : "올드보이"
    },
    {
        quote : "STAY",
        author : "인터스텔라"
    },
]; //총 4개

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;