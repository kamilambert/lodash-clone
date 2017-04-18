const divide = (x,y) => {

  let result = x / y
  if(y === 0) {
    return'error'
  } else {
    return result
  }
}

module.exports = divide
