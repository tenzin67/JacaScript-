// lexical scope:- a variable defined outside a function can be accessible inside another function defined after the variable declaration.
                    // variable inside the function is not accessible to out of the function 

function myApp(){
     const val1="value1";

     let myfunction=()=>{
          const val1="values 88";                 // variable inside of local scope has fist priority  then outer function 
          console.log("my value is ",val1);
     }

     myfunction();
     console.log(val1);
}
myApp();