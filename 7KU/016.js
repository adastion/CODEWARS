function solution(string) {
  let res = string.split('');
  let arr = [];
  res.map((item, i) => {
    if ((item === item.toUpperCase())) {
      return (res[i] = ' ' + item);
    } else {
      return item;
    }

  });

  return res.join('');
}



// regular exspression

// function solution(string) {
//   return string.replace(/([A-Z])/g, ' $1');
// }

// console.log(solution('camelCasing')); // 'camel Casing', 'Unexpected result');
// console.log(solution('camelCasingTest')); // 'camel Casing Test', 'Unexpected result');
