function reverseWords(str) {
  
  let secondArray = [];
function reverseWords(str) {
  
  let secondArray = [];
  let finalArray = [];
  let tempArray = [];
  let x;

  for(let i = str.length -1; i >= 0; i--){
    secondArray.push(str[i]);
  }

  for(let j = 0; j < secondArray.length; j++){
    
    if(secondArray[j] !== " "){
      tempArray.push(secondArray[j]);
    }

    if(secondArray[j] === " " || j === secondArray.length-1){
      x = tempArray.join("");
      finalArray.unshift(x)
      tempArray = [];
    }

  }

finalArray = finalArray.join(" ");
  return finalArray;

}

reverseWords('The quick brown fox jumps over the lazy dog.');
// 'ehT kciuq nworb xof spmuj revo eht yzal .god');
    
    // reverseWords('apple');
    // 'elppa');
    
    // reverseWords('a b c d');
    // 'a b c d');
    
    // reverseWords('double  spaced  words');
    // 'elbuod  decaps  sdrow');
 