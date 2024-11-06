
// document.title='gulshan'
// const body = document.body;
// //add text
// // body.append('Hello' , ' ,bye everyone')
// const div   = document.createElement('div')
// div.innerText='javascript'
// body.appendChild(div)
// console.log(div)
// const div=document.querySelector('div')
// console.log(div.innerText)
// console.log(div.textContent)
const body=document.body;
//strong element
const div =document.createElement('div')
const strong = document.createElement('strong')
strong.innerText ="This is a bold text"
div.appendChild(strong);
body.append(div)