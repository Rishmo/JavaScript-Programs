h1 = document.querySelector("h1");

// // tedious way
// setTimeout(() => {
//     h1.style.color = 'red';
// }, 1000);

// setTimeout(() => {
//     h1.style.color = 'blue';
// }, 2000);

// setTimeout(() => {
//     h1.style.color = 'green';
// }, 3000);


// // another way (bad way- only lst one will executr)

// function changeColor(color){
//     h1.style.color = color;
// }

// setTimeout(changeColor("purple"),1000);

// setTimeout(changeColor("orange"),2000);

// setTimeout(changeColor("lightgreen"),3000); // in this only this will execute


// // another way(again not a good way)

// function changeColor(color, delay){
//     setTimeout(() => {
//         h1.style.color = color;
//     }, delay);
// }

// changeColor("pink",1000);

// changeColor("brown",2000);

// changeColor("violet",3000);


// another Way (better way)

function changeColor(color, delay, nextColorChange){
    setTimeout(() => {
        h1.style.color = color;
        if(nextColorChange)
            nextColorChange();
    }, delay);
}
//nesting
changeColor("brown",1000,() => { 
    changeColor("blue",1000, () => {
        changeColor("purple",1000);
    }); 
});