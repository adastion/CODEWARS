function duplicateEncode(word) {
  let res = [];
  word = word.toUpperCase();
  for (let i = 0; i < word.length; i++) {
    let arr = word.split('');
    arr.splice(i, 1);

    if (!arr.includes(word[i])) {
      res.push('(');
    } else {
      res.push(')');
    }
  }
  return res.join('');
}

console.log(duplicateEncode('din')); //'(((';
console.log(duplicateEncode('recede')); //'()()()';
