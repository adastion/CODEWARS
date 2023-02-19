function abbrevName(name) {

  let arrN = [];
  arrN.push(name[0].toUpperCase() + '.');
  let arr = name
    .split('')
    .map((item, i, a) => (item === ' ' ? a[i + 1] : null))
    .filter((item) => item !== null);
  arrN.push(arr[0].toUpperCase())
  return arrN.join('');
}

   console.log(abbrevName('Sam Harris'))  // 'S.H');
   console.log(abbrevName('Patrick Feenan'))  // 'P.F');
   console.log(abbrevName('Evan Cole'))  // 'E.C');
   console.log(abbrevName('P Favuzzi'))  // 'P.F');
   console.log(abbrevName('David Mendieta'))  // 'D.M');