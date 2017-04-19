const pullAt = (array, pulledIndex) => {
  let pulledAt = new Array
  if (!array.length) {
    return undefined
  }
  for (i = 0; i < pulledIndex.length; i++) {
    pulledAt.push(array[pulledIndex[i]])
  }
  return pulledAt
}

module.exports = pullAt
