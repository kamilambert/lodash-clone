/**
* Reverses array so that the first element becomes the last, the second element becomes the second to last, and so on.
*/
const reverse = array => {
  let reversedArray = new Array;
  if (!array.length) {
    return undefined
  }
  for (let i = array.length-1; i >= 0; i--) {
    reversedArray.push(array[i])
  }
  return reversedArray
}

module.exports = reverse
