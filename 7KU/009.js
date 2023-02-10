function sumOfMinimums(arr) {
  let arrNew = arr.map((item) => [Math.min(...item)].reduce((count, item) => count + item, 0));

  return arrNew.reduce((count, item) => count + item, 0);
}

// console.log(
//   sumOfMinimums([
//     [11, 12, 14, 54],
//     [67, 89, 90, 56],
//     [7, 9, 4, 3],
//     [9, 8, 6, 7],
//   ]),
// );
