
let computerChoices = [{choice: 'rock', value: 0},
    {choice: 'paper', value: 1}, {choice: 'scissors', value: 2}];    

const playerSelection = prompt(`"Rock-Paper-Scissors" birini yazınız`,"").toLowerCase();
const computerSelection = getComputerChoice();    


    function getComputerChoice(){ 
    let result = computerChoices[Math.floor(Math.random() * 
        computerChoices.length)];
        console.log(result);
        return result;
}

function playRound( playerSelection, computerSelection ){

    let result = checkWinner(playerSelection,computerSelection);
    console.log(result);
    return result;
    
}

// console.log(playRound(playerSelection,computerSelection));

function game (playerSelection,computerSelection){
    // for (let i = 0; i < 5; i++){
    //     if (playerSelection=="Rock")
    // }
    console.log(playRound(playerSelection,computerSelection));

}
function checkWinner (choice1,choice2){
   if (
        (choice1 == "rock" && choice2 == "scissors") ||
        (choice1 == "paper" && choice2 == "rock") ||
        (choice1 == "scissors" && choice2 == "paper")
      ) {
        return "Player";
    } else if (choice1 == choice2) {
        return "Tie";
    } else {
        return "Computer";
    }
    
}

game();