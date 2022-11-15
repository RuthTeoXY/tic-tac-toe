const Gameboard = {
  gameBoard: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
};

//update gameBoard status
function updateGameboard(x) {
  for (let i = 0; i < Gameboard.gameBoard.length; i++) {
    console.log(Gameboard.gameBoard);
    if (Gameboard.gameBoard[i] == x) {
      console.log(Gameboard.gameBoard);
      Gameboard.gameBoard[i] = curPlayer;
      break;
    }
  }
}

//check for winner
function checkWin(y) {
  if (
    (y[0] === y[3] && y[3] === y[6]) ||
    (y[1] === y[4] && y[4] === y[7]) ||
    (y[2] === y[5] && y[5] === y[8]) ||
    (y[0] === y[1] && y[1] === y[2]) ||
    (y[3] === y[4] && y[4] === y[5]) ||
    (y[6] === y[7] && y[7] === y[8]) ||
    (y[0] === y[4] && y[4] === y[8]) ||
    (y[2] === y[4] && y[4] === y[6])
  ) {
    let status = document.getElementById("status");
    status.textContent = `Player ${changePlayer(curPlayer).token} wins!`;
    let grid = document.getElementsByClassName("grid");
    for (let item = 0; item < grid.length; item++) {
      grid[item].removeEventListener("click", aGame);
    }
  }
}

//create players using factory
const players = (token) => {
  const img = token + ".png";
  return { token, img };
};
const cross = players("one");
const circle = players("two");

curPlayer = cross;

// add event listener to each grid
// on click display the correct token based on players
// making sure that the grid is still empty
function addingEventListeners() {
  let grid = document.getElementsByClassName("grid");
  for (let item = 0; item < grid.length; item++) {
    grid[item].addEventListener("click", aGame);
  }
}

function aGame(event) {
  if (
    event.target.matches("div.grid") &&
    event.target.hasChildNodes() === false
  ) {
    displayToken(event, curPlayer);
    updateGameboard(event.target.id);
    changePlayer(curPlayer);
    statusUpdate();
    checkWin(Gameboard.gameBoard);
  }
}

function displayToken(event, curPlayer) {
  console.log(event);
  let token = document.createElement("img");
  token.src = curPlayer.img;
  event.target.appendChild(token);
}

// players are being alternated

//gameplay
//define current player -> update status
//wait for event -> display image
//change current player
//repeat
let startBtn = document.getElementById("start");
startBtn.addEventListener("click", statusUpdate);
startBtn.addEventListener("click", addingEventListeners);

function statusUpdate() {
  let status = document.getElementById("status");
  status.textContent = `Player ${curPlayer.token}, you are up!`;
}

function changePlayer() {
  if (curPlayer === cross) {
    curPlayer = circle;
  } else {
    curPlayer = cross;
  }
  return curPlayer;
}

// function startGame() {
//   playingTokens = [cross, circle];
//   let status = document.getElementById("status");
//   for (let i = 0; i < 9; i++) {
//     curPlayer = playingTokens[i % 2];
//     status.textContent = `Player ${curPlayer.token}, you are up!`;
//     if (event) {
//       continue;
//     } else {
//     }
//     console.log(curPlayer);
//   }
// }

//checker to check if there's a winner
