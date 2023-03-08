function getComputerChoice() {
  let randomNum = Math.floor(Math.random() * 3);
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
