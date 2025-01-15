const userName = '';
console.log(userName ? `Hello, ${userName}!` : 'Hello!');

const userQuestion = 'Will it rain today?';
console.log(userQuestion); //log user´s question

const randomNumber = Math.floor(Math.random() * 8); //generate random number from 0 to 7 to select a response
let eightBall;

//determine the response based on random number
switch (randomNumber) {
    case 0:
        eightBall = 'Signs point to yes';
        break;
    case 1:
        eightBall = 'It is certain';
        break;
    case 2:
        eightBall = 'It is decidedly so';
        break;
    case 3:
        eightBall = 'Reply hazy try again';
        break;
    case 4:
        eightBall = 'Cannot predict now';
        break;
    case 5:
        eightBall = 'Do not count on it';
        break;
    case 6:
        eightBall = 'My sources say no';
        break;
    case 7:
        eightBall = 'Outlook not so good';
        break;
    default:
        //default value to cover error case
        eightBall = 'Error: please try one more time';
}

console.log(`The eight ball says: ${eightBall}`);