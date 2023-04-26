// for of loop

let name=["tenzin","pelmo","karma","zomba"];
for(let names of name){
     console.log("for of loop-",names);  // this same as for loop 
}
;
//...............................................

// for in loop 

let stud=["tenzin","pelmo","karma","zomba"];
for(let students in stud){
     console.log("for in loop-",stud[students]);  // this same as for loop 
}

//..............................................

// array destruction 
const arr5=["value1","value2","vlaue3","values"];
// let myval1=arr5[0];
// let myval2=arr5[1];
// console.log(myval1);
// console.log(myval2);
                                   // here we are able to assign the values

let [myval1,myval2]=arr5;  
let newarr=arr5.slice(2);    // values in the in parenthesis are two variable 
console.log(myval1);
console.log(myval2);
console.log(newarr);
