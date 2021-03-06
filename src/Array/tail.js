/**
* Gets all but the first element of array.
*/
const tail = array => {
  if (!array.length) {
    return undefined
  } else {
    return array.slice(1)
  }
}

module.exports = tail
