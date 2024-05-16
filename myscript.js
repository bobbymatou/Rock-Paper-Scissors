let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let robotChoice = ['Rock', 'Paper', 'Scissors']
    let roboRando = robotChoice[Math.floor(Math.random() * robotChoice.length)];
    console.log(roboRando);
}

function getHumanChoice() {
    let humanChoice = prompt();
    console.log(humanChoice);
}

function playRound(){
    console.log("Welcome to Rock Paper Scissors. Please enjoy your stay.");
    getHumanChoice();
    getComputerChoice();
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);