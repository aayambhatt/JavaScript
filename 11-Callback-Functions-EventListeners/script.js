 //A callback function is a function passed as an argument to another function, which is then executed later within the receiving function.
 
 setTimeout(function(){
    console.log("timer");
 }, 3000)

 function x(y){
    console.log("x");
    y();
 }

 x(function y(){
    console.log("y");
 }); // here function y is the callback function 

 