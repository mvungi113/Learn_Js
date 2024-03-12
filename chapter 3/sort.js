
const numbers = [5,3,7,9,1,6,8,4,2,0];
console.log(numbers);
numbers.sort();
console.log(numbers);

// we can also sort array of string
const Colors = [
    'red',
    'green',
    'grey',
    'black',
    'orange'
];
console.log(Colors);
Colors.sort();
console.log(Colors);

const Years = [
    1990,2003,1989,1865,2023,2020,
];
Years.sort((a, b)=> b - a);
console.log(Years);
Years.sort((a,b) => a-b);
console.log(Years);
