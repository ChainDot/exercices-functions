const forEach = (array) => {
  let copyArray = []
  for(i=0; i < array.length; i++){
    copyArray.push(array[i])
  }
  return copyArray
}
const array1 = ['a', 'b', 'c']

let res = forEach.array1

console.log(res)