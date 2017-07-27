// Homework Challenge: 24 July 2017
// RULES:
// loops must be encapsulated in a function
// Array can not be hard coded (pass the array to the function)
// When challenge is passed, comment or delete just the function call (dont clutter your console)
// Must be written with ES6 conventions

// challenge One
// loop through the names array, and print names that being with the letter 'A'
// bonus: Allow your function to accept the Letter, as a parameter
const names = ["Aaron", "Anthony", "Al", "Bob", "Carl", "Cindy", "Derek", "Don", "Frank", "Percil", "Taryn"];

const printNames = (names, letter) => {
  const tempNames = names.filter((item) => item.substring(0,1)===letter);
  return tempNames;
}
console.log(printNames(names,"A"));

// challenge Two
// loop through the numbers array, and print numbers greater than 10
// bonus: Allow your function to accept the comparison Number, as a parameter
const numbers = [1, 3, 5, 6, 7, 14, 17, 18, 19 ,25, 26, 36, 39, 45, 53, 67, 73, 84, 99]

const printNumbersGreaterThan = (numberArray, comparisonNumber) => {
  const tempNums = numberArray.filter((num) => num>comparisonNumber);
  return (tempNums);
}
console.log(printNumbersGreaterThan(numbers, 10));

// challenge Three
// loop through the numbers array, and print numbers greater than 10, but less than 50
// bonus: Only print the odd numbers that meet these conditions

const printOddNumbersBetween = (numArray, lowNum, highNum) => {
  const tempNums = numArray.filter((num) => num>lowNum)
  .filter((num) => num<highNum)
  .filter((num) => num%2!==0);
  return (tempNums);
}
console.log(printOddNumbersBetween(numbers, 10, 50));

// challenge Four
// loop through the array of random items, and print ONLY Numbers
// bonus: Tell the function to return numbers, or strings, as a parameter
const randomItems = [1, "Hello", 5, "GoodBye", 7, 14, "Aloha", 18, 19 ,"Adios", 26, 36, "Ciao"];

const printOnlyNums = (randomList) => {
  const tempNums = randomList.filter((item) => typeof(item)==="number")
  return (tempNums);
}
console.log(printOnlyNums(randomItems));

// challenge Five
// loop through the array of customer objects, and print ONLY their names
// bonus: Print only customer names that begin with the letter 'A'
const customers = [
	{name: "Aaron", email: "aaron@gmail.com", tier: "gold", paid: true},
  {name: "Anthony", email: "anthony@gmail.com", tier: "silver", paid: true},
	{name: "Al", email: "al@gmail.com", tier: "bronze", paid: false},
	{name: "Bob", email: "bob@gmail.com", tier: "gold", paid: true},
	{name: "Carl", email: "carl@gmail.com", tier: "bronze", paid: true},
	{name: "Cindy", email: "cindy@gmail.com", tier: "gold", paid: true}
];

const printCustomerNames = (customerArray, firstLetter) => {
  const tempCustomers = customerArray.filter((person) => {
    return person.name.substring(0,1)===firstLetter;
  }).map((person) => person.name)
  return tempCustomers;
}
console.log(printCustomerNames(customers, "A"));


// challenge Six
// loop through the array of customers, and print ONLY customers that are 'gold' and 'paid'
// bonus: Return a completely new array that meets these conditions.

const printGoldPaidCustomers = (customerArray) => {
  const tempCustomers = customerArray.filter((person) => {
    return person.tier==="gold";
  }).filter((person) => person.paid===true)
  .map((person) => person.name)
  return tempCustomers;
}
console.log(printGoldPaidCustomers(customers));
