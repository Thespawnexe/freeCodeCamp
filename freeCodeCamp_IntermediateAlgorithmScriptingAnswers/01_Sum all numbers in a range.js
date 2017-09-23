function sumAll(arr) {
  
  var largest = Math.max(...arr);
  var smallest = Math.min(...arr);
  console.log(largest);
  console.log(smallest);
  var result = 0;
  
  for (i = smallest; i <= largest; i++) {
    result = i + result;
  }
  console.log("total is: " + result);
  return result;
}

sumAll([1, 4]);