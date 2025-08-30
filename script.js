const Gameboard = {
board: [],
}

const players = {

}

const gameControl = {
  
}

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
});
board.appendChild(button);
  }
}
