// Maps are used to store key value pairs, where key can be of ant data type
//  const fruits = new Map([
//         ["apples",500],
//         ["bananas",300],
//         ["oranges",400]
//     ]);
//      fruits.set("apples",100);
//      console.log(fruits);
//      const fruits = new Map();
// fruits.set("Apple",500);
// fruits.set("Banana",300);
// fruits.set("Orange",400);
// console.log(fruits);
// fruits.set("Apple",1000);
// console.log(fruits);

// //The get() method 
// console.log(fruits.get("Apple"));
// console.log(fruits.size);
// console.log(fruits.delete("Apple"));
// fruits.clear();
// console.log(fruits);
// console.log(fruits.has("Apple"));

//Difference b/w Object & map 
//Object is a collection of key value pairs & Map is a collection of key value pairs 
//Object is used to store data in key value pairs & Map is used to store data in key value pairs
//object do not have  the size property and Maps has size property 
//Objects have default kkeys and Maps do not have default keys 

// let text = "";
// fruits.forEach((value,key)=>{
//     text += key+" "+value+" ";
// });
// console.log(text);
// console.log(typeof(text));
// let text = "";
// for(const x of fruits.entries()){
//     text += x;
// }
// console.log(text);
// console.log(typeof(text));
// for(const x of fruits.keys()){
//     text += x;
// }
// console.log(text);
// console.log(typeof(text));
// for(const x of fruits.values()){
//     text += x;
// }
// console.log(text);
// console.log(typeof(text));
// Sum of all values 
// let sum = 0;
// for(const x of fruits.values()){
//     sum += x;
// }
// console.log(sum);
// console.log(typeof(sum));

// // Objects as Keys

// const apples = {name:'Apples'};
// const bananas = {name:'Bananas'};
// const oranges = {name:'Oranges'};

// const fruits = new Map();

// fruits.set(apples,500);
// fruits.set(bananas,200);
// fruits.set(oranges,100);

// console.log(fruits);

// console.log(fruits.get("apples"));
// console.log(fruits.get(apples));

// Destructuring 

// const person = {
//     firstName: "Ravi",
//     lastName: "Singh",
//     age: 20
// };
// Order of the object does not matter
// let {firstName, lastName} = person;
// let {lastName, firstName} = person;
// console.log(firstName);
// console.log(lastName);
// Destucting does not change the original object

// let {firstName, lastName, country="India"} = person;
// console.log(firstName);
// console.log(lastName);
// console.log(country);

// allias creation

// let {lastName: name} = person;
// console.log(name);

// let[a1,a2,a3,a4,a5]=name;
// console.log(a1,a2,a3,a4,a5);

// Array destructuring 

// let arr = ["apple", "banana", "orange"];
// let [fruit1,,fruit2] = arr;
// console.log(fruit1);
// console.log(fruit2);
// console.log(fruit3);
// let{[0]:fruit1 , [1]:fruit2} = fruits;
// console.log(fruit1);
// console.log(fruit2);

// Rest Property

// const numbers = [10,20,30,40,50,60,70];
//destructuring 
// const[a,b, ...rest] = numbers ;
// console.log(a);
// console.log(b);
// console.log(rest);

// destructring
// let firstName = "Ravi";
// let lastName = "Singh";
// [firstName, lastName] = [lastName, firstName];
// console.log(firstName);
// console.log(lastName);
//Exponentiation****************
// let x = 2;
// let z = x**2;
// let n=Math.pow(x,3);
// console.log(z);
// console.log(n);

// Array Include

// const fruits = ["Bananas","Oranges","Apples","Mangoes"];
// console.log(fruits.includes("Apples"));//true
// console.log(fruits.includes("Bananas",3));//false

// Trailing Comma
// const arr = [
//     "1",
//     "2",
//     "3",
// ]
// console.log(arr);
// console.log(arr.length);

// const person = {
//     firstName:"Ravi",
//     lastName:"Singh",   
//     age : 20,
// }

const person ={
    firstName:"Ravi",
    ,
    lastName:"Singh",   
    age : 20,
// }It will give syntax error unlike array 
