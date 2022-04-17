

function gameStart(){
    let gameCoin = prompt("Do you want to play a game?");
    return gameCoin;
}

function humanPick(){
    let pick = prompt("1 = Rock, 2 = Scissors, 3 = Paper")
    return pick;
}

function computerPick(){
    let computer = parseInt((Math.random() * 3)+1);
    return computer;
}

function gameLogic(human, computer){

    let victor = "";

    if(human === computer){
        return "tie"
    } if(
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
    
    return victor
}

function game(){

    let playerScore = 0;
    let computerScore = 0;

    start = gameStart();

    while(start === "yes"){

        console.log("Lets play");

        for (let i = 0; i<5; i++){
            let player = humanPick();
            let robot = computerPick();
    
            console.log("Human picked " + player);
            console.log("Robot picked " + robot);
    
            if(gameLogic(player, robot) === "human"){
                playerScore++;
            }else if(gameLogic(player, robot) === "computer"){
                computerScore++;
            }
        }

        if(playerScore > computerScore){
            console.log("Player Wins")
        } else if(playerScore === computerScore){
            console.log("Tie")
        } else{
            console.log("Computer Wins")
        }


        console.log("Human Score: " + playerScore);
        console.log("Computer Score: " + computerScore); 

        start = gameStart();
    }
}

game();

