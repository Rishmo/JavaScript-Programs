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

console.log("Question 3: ");
let str=["moon","ravi"];
console.log("Strings are: ",str);
console.log(str.map((strn) => strn.toUpperCase()));

console.log("Question 4: ");
let doubleAndReturnArgs = (ar, ...args) => [
    ...ar,
    ...args.map((v) => v*2),
];

console.log(doubleAndReturnArgs([1,2,3],4,5));
console.log(doubleAndReturnArgs([1],2,3,4,5));

console.log("Question 5: ");
let mergeObjects = (obj1, obj2) =>({ ...obj1, ...obj2});
mergeObjects({ a:1, b:2}, {c:3, d:4});