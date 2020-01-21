console.log('arrays');

const junkDrawer = ['keys', 'wallet', true, 2, {name: 'John'}, [1, 2, 3, 4]];

console.log(junkDrawer[2]); // logs true
junkDrawer.push('fluffy');
console.log(junkDrawer[junkDrawer.length-1]); // prints the value of the last item of the array


const valuePrinter = (array, indexValue) => {
    return array[indexValue];
};

console.log(valuePrinter([1, 2, 3, 4, 5], 2)); // prints 3
console.log(valuePrinter(['cat', 'dog', 'bear', 'turtle', 'fish'], 3)); // prints turtle
