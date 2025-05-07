//global and local variables

//global variables
// a global variable is declared outside a function or code---eg

let firstName = "Emmanuel"

function callName() {
    console.log(firstName);
}

callName();

if (firstName) {
    console.log(true);
    
}
callName();
//'firstName' can be gotten anywhere in the code
//eg2

let num1 =5;
let num2 = 10;

function cal(){

}
const calculate = () => {
    let total = num1 + num2;
    console.log(total);
}
calculate();
//we called both num1 and num2 into this code.

//local variables

function school() {
    let mySchool = 'nepsix college'
    console.log(`the name of my school is ${mySchool}`)
}
// console.log(mySchool);      // this would not give any value cuz its called outside theb function scope

school(); //the right thing to be declared.


const color = () => {
    let myBestColor = 'red'
    console.log(myBestColor);
}
color(); //calling the function.

//assignment that accepts a value and checks if its a prime number or not.
// function primeNumber(num) {
//     if (num < 2) {
//         return false;
//     }
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }