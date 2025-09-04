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

const buttons = [];

const music = document.getElementById("bg-music");
const clickSound = document.getElementById("click-sound");
const winSound = document.getElementById("win-sound");
const tieSound = document.getElementById("tie-sound");
const gameOverSound = document.getElementById("game-over-sound");


window.addEventListener("load", () => {
  music.volume = 0.5; 
  music.play().catch((err) => {
    console.log("Autoplay blocked until user interacts.", err);
  });
});
document.body.addEventListener("click", () => {
  if (music.paused) {
    music.play();
  }
});

const container = document.querySelector(".container");
const turn = document.querySelector(".turn");
const board = document.querySelector(".board");
const nextRound = document.createElement("button");
nextRound.innerText = "Next Round";
nextRound.classList.add("roundBtn");
board.textContent = '';

const nameBtn = document.createElement("button");
nameBtn.innerText = "Add Name";
nameBtn.classList.add("nameBtn");
nameBtn.addEventListener("click", () => {
  const name = prompt("What's your name?");
  if (name){
    document.querySelector(
      ".name"
    ).innerText = `Hi, ${name}!!`;
  }
})
document.body.appendChild(nameBtn);


function switchPlayers() {
  players.currentTurn =
    players.currentTurn === players.player1 ? players.player2 : players.player1;
  console.log(players.currentTurn);
}

    let round = 1;

nextRound.addEventListener("click", () => {
  Gameboard.board = ["", "", "", "", "", "", "", "", ""];
  buttons.forEach((btn) => {
    btn.innerText = "";
    btn.disabled = false;
  });
    players.currentTurn = "X";
round++;
  document.querySelector(".heading").innerText = `Play Round: ${round}`; 
  nextRound.style.display = "none";
});
document.body.appendChild(nextRound);

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
    score.innerText = `${winner} wins!`;
    nextRound.style.display = "block"; 
    return winner;
    } else if (!Gameboard.board.includes("")) {
      console.log("Its a tie!");
            const score = document.querySelector(".heading");
          score.innerText = `Its a tie!`;
          nextRound.style.display = "block";
          return "tie";
    }
return null;
  }

for (let row = 0; row < 3; row++){
  for(let col = 0; col < 3; col++){
    const button = document.createElement("button");
    button.classList.add("btn");
    const index = row * 3 + col;

    button.addEventListener("click", () => {
console.log(`button clicked at row ${row}, col ${col}`);
if(Gameboard.board[index] !== '') return;
Gameboard.board[index] = players.currentTurn;
  button.innerText = players.currentTurn;
clickSound.currentTime = 0;
clickSound.play();

const result = winGame();

if (result === "X" || result === "O") {
  winSound.currentTime = 0;
  winSound.play();

} else if (result === "tie") {
  music.pause();

  tieSound.currentTime = 0;
  tieSound.play();

  setTimeout(() => {
    gameOverSound.currentTime = 0;
    gameOverSound.play();
  }, 500);

  setTimeout(() => {
    music.play();
  }, 2500);
} else {

switchPlayers();
}
});
buttons.push(button);
board.appendChild(button);

}
}

