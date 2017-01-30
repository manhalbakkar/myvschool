var Car = function(type, model, color) {
  this.carType = type;
  this.carModel = model;
  this.carColor = color;
  this.start = function() {
    console.log("I turn the key on in the " + this.carType + " car");
  };
  this.drive = function(callback) {
    console.log("I am driving at " + " in the " + this.carColor + " " + this.carType + " car");
      callback();
  }
}

var oldCar = new Car("Fiat", 500, "white");
oldCar.start(oldCar.drive);
