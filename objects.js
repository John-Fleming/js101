console.log('objects');

// returns length of word
const wordLength = (word) => {
    return word.length;
};

console.log('num of letters', wordLength('cat')); // 3
console.log('num of letters', wordLength('monkeybutt')); // 10

// age check function
const ageCheck = (yourAge) => {
    if (yourAge < 21) {
        console.log('no drinks for you');
    } else {
        console.log('PARTY!!!!!');
    }
};

ageCheck(12); // return 'no drinks for you'
ageCheck(24); // return 'PARTY!!!!!'