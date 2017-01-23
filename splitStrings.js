// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// solution('abc') // should return ['ab', 'c_']
// solution('abcdef') // should return ['ab', 'cd', 'ef']



function solution(str){

  var split = str.split("");
  var finalArray = [];
  var twoLetters;

  for(var i = 0; i < str.length; i += 2){
    if(split[i+1]){
      twoLetters = split[i] + split[i+1]
    }else{
      twoLetters = split[i] + "_";
    }
    finalArray.push(twoLetters);
    twoLetters = null;
  }
  return(finalArray);
}

solution("Ammi");   // ['Am', 'mi']
