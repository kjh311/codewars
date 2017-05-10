// Simple Fun #169: Press Button

// https://www.codewars.com/kata/simple-fun-number-169-press-button/train/javascript

// Task

// A lock has n buttons in it, numbered from 1 to n. To open the lock, you have to press all buttons in some order, i.e. a key to the lock is a permutation of the first n integers. If you push the right button in the right order, it will be pressed into the lock. Otherwise all pressed buttons will pop out. When all buttons are pressed into the lock, it opens.

// Your task is to calculate the number of times you've got to push buttons in order to open the lock in the worst-case scenario.

// Example

// For n = 3, the result should be 7.

//  Let's assume the right order is 3-2-1.
//  In the worst-case scenario, we press the buttons:
//  Press 1, wrong, button 1 pop out
//  Press 2, wrong, button 2 pop out
//  Press 3, right, button 3 pressed in
//  Press 1, wrong, button 1,3 pop out
//  Press 3, right, button 3 pressed in
//  Press 2, right, button 2 pressed in
//  Press 1, right, button 1 pressed in
//  We pressed button total 7 times.
// For n = 4, the result should be 14.

//  Let's assume the right order is 4-3-2-1.
//  In the worst-case scenario, we press the buttons:
//  Press 1, wrong, button 1 pop out
//  Press 2, wrong, button 2 pop out
//  Press 3, wrong, button 3 pop out
//  Press 4, right, button 4 pressed in
//  Press 1, wrong, button 1,4 pop out
//  Press 4, right, button 4 pressed in
//  Press 2, wrong, button 2,4 pop out
//  Press 4, right, button 4 pressed in
//  Press 3, right, button 3 pressed in
//  Press 1, wrong, button 1,3,4 pop out
//  Press 4, right, button 4 pressed in
//  Press 3, right, button 3 pressed in
//  Press 2, right, button 2 pressed in
//  Press 1, right, button 1 pressed in
//  We pressed button total 14 times.
// Input/Output

// [input] integer n

// The number of buttons in the lock.

// 0 < n ≤ 2000
// [output] an integer

// The number of times you've got to push buttons in the worst-case scenario.







function pressButton(n) {
  
  var keyArray = [];
  var keyPresses;
  var possiblities = n;
  var correctKeys = 0;
  var runThroughInMiddle = 0;
  var middleKeyPress = 0;
  var firstKeyPress = 0;
  var lastKeyPress = 0;

  
// for(i=1; i <= n; i++){
//   // keyArray.push(i);
//   keyPresses ++;
//   possiblities--;
// }  


while(possiblities > 1){
  // var difference = n - possiblities;
  
  if(possiblities === n){
    console.log("started FIRST run");
    keyPresses = possiblities -1;
    firstKeyPress = possiblities -1;
    console.log("added " + firstKeyPress + " KEYPRESSES in FIRST go round");
    correctKeys = 1;
    // possiblities --;
    console.log("Number of CORRECTKEYS in FIRST " + correctKeys);
    console.log("POSSIBLE keys at end of FIRST run is " + possiblities);
    
    
    // keyPresses = n;
    // console.log("Possible " + possiblities);
    // console.log("added " + keyPresses + " number of keyPresses equals");
    console.log("Number of total in FIRST keypresses is " + keyPresses);
  }else if(possiblities > 1){
    
    
    for(j = 0; j < n; j++){
      
      console.log(keyPresses);
      keyPresses += 2;
      middleKeyPress += 2;
      // console.log("2");
      possiblities --;
      console.log("possiblities " +possiblities);
    }
    
    correctKeys = n.length -1;
    // possiblities = 1;
    
    // console.log("started MIDDLE run");
    // keyPresses += possiblities - correctKeys;
    // // keyPresses = keyPresses + possiblities + 1;
    console.log("added " + middleKeyPress + " keyPresses in MIDDLE go round");
    
    // // keyPresses ++;
    console.log("POSSIBLE keys in MIDDLE " + possiblities);
    // console.log("Number of CORRECTKEYS is " + correctKeys);
    // // console.log(difference);
    // // console.log("Possible MIDDLE " + possiblities);
    // console.log("Number of total keypresses is in MIDDLE " + keyPresses);
    // runThroughInMiddle ++;
    // console.log("RUNTHROUGH IN MIDDLE " + runThroughInMiddle);
  }
  if(possiblities === 1){
    console.log("started LAST run");
    keyPresses ++;
    console.log("added " + lastKeyPress +" on LAST go round");
    // console.log("Possible " + possiblities);
    console.log("Number of total keypresses in LAST " + keyPresses);
  }
  
  
  
  // possiblities--;
  // keyPresses++;
  
}



// console.log(n);
console.log("TOTAL KeyPresses is " + keyPresses);

return keyPresses;
  
  
}


// pressButton(1);  //1)

// pressButton(3);  //7)

pressButton(4);  //14)

// pressButton(10);  //175)

// pressButton(2000);  //1333335000)