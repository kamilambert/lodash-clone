const shuffle = (collection) => {
  let length = collection.length
  if (length === 0) {
    return collection
  }
  while (length--) {
    let randomNumber = Math.floor(Math.random() * (length + 1))
    let collectionLength = collection[length]
    let collectionRandomNumber = collection[randomNumber]
    collection[length] = collectionRandomNumber
    collection[randomNumber]
  }
  return collection.length
}

module.exports = shuffle
