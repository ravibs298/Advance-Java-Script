// **************CONCURRENCY************

//Concurrency is the process of executing multiple tasks at the same time
//Asynchronous programming is the process of executing multiple tasks at the same time
//Callbacks is function which is passed as argument to another function

// function doSomething(callback){
//     callback();
// }
// function sayHi(){
//     console.log("Hello!!");
// }
// doSomething(sayHi);

// function judge(grade){
//     switch(true){
//         case grade == "A":
//         console.log("You got an amazing grade: ",grade);
//         break;
//         case grade == "B":
//         console.log("You got a good grade: ",grade);
//         break;
//         case grade == "C":
//         console.log("You got a normal grade: ",grade);
//         break;
//         default:
//         console.log("You got a bad grade: ",grade);
//         break;
//     }
// }
// function getGrade(score , callback){
//     let grade;
//     switch(true){
//         case score > 90:
//         grade = "A";
//         break;
//         case score > 80:
//         grade = "B";
//         break;
//         case score > 70:
//         grade = "C";
//         break;
//         default:
//         grade = "F";
//         break;
//     }
//     callback(grade);
// }
// getGrade(80,judge);
// getGrade(45,judge);
// getGrade(93,judge);

//Callbacks becomes become really valueable in asynchronous context.

// setInterval(encourage , 50);
//     function encourage(){
//         console.log("Hey you, yess you");
//     }

// PROMISES
//With promises, we can handle asynchronous code in a more structured way
//This function needs the two parameter and these parameters are callbacks . We have called them resolve and reject
//When resolve is called the promise is resolved and when reject is called the promise is rejected

// let promise = new Promise((function(resolve,reject){
//     let x = 10;
//     let y = 20;
//     if(x>y){
//         resolve(x);
//     }else{
//         reject("too high");
//     }
// }));
// promise.then(
//     function(result){
//         console.log("Success: "+ result);
//     },
//     function(error){
//         console.log("Error: "+ error);
//     }
// );

// const promise = new Promise((resolve,reject)=>{
//     // resolve("Success!!");
//     reject("Error!!");
// }).then(value=>{
//     console.log(value);
//     return "WE";
// })
// .then(value=>{
//     console.log(value);
//     return "can";
// })
// .then(value=>{
//     console.log(value);
//     return "chain";
// })
// .then(value=>{
//     console.log(value);
//     return "promises";
// })
// .then(value=>{
//     console.log(value);
// })
// .catch(value=>{
//     console.log(value);
// });

// ************Async and await**********

// function saySomething(x){
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve("something" + x);
//         }, 2000);
//     });
// }
// async function talk(x) {
//     const words = await saySomething(x);
//     console.log(words);
// }
// talk(2);
// talk(4);
// talk(8);

// Event loop
// js is a single-threaded language.

// Call stack and callback queue
// console.log("Hi there");
// add(4,5);
// function add(x ,y){
//     return x + y;
// }
// console.log("Hi there");
// setTimeout(() => console.log("Sorry I'm late"),1000);
// console.log(add(4,5));
// function add(x ,y){
//     return x + y;
// }

//  console.log("Hi there");
//  setTimeout(() => console.log("Sorry I'm late"),0);
//  console.log(add(4,5));
//  function add(x ,y){
//         return x + y;
//      }
