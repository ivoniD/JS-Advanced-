function smallestTwo(arr){
arr.sort((a,b) => a-b).splice(2)
console.log(...arr)
}

smallestTwo([30, 15, 50, 5])
smallestTwo([3, 0, 10, 4, 7, 3])