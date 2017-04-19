/**
* Performs a deep comparison between two values to determine if they are equivalent.
*/
const isEqual = (value, other) => {
  if (value === other) {
    return true
  } else {
    return false
  }
}

module.exports = isEqual
