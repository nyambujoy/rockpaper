const playerText=document.querySelector("#playerText")
const computerText=document.querySelector("#computerText")
const resultText=document.querySelector("#resultText")
const choiceBtns=document.querySelectorAll(".choiceBtn")

let player;
let computer;
let result;
choiceBtns.forEach(button => {button.addEventListener("click",()=>{
    player = button.textContent
    computerTurn()
    playerText.textContent=`player : ${player}`
    computerText.textContent=`computer: ${computer}`
    resultText.textContent=checkWinner()
})
    
});

function computerTurn(){
    const randomNum= Math.floor(Math.random()*3)+1

    switch(randomNum){
        case 1:
            computer = "ROCK"
            break
        case 2:
            computer = "PAPER"
            break 
        case 3:
            computer = "SCISSORS"
            break       
    }
}

function checkWinner(){
    if (player == computer){
        return "Draw!"
    }
    else if(computer == "ROCK"){
        return(player =="PAPER") ? "you win": "you lose"
    }
    else if(computer == "PAPER"){
        return (player == "SCISSORS")? "You win":"you lose"
    }
    else if(computer == "SCISSORS"){
        return(player == "ROCK")? "you win":"you lose"
    }
    
}