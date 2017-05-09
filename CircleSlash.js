// Simple Fun #140: Circle Slash

// https://www.codewars.com/kata/simple-fun-number-140-circle-slash/train/javascript

// Task

// Suppose there are n people standing in a circle and they are numbered 1 through n in order.

// Person 1 starts off with a sword and kills person 2. He then passes the sword to the next person still standing, in this case person 3. Person 3 then uses the sword to kill person 4, and passes it to person 5. This pattern continues around and around the circle until just one person remains.

// What is the number of this person?

// Example:

// For n = 5, the result should be 3.

// 1 kills 2, passes to 3.
// 3 kills 4, passes to 5.
// 5 kills 1, passes to 3.
// 3 kills 5 and wins.
// Input/Output

// [input] integer n

// The number of people. 1 through n standing in a circle.

// 1 <= n <= 1e9
// [output] an integer

// The index of the last person standing.


// It works but not for YUGE numbers, need to figure out how to solve without brute force


function circleSlash(n) {
  
var arrayOfNumbers = [];
var whosGotTheSword = 0;

for(i=1; i <= n; i++){
  arrayOfNumbers.push(i);
}

while(arrayOfNumbers.length > 1){
  if((whosGotTheSword +1) === arrayOfNumbers.length){
    arrayOfNumbers.splice(0, 1);
    whosGotTheSword = 0;
  }
  else if(whosGotTheSword < arrayOfNumbers.length){
    arrayOfNumbers.splice((whosGotTheSword + 1), 1);
    if(whosGotTheSword === arrayOfNumbers.length -1){
      whosGotTheSword = 0;
    }else{
      whosGotTheSword ++;
    }
  }

}
return arrayOfNumbers[0];
}


// circleSlash(5);  //3)

// circleSlash(11);  //7)

// circleSlash(1);  //1)

// circleSlash(2);  //1)

// circleSlash(3);  //3)

// circleSlash(4);  //1)

// circleSlash(8);  //1)

// circleSlash(16);  //1)

// circleSlash(15);  //15)

// circleSlash(31);  //31)