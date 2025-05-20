let computerScore = 0;
let humanScore = 0;

playGame();

function getComputerChoice(){
    let random = Math.random();
    if(random < 0.33){
        return "rock";
    }
    else if(random < 0.66){
        return "paper";
    }
    else{
        return "scissors";
    }
}

function getHumanChoice(){
    return prompt("Enter your choice :");
}

function playRound(){
    let computerChoice = getComputerChoice().toLowerCase();
    let humanChoice = getHumanChoice().toLowerCase();

    if(computerChoice == "rock"){
        if(humanChoice == "paper"){
            console.log("Congratulations! Paper beats Rock.");
            humanScore++;
        }
        else if(humanChoice == "scissors"){
            console.log("Better luck next time! Rock beats Scissors.");
            computerScore++;
        }
        else{
            console.log("It's a tie! No points awarded.");
        }
    }
    else if(computerChoice == "paper"){
        if(humanChoice == "rock"){
            console.log("Better luck next time! Paper beats Rock.");
            computerScore++;
        }
        else if(humanChoice == "scissors"){
            console.log("Congratulations! Scissors beats Paper.");
            humanScore++;
        }
        else{
            console.log("It's a tie! No points awarded.");
        }
    }
    else{
        if(humanChoice == "paper"){
            console.log("Better luck next time! Scissors beats Paper.");
            computerScore++;
        }
        else if(humanChoice == "rock"){
            console.log("Congratulations! Rock beats Scissors.");
            humanScore++;
        }
        else{
            console.log("It's a tie! No points awarded.");
        }
    }
}

function playGame(){
    for(let i = 0; i < 5; ++i){
        playRound();
        console.log(`You - Computer \n ${humanScore} - ${computerScore}`);
    }
    if(humanScore == computerScore){
        console.log(`You - Computer \n ${humanScore} - ${computerScore}`);
        console.log("It's a tie!!!");
    }
    else if(humanScore > computerScore){
        console.log(`You - Computer \n ${humanScore} - ${computerScore}`);
        console.log(`Congratulation! You won !!!`);
    }
    else{
        console.log(`You - Computer \n ${humanScore} - ${computerScore}`);
        console.log(`Better luck next time !!!`);
    }
}