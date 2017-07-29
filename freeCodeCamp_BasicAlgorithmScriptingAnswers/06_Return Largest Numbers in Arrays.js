function largestOfFour(arr) {
  //created empty array to store the largest number found within an array.
  var mainArr = [];
  
  // created for loop to .push() the largest number found within its array.
  for (var i=0; i <arr.length; i++){
    
	mainArr.push(biggestNum(arr[i]));
  }
  return mainArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);


// Created a function that accepts an array and returns the largest number inside of said array.
function biggestNum(arr) {
  // largestNum is initialized to 0, eventually to contain the largest number in the array we are iterating on.
  var largestNum = 0;
  // for loop will look at each value of the arr argument and compare with largestNum to find the largest number in said array.	
  for (var i=0; i < arr.length; i++) {
	// if largestNum is smaller than the value of arr[i], largestNum will be equal to arr[i].
    if (arr[i] > largestNum){
      largestNum = arr[i];
    } 

  }
  return largestNum;
}

/*

	- pushing an array into an empty array will create another array within. 
		meaning: arr.push(num); will be [ [ 4, 5, 5 ] ], NOT [ 4, 5, 5 ]
	- I can only push individual values to an array, not full arrays. ex: arr = arr.push(num); will return "1", not the value of the array "num"
	- to push the full contents of one array to another each term needs to be added individually via a for loop.
		ex: 
		var num = [4, 5, 5];
		var arr = [];
		
		This is:
		
		for (var i=0; i<num.length;i++) {
			arr.push(num[i]);
		}
		
		Equal to: [ 4, 5, 5 ]
		
		This is:
		
		arr = arr.push(num); // tells me how many arrays are in arr
		
		Equal to: 1
		
		This is: 
		
		arr.push(num); // pushes full num array into arr[0].
		
		Equal to: [ [ 4, 5, 5 ] ]
	
		.push() can push multiple arrays/values via: 
			arr.push(num, num2, abc);
		
		
		
*/