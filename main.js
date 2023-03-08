function getComputerChoice() {
  let randomNum = Math.floor(Math.random() * 3); // get a random number 0-2
  let computerChoice;

  if (randomNum === 0) {
    computerChoice = "Rock";
  } else if (randomNum === 1) {
    computerChoice = "Paper";
  } else {
    computerChoice = "Scissors";
  }

  return computerChoice;
}

function playRound(playerSelection, computerSelection) {
  // normalize capitalization
  playerSelection =
    playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
  computerSelection =
    computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1).toLowerCase();

  let result;

  if (playerSelection === computerSelection) {
    result = `It's a tie! ${playerSelection} equals ${computerSelection}`;
  } else if (playerSelection === "Rock") {
    if (computerSelection === "Paper") {
      result = "You lose! Rock loses to Paper.";
    } else if (computerSelection === "Scissors") {
      result = "You win! Rock beats Scissors.";
    }
  } else if (playerSelection === "Paper") {
    if (computerSelection === "Rock") {
      result = "You win! Paper beats Rock.";
    } else if (computerSelection === "Scissors") {
      result = "You lose! Paper loses to Scissors.";
    }
  } else if (playerSelection === "Scissors") {
    if (computerSelection === "Rock") {
      result = "You lose! Scissors loses to Rock.";
    } else if (computerSelection === "Paper") {
      result = "You win! Scissors beats Paper.";
    }
  } else {
    console.error("Bad player input");
  }

  return result;
}
