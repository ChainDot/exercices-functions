const pyramid = (nb, reverse, str) => {
  let star = ''
  if (!reverse) {
    for (let i= 1; i <= nb; ++i) {
      star += str.repeat(i)
      if (i !== nb) {
        star += '\n'
      }
    }
  } else {
    for (let i = nb; i>= 1; --i){
      star += str.repeat(i)
      if (i !== 1){
        star += "\n"
      }
    }
  }
  return star
}

let shape = pyramid(16, false, 'A')

console.log(shape)