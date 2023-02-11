const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return Math.floor((distanceToPump + mpg + fuelLeft) / 3) <= 25 ? true : false;
};

console.log(zeroFuel(50, 25, 2));
console.log(zeroFuel(100, 50, 1));