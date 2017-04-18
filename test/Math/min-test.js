let expect = require ('chai').expect
let min = require ('../../src/Math/min')

describe('min()', () => {
  it('computes min value in array', () => {
    expect(min([4, 2, 8, 6])).to.deep.equal(2)
    expect(min([-4, -2, -8, -6])).to.deep.equal(-8)
    expect(min([])).to.deep.equal(undefined)
    expect(min({})).to.deep.equal(undefined)
  })
})
