let getComputerChoice = () => {
    const randomNumberForComputer = Math.floor(Math.random()*100) + 1
    if (randomNumberForComputer <= 33){
        return "rock"
    }
    else if (randomNumberForComputer <= 66){
        return "paper"
    }
    else{
        return "scissors"
    }
}

let getHumanChoice = () => {
    const choice = prompt("Enter [rock, paper, scissors]")
    return choice.toLowerCase()
}

function playGame(){
    let humanScore = 0
    let computerScore = 0

    let playRound = (humanChoice, computerChoice) => {
        humanChoice = humanChoice.toLowerCase()
        if (humanChoice === "rock"){
            if (computerChoice === "scissors"){
                humanScore += 1
                console.log("You Win!!!");
            }
            else if (computerChoice === "paper"){
                computerScore += 1
                console.log("You lose! Paper beats Rock");
            }
            else{
                console.log("Its a Tie. Lets go Again");
            }
        }
        if (humanChoice === "paper"){
            if (computerChoice === "rock"){
                humanScore += 1
                console.log("You Win!!!");
            }
            else if (computerChoice === "scissors"){
                computerScore += 1
                console.log("You lose! Scissors beats Paper");
            }
            else{
                console.log("Its a Tie. Lets go Again");
            }
        }
        if (humanChoice === "scissors"){
            if (computerChoice === "paper"){
                humanScore += 1
                console.log("You Win!!!");
            }
            else if (computerChoice === "rock"){
                computerScore += 1
                console.log("You lose! Rock beats Scissors");
            }
            else{
                console.log("Its a Tie. Lets go Again");
            }
        }
    }


    // playRound(humanSelection, computerSelection);

    for (let i =0; i < 5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        console.log(`Your Choice: ${humanSelection}`);
        console.log(`Computer Choice: ${computerSelection}`);
        
        playRound(humanSelection, computerSelection);
    }

    console.log("Your score:", humanScore);
    console.log("Computer score:", computerScore);

    if (humanScore > computerScore) {
        console.log("You win the game!");
    } 
    else if (computerScore > humanScore) {
        console.log("Computer wins the game!");
    } 
    else {
        console.log("The game is a tie!");
    }
}

playGame()