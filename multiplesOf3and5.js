// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

// Note: If the number is a multiple of both 3 and 5, only count it once.

function solution(number){

 var finalArray = [];
 var n = 3;
 if(n < number){
    finalArray.push(n);
 }
 var b = 5;
 var total=0;

while(n < number){
  var x = finalArray[finalArray.length -1] + 3;
  finalArray.push(x);
  n = finalArray[finalArray.length -1];
   if(n >= number){
     finalArray.pop();
   }
}

 if(b < number){
    finalArray.push(b);
 }

while(b < number){
  var q = finalArray[finalArray.length -1] + 5;
  finalArray.push(q);
  b = finalArray[finalArray.length -1];
   if(b >= number){
     finalArray.pop();
   }
}

var unique = finalArray.filter(function(elem, index, self) {
    return index == self.indexOf(elem);
})

for (var i = 0; i < unique.length; i++) {
  total += unique[i];
}

  return(total);
}

solution(10);
