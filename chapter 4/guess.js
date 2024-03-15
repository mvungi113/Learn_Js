let correctNum = Math.ceil(Math.random() * 10);

let guess =0;
do{
    guess = prompt('Guess a number between 1 and 10');
    if(guess == correctNum){
        alert('You guessed the correct number!');
    }else{
        alert('Sorry, that wa incorrect. Try again.');
    }
}while(guess != correctNum);