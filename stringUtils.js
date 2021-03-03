const reverseStr = (str) => {
 str = str.split('').reverse().join('')
 return str
}

const  isPalindrome = (str) =>{
  result = ""
  if(str === str.split('').reverse().join('')){
    return true
  } else {
    return false
  }
  return result
}


stringToReverse = reverseStr("Hello")
palindromeString = isPalindrome("lol")
console.log(stringToReverse)
console.log(palindromeString)