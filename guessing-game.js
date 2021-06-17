const readline = require("readline")

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdin
})

let secretNumber = 10


let checkGuess = num => {
    if (num > secretNumber) {
        console.log("Too High")
        return false
    } else if (num < secretNumber) {
        console.log("Too Low")
        return false
    } else {
        console.log("Correct")
        return true
    }

}

let askGuess = () => {
    rl.question("Enter A Guess: ", (answer) => {
        checkGuess(Number(answer))
        rl.close()
    })

}


askGuess()
