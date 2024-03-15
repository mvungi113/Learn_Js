

let numbers = [1, 2,3,4,5,6];

//map
let doubled = numbers.map((number) => number * 2);
console.log(doubled);


//for loop

for(let i = 0; i< numbers.length; i++){
    numbers[i] = numbers[i] * 2;
}
console.log(numbers);

// 
let num = [1,2,3,4,5,6];
let Times =[];
for(let i=0; i<num.length; i++){
    Times.push(num[i] * 2) ;
}

console.log(Times);

// continue keyword
for(let i=1; i<=10; i++){
    if(i==5){
        continue;
    }
    console.log(i);
}

// break keyword
for(let i=1; i<=10; i++){
    if(i == 5){
        break;
    }
    console.log(i);
}


// for .... in
let names = ['Kindo', 'Jane', 'Ada' ];

for(let index in names){
    console.log(names[index]);
}
// for .... of
for(let name of names){
    console.log(name);
}


