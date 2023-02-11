function betterThanAverage(classPoints, yourPoints) {
  classPoints.push(yourPoints);
  let avg = classPoints.reduce((sum, item) => sum + item, 0) / classPoints.length;
  return avg < yourPoints ? true : false;
}

// console.log.log(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9));
// console.log.log(betterThanAverage([29, 55, 74, 60, 11, 90, 67, 28], 21));
