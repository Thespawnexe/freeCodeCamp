function palindrome(str) {
 
  // .toLowerCase() removes all uppercase letters from 'str.' then .replace(/[^a-z0-9]/g, "") removes all non-alpha numeric chars from str via regular expressions.
  
  str = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  
  // splits, reverses then rejoins the str so we can check whether its a palindrome or not.
  var inverseStr = str.split("").reverse().join("");

  // checks whether str and inverseStr are equal, and therefore a palindrome.
  if ( str === inverseStr){
    return true;
  } else {
    return false;
  }
}

palindrome("eyeE");