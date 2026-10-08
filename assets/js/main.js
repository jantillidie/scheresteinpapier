let playerOneCount = 0;
let playerTwoCount = 0;
let weaponsPlayerTwo = ["Schere", "Stein", "Papier"];

let anouncement = document.getElementById('anouncement');
let playerOneDisplay = document.getElementById('player-1')
let playerTwoDisplay = document.getElementById('player-2')


const scissor = document.getElementById('scissor');
const stone = document.getElementById('stone');
const paper = document.getElementById('paper');

scissor.addEventListener('click', () => {
    runde('Schere');
    console.log("Player One: Schere")
})
stone.addEventListener('click', () => {
    runde('Stein');
    console.log("Player One: Stein")
})

paper.addEventListener('click', () => {
    runde('Papier');
    console.log("Player One: Papier")
})


function getWeaponsPlayerTwo() {
    let randomNumber = Math.floor(Math.random() * 3)
    return weaponsPlayerTwo[randomNumber];
}


console.log(getWeaponsPlayerTwo());


function runde(weaponsPlayerOne) {
    if (playerOneCount >= 3 || playerTwoCount >= 3) return;
    const playerTwoChoice = getWeaponsPlayerTwo();


    if (playerTwoChoice === "Schere" && weaponsPlayerOne === "Stein") {
        anouncement.innerText = "You won!";
        playerOneCount++;
    } else if (playerTwoChoice === "Schere" && weaponsPlayerOne === "Papier") {
        anouncement.innerText = "You loose!";
        playerTwoCount++;
    } else if (playerTwoChoice === "Schere" && weaponsPlayerOne === "Schere") {
        anouncement.innerText = "It's a tie!";
    } else if (playerTwoChoice === "Stein" && weaponsPlayerOne === "Schere") {
        anouncement.innerText = "You loose!";
        playerTwoCount++;
    } else if (playerTwoChoice === "Stein" && weaponsPlayerOne === "Stein") {
        anouncement.innerText = "It's a tie!";
    } else if (playerTwoChoice === "Stein" && weaponsPlayerOne === "Papier") {
        anouncement.innerText = "You won!";
        playerOneCount++;
    } else if (playerTwoChoice === "Papier" && weaponsPlayerOne === "Schere") {
        anouncement.innerText = "You won!";
        playerOneCount++;
    } else if (playerTwoChoice === "Papier" && weaponsPlayerOne === "Stein") {
        anouncement.innerText = "You loose!";
        playerTwoCount++;
    } else if (playerTwoChoice === "Papier" && weaponsPlayerOne === "Papier") {
        anouncement.innerText = "It's a tie!";
    }

    playerOneDisplay.innerText = playerOneCount;
    playerTwoDisplay.innerText = playerTwoCount;

    gameOver();

}
function gameOver() {

    if (playerOneCount == 3) {
        anouncement.innerText = "You won!";
    } else if (playerTwoCount == 3) {
        anouncement.innerText = "You loose!";
    }
}