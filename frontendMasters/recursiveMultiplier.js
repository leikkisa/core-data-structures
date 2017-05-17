// Write a function that takes two arguments, arr and num, and multiplies each arr value by num, and returns and array of the values

var recursiveMultiplier = function (arr, num) {
  var multipliedArray = []
  var multiply = function(){
    if(arr.length > 0) {
      multipliedArray.push(arr.shift() * num)
      multiply()
    }
    return;
  }
  multiply()
  return multipliedArray;
}
