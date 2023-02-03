function biggestEl(matrix){
    const arr = [];
for(let r = 0; r < matrix.length; r++){
    for(let c = 0; c< matrix[r].length; c++){
arr.push(matrix[r][c]);
    }
}
console.log(Math.max(...arr)) 
}

biggestEl([[20, 50, 10],
    [8, 33, 145]]
   )
biggestEl([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]
   )