// //! var variable

// var country="india"
// console.log(country);

// var country="usa"
// console.log(country);

// country="new york"
// console.log(country);

// var name //deeclartion
// name="rhutuja"  //initialization

// var n1=20 //dec + init

// var n1 //redecalartion
// n1=34 //reinitialization

// var n1=5 //redec + reinit

// //!let 

// let a //dec
// a=10 //init

// let a1=10  

// // let a1 //no redeclaration
//  a1=45 //reinitialization


//  //!const
// const w=10 //dec + init is mandatory
// w=234 // no reinitialization

//?----------------------------------------------------------------------------
//! scopes 

//? var

var a=10  //global scope 
var b=20 //global scope
console.log(a);
console.log(b);

function varDemo(){
    a=200
    console.log(a);
    console.log(b);

    var c=30 //function scope
    console.log(c);
}
varDemo()
console.log(a);
console.log(varDemo.c);
// console.log(c);

{
    var d=34 //doesn't have block scope
    console.log(d);
}
console.log(d);


let a1=10
const a2=20
console.log(a1);
console.log(a2);

function demoletconst(){
    a1=100
    console.log(a1);
    console.log(a2);
    let b1=50  //function scope
    const b2=60 //function scope
    console.log(b1);
    console.log(b2);
}
demoletconst()
console.log(a1);
// console.log(b1);
// console.log(b2);

{
    let c1=80 //block scope
    const c2=90 //block scope
    console.log(c1);
    console.log(c2);
}
// console.log(c1);
// console.log(c2);


