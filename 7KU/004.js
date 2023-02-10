function oddOrEven(array) {
  let vel = array.reduce((sum, item) => sum + item, 0);
  return vel % 2 == 0 ? 'even' : 'odd';
}

// console.log(oddOrEven([0, -1, -5])); //'even'
// console.log(oddOrEven([0, -1, -3])); //'even'
// console.log(oddOrEven([-1023, 1, -2])); //'even'

// console.log(oddOrEven([0, 1, 2])) //'odd'
// console.log(oddOrEven([0, 1, 4])) //'odd'
// console.log(oddOrEven([1023, 1, 3])) //'odd'
