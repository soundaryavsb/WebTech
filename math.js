// !Math methods

//Math.abs --> Will convert negative number into positive number
console.log(Math.abs(-55));
console.log(Math.abs(5));

//Math.round() -> It will round of the value to the nearest integer
console.log(Math.round(4.6));
console.log(Math.round(2.2));
console.log(Math.round(5.5));

// Math.floor() --> It will round of the number to its least value
console.log(Math.round(6.2));
console.log(Math.round(5.9));

//Math.ceil() --> It will round the number to the upper integer
console.log(Math.ceil(3.4));
console.log(Math.ceil(1.0));

//Math.trunc() --> It will remove the decimal value from the integer
console.log(Math.trunc(8.8));


//Math.log() --> natural log of integer
console.log("-----Natural Log: Math.log(<Value>)--------");

console.log(Math.log(10));
console.log(Math.log(1));
console.log(Math.log(Math.E));
console.log(Math.log10(100)); //2 --> 10^2=100
console.log(Math.log2(8)); //3 --> 2^3=8

//Math.pi() --> value of pi
console.log("-----PI---------------");
console.log(Math.PI);

//Math.hypot(a,b) --> It will return the square root sum of squares
console.log("--------hypot(a,b) --> root((a*a)+(b*b))------------");
console.log(Math.hypot(2,3)); // 2*2=4, 3*3=9 root(4+9) = root(13) ==> between 3 to 4

//Math.max() --> It will return highest number from the collection
console.log("---------max()---------");
console.log(Math.max(91,45,67,121,7));

//Math.min() --> It will return minimum number from the collection
console.log("---------min()---------");
console.log(Math.min(91,45,67,2,121,7));

//Math.sqrt() --> It will return square root
console.log("---------sqrt(<value>)---------");
console.log(Math.sqrt(16));

//Math.cbrt() --> It will return cube root
console.log("---------cbrt(<value>)---------");
console.log(Math.cbrt(27));

//Math.pow(a,b) --> It will return power
console.log("---------pow(a,b)---------");
console.log(Math.pow(2,3)); //2*2*2=8
console.log(Math.pow(2,4)); //2*2*2*2=16
console.log(Math.pow(4,6)); 
