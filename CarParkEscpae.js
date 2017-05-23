// Car Park Escape

// https://www.codewars.com/kata/car-park-escape/train/javascript

// Introduction

//   A multi-storey car park (also called a parking garage, parking structure, parking ramp, parkade, parking building, parking deck or indoor parking) is a building designed for car parking and where there are a number of floors or levels on which parking takes place. It is essentially an indoor, stacked car park. Parking structures may be heated if they are enclosed. Design of parking structures can add considerable cost for planning new developments, and can be mandated by cities or states in new building parking requirements. Some cities such as London have abolished previously enacted minimum parking requirements (Source Wikipedia)
 

// Task

//   Your task is to escape from the carpark using only the staircases provided to reach the exit. You may not jump over the edge of the levels (you’re not Superman!) and the exit is always on the far right of the ground floor.
// Rules

//   1. You are passed the carpark data as an argument into the function.
// 2. Free carparking spaces are represented by a 0
// 3. Staircases are represented by a 1
// 4. Your parking place (start position) is represented by a 2
// 5. The exit is always the far right element of the ground floor.
// 6. You must use the staircases to go down a level.
// 7. You will never start on a staircase.
// 8. The start level may be any level of the car park.
// Returns

//   Return an array of the quickest route out of the carpark
// R1 = Move Right one parking space.
// L1 = Move Left one parking space.
// D1 = Move Down one level.
// Example

// Initialise

// carpark = [[1, 0, 0, 0, 2],
//            [0, 0, 0, 0, 0]];
// Working Out

// You start in the most far right position on level 1
// You have to move Left 4 places to reach the staircase => "L4"
// You then go down one flight of stairs => "D1"
// To escape you have to move Right 4 places => "R4"
// Result

// result = ["L4", "D1", "R4"]
// Good luck and enjoy!


function escape(carpark){

var escapeHatch = carpark[0].length-1;
carpark[carpark.length-1].splice(escapeHatch, 1, "Exit");

console.log(carpark);

var stairs;
var rowArray = [];
var columnArray = [];
var answerArray = [];
var currentPosish;

for(i=0;i<carpark.length;i++){
  for(p=0;p<carpark[i].length;p++){
    if(carpark[i][p] === 2){
      rowArray.push(i);
      columnArray.push(p);
    }
  }
}

for(i=0;i<carpark.length;i++){
  for(p=0;p<carpark[i].length;p++){
    if(carpark[i][p] === 1){
      rowArray.push(i);
      columnArray.push(p);
    }
  }
}    

for(i=0;i<carpark.length;i++){
  for(p=0;p<carpark[i].length;p++){   
    if(carpark[i][p] === "Exit"){
      rowArray.push(i);
      columnArray.push(p);
    }
  }
}
// console.log("Row       " +rowArray);
// console.log("Column    " +columnArray);

var movement;
movement= columnArray[0] - columnArray[1];
if(movement>0){
  answerArray.push("L" + movement);
  rowArray.shift();
  columnArray.shift();
}else if(movement<0){
  answerArray.push("R" + Math.abs(movement));
  rowArray.shift();
  columnArray.shift();
}

// console.log("Row       " +rowArray);
// console.log("Column    " +columnArray);


for(i=0;i<columnArray.length;i++){
  if(i<columnArray.length-1){
      answerArray.push("D1");
    }
    movement= columnArray[i] - columnArray[i+1];
  if(movement>0){
    answerArray.push("L" + movement);
  }else if(movement<0){
    answerArray.push("R" + Math.abs(movement));
  }
}

var down = 0;
var finalArray = [];

for(p=0;p<answerArray.length;p++){
  if(answerArray[p] !== "D1"){
    finalArray.push(answerArray[p]);
    down = 0;
  }

  else if(answerArray[p] === "D1"){
    down ++;
    if(answerArray[p+1] !== "D1"){
      finalArray.push("D" + down);
    }

  }
}

return finalArray;

}

// escape([[1, 0, 0, 0, 2],[0, 0, 0, 0, 0]]);
// result = ["L4", "D1", "R4"];

// escape([[2, 0, 0, 1, 0],
//           [0, 0, 0, 1, 0],
//           [0, 0, 0, 0, 0]]);
// result = ["R3", "D2", "R1"];

escape([[0, 2, 0, 0, 1],
          [0, 0, 0, 0, 1],
          [0, 0, 0, 0, 1],
          [0, 0, 0, 0, 0]]);
// result = ["R3", "D3"];

// escape([[1, 0, 0, 0, 2],
//           [0, 0, 0, 0, 1],
//           [1, 0, 0, 0, 0],
//           [0, 0, 0, 0, 0]]);
// result = ["L4", "D1", "R4", "D1", "L4", "D1", "R4"];

// escape([[0, 0, 0, 0, 2]]);
// result = [];
