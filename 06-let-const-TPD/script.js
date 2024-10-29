// let and const declarations are hoisted, differentaly from var 
// let and const are in temporal dead zone for the meantime

console.log(b); // outputs undefined 
// console.log(a); // reference error, Cannot access 'a' before initialization
let a = 10;
var b = 100;

// let and const are also allocated memory, other than global. 
// let and const, They are hoisted but not stored in global space. And this memory is not accessible until you put some value into that.
// till this let a is hoisted and initiallised a value, between that time  it's in TDZ

// cannot redeclare let variables, gives syntax error, in the same scope