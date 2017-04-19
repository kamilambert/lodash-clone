const initial = array => {
  let initialArray = []
  if (!array.length) {
    return undefined
  }
  for (i = 0; i < array.length - 1; i++) {
    initialArray.push(array[i])
  }
  return initialArray
}

module.exports = initial
