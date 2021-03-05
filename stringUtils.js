const reverseStr = (str) => {
 str = str.split('').reverse().join('')
 return str
}

const  isPalindrome = (str) =>{
  result = ""
  if(str === reverseStr(str)){
    return true
  } else {
    return false
  }
  return result
}


const stringToReverse = reverseStr("Hello")
const palindromeString = isPalindrome("adda")


console.log(stringToReverse)
console.log(palindromeString)