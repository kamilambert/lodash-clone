/**
* Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.
*/
const compact = array => {
  let compactArray = new Array
  if (!array.length) {
    return undefined
  }
  for (i = 0; i < array.length; i++) {
    if (
      array[i] !== false     &&
      array[i] !== null      &&
      array[i] !== 0         &&
      array[i] !== ""        &&
      array[i] !== undefined &&
      array[i] !== NaN
    )
    compactArray.push(array[i])
    console.log(compactArray);
  }
  return compactArray
}

module.exports = compact
