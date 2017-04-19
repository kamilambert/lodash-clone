/**
* Creates a slice of array with n elements dropped from the end
*/
const dropRight = (array, size) => {
  let droppedArray = new Array
  if (!array.length) {
    return undefined
  }
  if (size === undefined) {
    array.pop()
    return array
  }
  for (let i = array.length - size - 1; i >= 0; i--) {
    droppedArray.unshift(array[i])
  }
  return droppedArray
}

module.exports = dropRight
