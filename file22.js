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

// map method 

const map_number=[3,4,6,1,8];

// const square=function(num){
//      return num*num;
// }
const square_number= map_number.map((map_number)=>{
     return map_number*map_number;
});
console.log(square_number);


// example.................................

const users=[
     { firstName: "tenzin", age: 23},
     { firstName: "passang", age: 24}
]

let name=users.map((user)=>{          // users is name is and age is passed here 
     return user.firstName;
});
console.log(name);

//.............................................

// Filter function 

const num=[1,2,3,4,5];

const isEven=function(numbers){
     return numbers % 2 === 0;
}
const even_number=num.filter(isEven);
console.log(even_number);


//...........................................

const numbers=[1,2,3,4,5];

const sums=numbers.reduce((accumulator, currentValue)=>{  //accumulator will get the first value and current value will get next value 
     return accumulator + currentValue;
});
console.log(sums);

// accumulator      curentval      return 
//     1                 2             3
//     3                 3             6
//     6                 4             10


const user_cart=[
     { product_id:1, productName: "mobile", price:5000},
     { product_id:2, productName: "TV" , price:1200},
     { product_id:3, productName: "laptop" , price:5200}
]

const total=user_cart.reduce((total_price,current_price)=>{
     return total_price + current_price.price;                   //accessing the object 
},0)
console.log(total);
