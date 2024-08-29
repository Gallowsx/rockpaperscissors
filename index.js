"use strict";

let computerScore = 0;
let humanScore = 0;
const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

function getComputerChoice() {
    let rockPaperScissors = ["ROCK", "PAPER", "SCISSORS"];
    let random = Math.floor(Math.random() * rockPaperScissors.length);
    return rockPaperScissors[random];
  }

function getHumanChoice() {
    let humanChoice = prompt("(Rock, Paper, or Scissors)Pick One:");
    return humanChoice.toUpperCase();
}

function playRound(humanChoice, computerChoice) {
    switch(humanChoice) {
    case "ROCK":
        if (computerChoice === "ROCK") {
            console.log("Draw")
        } else if (computerChoice === "PAPER") {
            console.log("You lose")
            computerScore++;
        } else if (computerChoice === "SCISSORS") {
            console.log("You win")
            humanScore++;
        }
        break;

    case "PAPER":
        if (computerChoice === "ROCK") {
            console.log("You win")
            humanScore ++;
        } else if (computerChoice === "PAPER") {
            console.log("Draw")
        } else if (computerChoice === "SCISSORS") {
            console.log("You lose")
            computerScore ++;
        }
        break;

    case "SCISSORS":
        if (computerChoice === "ROCK") {
            console.log("You lose")
            computerScore++;
        } else if (computerChoice === "PAPER") {
            console.log("You win")
            humanScore++;
        } else if (computerChoice === "SCISSORS") {
            console.log("Draw")
        }
}}


function playGame() {

    playRound(humanChoice, computerChoice);
    if (computerScore < 5&& humanScore < 5) {
        alert( 'Next Round!')
    }
    else if (humanScore >= 5) {
        console.log("You win the game!")
    }
    else if (computerScore >= 5) {
        console.log("You lose the game!")
    }
    console.log("Human score is", humanScore);
    console.log("Computer score is", computerScore);
}

playGame();
