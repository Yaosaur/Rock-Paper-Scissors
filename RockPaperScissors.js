function computerPlay() {
  let moves = ["rock", "paper", "scissors"];
  let selection = Math.floor(Math.random() * 3);
  return moves[selection];
}

function playRound(playerInput, computerSelection) {
  let playerSelection = playerInput.toLowerCase();
  if (playerSelection === computerSelection) {
    return "You are tied!";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return "player wins";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return "player wins";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return "player wins";
  } else if (computerSelection === "rock" && playerSelection === "scissors") {
    return `computer wins`;
  } else if (computerSelection === "paper" && playerSelection === "rock") {
    return `computer wins`;
  } else if (computerSelection === "scissors" && playerSelection === "paper") {
    return `computer wins`;
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;
  for (let i = 1; i < 6; i++) {
    let playerSelection = prompt("Rock, paper, or scissors?");
    let playerInput = playerSelection.toLowerCase();
    while (
      playerInput !== "rock" &&
      playerInput !== "paper" &&
      playerInput !== "scissors"
    ) {
      playerSelection = prompt(
        `Please type a valid input: Rock, paper, or scissors?`
      );
      playerInput = playerSelection.toLowerCase();
    }
    let computerSelection = computerPlay();
    let result = playRound(playerInput, computerSelection);
    if (result === "player wins") {
      playerScore++;
      console.log(
        `Player wins round ${i}. ${playerInput} beats ${computerSelection}`
      );
    } else if (result === "computer wins") {
      computerScore++;
      console.log(
        `Computer wins round ${i}. ${computerSelection} beats ${playerInput}`
      );
    } else {
      console.log(`It's a draw`);
    }
  }
  if (playerScore > computerScore) {
    console.log(`Player won!`);
  } else if (computerScore > playerScore) {
    console.log(`Computer won!`);
  } else {
    console.log(`It's a draw!`);
  }
}

console.log("Its connected");
game();
