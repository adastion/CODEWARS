function descendingOrder(n) {
  if (n >= 0) {
    return Number(String(n)
      .split('')
      .sort((a, b) => b - a)
      .join(''));
  }
}

console.log(descendingOrder(123456789));