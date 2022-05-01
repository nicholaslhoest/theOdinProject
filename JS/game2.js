

// DOM Elements
// Get those document SWAG LOL 
// Hey SD fix this bug. It be buggy sometimes 
const rock = document.querySelector(".rock");
const scissors = document.querySelector(".scissors");
const paper = document.querySelector(".paper");

const start = document.querySelector(".start");

const score = document.querySelector('h4');
const humanPick = document.querySelector(".humanPick");

const humanScore = document.querySelector(".humanScore");
const comScore = document.querySelector(".comScore");

let counter = 0;
let game = false;
let pick = ""

rock.addEventListener('click', () => {
    pick = 1;
    humanPick.textContent = "You Picked Rock";
    let numberComputer = computerPick();
    gameLogic(pick, numberComputer);
})

scissors.addEventListener('click', () => {
    pick = 2;
    humanPick.textContent = "You Picked Scissors";
    let numberComputer = computerPick();
    gameLogic(pick, numberComputer);
})

paper.addEventListener('click', () => {
    pick = 3;
    humanPick.textContent = "You Picked Paper";
    let numberComputer = computerPick();
    gameLogic(pick, numberComputer);
})


// Game Logic

const comPick = document.querySelector(".comPick");

function computerPick(){
    let computer = parseInt((Math.random() * 3)+1);
    comPick.textContent = "Computer Picked " + convertChoice(computer);
    return computer;
}

function convertChoice(number){
    if(number === 1){
        return "rock";
    } else if(number === 2){
        return "scissors";
    } else if(number === 3){
        return "paper";
    }
}

function gameLogic(human, computer){

    let victor = "";

    if(human === computer){
        return "tie"
    } else if(
        (human == 1 && computer == 2) ||
        (human == 2 && computer == 3) ||
        (human == 3 && computer == 1)   
    ){
        victor = "human";
    } else if(
        (human == 2 && computer == 1) ||
        (human == 3 && computer == 2) ||
        (human == 1 && computer == 3)   
    ){
        victor = "computer";
    }  
    
    playerScore(victor);
}

function playerScore(victor){
    let comPoints = 0;
    let playerPoints = 0;

    if(victor == "computer"){
        comPoints++;
        comScore.textContent = "Computer Score: " + comPoints;
    } else if(victor == "human"){
        playerPoints++;
        humanScore.textContent = "Human Score: " + playerPoints;
    }
}