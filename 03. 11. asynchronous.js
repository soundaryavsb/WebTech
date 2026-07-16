//! Asynchronous programming:
//asynchronous programming allows javascript to start a task and continue executing other code without waiting for thr task to finish

/**
 * to achive asynchronous programming js uses
 *  1-callbacks/timer function
 *  2- promises
 *  3- async n await
 * 
 *  all the three ways so the samething but with different styles
 */

//!callbacks/timer function
//? setTimeout(callback,delay)
//? setInterval(callback,delay)

//! setTimeout()
//it rund the callback function only once after the given time delay

// console.log('start');
// setTimeout(()=>{
//      console.log("this function will execute after 2 sec");
//  console.log("this will execute with the delay function");

// },2000) //2sec=2000 ms


// //application is loading
// console.log("loading data");
// setTimeout(()=>{
//     console.log("data loaded");
// },3000)

// function first(){
//     setTimeout(()=>{
//         console.log('first function');
//     },2000)
// }

// function main(){
//     setTimeout(()=>{
//         console.log("main task/function");
//     },4000)
// }

// function third(){
//     setTimeout(()=>{
//         console.log("third function");
//     },3000)
// }
// first()
// main()
// third()


// //!setInterval()
// //it will the callabck again and again afetr every interval

// let inter=setInterval(()=>{
//     console.log("hello i will print after 2 sec");
// },2000)

// setTimeout(()=>{
//     // clearInterval(inter)
//     console.log("execution stopped");
// },10000)

// clearInterval(inter)


//?==========================================================================
//!Promises
//A promise is an object which represents the eventual completion(success) or failure of an asynchronous operation/task and its resulting value

//each promise has three state
// 1- pending --> the task is still running
// 2- resolved/fulfilled --> the task is completed
// 3- rejected --> the task is failed

//?how to create a promise
// let p1=new Promise((resolve,reject)=>{

// })


// let result=new Promise((resolve,reject)=>{
//     let marks=20
//     if(marks>=35){
//         resolve("student passed")
//     }
//     else{
//         reject("student failed")
//     }

// })
// //then()-->execute when the promise is successful
// result.then((message)=>{   
//     console.log(message);
// }).catch((error)=>{      //catch() --> handles error
//     console.log(error);
// }).finally(()=>{            //finally() --> executes whether the promise succeds or fails 
//     console.log("best luck next time");
// })



// let datapromise=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("data received")
//     },3000)

// })
// datapromise.then((msg)=>{
//     console.log(msg);
// })


// //!promise chaining
// //one promise can lead to another promise

// Promise.resolve(10)
// .then((n)=>{
//     return n+2;
// })
// .then((n)=>{
//     return n*2
// })
// .then((res)=>{
//     console.log(res);
// })

//!Promise helper methods

//? Promise.reslove()
//create a successfull promise immediately

// Promise.resolve("welcome")
// .then(console.log)

//? Promise.reject()
//create a failed promise immediately

// Promise.reject("login failed")
// .catch(console.log)


//?Promise.all()
//waits for all promises to complete

// let html= Promise.resolve("html")

// let css=Promise.resolve("css")

// let js=Promise.resolve("js")

// Promise.all([html,css,js])
// .then((res)=>{
//     console.log(res)=;
// })


// //! Promise.any()
//return the first successful promise

// let p1=Promise.reject('error')

// let p2=Promise.resolve("logged in")

// Promise.any([p1,p2])
// .then(console.log)

//!Promise.allsettled()
//wait for everyone even if some promise fails

// Promise.allSettled([p1,p2])
// .then(console.log)


// //!Promise.race()
// // returns whoever finishes first

// let p3=new Promise(resolve=>{
//     setTimeout(()=>{
//         resolve("first")
//     },1000)
// })

// let p4=new Promise(resolve=>{
//     setTimeout(()=>{
//         resolve("second")
//     },1000)
// })

// Promise.race([p4,p3])
// .then(console.log)




//?==========================================

//!async and await with fetch()

//fetch() does not return the data immediately but its returns a promise


async function getUsers(){
    let response=await fetch("https://jsonplaceholder.typicode.com/users")
    let user=await response.json()
    console.log(response);

}
getUsers();


async function demo(){
    return "hii all"
}
console.log(demo());


function greetMsg(){
    return Promise.resolve("welcome all")
}

async function demo(){
    let result=await greetMsg()
    console.log(result);
}

demo()


async function demo1(){
    console.log("1");
    await Promise.resolve();
    console.log("2");
    console.log("4");
    console.log("5");
}
demo1()
console.log("3");
console.log("6");