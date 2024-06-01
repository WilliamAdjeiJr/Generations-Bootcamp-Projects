function Car(make, model, year, color, doors, mileage, engineType) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.color = color;
  this.doors = doors;
  this.mileage = mileage;
  this.engineType = engineType;
}

const car = new Car(
  process.argv[2],
  process.argv[3],
  process.argv[4],
  process.argv[5],
  process.argv[6],
  process.argv[7],
  process.argv[8]
);

console.log("Car Details:");
console.log("- Make:", car.make);
console.log("- Model:", car.model);
console.log("- Year:", car.year);
console.log("- Color:", car.color);
console.log("- Number of Doors:", car.doors);
console.log("- Mileage:", car.mileage);
console.log("- Engine Type:", car.engineType);
