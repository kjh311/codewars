// myjinxin katas #002 : Hotel room number

// Now, suppose you work in a Chinese hotel and tell you a real floor and the total number of rooms, please arrange all the room numbers that do not contain any unlucky numbers. For example:

// realFloor = 1
// totalRooms=10
// The result should be:
// ["101","102","103","105","106","107","108","109","110","111"]

// The room number "104" is skiped.
// As you can see, the rule is the number of floors + room numbers(at least 2 digits, if the room number more than 100, use 3 digits). More examples:

// realFloor = 4
// totalRooms=30
// The result should be:
// ["501","502","503","505","506","507","508","509","510","511",
//  "512","515","516","517","518","519","520","521","522","523",
//  "525","526","527","528","529","530","531","532","533","535"
// ]

// The floor number 4 is skiped.
// The room number "504","513","514","524","534" are skiped.

// realFloor = 100
// totalRooms=100
// The result should be:
// ["126001","126002","126003","126005","126006","126007","126008",
//   ............................................................
//   ................ SOMETHING OMITTED .........................
//   ............................................................
//   "126118","126119","126120","126121","126122","126123","126125"
// ]

// The floor number 4,13,14,18,24,34,40-49,54,64,74,84,94,104,113,114,118,124 are skiped.
// The room number 4,13,14,24,34,40-49,54,64,74,84,94,104,113,114,124 are skiped.
// Task

// Complete function roomNumber that accepts 2 arguments realFloor and totalRooms. Returns the result in accordance with the rules above.

// Note: 0<realFloor<150, 0<totalRooms<150


// https://www.codewars.com/kata/myjinxin-katas-number-002-hotel-room-number/train/javascript

// I think they have an error somewhere, the floor number comes out wrong on their end



function roomNumber(realFloor,totalRooms){
  
  var finalRooms = [];
  var badFloorNumbers = [4,13,14,18,24,34,44,54,64,74,84,94,104,113,114,118,124,134,144];
  var badRoomNumbers = [4,13,14,24,34,44,54,64,74,84,94,104,113,114,124,134,144];

  for(i=1; i <= realFloor; i++){
    if(badFloorNumbers.includes(i)){
      realFloor ++;
      console.log("Skipped FLOOR " + i);
    }
  }
  console.log("REALFLOOR "  + realFloor)

  
  for(j=1; j <= totalRooms; j++){
    if(badRoomNumbers.includes(j)){
      // console.log("Skipped ROOM " + j);
      totalRooms ++;
    }else if(j < 10){
      finalRooms.push(realFloor + "0" + j);
    }else if(j > 9){
      finalRooms.push(realFloor + "" + j);
    }else if(j > 100){
      finalRooms.push((realFloor + 1) + "" + j);
    }
  }
  

  // console.log(finalRooms.length);
  return finalRooms;
}

// roomNumber(1,10); 
//["101","102","103","105","106","107","108","109","110","111"]

roomNumber(92,61);
//[\'11601\', \'11602\', \'11603\', \'11605\', \'11606\', \'11607\', \'11608\', \'11609\', \'11610\', \'11611\', \'11612\', \'11615\', \'11616\', \'11617\', \'11618\', \'11619\', \'11620\', \'11621\', \'11622\', \'11623\', \'11625\', \'11626\', \'11627\', \'11628\', \'11629\', \'11630\', \'11631\', \'11632\', \'11633\', \'11635\', \'11636\', \'11637\', \'11638\', \'11639\', \'11650\', \'11651\', \'11652\', \'11653\', \'11655\', \'11656\', \'11657\', \'11658\', \'11659\', \'11660\', \'11661\', \'11662\', \'11663\', \'11665\', \'11666\', \'11667\', \'11668\', \'11669\', \'11670\', \'11671\', \'11672\', \'11673\', \'11675\', \'11676\', \'11677\', \'11678\', \'11679\']

// roomNumber(4,30); 
// //["501","502","503","505","506","507","508","509","510","511","512","515","516","517","518","519","520","521","522","523","525","526","527","528","529","530","531","532","533","535"]