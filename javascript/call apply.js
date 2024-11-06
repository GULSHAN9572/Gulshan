// function printName(name)
// {
//     console.log(`Hi ${name}`)
// }
// printName.city = "Delhi";
// printName("Gulshan")
// console.log(printName.city)
//---------------------------
//They are used to control the context of this
// local calling--------------------------------------
// const user1 = {
//     name:"Adarsh",
//     greetings:function(){
//         console.log(`Hello, ${this.name}`)
//     }
// }
//  user1.greetings()

//  const user2={
//     name:"Gulshan"
// }
// //call
// user1.greetings.call(user2)


// const user3={
//     name:"Babu"
// }
// user1.greetings.call(user3)
// Global calling-----------------------------------
// function greetings(city,age){
//     console.log(`Hello, ${this.name} from ${city} of age ${age}`)
// }
// const user1 = {              //this line is object
//     name:"Adarsh",
// }
//  const user2={
//     name:"Gulshan"
// }
// const user3={
//     name:"Babu"
// }
// greetings.call(user1,'Bihar',30)
// greetings.call(user2,'Sheikhpura',40)
// greetings.call(user3,'Dariyapur',50)

// output:-
//Hello, Adarsh from Bihar of age 30
// Hello, Gulshan from Sheikhpura of age 40
// Hello, Babu from Dariyapur of age 50
//bound function-----------------------------------
const person ={
    name :"Gulshan",
sayHi: function(city,age){
    console.log(`Hello ,${this.name} from ${city} of age ${age}`)
}
}
const anotherPerson={
    name:"Babu"
}
const boundFunction = person.sayHi.bind(anotherPerson,'Delhi',40)
boundFunction()