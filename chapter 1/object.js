
// An object is a collection of key-value pairs
// use the dot notation (.) or array-like notation ([]) to access the property of an object
// use the delete operator to remove a properties from an object
// use in  operator to check if a property exist in an object.

let empty ={
    // empty
}

let person = {
    firstName : 'John',
    lastName : 'Doe',
};
// using . notation
console.log(person.firstName);
console.log(person.lastName);

console.log(person['firstName']);
console.log(person['lastName']);
console.log(person);
person.firstName = 'Kindo';
console.log('firstName' in person);
delete person.lastName;

console.log(person);