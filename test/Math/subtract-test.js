let expect = require ('chai').expect
let _subtract = require ('../src/Math/subtract')

describe('_subtract()', () => {
  it('subtract two numbers', () => {
    expect(_subtract(10, 5)).to.deep.equal(5)
    expect(_subtract(-10, 5)).to.deep.equal(-15)
    expect(_subtract(-10, -5)).to.deep.equal(-5)
    expect(_subtract(0,0)).to.deep.equal(0)
  })
})
