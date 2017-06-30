var b1 = {
  name: "Pygmy Owl",
  species: "Owl",
  gender: "Female",
  img: ""
};

var b2 = {
  name: "Western Meadow Lark",
  species: "Meadow Lark",
  gender: "Male",
  img: ""
};

var birds = [b1, b2];

function Bird(name, species, gender, img, predator) {
  this.name = name;
  this.species = species;
  this.gender = gender;
  this.img = img;
  this.predator = predator ? true : false;
  birds.push(this);
}

var b3 = new Bird("Cowbird", "Warbler", "Female", "");
var b4 = new Bird("Blue Jay", "C. cristata", "Female", "", true);
var b5 = new Bird("Blue Jay", "C. cristata", "Male", "", true);
var b6 = new Bird("American Crow", "Passerine", "Male", "");
var b7 = new Bird("Andean Condor", "Vultur", "Male", "")
// birds.push(b3, b4, b5);
console.log(birds);

var app = new Vue({
  el: "#app", // this is the ID that we use to populate the data in html
  data: {
    title: title,
    birds: birds,
    name: undefined,
    species: undefined,
    gender: undefined,
    img: undefined
  }
});
