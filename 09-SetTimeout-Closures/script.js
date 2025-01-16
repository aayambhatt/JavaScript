function x(){
    var i = 5;

    setTimeout(function (){
        console.log(i);
    },2000);

    console.log("Hello World!");
}

x();
// first hello world gets printed, then after 2 sec, i gets printed. JavaScript waits for nothing. 
 