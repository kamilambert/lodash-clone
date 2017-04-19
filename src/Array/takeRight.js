const takeRight = (array, numberOfElements) => {
  if (!array.length) {
    return undefined
  } else if (numberOfElements > array.length) {
    return array
  } else if (numberOfElements === 0) {
    return []
  } else {
    return array.slice(numberOfElements)
  }
}

module.exports = takeRight
