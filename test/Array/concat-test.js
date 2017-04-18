let expect = require ('chai').expect
let concat = require ('../../src/Array/concat')

describe('concat()', () => {
  it('Gets the index at which the first occurrence of value is found in array', () => {
    expect(concat([1], 2, [3], [[4]])).to.deep.equal([1, 2, 3, [4]])
  })
})
