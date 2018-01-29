// Create secret number
var secretNumber = 4;

//Ask User
var guess = Number(prompt("Guess a Number"));


if (guess === secretNumber){
alert("You got it Right!");	
} else if (guess > secretNumber){
alert("Number is too high. Guess Again.")
}
else{
alert("Number is too low. Guess Again.")
}
