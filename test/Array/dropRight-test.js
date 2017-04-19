let expect = require ('chai').expect
let dropRight = require ('../../src/Array/dropRight')

describe('dropRight()', () => {
  it('Creates a slice of array with n elements dropped from the end.', () => {
    expect(dropRight([1, 2, 3], 2)).to.deep.equal([1])
    expect(dropRight([1, 2, 3], 5)).to.deep.equal([])
    expect(dropRight([1, 2, 3], 0)).to.deep.equal([1, 2, 3])
    expect(dropRight([1, 2, 3])).to.deep.equal([1, 2])
  })
})
