// function is a set of statements designed to perform a particular task

// anonymous function
(function () {
    return console.log("Hello ! This is anonymous function");
})();


const alertUser = function (){
    return console.log("'I'm anonymous, but with a name!");
}
alertUser();

function myFunction(value){
    return value * 2;
}
console.log(myFunction(10));

function squareNumber(value){
    return value * value;
}

console.log(squareNumber(2));

// by using arrow function
const squareOfNumber = (value) => value*value;
console.log(squareOfNumber(2));

// you can also write arrow function with curly brace
const square =(value) =>{
    return value*value;
};
console.log(square(2));



// js String Methods
let message = "Hello World ";
console.log(message.toLowerCase()); // convert the string to lowercase
console.log(message.toLocaleUpperCase()); //convert the string to uppercase
console.log(message.trim()); //removes white spaces


// Js  math function
//  Math.round() this method returns the value of a number rounded to the nearest integer. 
console.log(Math.round(5.7)); //6
console.log(Math.ceil(5.3)); //6 if the number is integer the method will return the same number
console.log(Math.floor(4.5)); //4
console.log(Math.random());
console.log( 'Max', Math.max(1,2,3,4,5),'Min:', Math.min(1,2,3,4,5));
