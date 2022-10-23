let randomNumber = Math.floor((Math.random() * 100) + 1)
console.log("Welcome to Guess Random Number Game!!")
console.log("The computer will be thinking a Number from 1-100 and you will have to guess it.")
console.log("___________________________________________________________________________________")
console.log("Computer Guessed:", randomNumber, "SUSHHHHHHHHHHHHH!!!")
console.log("___________________________________________________________________________________")
let userInput;
let NoOfChances=0;
let chances; // chances 
// let userInput = Number.parseInt(prompt("Enter a Number to Guess:"))

do {
    userInput = Number.parseInt(prompt("Enter a Number to Guess:"))
    chances = NoOfChances++;
    if (userInput > 100) {
        console.log("Enter Value from 1-100 ONLY!!")
    }
    else if (userInput < 1) {
        console.log("Enter Value from 1-100 ONLY")
    }
    else if(userInput < randomNumber){
        console.log(`${userInput} is smaller than random number.`)
    }
            else if(userInput > randomNumber){
        console.log(`${userInput} is greater than random number.`)
    }
    else if (userInput == randomNumber) {
        console.log(`You guessed ${userInput} which was CORRECT!!`)
        let toPrintChance = 100 - chances
        console.log(`------------YOUR SCORE: ${toPrintChance}------------`)
    }
} while (userInput != randomNumber)
