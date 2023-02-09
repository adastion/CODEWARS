function invert(array) {
   return array.map((item) => (item < 0 ? Math.abs(item) : -Math.abs(item)));
}

console.log(invert([1,-2,3,4,5]));