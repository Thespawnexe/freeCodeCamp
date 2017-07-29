/* 
Write a function which takes a ROT13 encoded string as input and returns a decoded string.

the last step must be: 

 str = String.fromCharCode(83 - 13, 69 + 13, 82 - 13, 82 - 13, 32 + 0, 80 - 13, 66 + 13, 81 - 13, 82 - 13, 32 + 0, 80 - 13, 78 - 13, 90 - 13, 67 + 13);

for caesars Cipher the 'key' is as follows: 

if its between A-M(65-77): its + 13. 
if its between N-Z(78-90): its - 13.
if its Space: its + 0;

for var str = "F"; 
	var arr = [];

console.log("Step 1: " + str.charAt(0));  // this gets the letter from var str via its index.

console.log("Step 2: " +  str.charAt(0).charCodeAt()); // this makes the letter into the utf number.

console.log("Step 3: " + (str.charAt(0).charCodeAt() + 13)  ); // this add/subtracts the appropriate ammount to utf  value.

console.log("Step 4: " + String.fromCharCode(str.charAt(0).charCodeAt() -13)); //changes utf back to the 'correct' letter.
console.log("Step 5: cant be logged.." + arr.push(String.fromCharCode(str.charAt(0).charCodeAt() -13))); //pushes new letter to an array.

Step 6: var str = arr.join(); // makes the newly created array and turns it into a string.
console.log("Step 7: " + str); // prints the new string with the new letters.

used: String.fromCharCode()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode

used: .charAt()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt

used: array.join, array
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join

final code below: 
*/

function rot13(str) { // LBH QVQ VG!

  var arr = [];

  for (var i=0 ; i<str.length; i++) {
    arr.push(String.fromCharCode(letterChange(str.charAt(i).charCodeAt())));
  }

  str = arr.join("");
  
  function letterChange(letter) {
  if (letter >= 65 && letter <= 77) {
    return letter + 13;
  } else if (letter >= 78 && letter <= 90) {
    return letter - 13;
  } else {
    return letter;
  }
}

  
  return str;
}

// Change the inputs below to test
rot13("LBH QVQ VG!");

