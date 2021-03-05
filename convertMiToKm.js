const RATIO = 1.600934

const convertMiToKm = (nb) => {
  return nb *= RATIO
}

let nb = 0.2 // distance in miles to convert to Km
nbToConvert = convertMiToKm(nb)

console.log(`${nb} miles is equal to ${nbToConvert} Km`)