const add = (p1 , p2) => {
  let total = p1 + p2
 return total;
}
const sub = (p1 , p2) => {
 let total = p1 - p2
 return total
}

const mul = (p1, p2) => {
  let total = p1 * p2
  return total
}

const div = (p1, p2) => {
  let total = p1 / p2
  return total
}

const calc = (index, p1, p2) => {
 if(index === '+'){
  return  add(p1, p2)
 } else if( index === '-'){
  return sub(p1, p2)
 } else if( index === '*'){
   return mul(p1, p2)
 } else if( index === '/'){
   return div(p1,p2)
 }
  
}

let resultAdd = add(2 , 'x2') // sum of 2 parameters
let resultSub = sub(2, 3) // substraction of 2 parameters
let resultMul = mul( 2 , 3) // Multiplication of 2 parameters
let resultDiv = div( 2 , 3) // Division of 2 parameters
let resultCalc = calc('+', 2, 3)

console.log(resultAdd)
console.log(resultSub)
console.log(resultMul)
console.log(resultDiv)
console.log(resultCalc)