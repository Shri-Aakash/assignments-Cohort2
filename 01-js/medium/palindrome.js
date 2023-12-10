/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isAlphabet(char){
  const charCode=char.charCodeAt(0);
  return charCode>=97&&charCode<=122;
}
function isPalindrome(str) {
  lowerstr=str.toLowerCase();
  let revStr=[]
  for(let letter of lowerstr)
  {
    if(isAlphabet(letter))
    revStr.push(letter);
  }
  console.log(revStr);
  return revStr.join("")===revStr.reverse().join("");
}

module.exports = isPalindrome;
