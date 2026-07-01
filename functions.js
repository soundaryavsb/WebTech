//functions

function demo(){
    console.log("demo program");
}
demo()

function add(){
    let a=30
    let b=40
    console.log(a+b);
}
add()

function adddemo(a,b){
console.log(a+b);
}
adddemo(10,20);
adddemo(30,40,50);
adddemo(39);
//parameter act as variable i.e the container

function login(username="user",password="pass")
{
    console.log(`Username is ${username}`)
    console.log(`Password is ${password}`)
}
login("Soundarya",123)
login(234)

function sub(a,b){
    return a-b
    // console.log("hii")
}
sub(20,10)
let subResult=sub(20,10);
console.log(subResult)
console.log(sub(40,20));

//return statement should be the last statement in the block
//u cannot call the sunction directly so for calling the function there are two ways
//Store the function call statement inside the variable and log the variable
//directly log the function calling statement

//anonymous function
//a function which does not have any function name is called anonymous function

let a=function(){
    console.log("anonymous function");
}
a();

//! function expression
//a function which is assigned to a variable is call as function expression

//! IFFE function
//IFFE stands for immediate invoked function execution
//It is executed immediately when it is created

(function (){
    console.log("hello");
})();

function demo(){
    console.log("hii");
}
demo();

//! Arrow function
//It is a shortest way we can write a function
//It was interoduced in ES 6 version in 2015

/*
()=>{
    executable statements
    }
*/

function sub(a,b){
    return a-b
}
console.log(sub(50,10));
let s=sub(50,10)
console.log(s);

let arrow=(c,d)=>{
    return c-d
}
console.log(arrow(100,50));

add=(x,y)=>x+y
console.log(add(2,4));

let res=z=>z*z;
console.log(res(4));

let res1=(m,n)=>{
    let sum=m+n //9
    let sum1=m-n //1
    return [sum,sum1]
}
console.log(res1(5,4)); // [9,1]
console.log(res1(5,4)[0]);
console.log(res1(5,4)[1]);
res1=(m,n)=>{
    let sum=m+n //9
    let sum1=m-n //1
    return {sum,sum1}
}
console.log(res1(5,4).sum);  // 9
console.log(res1(5,4).sum1);  //1

//!Higher order function
//It is a function which accepts a function as an argument
//1
function greet(n){
    return `Hava a great day ${n}`;
}
function process(g){
    return g("All");
}
console.log(process(greet));
//2
function square(num){
    return num*num;
}
function sum(num){
    return num+num;
}
function calculate(fn){
    return fn(5)
}
console.log(calculate(square));
console.log(calculate(sum));
//3
function calculate1(a,b,fn){
    return fn(a+b)
}
console.log(calculate1(1,2,square));

//!Higerorder
//1.
function mainChef(waiter){ //higherorder
    console.log("Order is ready");
    return waiter();
}
mainChef(function (){ //call back
    console.log("briyani");
})

mainChef(()=>{
    console.log("mysore pakk");
})

//2.
function calculator(num1, num2, addtask)
{
return addtask(num1,num2)
}

let add1=(calculator(10,200,(a,b)=>{
    console.log("Addition is: ");
    return a+b;
}))

console.log(add1);

//! name function
greet();
function greet()
{
    console.log("Hello Everyone");
}
greet();

// sayhii();
let sayhii=function(){
    console.log("Say Hii");
}
sayhii();

// welcome();
const welcome=()=>{
    console.log("Welcome")
}
welcome();

//!nested function
//a function inside another function

//1st way
function gp()
{
    let gp_land=12;
    let gp_gold=30;
    console.log("nes Hi I am gp()");
    function parent(){
        let p_land=6;
        let p_gold=15;
        console.log("nes Hi I am p()");
        function children(){
            let c_land=3;
            let c_gold=7;
            console.log("nes Hi I am C()");
        }
        children();
    }
    parent();
}
gp();

//! 2nd way --> function currying
function gpa()
{
    let gp_land=12;
    let gp_gold=30;
    console.log("Hi I am gp()");
    return function parent(a,b,C){
        let p_land=6;
        let p_gold=15;
        console.log(a);
        console.log(b);
        console.log(C);
        console.log("Hi I am parent()");
        return function children(){
            let c_land=3;
            let c_gold=7;
            console.log("Hi I am Child()");
            console.log(gp_gold);
            console.log(p_land);
        }
    }
}
gpa()(10,20,30)();

//!closure:
//It is the object which will hold the parent properties which is created by the parent

//!When is these closure created
//When child is accessing the parent data

//!lexical scope
//child function is under parent scope, child is able to access the parent data because the lexical scope
