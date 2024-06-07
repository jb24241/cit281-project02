/*
    CIT 281 Project 2
    Name: Collin Morrison
*/

// Function expression to generate a random letter
const getRandomLetter = function() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    return alphabet[Math.floor(Math.random() * alphabet.length)];
};

// Function expression to generate a random string of a given length
const getRandomString = function(minLength, maxLength) {
    const length = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;
    let result = '';
    for (let i = 0; i < length; i++) {
        result += getRandomLetter();
    }
    return result;
};

// Function expression to return a sorted version of a string
const getSortedString = function(string) {
    return string.split('').sort().join('');
};

// Example usage:
console.log("Random letter:", getRandomLetter());
console.log("Random string:", getRandomString(10, 20));
console.log("Sorted string:", getSortedString(getRandomString(10, 20)));
