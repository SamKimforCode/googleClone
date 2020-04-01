//google copy

const search = document.querySelector(".searchbar");
const google = document.querySelector(".Icon");
const googleSearch = document.querySelector(".googleSearch");
const feelingLucky = document.querySelector(".feelingLucky");
const lightsht = document.querySelector('.lightshot');
const gmail = document.querySelector('.gmail');
const effi = document.querySelector('.effi');
const clock = document.querySelector('.clock');



const X =[];


function reload(){
    location.reload();
};


function makeUrl(a){
    const inputValue = a.target.value;
    X.push(inputValue);
};

function goToGoogle(){
    const inputValue = X[X.length -1];
    const url = `https://www.google.com/search?q=${inputValue}`;
    location.href = url;
    X = [];
};


function noKeyword(){
    if(X.length === 0 || X[X.length -1] === ""){
        alert('검색어를 입력하세요.');
    } else{
        goToGoogle();
    }
};


function pressEnter(a){
    if(a.which === 13){
        noKeyword();
    }
};

function timeClock(){
    const currentTime = new Date();
    const hour = currentTime.getHours();
    const min = currentTime.getMinutes();
    const sec = currentTime.getSeconds();
    const tTime = `${hour < 10 ? `0${hour}` : hour}:${min < 10 ? `0${min}` : min}:${sec < 10 ? `0${sec}` : sec}`;
    clock.innerHTML = tTime;
};


function workEnv(){
    window.open("https://www.youtube.com");
};

function lightShot(){
    window.open("https://prnt.sc");
};

function gMail(){
    window.open("https://mail.google.com/mail/u/1/#inbox");
};

function Effi(){
    window.open("https://effi.app");
};

function init(){
   timeClock();
   setInterval(timeClock, 1000);
}

search.addEventListener("input", makeUrl);
google.addEventListener("click", reload);
googleSearch.addEventListener("click", noKeyword);
lightsht.addEventListener("click", lightShot);
gmail.addEventListener("click",gMail);
effi.addEventListener('click',Effi);
search.addEventListener("keydown", pressEnter);

init();
