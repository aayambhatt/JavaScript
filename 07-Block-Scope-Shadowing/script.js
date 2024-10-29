// a block is defined by curly braces, it also known as compound statement
// we group multiple statements in a block so that we can use it where JS expects one statement 

// block scope means what all variables and functions we can access inside the block
// let and const are block scoped 

// shadowing is when a variable in an inner scope has the same name as a variable in an outer scope
    var a = 40;
{
    var a = 10;
    let b = 20;
    const c = 30;
    console.log(a);
    console.log(b);
    console.log(c);
}
console.log(a); // outputs 10
// console.log(b); not defined 
// console.log(c); not defined 


