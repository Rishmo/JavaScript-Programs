let button = document.createElement("button");
let input = document.createElement("input");
button.innerText = "Click me";
document.querySelector("body").append(button);
document.querySelector("body").append(input);

button.setAttribute("id","btn");
input.setAttribute("placeholde", "username");

let btn = document.querySelector('#btn');
btn.classList.add("btnStyle");

let h1 = document.createElement("h1");
h1.innerHTML = "<u>DOM Practice </u>";
document.querySelector("body").append(h1);

let p = document.createElement("p");
p.innerHTML = "<b> Moon </b> Practice Question";
document.querySelector("body").append(p);