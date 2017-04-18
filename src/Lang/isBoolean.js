const isBoolean = value => {
  if (
    value === undefined ||
    value === null      ||
    value === NaN       ||
    value === 0         ||
    value === ''        ||
    value === false
  ) {
    return false
  } else {
    return true
  }
}

module.exports = isBoolean
