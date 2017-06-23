// Date: 22 June 2017
// Author: Joseph Ikehara
// Purpose: Practice with for loops, "Shuffling". Thursday class. Extra

console.log("Hello world");

function generateStandardDeck() {
  var cards = [];
  // declare cards - 1 Ace, 11 Jack, 12 Queen, 13 King
  for (var i=1; i<14; i+=1) {
    var card = {
      suit: "Hearts",
      number: i
    };
    cards.push(card);
  }
  for (var i=1; i<14; i+=1) {
    var card = {
      suit: "Clubs",
      number: i
    };
    cards.push(card);
  }
  for (var i=1; i<14; i+=1) {
    var card = {
      suit: "Diamonds",
      number: i
    };
    cards.push(card);
  }
  for (var i=1; i<14; i+=1) {
    var card = {
      suit: "Spades",
      number: i
    };
    cards.push(card);
  }
  return cards;
}

generateStandardDeck();
