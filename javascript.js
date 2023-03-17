const getComputerChoice = ['rock','paper','scissor'];
let playerScore = 0;
let computerScore = 0;

function compSelection(){
  return getComputerChoice[(Math.floor(Math.random()* 3))];
} // This is to generate random choice from (rock, paper, scissor)

function playGame(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();

  if ((playerSelection === 'rock' && computerSelection === 'paper') || (playerSelection === 'scissor' && computerSelection === 'rock') || (playerSelection === 'paper' && computerSelection === 'scissor')){
    alert(`You Lose! ${computerSelection} beat ${playerSelection}`);
    computerScore++;
  }
  else if (playerSelection === computerSelection){
    alert('Tied Game!');
  }
  else if ((playerSelection === 'paper' && computerSelection === 'rock') || (playerSelection === 'rock' && computerSelection === 'scissor') || (playerSelection === 'scissor' && computerSelection === 'paper')) {
    alert(`You Win! ${playerSelection} beat ${computerSelection}`);
    playerScore++;
  }
  else {
    alert('Please enter (rock, paper, scissor)');
  }
}

function game(){
  for (let i = 0; i < 5; i++){
    let playerChoice = prompt('Please enter your choice: (rock, paper, scissor)');
    let computerSelection = compSelection();
    playGame(playerChoice, computerSelection);
    console.log(`Player Score: ${playerScore}`);
    console.log(`Computer Score: ${computerScore}`);
  }
  
  if (playerScore > computerScore){
    alert('Player Win');
  }
  else if (playerScore == computerScore){
    alert('Tied game');
  }
  else {
    alert('Computer Win');
  }
}

game();