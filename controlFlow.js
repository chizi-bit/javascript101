//control flow determines the direction your code takes whether a 
// certain block should run or be skipped based oon the condition passed.

// if and else statements
//used to perform actions based on certain -conditions-
let age = 19;
if(age < 18){
    console.log("you are not of age");   
}
else{
    console.log("welcome");
}


let firstName = "Nosa";
if(firstName === ""){
    console.log("Enter a valid Username");
}
else{
    console.log(`Hello ${firstName}`);
}

let score = 47;

if(score >= 70) {
    console.log("grade A");
    
}
else if(score >=60 && score <70) {
    console.log('grade B');
    
}
else if (score >=50 && score <60 ){
    console.log('grade c');
}
else{
    console.log('F');
    
}



//switch statements
//used to perform actions based on certain -values-

let day = '';

switch (day) {
    case 'monday':
        console.log('today is monday');
        break;
    case 'tuesday':
        console.log('today is tuesday');
        break;
    case 'wednesday':
        console.log('today is wednesday');
        break;
    case 'thursday':
        console.log('today is thursday');
        break;
    case 'friday':
        console.log('today is friday');
        break;
    case 'saturday':
        console.log('today is saturday');
        break;
    case 'sunday':
        console.log('today is sunday');
        break;

    default:
        console.log('Today is free');
        break;
}

// let day = "saturday";

// switch (day) {
//     case "Monday":
//         console.log("Start of the workweek!");
//         break;
//     case "Friday":
//         console.log("Weekend is near!");
//         break;
//     case "Saturday":
//     case "Sunday":
//         console.log("It's the weekend!");
//         break;
//     default:
//         console.log("Just another regular day.");
// }