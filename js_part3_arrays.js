console.log("Question 1");

let arr=[7,9,0,-2];
let n=3;
let ans=arr.slice(0,n);
console.log(ans);


console.log("Question 2");
//let ans2=arr.slice(1,n+1);
let ans2=arr.slice(arr.length-n);
console.log(ans2);
console.log(arr.length);


console.log("Question 3");
let str=prompt("Enter a string");
console.log(str);
if(str.length==0)
    console.log("String is Empty");
else
    console.log("String is not empty");


console.log("Question 4");
let indx=3;
if(str[indx]==str[indx].toLowerCase()){
    console.log("Character is Lowercase")
}
else{
    console.log("Character in UpperCase");
}


console.log("Question 5");
console.log(str)
console.log(`original string= ${str}`);
console.log(`String without space = ${str.trim()}`);


console.log("Question 6");
console.log(arr);
let item=8;
if(arr.indexOf(item) != -1)
    console.log("Element present in the array");
else
    console.log("Element not present");