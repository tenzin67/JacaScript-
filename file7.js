let num1=8;
let num2=num1;
console.log("value of num1 is",num1);
console.log("value of num2 is",num2);
num1++;
console.log("value after num1++");
console.log("after the value of num1",num1);
console.log("after the value of num2",num2); // the number remain same and it is called primitive data


//................................................

let array1=["item1","item2","item3"];
let array2=array1;
console.log(array1);
console.log(array2);
array1.push("item4");
console.log("after the added the items",array1);
console.log("after the added the items",array2);  // it is reflecting the changes and it is called primitive 
