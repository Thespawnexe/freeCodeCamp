/* 
Return the remaining elements of an array after chopping off n elements from the head.
*/

/* starting at the head (zeroth index) I cut (splice) var arr by an amount equal to var howMany 
then return the remaining items(if any) in var arr. 
*/

function slasher(arr, howMany) {
  arr.splice(0 , howMany);
  return arr;
}

slasher([1, 2, 3], 2);