//loops are used to execute a block of code repeatedly as long as a specified condition is true

//examples of loops: for loop, while loop, for each and do-while loop

//for loop
//is used to loop thru a block of code until a condition is met 
//syntax: initialization, condition and increment/decrement. ie for(ini,cond,incre/decre)


for (let i = 0; i <= 10; i++){
    console.log(i);
}

//explanation of (++) basically any value plus 1 (+1)
let num = 5;
let num2;
num2 = num++;  
console.log(num2);

//pre-increment and post-increment

for (let i =1; i<= 10; i++){
    console.log(i);
    
}

let word = "hello"
for (let i = 1; i <= word.length; i++ ){
    console.log(i);
} //this counts from 1 to the number of characters in a string. ie- hello is 5 letters long
//so it counts from 1 to the length of hello(the string).

//multiplication table
for (let i = 2; i <=2; i++){
    for (let j = 1; j <= 12; j++){
        console.log(`${i} x ${j} = ${i*j}`);
    }
}
//exponential table
for (let i = 2; i <=2; i++){
    for (let j = 1; j <= 12; j++){
        console.log(`${i} ^ ${j} = ${i**j}`);
    }
}

//for each example to loop thru an arrays

let cars =['mercedes', 'tesla', 'ford', 'bmw'];

cars.forEach((car,index) =>{   //using an arrow function
    console.log(`${index + 1}: ${car}`);
})

//map example to loop thru arrays

cars.map((car,index) =>{
    console.log(`${index + 1}: ${car}`);
})

//example of a decrement
for (let i = 10; i >= 1; i--) {
    let result = 100 / i;
    console.log(`100 / ${i} = ${result}`);
}
