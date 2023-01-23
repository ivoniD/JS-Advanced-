function smallestTwo(arr) {
  arr.sort((a, b) => a - b).splice(2);
  console.log(...arr);
}
