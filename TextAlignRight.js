// Text align right

// https://www.codewars.com/kata/text-align-right/train/javascript

// Your task in this Kata is to emulate text justify right in monospace font. You will be given a single-lined text and the expected justification width. The longest word will never be greater than this width.

// Here are the rules:

// Use spaces to fill in the gaps on the left side of the words.
// Each line should contain as many words as possible.
// Use '\n' to separate lines.
// Gap between words can't differ by more than one space.
// Lines should end with a word not a space.
// '\n' is not included in the length of a line.
// Last line should not contain '\n'
// Example with width=30:

//         Bacon ipsum dolor amet
// excepteur ut kevin burgdoggen,
//    shankle cupim dolor officia
//        ground round id ullamco
//    deserunt nisi. Commodo tail
//     qui salami, brisket boudin 
// tri-tip. Labore flank laboris,
//   cow enim proident aliqua sed
//       hamburger consequat. Sed
//      consequat ut non bresaola
//    capicola shoulder excepteur
//  veniam, bacon kevin. Pastrami
//    shank laborum est excepteur
//  non eiusmod bresaola flank in
// nostrud. Corned beef ex pig do
//    kevin filet mignon in irure
//  deserunt ipsum qui duis short
//         loin. Beef ribs dolore
//   meatball officia rump fugiat
//   in enim corned beef non est.


// *******Works on shorter strings, but not longer

function alignRight(text,width){
  
  var multipleLines = text.split(", ");
  console.log(multipleLines);
  console.log(text.length);
  var finalString = "";
  var lineLengthDifference;
 
  console.log(lineLengthDifference);
  
  
  console.log(text);
  
  for(j=0; j < multipleLines.length; j++){
      console.log(multipleLines[j]);
      
      if(multipleLines.indexOf(multipleLines[j]) === multipleLines.length -1){
        lineLengthDifference = width - multipleLines[j].length;
        console.log("last one");
      }else{
        lineLengthDifference = width - (multipleLines[j].length + 1);
      }
     
     console.log(lineLengthDifference);
     
     for(i=0; i < lineLengthDifference; i++){
        // console.log(multipleLines[j][i])
        // text = " " + text;
        // console.log('d');
        multipleLines[j] = " " + multipleLines[j];
        
     }
     if(multipleLines.indexOf(multipleLines[j]) > 0){
     finalString += ",\n" + multipleLines[j];
     }else{
       finalString +=  multipleLines[j];
     }
  }
  

  
  console.log(finalString);
  return finalString;

}

// alignRight("abc def",10);  //'   abc def');
// alignRight("I take up the whole line",24);  //'I take up the whole line');
alignRight("Two lines, I am",10);  //'Two lines,\n      I am');