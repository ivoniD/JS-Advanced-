function circleArea(input){

if(typeof(input) == 'number'){
//let area = input*input*Math.PI;
let area2 = Math.pow(input, 2)* Math.PI;
console.log(area2.toFixed(2)) 
}else{
    console.log(`We can not calculate the circle area, because we receive a ${typeof(input)}.`)
}
}

circleArea(5)
circleArea('name')