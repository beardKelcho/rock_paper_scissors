
let scorePlayer = 0;
let scoreComputer = 0;
const chocies = ["rock","paper","scissors"];
const buttons = document.querySelectorAll('input');

function getComputerChoice() {
 
  const chocie = chocies[Math.floor(Math.random() * chocies.length) ];
  return chocie;
}

function disableButtons() {
  buttons.forEach(elem => {
    elem.disabled = true;
  })
}

function checkWinner(playerSelection, computerSelection) {
  if (playerSelection == computerSelection){
    return "Tie";
  }
  else if (
    (playerSelection == "rock" && computerSelection == "scissors" ) ||
    (playerSelection == "paper" && computerSelection == "rock" ) ||
    (playerSelection == "scissors" && computerSelection =="paper")
  ) {
    scorePlayer++;
    return "Player";
  }
  else {
    scoreComputer++;
    return "Computer";
  }
}

function playRound(playerSelection) {

  let computerSelection = getComputerChoice();
  const result = checkWinner(playerSelection,computerSelection);
  let resultGame="";
  
  if (result == "Tie"){
    resultGame = `It's a Tie!`;
  }else if (result == "Player") {
    if(scorePlayer == 5) {
      resultGame += "You won the game!Reload the page to play again";
      disableButtons();
    }else {
      resultGame = `You Win! ${playerSelection} beats ${computerSelection} 
      <br><br>Player score : ${scorePlayer} <br>Computer score: ${scoreComputer}`;
    }
  }else {
    if(scoreComputer == 5) {
      resultGame += "You lose the game!Reload the page to play again";
      disableButtons();
    } else {
      resultGame = `You Lose! ${computerSelection} beats ${playerSelection}
      <br><br>Player score : ${scoreComputer} <br>Computer score: ${scorePlayer}`;
    }
  }

  document.getElementById('result').innerHTML = resultGame;
  return
}

buttons.forEach(button => {
  button.addEventListener('click',function(){
    console.log(playRound(button.value));
      })
})

