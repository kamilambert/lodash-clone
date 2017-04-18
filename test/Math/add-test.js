let expect = require ('chai').expect
let _add = require ('../src/Math/add')

describe('_add()', () => {
  it('adds two numbers', () => {
    expect(_add(4,6)).to.deep.equal(10)
    expect(_add(-10,5)).to.deep.equal(-5)
    expect(_add(0,0)).to.deep.equal(0)
    expect(_add(-2,-3)).to.deep.equal(-5)
  })
})
