const readline = require('readline');

// Initialize readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

console.log('hi');

const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'snake') {
        return userInput;
    } else {
        console.log('Please start the game again. Choose rock, paper, scissors, or try a sneaky cheat code.');
        return null;
    }
};

const getComputerChoice = () => {
    const generatedNumber = Math.floor(Math.random() * 3);
    switch (generatedNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
        default:
            return 'something went wrong';
    }
};

const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === 'snake') {
        return 'You unleashed the secret cheat code "snake"! You win automatically 🐍';
    }
    if (userChoice === computerChoice) {
        return 'The game was a tie.';
    } else if (userChoice === 'rock') {
        return computerChoice === 'paper' ? 'Computer won' : 'User won';
    } else if (userChoice === 'paper') {
        return computerChoice === 'scissors' ? 'Computer won' : 'User won';
    } else if (userChoice === 'scissors') {
        return computerChoice === 'rock' ? 'Computer won' : 'User won';
    }
};

const playGame = () => {
    rl.question('Enter rock, paper, scissors, or try a sneaky cheat code: ', (input) => {
        const userChoice = getUserChoice(input.trim());
        if (!userChoice) {
            rl.close(); // Close the interface if invalid input
            return;
        }
        const computerChoice = getComputerChoice();
        console.log(`User choice: ${userChoice}`);
        console.log(`Computer choice: ${computerChoice}`);
        console.log(determineWinner(userChoice, computerChoice));
        rl.close(); // Close the interface when done
    });
};

playGame();