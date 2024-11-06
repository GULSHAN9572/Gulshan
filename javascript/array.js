// let numbersArray =[]
// console.log(typeof numbersArray) //type cheking
// let numbersArray =[10,20,30,40,50]

// console.log(numbersArray)
// using constractor
// let fruits = new Array("Apples", "Orange","Bananas");
// console.log(fruits)
//---------------------
// let fruits = new Array(5);
// console.log(fruits)
//--------------------------------
// let fruits = new Array(5);
// console.log(fruits.length)
//----------------------------------
// using array literal
// let mixedArray = Array('Apples','true', 10,{name:"Gulshan"});
// console.log(mixedArray)
//-----------------------------------
//let nums =[10,20,30,40]
//console.log(nums[2]) //out put 30{ yani 0,1,2,3} is prakar lw count karta he
//nums[2]= true //yha se array ka elwments change(Replace) kar sakte he
//delete nums[1] //delete keyword items ko delet kar deta he
//console.log(nums)
//console.log(nums[0])
//----loop-------------------------
//let nums = [10,20,30,40]
//for(let i=0; i<nums.length; i++)
//{
  //  console.log(`at index ${i} value is ${nums[i]}` )
//}
//let i=0
//while(i<nums.length){
  //  console.log(`at index ${i} value is ${nums[i]}`)
  //  i++
//}
//----------------
//iteration of array
// let nums = [10,20,30,50]
// for (let i=0; i<nums.length; i++)
// {
//     console.log(`at index ${i} value is ${nums[i]}`)
// }
//tredicational loop---------------------
let nums=[10,20,30,40]
for(let num of nums)
{
        console.log(`value is ${num}`)

}