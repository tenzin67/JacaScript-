//call back function : one function pass argument to another function   



function myfunction(name){
     console.log(`you name is ${name}`);
     console.log("i am outerfunction");
}

myfunction2=(callback)=>{   
     // sql query will be used here 
     console.log("main fucntion is here and names are below  ");  // parameter is received here 
     callback("tenzinpalgyal");               // calling itself 
}

myfunction2(myfunction);  // it is calling the myfunction 