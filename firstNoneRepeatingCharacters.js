// Write a function named firstNonRepeatingCharacter that takes a string input, and returns the first character that is not repeated anywhere in the string.

// For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

// As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

// If a string contains all repeating characters, it should return the empty string ("").



// **** WILL HAVE TO FINISH LATER ****

function firstNonRepeatingLetter(s) {

 if(s === ""){
   return "";
 }

var lowerCase = s.toLowerCase().split("");

// console.log(lowerCase);

  var result = [];

  lowerCase.forEach(function(element, index) {
    if (lowerCase.indexOf(element, index + 1) > -1) {
      if (result.indexOf(element) === -1) {
        result.push(element);
      }
    }
  });

console.log(result);
console.log(lowerCase);

for (var i = 0; i < lowerCase.length; i++) {
var index = lowerCase.indexOf(result[0]);
if (index > -1) {
    lowerCase.splice(index, 1);
}
}
for (var h = 0; h < lowerCase.length; h++) {
var index2 = lowerCase.indexOf(result[1]);
if (index2 > -1) {
    lowerCase.splice(index2, 1);
}
}
for (var p = 0; p < lowerCase.length; p++) {
var index3 = lowerCase.indexOf(result[2]);
if (index3 > -1) {
    lowerCase.splice(index3, 1);
}
}
for (var q = 0; q < lowerCase.length; q++) {
var index4 = lowerCase.indexOf(result[3]);
if (index4 > -1) {
    lowerCase.splice(index4, 1);
}
}


console.log(result);
console.log(lowerCase);
return(lowerCase[0]);
}

firstNonRepeatingLetter('moonmen');
