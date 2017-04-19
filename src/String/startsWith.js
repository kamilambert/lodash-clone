const startsWith = (string, target, position) => {
  if (target === string.charAt(0) || target === string.charAt(position)) {
    return true
  } return false
}

module.exports = startsWith
