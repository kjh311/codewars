// In English and programming, groups can be made using symbols such as "()" and "{}" that change meaning. However, these groups must be closed in the correct order to maintain correct syntax.

// Your job in this kata will be to make a program that checks a string for correct grouping. For instance, the following groups are done correctly:

// ({})
// [[]()]
// [{()}]
// The next are done incorrectly

// {(})
// ([]
// [])
// A correct string cannot close groups in the wrong order, open a group but fail to close it, or close a group before it is opened.

// Your function will take an input string that may contain any of the symbols "()" "{}" or "[]" to create groups.

// It should return True if the string is empty or otherwise grouped correctly, or False if it is grouped incorrectly.

// EXAMPLES:
// Test.expect(groupCheck("()"), "That group was matched correctly");

// Test.expect(!groupCheck("{(})"), "That group was matched incorrectly");


// Test.expect(!groupCheck("[])"), "That group was left open or prematurely closed");


// NOT FINISHED!!!!
 function groupCheck(s){

  // console.log(s);
   var stringArray = s.split("");
  // console.log(stringArray);
//     for (var i = 0; i < stringArray.length; i++) {
//     console.log(stringArray[i]);

// }
  // console.log(stringArray[stringArray.length-1]);
  // array1[array1.length - 1];
   if(stringArray[0] === "(" && stringArray[stringArray.length-1] !== ")"){
     return false;
   }
   else if(s.length % 2 === 0){
     console.log("That group was matched correctly");
     return true;
   }else if(s.length % 2 === 0){
     console.log("That group was matched incorrectly");
     return false;
   }else if(s.length % 2 !== 0){
     console.log("That group was left open or prematurely closed");
      return false;

   }


 }

 groupCheck("()");
