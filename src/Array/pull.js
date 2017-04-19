/**
* Removes all given values from array
*/
const pull = (array, value) => {
  let pulledArray = new Array
  if (!array.length) {
    return undefined
  }
  for (i = 0; i < array.length; i++) {
    if (array[i] !== value) {
      pulledArray.push(array[i])
    }
  }
  return pulledArray
}

module.exports = pull
