//!logical operators
//! logical AND --&&
let d1=40
let d2=80
console.log(d1<d2); //true
console.log(d2>d1); //true

console.log((d1<d2)&&(d2>d1)); //if both condition are true result will be true

//!Logical OR - ||
console.log((d1<d2)||(d2<d1)); //either anyone of the condition should be true

//!logical NOT - !
console.log(!(d1>d2));

//!Comparison operators
//? ==
let c1="100"
let c2=100
console.log(c1==c2); //"100" ==100 //true
//! in == [equal to] it will check only for value not the datatype

console.log(c1===c2);
//! in === [Strictly equal to] the value as well as the datatype is also checked

let b1=true
let b2=1
console.log(b1==b2) //true
console.log(b1===b2) //false
let b3=null
let b4=1
console.log(b3==b4) //false
console.log(b3===b4) //false

console.log(c1!=c2); //false
console.log(c1!==c2); //true

let c3=40
let c4=50

console.log(c4>c3); //true
console.log(c3<c4); //true
console.log(c1=c2); //100
console.log(c3<=c4); //true
console.log(c4>=c3); //true

//!nullish coalescing --> ??
let name;
let user=name??"guest"
console.log(name);
console.log(user);

let username="raj"
let usn=username??"raja"
console.log(username);
console.log(usn);

//pre increment
let a=10;
let pre= ++a;
console.log(pre)
console.log(a)

let post= a++
console.log(post)
console.log(a)

let a1=10
let a2=20

console.log(a1++ + ++a2); //10+21 =31
console.log(a1); //11
console.log(a2); //21

let a3=10
let a4=20

console.log(a3++ + ++a3 + ++a4 + a4++); //10 + 12 + 21 + 21 = 64
console.log(a3); //12
console.log(a4); //22

let a5=10
let b5=20
console.log(a5++ - b5++); //10-20 => -10
console.log(a5); //11
console.log(b5); //21

let a6=20
let b6=34
let c6=56
let d6=29

// 1. 
console.log(a6++ + ++c6 + b6++ - c6++); //20 + 57 + 34 - 57 = 54
console.log(a6) //21
console.log(b6) //35
console.log(c6) //58
// 2. 
console.log(c6++ - ++b6 + ++a6 + a6++ - ++c6); //58 - 36 + 22 + 22 - 60 = 102-96=6
console.log(a6) //23
console.log(b6) //36
console.log(c6) //60
// 3.
console.log(b6++ + ++b6 + a6++ + ++a6 + ++c6 + c6++); //36 + 38 + 23 + 25 + 61 + 61 = 220+24=244
console.log(a6) //25
console.log(b6) //38
console.log(c6) //62

// 4.
console.log(c6++ - ++c6); //62 - 64 = -2
console.log(c6) //64

// 5.
console.log(d6++ - c6++ + b6++ - a6++); //29 - 64 + 38 - 25 = 67-89 = -22
console.log(a6) //26
console.log(b6) //39
console.log(c6) //65
console.log(d6) //30

// 6.
console.log(++c6 - ++d6 + ++b6 + ++a6 + a6++ - c6++); //66-31+40+27+27-66 =140+20-90-7=160-97=63 
console.log(a6) //28
console.log(b6) //40
console.log(c6) //67
console.log(d6) //31

//Pre/post decrement
let n1=10
let n2=65
let n3=54

// 1.
// console.log(n1-- + --n1 + --n3 + n2--); // 10 + 8 + 53 + 65 = 120 +16 = 136
// console.log(n1); //8
// console.log(n2); //64
// console.log(n3); //53

// let n1=10
// let n2=65
// let n3=54
2.
// console.log(n2-- - --n3 - n1++); //65 - 53 - 10 = 65-63 = 2
// console.log(n1); //11
// console.log(n2); //64
// console.log(n3); //53

// let n1=10
// let n2=65
// let n3=54
// // 3.
// console.log(n3-- + --n1 + --n2 + n2--); //54 + 9 + 64 + 64 = 191
// console.log(n1); //9
// console.log(n2); //63
// console.log(n3); //53

// let n1=10
// let n2=65
// let n3=54
// // 4.
console.log(n1++ - ++n3 + --n2 - n2-- + ++n3 - --n3); //10 - 55 + 64 - 64 + 56 - 55 = -44
console.log(n1); //11
console.log(n2); //63
console.log(n3); //55
