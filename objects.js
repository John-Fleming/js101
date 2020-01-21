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


// OBJECTS

const expense = {
    dateCreated: '01/20/2020',
    location: 'Baja Burrito',
    cost: 12.57,
    isGood: true
}

// dot notation
console.log(expense.cost);

// bracket notation
console.log(expense['cost']);

const employee = {
    id: 8253,
    firstName: 'John',
    lastName: 'Fleming',
    company: 'TechnologyAdvice',
    jobTitle: 'Client Success Manager',
    yearsInJob: 1,
    isManager: false
};

// challenge - create function called statusMaker that takes in a single employee
// if first name starts with an "m" then add a key of status with a value of 'VIP'
// if it doesn't add a key of status with a value of 'peasant'
// return complete employee

const statusMaker = (employeeObject) => {
    if (employeeObject.firstName.startsWith('M') === true) {
        employeeObject.status = 'VIP';
    } else {
        employeeObject.status = 'peasant';
    }
    return employee;
}

console.log(statusMaker(employee));