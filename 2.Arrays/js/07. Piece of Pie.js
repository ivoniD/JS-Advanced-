function pie(arr, start, end){
    const IndexOfStart = arr.indexOf(start)
    const IndefOfEnd = arr.indexOf(end)
return arr.slice(IndexOfStart, (IndefOfEnd+1))
}
console.log(pie(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'
))
/*pie(['Apple Crisp',
'Mississippi Mud Pie',
'Pot Pie',
'Steak and Cheese Pie',
'Butter Chicken Pie',
'Smoked Fish Pie'],
'Pot Pie',
'Smoked Fish Pie'
)*/