let expect = require ('chai').expect
let max = require ('../../src/Math/max')

describe('max()', () => {
  it('computes max value in array', () => {
    expect(max([4, 2, 8, 6])).to.deep.equal(8)
    expect(max([-4, -2, -8, -6])).to.deep.equal(-2)
    expect(max([])).to.deep.equal(undefined)
    expect(max({})).to.deep.equal(undefined)
  })
})
