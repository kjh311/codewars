// The word i18n is a common abbreviation of internationalization the developer community use instead of typing the whole word and trying to spell it correctly. Similarly, a11y is an abbreviation of accessibility.

// Write a function that takes a string and turns any and all "words" (see below) within that string of length 4 or greater into an abbreviation following the same rules.

// Notes:

// A "word" is a sequence of alphabetical characters. By this definition, any other character like a space or hyphen (eg. "elephant-ride") will split up a series of letters into two words (eg. "elephant" and "ride").
// The abbreviated version of the word should have the first letter, then the number of removed characters, then the last letter (eg. "elephant ride" => "e6t r2e").
// Example:

// abbreviate("elephant-rides are really fun!")
// //          ^^^^^^^^*^^^^^*^^^*^^^^^^*^^^*
// // words (^):   "elephant" "rides" "are" "really" "fun"
// //                123456     123     1     1234     1
// // ignore short words:               X              X

// // abbreviate:    "e6t"     "r3s"  "are"  "r4y"   "fun"
// // all non-word characters (*) remain in place
// //                     "-"      " "    " "     " "     "!"
// === "e6t-r3s are r4y fun!"


//****WILL HAVE TO COME BACK TO THIS****


function abbreviate(string) {

  var split = string.split(" ");
  var newArray = [];

  for (var i = 0; i < split.length; i++) {

    if(split[i].length > 3){
      var wordLength = split[i].length -2;
      var beginning = split[i].slice(0,1);
      var end = split[i].slice(-1,split[i].length);
      var abbreviatedWord = beginning + wordLength + end;
      newArray.push(abbreviatedWord);
    }else if(split[i].length <= 3){
      newArray.push(split[i]);
    }
  }
  var finalSentence = newArray.join(" ");
   return(finalSentence);
}

// abbreviate("supercalifragilisticexpialidocious and bob"); //s32s and bob

// abbreviate("supercalifragilisticexpialidocious and beezlebub"); //s32s and b7b

// abbreviate("elephant rides are really fun"); //"e6t"     "r3s"  "are"  "r4y"   "fun"

// abbreviate("You need, need not want, to complete this code-wars mission"); //'You n2d, n2d not w2t, to c6e t2s c2e-w2s m5n'

abbreviate("doggy a double-barreled"); //'d3y a d4e-b6d'

// abbreviate("mat monolithic the double-barreled sits cat a"); //'mat m8c the d4e-b6d s2s cat a'
