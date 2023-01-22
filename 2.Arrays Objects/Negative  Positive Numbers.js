function negativePositive(arr) {
  const result = [];
  arr.filter((x, i) => (x < 0 ? result.unshift(x) : result.push(x)));

  for (let i = 0; i < result.length; i++) {
    console.log(result[i]);
  }
}
