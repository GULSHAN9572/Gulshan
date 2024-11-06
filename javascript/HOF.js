const powerTwo = (n) => {
    return n** 2  //double *star ka matlab squire
}
function powerCube(powerTwo,n){
    return powerTwo(n)*n // single * ka matlab multiple
}
// console.log(powerCube(powerTwo,3));  //outpuT 27
function sayHello(){
    return () => {
        console.log("Hello Gulshan");
    }
}
let guessValue = sayHello()
// console.log(guessValue);
// guessValue()

const higherOrder= n=> {
    const oneFun = m=>{
        const twoFun = p=> {
            return m+n+p
        }
        return twoFun
    }
    return oneFun
}
console.log(higherOrder(2)(3)(4))

const myNums = [2,3,4,5]
const sumArray = arr =>{
    let total = 0
    arr.forEach(element => {
        total += element
        
    });
    return total
}
// console.log(sumArray(myNums));


function oneMoreHero(){
    console.log("Hello Gulshan",Math.random());
}
setInterval(oneMoreHero,1000)  //1000 = 1 secound
// setTimeout(oneMoreHero,5000)