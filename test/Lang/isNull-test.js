let expect = require ('chai').expect
let isNull = require ('../../src/Lang/isNull')

describe('isNull()', () => {
  it('isNulls two numbers', () => {
    expect(isNull(null)).to.deep.equal(true)
    expect(isNull(4)).to.deep.equal(false)
    expect(isNull('hello')).to.deep.equal(false)
    expect(isNull([])).to.deep.equal(false)
    expect(isNull(NaN)).to.deep.equal(false)
  })
})
