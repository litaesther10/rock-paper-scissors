const choises = ["rock", "paper", "scissors"];

const computerPlay = () => {
  selection = Math.floor(Math.random(choises) * 3);
  return choises[selection];
};

function playRound(computerSelection, playerSelection) {
  if (playerSelection === computerSelection) {
    result = "It's a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    result = `You win! ${playerSelection} beats ${computerSelection}`;
  } else {
    result = ` You lose! ${computerSelection} beats ${playerSelection}`;
  }
}

const playerSelection = () => {
  return prompt('Choose "paper", "rock" or "scissors"');
};

const computerSelection = computerPlay();

playRound(computerSelection, playerSelection());
console.log(`Computer choise is ` + computerSelection);
console.log(result);
