console.log("hello world")

//variable declaration

// variables are containers used to store data (like div's)

//var, let and const are the only variable keywords in js

//camel case
var firstName = "chairman"

//pascal case
var LastName = "okoro"

// snake case
var MIDDLE_NAME = "chigo"



let age = 20;

const pi = 142;

console.log(age);

console.log(pi);

console.log(firstName)

// data types in js----- primitive and non-primitive

//primitive data types:
// {string(characters,names,paragraphs...etc), boulean(true or false),
// number(number- with a max value), undefined, symbol, null,
//  bigint(number-that goes infinite) }
// quotation marks make a number a string value instead of numbers

//non-prmitive data types:
//object, array, function

//object
let person = {
    firstName: "micheal",
    age: 20,
    isMarried: true,
}
console.log(person.age);

console.log(person.isMarried);



//array
let fruits = ["apple", "banana", "mango", "orange"]
console.log(fruits[2]);
//the index '2' is mango.... cos in logging it, each value is n-1 
// in other words, the first element starts from '0'

//an array can contan anything; strings, numbers, objects, other arrays, etc.

//an array of objects
let attendees = [
    {
        id: 1,
        name: 'bright',
        complexion: 'dark',
    },
    {
        id: 2,
        name: 'chizi',
        complexion: 'handsome',
    },
]
console.log(attendees);
console.log(attendees[1].name);



//function
//function declaration: after declaring a function, you need to call the function
//two ways of declaring func: function declaration & arrow functions
//functions accept parameters

function addTwoNumbers() {
    let num1 = 5;
    let num2 = 10;
    console.log(num1 + num2);
}
addTwoNumbers();  //calling the function

function subtractTwoNumbers(a, b){
    console.log(a - b);
}

subtractTwoNumbers(10, 5); //calling the function

function sayHello(name){
    console.log(`hello ${name}`);
}

sayHello('chizi'); //calling the function



function positionAxis(x, y) {
    console.log(`x= ${x}, y= ${y}`);
}
positionAxis(5-2, 7+2);

//arrow functions
const calculate = () => {
    console.log('hello');
};
calculate();


//assignment: a function to convert temp

function thermometer(n, f) {
console.log(`degrees to farenheit= ${n} - ${(n*9/5)+32}, farenheit F= ${(f-32)*5/9}`);   
}

thermometer(9, 350)

//simpler way
function celciusToFarenheirt(n) {
    // 'n' is the temp in celcius to be converted to fahrenheit 
    console.log((n * 9) / 5+ 32);
}
celciusToFarenheirt();//value in brackets