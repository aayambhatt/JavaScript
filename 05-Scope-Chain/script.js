function a(){
    console.log(b);
    
}
let b = 50;
a();

// scope means where you can access a specific variable or a function
//lexical environment is created whenever an execution context is created


function c(){
    let x = 20;
}
//  console.log(x); // ReferenceError: x is not defined 
 c();