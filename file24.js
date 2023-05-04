// find 
const animal=["hello","man","dog","human"];

// function isLength(string){              // animal string are passed here and this function will find the length
//      return string.length ===3;     
// }

const ans=animal.find((string)=>string.length ===3);
console.log(ans);

// real life example 

const users=[
     {userId: 1, username: "tenzin"},
     {userId: 2, username: "pelmo"},
     {userId: 3, username: "lhamo"},
     {userId: 4, username: "passang"},
];
const customer=users.find((user)=>user.userId===3);
console.log(customer);