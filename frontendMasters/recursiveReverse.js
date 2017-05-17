// Write a function that takes an array and uses recursion to return its contents in reverse

var recursiveReverse = function(arr) {
  var reversedArr = [] // this is a closure variable
  var addItems = function(orderedArr){
    if (orderedArr.length > 0) {
      reversedArr.push(orderedArr.pop())
      addItems(orderedArr);
    }
    return;
  }
  addItems(arr)
  return reversedArr
}
