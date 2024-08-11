arr=[1,3,2,11,5,4,9];
// let max=-1;
// for(let i=0; i<arr.length; i++){
//     if(max<arr[i])
//         max=arr[i];
// }

let max=arr.reduce((max,el) =>{
        if(max<el)
            return el;
        else
            return max;
});
console.log(max);