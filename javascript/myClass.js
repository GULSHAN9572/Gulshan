class Person{
    constructor (name,age){
        this.name= name
        this.age= age
    }
    organization = 'GULSHAN DIGITAL ZONE' //constoctor ke aage -> let ya const nhi lga sakte 
    greet(){
        console.log(`Hello , my name is ${this.name} ,and my age is ${this.age}`);
    }
}
// const gulshan =new Person('gulshan',21)
// gulshan.great()
// console.log(gulshan.organization)
function NewPerson(name,age){
    this.name=name
    this.age=age
}
NewPerson.prototype.greet = function(){
    console.log(`Hello , my name is ${this.name} any my age is ${this.age}`);
    
}
const gulshan = new NewPerson('gulshan',21)
gulshan.greet()
class Animal{
    constructor(name){
        this.name
    }
}
class Dog extends Animal{
    constructor(name,bread){
        super(name)
        this.bread=bread
    }
}