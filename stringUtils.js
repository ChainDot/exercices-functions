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


const stringToReverse = reverseStr("Hello")
const palindromeString = isPalindrome("Hello")


console.log(stringToReverse)
console.log(palindromeString)