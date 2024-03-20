console.log("We are learning about throttle");

// Throttle 
/*
  Throttle is a technique in which, no matter how many times the user fires the event, 
  the attached function will be executed only once in a given time interval.
*/
function throttle(fn, limit) {
  let flag = true; // flag to check if the function is called or not. Good example of closure
  return () => {
    // if flag is false, then return
    // why? because we don't want to execute the function again n again
    if (flag) { 
      fn();
      flag = false; // set flag to false
      // set timeout to true after the given time interval
      // this will allow the function to be called again after the given time interval
      setTimeout(() => {
        flag = true;
      }, limit);
    }
  };
}

function displayData() {
  console.log("Fetching data...");
}

window.addEventListener("resize", throttle(displayData, 1000));
