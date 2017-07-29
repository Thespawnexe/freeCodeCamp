/*

- will take care of any string where str.length === num.
	newStr = str.slice(0 , num); 
- will take care of any string where str.length > num.
	newStr = str.slice(0 , num - dots.length) + dots;
- will take care of any string where  num <= 3
	 newStr = str.slice(0 , num) + dots;
*/

function truncateString(str, num) {

  var newStr = "";
  var dots = "...";
  
  if ( num <= 3) {
  newStr = str.slice(0 , num) + dots;
  } else if (str.length > num) {
  newStr = str.slice(0 , num - dots.length) + dots;
  } else {
  newStr = str.slice(0 , num);
  }
  return newStr;
}
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length);