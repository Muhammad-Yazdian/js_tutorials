// Part 1 - setTimeout(handler, time)
setTimeout(() => { console.log('1000 ms passed!') }, 1000);

// This works
setTimeout(myTimeHandler, 2000);
function myTimeHandler() { console.log('2000 ms passed!') }

// This does not work
setTimeout(myTimeHandler2(3), 3000);
function myTimeHandler2(t) { console.log(t+'000 ms passed!') }

// Part 2 - Recursive
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

// Part 3 - decimal second
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