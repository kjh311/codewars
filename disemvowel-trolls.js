// Description:

// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".


// NOT WORKING 100%
function disemvowel(str) {
  var splitString = str.split("");
  // console.log(splitString);
  var arrayLength = splitString.length;
  // console.log(arrayLength);
  for (var i = 0; i < arrayLength; i++) {

    if(splitString[i] === "a" || splitString[i] === "A" || splitString[i] === "e" || splitString[i] === "E" ||  splitString[i] === "i" || splitString[i] === "I" ||  splitString[i] === "o" || splitString[i] === "u" || splitString[i] === "O" || splitString[i] === "U"){
      // console.log(splitString[i]);
      // var newArray = splitString.slice(i);
      splitString.splice(i, 1);

    }


}
var finalSentence = splitString.join("");
// console.log(splitString);
  return finalSentence;
}

disemvowel("Why the fuck doesnt this work man!? WHY THE FUCK DOESNT THIS WORK MAN!?");
