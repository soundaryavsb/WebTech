

//! Promises
//A promise is an object which represents the eventual completion(sucess) or failure of an asynchronous operation/task and its resulting value

//Each promise has three state
//1 - pending --> the task is still running
//2 - resolved/fulfilled --> the task is completed
// 3 - rejected --> The task is failed

// ?How to create a promise
// let p1=new Promise((resolve,reject))=>{
//  })

let result=new Promise((resolve,reject)=>{
    let marks=20
    if(marks>35){
        resolve("student passed")
    }
    else{
        reject("student failed")
    }
})
// then() --> execute when the promise is successful
result.then((message)=>{
    console.log(message);
}).catch((error)=>{        //catch() --> handles error
    console.log(error);
}).finally(()=>{           //finally() --> executes whether the promise succeeds or fails
    console.log("best luck next time");
})

let datapromise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("data received")
    },3000)
})
datapromise.then((msg)=>{
    console.log(msg);  
})

// !Promise chaining
// One promise can lead to another promise

Promise.resolve(10).then((n)=>{
    return n+2;
}).then(n=>n*2)
.then((res)=>{
    console.log(res);
})

// !Promise helper methods
// ? Promise.resolve()
// create a successful promise immediately

Promise.resolve("Welcome")
.then(console.log)

// ?Promise.reject()
// create a failed promise immediately

Promise.reject("login failed")
.catch(console.log)

// ?Promise.all()
//waits for all promises to complete

let html=Promise.resolve("html")
let css=Promise.resolve("css")
let js=Promise.resolve("js")

Promise.all([])
