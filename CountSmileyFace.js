// Count the smiley faces!

// Description:
// Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

// Rules for a smiling face:
// -Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// -A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
// -Every smiling face must have a smiling mouth that should be marked with either ) or D.
// Valid smiley face examples:
// :) :D ;-D :~)
// Invalid smiley faces:
// ;( :> :} :] 

// Example cases:

// countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
// countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
// countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;

// Note: In case of an empty array return 0. You will not be tested with invalid input (input will always be an array)

// Happy coding!


function countSmileys(arr) {
  
  var numberOfSmileys = 0;
  
  for(i=0; i < arr.length; i++){
    
    if(arr[i][0] === ":" || arr[i][0] === ";"){
      if(arr[i][1] === "-" || arr[i][1] === "~" ){
        if(arr[i][2] === ")" || arr[i][2] === "D"){
          numberOfSmileys ++;
        }
      }else if(arr[i][1] === ")" || arr[i][1] === "D"){
        numberOfSmileys ++;
      }
    }
  }
  
return numberOfSmileys;

}


// countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
// countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;