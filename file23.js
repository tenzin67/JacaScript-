// sorting 
const numbers=[500,2,4,5];
// numbers.sort((a,b)=>{
//      return a-b;
// });

numbers.sort((a,b)=>a-b);      // same as above code 
console.log(numbers);

//example 

const product=[
     {productId:1, productName:"p1" ,productPrice:500},
     {productId:2, productName:"p2" ,productPrice:900},
     {productId:3, productName:"p3" ,productPrice:5500},
     {productId:4, productName:"p4" ,productPrice:50},
     {productId:5, productName:"p5" ,productPrice:5030}
]
// product.sort((a,b)=>a.productPrice-b.productPrice);

const lowHigh=product.slice(0).sort((a,b)=>a.productPrice-b.productPrice);    // this is used to show the low to hight 
                                                                              // if we b-a then we will get hight to low 
console.log(lowHigh);

