const Gameboard = {
board: ['', '', '',
  '', '', '',
  '', '', ''],
}

const players = {
player1: 'X',
player2: 'O',
currentTurn: 'X'
}

const gameControl = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],

  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],

  [0, 4, 8],
  [2, 4, 6]
]


const container = document.querySelector(".container");
const turn = document.querySelector(".turn");
const board = document.querySelector(".board");

board.textContent = '';

for (let row = 0; row < 3; row++){
  for(let col = 0; col < 3; col++){
    const button = document.createElement("button");
    button.classList.add("btn");
    button.addEventListener("click", () => {
console.log(`button clicked at row ${row}, col ${col}`);

function switchPlayers(){
   players.currentTurn = players.currentTurn === players.player1 ? players.player2 : players.player1;
      console.log(players.currentTurn);

}
  button.innerText = players.currentTurn;
  switchPlayers();

});
board.appendChild(button);
}
}

