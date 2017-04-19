/**
*computes mean value in array
*/
const mean = array => {
  let total = 0
  if(!Array.isArray(array) || !array.length) {
    return undefined
  }
  for (let i = 0; i < array.length; i++) {
    total += array[i]
  }
  return total / array.length
}

module.exports = mean
