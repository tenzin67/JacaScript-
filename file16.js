// hoisting 

// hoisting:- it allow you to used function and variable before it declaration 
hello();

function hello(){
     console.log("hoisting is done here ");
}


// fucntion inside function 

function myapp(){
     console.log("inside my app");

     const myfun=()=>{
          console.log("this is myfunction");
     }

     let adds=(no1,no2)=>{
          return no1 + no2;
     }

     myfun();
     console.log(adds(5,5));
   
}
myapp();