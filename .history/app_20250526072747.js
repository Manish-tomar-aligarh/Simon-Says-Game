let gameSeq=[];
let userSeq=[];
let level = 0;
let started = false;

let btns =["yellow","red","green","purple"];

let h2 = document.querySelector("h2");  
document.addEventListener("keypress",function(){
    if(started==false){
        console.log("Game started");
        started=true;
        levelUp();
    }
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250)
}

function levelUp(){
    level++;
    h2.innerText =`Level ${level}`;
    let randomIdx = Math.floor(Math.random()*3);
    let randomColor = btns[randomIdx];
    let randomBtn = document.querySelector(`.${randomColor}`);
    console.log(randomIdx);
    console.log(randomColor);
    console.log(randomBtn);

    btnFlash(randomBtn);
}


function btnPress(){
    console.log("Button pressed");
}

let allBtns = document.querySelectorAll(".btn");
for of
