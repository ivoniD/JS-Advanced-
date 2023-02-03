function solve(arr){
const town = {};
for (let i = 0; i < arr.length; i++) {
    const element = arr[i].split(' <->');
    let city = element[0]
    let pop = Number(element[1])
    if(!town[city]){
        town[city] = 0 
    }
   town[city] += pop;   
}
for (const key in town) {
console.log(`${key} : ${town[key]}`)
}

}

solve(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000']
)
solve(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']
)