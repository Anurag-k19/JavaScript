const PromiseOne = new Promise(function(resolve,reject){
    // Do an Async Task
    // DB Calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    },1000)
})

PromiseOne.then(function(){
    console.log("promise consumed");
    
})


new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log("Async task 2");
        resolve()
        
    }, 1000);
}).then(function(){
    console.log("Async 2 resolved");
    
})

const PromiseThree = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve({username:"anurag",course:"B.Tech"})
    }, 1000);
})

PromiseThree.then(function(user){
    console.log(user);
    
})


const PromiseFour = new Promise((resolve,reject)=>{
    setTimeout(() => {
        let error = false
        if(!error){
            resolve({username:"Anurag",password:123})
        }
        else{
            reject("ERROR: Something went wrong")
        }
    }, 1000);
})



// InCase we want to access the data inside the object or url we can't create a varible and return the value in it 
// Insted we can do chain the 'then' and the next then will take the returned value of 'then' before it and work upon it 

PromiseFour.then((user)=>{
    console.log(user)
    return user.username
    
}).then((username)=>{
    console.log(username);
    
}).catch((error)=>{
    console.log(error);

    // We can also use finally which qill always run
    
}).finally(()=>{
    console.log("Promise is either resolved or rejected");
    
})

const PromiseFive = new Promise(function(resolve,reject){
    setTimeout(() => {
        let error = true
        if(!error){
            resolve({username:"JavaScript",password:123})
        }
        else{
            reject("ERROR: JS went wrong")
        }
    }, 1000);
})

// we can also use async await instead of then, catch ,finally

// async --> async makes a function return a Promise

// await --> await makes a function wait for a Promise


async function consumePromiseFive() {
    try {
        const response = await PromiseFive
    console.log(response);
    } catch (error) {
        console.log(error);
        
    }  
}
consumePromiseFive()

// we need to write try and cath in asyncs and await to handle error and resolve gracefully





// async function GetAllUsers() {
//     try {
//         const response = await fetch('https://api.github.com/users/hiteshchoudhary')

    // const data = await response.json()   // here we needed to use 'await' again because it also takes time to convert

//     console.log(data);
//     } catch (error) {
//         console.log("E: ",error);
        
//     }
    
// }

// GetAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
    
})
.catch((error)=>{
    console.log(error);
    
})

// same thing using then, catch and finally 