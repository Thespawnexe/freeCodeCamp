// Goal is to Check if a string (first argument, str) ends with the given target string (second argument, target).


function confirmEnding(str, target) {
  // I used substring() to select the starting point of the substring comparision.
  // ex: str.length = 20 and target.length = 5, substring selection would start at 15 and count the last 5 characters.
  var strPortion = str.substring(str.length - target.length); 
  
  // if/else compares strPortion with target and returns true if they are the same or false if they are different.
  if (strPortion === target) {
    return true;  
  } else {
    return false;
  }
}

confirmEnding("Bastian", "n");