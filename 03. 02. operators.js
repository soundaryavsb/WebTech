//!operators

//!arthematic operator

// let a1=10
// let a2=20
// let a3="50"
// let a4=5
// let a5="hii"

// //?addition
// console.log(a1+a2); //30
// console.log(a1+a3); //1050

// //?substraction
// console.log(a3-a2);//30
// console.log(a1-a2); //-10

// //?multiplication
// console.log(a1*a4); //50
// console.log(a3*a4); //250

// //?division
// console.log(a2/a1); //2

// //?modulus
// console.log(a2%a4);

// //?exponential
// console.log(a4**2);


//! assignment operators

// let b=10  //= operatpr is used to assign the value to the variable
// console.log(b); //10

// b+=5
// console.log(b); // 10+5=15

// b-=2
// console.log(b); //13

// b*=2
// console.log(b); //26

// b/=2
// console.log(b); //13

// b%=4
// console.log(b); //1

// b**=5
// console.log(b); //1


//!logical operators

//!logical AND - &&

// let d1=40
// let d2=80

// console.log(d1<d2); //true
// console.log(d2>d1); //true

// console.log((d1<d2)&&(d2>d1)); //if both condition are true result will be true

// //!logical OR - ||

// console.log((d1<d2)||(d2<d1)); //either anyone of the condition should be true


// //!logical NOT - !
// console.log(!(d1>d2));



// //! COMPARISON OPERATORS

// //? ==

// let c1="100"
// let c2=100
// console.log(c1==c2); //"100" == 100 //true
// //! in == [equal to] it will check only for value not the datatype


// console.log(c1===c2);
// //! in === [strictly equal to] the value as well as the datatype is also checked


// console.log(c1!=c2);  //false
// console.log(c1!==c2); //true

// let c3=40
// let c4=50

// console.log(c4>c3);
// console.log(c3<c4);
// console.log(c1=c2);
// console.log(c3<=c4);
// console.log(c4>=c3);

//!nullish coalescing --> ??

let name
let user=name??"guest"
console.log(user);


let username="raj"
let usn=username??"raja"
console.log(usn);



//!pre increament

// let a=10; //11
// let pre= ++a //1+10 //11

// console.log(pre); //11
// console.log(a); // 11


// let post=a++

// console.log(pre); //
// console.log(a);


let a=10 //11
let b=20 //21

// console.log(a++ + ++b); //10+21 = 31
// console.log(a);
// console.log(b);


console.log(a++ + ++a + ++b + b++); //10+12+21+21
console.log(a); //12
console.log(b); //22

console.log(a++ - b++); //10-20


let a=20
let b=34
let c=56
let d=29

//! 1-
console.log(a++ + ++c + b++ - c++);
console.log(a);
console.log(b);
console.log(c);

//! 2-
console.log(c++ - ++b + ++a + a++ - ++c);
console.log(a);
console.log(b);
console.log(c);

//! 3-
console.log(b++ + ++b + a++ + ++a + ++c + c++);
console.log(a);
console.log(b);
console.log(c);

//!4-
console.log(c++ - ++c);
console.log(c);

//!5-
console.log(d++ - c++ + b++ -a++);
console.log(a);
console.log(b);
console.log(c);
console.log(d);

//! 6-
console.log(++c - ++d + ++b + ++a + a++ - c++);
console.log(a);
console.log(b);
console.log(c);
console.log(d);

