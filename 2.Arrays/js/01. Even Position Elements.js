function evenPos(input){
const newArr = input.filter((x, i) => i % 2 === 0)
console.log(...newArr)
}
evenPos(['20', '30', '40', '50', '60'])
evenPos(['5', '10'])