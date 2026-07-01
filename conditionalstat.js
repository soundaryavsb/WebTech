//if
//execute the block of code only is the condition is true
//if the condition is false the block of code is skipped.
let age=17
if(age>=18)
{
    console.log("You are eligible for voting")
}

let price=5000
if(price>4000)
{
    console.log("you got 25% off")
}

//if else
//if the condition is true --> if statement block runs
//if condition fails --> The else statement block runs
    let age1=50
    if(age1>=21)
    {
        console.log("You are adult")
    }
    else
    {
        console.log("You are still minor")
    }

    let user="Soundarya"
    let pass=1234
    if(user==="Soundarya" && pass===1234)
    {
        console.log("Login Successful")
    }
    else{
        console.log("Login Failed")
    }
//if else ladder
//It is used when we have multiple conditions
let num=-5
if(num>0){
console.log("Positive number")
}
else if(num<0){
console.log("negative number")
}
else{
console.log("Number is zero")
}

//Switch 
//Used when a variable /expression is compared with multiple values

let day = 8;
switch(day){
case 1:
    console.log("Monday");
    break;
case 2:
    console.log("Tuesday");
    break;
case 3:
    console.log("Wednesday");
    break;
case 4:
    console.log("Thursday");
    break;
case 5:
    console.log("Friday");
    break;
case 6:
    console.log("Saturday");
    break;
case 7:
    console.log("Sunday");
    break;
default:
    console.log("Invalid day");
    break;
}

//Looping Statement:
//For loop
for(let i=0;i<=10;i++)
{
    console.log(i);
}
for(let i=1;i<=10;i++)
{
    console.log(i);
}
for(let i=10;i>0;i--)
{
    console.log(i);
}

//While loop
//When we dont know the number of iteration we will use while loop

let i=0;
while(i<=5)
{
    console.log(i);
    i++;
}
i=10;
while(i>5)
{
    console.log(i);
    i--;
}

num=1;
let sum=0;
while(num<6)
{
    sum=sum+num;
    num++;
}
console.log(sum);

//A - outstanding
// Average
//
//F- Fail

let grade='A'
switch(grade)
{
    case 'A':
        console.log("Outstanding")
        break;
    case 'B':
        console.log("Good")
        break;
    case 'C':
        console.log("Average")
        break;
    case 'D':
        console.log("Bad")
        break;
    case 'F':
        console.log("Fail")
        break;
    default:
        console.log("Invalid Input")
        break;
}

//do while
//The execution will be done one time and then it will check for the condition
a=10
do{
console.log(a)
a--;
}while(a>=10)

//for in
//used to iterate  over the keys of the object
//It can be used over indexes of array also

let student={
    name:'Soundarya',
    age: 27,
    city: 'Chennai'

}
console.log(student.name)
for(let k in student)
{
    console.log(k)
    console.log(student[k])
}

let count=0
for(let i in student)
{
    count++;
}
console.log(count)

//task 1
let marks={
    maths:90,
    science: 87,
    english: 78,
    Tamil:98
}
sum=0
for(let i in marks)
{
sum=sum+marks[i]
}
console.log(sum)
//task 2: student object 
// print only number data type
console.log('----Task 2--------')
for(let i in student)
{
    if(typeof student[i] == 'number')
    {
        console.log(student[i])
    }
}
// 26/06/2026

// for in loop
console.log('----for in loop-----');
let fruits=["apple","banana","mango","pineapple"]

for(let i in fruits){
    console.log(i);
    console.log(fruits[i]);
}
//for of loop
console.log('-----for of loop-------');
//used to iterate over iterable object

for(let f of fruits){
    console.log(f);
}

// marks={
//     maths:90,
//     science: 87,
//     english: 78,
//     Tamil:98
// }
// for( let f of marks)
// {
//     console.log(f); //object is not iterable
// }
console.log('----Array for of: Sum-----')
let numbers=[10,20,30]
sum=0
for(let num of numbers){
    sum=sum+num
}
console.log(sum);
console.log('----String for of-----')
let name="javascript";
for(let ch of name)
{
    console.log(ch)
}
console.log('-----for of Task 1----------')
// Task 1 : Print even numbers only
num=[12,34,45,56,67,78,88]
sum=0
count=0
for(let n of num)
{
    if(n%2==0)
    {
        console.log(n)
    }
}
//Task 2: Print average number
console.log('-----for of Task 2----------')
sum=0
count=0
for(let n of num)
{
    count++;
    sum=sum+n
}
console.log(sum/count);