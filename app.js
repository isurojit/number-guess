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
    winningNum = getRandomNum(min, max),
    guessesLeft = 3;

//UI elements
const UIgame = document.querySelector('#game'),
      UIminNum = document.querySelector('.min-num'),
      UImaxNum = document.querySelector('.max-num'),
      UIguessBtn = document.querySelector('#guess-btn'),
      UIguessInput = document.querySelector('#guess-input'),
      UIimageWin = document.querySelector('.win-img'),
      UIimagelose = document.querySelector('.lose-img'),
      UImessage = document.querySelector('.message');

//Assign UI min and Max
UIminNum.textContent = min;
UImaxNum.textContent = max;

//Disable Ui image
UIimageWin.style.display = 'none';
UIimagelose.style.display = 'none';

//Play again event listner
UIgame.addEventListener('mousedown', function(e){
    if(e.target.className === 'play-again')
    window.location.reload();
});

//Listen for guess
UIguessBtn.addEventListener('click', function(){
    let guess = parseInt(UIguessInput.value);

    //Validate
    if(isNaN(guess) || guess < min || guess > max || isFinite(guess)){
        setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    }else{

    //Check if won
    if(guess === winningNum){
        gameOver(true,`${winningNum} is correct, YOU WIN!`);
        UIimageWin.style.display = 'block';

    }else{
        //Wrong Number
        guessesLeft -= 1;

        if(guessesLeft === 0){
            //Game Over Lost
            gameOver(false,`Game Over, YOU LOST! The correct number was ${winningNum}.`);
            UIimagelose.style.display = 'block';
        }else{

            //Chnage Border Color
            UIguessInput.style.borderColor = 'red';

            //clear Input
            UIguessInput.value = '';

            //Game Continues - answer wrong
            setMessage(`Wrong Guess!, You have ${guessesLeft} guesses left`,'red');
        }
    }
}
});

//Game Over
function gameOver(won, msg){
    let color;
    won === true ? color = 'green' : color ='red';
    //Disable Input
    UIguessInput.disabled = true;
    //Change Border
    UIguessInput.style.borderColor = color;
    //Set text color 
    UImessage.style.color = color;
    //Set Message
    setMessage(msg);

    //Play again
    UIguessBtn.value = 'Play Again';
    UIguessBtn. className += 'play-again';
}

//Get Winning NUm
function getRandomNum(min, max){
    return (Math.floor(Math.random()*(max-min+1)+min));
}

//Set message
function setMessage(msg, color){
    UImessage.style.color = color;
    UImessage.textContent = msg;
}