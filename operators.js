// an operator is used to perform operations on a variable
//there are three operators in js: arithemetic, comparison, logical

//arithemetic operators examples: +, -, /, *
let sum1 = 5;
let sum2 = 10;
let sum3 = 2;

console.log(sum1 + sum2);
console.log(sum1 - sum2);
console.log(sum2 - sum1);

console.log(sum1 % sum3); //the '%' symbol is used to get the reminder of a maths equation. 

let sentence = 'the man is'
let sentence2 = ' wealthy'

console.log(sentence + sentence2);
let age = 10;
console.log('the boy is' + age + 'years old');
console.log(`the boy is ${age} years old`); //string template literals 
// (note tthe tick symbol instead of quotation marks)

// comparison operators examples: ==(loose) ===(strict) > < !==('!' means not equal to) !===

let num1 = 5;
let num2 = '5';

console.log(num1 == num2);// the lose == only compares the values.
console.log(num1 === num2);//the strict === compares both the values and the variable types.

let no1 = 10;
let no2 = '10';

//lose "not equal to '!=' "
//strict "not equat to '!==' "
console.log(no1 != no2);// the lose != only compares the values.
console.log(no1 !== no2);//the strict !== compares both the values and the variable types.


// logical operators examples: 
// && - logical AND
// || - logical OR
// ! - logical NOT