function store(array){
let result = array.sort((a,b) => a.localeCompare(b))

let current = [];
let char ='';
for(let i = 0; i < array.length; i++){
    current = result[i].split(' : ');
    if(result[i][0] !== char){
        console.log(result[i][0])
    }

}
}


store(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']
)