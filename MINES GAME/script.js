document.addEventListener("DOMContentLoaded", () => {
  const boardSize = 10;
  const mineCount = 10;
  const board = [];
  const gameBoard = document.getElementById("game-board");

  // Initialize the board
  for (let i = 0; i < boardSize; i++) {
    const row = [];
    for (let j = 0; j < boardSize; j++) {
      const cell = {
        hasMine: false,
        revealed: false,
        neighborMines: 0,
        element: document.createElement("div"),
      };
      cell.element.classList.add("cell");
      cell.element.addEventListener("click", () => {
        revealCell(i, j);
      });
      gameBoard.appendChild(cell.element);
      row.push(cell);
    }
    board.push(row);
  }

  // Place mines
  for (let n = 0; n < mineCount; n++) {
    let row, col;
    do {
      row = Math.floor(Math.random() * boardSize);
      col = Math.floor(Math.random() * boardSize);
    } while (board[row][col].hasMine);
    board[row][col].hasMine = true;
  }

  // Calculate neighbor mines
  const directions = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];
  for (let i = 0; i < boardSize; i++) {
    for (let j = 0; j < boardSize; j++) {
      if (!board[i][j].hasMine) {
        directions.forEach(([dx, dy]) => {
          const x = i + dx,
            y = j + dy;
          if (
            x >= 0 &&
            x < boardSize &&
            y >= 0 &&
            y < boardSize &&
            board[x][y].hasMine
          ) {
            board[i][j].neighborMines++;
          }
        });
      }
    }
  }

  function revealCell(row, col) {
    const cell = board[row][col];
    if (cell.revealed) return;
    cell.revealed = true;
    cell.element.classList.add("revealed");
    if (cell.hasMine) {
      cell.element.classList.add("mine");
      alert("Game Over!");
      return;
    }
    if (cell.neighborMines > 0) {
      cell.element.textContent = cell.neighborMines;
    } else {
      directions.forEach(([dx, dy]) => {
        const x = row + dx,
          y = col + dy;
        if (x >= 0 && x < boardSize && y >= 0 && y < boardSize) {
          revealCell(x, y);
        }
      });
    }
  }
});
