const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdin,
});

let randomInRange = (min, max) => {
	return Math.round(Math.random() * (max - min) + min);
};

let secretNumber = randomInRange(1, 50);

let checkGuess = (num) => {
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

let askGuess = () => {
	rl.question('Enter A Guess: ', (answer) => {
		if (!checkGuess(Number(answer))) askGuess();
		else rl.close();
	});
};
askGuess();
