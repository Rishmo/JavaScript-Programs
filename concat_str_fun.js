console.log("Concatting Strings");

let str = ["Hello"," ", "my"," ","name"," ","is"," ","Moon"]
console.log(str);

function concat(str){
    let result=" ";
    for(let i=0; i<str.length; i++){
        result+= str[i]
    }
    return result;
}
concat(str);