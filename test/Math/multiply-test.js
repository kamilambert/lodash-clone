let expect = require ('chai').expect
let multiply = require ('../../src/Math/multiply')

describe('multiply()', () => {
  it('multiply two numbers', () => {
    expect(multiply(4,6)).to.deep.equal(24)
    expect(multiply(-10,5)).to.deep.equal(-50)
    expect(multiply(0,0)).to.deep.equal(0)
    expect(multiply(-2,-3)).to.deep.equal(6)
  })
})
