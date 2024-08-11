console.log("Question 1");
let arr =  [1, 2, 3, 4, 5, 6, 2, 3];
console.log("arr= ", arr);
let num = 2;

for(let i=0; i<arr.length; i++){
    if(arr[i] == num){
        arr.splice(i, 1);
    }
}
console.log("After deletion of number 2: ", arr);

console.log(" ");


console.log("Question 2");

let number = 287152;
console.log("number= ", number);
let count =0;

let copy = number;
while(copy >0){
    count++;
    copy=Math.floor(copy/10);
}
console.log("count=" ,count);

console.log(" ");


console.log("Question 3");

console.log(number);
let sum=0;
copy=number;
while(copy>0){
    digit=copy%10;
    sum+=digit;
    copy = Math.floor(copy/10);
}
console.log(sum);


console.log(" ");
console.log("Question 4");

let n=5;
let fact=1;
for(let i=1;i<=n;i++){
    fact*=i;
}
console.log(`factorial of ${n} is ${fact}`);


console.log(" ");
console.log("Question 5, Greatest Number");

let array= [2, 5, 10, 4, 2, 7, 1, 9];
console.log(array);
let largest = 0;

for(let i=0; i<=array.length; i++){
    if(largest < array[i]){
        largest = array[i];
    }
}
console.log(`Largest number= ${largest}`);