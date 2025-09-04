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


function switchPlayers() {
  players.currentTurn =
    players.currentTurn === players.player1 ? players.player2 : players.player1;
  console.log(players.currentTurn);
}


  function winGame() {
    let winner = null;
    gameControl.forEach((combo) => {
      const [a, b, c] = combo;
      if (
        Gameboard.board[a] &&
        Gameboard.board[a] === Gameboard.board[b] &&
        Gameboard.board[a] === Gameboard.board[c]
      ) {
        console.log(`${Gameboard.board[a]} wins`);
        winner = Gameboard.board[a];
      }
    });
    if (winner) {
      
    const allButtons = document.querySelectorAll(".btn");
    allButtons.forEach((btn) => (btn.disabled = true));
      console.log(`${winner} wins`);
      const score = document.querySelector(".heading");
    score.innerText = `${winner} wins`;
    } else if (!Gameboard.board.includes("")) {
      console.log("Its a tie!");
    }
  }

for (let row = 0; row < 3; row++){
  for(let col = 0; col < 3; col++){
    const button = document.createElement("button");
    button.classList.add("btn");
    button.addEventListener("click", () => {
console.log(`button clicked at row ${row}, col ${col}`);
const index = row * 3 + col;
if(Gameboard.board[index] !== '') return;
Gameboard.board[index] = players.currentTurn;
  button.innerText = players.currentTurn;

    winGame();
    switchPlayers();

});
board.appendChild(button);
}
}

/* if players */