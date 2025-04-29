let gameseq=[];
let userseq=[];

let btns=["red", "purple", "green", "yellow"];

let started=false;
let level=0;

let h2=document.querySelector("h2");



document.addEventListener("keypress", function() {
    if(started==false){ 
        console.log("Game started");
        started=true;
        levelup();

    }
})


function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 200);

}

function levelup() {
    level++;
    h2.innerText=`Level ${level}`;
    let randomIdx=Math.floor(Math.random()*3);
    let randomColor=btns[randomIdx];
    let randomBtn=document.querySelector(`.${randomColor}`);
    gameseq.push(randomColor);
    // console.log(gameseq);
    btnFlash(randomBtn);
    
}

function checkAnswer(currentLevel) {
    if(gameseq[currentLevel]===userseq[currentLevel]){
        // console.log("correct");
        if(userseq.length===gameseq.length){
            setTimeout(levelup, 1000);
            userseq=[];
        }
    }else{ 
        h2.innerHTML=`Game Over !! Your score was <b> ${level }</b> <br> Press Any Key to Restart`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor="white";
        }, 200);
        resetGame();
        
    }
}

function btnpress(){
    // console.log(this);
    let btn=this;
    btnFlash(btn); 

    usercolor=btn.getAttribute("id");
    userseq.push(usercolor);

    checkAnswer(userseq.length-1);
}

let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpress);
}

function resetGame() {
    level=0;
    gameseq=[];
    userseq=[];
    started=false;
}