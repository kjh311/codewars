// Description:

// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.


// Examples:

// spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw"
// spinWords( "This is a test") => returns "This is a test"
// spinWords( "This is another test" )=> returns "This is rehtona test"

// var input1 = "This is another test"

function spinWords(input){

  var res = input.split(" ");
  var arrayLength = res.length;
   var finalArray = [];

  for (var i = 0; i < arrayLength; i++) {
    if(res[i].length < 5){
      var reverse = res[i].split("");
      var reverseArray = reverse.reverse();
      var joinArray = reverseArray.join("");

      finalArray.push(joinArray);

    }else{
      finalArray.push(res[i]);
    }
}
var finalSentence = finalArray.join(" ");
return finalSentence;
}

spinWords("This is another test");
