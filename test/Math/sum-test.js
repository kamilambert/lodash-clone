let expect = require ('chai').expect
let sum = require ('../../src/Math/sum')

describe('sum()', () => {
  it('computes sum value in array', () => {
    expect(sum([4, 2, 8, 6])).to.deep.equal(20)
    expect(sum([4, 4, 4, 4])).to.deep.equal(16)
    expect(sum([-4, 2, -8, 6])).to.deep.equal(-4)
    expect(sum([])).to.deep.equal(undefined)
    expect(sum({})).to.deep.equal(undefined)
  })
})
