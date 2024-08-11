console.log("forEach method");

let arr=[1,2,3,4,5];

// arrow function; 
console.log("Type1");
arr.forEach((el) =>{
    console.log(el);
});

console.log("Type2");
arr.forEach(function(el){
    console.log(el);
});

console.log("Type3");
let print=function(el){
    console.log(el)
};
arr.forEach(print);

// for object

console.log("Type4");
let array=[
    {
        name:"Moon",
        marks: 90
    },

    {
        name:"Ravi",
        marks: 95
    },
];

array.forEach((student) =>{
    console.log(student.marks);
});

console.log("");
console.log("map method");

let double=arr.map((el) =>{
    return el*2;
});

let ar=[
    {
        name:"Moon",
        marks: 90
    },

    {
        name:"Ravi",
        marks: 95
    },
];

let gpa=ar.map((el) => {
    return el.marks/10;
});

console.log("filter");
let nums=[1,2,3,4,56,7,8,6,0]
let ans=nums.filter((el) =>{
    return el % 2==0; //even -> true, odd-> false
});

console.log("every function");
[2,4,6].every((el) => el%2 == 0);

console.log("some function");
[2,4,6,3].every((el) => el%2 == 0);

console.log("Reduce function function");
[2,4,6,3].reduce((res, el) => (res+el));