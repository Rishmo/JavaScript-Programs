console.log("Question 1: ");
let num=[1,2,3,4];
let sq=num.map((n) => n * n);
console.log(sq);

let sum=sq.reduce((res,el) => res + el);
console.log("sum =" ,sum);

let avg= sum/num.length;
console.log("Average= ",avg);

console.log("Question 2: ");
let arr= [1,3,4,-2,-4];
console.log("Number is: ",arr);
console.log(arr.map((no) => no + 5));