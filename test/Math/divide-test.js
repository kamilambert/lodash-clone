let expect = require ('chai').expect
let divide = require ('../../src/Math/divide')

describe('divide()', () => {
  it('divide two numbers', () => {
    expect(divide(10,5)).to.deep.equal(2)
    expect(divide(-10,5)).to.deep.equal(-2)
    expect(divide(0,0)).to.deep.equal('error')
    expect(divide(-20,-10)).to.deep.equal(2)
  })
})
