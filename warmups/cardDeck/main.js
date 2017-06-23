// Date: 22 June 2017
// Author: Joseph Ikehara
// Purpose: Practice with for loops, "Shuffling". Thursday class.

// console.log("Hello world");

// var textShuffle = "abcdefghijklmnopqrstuvwxyz".split('');
// console.log(textShuffle);

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

function deckMap(deckIn) {

  for (var i=0; i<deckIn.length; i+=1) {

    var card = "";

    if (deckIn[i] <= 13) {
      card = deckIn[i] + " of Hearts!";
      console.log("I'm the",card);
    }
    else if (deckIn[i] <= 26) {
      //     condition          if    true: do this               else: do this
      card = (deckIn[i]%13 !==0) ? (deckIn[i] % 13 +" of Clubs!") : "13 of Clubs!";
      console.log("I'm the",card);
    }
    else if (deckIn[i] <= 39) {
      card = (deckIn[i]%26) + " of Diamonds!"
      console.log("I'm the",card);
    }
    else if (deckIn[i] <= 52){
      card = (deckIn[i]%39) + " of Spades!"
      console.log("I'm the",card);
    }
    else {
      console.log("Too many cards!");
    }
  }
}

var deck1 = generateDeck();
// console.log(deck1);
// shuffle(deck1);
deckMap(deck1);

var checkArray = [];
deck1.forEach(function(card,index) {
  if(deck1.indexOf(card) === index) {
    checkArray.push(card);
  }
});

// console.log("Deck size: ",checkArray.length);
