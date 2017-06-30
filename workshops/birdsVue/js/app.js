var b1 = {
  name: "Pygmy Owl",
  species: "Owl",
  gender: "Female",
  img: "https://www.allaboutbirds.org/guide/PHOTO/LARGE/NoPygmy1.jpg"
};

var b2 = {
  name: "Western Meadow Lark",
  species: "Meadow Lark",
  gender: "Male",
  img: "https://www.allaboutbirds.org/guide/PHOTO/LARGE/western_meadowlark_1.jpg"
};

var birds = [b1, b2];
var title = "The Birds";

function Bird(name, species, gender, img, predator) {
  this.name = name;
  this.species = species;
  this.gender = gender;
  this.img = img;
  this.predator = predator ? true : false;
  // birds.push(this);
}

var b3 = new Bird("Cowbird", "Warbler", "Female", "https://www.allaboutbirds.org/guide/PHOTO/LARGE/brown_headed_cowbird_4.jpg");
var b4 = new Bird("Blue Jay", "C. cristata", "Female", "http://img-aws.ehowcdn.com/877x500p/photos.demandstudios.com/getty/article/3/12/504583261.jpg", true);
var b5 = new Bird("Blue Jay", "C. cristata", "Male", "https://www.allaboutbirds.org/guide/PHOTO/LARGE/blue_jay_8.jpg", true);
var b6 = new Bird("American Crow", "Passerine", "Male", "https://www.allaboutbirds.org/guide/PHOTO/LARGE/american_crow_8.jpg");
var b7 = new Bird("Andean Condor", "Vultur", "Male", "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/AndeanCondorMale.jpg/220px-AndeanCondorMale.jpg");
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
  },
  methods: {
    addBird: function() {
      var newBird = new Bird(this.name, this.species, this.gender, this.img);
      console.log(this.birds);
      this.birds.push(newBird);
      this.name = "";
      this.species = "";
      this.gender = "";
      this.img = "";
    }
  }
});
