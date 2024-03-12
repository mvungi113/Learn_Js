
// create empty arrays
const myArray = new Array();
const MyArray2 = [];


const favFruits= new Array(
    'Apple',
    'Mango',
    'Banana'
);


const FavFruits = ['Banana', 'Mango', 'Apple'];


// accessing and modifying elements of the array
console.log(favFruits);
console.log(FavFruits[2]);

FavFruits[0]= 'orange';


// array length\
console.log(FavFruits.length);

// Array methods
// push() methods adds one or more elements to the end of an array
FavFruits.push('pineapple', 'strawberry');
console.log(FavFruits);
// pop() methods remove the last element from an array
FavFruits.pop();
FavFruits.shift()// remove first element
FavFruits.unshift('fruit1', 'fruit2'); // add element to the front of the array

console.log(FavFruits.indexOf('Mango')); // find the index of the occurrence of an element

// slice() method is used to extract a portion of an array
const FavFruitsSlice = FavFruits.slice(0, 2);
FavFruits.slice(0,1);
console.log(FavFruits);
console.log(FavFruitsSlice);

// splice() method changes the contents of an array by removing or replacing existing elements

FavFruits.splice(0,2,  'cherry', 'avocado');
console.log(FavFruits)
// join() method joins all elements of an array into a string.
const Matunda = FavFruits.join();
console.log(Matunda);

// reverses the order of the elements in an array
FavFruits.reverse();
console.log(FavFruits);
