// every method

const number = [1,2,4,5,6,7,8,9];

const  ans=number.every(( number)=>number % 2 === 0);   // callback function and every function will return true and false

console.log(ans);

// real life example

const product=[
     {productId:1, productName:"p1" ,productPrice:500},
     {productId:2, productName:"p2" ,productPrice:900},
     {productId:3, productName:"p3" ,productPrice:5500},
     {productId:4, productName:"p4" ,productPrice:50},
]
const result=product.find((item)=>item.productPrice < 2000);
console.log("the price of item that are under 2000",result);

//.................................................................................


// some method 

const numbers = [2,4,6,8,10];                          //even one condition is true then it will return true 

console.log(numbers.some((even)=>even % 2 === 0));


// real life example

const product2=[
     {productId:1, productName:"p1" ,productPrice:500},
     {productId:2, productName:"p2" ,productPrice:900},
     {productId:3, productName:"p3" ,productPrice:5500},
     {productId:4, productName:"p4" ,productPrice:50},
     {productId:5, productName:"p5" ,productPrice:5030}
]
let productPrice=product2.some((less)=>less.productPrice <600);
console.log("the product price less than 500:",productPrice);

//........................................................................

// fill method 
// value start end

const arr = [1,2,3,4,5,6,7,8,9];
const res=arr.fill(22,3,7);        // this will replace the value from starting to the end 
console.log(res);