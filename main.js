let winners = [];
const choices =["rock","paper","scissors"]


function resetGame(){
    winners = []
    document.querySelector(".playerScore").textContent = "Score: 0";
    document.querySelector(".computerScore").textContent = "Score: 0";
    document.querySelector(".ties").textContent = "Ties: 0";
    document.querySelector(".winner").textContent = "";
    document.querySelector(".playerChoice").textContent = "";
    document.querySelector(".computerChoice").textContent = "";
    document.querySelector(".reset").textContent = "none";
}


function startGame() {
    //The game will last till someone reaches five wins
    let imgs = document.querySelectorAll("img")
    imgs.forEach((img) =>
        img.addEventListener("click", () =>{
            if (img.id) {
                playRound(img.id);
            }
        })
    );
}

function playRound(playerChoice){
    let wins = checkWins();
    if(wins >= 5){
        return
    }
    
const computerChoice = computerSelect();

//We can now see what the computer choose
const winner = checkWinner (playerChoice, computerChoice);
winners.push(winner)
tallyWins()
displayRound(playerChoice, computerChoice, winner);
displayRoundWinner(winner); //trying this line out
wins = checkWins();
if (wins == 5){
    //display end result
    //change the button to visible,
    //change the text to display winner
    displayEnd()
}
}

function displayEnd() {
    let playerWins = winners.filter(item => item == "Player").length;

    if (playerWins == 5) {
        document.querySelector(".winner").textContent =
        "You won 5 Games, Your now the Champion!";
    } else {
        document.querySelector(".winner").textContent =
        "Computer won 5 Games, it is now the Champion"
    }
    //document.querySelector(".reset").computedStyleMap.display = "flex";
    document.querySelector(".reset").style.display = "flex";

}


function displayRound (playerChoice, computerChoice, winner){
    document.querySelector(".playerChoice").textContent = `You Chose: ${
        playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)
    }`;
        
    document.querySelector(
        ".computerChoice"
        ).textContent = `The Computer Chose: ${
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
        document.querySelector(".winner").textContent = "Its a Tie"

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


function computerSelect(){

    //Math.floor rounds up the number so 

    // choices.length limits the choices to 3, if i add +1 in choices it would automatically be put to 4.
    // easier to use choices.length than 3 in case if changes.
    return choices[Math.floor(Math.random()*choices.length)]
}

function checkWins() {
  const pWinCount = winners.filter((item) => item == "Player").length;
  const cWinCount = winners.filter((item) => item == "Computer").length;
  return Math.max(pWinCount, cWinCount);
}



function checkWinner(choiceP, choiceC){
    if(choiceP === choiceC){
        return "Tie";
    }   else if (
        (choiceP == "rock" && choiceC =="scissors") ||
        (choiceP == "paper" && choiceC =="rock") ||
        (choiceP == "scissors" && choiceC =="paper")
    )   {
        return "Player";
    }   else{
        return "Computer";
    }
}

function logWins() {
    let playerWins = winners.filter((item) => item == "Player").length;
    let computerWins = winners.filter((item) => item == "Computer").length;
    let ties = winners.filter((item) => item == "Tie").length;
}

startGame();