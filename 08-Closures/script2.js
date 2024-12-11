// Outer function `z` is defined
function z() {
    var b = 800; // `b` is a variable in the scope of function `z`
    
    // Middle function `x` is defined inside `z`
    function x() {
        var a = 7; // `a` is a variable in the scope of function `x`
        
        // Inner function `y` is defined inside `x`
        function y() {
            // `y` accesses variables `a` (from `x`) and `b` (from `z`) due to closures
            console.log(a, b); // This demonstrates that `y` has access to both `a` and `b`
        }
        
        y(); // Call the innermost function `y`
    }
    
    x(); // Call the middle function `x`, which in turn calls `y`
}

// Call the outermost function `z`
// This starts the chain of function calls and demonstrates closures in action
z();
