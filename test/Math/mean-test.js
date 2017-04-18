let expect = require ('chai').expect
let mean = require ('../../src/Math/mean')

describe('mean()', () => {
  it('computes mean value in array', () => {
    expect(mean([4, 2, 8, 6])).to.deep.equal(5)
    expect(mean([4, 4, 4, 4])).to.deep.equal(4)
    expect(mean([-4, 2, -8, 6])).to.deep.equal(-1)
    expect(mean([])).to.deep.equal(undefined)
    expect(mean({})).to.deep.equal(undefined)
  })
})
