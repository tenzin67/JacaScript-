// object 
const person={name:"tenzin",  // how to create object and object dont have index
age:22,                                 
hobbies:["drawing","football","reading"]}     
// console.log(person);
// console.log(person.name);    //we can call the it using . operation 
// console.log(person.hobbies);

for(let key in person){
     console.log(`${key} : ${person[key]}`);  // this will print the name: tenizin age:22 hobbies:"----"
}

//.................................................................
 // computed properties

 const key1="keyword1"
 const key2="keyword2"
 const val1="myval1"
 const val2="myval2"


 const obj={
     [key1] : val1,
     [key2] : val2
 }
 console.log("this is key and object",obj);