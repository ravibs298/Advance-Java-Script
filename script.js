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
(()=>{
  console.log("run right away");
 })();
