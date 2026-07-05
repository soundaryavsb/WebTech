// ! Array Methods
let arr=[10,20,30,40];
console.log(arr);

//!push()
//It will add the element at the last index of the collection/array
let a=[1,2,3,4]
console.log(a);
a.push(5);
console.log(a);

//!pop()
//It will remove the element from the last index without giving argument
let b=[21,32,34,45,56,734]
console.log(b);
b.pop();
console.log(b);


//!Shift()
//It will remove the element from the strating index without giving paramenters
console.log("-----Shift()------");
let c=[21,32,34,45,56,734]
console.log(c);
c.shift();
console.log(c);

//!unshift()
//It will add the element at the starting index of the array
console.log("-----unshift()------");
let d=[21,32,34,45,56,734]
console.log(d);
d.unshift(3);
console.log(d);
// console.log("",d,"",d.unshift(27));

//!length
//It will return the count of the element in the array
console.log("-----length------");
let fruitarr=['wer','sou','dsf','bdf','mango']
console.log(fruitarr);
console.log(fruitarr.length);


//!join()
//It will create a new array by concatenateing all the elements in an array
console.log("-----join()------");
console.log(fruitarr.join("|"));
let n=[21,32,34,45,56,734];
console.log(fruitarr.join("*"));

//!concat()
//It is used for concatenating two or more array and it will return the merged new array
console.log("-----concat()------");
let e=[10,20];
let f=[30,40];
let con=e.concat(f);
console.log(con);
console.log(e.concat(f));
console.log(e);

//! indexof()
//It will return the index of the given element
let g=['a','b','c','d','e',3]
console.log(g.indexOf("c"));
console.log(g.indexOf(3));

//!sort()
//It will arrange the collection of values
//?with numbers
let coll=[100,2,3,4,5,0,23,34,56,92,62];
console.log(coll);
coll.sort();
console.log(coll);

//?with String
let cell=["cherry","apple","orange","banana","guava"];
console.log(cell);
cell.sort();
console.log(cell);

//!reverse()
//It will reverse the order of the collection

let rev=[1,2,5,3,4];
rev.reverse();
console.log(rev);

let rev1=["a","s","f","k"]
rev1.reverse();
console.log(rev1);

//!Splice()
//!Syntax: Splice(start_index,delete count,items(elements))
//It is used to add, remove or replace the elements in an array
//It will modify the original array

let nums=[100,200,300,400]
console.log(nums);
nums.splice(0,0,500,600);
console.log(nums);

let fruits=["apple","mango"];
fruits.splice(0,1,"banana");
console.log(fruits);

//!Slice()
//It is used to extract a part of an array
//It will not modify the original array
//!Syntax: array.slice(start_index,end_index)
//Note: End_index doesnt print. It consider before end_index
let s=[10,20,30,55,34]
console.log(s)
let s1=s.slice(1,6);
console.log(s);
console.log(s1);

//HIGH ORDER METHODS-----------------
// !map()
//It used to transform each element of an array
console.log("----High order methods----");

let num=[2,3,4]
console.log(num);
let res=num.map(n=>n*2);
console.log(res);

let res1=num.map(n=>n**2);
console.log(res1);

let res2=num.map(n=>n-1);
console.log(res2);

let s2=[10,20,30,40,50]
let res3=s2.map((value,index,array)=>{
    console.log(`index ${index} and ${array[index]}`);
    return value*3;
})
console.log(res3);

// !filter()
//It will select the array elements based on the condition
console.log("------filter()-------");
let n1=[10,23,0,45,21,34,56]
console.log(n1);
let res4=n1.filter(num1=>num1>20)
console.log(res4);

// !reduce()
// It will reduce the array into single value
console.log("-----reduce-------");
let numbers=[2,3,4,5]
console.log(numbers);

let res5=numbers.reduce((total,num)=>{
    return total+num
})
console.log(res5);

let res6=numbers.reduce((total,num)=>{
    return total+num
},20)
console.log(res6);






