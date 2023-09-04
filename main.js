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

function playRound(round){
const computerSelection = computerChoice();
//Using "console.log(computerSelection)"
//We can now see what the computer choose
const winner = checkWinner(playerSelection, computerSelection)

winners.push(winner)
}

function computerChoice(){

    //Math.floor rounds up the number so 

    // choices.length limits the choices to 3, if i add +1 in choices it would automatically be put to 4.
    // easier to use choices.length than 3 in case if changes.
    return choices[Math.floor(Math.random()*choices.length)]
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