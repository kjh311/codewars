// Count the number of Duplicates

// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphanumeric characters, including digits, uppercase and lowercase alphabets.

// Example

// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabbcdeB" -> 2 # 'a' and 'b'
// "indivisibility" -> 1 # 'i'
// "Indivisibilities" -> 2 # 'i' and 's'
// "aa11" -> 2 # 'a' and '1'

function duplicateCount(text){
 
 var lowerCase = text.toLowerCase();
 var splitLowerCase = lowerCase.split("");
 var newArray = [];
 var duplicateArray = [];
 
 for(i = 0; i < text.length; i++){
  if(newArray.includes(splitLowerCase[i])){
    if(duplicateArray.includes(splitLowerCase[i])){
      duplicateArray.pop();
    }
    duplicateArray.push(splitLowerCase[i]);
  }
  newArray.push(splitLowerCase[i]);
 }
 return duplicateArray.length;
}



duplicateCount("");   // 0);
// duplicateCount("abcde");   // 0);
// duplicateCount("aabbcde");   // 2);
// duplicateCount("aabBcde");   // 2,"should ignore case");
// duplicateCount("Indivisibility");   // 1)
// duplicateCount("Indivisibilities");   // 2, "characters may not be adjacent")