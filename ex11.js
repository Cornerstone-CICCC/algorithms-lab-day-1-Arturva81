// Exercise 11: Write a function named 'reverseWords' that takes a string of text and returns the string with the order of the words reversed.

function reverseWords(text) {
  let splitText = text.split(' ');
  let reversed = [];
  for (let i = splitText.length - 1; i >= 0; i--) {
    reversed.push(splitText[i]);
  }
  return reversed.join(' ');
}

console.log(reverseWords('The quick brown fox')) // 'fox brown quick The'