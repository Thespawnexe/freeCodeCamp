/* need to understand .filter() and Falsy Bouncer more, why it filters all falsy values... 
   ...and more info: .filter() calls a provided callback function once per each element on the provided array.
   then returns and creates a new array with any item that is a truly. if something doesn't come back as true, it doesn't get 
   added to the new array.

   how filter works.
   
   - set up: you have an array "arr" and you pass through filter. "arr.filter()". This will go through each index in "arr"
   - you pass a 'test function' through filter, the one that performs the test case.
   - arr.filter(testCase), then returns and creates an array with all values that were true.
   
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter?v=control



*/


function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  var allTruly  = arr.filter(noFalsy);
 
  function noFalsy(element) {
    return ( element);
  }
  return allTruly;
}

bouncer([false, null, 0, NaN, undefined, ""]);