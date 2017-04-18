let slice = (array, start, end) => {
  let origArray = array,
      slicedArray = []
  for(let i = origArray[start-1]; i < end; i++) {
    slicedArray.push(origArray[i])
  }
  return slicedArray
}

module.exports = slice
