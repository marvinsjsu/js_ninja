/**
  Code for logging across all browsers
  - first tries to run console.log function, if in old Opera
    this fails, so we run Opera's postError function.  If all
    else fails, then we call the alert function
*/

function log() {
  try {
    console.log.apply(console, arguments);
  } catch(e) {
    try {
      opera.postError.apply(opera, arguments);
    } catch(e) {
      alert(Array.prototype.join.call(arguments, " "));
    }
  }
}
