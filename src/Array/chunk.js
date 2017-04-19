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
