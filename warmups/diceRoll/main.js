// 21 June 2017
// Today is the first day using Node and Atom.
// These exercises involve using some basic functions
// to simulate a game of dice and an even number counter.

// console.log("Test Statement");

// Even Number Counter
function counter() {
  for (var i=0; i<12; i+=1) {
    if (i%2==0) {
      console.log("Even number: ", i);
    }
  }
}
// counter();

// Dice Game simulation
function roll() {
  return {d1: Math.floor(Math.random() * 6 + 1),
    d2: Math.floor(Math.random() * 6 + 1)};
}

function checker() {
  var newRoll = roll();
  if (newRoll.d1 + newRoll.d2 === 7 || newRoll.d1 + newRoll.d2 === 11) {
    console.log("You rolled ",newRoll.d1," and ",newRoll.d2," and won!");
  }
  else {
    console.log("You rolled ",newRoll.d1," and ",newRoll.d2," and lost!")
  }
}
checker();
