let expect = require ('chai').expect
let isBoolean = require ('../../src/Lang/isBoolean')

describe('isBoolean()', () => {
  it('isBooleans two numbers', () => {
    expect(isBoolean(4)).to.deep.equal(true)
    expect(isBoolean(true)).to.deep.equal(true)
    expect(isBoolean(null)).to.deep.equal(false)
    expect(isBoolean([])).to.deep.equal(true)
    expect(isBoolean(false)).to.deep.equal(false)
  })
})
