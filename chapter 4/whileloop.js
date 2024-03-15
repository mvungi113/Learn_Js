let dieRoll = 0;
while(dieRoll !==6){
    dieRoll = Math.ceil(Math.random() *6);
    console.log(`Your rolled a ${dieRoll}`);
}
// do while
let roll =0;
do{
    roll = Math.ceil(Math.random() * 6);
    console.log(`You rolled a ${roll}`);
}while(roll !== 6);