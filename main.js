let winners = [];
const choices = ["torchic", "mudkip", "treecko"];

function resetGame() {
  winners = [];
  document.querySelector(".playerScore").textContent = "Score: 0";
  document.querySelector(".computerScore").textContent = "Score: 0";
  document.querySelector(".ties").textContent = "Ties: 0";
  document.querySelector(".winner").textContent = "";
  document.querySelector(".playerChoice").textContent = "";
  document.querySelector(".computerChoice").textContent = "";
  document.querySelector(".pokemon").style.display = "none";
}

function startGame() {
  //The game will last till someone reaches five wins
  let imgs = document.querySelectorAll("img");
  imgs.forEach((img) =>
    img.addEventListener("click", () => {
      if (img.id) {
        playRound(img.id);
      }
    })
  );
}

function playRound(playerChoice) {
  let wins = checkWins();
  if (wins >= 5) {
    return;
  }

  const computerChoice = computerSelect();

  const winner = checkWinner(playerChoice, computerChoice);
  winners.push(winner);
  tallyWins();
  displayRound(playerChoice, computerChoice, winner);
  displayRoundWinner(winner);
  wins = checkWins();
  if (wins == 5) {
    displayEnd();
  }
}

function displayEnd() {
  let playerWins = winners.filter((item) => item == "Player").length;

  if (playerWins == 5) {
    document.querySelector(".winner").textContent =
      "You won 5 Games, Your now the Champion!";
  } else {
    document.querySelector(".winner").textContent =
      "Computer won 5 Games, it is now the Champion";
  }
  document.querySelector(".pokemon").style.display = "flex";
}

function displayRound(playerChoice, computerChoice, winner) {
  document.querySelector(".playerChoice").textContent = `Your Pokemon Is: ${
    playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)
  }`;

  document.querySelector(
    ".computerChoice"
  ).textContent = `Computer's Pokemon Is: ${
    computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
  }`;
  document.querySelector(".winner").textContent = "The Round was a tie";
}

function displayRoundWinner(winner) {
  if (winner == "Player") {
    document.querySelector(".winner").textContent = "You won the Round!";
  } else if (winner == "Computer") {
    document.querySelector(".winner").textContent =
      "The Computer won the Round!";
  } else {
    document.querySelector(".winner").textContent = "Its a Tie";
  }
}

function tallyWins() {
  const pWinCount = winners.filter((item) => item == "Player").length;
  const cWinCount = winners.filter((item) => item == "Computer").length;
  const ties = winners.filter((item) => item == "Tie").length;
  document.querySelector(".playerScore").textContent = `Score: ${pWinCount}`;
  document.querySelector(".computerScore").textContent = `Score: ${cWinCount}`;
  document.querySelector(".ties").textContent = `Ties: ${ties}`;
}

function computerSelect() {
  //Math.floor rounds up the number so

  // choices.length limits the choices to 3, if i add +1 in choices it would automatically be put to 4.
  // easier to use choices.length than 3 in case if changes.
  return choices[Math.floor(Math.random() * choices.length)];
}

function checkWins() {
  const pWinCount = winners.filter((item) => item == "Player").length;
  const cWinCount = winners.filter((item) => item == "Computer").length;
  return Math.max(pWinCount, cWinCount);
}

function checkWinner(choiceP, choiceC) {
  if (choiceP === choiceC) {
    return "Tie";
  } else if (
    (choiceP == "torchic" && choiceC == "treecko") ||
    (choiceP == "mudkip" && choiceC == "torchic") ||
    (choiceP == "treecko" && choiceC == "mudkip")
  ) {
    return "Player";
  } else {
    return "Computer";
  }
}

function logWins() {
  let playerWins = winners.filter((item) => item == "Player").length;
  let computerWins = winners.filter((item) => item == "Computer").length;
  let ties = winners.filter((item) => item == "Tie").length;
}

startGame();
