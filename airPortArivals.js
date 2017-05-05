// You are at the airport staring blankly at the arrivals/departures flap display...
// https://www.codewars.com/kata/airport-arrivals-slash-departures-number-1/train/javascript

// How it works

// You notice that each flap character is on some kind of a rotor and the order of characters on each rotor is:

// ABCDEFGHIJKLMNOPQRSTUVWXYZ ?!@#&()|<>.:=-+*/0123456789

// And after a long while you deduce that the display works like this:

// Starting from the left, all rotors (from the current one to the end of the line) flap together until the left-most rotor character is correct.
// Then the mechanism advances by 1 rotor to the right...
// ...REPEAT this rotor procedure until the whole line is updated
// ...REPEAT this line procedure from top to bottom until the whole display is updated
// Example

// Consider a flap display with 3 rotors and one 1 line which currently spells CAT

// Step 1 (current rotor is 1)
// Flap x 1
// Now line says DBU
// Step 2 (current rotor is 2)
// Flap x 13
// Now line says DO)
// Step 3 (current rotor is 3)
// Flap x 27
// Now line says DOG
// This can be represented as

// lines  // array of strings. Each string is a display line of the initial configuration
// rotors // array of array-of-rotor-values. Each array-of-rotor-values is applied to the corresponding display line
// result // array of strings. Each string is a display line of the final configuration
// e.g.

// lines = ["CAT"]
// rotors = [[1,13,27]]
// result = ["DOG"]
// Kata Task

// Given the initial display lines and the rotor moves for each line, determine what the board will say after it has been fully updated.

// For your convenience the characters of each rotor are in the pre-loaded constant ALPHABET which is a string.

// And don't forget to try my other flap display Katas!

// :-)



var flapDisplay = function(lines, rotors) {

  var indexAtForLines = 0;
  var indexAtForRotots = 0;
  var linesArray = lines[0].split('');
  var flapLines = "ABCDEFGHIJKLMNOPQRSTUVWXYZ ?!@#&()|<>.:=-+*/0123456789";
  var charCodeAtLines;
  var currentFlap;
  var newLetter;
  var newArray = [];
  console.log(flapLines.length);
  
  rotors = rotors[0];
  console.log(typeof(rotors[0]));
  
  var currentRotorDisplays = rotors[0];
  console.log(currentRotorDisplays);
  // var searchLinesFor;
  
  console.log(linesArray);
  
  for(i = 0; i < linesArray.length; i++){
    currentRotorDisplays = rotors[i];
    console.log("Current Rotors display " + currentRotorDisplays);
    
    charCodeAtLines = linesArray[i] ;
    console.log(charCodeAtLines);
    
    currentFlap = flapLines.indexOf(charCodeAtLines);
    console.log("Current flap is " + currentFlap);
    
    console.log("currentFlap + currentRotorDisplays is " +currentFlap + currentRotorDisplays);
    
    newLetter = flapLines[currentFlap + currentRotorDisplays];
    // lines.replace("Microsoft", "W3Schools");
    newArray.push(newLetter);
    console.log("New letter is " + newLetter);
    
    
    console.log(typeof(rotors));
    // console.log("Current index of lines is " +indexAtForLines);
    // console.log("Current index of rotors is " + indexAtForRotots);
    
    indexAtForLines ++;
    indexAtForRotots ++;
  }
  
  console.log("The ANSWER IS.... " + newArray.join(""));


  return lines
}


flapDisplay(["CAT"], [[1,13,27]]); //["DOG"]