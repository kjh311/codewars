// Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.

// The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.

// It is much easier to understand with an example:

//   formatDuration(62)    // returns "1 minute and 2 seconds"
//   formatDuration(3662)  // returns "1 hour, 1 minute and 2 seconds"
// Note that spaces are important.

// Detailed rules

// The resulting expression is made of components like 4 seconds, 1 year, etc. In general, a positive integer and one of the valid units of time, separated by a space. The unit of time is used in plural if the integer is greater than 1.

// The components are separated by a comma and a space (", "). Except the last component, which is separated by " and ", just like it would be written in English.

// A more significant units of time will occur before than a least significant one. Therefore, 1 second and 1 year is not correct, but 1 year and 1 second is.

// Different components have different unit of times. So there is not repeated units like in 5 seconds and 1 second.

// A component will not appear at all if its value happens to be zero. Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.

// A unit of time must be used "as much as possible". It means that the function should not return 61 seconds, but 1 minute and 1 second instead. Formally, the duration specified by of a component must not be greater than any valid more significant unit of time.

// For the purpose of this Kata, a year is 365 days and a day is 24 hours.


function formatDuration (seconds) {

var finalArray = [];

if(seconds === 0){
  return "now";
}

var years = Math.floor(seconds / 31536000);
if(years >= 2){
  finalArray.push(years + " years");
}else if(years >= 1){
  finalArray.push(years + " year");
}
seconds = seconds % 31536000;

var days = Math.floor(seconds / 86400);
if(days >= 2){
    finalArray.push(days + " days");
}else if(days >= 1){
  finalArray.push(days + " day");
}
seconds = seconds % 86400;

var hours = Math.floor(seconds / 3600);
if(hours >= 2){
    finalArray.push(hours + " hours");
}else if(hours >= 1){
  finalArray.push(hours + " hour");
}
seconds = seconds % 3600;

var minutes = Math.floor(seconds / 60);
if(minutes >= 2){
    finalArray.push(minutes + " minutes");
}else if(minutes >= 1){
  finalArray.push(minutes + " minute");
}
seconds = seconds % 60;

if(seconds >= 2){
    finalArray.push(seconds + " seconds");
}else if(seconds >= 1){
  finalArray.push(seconds + " second");
}

if(finalArray.length >= 2){
    lastWord = finalArray[finalArray.length - 1];
    var secondToLastWord = finalArray[finalArray.length -2];
    finalArray.pop(lastWord);
    finalArray.pop(secondToLastWord);
    finalArray.push(secondToLastWord + " and " + lastWord);
  }
  var finalSentence = finalArray.join(", ");
  return finalSentence;

}


// formatDuration(1);      //"1 second");
// formatDuration(0);      //"now");
// formatDuration(62);      //"1 minute and 2 seconds");
// formatDuration(120);      //"2 minutes");
// formatDuration(3662);      //"1 hour, 1 minute and 2 seconds");
// formatDuration(3600);      //"1 hour");
// formatDuration(31536000);      //"1 year");
// formatDuration(63072000);      //"2 years");
formatDuration(15724800);      //"182 days");
// formatDuration(60);      //"1 minute");
// formatDuration(86400);      //"1 day;
