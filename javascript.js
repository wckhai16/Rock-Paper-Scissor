const getComputerChoice = ['rock','paper','scissor'];
const player = document.querySelector('#player');
const comp = document.querySelector('#computer');
const result = document.querySelector('#result');
const resetButton = document.querySelector('#reset');
let playerScore = 0;
let computerScore = 0;

function playRound(e) {
    const playerSelection = e.target.id.toLowerCase();
    let computerSelection = compSelection();
  
  if ((playerSelection === 'rock' && computerSelection === 'paper') || (playerSelection === 'scissor' && computerSelection === 'rock') || (playerSelection === 'paper' && computerSelection === 'scissor')){
    result.textContent = 'Computer Win!';
    computerScore++;
    
  }
  else if (playerSelection === computerSelection){
    result.textContent = 'Tied Game!';
  }
  else if ((playerSelection === 'paper' && computerSelection === 'rock') || (playerSelection === 'rock' && computerSelection === 'scissor') || (playerSelection === 'scissor' && computerSelection === 'paper')) {
    result.textContent = 'Player Win';;
    playerScore++;
  } 

  player.textContent = playerScore;
  comp.textContent = computerScore;
  
  winningCondition();
}

function resetGame(){
  playerScore = 0;
  computerScore = 0;
  result.textContent= '';
}

function compSelection(){
  return getComputerChoice[(Math.floor(Math.random()* 3))];
}

function winningCondition(){
  if (playerScore >= 5 ) { 
    result.textContent = 'Player Win the game!!';
    setTimeout(resetGame, 2000);
  } else if (computerScore >= 5) {
    result.textContent = 'Computer Win the game!!';
    setTimeout(resetGame, 2000);
  }
}

window.addEventListener('click', playRound);
resetButton.addEventListener('click', resetGame);




