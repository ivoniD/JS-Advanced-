function subtract() {
    let firstNumEl = document.getElementById('firstNumber');
    let secondNumEl = document.getElementById('secondNumber');
    let firstNumNumvber = Number(firstNumEl.value);
    let secondNumNumber = Number(secondNumEl.value);
    
   let sum = firstNumNumvber - secondNumNumber;
   let result = document.getElementById('result');

   result.textContent = sum;

}