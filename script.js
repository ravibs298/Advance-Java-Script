//for(var i =0;i<document.querySelectorAll(".drum").length;i++){
//document.querySelectorAll(".drum")[i].addEventListener("click",function() {
//    alert("I got clicked");
//});
// //}
// function sayHello(){
//     let you = prompt("What is your name?");
//     console.log("Hello",+you + "!");
// }
// // sayHello();
// let varContainingFunction = function(){
//    let varInFunction="I'm in a function";
//    console.log("hi there!",varInFunction);
//  };
//  varContainingFunction();
  //function addNumbers(){
    //var a=prompt("enter the 1st no");
    //var b=prompt("Enter the 2nd no");
    //var c= a+b;
    //console.log(c);  
  // //};
  // function tester(para1,para2){
  //   return para1+" "+para2;
  // }
  // const arg1="argument 1";
  // const arg2="argument 2";
  // // console.log(tester(arg1,arg2));
  // function addTwoNumber(x,y){
  //   console.log(x+y);
  // }
  // addTwoNumber(5,90);
  // function addTwoNumber(x,y){
  //   let st=parseInt(prompt("Enter the 1st no:"));
  //   let st1=parseInt(prompt("Enter the 2nd no:"));
  //   addTwoNumber(st,st1)
  //   }
  // function addTwoNumber(x,y=3){
  //   console.log(x+y);
  // }
  // addTwoNumber(2,8);
  // function addTwoNumber(x,y=3){
  //   console.log(x+y);
  // }
  // addTwoNumber(0,5,2,7);

// //Arrow Functions are great for sending function arrow as parameters and using shorter notation

// function doingStuff(x){
//   console.log(x);
// // }

// [arrow function]

// let doingArrowStuff=x=>console.log(x);
// // doingArrowStuff("Great!");
// let addTwoNumber=(x,y)=>console.log(x+y);
// // addTwoNumber(5,3);
// const arr =["squirrel","alpaca","buddy"];
// // arr.forEach(e => console.log(e));

// [spread function]

// let spread =["so","much","fun"];
// let message=["javaScript","is",...spread,"and","very","powerful"];
// message.forEach(e=>console.log(e));
// function addTwoNumber(x,y){
//     console.log(x+y);
//   }
//   let arr=[5,9];
//   addTwoNumber(...arr);

//

// function addFourNumber(x,y,z,a){
//   console.log(x+y+z+a);
// }
// let arr=[5,9];
// let arr1=[6,7];
// addFourNumber(...arr,...arr1);

//Rest parameter

// function someFunction(para1,...para2){
//   console.log(para1,para2);
// }
// someFunction("hi","there!","How are you?")

// let resultArr=[];
// for(let i=0;i<10;i++){nod
//   let result= addTwoNumber(i,2*i);
//   resultArr.push(result);
// }
// console.log(resultArr);

// Variable  scope in function
// function testAvailability(x){
//   console.log("Available here:",x);
// }
// testAvailability("Hi!!");
// console.log("NOt available here:",x);

// function testAvailability(){
//   let y="I'll return";
//   console.log("Available here:",y);
//   return y;
// }
// let z= testAvailability("Hi!!");
// console.log("outside the function",z);
// console.log("not avaiable here:",y);

// function doingStuff(){
//   if(true){
//     var x="local";
//   }
//   console.log(x);
// }
// doingStuff();

// function doingStuff(){
//   if(true){
//     console.log(x);
//      var x="local";
//      console.log(x);
//   }
// }
// doingStuff();

// [const scope]

// doingStuff();

// function doingStuff(){
//   if(true){
//      const x="local";
// }

// console.log(x);
// }
// doingStuff();

// [global variable] 

// let globalVar ="Accessiable everywhere";
// console.log("Outside function :",globalVar);
// function creatingNewScope(x){
//   console.log("Access to global vars insides function ",globalVar);
// }
// creatingNewScope("some parameter");
// console.log("still avaialable :",globalVar);
 
//

// let x="global";
// function doingStuff(){
//   let x="Local";
//   console.log(x);
// }
// doingStuff();
// console.log(x);

