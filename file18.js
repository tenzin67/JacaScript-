// block scope and function scope 

// let and const are block scope 
// var is function scope 

// {} is the block 

{
     let myname="tenzin"
     console.log(myname);
}
// console.log(myname);          // reference error:- means we are not able to access the my name as it is block scope 



//............................................................

// function scope 


{
     var firstname="tenzinpalgyal"
}
console.log(firstname);                 // we are able to access the firstname as it is function scope

// real-life example

if(true){
     // let yourname="tenzinpg"
     var yourname="tenzinpg"
   
}

// console.log("we are using let",yourname);             // we are not able to get the your name as is block scope 

console.log("we using var",yourname);                      // we are able to access the your name as we are using the var 

