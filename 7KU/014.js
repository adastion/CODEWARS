function fakeBin(x) {
  if (x !== '' || x !== ' ') {
    return x
      .split('')
      .map((item) => (item < 5 ? 0 : 1))
      .join('');
  }
}

// console.log(fakeBin('45385593107843568'));
