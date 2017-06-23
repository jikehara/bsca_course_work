// Date: 22 June 2017
// Author: Joseph Ikehara
// Purpose: Practice with for loops, "Shuffling". Thursday class.

console.log("Hello world");

function generateDeck() {
  var cards = [];
  for (var i=1; i<53; i+=1) {
    cards.push(i);
  }
  return cards;
}

function shuffle(deckIn) {
  for (var i=0; i<deckIn.length; i+=1) {
    var currentIndex = deckIn.indexOf(deckIn[i]);
    var swapIndex= deckIn.indexOf(deckIn[Math.floor(Math.random()*deckIn.length)]);
    var tempCard = deckIn[currentIndex];
    deckIn[currentIndex] = deckIn[swapIndex];
    deckIn[swapIndex] = tempCard;
  }
  console.log("Shuffled ",deckIn);
  return deckIn;
}

var deck1 = generateDeck();
// console.log(deck1);
shuffle(deck1);

var checkArray = [];
deck1.forEach(function(card,index) {
  if(deck1.indexOf(card) === index) {
    checkArray.push(card);
  }
});

console.log("Deck size: ",checkArray.length);
