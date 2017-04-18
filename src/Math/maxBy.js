const maxBy = array => {
  let maximum = array[0]
  if (array.length === 0 || !Array) {
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
