function daysInAMonth(month, year){
//let d = new Date(month, year);
//console.log(d);
//return new Date(year, month, 0);
return new Date(year, month, 0).getDate();
}
console.log(daysInAMonth(1, 2012));
console.log(daysInAMonth(2, 2021));