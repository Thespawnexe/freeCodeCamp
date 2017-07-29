/*
Return the lowest index at which a value (second argument) should be inserted into an array (first argument) 
once it has been sorted. The returned value should be a number. 

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
*/



function getIndexToIns(arr, num) {
  // add num to arr, then sort arr, then get the indexof num within the array.
  
  //var numSpot = num;
  console.log(arr);
  arr.push(num);
  console.log(arr);
  arr.sort(function(a,b){
    return a - b;
  });
  console.log(arr);
  num = arr.indexOf(num);
  return num;
}

getIndexToIns([40, 60], 50);