var words = ["Rock", "Paper", "Scisors"];

function randomWord(arr) {
    return arr[Math.floor(Math.random() * arr.length)];

}

for (var x=0; x<20; x++)
    console.log(randomWord(words))