function sumTable() {
let costElements = document.querySelectorAll('tr td:nth-of-type(2)')
/*
let sum = Array.from(costElements).reduce((a, x)=>  {
    let currValue = Number(x.textContent) || 0;
    return a + currValue;
}, 0)
let resultElement = document.getElementById('sum')
resultElement.textContent = sum
---------------- */
let sumArr = Array.from(costElements)
let sum = 0
for(let i = 0; i < sumArr.length-1; i++){
    sum += Number(sumArr[i].textContent)
}
let resultElement = document.getElementById('sum')
resultElement.textContent = sum;
} 
