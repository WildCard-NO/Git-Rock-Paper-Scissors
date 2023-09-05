let winners = [];
const choices =["rock","paper","scissors"]


function resetGame(){
    //Reset Game
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

function playRound(playChoice){
    let wins = checkWins();
    if(wins >= 5){
        return
    }
const computerSelection = computerChoice();
//Using "console.log(computerSelection)"
//We can now see what the computer choose
const winner = checkWinner(playerSelection, computerSelection)

winners.push(winner)
tallyWins()
displayRound(playerChoice, computerChoice, winner);
wins = checkWins();
if (wins == 5){
    //display end result
    //change the button to visible,
    //change the text to display winner
    displayEnd()
}
}

function displayEnd() {
    let playerWins = winners.filter(item => item == "player").length;

    if (playerWins == 5) {
        document.querySelector("winner").textContent =
        "You won 5 Games, Your now the Champion!";
    } else {
        document.querySelector(".winner").textContent =
        "Computer won 5 Games, it is now the Champion"
    }
    document.querySelector(".reset").computedStyleMap.display = "flex";
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
    document.querySelector("winner").textContent = `Round Winner: ${winner}`;
}


function tallyWins() {
    let playerWins = winners.filter((item) => item == "Player").length;
    let computerWins = winners.filter((item) => item == "Computer").length;
    let ties = winners.filter((item) => item == "Tie").length;
    document.querySelector('.playerScore').textContent = `score: ${pWinCount}`
    document.querySelector('.computerScore').textContent = `score: ${cWinCount}`
    document.querySelector('.ties').textContent = `score: ${ties}`
}

function computerChoice(){

    //Math.floor rounds up the number so 

    // choices.length limits the choices to 3, if i add +1 in choices it would automatically be put to 4.
    // easier to use choices.length than 3 in case if changes.
    return choices[Math.floor(Math.random()*choices.length)]
}

function checkWins(){
    let playerWins = winners.filter((item) => item == "Player").length;
    let computerWins = winners.filter((item) => item == "Computer").length;
    return Math.max(pWinCount,cWhinCount);

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