/*----- constants -----*/
boardEl = document.querySelector(".grid-container");
// console.log(players);
let players = {
  "1": {
    name: "Player 1",
    score: 0
  },
  "-1": {
    name: "Player 2",
    score: 0
  }
};

const newGameButton = document.querySelector(".gameButton");

/*----- app's state (variables) -----*/
let board = [
  [0,0,0,0,0,0,0], 
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0]
];

/*----- cached element references -----*/
/*----- event listeners -----*/
/*----- functions -----*/

let playGameButton = document.createElement("button");

playGameButton.classList.add("gameButton");
playGameButton.innerHTML = "Play Game";
let body = document.getElementsByTagName("body")[0];
body.appendChild(playGameButton);




playGameButton.addEventListener("click", function reset(){
  currentPlayer = players[1].name;

  board = [
    [0,0,0,0,0,0,0], 
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0]
  ];
});


// Init

init();

function init(){
  
  let board = document.querySelector(".grid-container");
  board.addEventListener("click", spaceClicked);
  
  
  let players = {
    "1": {
      name: "Player 1",
      score: 0
    },
    "-1": {
      name: "Player 2",
      score: 0
    }
  };
}

let currentPlayer = players[1].name;
let rows = document.querySelectorAll("[row]");
let columns = document.querySelectorAll("[column]");

function render(){
  board.forEach(function (rows, i){
    rows.forEach(function (columns, j){
      if(board[i][j] == 1) {let idx = i * 7 + j;
        document.getElementById(`${idx}`).style.backgroundColor = 'green';
      } else if (board[i][j] == -1) {
        let idx = i * 7 + j 
        document.getElementById(`${idx}`).style.backgroundColor = 'purple';
      } else if (board[i][j] == 0) {
        let idx = i * 7 + j 
        document.getElementById(`${idx}`).style.backgroundColor = 'white';
      }
    })
  });
};



function changeTurn() {
  if(currentPlayer === players[1].name){
    currentPlayer = players[-1].name;
    checkWinner(board);
  } else if (currentPlayer === players[-1].name){
    currentPlayer = players[1].name;
    checkWinner(board);
  } 
};

function spaceClicked(e){
  if (e.target.className !== "grid-item") {
    return 
  }
  
  let click = parseInt(e.target.id);
  let bottomSpace = click % 7 + 35;
  let secondSpace = click % 7 + 28;
  let thirdSpace = click % 7 + 21;
  let fourthSpace = click % 7 + 14;
  let fifthSpace = click % 7 + 7;
  let topSpace = click % 7;
  if (board[Math.floor(bottomSpace / 7)][bottomSpace % 7] == 0){
    board[Math.floor(bottomSpace / 7)][bottomSpace % 7] = currentPlayer === 'Player 1' ? 1 : -1;
  } else if(board[Math.floor(secondSpace / 7)][secondSpace % 7] == 0){
    board[Math.floor(secondSpace / 7)][secondSpace % 7] = currentPlayer === 'Player 1' ? 1 : -1;
  } else if(board[Math.floor(thirdSpace / 7)][thirdSpace % 7] == 0){
    board[Math.floor(thirdSpace / 7)][thirdSpace % 7] = currentPlayer === 'Player 1' ? 1 : -1;
  } else if(board[Math.floor(fourthSpace / 7)][fourthSpace % 7] == 0){
    board[Math.floor(fourthSpace / 7)][fourthSpace % 7] = currentPlayer === 'Player 1' ? 1 : -1;
  } else if(board[Math.floor(fifthSpace / 7)][fifthSpace % 7] == 0){
    board[Math.floor(fifthSpace / 7)][fifthSpace % 7] = currentPlayer === 'Player 1' ? 1 : -1;
  } else if(board[Math.floor(topSpace / 7)][topSpace % 7] == 0){
    board[Math.floor(topSpace / 7)][topSpace % 7] = currentPlayer === 'Player 1' ? 1 : -1;
  } else {
    alert('NOPE')
  }
  changeTurn();
  render();
  
  let winner = checkWinner(board)
  if (winner == 1 || winner == -1) {
    alert("You have won!");
  }
};


playGameButton.addEventListener('click', function init() {
  
  currentPlayer = players[1].name;
  let newBoard = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
  ]; 
  
  board = newBoard;
  
  render();
});

function checkLine(a, b, c, d) {
  // Check first cell non-zero and all cells match
  return ((a != 0) && (a == b) && (a == c) && (a == d));
}
function checkWinner(bd) {
  // Check down
  for (r = 0; r < 3; r++)
  for (c = 0; c < 7; c++)
  if (checkLine(bd[r][c], bd[r + 1][c], bd[r + 2][c], bd[r + 3][c]))
  return bd[r][c];
  // Check right
  for (r = 0; r < 6; r++)
  for (c = 0; c < 4; c++)
  if (checkLine(bd[r][c], bd[r][c + 1], bd[r][c + 2], bd[r][c + 3]))
  return bd[r][c];
  // Check down-right
  for (r = 0; r < 3; r++)
  for (c = 0; c < 4; c++)
  if (checkLine(bd[r][c], bd[r + 1][c + 1], bd[r + 2][c + 2], bd[r + 3][c + 3]))
  return bd[r][c];
  // Check down-left
  for (r = 3; r < 6; r++)
  for (c = 0; c < 4; c++)
  if (checkLine(bd[r][c], bd[r - 1][c + 1], bd[r - 2][c + 2], bd[r - 3][c + 3]))
  return bd[r][c];
  return 0;
};



// console.log(rows)
// console.log(board);
// console.log(columns)
// console.log(playGameButton);
// console.log('this is e ', e.target)  
// console.log(currentPlayer, "check ONE");
// console.log(currentPlayer, "PLAY GAME BUTTON PRESS");
// Add event listeners for buttons/gameboard or possibly do an event listener for
// entire grid so that it eliminates unecessary/extra code and simplifies functions  
// addEventListeners as I add functions  
// Play BG music when 'Play Game' button is clicked - Icebox
// Make Win/Lose/Draw message box
// Make current turn/player message box    
// Check for Win/Lose/Draw after each piece is placed aka win logic | basically done(want to display win message)   
// Make play game button - done |  Set button to reset board on init - work in progress
// make function to sort out win logic and check for a winner as the game progresses  
// code result displayed for player winning
// write code for event listener to check the winner after each piece is chosen     
// Make gameboard border turn red when a winner is determined - icebox