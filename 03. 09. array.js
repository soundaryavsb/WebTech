// //!Array methods

// // let arr=[10,20,30,40]
// // console.log(arr[2]);


// //!push()
// //it will add the element at the last index of the collection/array

// let a=[1,2,3,4] //[1,2,3,4,5]
// console.log(a);
// a.push(5)
// console.log(a);

// //!pop()
// //it will remove the element from thr last index ,without giving argument

// let b=[21,34,45,65,6,76]
// console.log(b);
// b.pop();
// console.log(b);
// b.pop()
// console.log(b);

// //!shift()
// //it will remove the element from thr starting index , without giving parameters

// let c=[221,34,54,6,65767]
// console.log(c);
// c.shift()
// console.log(c);
// c[3]=56
// console.log(c);

// //!unshift()
// //it will add the element at the starting index of the array

// let d=[1,4,4,5,6,7]
// console.log(d);
// d.unshift(3)
// console.log(d);

// //!length()
// //it will return thr count of elements in the array

// let arr=['dtd',"sfdg",'sdhfn',"dxfcgvhbj"]
// console.log(arr);
// console.log(arr.length);

// //!join()
// //it will create a new array by cincatenating all the elements in arrray

// console.log(arr.join("|"));
// let n=[2,3,4,,5,6,7,7]
// console.log(n.join("*"));


// //!concat()
// //it is used for concatenating two or more arrays and it will return the merged new array

// let e=[10,20]
// let f=[80,90]
// let con=e.concat(f)
// console.log(con);
// console.log(e.concat(30,40));
// console.log(e);

// //!indexOf()
// //it will return the index of the given element

// let g=["a","b","c","d","e",3]
// console.log(g.indexOf("c"));
// console.log(g.indexOf(3));


// //!sort()
// //it will arrange the collection of values

// //?with numbers
// let coll=[2,3,4,5,0,67,8,9,456,67,5678]
// console.log(coll);
// coll.sort()
// console.log(coll);

// //?with string
// let cell=["cherry","apple","banana","mango"]
// console.log(cell);
// cell.sort()
// console.log(cell);

// //!reverse()
// //it will reverse the order of the collection

// let rev=[1,2,3,4]
// rev.reverse()
// console.log(rev);

// let rev1=["a","s","d"]
// rev1.reverse()
// console.log(rev1);

// //!splice()
// //!syntax:  splice(start_index,delete count,items(elements))
// //it us used to add,remove or replace the lements in an array
// //it will modify the original array

// let nums=[100,200,300,400]
// console.log(nums);
// nums.splice(0,0,500,600) //500,600100,200,300,400
// console.log(nums);

// let fruits=["apple","mango"]
// fruits.splice(0,1,"banana")
// console.log(fruits);


// //!slice()
// //it is used to extract a part of an raay
// //it will not modify the original array
// //! syntax: array.slice(start_index,end_index)

// let s=[10,20,3,345,45,34]
// console.log(s);
// let s1=s.slice(1,6)
// console.log(s);
// console.log(s1);


//!--------------------------------HIGHER ORDER METHODS --------------------------

//!map()
//it used to transform each element of an array

let num=[2,3,4]
console.log(num);
let res=num.map(n=>n*2)
console.log(res);

let res1=num.map(n=>n-1)
console.log(res1);

let s=[10,20,30,40,50]
let res2=s.map((value,index,array)=>{
    console.log(`index ${index} and ${array[index]}`);
    return value*3
})
console.log(res2);


//!filter()
//it will select the array elements based on the condition

let n=[10,23,0,45,21,34,56]
console.log(n);
let res3=n.filter(num1=>num1>20)
console.log(res3);


//!reduce()
//it will reduce the array into simgle value
//?syntax :  array.reduce((accumalator,current)->{})

let numbers=[2,3,4,5]
console.log(numbers);

let res4=numbers.reduce((total,num)=>{
    return total+num

},20)
console.log(res4);