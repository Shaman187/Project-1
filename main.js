/*----- constants -----*/

// console.log(players);
const players = {
  "1": {
    name: "Player 1",
    score: 0
  },
  "-1": {
    name: "Player 2",
    score: 0
  }
};


/*----- app's state (variables) -----*/
let board = [
  [0,0,0,0,0,0,0], 
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0]
]

/*----- cached element references -----*/
// let 

/*----- event listeners -----*/


/*----- functions -----*/





// Add event listeners for buttons/gameboard or possibly do an event listener for
// entire grid so that it eliminates unecessary/extra code and simplifies functions

function spaceClicked(e){
  if (e.target.className !== 'grid-item') {
      return 
  }
  // console.log('this is e', e.target)  
  let click = parseInt(e.target.id);
  let bottomSpace = click % 7 + 35;
  let secondSpace = click % 7 + 28;
  let thirdSpace = click % 7 + 21;
  let fourthSpace = click % 7 + 14;
  let fifthSpace = click % 7 + 7;
  let topSpace = click % 7;

  if (board[Math.floor(bottomSpace / 7)][bottomSpace % 7] == 0){
    board[Math.floor(bottomSpace / 7)][bottomSpace % 7] = 1;
  } else if(grid[Math.floor(secondSpace / 7)][secondSpace % 7] == 0){
    board[Math.floor(secondSpace / 7)][secondSpace % 7] = 1;
  } else if(grid[Math.floor(thirdSpace / 7)][thirdSpace % 7] == 0){
    board[Math.floor(thirdSpace / 7)][thirdSpace % 7] = 1;
  } else if(grid[Math.floor(fourthSpace / 7)][fourthSpace % 7] == 0){
    board[Math.floor(fourthSpace / 7)][fourthSpace % 7] = 1;
  } else if(grid[Math.floor(fifthSpace / 7)][fifthSpace % 7] == 0){
    board[Math.floor(fifthSpace / 7)][fifthSpace % 7] = 1;
  } else if(grid[Math.floor(topSpace / 7)][topSpace % 7] == 0){
    board[Math.floor(fifthSpace / 7)][fifthSpace % 7] = 1;
  } else {
    alert('SELECTION NOT VALID')
  }
}
// console.log(grid)
// console.log(Math.floor(bottomSpace / 7));
// console.log(grid[bottomSpace / 7])


// addEventListeners as I add functions

// Play BG music when 'Play Game' button is clicked - Icebox


// Make Win/Lose/Draw message box

// Make current turn/player message box

// Make invisible bottom row of divs for rest of the pieces to start on | Get this done ASAP | changing this

// Check for Win/Lose/Draw after each piece is placed aka win logic | basically done(want to display win message)


// Make play game button | done

const playGameButton = document.createElement("button");
playGameButton.innerHTML = "Play Game";

let body = document.getElementsByTagName("body")[0];
body.appendChild(playGameButton);

playGameButton.addEventListener("click", function() {
  alert("Button Works!");
});

// console.log(playGameButton);

// make function to sort out win logic and check for a winner as the game progresses | done(needs result to be shown)
function checkWinner() {
  const cells = document.querySelectorAll("grid-container");
  const winner = document.querySelector("#winner");
  const winCombos = [
    [0, 1, 2, 3], [1, 2, 3, 4], [2, 3, 4, 5], [3, 4, 5, 6], [7, 8, 9, 10], [8, 9, 10, 11], [9, 10, 11, 12],
    [10, 11, 12, 13], [14, 15, 16, 17], [15, 16, 17, 18], [16, 17, 18, 19], [17, 18, 19, 20], [21, 22, 23, 24], 
    [22, 23, 24, 25], [23, 24, 25, 26], [24, 25, 26, 27], [28, 29, 30, 31], [29, 30, 31, 32], [30, 31, 32, 33],
    [31, 32, 33, 34], [35, 36, 37, 38], [36, 37, 38, 39], [37, 38, 39, 40], [38, 39, 40, 41], [0, 7, 14, 21], 
    [7, 14, 21, 28], [14, 21, 28, 35], [1, 8, 15, 22], [8, 15, 22, 29], [15, 22, 29, 36], [2, 9, 16, 23], 
    [9, 16, 23, 30], [16, 23, 30, 37], [3, 10, 17, 24], [10, 17, 24, 31], [17, 24, 31, 38], [4, 11, 18, 25],
    [11, 18, 25, 32], [18, 25, 32, 39], [5, 12, 19, 26], [12, 19, 26, 33], [19, 26, 33, 40], [6, 13, 20, 27],
    [13, 20, 27, 34], [20, 27, 34, 41], [0, 8, 16, 24], [8, 16, 24, 32], [16, 24, 32, 40], [7, 15, 23, 31],
    [15, 23, 31, 39], [14, 22, 30, 38], [1, 9, 17, 25], [9, 17, 25, 33], [17, 25, 33, 41], [2, 10, 18, 26],
    [10, 18, 26, 34], [3, 11, 19, 27], [3, 9, 15, 21], [4, 10, 16, 22], [10, 16, 22, 28], [5, 11, 17, 23],
    [11, 17, 23, 29], [17, 23, 29, 35], [6, 12, 18, 24], [12, 18, 24, 30], [18, 24, 30, 36], [13, 19, 25, 31],
    [19, 25, 31, 37], [20, 26, 32, 38]
  ];
  
  for(let y = 0; y < winCombos.length; y++) {
    const win1 = cells[winCombos[y][0]];
    const win2 = cells[winCombos[y][1]];
    const win3 = cells[winCombos[y][2]];
    const win4 = cells[winCombos[y][3]];
    if(win1.classList.contains("player1")
    && win2.classList.contains("player1")
    && win3.classList.contains("player1")
    && win4.classList.contains("player1")) {

      // code result displayed for player 1 winning
      winner.innerHTML = "Player 1 has beat you!"

    } else if(win1.classList.contains("player2")
    && win2.classList.contains("player2")
    && win3.classList.contains("player2")
    && win4.classList.contains("player2")) {

// code result displayed for player 2 winning
      winner.innerHTML = "Player 2 has beat you!"
    }
  };
};

// write code for event listener to check the winner after each piece is chosen

cells.forEach(cells => cells.addEventListener("click", checkWinner))


// console.log(cells);
// console.log(checkWinner);
// Make gameboard border turn red when a winner is determined

// Init

// function init()
// Render 
