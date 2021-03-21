const body = document.querySelector("body");
const IMG_NUMBER = 4;
const clockForm = document.querySelector(".js-clock"),
    clockText = clockForm.querySelector("span");

const sayHello = document.querySelector(".js-greetings");
const toDoLists = document.querySelector(".js-toDoList");
const weatherText = document.querySelector(".js-weather");

function setBg(imgNumber) {
    const image = new Image();
    image.src = `img/${imgNumber + 1}.jpg`;
    image.classList.add("bgImage");
    body.prepend(image);
}

function getRandom() {
    const number = Math.floor(Math.random() * IMG_NUMBER);
    if (number === 0) {
        clockText.style.color = "#ffffff";
        weatherText.style.color = "#ffffff";
        toDoLists.style.color = "#ffffff";
    } else if (number === 1) {
        clockText.style.color = "#ffffff";
        weatherText.style.color = "#ffffff";
        toDoLists.style.color = "#ffffff";
    } else if (number === 2) {
        clockText.style.color = "#000066";
    } else if (number === 3) {
        clockText.style.color = "#000000";
        sayHello.style.color = "#ffffff";
        toDoLists.style.color = "#ffffff";
    }
    return number;
}

function init() {
    const randomNumber = getRandom();
    setBg(randomNumber);
}

init();