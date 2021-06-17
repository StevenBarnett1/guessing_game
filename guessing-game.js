const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdin,
});

let randomInRange = (min, max) => {
	return Math.round(Math.random() * (max - min) + min);
};

let askRange = (numOfTries) => {
	rl.question('Enter a min and max separated with a space: ', (answer) => {
		askGuess(
			numOfTries,
			randomInRange(...answer.split(' ').map((x) => Number(x)))
		);
	});
};

let checkGuess = (num, secretNumber) => {
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
let askLimit = () => {
	rl.question('How many tries do you want? ', (answer) => {
		askRange(Number(answer));
	});
};

let askGuess = (numAttempts, secretNumber) => {
	console.log('NumAttempts' + numAttempts);

	rl.question('Enter A Guess: ', (answer) => {
		numAttempts--;
		if (!numAttempts) {
			console.log('YOU LOSE');
			rl.close();
		} else if (!checkGuess(Number(answer), secretNumber)) askGuess(numAttempts, secretNumber);
		else rl.close();
	});
};

askLimit();
