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
// Syntax: object.assign(target_obj, source_obj)
let obj1={name:'Rahul', name2:'Soundarya'};
let obj2={Date:19};
let obj3={job:'management consultant'};
let merge=Object.assign(obj1,obj2,obj3);
console.log(merge);
console.log(myself);

// !Object.freeze()
// 5. object.freeze()-It will prevent the modification of object(no add/no delete,no update of the elements).
myself.city="Bangaluru";
myself.country="India";
console.log(myself);
Object.freeze(myself);
myself.city="Karur"; 
console.log(myself); // it will not give error but won’t change
myself.toCountry="China";
console.log(myself); // it will not give error but won’t change

//! Object.isFrozen()
// 6. isfrozen- It will return true when checked whether object id freezed or not.
console.log(Object.isFrozen(myself));
console.log(Object.isFrozen(merge));

// !Object.seal()
// 7. seal()- It will seal an object-> you can only update the properties; you can’t add or delete any properties from object.
let tour={
    guide:true,
    destination:"Japan"
}
console.log(tour);
Object.seal(tour);
delete tour.destination; // deleting property is denied
console.log("Delete Destination: ");
console.log(tour); 
tour.from="Madhurai "; //adding new property is denied
console.log('From added: ');
console.log(tour); 
console.log('Update destination: ');
tour.destination="China"; //updating is allowed
console.log(tour);

// ! Object.isSealed()
// 8. isSealed()- It will return true if object is sealed
console.log("object myself sealed: "+Object.isSealed(myself));
console.log("object merge sealed: "+Object.isSealed(merge));
console.log("object tour sealed: "+Object.isSealed(tour));

console.log("object myself Frozen: "+Object.isFrozen(myself));
console.log("object merge Frozen: "+Object.isFrozen(merge));
console.log("object tour Frozen: "+Object.isFrozen(tour));