const take = (array, numberOfElements) => {
  if (!array.length) {
    return undefined
  }
  return array.slice(0 ,numberOfElements)
}

module.exports = take
