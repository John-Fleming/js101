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