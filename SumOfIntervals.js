// Sum of Intervals

// https://www.codewars.com/kata/sum-of-intervals/train/javascript

// Write a function called sumIntervals that accepts an array of intervals, and returns the sum of all the interval lengths. Overlapping intervals should only be counted once.

// Intervals

// Intervals are represented by a pair of integers in the form of an array. The first value of the interval will always be less than the second value. Interval example: [1, 5] is an interval from 1 to 5. The length of this interval is 4.

// Overlapping Intervals

// List containing overlapping intervals:

// [
//    [1,4],
//    [7, 10],
//    [3, 5]
// ]
// The sum of the lengths of these intervals is 7. Since [1, 4] and [3, 5] overlap, we can treat the interval as [1, 5], which has a length of 4.

// ###Examples:

// sumIntervals( [
//    [1,2],
//    [6, 10],
//    [11, 15]
// ] ); //=> returns 9

// sumIntervals( [
//    [1,4],
//    [7, 10],
//    [3, 5]
// ] ); //=> returns 7

// sumIntervals( [
//    [1,5],
//    [10, 20],
//    [1, 6],
//    [16, 19],
//    [5, 11]
// ] ); //=> returns 19



function sumIntervals(intervals){
  
  var intervalArray = [];
  var currentInterval;

  for(i=0; i< intervals.length; i++){
    currentInterval = intervals[i][0];
    for(p=0; p<intervals[i][1] - intervals[i][0]; p++){
      if(intervalArray.includes(currentInterval) === false){
        intervalArray.push(currentInterval);
      }
      currentInterval ++;
    }
  }
return intervalArray.length;
}

    var test1 = [[1,5]];
    var test2 = [[1,5],[6,10]];
    var test3 = [[1,5],[1,5]];
    var test4 = [[1,4],[7, 10],[3, 5]];
    
    // sumIntervals(test1);  // 4);
    // sumIntervals(test2);  // 8);
    // sumIntervals(test3);  // 4);
    sumIntervals(test4);  // 7);