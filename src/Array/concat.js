/**
* Creates a new array concatenating array with any additional arrays and/or values.
*/
const concat = (...arguments) => {
  let concatenatedArray = []
    for (let i = 0; i < arguments.length; i++){
      if (Array.isArray(arguments[i])){
        for (let j = 0; j < arguments[i].length; j++){
          concatenatedArray.push(arguments[i][j])
        }
      } else if (!Array.isArray(arguments[i])){
          concatenatedArray.push(arguments[i])
      }
    }
  return concatenatedArray
}

module.exports = concat
