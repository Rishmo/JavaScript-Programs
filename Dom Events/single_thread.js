//synchronous behaviour
let a= 4;
console.log(a);

let b= 5;
console.log(b);

let c=(a +b);
console.log(c);



//Asynchronous behaviour of js with the help of browser, callstacks, setTimeout()

setTimeout(() => {
        console.log("after two sec; 1st Timeout"); //handle by browser
}, 2000);

setTimeout(() => {
    console.log("after two sec; 2nd Timeout"); //handle by browser
}, 2000);


console.log("Hello.....")