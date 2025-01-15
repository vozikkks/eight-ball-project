let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

//remove the last element of the array
secretMessage.pop();

//add elements to the end of array
secretMessage.push('to');
secretMessage.push('Program');

//change word by accessing the index
secretMessage[secretMessage.indexOf('easily')] = 'right';

//remove the first element of the array
secretMessage.shift();

//add element to the beginning of array
secretMessage.unshift('Programming');

//count the amount of elements to remove, remove and replace with another one
let elementsToRemove = ['get', 'right', 'the', 'first', 'time,'];
let countToRemove = secretMessage.filter(word => elementsToRemove.includes(word)).length;
secretMessage.splice(secretMessage.indexOf('get'), countToRemove, 'know')

//replace commas with space and log
console.log(secretMessage.join(' '))