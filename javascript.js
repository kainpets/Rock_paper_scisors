let words = ["Rock", "Paper", "Scisors"];

function computerPlay(arr) {
    return arr[Math.floor(Math.random() * words.length)];
    console.log(computerPlay(words));
}


    

function playerSelection(arr) {
    return arr[Math.floor(Math.random() * words.length)];
    }
    
for (let x=0; x<1; x++)
    console.log(playerSelection(words));

