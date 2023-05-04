// map and set 
//set is used to set the value to particular variable 

let person = new Map();
person.set('name','tenzin');
person.set('age',99);
person.set(1, 'one');
// console.log(person.get(1));
// document.write(person.get(1))

for(let key of person.keys()){
     console.log(key,typeof key);
    
}

// we can destructuring in the loop
for(let [key, value] of person){
     console.log("we are usin the destructuring",key,value);
}