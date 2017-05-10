// Simple Fun #186: Duplicate Phone Numbers

// https://www.codewars.com/kata/simple-fun-number-186-duplicate-phone-numbers/train/javascript

// Task

// Businesses like to have memorable telephone numbers. One way to make a telephone number memorable is to have it spell a memorable word or phrase.

// For example, you can call the University of Waterloo by dialing the memorable TUT-GLOP. Sometimes only part of the number is used to spell a word. When you get back to your hotel tonight you can order a pizza from Gino's by dialing 310-GINO.

// The standard form of a telephone number is seven decimal digits with a hyphen between the third and fourth digits (e.g. 888-1200). The keypad of a phone supplies the mapping of letters to numbers, as follows:

// A, B, and C map to 2
// D, E, and F map to 3
// G, H, and I map to 4
// J, K, and L map to 5
// M, N, and O map to 6
// P, R, and S map to 7
// T, U, and V map to 8
// W, X, and Y map to 9
// letters can be uppercase or lowercase
// There is no mapping for Q(q) or Z(z). Hyphens are not dialed, and can be added and removed as necessary. The standard form of TUT-GLOP is 888-4567, the standard form of 310-GINO is 310-4466, and the standard form of 3-10-10-10 is 310-1010.

// Two telephone numbers are equivalent if they have the same standard form. (They dial the same number.)

// Given a list phoneNumbers, your task is to find the duplicate telephone number in the list. Return an array like this:

// ["310-1010:2","487-3279:4","888-4567:3"]

// The form of each element is standard form + : + numbers of duplicate

// Input/Output

// [input] string array phoneNumbers

// The list of the telephone numbers. Each telephone number consists of a string composed of decimal digits, letters (excluding Q and Z) and hyphens. Exactly seven of the characters in the string will be digits or letters.
// [output] a string array

// The duplicate telephone number list. Arrange the output string by telephone number in ascending lexicographical order. If there are no duplicates in the input return [].
// #Example

// For phoneNumbers =

// [
// "7399425",
// "SEXY-GAL",
// "Sexy-GAL",
// "sexy-gal",
// "SEXY-425",
// "S-E-X-Y-G-A-L"
// ]
// The output should be:

// ["739-9425:6"]



function findDuplicatePhoneNumbers(phoneNumbers){
  var newArray=[];
  var tempArray=[];
  var blah;
  var meh;
  var smeh;
  var numberOfRepeats = 0;
  
  for(i=0; i<phoneNumbers.length; i++){
    
    for(j=0;j<phoneNumbers[i].length;j++){
      blah = parseInt(phoneNumbers[i][j]);
      
      if(tempArray.length === 3){
        tempArray.push("-");
      }
      
      if(Number.isInteger(blah) === true){
        tempArray.push(blah);
      }else if(Number.isInteger(blah) !== true && phoneNumbers[i][j] !== "-"){
        meh = phoneNumbers[i][j].toLowerCase();
        
        if(meh === "a" || meh === "b" || meh === "c"){
          tempArray.push(2);
        }else if(meh === "d" || meh === "e" || meh === "f"){
          tempArray.push(3);
        }else if(meh === "g" || meh === "h" || meh === "i"){
          tempArray.push(4);
        }else if(meh === "j" || meh === "k" || meh === "l"){
          tempArray.push(5);
        }else if(meh === "m" || meh === "n" || meh === "o"){
          tempArray.push(6);
        }else if(meh === "p" || meh === "r" || meh === "s"){
          tempArray.push(7);
        }else if(meh === "t" || meh === "u" || meh === "v"){
          tempArray.push(8);
        }else if(meh === "w" || meh === "x" || meh === "y"){
          tempArray.push(9);
        }

      }
      
    }
    smeh = tempArray.join("");
    newArray.push(smeh);
    tempArray = [];
  }
  
var blahArray=[];
var sorted_arr = newArray.slice().sort();

    var current = null;
    var cnt = 0;
    for (var i = 0; i < sorted_arr.length; i++) {
        if (sorted_arr[i] != current) {
            if (cnt > 1) {
                blahArray.push(current  + ":" +cnt);
            }
            current = sorted_arr[i];
            cnt = 1;
        } else {
            cnt++;
        }
    }
    if (cnt > 0) {
      if(cnt >1){
        blahArray.push(current + ":" + cnt);
      }
      
    }

  return blahArray;
}

// findDuplicatePhoneNumbers(["7399425","SEXY-GAL","Sexy-GAL","sexy-gal","SEXY-425","S-E-X-Y-G-A-L"]);     //["739-9425:6"]


findDuplicatePhoneNumbers(["4873279","ITS-EASY","888-4567","3-10-10-10","888-GLOP","TUT-GLOP","967-11-11","310-GINO","F101010","888-1200","-4-8-7-3-2-7-9-","487-3279"]);
//["310-1010:2","487-3279:4","888-4567:3"]