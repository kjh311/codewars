// Sum Strings as Numbers

// Given the string representations of two integers, return the string representation of the sum of those integers.

// For example:

// sumStrings('1','2') // => '3'
// A string representation of an integer will contain no characters besides the ten numerals "0" to "9".

// I know there's a better way to do this



function sumStrings(a,b) { 

  var splitA = a.split("");

  for (var i=0; i<splitA.length; i++){
    splitA[i] = parseInt(splitA[i], 10);
  }
  
  var splitB = b.split("");
   for (var i=0; i<splitB.length; i++){
    splitB[i] = parseInt(splitB[i], 10);
  }
 
  if(a === "NaN" || a === ""){
    return b;
  }
  if(b === "NaN"  || b === ""){
   return a;
  }
  
  if(a.length >= b.length){
    
    var column = a.length;
    var columnSum;
    var remainder = false;
    var numberArray = [];
    
      for(i=0; i < a.length; i++){
        
        if(splitB[b.length -1 -i] === undefined){
          console.log("Column B" + " is undefined");
          columnSum = splitA[a.length -1 -i];
        }else{
          columnSum = splitA[a.length -1 -i] + splitB[b.length -1 -i];
        }
        
        if(remainder && splitB[b.length -1 -i] === undefined){
          columnSum = splitA[a.length -1 -i] + 1;
        }
        if(remainder && splitB[b.length -1 -i] !== undefined){
          columnSum = splitA[a.length -1 -i] + splitB[b.length -1 -i] + 1;
        }
        
        
          if(columnSum >= 10){
            var tempString = columnSum.toString()[1];
            columnSum = parseInt(tempString);
            remainder = true;
          }else{
            remainder = false;
          }
        column --;
        
        numberArray.unshift(columnSum);
        if(column === 0 && remainder){
              numberArray.unshift(1);
        }
      }
      
      while(numberArray[0] === 0){
        numberArray.shift();
      }
      
      return numberArray.join("");

  }else if(a.length < b.length){
    
    var column = b.length;
    var columnSum;
    var remainder = false;
    var numberArray = [];
    
      for(i=0; i < b.length; i++){
        
        if(splitA[a.length -1 -i] === undefined){
          columnSum = splitB[b.length -1 -i];
        }else{
          columnSum = splitA[a.length -1 -i] + splitB[b.length -1 -i];
        }
        if(remainder && splitA[a.length -1 -i] === undefined){
          columnSum = splitB[b.length -1 -i] + 1;
        }
        if(remainder && splitA[a.length -1 -i] !== undefined){
          columnSum = splitA[a.length -1 -i] + splitB[b.length -1 -i] + 1;
        }
        
          if(columnSum >= 10){
            var tempString = columnSum.toString()[1];
            columnSum = parseInt(tempString);
            remainder = true;
          }else{
            remainder = false;
          }
        column --;
        
        numberArray.unshift(columnSum);
        if(column === 0 && remainder){
              numberArray.unshift(1);
        }
        
        console.log("Answer to sum of column " + column + " is " + splitA[a.length -1 -i] + "+" + splitB[b.length -1 -i] + "=" + columnSum);
        console.log("Remainder is " +remainder);
      }
      var finalNumber = numberArray.join("")
      while(numberArray[0] === 0){
        numberArray.shift();
      }
  
      return finalNumber;
  }
}


// sumStrings('123','456');  //'579')
// sumStrings('126','456');  //'582')
// sumStrings('501','501');  //'1002')
// sumStrings('1626','556');  //'2182')
// sumStrings('556','1626');  //'2182')
sumStrings('00103','08567');  //'8670')
// sumStrings('','5');  //'5')
// sumStrings('3','');  //'3')
// sumStrings('712569312664357328695151392', '8100824045303269669937'); 
// '712577413488402631964821329'


// sumStrings('123','456');  //'579')
// sumStrings('126','456');  //'582')
// sumStrings('501','501');  //'1002')
// sumStrings('1626','556');  //'2182')
// sumStrings('556','1626');  //'2182')
sumStrings('00103','08567');  //'8670')
// sumStrings('','5');  //'5')
// sumStrings('3','');  //'3')
// sumStrings('712569312664357328695151392', '8100824045303269669937'); 
// '712577413488402631964821329'