const slice = (array, start, end) => {
  let slicedArray = new Array
  for(let i = array[start-1]; i < end; i++) {
    slicedArray.push(array[i])
  }
  return slicedArray
}

module.exports = slice
