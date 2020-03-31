//google copy

const search = document.querySelector(".searchbar");
const google = document.querySelector(".Icon");
const googleSearch = document.querySelector(".googleSearch");
const feelingLucky = document.querySelector(".feelingLucky");
const lightsht = document.querySelector('.lightshot');
const gmail = document.querySelector('.gmail');
const effi = document.querySelector('.effi');

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

search.addEventListener("input", makeUrl);
google.addEventListener("click", reload);
googleSearch.addEventListener("click", noKeyword);
lightsht.addEventListener("click", lightShot);
gmail.addEventListener("click",gMail);
effi.addEventListener('click',Effi);
search.addEventListener("keydown", pressEnter);