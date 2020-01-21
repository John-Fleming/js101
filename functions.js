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