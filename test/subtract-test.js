let expect = require ('chai').expect
let subtract = require ('../src/subtract')

describe('subtract()', () => {
  it('subtract two numbers', () => {
    expect(subtract(10, 5)).to.deep.equal(5)
    expect(subtract(-10, 5)).to.deep.equal(-15)
    expect(subtract(-10, -5)).to.deep.equal(-5)
    expect(subtract(0,0)).to.deep.equal(0)
  })
})
