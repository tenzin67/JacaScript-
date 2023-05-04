// chaining 

const user = {
     username:"tenzin",
     // address:{ houseno: '12343'}

}
console.log("the user name is:",user.username);
console.log("the user address is:", user?.address?.houseno);  //   here it will show error because undefined dont have properties 
 // ? is used to ask weather it properties exit or not: so it will give undefined 
 