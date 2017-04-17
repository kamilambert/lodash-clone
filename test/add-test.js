let expect = require ('chai').expect
let add = require ('../src/add')

describe('add()', () => {
  it('adds two numbers', () => {
    expect(add(4,6)).to.deep.equal(10)
    expect(add(-10,5)).to.deep.equal(-5)
    expect(add(0,0)).to.deep.equal(0)
    expect(add(-2,-3)).to.deep.equal(-5)
  })
})
