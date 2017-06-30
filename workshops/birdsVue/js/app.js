var b1 = {
  name: "Pygmy Owl",
  species: "Owl",
  gender: "female",
  img: ""
};

var b2 = {
  name: "Western Meadow Lark",
  species: "Meadow Lark",
  gender: "Male",
  img: ""
};

console.log(b1);
console.log(b2);


function Bird(name, species, gender, img) {
  this.name = name;
  this.species = species;
  this.gender = gender;
  this.img = img;
}

var b3 = new Bird("Cowbird", "Warbler", "female", "");
