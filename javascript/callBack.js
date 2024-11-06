function h(x,fn){
    //h-> is hof  //hof matlab high order function
    //fn -> is callBach

    console.log(x*x)
    fn(x*x)
}
// h(10,function(){
//     console.log("Done with callBack")
// }
// )
// h(10,exec)
// function exec(n){
//     console.log("squared value is ",n) //outpur :squared value is  undefined

// }
// h(10,exec)
// function exec(n){
//     console.log("squared value is ",n) //outpur :squared value is 100

// }
console.log("start");
setTimeout(function f() {
    console.log("timer done");
}, 3000);

// for(let i=0; i<1000000000; i++){}
console.log("end");