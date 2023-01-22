function biggestEl(matrix) {
  const arr = [];
  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[r].length; c++) {
      arr.push(matrix[r][c]);
    }
  }
  console.log(Math.max(...arr));
}
