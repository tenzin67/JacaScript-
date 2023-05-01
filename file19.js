// rest parameter 

my_function=(a,b,...c)=>{
     console.log("a is ",a);
     console.log("b is ",b);
     console.log("c is ",c);

}
my_function(1,2,3,4,4,5);         //a=1,b=2 and rest will be print by c 
  //..........................................................................

  function Addall(...number){
     let tot=0;
     for(numbs of number){
          tot=tot+numbs       // [1,2,3,4,5]
     }
     return tot;
  }
  let rest=Addall(1,2,3,4,5);
  console.log("the total answer is",rest);

  // object 
  //react 

  let person={
     fname: "tenzin",
     gender: "male",
  }

//   function getdetails(obj){
//      console.log(obj.fname);
//      console.log(obj.gender);
//   }

function getdetails(fname,gender){
     console.log(fname);
     console.log(gender);
}
  getdetails(person);

// para destructure 

function human(){
     fname: "tenzin"
     age: 23;
}

information=(fname,age)=>{
     console.log(fname);
     console.log(lname);
}
