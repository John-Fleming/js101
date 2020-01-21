console.log('combo');

// Challenge #1
// Create a function called evenOdd that takes an integer as an argument and
// returns "Even" for even numbers or "Odd" for odd numbers.

const evenOdd = (num) => {
    if (num % 2 === 0) {
        console.log('Even');
    } else {
        console.log('Odd');
    }
};

evenOdd(14); // prints Even

// Challenge #2
// given a number, find its opposite. 2 = -2

const oppositeNumber = (num) => {
    if (Math.abs(num) > 0) {
        return 0 - num;
    } else {
        return 0 + num;
    }
};

console.log(oppositeNumber(-14));
console.log(oppositeNumber(27));

// Challenge #3
// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
// Console true if the given string is a palindrome. Otherwise, console false.

const isPalindrome = (str) => {
    if (str.split('').reverse().join('') === str) {
        console.log('true');
    } else {
        console.log('false');
    }
};

isPalindrome('tacocat');
isPalindrome('human');

// Challenge #4
// Lawrence the wide mouth frog is particularly interested in the eating habits of other creatures.
// He just can't stop asking the creatures he encounters what they like to eat. But then he meet the alligator who just LOVES to eat the lips of wide-mouthed frogs!
// Given a string with the animal name, that Lawrence encounters, output small if the animal is an alligator (case insensitive) otherwise return wide.

const isAlligator = (animal) => {
    if (animal == 'alligator') {
        return 'small';
    } else {
        return 'wide';
    }
};

console.log(isAlligator('pig'));
console.log(isAlligator('alligator'));