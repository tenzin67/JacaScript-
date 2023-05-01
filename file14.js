// FUNCTION WITH EXPRESSION

 let sing =function (){                      // is is same as function sing (){ ..codes...}
     console.log("happy birthday.....");
}
sing();    // we are calling the function using same function name 


let add=function (){                    // same as function add(){... codes..}
     console.log(2+4);
}
add();      //DRY mean don't repeat your self


// function using return

var sum=function (){
     return 2+4;
}
console.log(sum());    // the 6 us return here in the sum 

// .........................reusable function in js..............................................

var reusable=function (num1,num2){    // two parameter is there 
     return num1+num2;
}
console.log((reusable(10,20)));   // two argument is passed to the parameter 
                                   // note undefine + undefine =nall

// ........................to find the even number ...............................................

let is_even= function (input){    // this is parameter will take the argument and it is function expression with parameter
     if(input % 2 == 0){
          return true;      // or you can write return input % 2 === 0;
     }else{
          return false;
          }
     }
console.log(is_even(4));    // argument is pass to the parameter 

//.........................................................

// to return first character 

var firstchar=function (character){
     return character[0];          // it will give first character of 
}
console.log(firstchar("tenzin"));  



//................................finding the target array ..........................

let find_arr=function (a,tar){
     for(let i=0; i < a.length; i++){
          if(a[i] ===tar){
               return i;
          }   
     }
     return -1;     
}
let my_arr=[1,2,9,3,7,0,5,6]
let result=find_arr(my_arr, 5);
console.log(result);