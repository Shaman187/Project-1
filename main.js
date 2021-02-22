/*----- constants -----*/


/*----- app's state (variables) -----*/


/*----- cached element references -----*/


/*----- event listeners -----*/


/*----- functions -----*/





// Add event listeners for buttons/gameboard
// Make buttons to choose slots for player choices


// addEventListener


// Make play game button

const button = document.createElement("button");
button.innerHTML = "Play Game";

let body = document.getElementsByTagName("body")[0];
body.appendChild(button);

// Play BG music when 'Play Game' button is clicked
button.addEventListener ("click", function() {
  alert("Connect Four!");
});



// Make Win/Lose/Draw message box

// Make current turn/player message box

// Make invisible bottom row of divs for rest of the pieces to start on

// Check for Win/Lose/Draw after each piece is placed

// Make gameboard border turn red when a winner is determined

// Init

// Render 

