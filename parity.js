const isOdd = (nb) => {
  str = ""
  if( !(nb % 2 === 0)){
    return true
  } else {
    return false
  }
  return str
}

const isEven = (nb) => {
  str= ""
  if( isOdd(nb) === false){
    return true
  } else {
    return false
  }
  return str
}

let nbOdd = isOdd(3)
let nbEven = isEven(4)

console.log(nbOdd)
console.log(nbEven)