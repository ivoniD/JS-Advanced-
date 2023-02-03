function sameNumbers(num) {
    let input = String(num);
    let flag = true;
    let sum = Number(input[0]);
    for (let index = 1; index < input.length; index++) {
        if (input[0] != input[index]) {
            flag = false;
        }
        sum += Number(input[index]);
    }
    console.log(flag);
    console.log(sum);
}
sameNumbers(2222222);
sameNumbers(1234);
