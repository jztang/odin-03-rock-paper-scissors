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
      result = `You lose! ${playerSelection} loses to ${computerSelection}.`;
    } else {
      result = `You win! ${playerSelection} beats ${computerSelection}.`;
    }
  } else if (playerSelection === "Paper") {
    if (computerSelection === "Rock") {
      result = `You win! ${playerSelection} beats ${computerSelection}.`;
    } else {
      result = `You lose! ${playerSelection} loses to ${computerSelection}.`;
    }
  } else if (playerSelection === "Scissors") {
    if (computerSelection === "Rock") {
      result = `You lose! ${playerSelection} loses to ${computerSelection}.`;
    } else {
      result = `You win! ${playerSelection} beats ${computerSelection}.`;
    }
  } else {
    console.error("Bad player input");
  }

  return result;
}
