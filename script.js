
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

    
    
}

console.log(playRound(playerSelection,computerSelection));