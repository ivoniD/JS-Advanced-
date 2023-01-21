function mathOperation(num1, num2, str) {
  let result;
  if (str == "+") {
    result = num1 + num2;
  } else if (str == "-") {
    result = num1 - num2;
  } else if (str == "*") {
    result = num1 * num2;
  } else if (str == "/") {
    result = num1 / num2;
  } else if (str == "%") {
    result = num1 % num2;
  } else if (str == "**") {
    result = Math.pow(num1, num2);
  }
  console.log(result);
}
