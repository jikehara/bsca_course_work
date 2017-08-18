const testString = 'abcbcababcdbc'

const longestString = (str) => {
  let max = 0, currentString = '', char, pos;

  for (i = 0; i < str.length; i += 1) {
    char = str.charAt(i);
    pos = currentString.indexOf(char);
      if (pos !== -1) {
        currentString = currentString.substr(pos+1)
      }
      currentString += char;
      max = Math.max(max, currentString.length)
  }
  return max;
}

console.log(longestString(testString));
