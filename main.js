const choices =["rock","paper","scissors"]


function Game() {
    playRound();
    //Play the game
    //Play Five rounds
    //Console based
}

function playRound(){
const playerSelection = playerChoice();
const computerSelection = computerChoice();
const winner = checkWinner(playerSelection, computerSelection)
console.log(winner)
}

function playerChoice(){
    //Get Input From Player
    let input = prompt("Type Rock, Paper or Scissors")
    while (input == null) {
        input =prompt("Type Rock, Paper or Scissors")
    }
    input = input.toLowerCase();
    let check = validateInput(input);
    while (input == false) {
        input = prompt(
            "Type Rock, Paper, or Scissors. The spelling needs to be precise, but capitalization doesn't matter at all"
            );
            while (input == null) {
                input =prompt("Type Rock, Paper or Scissors")
            }
            //This Forces letters to be LowerCase
            input = input.toLowerCase();
            //If check is valid "in our array (choices (rock, paper, scissors))"
            //The while loop will become true and break
            check = validateInput(input);
        }
}

function computerChoice(){

    //Math.floor rounds up the number so 

    // choices.length limits the choices to 3, if i add +1 in choices it would automatically be put to 4.
    // easier to use choices.length than 3 in case if changes.
    return choices[Math.floor(Math.random()*choices.length)]
}

function validateInput(choice){
    if (choices.includes(choice)){
        return true;
    }   else{
        return false;
    }
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
        return "Computer"
    }

}

Game();