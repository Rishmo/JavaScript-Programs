let gameSeq=[];
let userSeq=[];

let btns = ["yellow", "red", "purple", "green"];

let started =  false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function() {
    if (started == false) {
        console.log("Game is Started");
        started = true;

        levelUp();
    }
});

function btnFlash(btn){
    btn.classList.add("flash"); // (class)background-color: white
    setTimeout(function() { // setting time for flash
        btn.classList.remove("flash");
    }, 250); // remove in .25sec
}

function userFlash(btn){
    btn.classList.add("userflash"); 
    setTimeout(function() { 
        btn.classList.remove("userflash");
    }, 250); 
}

function levelUp(){
    userSeq = []; // whenever levelup user previous data gets empty
    level++;
    h2.innerText = `Level ${level}`;

    //random button chhose by system
    let randomIndx = Math.floor(Math.random() * 3); //choosing random index from 0-3
    let randomColor = btns[randomIndx]; // choosing random color from array
    let randomBtn = document.querySelector(`.${randomColor}`); // with the help of color we create a class and from that we choose that button
    
    // console.log(randomIndx);
    // console.log(randomColor);
    // console.log(randomBtn);

    gameSeq.push(randomColor);
    console.log(gameSeq);  

    btnFlash(randomBtn); //function for button flash whenever we click or by the system

}

function checkAns(indx){
    //console.log('current Level :', level);
    //let indx = level - 1;

    if(userSeq[indx] === gameSeq[indx]) {
        //console.log("Same Value");
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp, 1000); // level update, 1sec delay
        }
    } 
    else{
        //h2.innerText = `Level ${level}`;
        h2.innerHTML = `Game Over! your score is <b>${level}</b> <br>Press any key to restart.`;
        
        //for setting backgroundcolor to red whenever game ends
        document.querySelector("body").style.backgroundColor= "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        }, 250);

        reset(); // for resetting the game to initial    
    }
}

function btnPress(){
    // console.log("Button was Pressed");
    //console.log(this);
    let btn = this; 
    userFlash(btn);

    userColor = btn.getAttribute("id");
    //console.log(userColor);
    userSeq.push(userColor); // in userSeq color is added

    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}