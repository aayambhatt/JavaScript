

function attachEventListener(){

let count = 0;
document.getElementById("clickMe")
.addEventListener("click", function xyz(){
    console.log("Button clicked", ++count);
}); // that function is callback function

}

attachEventListener();