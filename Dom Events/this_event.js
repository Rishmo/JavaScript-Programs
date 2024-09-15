let btn =  document.querySelector("button");
let btns = document.querySelector("button");
let h1 =  document.querySelector("h1");
let p =  document.querySelector("p");

function changeColor() {
    console.dir(this.innerText());
    this.style.backgroundColor = "blue";
}

btn.addEventListener("click", changeColor);
h1.addEventListener("click", changeColor);
p.addEventListener("click", changeColor);

btns.addEventListener("click", function() {
    console.dir(this.innerText);
    this.style.backgroundColor = "blue";
});

