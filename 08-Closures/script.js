//A closure is an inner function that remembers variables from its outer scope.


function x(){
    var a = 7;
    function y(){
        console.log(a);
    }
    y();
}
x();