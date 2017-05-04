// Multiply two numbers! Simple!

// The arguments are passed as strings.
// The numbers may be way very large
// Answer should be returned as a string
// The returned "number" should not start with zeros e.g. 0123 is invalid
// Note: 100 randomly generated tests!

// https://www.codewars.com/kata/55911ef14065454c75000062/train/javascript

// THIS IS HARDER THAN IT LOOKS, have to deal with scientific notation



function multiply(a, b){
  
  
  
  var aLength = a.length;
  var bLength = b.length;
  
if(aLength < 16 && bLength < 16){
  
  var parseA = parseInt(a);
  console.log(parseA);
  console.log(typeof(parseA));
  
  var parseB = parseInt(b);
  console.log(parseB);
  
  var stringedAnswer =  (parseA * parseB).toString();
  
  return stringedAnswer;
  
}else{
  var aArray = [];
  var splitA1;
  var splitA2;
  
  if(aLength > 16){
      for(i=0; i < 16; i++){
      aArray.push(parseInt(a[i]));
    }
      
      console.log(aLength);
      console.log(aArray.length);
      for(j=0; j < aLength - aArray.length; j++){
        // aArray.push(0);
        console.log('n');
      }
      splitA1 = Number(aArray.join(""));
  }
  // console.log(aArray);
  console.log(splitA1);
  console.log(typeof(splitA1));
  
  
  
}
}





// multiply("2", "3");   // "6");
// multiply("30", "69");   // "2070");
// multiply("11", "85");   // "935");
// multiply("0000001", "3");   //"3");
// multiply("98765", "56894");  // "5619135910");
multiply("1020303004875647366210", "2774537626200857473632627613");  // "2830869077153280552556547081187254342445169156730");
// multiply("58608473622772837728372827", "7586374672263726736374");  // "444625839871840560024489175424316205566214109298");
// multiply("9007199254740991", "9007199254740991");  // "81129638414606663681390495662081");