const score = document.querySelector("#score");
const results = document.querySelector("#results");
const finalResults = document.querySelector("#final-results");
let playerScore = 0;
let computerScore = 0;

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
    winner = "Tie";
  } else if (playerSelection === "Rock") {
    if (computerSelection === "Paper") {
      winner = "Computer";
    } else if (computerSelection === "Scissors") {
      winner = "Player";
    }
  } else if (playerSelection === "Paper") {
    if (computerSelection === "Rock") {
      winner = "Player";
    } else if (computerSelection === "Scissors") {
      winner = "Computer";
    }
  } else if (playerSelection === "Scissors") {
    if (computerSelection === "Rock") {
      winner = "Computer";
    } else if (computerSelection === "Paper") {
      winner = "Player";
    }
  } else {
    console.error("Bad player input");
  }

  if (winner === "Player") {
    result = `You win! ${playerSelection} beats ${computerSelection}`;
    playerScore++;
  } else if (winner === "Computer") {
    result = `You lose! ${playerSelection} loses to ${computerSelection}`;
    computerScore++;
  } else {
    result = `It's a tie! ${playerSelection} equals ${computerSelection}`;
  }

  score.textContent = `Player: ${playerScore} - Computer: ${computerScore}`;

  if (playerScore >= 5) {
    finalResults.textContent = "Game over - Player wins!";
  } else if (computerScore >= 5) {
    finalResults.textContent = "Game over - Computer wins!";
  }

  return { result, winner };
}

document.querySelectorAll(".selection").forEach((selection) => {
  selection.addEventListener("click", () => {
    results.textContent = playRound(selection.textContent, getComputerChoice()).result;
  });
});
