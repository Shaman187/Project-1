/*----- constants -----*/

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



// console.log(playGameButton);

playGameButton.addEventListener("click", function reset(){
  currentPlayer = players[1].name;
  // players[1].score = 0;
  // players[-1].score = 0;

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

init();

let currentPlayer = players[1].name;


let rows = document.querySelectorAll("[row]");
let columns = document.querySelectorAll("[column]");

function render(){
  // console.log(rows)
  // console.log(columns)
  board.forEach(function (rows, i){
    rows.forEach(function (columns, j){
      if(board[i][j] == 1) {let idx = i * 7 + j;
        document.getElementById(`${idx}`).style.backgroundColor = 'green';
      } else if (board[i][j] == -1) {
        let idx = i * 7 + j 
        document.getElementById(`${idx}`).style.backgroundColor = 'purple';
      }
    })
  })
  if(currentPlayer === players[1].name){
    currentPlayer = players[-1].name;
  } else if (currentPlayer === players[-1].name){
    currentPlayer = players[1].name; 
  }
};



function spaceClicked(e){
  if (e.target.className !== "grid-item") {
    return 
  }
  console.log('this is e ', e.target)  
  
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
  console.log(board);
  render();
};
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