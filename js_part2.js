console.log("Question 1");

let num=10;

if(num%10==0){
    console.log("good");
}

else{
    console.log("bad");
}


console.log("Question 2");

let user_name=prompt("Enter User name: ");
let age=prompt("Enter User age: ");
alert(`${user_name} is ${age} years old. `);


console.log("Question 3");

let quarter = 1;

switch(quarter){

    case 1: console.log("January, Feburary, March");
    break;

    case 2: console.log("April, May, June");
    break;

    case 3: console.log("July, August, September");
    break;

    case 3: console.log("October, November, December");
    break;

    default: console.log("NOT A QUARTER");
}


console.log("Question 6");

let n1=32;
let n2=47852;

if((n1%10) == (n2%10)){
    console.log("numbers have the same last digit which is", n1%10);
}
else{
    console.log("numbers don't have the same last digit which is");
}