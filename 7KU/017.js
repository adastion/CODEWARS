function arrayDiff(a, b) {
  let res= [];

  res = a.filter((item, i) => {
    return !b.includes(a[i])
  });

  return res;
}

// console.log(arrayDiff([1, 2], [1])); //[2], 'a was [1,2], b was [1]');
// console.log(arrayDiff([1, 2, 2], [1])); //[2, 2], 'a was [1,2,2], b was [1]');
