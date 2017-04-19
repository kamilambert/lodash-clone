let expect = require ('chai').expect
let take = require ('../../src/Array/take')

describe('take()', () => {
  it('Creates a slice of array with n elements taken from the beginning.', () => {
    expect(take([1, 2, 3], 2)).to.deep.equal([1, 2])
    expect(take([1, 2, 3], 5)).to.deep.equal([1, 2, 3])
    expect(take([1, 2, 3], 0)).to.deep.equal([])
    expect(take(['1', '2', '3'], 2)).to.deep.equal(['1', '2'])
    expect(take(['1', '2', '3'])).to.deep.equal(['1', '2', '3'])
    expect(take([])).to.deep.equal(undefined)
  })
})
