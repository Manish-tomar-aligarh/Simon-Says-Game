// Simon Game Implementation

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

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250)
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },250)
}

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText =`Level ${level}`;
    let randomIdx = Math.floor(Math.random()*3);
    let randomColor = btns[randomIdx];
    let randomBtn = document.querySelector(`.${randomColor}`);
    // console.log(randomIdx);
    // console.log(randomColor);
    // console.log(randomBtn);
    gameSeq.push(randomColor);
    console.log(gameSeq);

    gameFlash(randomBtn);
}

function checkAns(idx){
    
    if(userSeq[idx] ===gameSeq[idx]){
        if(userSeq.length===gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        h2.innerText ="Wrong Sequence! Press any key to restart";
        resizeTo();

    }
}


function btnPress(){
    console.log(this);
    let btn =this;
    userFlash(btn);
    let userColor = btn.getAttribute("id");
    console.log(userColor);
    userSeq.push(userColor);
    checkAns(userSeq.length-1);


}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns){
    btn.addEventListener("click",btnPress);
}


function reset(){
    
    gameSeq=[];
    userSeq=[];
    
}
