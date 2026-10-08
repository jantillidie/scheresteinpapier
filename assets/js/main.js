let playerOneCount = 0;
let playerTwoCount = 0;
let weaponsPlayerTwo = ["Schere", "Stein", "Papier"];
let weaponsPlayerOne = '';

const scissor = document.getElementById('scissor');
const stone = document.getElementById('stone');
const paper = document.getElementById('paper');

scissor.addEventListener('click', (event) => {
    weaponsPlayerOne = 'Schere';
    console.log("Player One: Schere")
})
stone.addEventListener('click', (event) => {
    weaponsPlayerOne = 'Stein';
    console.log("Player One: Stein")
})

paper.addEventListener('click', (event) => {
    weaponsPlayerOne = 'Papier';
    console.log("Player One: Papier")
})


function getWeaponsPlayerTwo() {
    let randomNumber = Math.floor(Math.random() * 3)
    return weaponsPlayerTwo[randomNumber];
}


console.log(getWeaponsPlayerTwo());

// eventlistener stuff


if (getWeaponsPlayerTwo == "Schere" && weaponsPlayerOne == "Stein") {
    console.log("you win");
    playerOneCount += 1;
} else if (getWeaponsPlayerTwo == "Schere" && weaponsPlayerOne == "Papier") {
    console.log("you loose");
    playerTwoCount += 1;
} else if (getWeaponsPlayerTwo == "Schere" && weaponsPlayerOne == "Schere") {
    console.log("it's a tie");
} else if (getWeaponsPlayerTwo == "Stein" && weaponsPlayerOne == "Schere") {
    console.log("you loose")
} else if (getWeaponsPlayerTwo == "Stein" && weaponsPlayerOne == "Stein") {
    console.log("it's a tie")
} else if (getWeaponsPlayerTwo == "Stein" && weaponsPlayerOne == "Papier") {
    console.log("you win")
} else if (getWeaponsPlayerTwo == "Papier" && weaponsPlayerOne == "Schere") {
    console.log("you win")
} else if (getWeaponsPlayerTwo == "Papier" && weaponsPlayerOne == "Stein") {
    console.log("you loose")
} else if (getWeaponsPlayerTwo == "Papier" && weaponsPlayerOne == "Papier") {
    console.log("it's a tie")
}

if (playerOneCount == 3) {
    console.log("you win");
} else if (playerTwoCount == 3) {
    console.log("you loose");
}