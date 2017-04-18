let chunk = (array, size) => {
  let oldArray = array
  let sizeArray = []
  let remArray = []
  for(let i = 0; i < size; i++) {
    sizeArray.push(oldArray[i])
  }
  for(let i = size; i < oldArray.length; i++) {
    remArray.push(oldArray[i])
  }
  if(size === 0){
    return 'error'
  } else {
    return [
      sizeArray,
      remArray
    ]
  }
}

module.exports = chunk
