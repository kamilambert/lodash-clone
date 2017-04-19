/**
*Removes leading and trailing whitespace or specified characters from string.
*/
const trim = (string, characters) => {
  if (!characters) {
    let trimmedString = string.replace(/ /g,"")
    return trimmedString
  } else {
    let regExpression = new RegExp(characters, "g")
    let trimmedCharacters = string.replace(regExpression, "")
    return trimmedCharacters
  }
}

module.exports = trim
