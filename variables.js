// var variable

var country="India"
console.log(country);

var country="USA"
console.log(country);

var country="New York"
console.log(country);

var name //declaration
name = "Soundarya" //initialization
var n1=20 // both dec+init
var n1 //redeclartion
n1=34 //reinitialization
var n1=5 // redec + reinit

//let
let aa //dec
aa=10 //init
// let a1=10 //let a1 //no declaration
aa=45 //reinitialization

//const
const w=10 //dec + init is mandatory
// w=234 //no reinitialization in 'const'

let a1=10
const a2=20;
console.log(a1);
console.log(a2);

function demoletconst(){
    a1=100
    console.log(a1);
    console.log(a2);
    let b1=50 //funtion scope
    const b2=60 //function scope
    console.log(b1);
    console.log(b2);
}
demoletconst()
console.log(a1)
// console.log(b1) //
// console.log(b2) //const - block scope- so can not access outside the block

{
    let c1=80 // block scope
    let c2 = 90 // block scope
    console.log(c1)
    console.log(c2)
}
// console.log(c1) //o/p: Not defined // block scope
// console.log(c2) //o/p: Not defined // block scope

// !hosting
console.log(a)
var a=90
console.log(a); //undefined
a=10
console.log(a); //10

let b1
console.log(b1);
// let b1 //Identifier 'b1' has already been declared
// let b1=10 //Identifier 'b1' has already been declared
console.log(b1);

console.log(name1);
var name1
console.log(name1);
name1="raj"
console.log(name1);
// const c //error
// console.log(c) 
// c=10 //error
// console.log(c)

const c=10
console.log(10)
