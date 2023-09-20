const computerChoiceDisplay = document.getElementById("computer-choice");//no need for #cuz your using getelementbyid
const userChoiceDisplay =document.getElementById("user-choice");
const resultDisplay = document.getElementById("result")
const possiblChoices = document.querySelectorAll("button")
let userChoice;
let computerChoice;
let compScore=0
let yourScore=0

possiblChoices.forEach(possiblChoice =>possiblChoice.addEventListener("click",(e)=>{
    userChoice= e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    resultDisplay.innerHTML = checkWinner()
   
}))

function generateComputerChoice(){
    randNum=Math.floor(Math.random()* 3)+1
    console.log(randNum)

    switch(randNum){
        case 1:
            computerChoice = "rock"
            break
        case 2:
            computerChoice = "paper"
            break
        case 3:
            computerChoice = "scissors"
            break

    }

    computerChoiceDisplay.innerHTML = computerChoice
}

function checkWinner(){
    let compScore=0
    let yourScore=0
    if (computerChoice == userChoice){
        return "Draw!"
    }else if(computerChoice === "paper" && userChoice === "rock"){
        compScore+=1
        return `computer wins ! score : ${compScore }`
    }else if( computerChoice === "scissors"&& userChoice ==="paper"){
        compScore+=1
        return `computer wins ! score : ${compScore}`
    }else if(computerChoice === "rock" && userChoice === "scissors"){
        compScore+=1
        return `computer wins ! score : ${compScore}`
    }else{
        yourScore+=1
        return `you win ! score : ${yourScore}`
    }
}