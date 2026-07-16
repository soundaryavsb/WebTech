//! string methods

//?ways to create string

//single quotes
// let s1='hiii'

//double quotes
// let s2="hello"

//template literals 
// let s3=`${s1} and ${s2}`

//! methods of string

//! length
//it will return length of the string

let str="hello"
console.log(str);
console.log(str.length); //5

let laptop="The best laptop choice depends entirely on your specific needs, whether you prioritize battery life, high-end gaming, or an affordable budget for schoolwork"
console.log(laptop.length);


//!charAt()
//it will return the character present at specific index

let char="hii Samsung"
console.log(char.charAt(3));

//!charCodeAt()
//it will return the unicode value of the character
//A=65
//a=97

let code="characters"
console.log(code.charCodeAt(5));

//!slice()
//it is used to extract a part of string
let s1="goodMorning"
console.log(s1.slice(0,4));
console.log(s1.slice(-7));

//!substring()
//same as slice but it will not accept negative indexing

console.log(s1.substring(6,8));
console.log(s1.substring(-2));

//!toUppercase()
//will convert the string from lowercase to uppercase

console.log(s1.toUpperCase());

//!toLowercase()
//it will convert the uppercase string into lowercase

let s2="HELLO"
console.log(s2.toLowerCase());

//!trimStart()
//it will remove the space present at the starting of the string

let txt="    brands   "
console.log(txt);
console.log(txt.trimStart());

//!trimEnd()
console.log(txt.trimEnd());

let txt2="   hello hiii   "
let txt3=txt2.substring(0,9)
console.log(txt3);
console.log(txt3.trimStart());

//!trim()
//it will remove the whitespace from both side
console.log(txt2.trim());


//!includes()
//it checks wheatherthe given characters are present in the string or not
//it will return true or false

let s5="javascript"
console.log(s5.includes("script"));

//!startswith()
//it will check the substring is present at the starting or not
//returns true or false

let start="computer"
console.log(start.startsWith("c"));


//!endswith()
//it will check the substring is present at the ending of the string or not
//return true or false

console.log(start.endsWith("ter"));


//!indexOf()
//it will return the index of the character

console.log(start.indexOf("t"));
console.log(start.indexOf("o"));


//!concat()
//it used for concatination

let con="hii"
let greet="hello"
console.log(con.concat(greet));

//!repeat()
//it will repeat the string value

let rep="ha"
console.log(rep.repeat(10));


//!split()
//it will split the values and return in array

let text="how are you"
console.log(text.split());