var p1Button = document.querySelector('#p1');
var p2Button = document.querySelector('#p2');
var resetButton = document.getElementById('reset');
var p1Display = document.querySelector('#p1Display');
var p2Display = document.querySelector('#p2Display');
var scoreLimit = document.querySelector("input[type='number']");
var scoreLimitDisplay = document.querySelector("p span");
var inputValue = document.querySelector("input");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;

function reset(){
  p1Score = 0;
  p2Score = 0;
  p1Display.textContent = p1Score;
  p2Display.textContent = p2Score;
  if (gameOver) {
    p1Display.classlist.remove("winner");
    p2Display.classlist.remove("winner");
  };
  gameOver = false;
};

p1Button.addEventListener("click", function(){
  event.preventDefault();
  if (!gameOver){
    p1Score++;
    if (p1Score === winningScore){
      p1Display.classList.add("winner");
      gameOver = true;
    }
    p1Display.textContent = p1Score;
  }
});

p2Button.addEventListener("click", function(){
  event.preventDefault();
  if (!gameOver){
    p2Score++;
    if (p2Score === winningScore){
      p2Display.classList.add("winner");
      gameOver = true;
    }
    p2Display.textContent = p2Score;
  }
});

resetButton.addEventListener("click", function(){
  reset();
});

scoreLimit.addEventListener("change", function(){
  scoreLimitDisplay.textContent = Number(this.value);
  winningScore = Number(this.value);
  reset();
});
