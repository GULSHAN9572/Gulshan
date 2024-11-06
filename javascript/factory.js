function Person(name,age){
    this.name = name;
    this.age = age;
    this.greet =function(){
        console.log(`Hello , my name is ` + this.name + ' and I am ' + this.age +' year old');
    }
}
let john = Person("john",22)
let gulshan = new Person("gulshan",23)
gulshan.greet()

//new keyword kya karta he----> new - {} , {}=> prototype, this bind , return{}


//factory function
function createPerson(name,age){
    return{
        name:name,
        age:age,
        greet:function(){
            console.log(`Hello , my name is ` + this.name + ' and I am ' + this.age +' year old');


        }
    }
}
let jane =createPerson("jane",21)
jane.greet()