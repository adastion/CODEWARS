function longest(s1, s2) {
  let all = s1 + s2;
  return all
    .split('')
    .sort()
    .filter((item, i, arr) => (item.includes(arr[i + 1]) ? !item : item));
}

// console.log(longest('aretheyhere', 'yestheyarehere')) // 'aehrsty');
// console.log(
//   longest('loopingisfunbutdangerous', 'lessdangerousthancoding')) //'abcdefghilnoprstu',);
// console.log(longest('inmanylanguages', 'theresapairoffunctions')) // 'acefghilmnoprstuy');
