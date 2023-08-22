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
   if (playerChoice === "paper" && computerChoice ==="rock"){
    console.log(" computer picked rock : you  won")
   }else if(playerChoice === "scissors" && computerChoice === "paper"){
    console.log("computer picked paper : You won")
   }else if (playerChoice === "rock" && computerChoice ==="scissors"){
    console.log("computer picked scissors : you won")
   }else if (playerChoice === computerChoice){
    console.log("you both tied")

   }else {
    console.log(`computer picked ${computerChoice} computer wins`)
   
   }
}

    
computerChoice()
oneRound(playerChoice,computerChoice())