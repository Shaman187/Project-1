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
  console.log('this is e ', e.target)  
  let click = parseInt(e.target.id);
  let bottomSpace = click % 7 + 35;
  let secondSpace = click % 7 + 28;
  let thirdSpace = click % 7 + 21;
  let fourthSpace = click % 7 + 14;
  let fifthSpace = click % 7 + 7;
  let topSpace = click % 7;
  // console.log(Math.floor(bottomSpace / 7));
  // console.log(grid[bottomSpace / 7])
  if (grid[Math.floor(bottomSpace / 7)][bottomSpace % 7] == 0){
      grid[Math.floor(bottomSpace / 7)][bottomSpace % 7] = 1;
  } else if(grid[Math.floor(secondSpace / 7)][secondSpace % 7] == 0){
      grid[Math.floor(secondSpace / 7)][secondSpace % 7] = 1;
  } else if(grid[Math.floor(thirdSpace / 7)][thirdSpace % 7] == 0){
      grid[Math.floor(thirdSpace / 7)][thirdSpace % 7] = 1;
  } else if(grid[Math.floor(fourthSpace / 7)][fourthSpace % 7] == 0){
      grid[Math.floor(fourthSpace / 7)][fourthSpace % 7] = 1;
  } else if(grid[Math.floor(fifthSpace / 7)][fifthSpace % 7] == 0){
      grid[Math.floor(fifthSpace / 7)][fifthSpace % 7] = 1;
  } else if(grid[Math.floor(topSpace / 7)][topSpace % 7] == 0){
      grid[Math.floor(topSpace / 7)][topSpace % 7] = 1;
  } else {
      alert('SELECTION NOT VALID')
  }
  console.log(grid)
}
// console.log(Math.floor(bottomSpace / 7));
// console.log(grid[bottomSpace / 7])


// addEventListeners as I add functions

// Play BG music when 'Play Game' button is clicked - Icebox


// Make Win/Lose/Draw message box

// Make current turn/player message box

// Make invisible bottom row of divs for rest of the pieces to start on | Get this done ASAP | changing this

// Check for Win/Lose/Draw after each piece is placed aka win logic | basically done(want to display win message)


// Make play game button - done |  Set button to reset board on init

const playGameButton = document.createElement("button");
playGameButton.className = "gameButton";
playGameButton.innerHTML = "Play Game";
let body = document.getElementsByTagName("body")[0];
body.appendChild(playGameButton);

playGameButton.addEventListener("click", function() {
  alert("Button Works!");
});

// console.log(playGameButton);

// make function to sort out win logic and check for a winner as the game progresses | done(needs result to be shown)

// code result displayed for player 2 winning


// write code for event listener to check the winner after each piece is chosen

// Make gameboard border turn red when a winner is determined

// Init

// function init()

// Render() 

