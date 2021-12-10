// ============================
// setTimeout(handler, time)
// ============================

// Example 0
setTimeout(() => { console.log('1000 ms passed!') }, 1000);

// This works
setTimeout(myTimeHandler, 2000);
function myTimeHandler() { console.log('2000 ms passed!') }

// This does not work
setTimeout(myTimeHandler2(3), 3000);
function myTimeHandler2(t) { console.log(t+'000 ms passed!') }

// Example 1 - Recursive
setTimeout(myTimerSecond, 1000);
var second = 1; 
var second_stopAt = 15;
function myTimerSecond() {
  document.getElementById("text").innerHTML = second;
  second = second + 1;
  if (second < second_stopAt + 1) {
    setTimeout(myTimerSecond, 1000);
  }
}

// Example 2 - decimal second
var dSec = 1, sec = 0;
stopAt = 9.6;
setTimeout(myTimerDecimalSecond, 100);
function myTimerDecimalSecond() {	
  dSec = dSec + 1;
  if (dSec > 9) {
    dSec = 0;
    sec = sec + 1;
  }
  if(10*sec + dSec < 10*stopAt){
    setTimeout(myTimerDecimalSecond, 100);
  }
  document.getElementById("text-second").innerHTML = sec;
  document.getElementById("text-decimal-second").innerHTML = dSec;
  document.getElementById("text-decimal-second").style.fontSize = 
    16 + 2*dSec + 'px';
}

// Example 3 - centi second
var e3CentiSec = 1, e3Sec = 0;
e3StopAt = 9.68;
setTimeout(myTimerCentiSecond, 10);
function myTimerCentiSecond() {	
  e3CentiSec = e3CentiSec + 1;
  if (e3CentiSec > 99) {
    e3CentiSec = 0;
    e3Sec = e3Sec + 1;
  }
  if(100*e3Sec + e3CentiSec < 100*e3StopAt){
    setTimeout(myTimerCentiSecond, 10);
  }
  document.getElementById("e3-second").innerHTML = e3Sec;
  document.getElementById("e3-centi-second").innerHTML = e3CentiSec;
}