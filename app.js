/* 
Game Function:
- Player must guess a number between a min amd max
- Player get a certain amount of guesses
- Notify the player of guesses remaining
- Notify the player of the correct answer if loose
- Let player choose to play again
*/

//Variable
//Game Values
let min = 1, 
    max= 10,
    winningNum = 2,
    guessesLeft = 3;

//UI elements
const UIgame = document.querySelector('#gmae'),
      UIminNum = document.querySelector('.min-num'),
      UImaxNum = document.querySelector('.max-num'),
      UIguessBtn = document.querySelector('#guess-btn'),
      UIguessInput = document.querySelector('#guess-input'),
      UIimage = document.querySelector('.win-img'),
      UImessage = document.querySelector('.message');

//Assign UI min and Max
UIminNum.textContent = min;
UImaxNum.textContent = max;

//Disable Ui image
UIimage.style.display = 'none';

//Listen for guess
UIguessBtn.addEventListener('click', function(){
    let guess = parseInt(UIguessInput.value);
console.log(guess);

    //Validate
    if(isNaN(guess) || guess < min || guess > max){
        setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    }

    //Check if won
    if(guess === winningNum){
        //Disable Input
        UIguessInput.disabled = true;
        //Change Border
        UIguessInput.style.borderColor = 'green';
        //Set Message
        setMessage(`${winningNum} is correct, YOU WIN!`, 'green');

        UIimage.style.display = 'block';
    }else{

    }
});

//Set message
function setMessage(msg, color){
    UImessage.style.color = color;
    UImessage.textContent = msg;
}