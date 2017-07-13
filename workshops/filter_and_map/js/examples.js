// ------------------------
// FILTER AND MAP RESOURCES
// ------------------------
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter


// ------------------------
// MAP EXAMPLES
// ------------------------
var numbers = [1,2,3,4,5,6,7,8,9];


// ONE
// Use a for loop to return an array of odd numbers

var oddNumbers = [];
for (var i=0; i<numbers.length; i+=1) {
  if (numbers[i] % 2 !== 0) {
    oddNumbers.push(numbers[i]);
  }
}

// Use map to return an array of odd numbers
// ex: var mappedArray = Array.map(function(itemInArray) {
//   return (newItem);
// }); will return a new array of mapped items

var mappedOddNumbers = numbers.map(function(item) {
  return item * 2;
});

// console.log(mappedOddNumbers);

// TWO
// use a for loop to return an array full of objects
// ex: var numObjects = [ { count: 1}, {count: 2}  ]

var numberObjects = [];

for (var i=0; i<numbers.length; i+=1) {
  var tempObject = { count: numbers[i]};
  numberObjects.push(tempObject);
}

// console.log(numberObjects);

// now use a map

var mappedNumberObjects = numbers.map(function(item) {
  return { count: item };
});

// console.log("mappedNumberObjects", mappedNumberObjects);


// ------------------------
// FILTER EXAMPLES
// ------------------------

// ONE

// Use a for loop to return an array of numbers less than 4

var numbersLessThanFour = [];
for (var i=0; i<numbers.length; i+=1) {
  if (numbers[i]<4) {
    numbersLessThanFour.push(numbers[i]);
  }
}

// console.log(numbersLessThanFour);

// Use Filter to achieve the same goal.

var filteredLessThanFour = numbers.filter(function(item) {
  return item < 4;
});

// console.log("filteredLessThanFour", filteredLessThanFour);

// TWO
// Use filter to return an array of even numbers

var filteredEvenNumbers = numbers.filter(function(item) {
  return (item % 2 === 0);
});

// console.log("filteredEvenNumbers", filteredEvenNumbers);

// THREE
// Use map and filter to return number OBJECTS greater than five

var filterGreaterThanFive = numbers.filter(function(item) {
  return (item > 5);
}).map(function(item) {
  return {count: item}
})

// console.log(filterGreaterThanFive);


// ------------------------
// ADDITIONAL EXAMPLES
// ------------------------

var names = ["David Bowie", "John Lennon", "Jimi Hendirx", "Paul McCartney", "Kurt Cobain"];

// map the names to objects
var mappedObjectNames = names.map(function(item) {
  return {name: item};
});
// console.log(mappedObjectNames);

// map just the first names
var mappedObjectFirstNames = names.map(function(item) {
  var space = item.indexOf(" ");
  return {name: item.substr(0,space)};
});
// console.log(mappedObjectFirstNames);

// filter to return names that begin with J
var filteredJNames = names.filter(function(item) {
  if (item.substr(0,1) === "J") {
    return item;
  }
});
// console.log(filteredJNames);

// use map and filter together to return names that begin with J.
var filteredAndMappedJNames = names.filter(function(item) {
  if (item.substr(0,1) === "J") {
    return item;
  }
}).map(function(item) {
  return {name: item};
})
// console.log(filteredAndMappedJNames);


var shapes = [
  { name: "Square", color: "Green", sides: 4 },
  { name: "Triangle", color: "Green", sides: 3 },
  { name: "Rectangle", color: "Red", sides: 4 },
  { name: "Pentagon", color: "Green", sides: 5 },
  { name: "Right Triangle", color: "Red", sides: 3 },
];

// return an array of just shape names
var shapeNames = shapes.map(function(item) {
  return item.name;
})
// console.log(shapeNames);
// return an array of Green shapes
var greenShapes = shapes.filter(function(item) {
  if (item.color === "Green") {
    return item;
  }
});
// console.log(greenShapes);

// return an array of shapes with less then 4 sides
var shapesWithLessThanFourSides = shapes.filter(function(item) {
  if (item.sides < 4) {
    return item;
  }
});
// console.log(shapesWithLessThanFourSides);
