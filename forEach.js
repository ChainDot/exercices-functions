 const capitalize = (array) => {
  return array.toUpperCase()
}
const fnEach = (array) => {
  return  'fn applied to ' + array  
}


const foreach = (fn, array) => {
 for( let i = 0; i < array.length; i++){
    console.log(fn(array[i])) 
  }
 
}


const array1 = ['a', 'b', 'c'];


foreach(fnEach, array1)



