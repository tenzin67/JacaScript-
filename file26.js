// splice 
// start  delete    insert

const array=["item1","item2","item3"];    
console.log(array.splice(1,1));              // used to deleting

array.splice(1,0,"item4 is inserted");
console.log(array);

array.splice(1,2,"inserted1","inserted2");
console.log(array);
 
