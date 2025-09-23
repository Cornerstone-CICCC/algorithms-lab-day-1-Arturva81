function longestWord(text) {
  let words = text.split(' ');
    let longest = '';
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longest.length) {
            longest = words[i];
        }
    }
    return longest;
}

console.log(longestWord('The duck loves bananas and grapes')) // 'bananas'