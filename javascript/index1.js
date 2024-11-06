// function add(a,b){
//     return a+ b;
// }
// let result = add(10,20);
// console.log(result)
//-----------arrow function ya lemda functon------------------
// let add =(a,b)=>{
//     return a+b;
// }
// let result = add(10,20);
// console.log(result)
//---------ya----------
// let add =(a,b)=> a+b;

// let result = add(10,20);
// console.log(result)
//----------------------------
// let printnum =a=> console.log(a);
// printnum(10)
//--------------------------
const person = {
    name :'Gulshan',
    greet:function(){
        console.log(`Hello, my is ${this.name}`) 

    },
    greeTwo : () => {
        console.log(`Hello, my name is ${person.name}`) // ` ye rupees vala symbols he ,and isme person.name hota he.
    }
}
person.greet();
person.greeTwo();
