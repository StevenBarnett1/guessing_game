const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdin,
});

let randomInRange = (min, max) => {
	return Math.round(Math.random() * (max - min) + min);
};

let askRange = () => {
    rl.question("Enter a min and max separated with a space: ", answer => {
        askGuess(randomInRange(...answer.split(" ").map(x => Number(x))))
    })

}

let checkGuess = (num,secretNumber) => {
	if (num > secretNumber) {
		console.log('Too High');
		return false;
	} else if (num < secretNumber) {
		console.log('Too Low');
		return false;
	} else {
		console.log('Correct');
		return true;
	}
};

let askGuess = (secretNumber) => {
	rl.question('Enter A Guess: ', (answer) => {
		if (!checkGuess(Number(answer),secretNumber)) askGuess(secretNumber);
		else rl.close();
	});
};

askRange()
