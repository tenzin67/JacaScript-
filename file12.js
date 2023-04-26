// object inside array
// very useful in real life application 

const users =[
     {user_id:1 ,firstname:"tenzin", gender:"male"},
     {user_id:2 ,firstname:"pelmo" , gender:"female"},
     {user_id:3 ,firstname:"karma" , gender:"female"},
]

for (let user of users){
     console.log(user.firstname);

}
//...........................................................................
// nested destructure ]

const [{firstname}, ,{gender}]=users;             //{} is used to destructure the array 
console.log("after the destructure",firstname);   //user1 firstname is des and user3 gender is des 
console.log("after the destructure",gender);
