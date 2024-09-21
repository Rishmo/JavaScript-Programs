let btn = document.querySelector("button");
let inp = document.querySelector("input");
let ul = document.querySelector("ul");

btn.addEventListener("click", function(){
    let item = document.createElement("li"); // create
    item.innerText = inp.value; //innerText add
    ul.appendChild(item); // add as a child element

    let delBtn = document.createElement("button"); 
    delBtn.innerText ="delete";
    delBtn.classList.add("delete");

    item.appendChild(delBtn);

    console.log(inp.value); //for input value
    inp.value=""; // Reset to Empty 
});

let delBtns = document.querySelectorAll(".delete"); // not applied for new element only existing ele will be deleted
for(delBtn of delBtns) {
    delBtn.addEventListener("click", function(){
        let par = this.parentElement;
        console.log(par);
        par.remove();
        console.log("Element deleted");
    });
}