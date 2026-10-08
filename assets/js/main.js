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
})
stone.addEventListener('click', () => {
    runde('Stein');
})

paper.addEventListener('click', () => {
    runde('Papier');
})


function getWeaponsPlayerTwo() {
    let randomNumber = Math.floor(Math.random() * 3)
    return weaponsPlayerTwo[randomNumber];
}




function runde(weaponsPlayerOne) {
    if (playerOneCount >= 3 || playerTwoCount >= 3) {
        playerOneDisplay = '';
        playerTwoDisplay = '';
        return;
    };
    const playerTwoChoice = getWeaponsPlayerTwo();


    if (playerTwoChoice === weaponsPlayerOne) {
        anouncement.innerText = "It's a tie";
    } else if (playerTwoChoice === "Schere" && weaponsPlayerOne === "Papier") {
        anouncement.innerText = "You lost the round!";
        playerTwoCount++;
    } else if (playerTwoChoice === "Stein" && weaponsPlayerOne === "Schere") {
        anouncement.innerText = "You lost the round!";
        playerTwoCount++;
    } else if (playerTwoChoice === "Papier" && weaponsPlayerOne === "Stein") {
        anouncement.innerText = "You lost the round!";
        playerTwoCount++;
    } else if (playerTwoChoice === "Papier" && weaponsPlayerOne === "Schere") {
        anouncement.innerText = "You won the round!";
        playerOneCount++;
    } else if (playerTwoChoice === "Stein" && weaponsPlayerOne === "Papier") {
        anouncement.innerText = "You won the round!";
        playerOneCount++;
    } else if (playerTwoChoice === "Schere" && weaponsPlayerOne === "Stein") {
        anouncement.innerText = "You won the round!";
        playerOneCount++;
    }

    playerOneDisplay.innerText = playerOneCount;
    playerTwoDisplay.innerText = playerTwoCount;

    gameOver();

}
function gameOver() {

    if (playerOneCount == 3) {
        anouncement.innerText = "You won the game!";
    } else if (playerTwoCount == 3) {
        anouncement.innerText = "You lost the game!";
    }
}