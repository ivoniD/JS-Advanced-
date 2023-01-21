function diagonalSum(matrix) {
  let firstD = 0;
  let secondD = 0;
  for (let r = 0; r < matrix.length; r++) {
    const currNum = Number(matrix[r][r]);
    firstD += currNum;
    const currNum2 = Number(matrix[r][matrix.length - (r + 1)]);
    secondD += currNum2;
  }
  console.log(`${firstD} ${secondD}`);
}
