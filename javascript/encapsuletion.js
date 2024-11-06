function Person(name,age ){
    this.name=name
    let _age =age   // _ iska matlab private
    this.greet =function(){
        // console.log(`Hello , my name is ` + this.name + ' and I am ' + this._age +' year old');
        console.log(`Hello , my name is ` + this.name + ' and I am ' + _age +' year old');

    }
    this.getAge=function(){
        return _age
    }
    this.setAge =function(age){
        if(age>0){
            _age=age
        }
        else{
            console.log('Invalid Age');
        }
    
    }

let john = new Person("john",21);
console.log(john.getAge());







}