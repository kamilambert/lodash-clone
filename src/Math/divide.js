/**
*divides two numbers
*/
const divide = (x,y) => !y ? 'error' : x / y

module.exports = divide

// This was our original answer before refactoring!
// const divide = (x,y) => {
//   let result = x / y
//   if(y === 0) {
//     return'error'
//   } else {
//     return result
//   }
// }
