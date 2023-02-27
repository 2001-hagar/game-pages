const playertext =document.querySelector("#player");
const computertext =document.querySelector("#computer");
const resulttext =document.querySelector("#result");
const btns=document.querySelectorAll(".btn");
let player;
let computer;
let result;

btns.forEach(button=>button.addEventListener("click",()=>{
    player = button.textContent ;
    coputerturn();
    playertext.textContent=`Player: ${player}`;
    computertext.textContent=`Computer: ${computer}`;
    resulttext.textContent= winner();
}));
function coputerturn(){
    const randnum =Math.floor(Math.random()*3)+1 ;

    switch(randnum){
        case 1:
            computer="ROCK";
            break;
        case 2:
             computer="PAPER";
            break;
        case 3:
             computer="SCISSORS";
             break;
    }
}

function winner(){
    if(player== computer){
        return "Draw!";
    }
    else if (computer=="ROCK"){
        return (player =="PAPER")?"You win!" : "You Lose!"
    }
    else if (computer=="PAPER"){
        return (player =="SCISSORS")?"You win!" : "You Lose!"
    }
    else if (computer=="SCISSORS"){
        return (player =="PAPER")?"You win!" : "You Lose!"
    }
    
}
