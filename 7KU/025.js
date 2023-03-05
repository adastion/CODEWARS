function countPositivesSumNegatives(input) {
  let current = input.filter((item) => (item > 0 ? item : !item));
  let sum = input
    .filter((item) => (item < 0 ? item : !item))
  
  // return [] || null ? [current.length, sum] : null;
  return current;
}


// console.log(countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]));
