/**
* Removes all given values from array
*/
const pullAll = (array, pulledElements) => {
  for (let j = 0; j < array.length; j++) {
    for (let i = 0; i < pulledElements.length; i++) {
      array.splice(array.indexOf(pulledElements[i]), 1)
    }
  } return array
}

module.exports = pullAll
