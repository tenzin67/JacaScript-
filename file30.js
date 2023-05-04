// method: it is a function inside th onject

const person ={
     name: "tenzin",
     age: 23,
     about: function(){
          console.log(`this boy name is ${this.name} and he will make lot of money in the future and his age is ${this.age}`);
     }
}
     
console.log(person.about());   // instead of using the calling method we can call the object such as about()

