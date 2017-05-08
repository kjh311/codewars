// Simple Fun #228: Greatest Common Prime Divisor

// Task

// Define GCPD (Greatest Common Prime Divisor) as the largest prime number that divides both given positive integers. Your task is to find GCPD of the given integers a and b or -1 if it doesn't exist.

// Input/Output

// [input] integer a

// 2 ≤ a ≤ 1000

// [input] integer b

// 2 ≤ b ≤ 1000

// [output] an integer

// GCPD of a and b or -1 if it doesn't exist.

// Example

// For a = 12 and b = 18, the output should be 3

// For a = 12 and b = 13, the output should be -1

function greatestCommonPrimeDivisor(a, b) {

var divisorsOfA = [];
var divisorsOfB = [];

function isPrime(a) {
    if(a < 2) return false;
    for (var i = 2; i < a; i++) {
        if(a%i===0)
            return false;
    }
    return true;
}

for(var i = 0; i < a; i++){
    if(isPrime(i) && a % i === 0){
      divisorsOfA.push(i);
    } 
}

function isPrimeB(b) {
    if(b < 2) return false;
    for (var i = 2; i < b; i++) {
        if(b%i===0)
            return false;
    }
    return true;
}

for(var j = 0; j < b; j++){
    if(isPrimeB(j) && b % j === 0){
      divisorsOfB.push(j);
    } 
}

var z = divisorsOfA.filter(function(val) {
  return divisorsOfB.indexOf(val) != -1;
});

if(z[0] !== undefined){
  var y = z.pop();
}else{
  y = -1;
}

return y;
}



greatestCommonPrimeDivisor(12,18);   //3)

// greatestCommonPrimeDivisor(12,13);   //-1)

// greatestCommonPrimeDivisor(2,3);   //-1)

// greatestCommonPrimeDivisor(100,140);   //5)