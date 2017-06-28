// 6/28/2017
// practice on for loops with the class.

// arrays
var names = ["Aaron", "Anthony", "Al", "Bob", "Carl", "Cindy", "Derek", "Don", "Frank", "Percil", "Taryn"];
var numbers = [1, 3, 5, 6, 7, 14, 17, 18, 19 ,25, 26, 36, 39, 45, 53, 67, 73, 84, 99]
var randomItems = [1, "Hello", 5, "GoodBye", 7, 14, "Aloha", 18, 19 ,"Adios", 26, 36, "Ciao"];
var customers = [
	{name: "Aaron", email: "aaron@gmail.com", tier: "gold", paid: true},
  {name: "Anthony", email: "anthony@gmail.com", tier: "silver", paid: true},
	{name: "Al", email: "al@gmail.com", tier: "bronze", paid: false},
	{name: "Bob", email: "bob@gmail.com", tier: "gold", paid: true},
	{name: "Carl", email: "carl@gmail.com", tier: "bronze", paid: true},
	{name: "Cindy", email: "cindy@gmail.com", tier: "gold", paid: true}
];

// two methods to find names, one is more consise (otherwise no difference)
function searchNames(names, letter) {
  for (var i=0; i < names.length; i+=1) {
    if (names[i].substring(0,1)===letter) {
      console.log(names[i]);
    }
  }
}

function searchNamesTwo(names, letter) {
  names.forEach(function(name) {
    (name[0] === letter ) ? console.log(name) : null;
  });
}

// two methods to find numbers greater than 10
function greaterThan(nums, comparisonNumber) {
  for (var i=0; i < nums.length; i+=1) {
    if (nums[i]>comparisonNumber) {
      console.log(nums[i]);
    }
  }
}

function greaterThanOther(nums, comparisonNumber) {
  nums.forEach(function(number) {
    (number > comparisonNumber) ? console.log(number) : null;
  });
}

// method to find numbers between 10 and 50, only printing odd #s
function greatThanLessThan(nums, lower, upper) {
  for (var i=0; i<nums.length; i+=1) {
    if (nums[i]>lower && nums[i]<upper && nums[i] % 2 !== 0) {
      console.log(nums[i]);
    }
  }
}

// method to print only things of the same type as we want
function controlPrinter(arrayIn, returnType) {
  var returnArray = [];
  for (var i=0; i<arrayIn.length; i+=1) {
    if (typeof(arrayIn[i])===returnType) {
      returnArray.push(arrayIn[i]);
    }
  }
  return returnArray;
}

// method to print customer names
function printCustomerNames(custArray, letter) {
  for (var i=0; i < custArray.length; i+=1) {
    if (custArray[i].name.charAt(0)===letter) {
      console.log(custArray[i].name);
    }
  }
}

// method to print out paying gold-tier customers
function printGoldCustomers(arrayIn) {
  var tempCustomers = [];
  for (var i=0; i<arrayIn.length; i+=1) {
    if (arrayIn[i].tier==="gold" && arrayIn[i].paid) {
      tempCustomers.push(arrayIn[i]);
    }
  }
  return tempCustomers;
}

// some calls to test our functions
// searchNamesTwo(names, "A");
// greaterThan(numbers, 50);
// greatThanLessThan(numbers,10,50);
// console.log(controlPrinter(randomItems, "string"));
// printCustomerNames(customers, "A");
console.log(printGoldCustomers(customers));
