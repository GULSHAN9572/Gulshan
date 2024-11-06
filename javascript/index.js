// fast class citizon
let a = 10; // ye jo 10-- he use argoments kahte he 
let b = 20;  // ye jo 20-- he use argoments kahte he
let c =20;
d=a+b+c
console.log(a+b+c+d);
console.log(d); 

function add(){  //function add(a,b) me a,b parameters he
    // add is a function name----------
    //block of code
    console.log(a+b);
}
add()  //function calling
// function name sirf jha likh doge vha pura function(block of code) run kar ke output de deta he{jaise add() sirf likhne se }---
add()
function x(callback){
    console.log("hello");
    callback()

}

function y(){
    console.log("Bye");
}
 x(y)
// return value---------------
 function add1()
 {
    return a + b;
    console.log("hello"); //return ke bad javascript kuchh nhi run karta he
 }
 let sum =add1(10,20) //function calling
 console.log(sum)