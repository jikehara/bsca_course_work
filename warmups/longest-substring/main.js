const testString = 'abcbcababcdbc'

const longestString = (string) => {
  let stringArray = string.split('');
  let tempLongest1 = [];
  let tempLongest2 = [];
  for (let i=0; i<stringArray.length; i+=1) {
    if (tempLongest1.indexOf(stringArray[i]) === -1) {
      tempLongest1.push(stringArray[i]);
      if (tempLongest1.length > tempLongest2.length) {
        tempLongest2 = tempLongest1
      }
    }
    else {
      tempLongest1 = [stringArray[i]];
    }
  }
  return tempLongest2;
}

console.log(longestString(testString));
