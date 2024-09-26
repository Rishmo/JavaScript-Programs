// Qs1. Try out the following events in Event Listener on your own :
// - mouseout
// - keypress
// - Scroll
// - load

let input =  document.querySelector("input");

inp.addEventListener("mouseout", function(event){ // keypress, scroll, load events

    console.log("mouseout event occured");

});


// Qs2. Create a button on the page using JavaScript. Add an event listener to the button that changes the button’s color to green when it is clicked

let btn = document.querySelector("button");
btn.addEventListener("click", function(){
    console.log("button is clicked");
    btn.style.backgroundColor = "green";
});

// Qs3. Create an input element on the page with a placeholder ”enter your name” and an H2 heading on the page inside HTML.
// The purpose of this input element is to enter a user’s name so it should only input letters from a-z, A-Z and space (all other characters should not be detected).
// Whenever the user inputs their name, their input should be dynamically visible inside the heading


let inp = document.querySelector("#name");
let h2 = document.querySelector("h2");

inp.addEventListener("input", function(){
    console.log(inp.value);
    h2.innerText = inp.value;
});