function odd(arr){
const newArr = arr.filter((x, i) => i % 2 != 0).reverse().map(x => x*2)
//const reducer = (accumulator, value) => accumulator + value;
console.log(newArr.reduce((accumulator, value) => accumulator + value))
}
odd([10, 15, 20, 25]) // 50 30 
odd([3, 0, 10, 4, 7, 3]) // 6 8 0