/**
*computes sum value in array
*/
const sum = array => {
  // let total = 0
  if(!Array.isArray(array) || !array.length) {
    return undefined
  }
  return array.reduce((previous, current) => previous + current, 0)
}

module.exports = sum

//   for (let i = 0; i < array.length; i++) {
//     total += array[i]
//   }
//
//   let total = array.map((array) => total += array)
//   return total
// }
