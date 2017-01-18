// Find the missing letter

// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.

// Example:

// ['a','b','c','d','f'] -> 'e'
// ['O','Q','R','S'] -> 'P'
// Have fun coding it and please don't forget to vote and rank this kata! :-)

// I have also created other katas. Take a look if you enjoyed this kata!

function findMissingLetter(array){
  var newArray = [];
  var c = array.join("").charCodeAt(0);

  for (var i = 0; i < array.length; i++) {
  var b = array.join("").charCodeAt(i);

    if(c === b){
      c+=1;
      newArray.push(b);
    }
  }
  var finalNumber = newArray[newArray.length-1] + 1;
  var o = String.fromCharCode(finalNumber);
  return o;
}

// findMissingLetter(['a','b','c','d','f']);   //e
findMissingLetter(['O','Q','R','S']);      //P
