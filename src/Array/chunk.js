/**
 * Creates an array of elements split into groups of length size. If array cannot be split evenly, the final chunk will be the remaining elements.
 */
const chunk = (array, size) => {
  let sizeArray = new Array,
      remainderArray = new Array
  for(let i = 0; i < size; i++) {
    sizeArray.push(array[i])
  }
  for(let i = size; i < array.length; i++) {
    remainderArray.push(array[i])
  }
  if(size === 0){
    return 'error'
  } else {
    return [
      sizeArray,
      remainderArray
    ]
  }
}

module.exports = chunk
