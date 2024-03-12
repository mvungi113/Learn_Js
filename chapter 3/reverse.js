// reverse()

const numbers = [
    13,10,15,12,11,14
];
console.log(numbers)
numbers.reverse();
console.log(numbers);


// reduce()
const reduceMethod = numbers.reduce((a,b) => a+b);
console.log(reduceMethod);

const reduces = numbers.reduce((a,b) => a-b);
console.log(reduces);
// you can try * 

// concatenate
const diko = ['ugali', 'wali', 'pilau', 'kiepe', 'ndizi'];
const yourDiko = diko.reduce((a , b) => a + ', ' + b);
console.log(yourDiko);