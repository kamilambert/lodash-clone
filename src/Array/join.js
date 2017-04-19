const join = (array, connector) => {
  let output = new String
  if (!array.length) {
    return undefined
  }
  for (let i = 0; i < array.length; i++) {
    output += array[i] + connector
  }
  output = output.slice(0,-1)
  return output
}

module.exports = join
