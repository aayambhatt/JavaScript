// Hoisting in JavaScript is a default behavior that moves the declaration of variables, functions, classes, or imports to the top of their scope before the code is executed. This allows the use of variables and functions before they are declared.
// call stack and global execution, how JS code works. 
// -> During the creation phase, the JavaScript engine scans the code to find variable and function declarations. These declarations are then stored in memory before any code is executed. This preloading behaviour is what’s known as hoisting.


getName(); // function runs 
console.log(x); // undefined 
console.log(y); // ReferenceError: Cannot access 'y' before initialization 
console.log(getName); // function gets printed 

var x = 7;
let y = 8; // For let and const variables: They are not initialized and are in a "temporal dead zone" (TDZ) until the code is executed where they are initialized.

function getName(){
    console.log("Hello JavaScript");
}

// here it will behave like another variable and it will allocate the memory with undefined 
var getname2 = () => {
    console.log("Hii, this is an arrow function");
}

getName(); // function runs 
console.log(x); // x gets printed 
console.log(getName); // function gets printed 
