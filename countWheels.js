

const countWheels = (nb_monocycle, nb_moto, nb_voiture, nb_limousine) =>{
  let monoWheel = 1
  let motoWheel = 2
  let voitureWheel = 4
  let limousine = 6
  
  let totalWheels = ((monoWheel*nb_monocycle)+(motoWheel*nb_moto)+(voitureWheel*nb_voiture)+(limousine*nb_limousine))
  return totalWheels
}

let totalWheels = countWheels(2, 3, 4, 5)


console.log(totalWheels)