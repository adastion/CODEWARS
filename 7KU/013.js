function printerError(s) {
  let aToM = s.match(/[a-m]/g);
  return s.length - aToM.length + '/' + s.length;
}

// console.log(printerError('aaaxbbbbyyhwawiwjjjwwm'));
