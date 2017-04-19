const nth = (array, nthElement) => {
  if (!array.length) {
    return undefined
  } else if (nthElement < 0) {
    return array[array.length+nthElement]
  } else {
    return array[nthElement]
  }
}

module.exports = nth
