const rock = "https://static.vecteezy.com/system/resources/previews/050/740/253/non_2x/cute-smiling-rock-cartoon-illustration-vector.jpg";
const paper = "https://img.freepik.com/premium-vector/hand-drawn-paper-cartoon-illustration_23-2151474658.jpg";
const scissors = "https://img.freepik.com/premium-vector/cartoon-retro-groovy-school-scissors-character_53500-6295.jpg";

let computerScore = 0;
let humanScore = 0;
let roundsPlayed = 0;

let scoreDiv = document.querySelector(".score");
let scoreDis = document.createElement("h1");
scoreDis.textContent = `${humanScore} - ${computerScore}`;
scoreDiv.appendChild(scoreDis);

const resetmessage = document.createElement("h1");
const resetscoreDis = document.createElement("h1");
document.querySelector(".restart").appendChild(resetmessage);
document.querySelector(".restart").appendChild(resetscoreDis);

const message = document.createElement("h2");
scoreDiv.appendChild(message);

document.getElementById("start").addEventListener("click", () => {
    document.querySelector(".box").style.display = "none";
    document.querySelector(".game").style.display = "flex";
    message.textContent = "Click on a picture to make your move.";
    humanScore = 0;
    computerScore = 0;
    roundsPlayed = 0;
    scoreDis.textContent = `${humanScore} - ${computerScore}`;
});

document.getElementById("restart").addEventListener("click", () => {
    document.querySelector(".restart").style.display = "none";
    document.querySelector(".game").style.display = "flex";

    let choices = document.querySelectorAll(".choices img");
    choices[0].src = "";
    choices[1].src = "";

    message.textContent = "Click on a picture to make your move.";

    humanScore = 0;
    computerScore = 0;
    roundsPlayed = 0;
    scoreDis.textContent = `${humanScore} - ${computerScore}`;
});

function getComputerChoice() {
    let random = Math.random();
    if (random < 0.33) {
        return "rock";
    }
    else if (random < 0.66) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function display(humanChoice, computerChoice) {
    let choices = document.querySelectorAll(".choices img");
    choices[0].src = getImage(humanChoice);
    choices[1].src = getImage(computerChoice);
}

const choice = document.querySelectorAll(".select");
choice.forEach(img => {
    img.addEventListener("click", () => {
        if(roundsPlayed >= 5) return;
        const humanChoice = img.alt.toLowerCase();
        const computerChoice = getComputerChoice().toLowerCase();
        playRound(humanChoice, computerChoice);
    })
})



function playRound(humanChoice, computerChoice) {
    message.textContent = "";
    display(humanChoice, computerChoice);

    if (computerChoice == "rock") {
        if (humanChoice == "paper") {
                message.textContent = "🎉 Congratulations! 📄 Paper beats 🪨 Rock. 🎉";
                humanScore++;
            }
            else if (humanChoice == "scissors") {
                message.textContent = "😢 Better luck next time! 🪨 Rock beats 🪨 ✂️  Scissors. 😢";
                computerScore++;
            }
            else {
                message.textContent = "It's a tie! No points awarded.";
            }
        }
        else if (computerChoice == "paper") {
            if (humanChoice == "rock") {
                message.textContent = "😢 Better luck next time! 📄 Paper beats 🪨 Rock. 😢";
                computerScore++;
            }
            else if (humanChoice == "scissors") {
                message.textContent = "🎉 Congratulations! 🪨 ✂️  Scissors beats 📄 Paper. 🎉";
                humanScore++;
            }
            else {
                message.textContent = "It's a tie! No points awarded.";
            }
        }
        else {
            if (humanChoice == "paper") {
                message.textContent = "😢 Better luck next time! 🪨 ✂️  Scissors beats 📄 Paper. 😢";
                computerScore++;
            }
            else if (humanChoice == "rock") {
                message.textContent = "🎉 Congratulations! 🪨 Rock beats 🪨 ✂️  Scissors. 🎉";
                humanScore++;
            }
            else {
                message.textContent = "It's a tie! No points awarded.";
            }
        }
        scoreDis.textContent = "";
        scoreDis.textContent = `${humanScore} - ${computerScore}`;
        roundsPlayed++;

        if (roundsPlayed === 5) {
            document.querySelector(".game").style.display = "none";
            document.querySelector(".restart").style.display = "flex";

            resetscoreDis.textContent = "";
            resetmessage.textContent = "";

            if (humanScore == computerScore) {
                resetscoreDis.textContent = `${humanScore} - ${computerScore}`;
                resetmessage.textContent = "It's a tie!!!";
            }
            else if (humanScore > computerScore) {
                resetscoreDis.textContent = `${humanScore} - ${computerScore}`;
                resetmessage.textContent = `🎉 Congratulation! You won !!! 🎉`;
            }
            else {
                resetscoreDis.textContent = `${humanScore} - ${computerScore}`;
                resetmessage.textContent = `😢 Better luck next time !!! 😢`;
            }
        }
    }
    
    function getImage(choice) {
    if (choice == "rock") {
        return rock;
    }
    else if (choice == "paper") {
        return paper;
    }
    return scissors;
}