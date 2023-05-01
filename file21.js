// function returning function 

function test(){
     function hello(){
          console.log("hello function ");
     } 
     return hello;
}
let ans=test();
ans();

// ...........................

function test2(){
     return function(){
          return "hello function number2 "
     };
}
const ans2=test2();
console.log(ans2());