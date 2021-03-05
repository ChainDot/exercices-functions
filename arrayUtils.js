
const biggest = (array) => {
  return array =  Math.max(...array) 
  }

const biggest2 = (array) => {
  let Max = array[0]
  for(let i = 0; i < array.length; i++){
    if(array[i] > Max){
     Max = array[i]
    } 
  }
  return Max
}  
 
const sortAscend = (array) => {
  return array.sort((toto,tata) => toto - tata)
} 

const sortAscend2 = (array) => {
  let newArray = []
    for(let i = 0; i < array.length; i++)
    if(array[i]+1 > array[i]){
      newArray.push(array[i])
    }
  return newArray
}
 
const makeUnique = (array) => {
  let uniqueArray = [] // new empty array
  for( let i = 0; i< array.length; i++){
    if(uniqueArray.indexOf(array[i]) === -1) { // return -1 if the search value can't be found
      uniqueArray.push(array[i]); // push unique number into new array
    }
  }
  return uniqueArray
}
  
 

const array = [99, 100, 101, 98 , 1, 1001]
const array2 = [1, 2, 1, 3, 2, 4, 5, 7, 5, 1]

const maxNb = biggest(array)
const maxNb2 = biggest2(array)
const orderNb = sortAscend(array)
const orderNb2 = sortAscend2(array)
const orderUniqueNb = makeUnique(array2)

console.log(maxNb)
console.log(maxNb2)
console.log(orderNb)
console.log(orderNb2)
console.log(orderUniqueNb)


