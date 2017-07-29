// Repeat a given string (first argument) num times (second argument). Return an empty string if num is not a positive number.
	//using .repeat(), to repeat a string num times.
function repeatStringNumTimes(str, num) {
  // if num is greater than zero it will repeat the string str and assign it to multiStr, if num is less than zero it returns a empty string.
  if ( num > 0){
    var multiStr = str.repeat(num);
    return multiStr;
  } else {
    return "";
  }
}

repeatStringNumTimes("abc", 3);