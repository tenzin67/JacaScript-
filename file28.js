// cloning 
const obj={
     key1:"value1",
     key2:"value2"
}
const obj2 = {...obj};                        // if we dont use spread operator then it will point to th same memory location 
                                                    // we using spread operator to clone obj to obj2 

 const obj3 = Object.assign({},obj);              // both of them works the same         
obj.key3 = "value3";
console.log(obj);
console.log("copied to object2",obj2);
console.log("copied to object3",obj3);