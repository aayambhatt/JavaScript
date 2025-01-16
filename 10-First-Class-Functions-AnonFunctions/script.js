// A programming language is said to have First-class functions when functions in that language are treated like any other variable. For example, in such a language, a function can be passed as an argument to other functions, can be returned by another function and can be assigned as a value to a variable.

// function statement aka function declaration
function a(){
    console.log("a called");   
   }
   a();
   
   // function expression, means we can assign functions to variable 
   
   // Difference between these two is hoisting, in statement we can call a(); above function but b is treated like variable 
   
   let b = function() {
       console.log("b called");
   }
   b();
   
   // anonymous function, they are used when used as values 
   
   // named function expression 
   var c = function xyz(){
       console.log("c called");
   }
   c();
   // xyz(); // not defined error  
   
   //First class functions : ability to use functions as values and passed as arguements and returned from other functions 
   // You can assign a function to a variable.
   let greet = function() {
       return "Hello!";
   };
   
   //You can pass a function as an argument to another function.
   function callFunction(fn) {
       console.log(fn());
   }
   callFunction(greet); // Outputs: "Hello!"
   
   //You can return a function from another function.
   function createGreeter() {
       return function() {
           return "Hi!";
       };
   }
   let greeter = createGreeter();
   console.log(greeter()); // Outputs: "Hi!"
    
    