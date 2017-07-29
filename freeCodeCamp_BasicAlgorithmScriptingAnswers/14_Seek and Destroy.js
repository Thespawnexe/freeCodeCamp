/*	"Arguments object" helps when passing a variable amount of arguments. you get the argument via arguments[i], and can find 
	the amount of arguments via arguments.length.
	
	ex: 
	
	function howManyArguments(){
		console.log("there are these many arguments being passed through howManyArguments: " + arguments.length + " and they are: ");
		for (var i=0; i < arguments.length; i++) {
			console.log(arguments[i]);
		}
	}

	howManyArguments([1, "word", false], 100, 43, "pancake");
	
	reference: 
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments
*/

function destroyer(arr) {

  var testArray = arr.slice.call(arguments);
  function isRightValue(value) {
    return testArray.indexOf(value) === -1;
  }  
  
  var filtered = arr.filter(isRightValue);
  
  return filtered;
}


destroyer(["tree", "hamburger", 53], "tree", 53);