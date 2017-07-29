/* Write a function that splits an array (first argument) into groups the length of 
size (second argument) and returns them as a two-dimensional array. */

function chunkArrayInGroups(arr, size) {
  // creates an empty array where i will store the array "segments" extracted from var arr.
  var mainArray = [];
  // while the length of var arr is greater than zero code will chop off the var size given, starting at index 0 of the var arr.
  while (arr.length > 0) {
    mainArray.push(arr.splice(0, size));
  }
  return mainArray;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);