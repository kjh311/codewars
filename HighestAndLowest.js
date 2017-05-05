// Highest and Lowest

// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Example:

// highAndLow("1 2 3 4 5"); // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes:

// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.


function highAndLow(numbers){

  var numbersArray = numbers.split(" ");
  var currentNumber;
  var newArray = [];
  
  for(i=0; i< numbersArray.length; i++){
    currentNumber = parseInt(numbersArray[i]);
    newArray.push(currentNumber);
  }
  
 var highest =  newArray.sort(function(a, b){return a - b});
 highest = highest[highest.length -1]
  console.log("Highest number is " + highest);
  
  var lowest =  newArray.sort(function(a, b){return b - a});
  lowest = lowest[lowest.length -1];
  console.log("Lowest number is " + lowest);
  
  return highest + ' ' + lowest;
}