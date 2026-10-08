let playerOneCount = 0;
let playerTwoCount = 0;
let weaponsPlayerTwo = ["Schere", "Stein", "Papier"];

let anouncement = document.getElementById('anouncement');

const scissor = document.getElementById('scissor');
const stone = document.getElementById('stone');
const paper = document.getElementById('paper');

scissor.addEventListener('click', (event) => {
    runde('Schere');
    console.log("Player One: Schere")
})
stone.addEventListener('click', (event) => {
    runde('Stein');
    console.log("Player One: Stein")
})

paper.addEventListener('click', (event) => {
    runde('Papier');
    console.log("Player One: Papier")
})


function getWeaponsPlayerTwo() {
    let randomNumber = Math.floor(Math.random() * 3)
    return weaponsPlayerTwo[randomNumber];
}


console.log(getWeaponsPlayerTwo());


function runde(weaponsPlayerOne) {
    const playerTwoChoice = getWeaponsPlayerTwo();


if (playerTwoChoice === "Schere" && weaponsPlayerOne === "Stein") {
    console.log("you win");
    anouncement.innerText = "You won!";
    playerOneCount ++;
    console.log(playerOneCount)
} else if (playerTwoChoice === "Schere" && weaponsPlayerOne === "Papier") {
    console.log("you loose");
    anouncement.innerText = "You loose!";
    playerTwoCount ++;
} else if (playerTwoChoice === "Schere" && weaponsPlayerOne === "Schere") {
    console.log("it's a tie");
    anouncement.innerText = "It's a tie!";
} else if (playerTwoChoice === "Stein" && weaponsPlayerOne === "Schere") {
    console.log("you loose")
    anouncement.innerText = "You loose!";
    playerTwoCount ++;
} else if (playerTwoChoice === "Stein" && weaponsPlayerOne === "Stein") {
    console.log("it's a tie")
    anouncement.innerText = "It's a tie!";
} else if (playerTwoChoice === "Stein" && weaponsPlayerOne === "Papier") {
    console.log("you win")
    anouncement.innerText = "You won!";
    playerOneCount ++;
    console.log(playerOneCount)
} else if (playerTwoChoice === "Papier" && weaponsPlayerOne === "Schere") {
    console.log("you win")
    anouncement.innerText = "You won!";
    playerOneCount ++;
    console.log(playerOneCount)
} else if (playerTwoChoice === "Papier" && weaponsPlayerOne === "Stein") {
    console.log("you loose")
    anouncement.innerText = "You loose!";
    playerTwoCount ++;
} else if (playerTwoChoice === "Papier" && weaponsPlayerOne === "Papier") {
    console.log("it's a tie")
    anouncement.innerText = "It's a tie!";
}

}

if (playerOneCount == 3) {
    console.log("you win");
} else if (playerTwoCount == 3) {
    console.log("you loose");
}