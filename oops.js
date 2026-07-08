// ! oops:
// OOPs is object oriented programming system
// helps us to organized the code in better way using class and object

// ?pillars of OOPs
/*
1. Class
2. Object
3. Inheritance
4. Polymorphism
5. Encapsulation
6. Abstraction
*/

// !class
// class is a blueprint or template used to create object
// class will define what properties and methods an object will have

class student{
    constructor(name,age){
        this.name=name
        this.age=age
    }
    display(){
        console.log(this.name);
        console.log(this.age);
    }
}
let s1=new student("Rahul",23)
console.log(s1);
console.log(JSON.stringify(s1));
s1.display();

let s2=new student("Soundarya",22)
console.log(s2);
console.log(JSON.stringify(s2));
s2.display();

// !Object
// Object is a real instance of class
// It contains the actual values

// !constructor
// The constructor is a special method that runs automatically when a object is create
// It is mainly used to initialize object properties

// ! this keyword
// this refers to current object

// ?====================
// ! Inheritance
// inheritance is a process where one class get the properties and methods of another class

// ! without inheritance
class car{
    start(){
        console.log("vehicle statered");
    }
}
let c1=new car();
c1.start();

// !with inheritance (no constructor)
class vehicle{
    start(){
        console.log("vehicle statered");
    }
}

class auto extends vehicle{
}
class bus extends vehicle{
}
class bike extends vehicle{
}

let bike1=new vehicle();
bike1.start();
let bus1=new vehicle();
bus1.start();

// !with constructor
class Animal{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
}

class Dog extends Animal{
    constructor(name,age,breed){
        super(name,age) //? super should be the 1st statement
        this.breed=breed;
    }
    display(){
        console.log(this.name+" is "+this.age+" years old and it is "+this.breed);
    }
}

let d1=new Dog("bruno",2,"labardor")
console.log(d1.name);
console.log(d1.age);
console.log(d1.breed);
d1.display()

// !Polymorphism
// It is process that has same name for the methods but behave differently
// 1. method overloading //? It is not possible
// 2. method overridding

class calc{
    add(a,b){
        return a+b
    }   
    add(a,b,c){
        return a+b+c
    }
}
let calc1=new calc()
console.log(calc1.add(3,3)); // 1. method overloading //? It is not possible
console.log(calc1.add(2,2,4));

//? method overridding
class AnimalProp{
    speak(){
        console.log("animal makes a sound");
    }
    sound(){
        console.log("sound");
    }
}
class dog extends AnimalProp{
    speak(){
        console.log("Dog barks");
    }
}
class cat extends AnimalProp{
    speak(){
        console.log("Cat meows");
    }
}

let a=new AnimalProp()
let d=new dog()
let c=new cat()
a.speak()
d.speak()
d.sound()
c.speak()

// !Encapsulation
// It is a process of hidding the internal data, and not giving direct access for modification

// ? Access modifier
// They are keyword which restricts the access of the data

// !public 
// Only accessed inside the class or outside the class
console.log("-----public------");
class person{
    constructor(name){
        this.name=name
    }
    greet(){
        console.log(`hello ${this.name}`);
    }
}
let p1=new person('everyone');
p1.greet();
console.log(p1.name);

// !private 
// It is accessible only within the class(#)

// My Private Example
console.log("-----private------");
class person2{
    #name
    constructor(name){
        this.#name=name
    }
    greet(){
        console.log(`hello ${this.#name}`);
    }
}
let p2=new person2('everyone');
p2.greet();
console.log(p2.name);

//Tutor Private Example
class bank{
    #balance
    constructor(balance){
        this.#balance=balance
    }
    getbalance(){
        return this.#balance
    }
    deposit(amount)
    {
        return this.#balance+=amount
    }
}
let b1=new bank(3000)
console.log(b1.getbalance());
b1.deposit(2000)
console.log(b1.getbalance());
console.log(b1.balance);

// !protected

// My Protected Example
console.log("-----Protected------");
class person3{
    constructor(name){
        this._name=name
    }
    greet(){
        console.log(`hello ${this._name}`);
    }
}
let p3=new person3('everyone');
p3.greet();
console.log(p3.name);
console.log(p3._name);

//Tutor Protected Example
class animal{
    constructor(n){
        this._n=n; //protected
    }
}
class r1 extends animal{
    display(){
        console.log(this._n); //accessible in child
    }
}
let a1=new r1("ruby")
a1.display()
console.log(a1._n);

class Account{
    #balance //private
    constructor(balance){
        this.#balance=balance;
    }
    getbalance(){
        return this.#balance
    }
    deposit(amount){
        return this.#balance+=amount;
    }
    withdraw(amount){
        return this.#balance-=amount;
    }
}
let accountObj=new Account(3000); // balance=3000
console.log(accountObj.getbalance()); //3000
console.log(accountObj.deposit(19000)); //22000
console.log(accountObj.getbalance()); //22000
console.log(accountObj.withdraw(3000)); //1900
console.log(accountObj.getbalance()); //19000
console.log(accountObj.balance); //undefined

// !Abstraction
//Hinding the implementation
class coffeeMachine{
    #boilWater(){
        console.log('boiling water');
    }
    makeCoffee(){
        this.#boilWater();
        console.log('Coffee is Ready');
    }
}

let CoffeeObj=new coffeeMachine();
CoffeeObj.makeCoffee();
// CoffeeObj.boilWater(); //cannot call private method outside the class


