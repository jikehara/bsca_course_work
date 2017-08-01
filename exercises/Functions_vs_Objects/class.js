// let can change value, const cannot
const Vehicle = {
  motor: undefined,
  wheels: undefined,
  type: undefined,
  gear: 0,
  start: false,

  // functions
  aboutMe: function() {
    console.log("My car is a "+this.type+" with a "+this.motor+" engine and "+this.wheels+" wheels." )
  },

  startCar: function() {
    this.start = !this.start;
    (this.start) ? console.log("Car started!") : console.log("Car turned off.");
  },

  shiftUp: function() {
    if (this.start && this.gear<6) {
      this.gear += 1;
      console.log("Current Gear: ",this.gear);
    }
    else if (this.start && this.gear===6) {
      console.log("You can' go above 6th gear.");
    }
    else {
      console.log("Car isn't started, can't shift gears.");
    }
  },

  shiftDown: function() {
    if (this.start && this.gear>0) {
      this.gear -= 1;
      console.log("Current Gear: ",this.gear);
    }
    else if (this.start && this.gear===0) {
      console.log("You can' go below 0th gear? Neutral? I don't know how automatics work.");
    }
    else {
      console.log("Car isn't started, can't shift gears.");
    }
  }
};

Vehicle.type = "Audi A6";
Vehicle.wheels = 4;
Vehicle.motor = "v6";

Vehicle.aboutMe();
Vehicle.startCar();

for (let i=0; i<10; i+=1) {
  Vehicle.shiftUp();
}

for (let i=0; i<10; i+=1) {
  Vehicle.shiftDown();
}

Vehicle.startCar();
