// Simple Fun #155: Pac-Man

// https://www.codewars.com/kata/simple-fun-number-155-pac-man/train/javascript

// Task

// Pac-Man got lucky today! Due to minor performance issue all his enemies have frozen. Too bad Pac-Man is not brave enough to face them right now, so he doesn't want any enemy to see him.

// Given a gamefield of size N x N, Pac-Man's position(PM) and his enemies' positions(enemies), your task is to count the number of coins he can collect without being seen.

// An enemy can see a Pac-Man if they are standing on the same row or column.

// It is guaranteed that no enemy can see Pac-Man on the starting position. There is a coin on each empty square (i.e. where there is no Pac-Man or enemy).

// Example

// For N = 4, PM = [3, 0], enemies = [[1, 2]], the result should be 3.

// Let O represent coins, P - Pac-Man and E - enemy.
// OOOO
// OOEO
// OOOO
// POOO
// Pac-Man cannot cross row 1 and column 2.

// He can only collect coins from points (2, 0), (2, 1) and (3, 1), like this:

// x is the points that Pac-Man can collect the coins.
// OOOO
// OOEO
// xxOO
// PxOO
// Input/Output

// [input] integer N

// The field size.
// [input] integer array PM

// Pac-Man's position (pair of integers)
// [input] 2D integer array enemies

// Enemies' positions (array of pairs)
// [output] an integer

// Number of coins Pac-Man can collect.


function pacMan(N, PM, enemies) {

  var board=new Array(N)
    for (i=0; i <N; i++){
   board[i]=new Array(N)
}

  board[PM[0]].splice(PM[1], 1, "PM");
  
  for(p=0;p<enemies.length;p++){
    board[enemies[p][0]].splice(enemies[p][1], 1, "E");
  }
  
  for(l=0;l<enemies.length;l++){
    for(j=0;j<N;j++){
      if(board[0 + j][enemies[l][1]] === undefined){
        board[0 + j].splice(enemies[l][1],1,"X");
      }
    }
    
    for(u=0;u<N;u++){
      console.log(board[enemies[l][0]][0 + u])
       if(board[enemies[l][0]][u] === undefined ){
        board[enemies[l][0]].splice([0 + u],1,"X");
      }
    }
  }
  
  for(p=0;p<N;p++){
    for(n=0;n<N;n++){
      if(board[p][n] === undefined){
        board[p].splice(n, 1, "*");
      }
    }
  }
  
  console.log(board);
  
  var row = PM[0];
  var column = PM[1];
  var coordinates =[];

  
    while(row < N-1 && board[row+1][column] === "*"){
      row ++;
    }
    coordinates.push(row+1);
    row = PM[0];
    
    while(row > 0 && row < N && board[row-1][column] === "*"){
      row --;
    }
    coordinates.push(row);
    row = PM[0];
    
    while(column < N && board[row][column+1] === "*"){
      column ++;
    }
    coordinates.push(column+1);
    column = PM[1];
    
    while(column > 0 && board[row][column-1] === "*"){
      column --;
    }
    coordinates.push(column);
    column = PM[1];
  
  return ((coordinates[0] - coordinates[1]) * (coordinates[2] - coordinates[3])) -1;
}


pacMan(1,[0, 0],[]);  //0)

// pacMan(2,[0, 0],[]);  //3)

// pacMan(3,[0, 0],[]);  //8)

// pacMan(3,[1, 1],[]);  //8)

// pacMan(2,[0, 0],[[1,1]]);  //0)

// pacMan(3,[2, 0],[[1,1]]);  //0)

// pacMan(3,[2, 0],[[0,2]]);  //3)*

// pacMan(8,[1, 1],[[5,4]]);  //19)

// pacMan(8,[1, 5],[[5,4]]);  //14)

// pacMan(8,[6, 1],[[5,4]]);  //7)

// pacMan(10,[4, 6],[[0,2],[5,2],[5,5]]);  //15)