//[confuse]

// function confuseReader(){
//   x="Guess my scope..";
//   console.log("inside the function :",x);
// }
// confuseReader();
// console.log("Outside of function:",x);

// (Invole a function expression so that it gets invoked immeddiately it is anonymous it  does not have a function call )

// (function(){
//   console.log("IIFE!");
// })();
 
//
// (()=>{
//   console.log("run right away");
//  })();

//  [invole a function expression so that it gets invoked immeddiately it is anonymous it  doesn't have a function call ]

// (function(){
//   console.log("IIFE!");
// })();
 
// 
//  (()=>{
//   console.log("run right away");
//  })();

// [Recursive function]

// function getRecursive(nr){
//   console.log(nr);
//   if(nr>0)
//   getRecursive(--nr);
// }
// getRecursive(3);

// function longRecursive(nr){
//   console.log("Started function:",nr);
//   if(nr>0)
//   longRecursive(nr-1);
// else{
// console.log("done with recursion");
// }
// console.log("Ended function:",nr);
// }

// longRecursive(4);

// [invole a function expression so that it gets invoked immeddiately it is anonymous it  doesn't have a function call ]

// (function(){
//   console.log("IIFE!");
// })();
 
// 
//  (()=>{
//   console.log("run right away");
//  })();

// [Recursive function]

// function getRecursive(nr){
//   console.log(nr);
//   if(nr>0)
//   getRecursive(--nr);
// }
// getRecursive(3);

// [invole a function expression so that it gets invoked immeddiately it is anonymous it  doesn't have a function call ]

// (function(){
//   console.log("IIFE!");
// })();
 
// 
//  (()=>{
//   console.log("run right away");
//  })();

// [Recursive function]

// function getRecursive(nr){
//   console.log(nr);
//   if(nr>0)
//   getRecursive(--nr);
// }
// getRecursive(3);

// , the performance of recursion is slightly worse than the performance of regular iteration using a loop. So if this causes a bottleneck situation that would really slow down your application, then you might want to consider another approach.

// NESTED FUNCTION

// function doOuterFunctionStuff(nr) {
//   console.log("Outer function");
//    doInnerFunctionStuff(nr);
//   function doInnerFunctionStuff(x) {
//   console.log(x + 7);
//   console.log("I can access outer variables:", nr);
// }
// }
// doOuterFunctionStuff(2);

// function doOuterFunctionStuff(nr) {
//   doInnerFunctionStuff(nr);
//   function doInnerFunctionStuff(x) {
//     let z = 10;
//   }
//   console.log("Not accessible:", z);
//  }
//  doOuterFunctionStuff(2);

// ANONYNMOUS FUNCTIONS

// function doingStuffAnonymously() {
//   console.log("Not so secret though.");
//   }

//  FUNCTION CALLBACKS

// function doFlexibleStuff(executeStuff) {
//   executeStuff();
//  console.log("Inside doFlexibleStuffFunction.");
//  }
//  doFlexibleStuff(doingStuffAnonymously);

// let youGotThis = function () {
//   console.log("You're doing really well, keep coding!");
//   };
//   setTimeout(youGotThis, 1000);
// setInterval(youGotThis, 1000);

// QUIZ

// Q1

// let val = 10;
// function tester(val){
//    val += 10;
//    if(val < 100){
//        return tester(val);
//    }
//    return val;
// }
// let y=tester(val);
// console.log(y);

// Q2

// let testFunction = function(){
//   console.log("Hello");
// }();

// Q3

// (function () {
//   console.log("Welcome");
// })();
// (function () {
//   let firstName = "Laurence";
// })();
// let result = (function () {
//   let firstName = "Laurence";
//   return firstName;
// })();
// console.log(result);
// (function (firstName) {
//   console.log("My Name is " + firstName);
// })("Laurence");

// Q4

// let test2 = (num) => num + 5;
// console.log(test2(14));

// Q5

// var addFive1 = function addFive1(num) {
//   return num + 2;
//   };
//   let addFive2 = (num) => num + 2;
//   console.log(addFive1(14));