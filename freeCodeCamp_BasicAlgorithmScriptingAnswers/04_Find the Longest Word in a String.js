function findLongestWord(str) {
  // makes the string arg into an array of words via .split(" ").
  str = str.split(" ");
  // creates an empty var "longestWord" that will contain the longest word in the str[].
  var longestWord = "";
  
  // for loop goes through each element in the str[] array comparing str[i] with longestWord and assigning it
  // to longestWord if str[i] is bigger.
  for (var i=0; i<str.length; i++) {
    if (str[i].length > longestWord.length){
      longestWord = str[i];
    }
  }
  
  return longestWord.length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");