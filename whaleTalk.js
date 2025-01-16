let input = 'whale talk';
let vowels = ['a', 'e', 'i', 'o', 'u'];
let resultArray = [];

//loop through each character of the input string
for (let i = 0; i < input.length; i++) {
    //double 'e' and 'u' if found
    if (input[i] === 'e' || input[i] === 'u') {
        resultArray.push(input[i], input[i]);
    }
    //check if the character is a vowel
    for (let j = 0; j < vowels.length; j++) {
        if (input[i] === vowels[j]) {
            resultArray.push(input[i]);
        }
    }
}

//convert the result array into uppercase string
let resultString = resultArray.join('').toUpperCase();
console.log(resultString);