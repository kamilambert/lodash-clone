let expect = require ('chai').expect
let concat = require ('../../src/Array/concat')

describe('concat()', () => {
  it('Creates a new array concatenating array with any additional arrays and/or values.', () => {
    expect(concat([1], 2, [3], [[4]])).to.deep.equal([1, 2, 3, [4]])
  })
})
