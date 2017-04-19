/**
*Checks if string starts with the given target string
*/
const startsWith = (string, target, position) => {
  if (target === string.charAt(0) || target === string.charAt(position)) {
    return true
  } return false
}

module.exports = startsWith
