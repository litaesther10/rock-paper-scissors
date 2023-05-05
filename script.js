let playerCount = 0;
let computerCount = 0;

const computerPlay = () => {
  let choises = ["paper", "rock", "scissors"];
  return choises[Math.floor(Math.random() * 3)];
};

const playerSelection = () => {
  let playerChoise = prompt(
    `Choose "rock", "paper" or "scissors"`
  ).toLowerCase();
  if (
    playerChoise == "rock" ||
    playerChoise == "paper" ||
    playerChoise == "scissors"
  )
    return playerChoise;
  else alert(`Choose something valid`);
  return undefined;
};

function singleRound(computerPlay, playerSelection) {
  if (playerSelection == undefined) {
    i--;
    playerSelection;
  } else if (playerSelection) {
    if (playerSelection === computerPlay) {
      console.log(`Computer selection is ` + computerPlay);
      console.log(`Player selection is ` + playerSelection);
      i--;
      return "It's a tie! 🤝";
    } else if (
      (playerSelection === "rock" && computerPlay === "scissors") ||
      (playerSelection === "paper" && computerPlay === "rock") ||
      (playerSelection === "scissors" && computerPlay === "paper")
    ) {
      console.log(`Computer selection is ` + computerPlay);
      console.log(`Player selection in ` + playerSelection);
      playerCount++;
      return `You win! ${playerSelection} beats ${computerPlay} 🥳`;
    } else {
      console.log(`Computer selection is ` + computerPlay);
      console.log(`Player selection in ` + playerSelection);
      computerCount++;
      return ` You lose! ${computerPlay} beats ${playerSelection} 😭`;
    }
  }
}

function game() {
  for (i = 1; i <= 5; i++) {
    console.log(singleRound(computerPlay(), playerSelection()));
  }
  if (playerCount > computerCount) {
    console.log(`🥳 You are the winner! 🥳`);
  } else if (computerCount > playerCount) {
    console.log(`😭 Computer wins! 😭`);
  } else console.log(`You both win! 🤝`);
  console.log(`Player score: ` + playerCount);
  console.log(`Computer score: ` + computerCount);
}

game(singleRound);
