// Two tortoises named A and B must run a race. A starts with an average speed of 720 feet per hour. Young B knows she runs faster than A and furthermore has not finished her cabbage.

// When she starts, at last, she can see that A has a 70 feet lead but B speed is 850 feet per hour. How long will it take B to catch A?

// More generally: given two speeds v1 (A speed, integer > 0) and v2 (B speed, integer > 0) and a lead g (integer > 0) how long will it take B to catch A?

// The result will be an array [h, mn, s] where h, mn, s is the time needed in hours, minutes and seconds (don't worry for fractions of second). If v1 >= v2 then return nil, nothing, null, None or {-1, -1, -1} for C++.

// Examples:

// race(720, 850, 70) => [0, 32, 18]
// race(80, 91, 37) => [3, 21, 49]
// Note: you can see some other examples in "Your test cases".

function race(v1, v2, g) {

var velocity1InSeconds = v1 / 216000;
var velocity2InSeconds = v2 / 216000;
var currentPosition1 = g;
var currentPosition2 = 0;
var seconds = 0;
var newArray = [];

if(v1 >= v2){
  return(null);
}

while(currentPosition1 > currentPosition2){
  currentPosition1 += velocity1InSeconds;
  currentPosition2 += velocity2InSeconds;
  seconds ++;
}
var hours = seconds / 216000;
var minutes = (hours % 1) * 60;
var finalSeconds = minutes % 1 * 60;

if(finalSeconds > 59.5){
  minutes += minutes + 1;
  finalSeconds = 0;
}

newArray.push(Math.floor(hours), Math.floor(minutes), Math.floor(finalSeconds));
return(newArray);
}

race(80, 100, 40);
