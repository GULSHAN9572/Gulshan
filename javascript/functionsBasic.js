// function greet (name){
//     console.log(`Hello ${name}!`)
// }
// greet("gulshan");
// greet("prajapati");
// greet()
//-------
// function greet(name='Guest')
// {
//     console.log('Hello ${name}');
// }
// greet("gulshan");
// greet("prajapati");
// greet();
//-------------------------------
// function calculatesum(num1,num2)
// {
//     return num1 + num2;
// }
// console.log(calculatesum(10,30));
//--------------------------
// const nums = [1,2,3,4,5,6];
// function PrintArrayElements(arr){
// for(let i=0; i<arr.length; i++){
//     console.log(arr[i])
// }
// }
// PrintArrayElements(nums)
//-----------
// function greetings(name,city){
//     console.log(`Hello ${name} from city ${city}`)
// }
// greetings("Gulshan","Dariyapur")
function greetings({city,name}){
    console.log(`Hello ${name} from city ${city}`)
}
greetings({name:"Gulshan",city:"Dariyapur"})