// !Object.keys()
// object. keys- It will return all the keys (only) from the current object, and it will return in array collection.
let myself={
    name:"Soundarya",
    age:28,
    city:'Chennai'
}
console.log(myself);
console.log(Object.keys(myself));
let myselfKeys=Object.keys(myself);
console.log(myselfKeys);
console.log(myself.name);

//! Object.values()
// 2. object.values- It will return array of only values present in current object.
let myselfValues=Object.values(myself);
console.log(myselfValues);

// !Object.entries()
// 3. Object.entries- It will return all the properties (key-value pairs) in array of current object 
let myselfEntries=Object.entries(myself);
console.log(myselfEntries);

// !Object.assign()
// 4. assign()- It is used to merge or copy the objects
let obj1={name:'Rahul', name2:'Soundarya'};
let obj2={Date:19};
let obj3={job:'management consultant'};
let merge=Object.assign(obj1,obj2,obj3);
console.log(merge);
console.log(myself);


