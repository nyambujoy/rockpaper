//myArray=["rock","paper","scissors"]
//console.log(myArray[0])
//myArr =["grapes","bananas","mangos","pears"]
//randomItem = myArr[Math.floor(Math.random()*myArr.length)]
//console.log(randomItem)

function computerChoice(){
    var compChoice =["rock","paper","scissors"]
    let randomChoice = compChoice[Math.floor(Math.random()*compChoice.length)]
    console.log(randomChoice)
}

computerChoice()