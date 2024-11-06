// let x = function()
// {
//     console.log("Hi")
// }
// x();
//------------------------------------
(function exec(){
    console.log("Named")
})();
(function (x){
    console.log(x*x);
})(5);