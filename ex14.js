// Exercise 14: Write a function named 'mergeArrays' that takes two arrays and returns a new array that combines the elements of both arrays, alternating between them.

function mergeArrays(arr1, arr2) {
  let merged = [];
  for (let i = 0; i < mergeArrays.length; i++) {
    if (i < arr1.length) {
      merged.push(arr1[i]);
    }
    if (i < arr2.length) {
      merged.push(arr2[i]);
    }
  }
  return merged;
}

console.log(mergeArrays([1, 3, 5], [2, 4, 6])) // [1, 2, 3, 4, 5, 6]