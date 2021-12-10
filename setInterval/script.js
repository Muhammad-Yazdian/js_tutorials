// =============================
// setInterval(handler, timeout)
// =============================

// window.setInterval(function, milliseconds);

var myVar = setInterval(myFunction, 1000);

function myFunction(){
    var date = new Date();
    document.getElementById("date").innerHTML = date.toLocaleTimeString();
}