// Simple Fun #151: Rocks

// https://www.codewars.com/kata/simple-fun-number-151-rocks/train/javascript

// Task

// Vanya gets bored one day and decides to enumerate a large pile of rocks. He first counts the rocks and finds out that he has n rocks in the pile, then he goes to the store to buy labels for enumeration.

// Each of the labels is a digit from 0 to 9 and each of the n rocks should be assigned a unique number from 1 to n.

// If each label costs $1, how much money will Vanya spend on this project?

// Input/Output

// [input] integer n

// The number of rocks in the pile.

// 1  ≤  n  ≤  10^9
// [output] an integer

// the cost of the enumeration.
// Example

// For n = 13, the result should be 17.

//  the numbers from 1 to n are:
//  1 2 3 4 5 6 7 8 9 10 11 12 13
//  we need 17 single digit labels:
//  1 2 3 4 5 6 7 8 9 1 0 1 1 1 2 1 3
//  each label cost $1, so the output should be 17.
// ALGORITHMS


// Thought I could outwit the infinite loop problem, but nope


function rocks(n) {
  
  var newArray=[];
  var fuck;
  // var shit = n / 100000;
  var oneHundredThou = 488895;
  var remainder;

if(n <= 100000){
  for(i=1; i<=n;i++){
    newArray.push(i);
  }
  var blah = newArray.join("");
  console.log(blah.length);
  return blah.length;
}else{
  fuck = (n / 100000) * oneHundredThou;
  console.log(fuck);
  remainder = n % 100000;
  console.log(remainder);
  
  if(remainder > 0){
    for(i=1; i<=remainder;i++){
      newArray.push(i);
    }
    var blah = newArray.join("");
    console.log(blah.length);
    return blah.length + fuck;
  }else{
    return fuck;
  }
  
}


// return newArray;
}

// rocks(13);  //17)
// rocks(100000);  //488895)
// rocks(1000000);  //4888950)
// rocks(1000013);  //4888967)

rocks(36123011);  //277872985)