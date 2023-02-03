function negativePositive(arr){
    
const result = [];
arr.filter((x, i) =>  x < 0 ? result.unshift(x) : result.push(x))

for(let i = 0; i< result.length; i++){
    console.log(result[i]);
}
}
negativePositive([7, -2, 8, 9])
negativePositive([3, -2, 0, -1])

