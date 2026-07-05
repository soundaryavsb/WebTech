// ! String methods
// ?ways to create string

//single quotes
// let s1='hiii'

//double quotes
// let s2="hello"

//template literals
// let s3='${s1} and ${s2}'

//!methods of string

// ! length
// It will return length of the string

let str="hello"
console.log(str);
console.log(str.length);

let laptop="A laptop is a portable personal computer. Laptops typically have a clamshell form factor with a flat-panel screen on the inside of the upper lid and an alphanumeric keyboard and pointing device on the inside of the lower lid"
console.log(laptop.length);

// !charAt()
//It will return the character present at specific index
console.log("------charAt()-------");
let char="hii sumsang"
console.log(char.charAt(0));
console.log(char.charAt(3));
console.log(char.charAt(-1)); //Not possible

// !charCodeAt()
// It will return the unicode value of the character
// A=65, a=97
console.log("------charCodeAt()-------");
let code="characters"
console.log(code.charCodeAt(4));
console.log(code.charCodeAt(-1));

// !Slice()
// It is used to extract a part of String
console.log("------slice()-------");
let s1="goodMorning"
console.log(s1.slice(0,4));
console.log(s1.slice(-7));

// !substring()
// same as slice but it will not accept negative indexing
console.log("------substring()-------");
console.log(s1.substring(6,8));
console.log(s1.substring(-2));

// !toUppercase()
//will convert the string from lowercase to uppercase
console.log(s1.toUpperCase());

// !toLowerCase()
//It will convert the uppercase string into lowercase

let s2="Hello"
console.log(s2.toLocaleLowerCase(s2));

// !trimStart()
// It will remove the space present at the starting of the string

let txt="     brands      "
console.log(txt);
console.log(txt.trimStart());

// !trimEnd()
console.log(txt.trimEnd());

let txt2="    hello hii    "
let txt3=txt2.substring(0,9)
console.log(txt3);
console.log(txt3.trimStart());

// !trim()
// It will remove the whitespace from both side
console.log(txt2.trim());

// !includes()
// It checks whether the given characters are present in the string or not
// It will return true or false
let s5="javaScript"
console.log(s5.includes("Script"));

// !startswith()
// It will check the substring is present at the starting or not
// returns true or false
console.log("---------startWith()--------");

let start="computer"
console.log(start.startsWith("c"));
console.log(start.startsWith("com"));
console.log(start.startsWith("ter"));

// !endsWith()
// It will check the substring is present at the ending of the string or not
// Return true or false
console.log("---------endsWith()-----------");

console.log(start.endsWith("ter"));
console.log(start.endsWith("com"));

// !indexOf()
// It will return the index of the character
start="computer";
console.log(`Letter t index number `+start.indexOf("t"));
console.log(`Letter o index number `+start.indexOf("o"));

// !concat()
// It used for concatination

let con="hii"
let greet="hello"
console.log('Concatination: concat(): '+con.concat(' '+greet));

// !repeat()
// It will repeat the string value

let rep="ha"
console.log(rep.repeat(10));

// !split()
// It will split the values and return in array

let text="how are you";
console.log(text.split(" "));
let Birth="19/06/1970";
console.log(Birth.split("/"));



