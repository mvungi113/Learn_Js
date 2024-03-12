//set Time out
const message = () => {

    console.log('Hello, world');
}
const setTime =setTimeout(message, 5000);
console.log(setTime);

//set interval

const messageinterVal = () => {
    console.log('hello, world');

}
const interVal = setInterval(messageinterVal, 1000);
// clearInterval(interVal)