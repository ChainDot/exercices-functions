
const biggest = (array) => {
  array =  Math.max(...array) 
 return array
  }
 
const sortAscend = (array) => {
  array = array.sort((toto,tata) => toto - tata)
  return array

} 
 const makeUnique = (array) => {
  let uniqueArray = []
  for( let i = 0; i< array.length; i++){
    if(uniqueArray.indexOf(array[i]) === -1) { // return -1 if the search value can't be found
      uniqueArray.push(array[i]);
    }
  }
  return uniqueArray
}
  
 

const array = [99, 100, 101, 1]
const array2 = [1, 2, 1, 3, 2, 4, 5, 7, 5, 1]

maxNb = biggest(array)
orderNb = sortAscend(array)
orderUniqueNb = makeUnique(array2)

console.log(maxNb)
console.log(orderNb)
console.log(orderUniqueNb)
