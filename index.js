//myArray=["rock","paper","scissors"]
//console.log(myArray[0])
//myArr =["grapes","bananas","mangos","pears"]
//randomItem = myArr[Math.floor(Math.random()*myArr.length)]
//console.log(randomItem)

function computerChoice(){
    var compChoice =["rock","paper","scissors"]
    return randomChoice = compChoice[Math.floor(Math.random()*compChoice.length)]
    //console.log(randomChoice)
}

//computerChoice()

let playerChoice= prompt("please pick one :rock,paper,scissors")

if (playerChoice == "rock" ){
    console.log("you picked:rock ")
}else if (playerChoice == "paper"){
    console.log("you picked :paper")
}else if (playerChoice =="scissors"){
    console.log("you picked: scissors" )
}

function oneRound(playerChoice,computerChoice){
    score =0
   if (playerChoice === "paper" && computerChoice ==="rock"){
    console.log(` computer picked rock : you  won ${++score}`)
   }else if(playerChoice === "scissors" && computerChoice === "paper"){
    console.log(`computer picked paper : You won ${++score}`)
   }else if (playerChoice === "rock" && computerChoice ==="scissors"){
    console.log(`computer picked scissors : you won ${++score}`)
   }else if (playerChoice === computerChoice){
    console.log(`you both tied: you picked: ${playerChoice} computer picked: ${computerChoice}`)

   }else {
    console.log(`computer picked ${computerChoice} computer wins ${++score}`)
   
   }
   
}

    
computerChoice()
oneRound(playerChoice,computerChoice())




/*
function game (){
    let score = 0
    if (playerChoice === "paper" && computerChoice ==="rock"){
        console.log(++score)
    }else if(playerChoice === "scissors" && computerChoice === "paper"){
        console.log(++score)
    }else if (playerChoice === "rock" && computerChoice ==="scissors"){
        console.log(++score)
    }

return score
}

game()*/