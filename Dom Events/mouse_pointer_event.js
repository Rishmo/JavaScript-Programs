// let btns = document.querySelector("button");
// console.dir(btns);

// btns.onclick = function(){
//     console.log("button was clicked");
//     //  alert("button was clicked");
// };

let btns = document.querySelectorAll("button");
for(bttn of btns){
    bttn.onclick = SayHello;
    bttn.onmouseenter = function(){
        console.log("You entered a button");
    };
    console.dir(bttn);
}
function SayHello(){
    alert("Hello!");
}