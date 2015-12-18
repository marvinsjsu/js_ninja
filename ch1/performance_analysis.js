/*
  Code to help with performance analysis
  - get the time elapsed for a function to complete running
    a specified number of times
**/

// number of times we run the function
maxCount = 100;

// get time now
start = new Date().getTime();

for (var n = 0; n < maxCount; n++) {
  // insert function to be measured here
}

elapsed = new Date().getTime() - start;
assert(true, "Measured time: " + elapsed);
