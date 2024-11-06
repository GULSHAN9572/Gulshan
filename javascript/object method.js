// object method
// var emp ={
//     name: "Gulshan",
//     age:22,
//     salary:50000
// }
// let keys = Object.keys(emp)
// console.log(keys)
//++++++++++++++++++++++++++++

// output:-[ 'name', 'age', 'salary' ]
//-------------------------------------------
// var emp ={
//     name: "Gulshan",
//     age:22,
//     salary:50000
// }
// let keys = Object.keys(emp).forEach((keys) => console.log(keys))
//+++++++++++++++++++++++++++++++++++

//output:_ 
// name
// age
// salary
//-------------------------------------
// var emp ={
//     name: "Gulshan",
//     age:22,
//     salary:50000
// }
// let keys = Object.keys(emp)
// console.log(keys)
// console.log(Object.values(emp))
//+++++++++++++++++++++++++++++++++++
// output:
// [ 'name', 'age', 'salary' ]
// [ 'Gulshan', 22, 50000 ]
//-----------------------------
// Array of array
// var emp ={
//     name: "Gulshan",
//     age:22,
//     salary:50000
// }
// const keyValuePairs =Object.entries(emp)
// console.log(keyValuePairs)
//++++++++++++++++++++++++++++++++++++++++++++++++++
//output:
// [ [ 'name', 'Gulshan' ], [ 'age', 22 ], [ 'salary', 50000 ] ]
//--------------------------------------
var emp ={
    name: "Gulshan",
    age:22,
    salary:50000
}
Object.freeze(emp); //freeze hone ke bed kuchh bhi change nhi hota he
emp.name="Babu" //name change karne ki koshish
console.log(emp)