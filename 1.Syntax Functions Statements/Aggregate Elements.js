function aggregateElements(arr) {
  let sum = 0;
  let inverseSum = 0;
  let concatStr = "";
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    inverseSum += 1 / arr[i];
    concatStr += arr[i];
  }
  console.log(sum);
  console.log(inverseSum);
  console.log(concatStr);
}
