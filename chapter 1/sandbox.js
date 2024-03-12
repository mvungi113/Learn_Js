// alert("Hello world");

// console.log(1);
// console.log(2);

let age = 25;  // 
let year =2024;
console.log(age, year);
age = 30;
console.log(age);


const points = 100;
// points = 200;// this will return error
console.log(points);


var score =45;
console.log(score);

// variable can't start with numbers and reserved keyword

// number 1, 2,3, 4.3
//  String 'Hello ' "Hello world"
//  Boolean true/false
// null  Explicity set a variabe with no value
//  Undefined For variables that have not yet been defined
//  Object Complex data structure -- arrays, dates, literals etc
// Symbol Used with objects



// String


console.log('devs@gmail.com');
let email = 'kindo@kindo.net';
console.log(email);


// String Concatenation
firstName = 'Haji';
LastName = 'Kindo';
let fullName = firstName + " " + LastName;
console.log(fullName);

console.log(fullName[0]);

// string length
console.log(fullName.length);

// String methods
console.log(fullName.toUpperCase());

let result = fullName.toLowerCase();

console.log(result, fullName);


let index = email.indexOf('@'); //argumetns or parameters
console.log(index);



// common string methods

let email1 = 'kindo@email.net';
// let emailRes = email1.lastIndexOf('n');
// console.log(emailRes);

// let emailn = 'kindo@email.net';
// let em = emailn.slice(2, 5);
// console.log(em)

// let res = email1.substr(3,5);
let res = email1.replace('n', 'w')
console.log(res);



let radius = 10;
const pi = 3.14;

console.log(radius, pi);
console.log(10/2);
let ans = pi * radius *2;
console.log(ans);


// NaN not a number
console.log(6/'hello');

// template string
const title = 'Best Fruits';
const author = 'Mario';
const likes = 30;


// concateation way
let blog = 'This blog called' + title + 'by'+ author + 'has' + likes+ 'likes';
console.log(blog);

// Create template string 
let blogTemp = `The blog called ${title} by ${author} has ${likes} Likes`;
console.log(blogTemp);


// create  html template

let html = `
<h2>${title}</h2>
 <p>By ${author}</p>
  <span>This blog has ${likes} Likes</span>
`;
console.log(html);
