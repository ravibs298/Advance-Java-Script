// class ClassName {
//     constructor(prop1,prop2){
//         this.prop1 = prop1;
//         this.prop2 = prop2;
//   }
// }
// let obj = new ClassName("Ravi","Singh");
// console.log(obj.prop1);
// console.log(obj.prop2);
// let obj1 =new ClassName("Hello","World");
// console.log(obj1.prop1);
// console.log(obj1.prop2);

// The this keyword refers to the object it belongs to , so it is the first property of instance of the class 

// class Dog  {
//    constructor(dogName,weight,color,breed){
//        this.dogName = dogName;
//        this.weight = weight;
//        this.color = color;
//        this.breed = breed;
//    }
// }
// let p = new Dog("Javascript",10,"white","Golden Retriever");
// console.log(p.dogName);
// console.log(p);
// console.log(p.dogName, " is a ",p.breed);

// CLASSES

//There can only be a single constructor function in a class
//start the class name with the capital letter 
// class Person{
//     constructor(firstname,lastname){
//         this.firstname = firstname;
//         this.lastname = lastname;
//     }
// }
// let me = new Person("Ravi","Singh");
// console.log(me.firstname);
// console.log(me.lastname);
// console.log(me);

//Elements of a class => Methods
// When defining these methods , we dont use the function keyword 
// class Person{
//     constructor(firstname,lastname){
//         this.firstname = firstname;
//         this.lastname = lastname;
//     }
//     greet(){
//         console.log("Hello "+this.firstname+" "+this.lastname);
//     }
//     compliment(name,oject){
//         return "Thats a nice "+oject+" "+name;
//     }
// }
// let me = new Person("Ravi","Singh");
// console.log(me.firstname);
// console.log(me.lastname);
// console.log(me);
// me.greet();

//Properties 
//proprties are sometimes called fields,hold data for the class
//it is not possible to access the properties directly , but can be accessed by methods

// class person{
//     #firstname;//to make a variable private 
//     #lastname;
//     constructor(firstname,lastname){
//         this.#firstname = firstname;
//         this.#lastname = lastname;
//     }
// }
// let p = new person("Ravi","Singh");
// console.log(p.firstname);//undefined 
// console.log(p.#firstname);//error

// class person{
//     #firstname;//to make a variable private 
//     #lastname;
//     constructor(firstname,lastname){
//         if(firstname.startsWith("N")){
//             this.#firstname = firstname;
//     }
//     else{
//         this.#firstname = "M."+firstname;
//     }
//     this.#lastname = lastname;
// }
//   getfullname(){
//     return this.#firstname+" "+this.#lastname;
//   }
// }
// let p = new person("Bhanu","Singh");
// console.log(p.getfullname());

//Getters and Setters 
//private members are always accessed through methods 
//public members can be asscessed directly by objects 
//class can have both public and private members

class person{
    #firstname;//to make a variable private 
    #lastname;
    constructor(firstname,lastname){
        this.#firstname = firstname;
        this.#lastname = lastname;
    }
    get firstname(){
        return this.#firstname;
    }
    set firstname(firstName){
        this.#firstname = firstName;
    }
    get lastname(){
        return this.#lastname;
    }
    set lastname(lastName){
        this.#lastname = lastName;
    }
}
let p = new person("Ravi","Singh");
console.log(p.firstname);
console.log(p.lastname);
p.firstname = "Bhanu";
console.log(p.firstname);
p.lastname = "Singh";
console.log(p.lastname);