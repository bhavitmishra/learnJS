// const promiseOne = new Promise(function(resolve , reject){
//     //Do an async tasks
//     // DB calls , Cryptography , network calls
//     setTimeout(function() {
//         console.log("Async tasj is compelete");
//         resolve();
//     } , 1000)
// });


// promiseOne.then(function(){
//     console.log("promise consumed");
    
// })


// new Promise(function(resolve , reject){
//     setTimeout(() => {
//         console.log("async task 2");
//         resolve();
        
//     }, 1000);
// }).then(function(){
//     console.log("async 2 resolved");
// })


// const promiseThree = new Promise(function(resolve , reject){
//     setTimeout(() => {
//     resolve({username:"bhavit" , email:"bhavitmishra@gmail.com"})    
//     }, 1000);
// })

// promiseThree.then(function(user){
//     console.log(user);
    
// })


// const promiseFour = new Promise(function(resolve , reject){
//     setTimeout(()=>{
//         let error = true;
//         if(!error){
//             resolve({username:"Bhavit" , password:"Elza"})
//         }
//         else{
//             reject('Something is OFF about this thing')
//         }
//     }, 2000)
// })

// promiseFour.then((user)=>{
//     return user.username
// }).then((username)=>{
//     console.log(username);
    
// }).catch(function(error){
//     console.log(error);
    
// }).finally(()=>{
//     console.log("kuch to hogya hai finally");
    
// })

// const promiseFive = new Promise((resolve , reject)=>{
//     setTimeout(()=>{
//         let error = true;
//         if(!error){
//             resolve({username:"tera baap" , id:"chup bhosdike"})
//         }
//         else{
//             reject('Errrrr-r');
//         }
//     },1000)
// })

// async function consumePromiseFive(){
//     try {
//         const response = await promiseFive
//     console.log(response);
//     } catch (error) {
//         console.log(error);
        
//     }
    
// }

// consumePromiseFive();

async function getAllUsers() {
        const resp = await fetch('https://jsonplaceholder.typicode.com/users') // get request which is async
        // const data = await resp.json();
        console.log(resp);
}

getAllUsers();