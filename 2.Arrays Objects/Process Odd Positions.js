function odd(arr) {
  const newArr = arr
    .filter((x, i) => i % 2 != 0)
    .reverse()
    .map((x) => x * 2);
  console.log(newArr);
}
