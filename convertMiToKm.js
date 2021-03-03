const convertMiToKm = (nb) => {
  nb *= 1.600934
  return nb
}
let nb = 10 // distance in miles to convert to Km
nbToConvert = convertMiToKm(nb)

console.log(`${nb} miles is equal to ${nbToConvert} Km`)