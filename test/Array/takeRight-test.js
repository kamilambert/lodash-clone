let expect = require ('chai').expect
let takeRight = require ('../../src/Array/takeRight')

describe('takeRight()', () => {
  it('Creates a slice of array with n elements taken from the end.', () => {
    expect(takeRight([1, 2, 3], 2)).to.deep.equal([3])
    expect(takeRight([1, 2, 3], 5)).to.deep.equal([1, 2, 3])
    expect(takeRight([1, 2, 3], 0)).to.deep.equal([])
    expect(takeRight(['1', '2', '3'], 2)).to.deep.equal(['3'])
    expect(takeRight(['1', '2', '3'])).to.deep.equal(['1', '2', '3'])
    expect(takeRight([])).to.deep.equal(undefined)
  })
})
