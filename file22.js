// important array method 
const number = [4,2,5,8];

function myfunc(number,index){
     console.log(`index is ${index} number is ${number}`);
}
number.forEach(myfunc);  // this is used instead of for-loop

// new method 

number.forEach(function(number,index){    // it will work same as other 
     console.log(`index is ${index} number is${number}`);  
})


