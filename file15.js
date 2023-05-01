// ARROW FUNCTION

let sing = () => {                      // is is same as function sing (){ ..codes...}
     console.log("happy birthday.....");
}
sing();    // we are calling the function using same function name 


let add=() =>{                    // same as function add(){... codes..}
     console.log(2+4);
}
add();      //DRY mean don't repeat your self


// function using return

var sum=()=>{
     return 2+4;
}
console.log(sum());    // the 6 us return here in the sum 


// .........................reusable function in js..............................................

var reusable=(num1,num2,num3)=>{    // two parameter is there 
     return num1+num2+num3;
}
console.log("we are priting the sum of three number:   ",(reusable(10,20,50)));   // two argument is passed to the parameter 
                                   // note undefine + undefine =nah


// ........................to find the even number ...............................................

let is_even= input=>{    // arrow function that can write like this: let is_even = input => input % 2 === sdsdamjj0
 return input % 2 === 0;    

     }
console.log("even number: ",is_even(4));    // argument is pass to the parameter 


//.........................................................



// to return first character 

var firstchar= (character)=>{
     return character[0];          // it will give first character of 
}
console.log(firstchar("tenzin"));  



//................................finding the target array ..........................

let find_arr= (a,tar)=>{
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