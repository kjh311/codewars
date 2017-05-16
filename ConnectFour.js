// Connect Four: Who Won?

// Instructions

// Connect Four is a game in which two players take turns dropping red or yellow colored discs into a vertically suspended 7 x 6 grid. Discs fall to the bottom of the grid, occupying the next available space.

// A player wins by connecting four of their discs horizontally, vertically or diagonally.

// Given a multidimensional array representing a Connect Four board, your task is to create a function which can determine who won the game.

// Your connectFour function will be passed an array matrix similar to this:

// [['-','-','-','-','-','-','-'],
//  ['-','-','-','-','-','-','-'],
//  ['-','-','-','R','R','R','R'],
//  ['-','-','-','Y','Y','R','Y'],
//  ['-','-','-','Y','R','Y','Y'],
//  ['-','-','Y','Y','R','R','R']];
// 'R' represents a red disc

// 'Y' represents a yellow disc

// '-' represents an unoccupied space

// In this example the red player won by making a horizontal line of 4 red discs.

// If the red player won, your connectFour function should return 'R'. If the yellow player won, it should return 'Y'. If the board is full and no one won it should return 'draw'. If the game is still in progress it should return 'in progress'.

// You can learn more about how Connect Four is played here: http://en.wikipedia.org/wiki/Connect_Four
// ALGORITHMSGAMESARRAYSGRAPHSDATA STRUCTURESGAME BOARDS

// Poweredby_qualified
// Solution:

function connectFour(board) {
  var dashArray = [];
  for(i=0; i<board.length; i++){
    for(p=0;p<board[i].length;p++){
      if(board[i][p] === "-"){
        dashArray.push(board[i][p]);
      }
      if(board[i][p] !== "-"){
        if(board[i][p] === "R" && board[i][p+1] === "R" && board[i][p+2] === "R" && board[i][p+3] === "R"){
          return 'R';
        }else if(board[i][p] === "Y" && board[i][p+1] === "Y" && board[i][p+2] === "Y" && board[i][p+3] === "Y"){
          return 'Y';
        }else if( board[i+1] !== undefined && board[i+2] !== undefined && board[i+3] !== undefined && board[i][p] === "R" && board[i+1][p] === "R" && board[i+1][p] === "R" && board[i+2][p] === "R" && board[i+3][p] === "R"){
          return 'R';
        }else if (board[i+1] !== undefined && board[i+2] !== undefined && board[i+3] !== undefined && board[i][p] === "Y" && board[i+1][p] === "Y" && board[i+2][p] === "Y" && board[i+3][p] === "Y"){
          return 'Y';
        }else if(board[i+1] !== undefined && board[i+2] !== undefined && board[i+3] !== undefined && board[i][p] === "R" && board[i+1][p+1] === "R" && board[i+2][p+2] === "R" && board[i+3][p+3] === "R"){
          return 'R';
        }else if(board[i+1] !== undefined && board[i+2] !== undefined && board[i+3] !== undefined && board[i][p] === "R" && board[i+1][p-1] === "R" && board[i+2][p-2] === "R" && board[i+3][p-3] === "R"){
          return 'R';
        }else if(board[i+1] !== undefined && board[i+2] !== undefined && board[i+3] !== undefined && board[i][p] === "Y" && board[i+1][p+1] === "Y" && board[i+2][p+2] === "Y" && board[i+3][p+3] === "Y"){
          return 'Y';
        }else if(board[i+1] !== undefined && board[i+2] !== undefined && board[i+3] !== undefined && board[i][p] === "Y" && board[i+1][p-1] === "Y" && board[i+2][p-2] === "Y" && board[i+3][p-3] === "Y"){
          return 'Y';
        }
      }
    }
  }
  if(dashArray.length === 0){
    return 'draw';
  }else{
    return 'in progress';
  }
}

// var board = [['-','-','-','-','-','-','-'],
//             ['-','-','-','-','-','-','-'],
//             ['-','-','-','R','R','R','R'],
//             ['-','-','-','Y','Y','R','Y'],
//             ['-','-','-','Y','R','Y','Y'],
//             ['-','-','Y','Y','R','R','R']];
// connectFour(board);// 'R');

// var board = [['-','-','-','-','-','-','-'],
//             ['-','-','-','-','-','-','-'],
//             ['-','-','-','R','Y','R','R'],
//             ['-','-','-','Y','R','Y','Y'],
//             ['-','-','-','Y','R','R','Y'],
//             ['-','-','Y','Y','R','R','R']];
// connectFour(board);// 'R');

// var board = [['-','-','-','-','-','-','-'],
//             ['-','-','-','-','-','-','-'],
//             ['-','-','-','R','Y','R','R'],
//             ['-','-','-','Y','R','R','Y'],
//             ['-','-','-','Y','R','Y','Y'],
//             ['-','-','Y','R','R','R','R']];
// connectFour(board);// 'R');

// var board = [['-','-','-','-','-','-','-'],
//             ['-','-','-','Y','-','-','-'],
//             ['-','-','-','R','Y','R','R'],
//             ['-','-','-','Y','R','Y','Y'],
//             ['-','-','-','Y','R','Y','Y'],
//             ['-','-','Y','R','R','R','R']];
// connectFour(board);// 'Y');

// var board = [['-','-','-','-','-','-','-'],
//             ['-','-','-','-','-','-','-'],
//             ['-','-','-','Y','Y','Y','R'],
//             ['-','-','-','R','Y','Y','Y'],
//             ['-','-','-','Y','R','Y','Y'],
//             ['-','-','-','R','R','R','R']];
// connectFour(board);// 'Y');

var board = [['Y','R','Y','R','Y','R','Y'],
['R','Y','R','R','Y','R','Y'],
['Y','Y','R','R','R','Y','R'],
['R','R','Y','Y','Y','R','Y'],
['Y','Y','Y','R','Y','R','Y'],
['R','Y','R','R','R','Y','R']] 

connectFour(board); //Expected: 'draw'
