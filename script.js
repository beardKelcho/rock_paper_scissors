
//    let playerSelection = prompt(`"rock-paper-scissors" birini yaziniz`,"").toLowerCase();
// function getComputerChoice(){ 
//   const computerChoices = ["rock", "paper", "scissors"]; 
//     const result = computerChoices[Math.floor(Math.random() * 
//         computerChoices.length)];
//         console.log(result);
//         return result;
// }

// function playRound( playerSelection, computerSelection ){
    
    
//     // const result = checkWinner(playerSelection, computerSelection);
//     // return result;
// // for (let i = 0; i < 5; i++){
// //   if (playerSelection == "rock" && computerSelection == "paper") {
// //     return "player";
// //   } else {
// //     return "computer";
// //   }
// // }
   
    
// }
// let computerSelection = getComputerChoice();  

// function game (playerSelection,computerSelection){
//     // for (let i = 0; i < 5; i++){
//     //     if (playerSelection=="Rock" && computerSele)
//     // }
//     console.log(playRound(playerSelection,computerSelection));

// }
// // function checkWinner(playerSelection, computerSelection) {
    
    
    
// //     if (
// //         (playerSelection == "rock" && computerSelection == "scissors") ||
// //         (playerSelection == "scissors" && computerSelection == "paper") ||
// //         (playerSelection == "paper" && computerSelection == "rock")
// //       ) {
// //         return "Player";
// //       } else if (playerSelection == computerSelection) {
// //         return "Tie";
// //       } else {
// //         return "Computer";
// //       }
// //   }


let computerSelection = getComputerChoice();

function getComputerChoice() {
  const chocies = ["rock","paper","scissors"] 
  const result = chocies[Math.floor(Math.random() * chocies.length) ];
  console.log(result);
  return result;
}

//getComputerChoice();

function playRound(playerSelection,computerSelection) {

  if (
    (playerSelection == "rock" && computerSelection == "scissors" ) ||
    (playerSelection == "paper" && computerSelection == "rock" ) ||
    (playerSelection == "scissors" && computerSelection =="paper")
     ) {
    return "player";
  } else if (
    (playerSelection == "rock" && computerSelection == "paper" ) ||
    (playerSelection == "paper" && computerSelection == "scissors" ) ||
    (playerSelection == "scissors" && computerSelection =="rock")
    ) {
    return "Computer";
  }else { 
    return "tie";
  }

}

function game() {
  

  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt(`"rock-paper-scissors" birini yaziniz`,"").toLowerCase();
    
    let winner = playRound(playerSelection,computerSelection);
    if (winner === "player") {
      alert(`You win! ${playerSelection} beats ${computerSelection}`);
      //console.log(`You win! ${playerSelection} beats ${computerSelection}`);
    } else if (winner === "computer") {
      alert(`You Lose! ${computerSelection} beats ${playerSelection}`);
      //console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
    } else {
      alert(`You Tied! ${playerSelection} equal ${computerSelection}`)
      console.log(winner);
    }
  }

}


game();

//console.log(playRound(playerSelection,computerSelection));



  
