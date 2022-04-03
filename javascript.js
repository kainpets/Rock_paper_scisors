let words = ["Rock", "Paper", "Scisors"];

function computerPlay(arr) {
    return arr[Math.floor(Math.random() * words.length)];
}

console.log(computerPlay(words));

function playRound(arr) {
    var playerSelection = arr[Math.floor(Math.random() * words.length)];
    console.log(playerSelection);
    var computerSelection = arr[Math.floor(Math.random() * words.length)];
    console.log(computerSelection);
    
    if (playerSelection === "Rock" && computerSelection === "Scisors") {
        console.log("You won! Rock beats Scisors!");
    } else if (playerSelection === "Rock" && computerSelection === "Paper"){
        console.log("You lost! Paper beats Rock!");
    } else if (playerSelection === "Rock" && computerSelection === "Rock"){
        console.log("It is a draw!");
    } else if (playerSelection === "Paper" && computerSelection === "Rock"){
        console.log("You won! Paper beats Rock!");
    } else if (playerSelection === "Paper" && computerSelection === "Paper"){
        console.log("It is a draw!");
    } else if (playerSelection === "Paper" && computerSelection === "Scisors"){
        console.log("You lost! Paper beats Scisors!");
    } else if (playerSelection === "Scisors" && computerSelection === "Rock"){
        console.log("You lost! Rock beats Scisors!");
    } else if (playerSelection === "Scisors" && computerSelection === "Paper"){
        console.log("You won! Scisors beats Paper!");
    } else if (playerSelection === "Scisors" && computerSelection === "Scisors"){
        console.log("It is a draw!");
    }
 
}



console.log(playRound(words));