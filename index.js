"use strict";

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();
let humanScore;
let computerScore;

function getComputerChoice() {
    let rockPaperScissors = ["ROCK", "PAPER", "SCISSORS"];
    let random = Math.floor(Math.random() * rockPaperScissors.length);
    return rockPaperScissors[random];
  }

function getHumanChoice() {
    let userChoice = prompt("(Rock, Paper, or Scissors)Pick One:");
    return userChoice.toUpperCase();
}

function playRound(humanChoice, computerChoice) {
    switch(humanChoice) {
    case "ROCK":
        if (computerChoice === "ROCK") {
            console.log("Draw")
        } else if (computerChoice === "PAPER") {
            console.log("You lose")
        } else if (computerChoice === "SCISSORS") {
            console.log("You win")
        }
        break;
    case "PAPER":
        if (computerChoice === "ROCK") {
            console.log("You win")
        } else if (computerChoice === "PAPER") {
            console.log("Draw")
        } else if (computerChoice === "SCISSORS") {
            console.log("You lose")
        }
        break;
    case "SCISSORS":
        if (computerChoice === "ROCK") {
            console.log("You lose")
        } else if (computerChoice === "PAPER") {
            console.log("You win")
        } else if (computerChoice === "SCISSORS") {
            console.log("Draw")
        }
        break;
    
