function objDemo() {
    let doubleChocko = {
        flourType: 'brown',
        bonus: 'fruit',
        weigth: 100
    }
//console.log(doubleChocko['weigth'])
doubleChocko.count = 4;
shugarType = 'shugar'
doubleChocko[shugarType] = 'brown';
doubleChocko['bisquits'] = 'yes';
//console.log(doubleChocko.shugar)
let entries = Object.entries(doubleChocko)
console.log(entries)
console.log(entries[0])
console.log(entries[0][0])
console.log(entries[0][1])
}
objDemo()