let gameSeq=[];
let userSeq=[];
let level = 0;
let started = false;

let h2
document.addEventListener("keypress",function(){
    if(started==false){
        console.log("Game started");
        started=true;
        levelUp();
    }
});

function levelUp(){
    level++;
}