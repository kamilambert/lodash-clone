/**
*computes min value in array
*/
const min = array => {
  let minimum = Infinity
  if (!array.length || !Array.isArray(array)) {
    return undefined
  }
  for (let i = 0; i < array.length; i++) {
    if (array[i] < minimum) {
      minimum = array[i]
    }
  }
  return minimum
}

module.exports = min
