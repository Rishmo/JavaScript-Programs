let btns = document.querySelectorAll("button");

for(bttn of btns){
    bttn.addEventListener("click", SayHello);
    bttn.addEventListener("click", sayName);
}
function SayHello(){
    alert("Hello!");
}
function sayName(){
    alert("Moon");
}