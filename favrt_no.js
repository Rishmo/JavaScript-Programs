const favrt_No= 8;
let guess= prompt("Guess my Favourite Number :)");

while( ( guess !=favrt_No) && (guess != "quit"))
    guess= prompt("wrong guess!!! Please try again :)");

if(guess==favrt_No)
    console.log("Congrats! You guessed :)");

else
    console.log("You Quit");
