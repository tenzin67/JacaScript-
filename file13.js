// function 
function sing(){
     console.log("happy birthday.....");
}
sing();    // we are calling the function using same function name 


function add(){
     console.log(2+4);
}
add();      //DRY mean don't repeat your self


// function using return

function sum(){
     return 2+4;
}
console.log(sum());    // the 6 us return here in the sum 

// reusable function in js

function reusable(num1,num2){    // two parameter is there 
     return num1+num2;
}
console.log((reusable(10,20)));   // two argument is passed to the parameter 
                                   // note undefine + undefine =nall

// to find the even number 

function is_even(input){    // this is parameter will take the argument 
     if(input % 2 == 0){
          return true;      // or you can write return input % 2 === 0;
     }else{
          return false;
          }
     }
console.log(is_even(4));    // argument is pass to the parameter 

//.........................................................

// to return first character 

function firstchar(character){
     return character[0];          // it will give first character of 
}
console.log(firstchar("tenzin"));  