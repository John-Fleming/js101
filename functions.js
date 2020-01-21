console.log('hi');

const nuggetizer = (animal) => {
    const output = `processed ${animal}`;
    // const output = 'processed' + animal; ---> don't use this method
    return output;
};

console.log(nuggetizer('chicken'));
console.log(nuggetizer('pig'));
console.log(nuggetizer('cow'));
console.log(nuggetizer('fish'));


const dogBreed = (dog) => {
    const output = `My favorite dog breed is ${dog}`;
    return output;
};

console.log(dogBreed('lab'));
console.log(dogBreed('actually a cat'));

// challenge 1 - write a function that adds 42 to an inputted number
const fortyTwo = (number) => {
    const output = number + 42;
    return output;
};

console.log(fortyTwo(50));
console.log(fortyTwo(100));

// challenge 2 - write a function that takes your birth year as an input and tells you how old you will be in 2099
const oldAge = (birthYear) => {
    const age = 2099 - birthYear;
    const output = `You will be ${age} in 2099`;
    return output;
};

console.log(oldAge(1991));
console.log(oldAge(2000));