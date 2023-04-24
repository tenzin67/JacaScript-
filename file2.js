//string method 
let student="         tenzin palgyal";
console.log(student.length);
new_string=student.trim(); // this is used to cut the spaces 
console.log(new_string.length); 


//..............................................

// touppercase is use to make string into Uppper-case

let name1="tenzin pelmo";
console.log(name1);
name1=name1.toUpperCase();
console.log(name1);

// toLower-case is used to make string into lowecase

let name2="TENZIN";
console.log(name2);
name2=name2.toLocaleLowerCase();
console.log(name2);

//................................................
// slice is used to get the exact string

let name3="tenzin pelmo";
console.log(name3);
name3=name3.slice(3,8); // will show the string exact where you have put the range 
console.log(name3);
