function printEveriN(arr, num){
let n = Number(num);
const result = [];
for(let i = 0; i < arr.length; i+= num){
    result.push(arr[i])
}
return(result);
}

console.log(printEveriN(['5', 
'20', 
'31', 
'4', 
'20'], 
2
))
