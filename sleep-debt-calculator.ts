//I don´t like this project already, as I know exactly what´s my sleep debt. Thanks to Whoop:/

const getSleepHours = (day) => {
    switch (day.toLowerCase()) {
        case 'monday':
            return 8;
        case 'tuesday':
            return 7;
        case 'wednesday':
            return 6;
        case 'thursday':
            return 5;
        case 'friday':
            return 9;
        case 'saturday':
            return 4;
        case 'sunday':
            return 8;
        default:
            return 0; //if the day is not valid, return 0, so it doesn´t affect the total sleep hours
    }
};

const getActualSleepHours = () => {
    return (
        getSleepHours('monday') +
        getSleepHours('tuesday') +
        getSleepHours('wednesday') +
        getSleepHours('thursday') +
        getSleepHours('friday') +
        getSleepHours('saturday') +
        getSleepHours('sunday')
    );
};

const getIdealSleepHours = () => {
    const idealHours = 9; //my preference only :)
    return idealHours * 7;
};

const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
    const difference = actualSleepHours - idealSleepHours;

    if (actualSleepHours === idealSleepHours) {
        console.log('You have got the perfect amount of sleep this week!');
    } else if (actualSleepHours > idealSleepHours) {
        console.log(`You have got ${Math.abs(difference)} hours more sleep than needed this week.`);
    } else {
        console.log(`You should get some rest. You slept ${Math.abs(difference)} hours less than needed this week.`);
    }
};

// Call the function to calculate sleep debt
calculateSleepDebt();