function sumFirstLast(input) {
    const result = Number(input.shift()) + Number(input.pop())
    return(result);
}
console.log(sumFirstLast(['20', '30', '40']))
console.log(sumFirstLast(['5', '10']))