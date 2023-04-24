//while loop

let i=0;
let total1=0;
while(i<=100){
     total1=total1+i;    // while will take linear time 
     i++;
}
console.log(total1);

let number=100;

let total2=(number*(number+1))/2;  // is is faster because, it is taking content time 
console.log(total2);

//.............................................

//for loop as below 

for(let i=0;i<9;i++){
     console.log(`this is the result of for loop ${i}`); // we can't print the let result outside of the loop 
                                                            // we can print the var result outside of the loop 
}
