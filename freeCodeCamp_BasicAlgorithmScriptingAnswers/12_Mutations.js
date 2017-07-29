/* 
Return true if the string in the first element of the array 
contains all of the letters of the string in the second element of the array.

*/


function mutation(arr) {
  //assign the two array elements to str variables and turns the string into lowercase(if needed).
  var str1 =arr[0].toLowerCase();
  var str2 = arr[1].toLowerCase();
  // counter variable to add one tick everytime a letter in str2 is found in str1.
  var count = 0;
  /* for loop that goes through each letter in var str2 (via .charAt(i)) and checks whether at least one of said letters
  is contained withing var str1. If a match is found var count goes up by one.
  */
  for (var i = 0; i < str2.length; i++) {
    /* When a character in str2 does not equal to -1 (0 or greater) via .indexOf(), we find 
	that at least one instance of the character exists within str1 and we add one to var count.
	*/
	if (str1.indexOf(str2.charAt(i)) !== -1) {
      count++;
    }
    console.log(count);
  }
  // if count is equal to the length of str2, it means that all letters in str2 where found in st1 at least once. 
  if (count === str2.length) {
    return true;
  } else {
    return false;
  }
}

mutation(["hello", "hey"]);