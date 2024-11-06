// ARRAY METHODS
// Add or remove items
// let numbers = [10,20,30,40]
// //at the end of the array
// numbers.push(50)  //numbers array me 50 bhi add ho gya
// numbers.push(60)
// console.log(numbers)
// numbers.pop()  //numbers Array me last se remode ho gya
// console.log(numbers)
//-----------------------
//let arr = ["I", "love" ,"javascript"]
// splice--------------------
// syntax arr.slice(startIndex,endIndex) not including end
//console.log(arr.slice(1,3))  // output [ 'love', 'javascript' ]

//console.log(arr) // putput [ 'I', 'love', 'javascript' ]
//------------------
// note:- slice lagane par array 0 se nhi ho ke 1 se shuru hota he
// let arr = ['t','e','s','t']
// console.log(arr.slice(-2))  // minas me pichhe se shuru karta he output [ 's', 't' ]

// console.log(arr.slice(1)) // positive me aage se output [ 'e', 's', 't' ]
// console.log(arr.slice(1))
//--------------------------------
// let names = 'Adarsh,Gulshan,Babu'
// let arr =names.split(',')
// for (let name of arr)
// {
//     console.log(`send Message to ${name}`)
// }
// output :-
//  send Message to Adarsh 
 // send Message to Babu
 let names = 'Adarsh,Gulshan,Babu'
let namesArray =names.split(',')
let str =namesArray.join(",--+++--,")
console.log(str)