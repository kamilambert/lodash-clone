let expect = require ('chai').expect
let isEqual = require ('../../src/Lang/isEqual')

describe('isEqual()', () => {
  it('isEquals two numbers', () => {
    expect(isEqual(4, 4)).to.deep.equal(true)
    expect(isEqual('4', 4)).to.deep.equal(false)
    expect(isEqual('4', '4')).to.deep.equal(true)
    expect(isEqual(NaN, NaN)).to.deep.equal(false)
    expect(isEqual(false, 0)).to.deep.equal(false)
  })
})
