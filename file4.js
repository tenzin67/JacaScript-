let no1='20';
let no2=20;
console.log(no1>no2); // this is used compare the number 

console.log(no1 === no2); // it will compare the value in the variable

//..................................................

let age1=13;
if(age1>18){
     console.log("you are able to play game ");
}else{
     console.log("sorry you are not able to play game");
}

//.................................................

let winingNumber=19;
let usernumber=+prompt("Guess a number");
console.log(usernumber);
if(usernumber==winingNumber){
console.log(("congrats you won the prize"));
} else{ 
     if(usernumber>winingNumber){
     console.log("too hight");
} else {
     console.log("to low");
} } 