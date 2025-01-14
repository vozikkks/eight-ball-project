//generate a random race number between 0 and 999
let raceNumber = Math.floor(Math.random() * 1000);

const registeredEarly = false; //whether the runner registered early
const runnersAge = 14; //runner's age

//add 1000 to the race number if the runner is an adult who registered early
if (runnersAge >= 18 && registeredEarly) {
    raceNumber += 1000;
}

//determine the race time and log the appropriate message
if (runnersAge >= 18) {
    if (registeredEarly) {
        console.log(`You will race at 9:30 am. Your race number is ${raceNumber}.`);
    } else {
        console.log(`You will race at 11:30 am. Your race number is ${raceNumber}.`);
    }
} else if (runnersAge < 18) {
    console.log(`You will race at 12:30 pm. Your race number is ${raceNumber}.`);
} else {
    console.log('Please go to the registration desk.');
}