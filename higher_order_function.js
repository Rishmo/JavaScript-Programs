console.log("Example of Higher Order Function");

function multipleGreet(func, n){
    for(let i=0; i<n; i++){
        func();
    }
}

let greet = function(){
    console.log("Hello");
}

multipleGreet(greet, 2);

console.log("Second method");

let odd = function(n){
    console.log(!(n%2 == 0));
}

let even = function(n){
    console.log(n%2 == 0);
}

function oddOrEven(request){
     
}