// faulty calculater

let random= Math.random()
let a = prompt("entre first number")
let b = prompt("enter second number")
let c = prompt("entre operation")

let obj ={
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**",
}

if (random> 0.1){
    alert(`the result is ${eval(`${a} ${c} ${b}`)}`)
}

else{
    c= obj[c]
    alert(`the result is ${eval(`${a} ${c} ${b}`)}`)
}