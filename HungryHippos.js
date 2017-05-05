// Hungry Hippos

// Introduction

//   Hungry Hungry Hippos is a tabletop game made for 2–4 players, produced by Hasbro, under the brand of its subsidiary, Milton Bradley. The idea for the game was published in 1967 by toy inventor Fred Kroll and it was introduced in 1978. The objective of the game is for each player to collect as many marbles as possible with their 'hippo' (a toy hippo model). (Source Wikipedia)
 
// Squares
// Task

//   Your task is to write a simple class called Game that checks how many times a hippo has to leap into the centre of the arena to collect some food. You will be given an integer array called board that defines where all the food can be found. You have to return an integer for the amount of leaps a hippo has to do to eat all of the food.
// Rules

//   1.  The board array contains 0’s for spaces and 1’s for food

// 2.  The board is n x n in size, where n is between 5 and 50.

// 3.  One leap consists of food items that are either horizontally or vertically connected to each other. If they are not connected, then another leap is needed.
// Returns

//   Return an integer for the amount of leaps needed to collect all of the food.
// Example

// Initialise

// board = [[1,1,0,0,0],
//          [1,1,0,0,0],
//          [0,0,0,0,0],
//          [0,0,0,1,1],
//          [0,0,0,1,1]]

// game = new Game(board)
// game.play()
// Result

// There are 2 blocks of food connected horizontally and vertically so you must return 2.

// Good luck and enjoy!


// ALMOST HAVE IT!!!!! Just need adjustent to checking for neighbors function


function Game(board){

}

Game.prototype.play = function(){
  // console.log(board);
  // console.log("BOARD LENGTH " +board.length);
  

for(m = 0; m < 2; m++){

  for(j = 0; j < board.length; j++){
    console.log("CURRENT ROW is " + currentRow);
    
    for(i=0; i < board[currentRow].length; i++){
      console.log(board[currentRow][i]);
      if(board[currentRow][i] === 1){
        foodAmount ++;
        
          if(runThroughLoop === 2){
            foodGroup ++;
          }else{
        
            // console.log(board[currentRow -1]);
            // if(board[currentRow - 1] !== 1 &&
            // board[currentRow + 1] !== 1 &&
            // board[currentRow][currentColumn - 1] !== 1 &&
            // board[currentRow][currentColumn + 1] !== 1
            // ){
            //   console.log("not exist");
            // }
            
            if(currentColumn + 1 === board.length && currentRow + 1 === board.length){
              console.log("last run");
              console.log(board[currentRow][i - 1]);
            }
          
            // if(board[currentRow][currentColumn + 1] !== 1 
            // && 
            // board[currentRow][currentColumn - 1] !== 1 
            // && 
            // board[currentRow + 1][currentColumn] !== 1 
            // && 
            // board[currentRow - 1][currentColumn] !== 1) {
            //   console.log("undefined");
            // }
              else 
              
              if(
              board[currentRow][currentColumn + 1] === 1 || 
              board[currentRow][currentColumn - 1] === 1 ||
              board[currentRow + 1][currentColumn] === 1 ||
              board[currentRow - 1][currentColumn] === 1){
                
              console.log(currentRow + ' ' + currentColumn);
              board[currentRow].splice(currentColumn, 1, 2);
              console.log(board);
              
            }
          }
          
      
        
      }
        // console.log("CURRENT COLUMN is " +currentColumn);
        currentColumn++;
        
      
      
    }
    
    currentRow ++;
    currentColumn = 0;
    
  }
  
  console.log("Number of run throughs is " + runThroughLoop);
  runThroughLoop ++;
  currentColumn = 0;
  currentRow = 0;
}


console.log(board);
console.log("AMOUNT OF FOOD is " +foodAmount);
console.log("FOOD GROUPS is " +foodGroup);


  return foodGroup;
}

var foodAmount = 0;
var foodGroup = 0;
var currentRow = 0;
var currentColumn = 0;
var runThroughLoop = 1;



// board = [[1,1,0,0,0],
//         [1,1,0,0,0],
//         [0,0,0,0,0],
//         [0,0,0,1,1],
//         [0,0,0,1,1]];

// Game(board);
// game = new Game(board);
// game.play();  //2


// board = [[1,0,1,0,1],
//         [1,0,1,0,1],
//         [1,1,1,0,0],
//         [0,0,0,1,1],
//         [0,0,0,1,1]];
// game = new Game(board);
// game.play(); // "Should return '3'");

board = [[1,0,1,0,1],
        [0,1,0,1,0],
        [1,0,1,0,1],
        [0,1,0,1,0],
        [1,0,1,0,1]];
game = new Game(board);
game.play(); // "Should return '13'");


// board = [[1,0,0,0,0],
//         [0,0,1,1,0],
//         [1,0,1,0,1],
//         [1,1,1,1,0],
//         [1,1,1,0,1]];
// game = new Game(board);
// game.play();  // "Should return '4'");