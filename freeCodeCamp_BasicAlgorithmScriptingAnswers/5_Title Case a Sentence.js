function titleCase(str) {
  // sets all letters to lowercase, then splits the sentence "str" into an array of individual words.
  str = str.toLowerCase().split(" ");
  
  // loops through the str array of words. 
  for (var i = 0; i< str.length; i++) {
    // splits a word in the array into individual letters.
    str[i] = str[i].split("");
	// selects the first letter in the word and makes it toUpperCase().
    str[i][0] = str[i][0].toUpperCase();
	// joins the individual letters back into a word.
    str[i] = str[i].join("");
  } 
  //joins the individual words back into a sentence.
  str = str.join(" ");
  //returns the full sencence with each word's first letter capitalized.
  return str;
}

titleCase("I'm a little tea pot");