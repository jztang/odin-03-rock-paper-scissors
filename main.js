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
  let winner;

  if (playerSelection === computerSelection) {
    result = `It's a tie! ${playerSelection} equals ${computerSelection}`;
    winner = "Tie";
  } else if (playerSelection === "Rock") {
    if (computerSelection === "Paper") {
      result = "You lose! Rock loses to Paper.";
      winner = "Computer";
    } else if (computerSelection === "Scissors") {
      result = "You win! Rock beats Scissors.";
      winner = "Player";
    }
  } else if (playerSelection === "Paper") {
    if (computerSelection === "Rock") {
      result = "You win! Paper beats Rock.";
      winner = "Player";
    } else if (computerSelection === "Scissors") {
      result = "You lose! Paper loses to Scissors.";
      winner = "Computer";
    }
  } else if (playerSelection === "Scissors") {
    if (computerSelection === "Rock") {
      result = "You lose! Scissors loses to Rock.";
      winner = "Computer";
    } else if (computerSelection === "Paper") {
      result = "You win! Scissors beats Paper.";
      winner = "Player";
    }
  } else {
    console.error("Bad player input");
  }

  return { result, winner };
}

document.querySelectorAll(".selection").forEach((selection) => {
  selection.addEventListener("click", () => {
    console.log(playRound(selection.textContent, getComputerChoice()));
  });
});
