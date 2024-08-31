let randomNum=Math.floor(Math.random()*100)+1;
console.log(randomNum);
let attempts=0;
let maxAttempts=5;
const guessNum=document.getElementById('input-num');
const guessButton=document.getElementById('click-guess');
const feedback=document.getElementById('display-text');
const attemptDisplay=document.getElementById('show-attempts');
const restartButton=document.getElementById('click-restart');
guessButton.addEventListener('click',function(){
  if(attempts<maxAttempts){
  const userGuess=parseInt(guessNum.value);
  attempts++;
  if(userGuess===randomNum){
    feedback.textContent='Congratulations!You guessed the correct number.';
  }else if(userGuess>randomNum){
    feedback.textContent='Number is too high! Try again.';
  }else{
    feedback.textContent='Number is too low! Try again.';
  }
  attemptDisplay.textContent=`This is your attempt ${attempts}.`;
  if(attempts===maxAttempts && userGuess!==randomNum){
    feedback.textContent=`Game Over! You've used all ${maxAttempts} attempts. The correct number was ${randomNum}.`
    disableGame();
  }
  }
});
restartButton.addEventListener('click',function(){
  randomNum=Math.floor(Math.random()*100)+1;
  attempts=0;
  feedback.textContent='';
  attemptDisplay.textContent=`This is your attempt ${attempts}.`;
  guessNum.value='';
  guessButton.disabled=false;
  guessNum.disables=false;
});
function disableGame(){
  guessButton.disabled=true;
  guessNum.disables=true;
}