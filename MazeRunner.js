// Maze Runner

// https://www.codewars.com/kata/maze-runner/train/javascript

// Introduction

//   Welcome Adventurer. Your aim is to navigate the maze and reach the finish point without touching any walls. Doing so will kill you instantly!
 
// Maze Runner
// Task

//   You will be given a 2D array of the maze and an array of directions. Your task is to follow the directions given. If you reach the end point before all your moves have gone, you should return Finish. If you hit any walls or go outside the maze border, you should return Dead. If you find yourself still in the maze after using all the moves, you should return Lost.
 
// The Maze array will look like

// maze = [[1,1,1,1,1,1,1],
//         [1,0,0,0,0,0,3],
//         [1,0,1,0,1,0,1],
//         [0,0,1,0,0,0,1],
//         [1,0,1,0,1,0,1],
//         [1,0,0,0,0,0,1],
//         [1,2,1,0,1,0,1]]
// ..with the following key

//   0 = Safe place to walk
// 1 = Wall
// 2 = Start Point
// 3 = Finish Point
 
//   direction = ["N","N","N","N","N","E","E","E","E","E"] == "Finish"
// Rules

//   1. The Maze array will always be square i.e. N x N but its size and content will alter from test to test.
// 2. The start and finish positions will change for the final tests.
// 3. The directions array will always be in upper case and will be in the format of N = North, E = East, W = West and S = South.
 
// Good luck, and stay safe!

// Kata Series

// If you enjoyed this, then please try one of my other Katas. Any feedback, translations and grading of beta Katas are greatly appreciated. Thank you.



function mazeRunner(maze, directions) {
  console.log(maze);
  // console.log(directions);
  var currentPosish =[];

  
  for(p=0;p<maze.length;p++){
    for(m=0;m<maze[p].length;m++){
      if(maze[p][m] === 2){
        currentPosish.push(p,m)
      }
    }
  }
  
  for(i=0;i<directions.length;i++){
    if(directions[i] === "N"){
      if(currentPosish[0]-1 < 0){
        return "Dead"
      }
      currentPosish.splice(0,1,currentPosish[0]-1);
    }
    if(directions[i] === "E"){
      if(currentPosish[1]+1 === maze.length){
        return "Dead"
      }
      currentPosish.splice(1,1,currentPosish[1]+1);
    }
    if(directions[i] === "S"){
      if(currentPosish[0]+1 === maze.length){
        return "Dead"
      }
      currentPosish.splice(0,1,currentPosish[0]+1);
    }
    if(directions[i] === "W"){
      if(currentPosish[1]-1< 0){
        return "Dead"
      }
      currentPosish.splice(1,1,currentPosish[1]-1);
    }
    if(maze[currentPosish[0]][currentPosish[1]] === undefined || maze[currentPosish[0]][currentPosish[1]] === 1  ){
      return "Dead";
    }
    if(maze[currentPosish[0]][currentPosish[1]] === 3){
      return "Finish";
    }
  }
  
  if(maze[currentPosish[0]][currentPosish[1]] === 0 || maze[currentPosish[0]][currentPosish[1]] === 2){
      return "Lost";
    }
}

// var maze = [[1,1,1,1,1,1,1],
//             [1,0,0,0,0,0,3],
//             [1,0,1,0,1,0,1],
//             [0,0,1,0,0,0,1],
//             [1,0,1,0,1,0,1],
//             [1,0,0,0,0,0,1],
//             [1,2,1,0,1,0,1]];
            
// mazeRunner(maze,["N","N","N","N","N","E","E","E","E","E"]);  //=="Finish"
// mazeRunner(maze,["N","N","N","N","N","E","E","S","S","E","E","N","N","E"]);  //=="Finish", 
// mazeRunner(maze,["N","N","N","N","N","E","E","E","E","E","W","W"]);  //=="Finish",
// mazeRunner(maze,["N","N","N","W","W"]);  //=="Dead"
// mazeRunner(maze,["N","N","N","N","N","E","E","S","S","S","S","S","S"]);  //=="Dead"
// mazeRunner(maze,["N","E","E","E","E"]);  //=="Lost"


// maze =[ [ 1, 1, 1, 1, 1, 1, 1, 1, 0, 1 ],
//   [ 1, 3, 1, 0, 1, 0, 0, 0, 0, 1 ],
//   [ 1, 0, 1, 0, 0, 0, 1, 1, 0, 1 ],
//   [ 1, 0, 1, 1, 1, 1, 1, 0, 0, 1 ],
//   [ 1, 0, 1, 0, 0, 0, 0, 0, 0, 1 ],
//   [ 1, 0, 1, 0, 1, 0, 1, 0, 0, 1 ],
//   [ 1, 0, 1, 0, 1, 0, 0, 0, 0, 0 ],
//   [ 1, 0, 1, 0, 1, 0, 1, 1, 0, 1 ],
//   [ 1, 0, 0, 0, 1, 0, 0, 0, 0, 1 ],
//   [ 1, 1, 1, 0, 1, 1, 1, 1, 2, 1 ] ];
//   mazeRunner(maze,[ 'N',
//   'N',
//   'N',
//   'N',
//   'N',
//   'N',
//   'N',
//   'N',
//   'N',
//   'S',
//   'S',
//   'S',
//   'S',
//   'S',
//   'S',
//   'S',
//   'S',
//   'S' ]);

maze = [ [ 0, 0, 0, 0, 2, 1, 0, 1, 0 ],
  [ 0, 0, 0, 0, 0, 0, 1, 0, 0 ],
  [ 1, 0, 1, 0, 0, 1, 0, 0, 1 ],
  [ 0, 0, 1, 0, 1, 1, 0, 0, 1 ],
  [ 0, 1, 0, 0, 0, 1, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0, 0, 0, 1 ],
  [ 0, 3, 1, 1, 0, 0, 0, 0, 0 ],
  [ 1, 0, 1, 0, 1, 1, 0, 0, 1 ],
  [ 1, 1, 1, 0, 0, 1, 0, 0, 1 ] ];
  
  mazeRunner(maze, [ 'W',
  'N',
  'E',
  'S',
  'S',
  'S',
  'E',
  'E',
  'W',
  'S',
  'E',
  'W',
  'W',
  'E',
  'S',
  'E',
  'N',
  'E',
  'N',
  'S',
  'N',
  'S',
  'N',
  'E',
  'W',
  'E',
  'W',
  'N',
  'N',
  'N',
  'N',
  'E' ]);