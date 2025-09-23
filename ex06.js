// Exercise 6: Write a function named 'uniqueValues' that takes an array of values and returns a new array with only unique values, removing duplicates.

function uniqueValues(arr) {
  let uniqueValues = [];
  for (let i = 0; i < arr.length; i++){
    let isUnique = true;
    for (let x = 0; x < uniqueValues.length; x++) {
      if (arr[i] === uniqueValues[x]){
        isUnique = false;
        }
      }
    if (isUnique === true){
      uniqueValues.push(arr[i])
    }
  }
  return uniqueValues;
}

console.log(uniqueValues([1, 2, 2, 3, 4, 4, 5])) // [1, 2, 3, 4, 5]