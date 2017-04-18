let indexOf = (array, value) => {
  let compareArray = array
  for(let i = 0; i < compareArray.length; i++) {
    if(value === compareArray[i]) {
      return i
    }
  }
  return -1
}

module.exports = indexOf
