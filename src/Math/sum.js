/**
*computes sum value in array
*/
const sum = array => {
  let total = 0
  if(!Array.isArray(array) || !array.length) {
    return undefined
  }
  for (let i = 0; i < array.length; i++) {
    total += array[i]
  }
  return total
}

module.exports = sum
