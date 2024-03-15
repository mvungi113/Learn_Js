const myCar ={
    carColor : 'red',
    carmake : 'Tesla',
    carModel : 'Cybertruck',
    carMileage : 30,

}

console.log(myCar.carColor);

const myFavBook = {
    title: "The Hobbit",
    title: "The Lord of the Rings"
}
console.log(myFavBook.title);

// property names must be strings


//add new property
const student ={
    name : 'Kachi',
    age: 17,
}

student.gender = 'Male';
student['grade'] = 12;

console.log(student);
console.log(student.age);
console.log(student.grade);

student.school = 'MUST';
console.log(student);
delete student.school;
console.log(student);


console.log(student.toString());

console.log(JSON.stringify(student));

