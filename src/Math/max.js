/**
*computes max value in array
*/
const max = (array) => {
  let maximum = array[0]
  if (!array.length || !Array) {
    return undefined
  }
  for (let i = 1; i < array.length; i++) {
    if (array[i] > maximum) {
      maximum = array[i]
    }
  }
  return maximum
}

module.exports = max
