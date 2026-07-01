//key words
let a=10;
const b=10;
var c=90;

if(true){
    console.log("true")
}
else{
    console.log("false")
}

//--------identifiers---------
let name=10
let num1=20
let $num=67
let _num=78
let num10$=67
//let 2num=78 //not allowed to start with digit
//let num#=90 //only use $ and _

//----------literals------------
//----------1.Number literals-----------
let num=45;
let a1=34.34
let b1=0.56
let d=-233445
console.log(typeof d);
console.log(typeof b1);

//----------2.String literals--------
let s="asdasdasd"
let j='s'
console.log(typeof s);
console.log(typeof j);

//?------boolean-------==> true and false
let t=true
let f=false
console.log(typeof t)
console.log(typeof f)

//!template literals ==>``
let name5="Ramesh"
console.log("My name is Sara");
console.log(`My name is ${name5}`)

//keywords
//identifiers
//literals --> number, string, boolean, template

//boolean --> it represent only 2 values --> true and false

//template literals
//The value is enclosed in backticks, it is type of string
//It is also known as string interpolation
// It is used to concat the string concate the 

//array and object
//ARRAY --> array is a collection of elements in square braces
//Array literals --> The value inside the square braces
//The array indexing will start from 0
let arr=[10,20,30,"Soundarya",'true']
console.log(arr);
console.log(typeof arr);

//Object literals --> It includes property and methods inside curly braces in the form of key and value pair
let obj={
    name:"Rahul",
    Age:30,
    Employed:true
}
console.log(obj);
console.log(obj.Age);
console.log(typeof obj);

//Data Type --> it defines what type of value you are storing inside the variable
/* in js we have 2 types of datatypes
1. primitive datatype
2. non-primitive datatype
*/
//Primitive datatypes
//number
let a2=10
console.log(a2);
console.log(typeof a2);
let a3=10.20;
console.log(a3);
console.log(typeof a3);
//String
let str1="Hi"
let str2="true"
console.log(str1);
console.log(typeof str1);
console.log(str2);
console.log(typeof str2);
//boolean --> true,false
let bol1=true
let bol2=false
console.log(bol1);
console.log(typeof bol1);
console.log(bol2);
console.log(typeof bol2);
//Undefined
// A variable declared but not assigned value then it eill result in undefined
let und;
console.log(und);
console.log(typeof und);
und=10;
console.log(und);
console.log(typeof und);
//null
//It represents empty value
//The datatype of null is object
//Why --> It is a historical error
let nu1=null
console.log(nu1);
console.log(typeof nu1);
nul=55
console.log(nu1);
console.log(typeof nu1);
nul="Sold"
console.log(nu1);
console.log(typeof nu1);

//BigInt
//used for large numbers
//the maximum range of number is 2^52-1
//to convert numbers into large numbers there are 2 ways:

let n=56895678678567856785678;
console.log(typeof n) //number

//case1: by adding lowercase n at the end of the large number
let n1=44441231232312313123123123n
console.log(n1);
console.log(typeof n1); //bigInt

//case2: adding bigInt constructor explicitly
let n2=BigInt(1231232312313123123123)
console.log(n2);
console.log(typeof n2);

//Symbol
//to create unique values
let id=Symbol(1012)
let ID=1012

let id2=Symbol(1012)

console.log(id===id2); //1012 is not equal to 1012
console.log(id)
console.log(ID)

console.log(typeof id)
console.log(typeof ID)

// === It is used to compare value as well as datatype
// == It is only check the value not a datatype

//----------------------------------------------------------------
//---------1.Array--------------
//It is collection of data which is enclosed between [] braces
//There are 2 types of arrays
// 1. homogenoeous array
// 2. hetrogeneous array

let fruits=["Orange","Apple","Mango","Banana","Guava"]; //The array having similar datatype elements is homogeneous array
console.log(fruits)
console.log(typeof fruits)
console.log(fruits instanceof Object)

let emp=["Rahul",30,true,false]; //The array having different datatype elements is known as heterogeneous array
console.log(emp)
console.log(typeof emp)
console.log(emp instanceof Object)

console.log(null instanceof Object)

//--------2. Objects-----------
//The data is stored in key value pair
let empDetails={
    name:"Soundarya",
    age:28,
    Employed:true
}
console.log(empDetails)
console.log(typeof empDetails)
console.log(empDetails.Employed)
console.log(typeof empDetails.Employed)
console.log(empDetails instanceof Object)
console.log(typeof empDetails.name)
console.log(empDetails.name instanceof String)

//functions
//It is block of code which is reusable
//until and unless we call a function it will not get executed

/* Syntax:
    function function_name{
    reusable block of code
    }
    function_name()
*/
function greeting(){
    console.log("Hi Everyone, you can do whatever you like")
}
greeting()
greeting()

//Primitive datatype are immutable in nature
let person="Arya"
console.log(person)
console.log(person[0])
person[0]="S"
console.log(person)
person="Ayra"
console.log(person)

//Non-primitive datatype is mutable in nature
let arr1=[1,2,3,4,5]
console.log(arr1);
console.log(arr1[2])
arr1[2]=30
console.log(arr1);

let nu="30"
console.log(`num = ${nu}`);
//Typecasting in datatype
//converting one form of data into another form
//There are two types of typecasting --> 
// 1. Implicit typecasting
// 2. Explicit typecasting

//Implicit typecasting
let num4=10
let num2=20
let num3="30"
console.log(num4+num2); //30
console.log(num4+num3); //1030 --> number+string --> String+String ==> String

console.log(false+1); //0+1 --> 1
console.log(true+1); //1+1 --> 2

console.log(true+false+"133"); //1+0+133 --> string format

console.log("133"+true+false);
console.log("133"+false+1);

console.log(+"133"+true+false);
console.log(+"133"+false+1);

console.log(num4+ +num3);
console.log("123"+false);

//2. Explicit typecasting
//number
function add(a,b){
let num5=Number(a)
let num6=Number(b)
console.log(num5+num6)
}
add("19","27");
add(19,6);
add("27",6);

let num7=parseInt("10");
let num8=parseInt("10.2");
let num9=parseFloat("11");
let num10=parseFloat("11.1");

console.log(num7);
console.log(num8);
console.log(num9);
console.log(num10);

console.log(typeof num7);
console.log(typeof num8);
console.log(typeof num9);
console.log(typeof num10);

//String
let nu2=true
let str=String(nu2)
console.log(str)
console.log(typeof str)

//boolean
let a4=-234
let a5=Boolean(a4)
console.log(a5)
console.log(typeof a5)

//Operators
//1. Arthematic operator
let a6=10
let a7=20
let a8="50"
let a9=5
let a10="hii"

//additional
console.log(a6+a7); //30
console.log(a6+a8); //1050

//Substraction
console.log(a8-a7); //30
console.log(a6-a7); //-10

//multiplication
console.log(a6*a9); //50
console.log(a8*a9); //250

//division
console.log(a7/a6); //2

//modulus
console.log(a7%a9); //0 

//exponential
console.log(a9**2); //25

//Assignment Operators
let b2=10 //=operator is used to assign
console.log(b2); //10
b2+=5
console.log(b2); //10+5=15
b2-=2
console.log(b2); //15-2 = 13
b2*=2
console.log(b2); //13*2 = 26
b2/=2;
console.log(b2); //26/2 = 13
b2%=2;
console.log(b2); //13%2 = 1
b2**=2;
console.log(b2); //1^5 = 1*1*1*1*1 = 1








