// let btn =  document.querySelector("button");

// btn.addEventListener("click", function(event) {
//     console.log(event);
//     console.log("button clicked");
    
// });

let inp =  document.querySelector("input");

inp.addEventListener("keydown", function(event){

    console.log("Key was pressed");
    console.log("Key= ",event.key);
    console.log("code = ",event.code);

});

