const ROW = 15;
const COL = 15;

let grid = [
  ['*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*'],
  ['*', ' ', '*', ' ', ' ', ' ', '*', ' ', '*', ' ', '*', ' ', ' ', ' ', '*'],
  ['*', ' ', '*', ' ', '*', ' ', '*', ' ', '*', ' ', '*', ' ', ' ', ' ', '*'],
  ['*', ' ', '*', ' ', '*', ' ', '*', ' ', '*', ' ', '*', ' ', '*', ' ', '*'],
  ['*', ' ', '*', ' ', '*', ' ', '*', ' ', '*', ' ', '*', ' ', '*', ' ', '*'],
  ['*', ' ', '*', ' ', '*', ' ', '*', ' ', '*', ' ', '*', ' ', '*', ' ', '*'],
  ['*', ' ', '*', ' ', '*', ' ', '*', ' ', '*', ' ', '*', ' ', '*', ' ', ' '],
  ['*', ' ', '*', ' ', '*', ' ', '*', ' ', '*', ' ', '*', ' ', '*', ' ', '*'],
  ['*', ' ', '*', ' ', '*', ' ', '*', ' ', '*', ' ', ' ', ' ', '*', ' ', '*'],
  ['*', ' ', '*', ' ', '*', ' ', '*', ' ', '*', ' ', '*', ' ', '*', ' ', '*'],
  ['*', ' ', '*', ' ', '*', ' ', '*', ' ', '*', ' ', '*', ' ', '*', ' ', '*'],
  ['*', ' ', '*', ' ', '*', ' ', '*', ' ', '*', ' ', '*', ' ', '*', ' ', '*'],
  ['*', ' ', ' ', ' ', '*', ' ', '*', ' ', '*', ' ', '*', ' ', ' ', ' ', '*'],
  ['*', ' ', ' ', ' ', '*', ' ', ' ', ' ', ' ', ' ', '*', ' ', ' ', ' ', '*'],
  ['*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*'],
];

let playerRow = 1;
let playerCol = 1;
grid[playerRow][playerCol] = '&';

let chaveRow = 1;
let chaveCol = 7;
grid[chaveRow][chaveCol] = '@';

let portaRow = 6;
let portaCol = 14;
grid[portaRow][portaCol] = 'D';

let table = document.createElement('table');
table.id = 'grid';
document.getElementById('grid-container').appendChild(table);

drawGrid();

function drawGrid() {
  let table = document.getElementById('grid');
  table.innerHTML = '';
  for (let i = 0; i < ROW; i++) {
    let row = document.createElement('tr');
    for (let j = 0; j < COL; j++) {
      let cell = document.createElement('td');
      cell.textContent = grid[i][j];
      row.appendChild(cell);
    }
    table.appendChild(row);
  }
}

function movePlayer(key) {
  let nextRow = playerRow;
  let nextCol = playerCol;

  switch (key) {
    case 'w':
      nextRow = playerRow - 1;
      break;
    case 's':
      nextRow = playerRow + 1;
      break;
    case 'a':
      nextCol = playerCol - 1;
      break;
    case 'd':
      nextCol = playerCol + 1;
      break;
    case 'i':
      if (playerRow === chaveRow && playerCol === chaveCol) {
        grid[chaveRow][chaveCol] = ' ';
        grid[portaRow][portaCol] = '=';
        grid[chaveRow][chaveCol] = '@';
      }
      break;
  }
  
  if (grid[nextRow][nextCol] !== '*' && grid[nextRow][nextCol] !== '#' && grid[nextRow][nextCol] !== 'D') {
    grid[playerRow][playerCol] = ' ';
    playerRow = nextRow;
    playerCol = nextCol;
    grid[playerRow][playerCol] = '&';
  } else if (grid[nextRow][nextCol] === '#') {
      spikeCount++
    resetPlayerPosition();
    if (spikeCount === 3) {
      window.location.href = "gameover.html";}
  } 
  if(playerRow === 6 && playerCol === 14){
    window.open('fase2.html', '_self');
  }
  drawGrid();
 
}
document.addEventListener('keydown', (event) => {
  movePlayer(event.key);
});