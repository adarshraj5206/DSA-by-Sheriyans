// pre increment and post increment
let x = 5;
console.log("x=" + x++); // print x before incrementing
// Output: x=5
console.log("x=" + ++x);// print x after incrementing
// Output: x=7

let i = 11;
i = i++ +  ++i;
console.log(i); // Output: 24


let a=11, b=22, c;
c = a + b + a++ + b++ + ++a + ++b;
console.log("a=" +a);
console.log("b=" +b);
console.log("c=" +c); // Output: a=14, b=25, c=33
 
