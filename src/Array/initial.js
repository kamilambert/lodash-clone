/**
* Gets all but last element of array
*/
const initial = array => {
  let initialArray = new Array
  if (!array.length) {
    return undefined
  }
  for (i = 0; i < array.length - 1; i++) {
    initialArray.push(array[i])
  }
  return initialArray
}

module.exports = initial
