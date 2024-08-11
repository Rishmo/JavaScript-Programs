console.log("Guessing Number");

const max=prompt("Enter the maximum number: ");
//console.log(max);

const random = Math.floor(Math.random() * max) +1;
let guess=prompt("guess the number");

while(true){
    if(guess == "quit"){
        console.log("User Quit");
        break;
    }

    if(guess == max){
        console.log("Congratulation! You won! random number was", random);
        break;
    }

    else if(guess < max){
        console.log("Your guess was small. Please try again");
    }

    else{
        guess=prompt("Your guess is large. Please try again :)");
    }
} 