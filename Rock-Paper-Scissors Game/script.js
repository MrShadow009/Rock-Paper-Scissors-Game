let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const computerChoiceImage = document.querySelector("#computer-choice");

// Display Message
const drawGame = () => {
    msg.innerText = "Game was Draw. Play again.";
    msg.style.color = "#333533";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! ${userChoice} beats ${compChoice}`;
        msg.style.color = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lose! ${compChoice} beats your ${userChoice}`;
        msg.style.color = "red";
    }
};

function getComputerChoice() {
    const choicesArray = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * choicesArray.length);
    return choicesArray[randomIndex];
}

function revealComputerChoice(compChoice) {
    computerChoiceImage.src = `./images/${compChoice.toLowerCase()}.png`; // Update image
    computerChoiceImage.alt = compChoice; // Update alt text
    computerChoiceImage.style.animation = ""; // Stop animation
}

const playGame = (userChoice) => {
    const compChoice = getComputerChoice();

    // Reveal the computer's choice with a delay
    setTimeout(() => revealComputerChoice(compChoice), 1000);

    if (userChoice === compChoice) {
        // Draw game
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "Rock") {
            userWin = compChoice === "Paper" ? false : true;
        } else if (userChoice === "Paper") {
            userWin = compChoice === "Scissors" ? false : true;
        } else {
            userWin = compChoice === "Rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

// Add event listeners to each choice
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});