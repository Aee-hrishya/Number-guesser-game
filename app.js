/**
 Game functions
 -Player must guess a number between a min and max
 -Player gets a certain number of guesses
 -Notify the player of guesses remaining
 -Let the player of the correct answer if he/she looses
 -Let the player choose to play again 
 */

//Game values
let min = 1,
    max = 10,
    winningNum = 2,
    guessesLeft = 3;

//UI vars
const minNum = document.querySelector(".min-num"),
    maxNum  = document.querySelector(".max-num"),
    game = document.querySelector("#game"),
    guessBtn = document.querySelector("#guess-btn"),
    guessInput = document.querySelector("#guess-input"),
    message = document.querySelector(".message");

//Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

//Listen for guess
guessBtn.addEventListener("click",function(){
    let guess = parseInt(guessInput.value);//as anything passed inside guessInput will be string we first need to parse it to number
    if(isNaN(guess) || guess < min || guess > max){
        setMessage(`Please enter a number between ${min} and ${max}`, "red");
        return false;//ending the event listener here so that other if statements can work without interference
    }

    if(guess === winningNum){

        //gameOver
        gameOver(true,`${winningNum} is correct!!! You win!`,"green")

    } else{

        //reducing the number of guesses as we choose the wrong answers
        guessesLeft -= 1;

        if(guessesLeft === 0){
        
        //gameOver
        gameOver(false,`Game over! YOU LOST! the correct answer is ${winningNum}`,"red");


        } else{
            
            //set border color to red
            guessInput.style.borderColor = "red";
            
            //Game continues-wrong answer
            setMessage(`${guess} is wrong, You have ${guessesLeft} guesses left`,"red");

            //clear input
            guessInput.value.clear();
            
        }
    }

});

//setMessage function
function setMessage(msg,color){
    message.textContent = msg;
    message.style.color = color;
}

//gameOver function
function gameOver(won , msg){
    let color;
    won === true ? color = "green" : color = "red";
    //Disable input
    guessInput.disabled = true;
        
    //set border color to green
    guessInput.style.borderColor = color;

    //set text color
    message.style.color = color;

    //set message
    setMessage(msg);

}