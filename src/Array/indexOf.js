/**
* Gets the index at which the first occurrence of value is found in array
*/
const indexOf = (array, value) => {
  for(let i = 0; i < array.length; i++) {
    if(value === array[i]) {
      return i
    }
  }
  return -1
}

module.exports = indexOf
