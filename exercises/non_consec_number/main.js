// 7/26/2017
// Joseph Ikehara

let numbers = [1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 14];

// find first non-consecutive numbers
// print out those two numbers and their positions in the array
var i = 0;
while (!(numbers[i+1]-numbers[i]!==1)) {
  i+=1;
}
console.log("First nonconsecutive numbers found: "+numbers[i]+" and "+numbers[i+1]+
  ". Numbers found at positions: "+(i) +" and "+(i+1));
